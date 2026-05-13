import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { Select } from "@eumilitar/ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Select" };

const forcas = [
  { value: "ex", label: "Exército Brasileiro" },
  { value: "mb", label: "Marinha do Brasil" },
  { value: "fab", label: "Força Aérea Brasileira" },
  { value: "pm", label: "Polícia Militar" },
  { value: "bm", label: "Corpo de Bombeiros Militar" },
];

const anos = Array.from({ length: 10 }, (_, i) => {
  const y = 2025 - i;
  return { value: String(y), label: String(y) };
});

const patentes = [
  { value: "", label: "Selecione a patente", disabled: true },
  { value: "sd", label: "Soldado" },
  { value: "cb", label: "Cabo" },
  { value: "sgt", label: "Sargento" },
  { value: "sso", label: "Suboficial" },
  { value: "asp", label: "Aspirante" },
  { value: "ten", label: "Tenente" },
  { value: "cap", label: "Capitão" },
  { value: "maj", label: "Major" },
  { value: "tc", label: "Tenente-Coronel" },
  { value: "cel", label: "Coronel" },
  { value: "gen", label: "General" },
];

export default function SelectPage() {
  return (
    <div>
      <Header
        section="Componentes — 05"
        title="Select"
        description="Dropdown nativo estilizado com seta customizada e o mesmo sistema de estados do Input. Preferível para listas longas e enumerações fixas."
      />

      <div className="px-10 py-10 max-w-4xl">

        <SectionLabel
          number="05.1"
          title="Tamanhos"
          description="SM · MD · LG seguem a mesma escala do Input."
        />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo
            label="SM · MD · LG"
            code={`<Select size="sm" options={forcas} placeholder="Selecione..." />\n<Select size="md" options={forcas} placeholder="Selecione..." />\n<Select size="lg" options={forcas} placeholder="Selecione..." />`}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: "300px" }}>
              <Select size="sm" options={forcas} placeholder="Selecione a força..." />
              <Select size="md" options={forcas} placeholder="Selecione a força..." />
              <Select size="lg" options={forcas} placeholder="Selecione a força..." />
            </div>
          </ComponentDemo>
        </div>

        <SectionLabel number="05.2" title="Estados" />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo
            label="Default com label"
            code={`<Select label="Força" options={forcas} placeholder="Selecione..." />`}
          >
            <div style={{ width: "100%", maxWidth: "300px" }}>
              <Select label="Força" options={forcas} placeholder="Selecione a força..." />
            </div>
          </ComponentDemo>

          <ComponentDemo
            label="Required"
            code={`<Select label="Patente" options={patentes} required />`}
          >
            <div style={{ width: "100%", maxWidth: "300px" }}>
              <Select label="Patente" options={patentes} required />
            </div>
          </ComponentDemo>

          <ComponentDemo
            label="Error"
            code={`<Select inputState="error" label="Ano de ingresso" helperText="Selecione um ano válido" required />`}
          >
            <div style={{ width: "100%", maxWidth: "300px" }}>
              <Select
                inputState="error"
                label="Ano de ingresso"
                options={anos}
                placeholder="Selecione o ano..."
                helperText="Selecione um ano válido"
                required
              />
            </div>
          </ComponentDemo>

          <ComponentDemo
            label="Success"
            code={`<Select inputState="success" label="Força" helperText="Confirmado" />`}
          >
            <div style={{ width: "100%", maxWidth: "300px" }}>
              <Select
                inputState="success"
                label="Força"
                options={forcas}
                defaultValue="ex"
                helperText="Força confirmada"
              />
            </div>
          </ComponentDemo>

          <ComponentDemo
            label="Disabled"
            code={`<Select label="Região" defaultValue="sudeste" disabled />`}
          >
            <div style={{ width: "100%", maxWidth: "300px" }}>
              <Select
                label="Região"
                options={[{ value: "sudeste", label: "Sudeste" }]}
                defaultValue="sudeste"
                disabled
              />
            </div>
          </ComponentDemo>
        </div>

        <SectionLabel
          number="05.3"
          title="Exemplo de Formulário"
          description="Select combinado com Input em um formulário de perfil."
        />
        <ComponentDemo label="Formulário de perfil militar">
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxWidth: "400px" }}>
            <Select label="Força Armada" options={forcas} placeholder="Selecione..." required />
            <Select label="Patente" options={patentes} required />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <Select label="Ano de ingresso" options={anos} placeholder="Ano..." />
              <Select
                label="Situação"
                options={[
                  { value: "ativo", label: "Ativo" },
                  { value: "reserva", label: "Reserva" },
                  { value: "reformado", label: "Reformado" },
                ]}
                placeholder="Situação..."
              />
            </div>
          </div>
        </ComponentDemo>

        <div className="mt-10">
          <SectionLabel number="05.4" title="Tokens Usados" />
          <div
            className="border-2 overflow-hidden"
            style={{ borderColor: "var(--border-strong)", boxShadow: "var(--shadow-sm)" }}
          >
            {[
              { prop: "appearance", token: "none", value: "Oculta seta nativa do SO" },
              { prop: "seta customizada", token: "SVG inline", value: "12×12px, stroke currentColor" },
              { prop: "border", token: "--border-strong", value: "2px solid #433c34" },
              { prop: "focus shadow", token: "--accent", value: "2px 2px 0 var(--accent)" },
              { prop: "background (error)", token: "--state-error-pale", value: "#f7eaea" },
              { prop: "cursor", token: "pointer / not-allowed", value: "Baseado em disabled" },
            ].map((row, i) => (
              <div
                key={row.prop}
                className="flex items-center gap-4 px-5 py-3 border-b"
                style={{
                  borderColor: i < 5 ? "var(--border-default)" : "transparent",
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
