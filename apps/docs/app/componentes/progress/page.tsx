import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Header } from "@/components/layout/Header";
import { Progress } from "@carvalhorafael/eumilitar-ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Progress" };

export default function ProgressPage() {
  return (
    <div>
      <Header
        section="Componentes — 21"
        title="Progress"
        description="Indicador de progresso determinado ou indeterminado para tarefas, etapas de matrícula e carregamentos longos."
      />

      <div className="docs-page max-w-4xl">
        <SectionLabel
          number="21.1"
          title="Progresso mensurável"
          description="Use Progress quando existe uma noção clara de avanço, percentual ou tarefa em andamento."
        />
        <ComponentDemo
          label="Progresso de inscrição"
          code={`<Progress label="Inscrição" value={64} showValue />`}
        >
          <div className="grid gap-5">
            <Progress label="Inscrição" value={64} showValue />
            <Progress label="Upload de documentos" value={35} max={100} showValue />
            <Progress label="Sincronizando dados" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
