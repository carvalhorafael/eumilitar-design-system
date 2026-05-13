import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";
import Link from "next/link";

export const metadata: Metadata = { title: "Instalação" };

function CodeBlock({ children }: { children: string }) {
  return (
    <pre
      className="overflow-x-auto border-2 px-5 py-4 text-sm"
      style={{
        borderColor: "var(--border-strong)",
        background: "var(--surface-dark)",
        color: "var(--text-inverse)",
        boxShadow: "var(--shadow-sm)",
        fontFamily: "var(--font-mono)",
        lineHeight: 1.6,
      }}
    >
      <code>{children}</code>
    </pre>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="border-2 px-5 py-4"
      style={{
        borderColor: "var(--border-strong)",
        background: "var(--paper)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
        {children}
      </p>
    </div>
  );
}

export default function InstalacaoPage() {
  return (
    <div>
      <Header
        section="Biblioteca — 01"
        title="Instalação"
        description="Passo inicial para consumir o design system como biblioteca. O uso varia conforme o tipo de consumer, mas a base sempre começa por tokens, CSS compartilhado e, quando necessário, as camadas web ou React."
      />

      <div className="docs-page max-w-4xl">
        <SectionLabel
          number="01.1"
          title="Pacotes Base"
          description="Os pacotes centrais da biblioteca e o papel de cada um."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["@carvalhorafael/eumilitar-tokens", "Fonte de verdade dos valores visuais. Exporta CSS e JSON."],
            ["@carvalhorafael/eumilitar-css", "Camada compartilhada de estilos e classes semânticas."],
            ["@carvalhorafael/eumilitar-web", "Markup canônico e JS progressivo para sites sem React."],
            ["@carvalhorafael/eumilitar-ui", "Adapter React para apps Next/React."],
            ["@carvalhorafael/eumilitar-patterns", "Contratos, variantes e referências dos blocos."],
          ].map(([name, text]) => (
            <div
              key={name}
              className="border-2 px-5 py-4"
              style={{
                borderColor: "var(--border-strong)",
                background: "var(--surface-raised)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <strong
                className="block text-sm"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink)" }}
              >
                {name}
              </strong>
              <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        <SectionLabel
          number="01.2"
          title="Exemplo para App React"
          description="Para apps React/Next, a instalação típica começa por tokens, CSS e UI."
        />
        <CodeBlock>{`{
  "dependencies": {
    "@carvalhorafael/eumilitar-tokens": "^0.1.0",
    "@carvalhorafael/eumilitar-css": "^0.1.0",
    "@carvalhorafael/eumilitar-ui": "^0.1.0",
    "@carvalhorafael/eumilitar-patterns": "^0.1.0"
  }
}`}</CodeBlock>

        <div className="mt-4">
          <CodeBlock>{`@import "@carvalhorafael/eumilitar-tokens";
@import "@carvalhorafael/eumilitar-css";`}</CodeBlock>
        </div>

        <div className="mt-4">
          <CodeBlock>{`@carvalhorafael:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=SEU_TOKEN_GITHUB`}</CodeBlock>
        </div>

        <SectionLabel
          number="01.3"
          title="Exemplo para Site sem React"
          description="Para HTML/CSS/JS puro, a base tende a ser tokens + css + web."
        />
        <CodeBlock>{`{
  "dependencies": {
    "@carvalhorafael/eumilitar-tokens": "^0.1.0",
    "@carvalhorafael/eumilitar-css": "^0.1.0",
    "@carvalhorafael/eumilitar-web": "^0.1.0"
  }
}`}</CodeBlock>

        <div className="mt-4">
          <Note>
            As versões publicadas e os arquivos do repositório podem ser acessados em{" "}
            <Link
              href="https://github.com/carvalhorafael/eumilitar-design-system/releases"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--text-brand)", fontWeight: 700 }}
            >
              GitHub Releases
            </Link>.
          </Note>
        </div>

        <div className="mt-4">
          <Note>
            Como os pacotes serão publicados no GitHub Packages, o consumer precisa configurar o
            registry do scope <code>@carvalhorafael</code> e autenticação com token do GitHub antes
            do <code>npm install</code>.
          </Note>
        </div>
      </div>
    </div>
  );
}
