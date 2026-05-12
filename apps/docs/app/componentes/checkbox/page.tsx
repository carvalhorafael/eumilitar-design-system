import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { ComponentDemo } from "@/components/docs/ComponentDemo";
import {
  CheckboxStatesDemo,
  CheckboxGroupDemo,
  RadioStatesDemo,
  RadioErrorDemo,
  FormDemo,
} from "@/components/docs/CheckboxDemo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Checkbox & Radio" };

export default function CheckboxPage() {
  return (
    <div>
      <Header
        section="Componentes — 06"
        title="Checkbox & Radio"
        description="Controles de seleção com checkmark SVG customizado e ponto interno para Radio. Foco neo-brutalista com sombra offset 2×2."
      />

      <div className="px-10 py-10 max-w-4xl">

        <SectionLabel
          number="06.1"
          title="Checkbox — Estados"
          description="Clique para alternar. O checkmark usa stroke-dashoffset para animar a entrada da marca."
        />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo label="Default · Error · Success · Disabled">
            <CheckboxStatesDemo />
          </ComponentDemo>
        </div>

        <SectionLabel
          number="06.2"
          title="Checkbox — Grupo"
          description="Use CheckboxGroup para agrupar opções relacionadas com label de seção em monospace uppercase."
        />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo
            label="CheckboxGroup"
            code={`<CheckboxGroup label="Forças de interesse">\n  <Checkbox label="Exército Brasileiro" checked={...} onChange={...} />\n  <Checkbox label="Marinha do Brasil" checked={...} onChange={...} />\n</CheckboxGroup>`}
          >
            <CheckboxGroupDemo />
          </ComponentDemo>
        </div>

        <SectionLabel
          number="06.3"
          title="Radio — Estados"
          description="Radio para seleção exclusiva. Use o mesmo name para agrupar opções mutuamente exclusivas."
        />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo
            label="RadioGroup — seleção única"
            code={`<RadioGroup label="Situação do militar">\n  <Radio name="situacao" label="Ativo" value="ativo" checked={...} onChange={...} />\n  <Radio name="situacao" label="Da Reserva" value="reserva" checked={...} onChange={...} />\n</RadioGroup>`}
          >
            <RadioStatesDemo />
          </ComponentDemo>

          <ComponentDemo
            label="Radio com estado de erro"
            code={`<RadioGroup inputState="error" helperText="Selecione uma modalidade">\n  <Radio inputState="error" ... />\n</RadioGroup>`}
          >
            <RadioErrorDemo />
          </ComponentDemo>
        </div>

        <SectionLabel
          number="06.4"
          title="Exemplo de Formulário"
          description="Combinação de CheckboxGroup e RadioGroup em um formulário de perfil."
        />
        <ComponentDemo label="Preferências de inscrição">
          <FormDemo />
        </ComponentDemo>

        <div className="mt-10">
          <SectionLabel number="06.5" title="Tokens Usados" />
          <div
            className="border-2 overflow-hidden"
            style={{ borderColor: "var(--border-strong)", boxShadow: "var(--shadow-sm)" }}
          >
            {[
              { prop: "border", token: "--border-strong", value: "2px solid #433c34" },
              { prop: "checkmark color", token: "--accent", value: "var(--b-700) #1f4d2a" },
              { prop: "radio dot", token: "--accent", value: "7px circle, var(--accent)" },
              { prop: "focus shadow", token: "--accent", value: "2px 2px 0 var(--accent)" },
              { prop: "border-radius (checkbox)", token: "--radius-sm", value: "2px" },
              { prop: "border-radius (radio)", token: "999px", value: "Circular" },
              { prop: "label font", token: "--font-body", value: "'Barlow' 14px" },
              { prop: "group label font", token: "--font-mono", value: "11px uppercase" },
            ].map((row, i) => (
              <div
                key={row.prop}
                className="flex items-center gap-4 px-5 py-3 border-b"
                style={{
                  borderColor: i < 7 ? "var(--border-default)" : "transparent",
                  background: i % 2 === 0 ? "var(--surface-raised)" : "var(--paper)",
                }}
              >
                <span className="w-44 shrink-0 text-sm" style={{ color: "var(--text-secondary)" }}>{row.prop}</span>
                <span className="flex-1 text-sm font-bold" style={{ fontFamily: "var(--font-mono)", color: "var(--ink)" }}>{row.token}</span>
                <span className="text-sm" style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
