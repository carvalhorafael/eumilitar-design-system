import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

async function readRepoFile(...segments) {
  return readFile(path.join(repoRoot, ...segments), "utf8");
}

function assertIncludes(haystack, needle, message) {
  if (!haystack.includes(needle)) {
    throw new Error(message);
  }
}

function extractCssVariable(css, variableName) {
  const regex = new RegExp(`--${variableName}\\s*:\\s*([^;]+);`);
  const match = css.match(regex);
  if (!match) {
    throw new Error(`Nao foi possivel encontrar o token --${variableName} no CSS.`);
  }
  return match[1].trim();
}

async function main() {
  const [
    colorsCss,
    docsGlobals,
    reactGlobals,
    staticHtml,
    staticStyles,
    staticJs,
    tokensJsonRaw,
  ] = await Promise.all([
    readRepoFile("packages", "tokens", "colors.css"),
    readRepoFile("apps", "docs", "app", "globals.css"),
    readRepoFile("apps", "consumer-react", "app", "globals.css"),
    readRepoFile("apps", "consumer-static", "dist", "index.html"),
    readRepoFile("apps", "consumer-static", "dist", "styles.css"),
    readRepoFile("apps", "consumer-static", "dist", "main.js"),
    readRepoFile("packages", "tokens", "dist", "tokens.json"),
  ]);

  const accent = extractCssVariable(colorsCss, "accent");
  const tokensJson = JSON.parse(tokensJsonRaw);

  assertIncludes(docsGlobals, '@import "@carvalhorafael/eumilitar-tokens";', "O app docs nao importa @carvalhorafael/eumilitar-tokens.");
  assertIncludes(docsGlobals, '@import "@carvalhorafael/eumilitar-css";', "O app docs nao importa @carvalhorafael/eumilitar-css.");

  assertIncludes(reactGlobals, '@import "@carvalhorafael/eumilitar-tokens";', "O consumer React nao importa @carvalhorafael/eumilitar-tokens.");
  assertIncludes(reactGlobals, '@import "@carvalhorafael/eumilitar-css";', "O consumer React nao importa @carvalhorafael/eumilitar-css.");

  assertIncludes(staticHtml, 'class="ds-hero', "O consumer static nao renderizou markup de hero.");
  assertIncludes(staticHtml, "data-accordion-trigger", "O consumer static nao renderizou o markup progressivo de accordion.");
  assertIncludes(staticStyles, ".ds-hero", "O consumer static nao recebeu estilos de blocos compartilhados.");
  assertIncludes(staticStyles, accent, "O consumer static nao recebeu o valor atual do token accent.");
  assertIncludes(staticJs, "enhanceAccordion", "O consumer static nao recebeu o comportamento progressivo compartilhado.");

  if (tokensJson.domains.colors.accent !== accent) {
    throw new Error("O export JSON de tokens nao esta sincronizado com o CSS fonte.");
  }

  console.log("Validacao de propagacao concluida:");
  console.log(`- accent sincronizado: ${accent}`);
  console.log("- docs importa tokens e css compartilhados");
  console.log("- consumer-react importa tokens e css compartilhados");
  console.log("- consumer-static recebeu markup, estilos e JS da biblioteca base");
  console.log("- export JSON de tokens esta coerente com a fonte CSS");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
