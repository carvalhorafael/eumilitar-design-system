import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";

export const metadata: Metadata = { title: "Uso" };

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

export default function UsoPage() {
  return (
    <div>
      <Header
        section="Biblioteca — 02"
        title="Uso"
        description="Como combinar as camadas da biblioteca em consumers React e não React, e qual ordem seguir quando um bloco novo precisar entrar no sistema."
      />

      <div className="docs-page max-w-4xl">
        <SectionLabel
          number="02.1"
          title="Ordem de Consumo"
          description="A biblioteca foi desenhada em camadas. O consumer não deve começar pelo pacote errado."
        />

        <div className="grid gap-4">
          {[
            ["1. Tokens", "Sempre começam em @carvalhorafael/eumilitar-tokens. Essa é a fonte de verdade dos valores visuais."],
            ["2. CSS", "A aparência compartilhada vem de @carvalhorafael/eumilitar-css."],
            ["3. Web ou UI", "Sites sem React usam @carvalhorafael/eumilitar-web. Apps React usam @carvalhorafael/eumilitar-ui."],
            ["4. Patterns", "@carvalhorafael/eumilitar-patterns entra como contrato e referência de blocos."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="border-2 px-5 py-4"
              style={{
                borderColor: "var(--border-strong)",
                background: "var(--surface-raised)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <strong className="block" style={{ color: "var(--ink)" }}>
                {title}
              </strong>
              <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        <SectionLabel
          number="02.2"
          title="Exemplo com React"
          description="Um app React instala tokens, css e ui. O componente React é só a última camada."
        />
        <CodeBlock>{`import { Button } from "@carvalhorafael/eumilitar-ui";

export function HeroActions() {
  return <Button>Começar agora</Button>;
}`}</CodeBlock>

        <SectionLabel
          number="02.3"
          title="Exemplo para Site Tradicional"
          description="Um site sem React pode usar @carvalhorafael/eumilitar-web para gerar markup canônico e inicializar comportamentos compartilhados."
        />
        <CodeBlock>{`import { renderHeroBlock, enhanceAccordion } from "@carvalhorafael/eumilitar-web";

const html = renderHeroBlock({
  headline: "Prepare-se com trilhas por força",
  supportingCopy: "Questões, simulados e acompanhamento.",
  primaryCta: { label: "Começar", href: "#planos" }
});

document.querySelector("#app").innerHTML = html;
enhanceAccordion(document);`}</CodeBlock>

        <SectionLabel
          number="02.4"
          title="Exemplo em Tema WordPress"
          description="No WordPress, o tema consome a biblioteca como dependência do próprio projeto e publica os assets gerados no frontend."
        />
        <CodeBlock>{`// package.json do tema
{
  "dependencies": {
    "@carvalhorafael/eumilitar-tokens": "^0.1.0",
    "@carvalhorafael/eumilitar-css": "^0.1.0",
    "@carvalhorafael/eumilitar-web": "^0.1.0"
  }
}`}</CodeBlock>

        <CodeBlock>{`<?php
function eumilitar_theme_assets() {
  wp_enqueue_style(
    "eumilitar-design-system",
    get_template_directory_uri() . "/assets/design-system.css",
    array(),
    "1.0.0"
  );

  wp_enqueue_script(
    "eumilitar-theme",
    get_template_directory_uri() . "/assets/theme.js",
    array(),
    "1.0.0",
    true
  );
}
add_action("wp_enqueue_scripts", "eumilitar_theme_assets");`}</CodeBlock>

        <CodeBlock>{`// assets/theme.js
import { enhanceAccordion } from "@carvalhorafael/eumilitar-web";

enhanceAccordion(document);`}</CodeBlock>

        <p className="mt-4 text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
          O HTML renderizado pelo tema deve seguir a estrutura canônica documentada em{" "}
          <code>@carvalhorafael/eumilitar-web</code>. Em outras palavras: o tema WordPress não deve reinventar o
          design system; ele deve consumir os tokens, o CSS compartilhado e a anatomia estável dos
          blocos.
        </p>

        <SectionLabel
          number="02.5"
          title="Regra para Novos Blocos"
          description="Sempre seguir a mesma ordem para evitar drift entre consumers."
        />
        <CodeBlock>{`1. definir ou ajustar o contrato em @carvalhorafael/eumilitar-patterns
2. garantir a camada visual em @carvalhorafael/eumilitar-css
3. implementar a renderização canônica em @carvalhorafael/eumilitar-web
4. só depois adaptar isso para React, tema externo ou outro consumer`}</CodeBlock>
      </div>
    </div>
  );
}
