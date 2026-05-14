import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Header } from "@/components/layout/Header";
import { Toggle } from "@carvalhorafael/eumilitar-ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Toggle" };

export default function TogglePage() {
  return (
    <div>
      <Header
        section="Componentes — 19"
        title="Toggle"
        description="Controle liga/desliga para preferências, configurações e estados binários que têm efeito imediato."
      />

      <div className="docs-page max-w-4xl">
        <SectionLabel
          number="19.1"
          title="Configuração binária"
          description="Use Toggle quando a opção representa um estado ativo ou inativo, não uma seleção dentro de lista."
        />
        <ComponentDemo
          label="Preferências"
          code={`<Toggle\n  label="Receber alertas de edital"\n  helperText="Você pode alterar isso depois."\n/>`}
        >
          <div className="grid gap-4">
            <Toggle label="Receber alertas de edital" helperText="Você pode alterar isso depois." defaultChecked />
            <Toggle label="Modo compacto" size="sm" />
            <Toggle label="Sincronização obrigatória" inputState="error" helperText="Ative para continuar." />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
