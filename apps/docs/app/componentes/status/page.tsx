import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Header } from "@/components/layout/Header";
import { Status } from "@carvalhorafael/eumilitar-ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Status" };

export default function StatusPage() {
  return (
    <div>
      <Header section="Componentes — 25" title="Status" description="Indicador textual curto para estados de sistema, presença, publicação e validação." />
      <div className="docs-page max-w-4xl">
        <SectionLabel number="25.1" title="Estados" description="Use com label visível; não dependa apenas da cor." />
        <ComponentDemo label="Tons" code={`<Status tone="success" label="Publicado" />`}>
          <div className="flex flex-wrap gap-5">
            <Status tone="success" label="Publicado" />
            <Status tone="warning" label="Pendente" />
            <Status tone="error" label="Erro" />
            <Status tone="info" label="Sincronizando" pulse />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
