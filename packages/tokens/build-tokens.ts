import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, "dist");

type TokenDomain = "colors" | "typography" | "spacing" | "effects";

const domains: TokenDomain[] = ["colors", "typography", "spacing", "effects"];

function parseRootVariables(css: string) {
  const rootMatch = css.match(/:root\s*\{([\s\S]*?)\}/);
  if (!rootMatch) {
    return {};
  }

  const variableRegex = /--([\w-]+)\s*:\s*([^;]+);/g;
  const tokens: Record<string, string> = {};
  let match = variableRegex.exec(rootMatch[1]);

  while (match) {
    tokens[match[1]] = match[2].trim();
    match = variableRegex.exec(rootMatch[1]);
  }

  return tokens;
}

async function loadDomainTokens(domain: TokenDomain) {
  const css = await readFile(path.join(__dirname, `${domain}.css`), "utf8");
  return parseRootVariables(css);
}

async function main() {
  await mkdir(distDir, { recursive: true });

  const entries = await Promise.all(
    domains.map(async (domain) => [domain, await loadDomainTokens(domain)] as const),
  );

  const byDomain = Object.fromEntries(entries) as Record<TokenDomain, Record<string, string>>;
  const flat = Object.assign({}, ...Object.values(byDomain));

  const aggregate = {
    $schema: "https://eumilitar.dev/schemas/design-tokens.json",
    meta: {
      package: "@carvalhorafael/eumilitar-tokens",
      version: "0.1.0",
      format: "css-custom-properties",
    },
    domains: byDomain,
    flat,
  };

  await Promise.all([
    writeFile(path.join(distDir, "tokens.json"), JSON.stringify(aggregate, null, 2), "utf8"),
    ...domains.map((domain) =>
      writeFile(
        path.join(distDir, `${domain}.json`),
        JSON.stringify(
          {
            $schema: "https://eumilitar.dev/schemas/design-tokens-domain.json",
            meta: {
              package: "@carvalhorafael/eumilitar-tokens",
              version: "0.1.0",
              domain,
            },
            tokens: byDomain[domain],
          },
          null,
          2,
        ),
        "utf8",
      ),
    ),
  ]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
