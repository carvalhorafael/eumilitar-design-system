import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Header } from "@/components/layout/Header";
import { Divider } from "@carvalhorafael/eumilitar-ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Divider" };

export default function DividerPage() {
  return (
    <div>
      <Header section="Componentes — 27" title="Divider" description="Separador semântico para dividir blocos, grupos de campos e seções compactas." />
      <div className="docs-page max-w-4xl">
        <SectionLabel number="27.1" title="Separação" description="Use com ou sem label, mantendo contraste e ritmo visual." />
        <ComponentDemo label="Divisores" code={`<Divider>Documentos</Divider>`}>
          <div className="grid gap-6">
            <Divider>Documentos</Divider>
            <Divider />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
