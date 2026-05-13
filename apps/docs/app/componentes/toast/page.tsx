import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Header } from "@/components/layout/Header";
import { Button, Toast, ToastViewport } from "@carvalhorafael/eumilitar-ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Toast" };

export default function ToastPage() {
  return (
    <div>
      <Header
        section="Componentes — 14"
        title="Toast"
        description="Feedback transitório para confirmações, erros e eventos de sistema sem deslocar o conteúdo principal."
      />

      <div className="docs-page max-w-4xl">
        <SectionLabel
          number="14.1"
          title="Feedback curto"
          description="Use Toast para respostas imediatas de ações como salvar, copiar, enviar ou falhar uma requisição."
        />
        <ComponentDemo
          label="Fila visual"
          code={`<ToastViewport>\n  <Toast variant="success" title="Salvo">Alterações publicadas.</Toast>\n</ToastViewport>`}
        >
          <ToastViewport>
            <Toast variant="success" title="Salvo" dismissible>
              Alterações publicadas no design system.
            </Toast>
            <Toast
              variant="warning"
              title="Revisão pendente"
              action={<Button variant="secondary" size="sm">Abrir</Button>}
            >
              Há componentes aguardando validação mobile.
            </Toast>
          </ToastViewport>
        </ComponentDemo>

        <div className="mt-10">
          <SectionLabel
            number="14.2"
            title="Contrato"
            description="A primeira versão é composicional. Um provider global pode ser adicionado depois se o produto precisar de fila programática."
          />
          <div className="grid gap-3">
            {[
              ["variant", "info | success | warning | error", "Define semântica visual e role"],
              ["title", "string", "Título curto da notificação"],
              ["action", "ReactNode", "Ação contextual opcional"],
              ["dismissible", "boolean", "Exibe botão de fechamento"],
              ["ToastViewport", "component", "Agrupa notificações em uma região visual"],
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
