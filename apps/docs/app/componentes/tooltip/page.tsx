import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Header } from "@/components/layout/Header";
import { Button, Tooltip } from "@carvalhorafael/eumilitar-ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Tooltip" };

export default function TooltipPage() {
  return (
    <div>
      <Header
        section="Componentes — 15"
        title="Tooltip"
        description="Ajuda contextual para controles compactos, ícones e comandos que precisam de explicação curta."
      />

      <div className="docs-page max-w-4xl">
        <SectionLabel
          number="15.1"
          title="Contexto sob demanda"
          description="O conteúdo aparece em hover e foco. Em mobile, prefira texto visível quando a informação for essencial."
        />
        <ComponentDemo
          label="Tooltip com botão"
          code={`<Tooltip content="Publica a alteração no site">\n  <Button>Publicar</Button>\n</Tooltip>`}
        >
          <div className="flex flex-wrap gap-4">
            <Tooltip content="Publica a alteração no site">
              <Button>Publicar</Button>
            </Tooltip>
            <Tooltip content="Remove o item selecionado" side="right">
              <Button variant="danger">Remover</Button>
            </Tooltip>
          </div>
        </ComponentDemo>

        <div className="mt-10">
          <SectionLabel
            number="15.2"
            title="Contrato"
            description="Tooltip é uma camada de ajuda curta. Não use para instruções obrigatórias ou conteúdo interativo."
          />
          <div className="grid gap-3">
            {[
              ["content", "ReactNode", "Texto curto exibido no balão"],
              ["children", "ReactNode", "Elemento que recebe foco e hover"],
              ["side", "top | right | bottom | left", "Posição preferencial do balão"],
            ].map(([prop, token, value]) => (
              <div
                key={prop}
                className="grid gap-1 border-2 p-4 sm:grid-cols-[140px_220px_1fr]"
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
