import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Header } from "@/components/layout/Header";
import { Tabs, type TabItem } from "@carvalhorafael/eumilitar-ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Tabs" };

const items: TabItem[] = [
  {
    value: "uso",
    label: "Uso",
    content: "Use Tabs quando o usuário precisa alternar entre seções equivalentes sem sair do contexto atual.",
  },
  {
    value: "variantes",
    label: "Variantes",
    content: "A lista de abas tem overflow horizontal seguro no mobile e painel único visível por vez.",
  },
  {
    value: "acessibilidade",
    label: "Acessibilidade",
    content: "O componente usa tablist, tab, tabpanel, aria-selected e navegação por setas.",
  },
];

export default function TabsPage() {
  return (
    <div>
      <Header
        section="Componentes — 12"
        title="Tabs"
        description="Alternância de seções relacionadas com navegação horizontal responsiva e sem quebrar o layout mobile."
      />

      <div className="docs-page max-w-4xl">
        <SectionLabel
          number="12.1"
          title="Seções equivalentes"
          description="Tabs organizam conteúdo paralelo, como uso, variantes, exemplos ou contratos, mantendo apenas um painel ativo."
        />
        <ComponentDemo
          label="Tabs padrão"
          code={`<Tabs\n  label="Documentação do componente"\n  items={items}\n/>`}
        >
          <Tabs label="Documentação do componente" items={items} />
        </ComponentDemo>

        <div className="mt-10">
          <SectionLabel
            number="12.2"
            title="Contrato"
            description="A API trabalha com lista de itens e permite uso controlado quando o consumer precisar persistir estado."
          />
          <div className="grid gap-3">
            {[
              ["items", "TabItem[]", "Lista de abas com value, label, content e disabled opcional"],
              ["label", "string", "Nome acessível do tablist"],
              ["value", "string", "Aba ativa no modo controlado"],
              ["defaultValue", "string", "Aba ativa inicial no modo não controlado"],
              ["onValueChange", "function", "Callback disparado ao trocar de aba"],
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
