import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Header } from "@/components/layout/Header";
import { Steps, type StepItem } from "@carvalhorafael/eumilitar-ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Steps" };

const items: StepItem[] = [
  { label: "Cadastro", description: "Dados pessoais", state: "complete" },
  { label: "Documentos", description: "Anexos obrigatórios", state: "current" },
  { label: "Pagamento", description: "Confirmação da matrícula", state: "pending" },
  { label: "Acesso", description: "Liberação da plataforma", state: "pending" },
];

export default function StepsPage() {
  return (
    <div>
      <Header
        section="Componentes — 22"
        title="Steps"
        description="Sequência de etapas para onboarding, inscrição, checkout e trilhas de progresso."
      />

      <div className="docs-page max-w-4xl">
        <SectionLabel
          number="22.1"
          title="Jornada"
          description="No mobile, Steps começa vertical para preservar leitura. Em telas maiores, a orientação responsiva vira horizontal."
        />
        <ComponentDemo
          label="Fluxo de matrícula"
          code={`<Steps\n  items={items}\n  label="Fluxo de matrícula"\n/>`}
        >
          <Steps items={items} label="Fluxo de matrícula" />
        </ComponentDemo>
      </div>
    </div>
  );
}
