import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Header } from "@/components/layout/Header";
import { Checkbox, Fieldset, Input, Select } from "@carvalhorafael/eumilitar-ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Fieldset" };

export default function FieldsetPage() {
  return (
    <div>
      <Header
        section="Componentes — 18"
        title="Fieldset"
        description="Agrupamento semântico para campos relacionados, com legenda, helper text e estado visual compartilhado."
      />

      <div className="docs-page max-w-4xl">
        <SectionLabel
          number="18.1"
          title="Grupo de formulário"
          description="Use Fieldset para organizar etapas de cadastro, filtros e grupos de decisão com semântica consistente."
        />
        <ComponentDemo
          label="Dados do candidato"
          code={`<Fieldset legend="Dados do candidato" helperText="Campos usados para contato.">\n  <Input label="Nome completo" />\n</Fieldset>`}
        >
          <Fieldset legend="Dados do candidato" helperText="Campos usados para contato e segmentação.">
            <Input label="Nome completo" placeholder="Maria Silva" />
            <Select
              label="Força de interesse"
              placeholder="Selecione"
              options={[
                { value: "exercito", label: "Exército" },
                { value: "marinha", label: "Marinha" },
                { value: "aeronautica", label: "Aeronáutica" },
              ]}
            />
            <Checkbox label="Aceito receber orientações sobre editais." />
          </Fieldset>
        </ComponentDemo>
      </div>
    </div>
  );
}
