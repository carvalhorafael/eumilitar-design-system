import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Header } from "@/components/layout/Header";
import { Drawer } from "@carvalhorafael/eumilitar-ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Drawer" };

export default function DrawerPage() {
  return (
    <div>
      <Header
        section="Componentes — 11"
        title="Drawer"
        description="Painel lateral mobile-first para navegação auxiliar, filtros, sumários e ações contextuais sem ocupar a tela principal."
      />

      <div className="docs-page max-w-4xl">
        <SectionLabel
          number="11.1"
          title="Painel lateral"
          description="O Drawer abre sobre a página, fecha por overlay, botão de fechar ou tecla Escape, e preserva uma área segura para leitura no mobile."
        />
        <ComponentDemo
          label="Drawer básico"
          code={`<Drawer title="Filtros" trigger="Abrir filtros">\n  <p>Conteúdo do painel lateral.</p>\n</Drawer>`}
        >
          <Drawer title="Filtros" trigger="Abrir filtros">
            <div className="grid gap-4">
              <p style={{ margin: 0 }}>
                Use este espaço para filtros, sumários ou navegação complementar. Em mobile, o painel ocupa a tela com largura controlada.
              </p>
              <div
                className="grid gap-2 border-2 p-4"
                style={{ borderColor: "var(--border-strong)", background: "var(--surface-raised)" }}
              >
                <strong style={{ color: "var(--ink)" }}>Força</strong>
                <span>Exército</span>
                <span>Marinha</span>
                <span>Aeronáutica</span>
              </div>
            </div>
          </Drawer>
        </ComponentDemo>

        <div className="mt-10">
          <SectionLabel
            number="11.2"
            title="Contrato"
            description="O componente aceita uso controlado ou não controlado e deve ser tratado como overlay acessível."
          />
          <div className="grid gap-3">
            {[
              ["title", "ReactNode", "Título associado ao painel por aria-labelledby"],
              ["trigger", "ReactNode", "Conteúdo do botão que abre o painel"],
              ["open / onOpenChange", "boolean / function", "Controle externo opcional"],
              ["defaultOpen", "boolean", "Estado inicial no modo não controlado"],
              ["side", "left | right", "Lado de entrada do painel"],
            ].map(([prop, token, value]) => (
              <div
                key={prop}
                className="grid gap-1 border-2 p-4 sm:grid-cols-[140px_180px_1fr]"
                style={{ borderColor: "var(--border-strong)", background: "var(--surface-raised)" }}
              >
                <span style={{ color: "var(--text-secondary)" }}>{prop}</span>
                <strong style={{ fontFamily: "var(--font-mono)", color: "var(--ink)" }}>{token}</strong>
                <span style={{ color: "var(--pencil)" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
