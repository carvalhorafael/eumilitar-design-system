import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { Input, Textarea } from "@/components/ui/Input";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Input" };

export default function InputPage() {
  return (
    <div>
      <Header
        section="Componentes — 04"
        title="Input & Textarea"
        description="Campos de texto com três estados, três tamanhos e foco neo-brutalista. A sombra offset 2×2 aparece no foco e some no blur."
      />

      <div className="px-10 py-10 max-w-4xl">

        <SectionLabel
          number="04.1"
          title="Input — Tamanhos"
          description="SM para filtros compactos, MD para formulários padrão, LG para campos de destaque ou buscas principais."
        />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo
            label="SM · MD · LG"
            code={`<Input size="sm" placeholder="Buscar..." />\n<Input size="md" placeholder="Nome completo" />\n<Input size="lg" placeholder="E-mail" />`}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: "360px" }}>
              <Input size="sm" placeholder="Buscar..." />
              <Input size="md" placeholder="Nome completo" />
              <Input size="lg" placeholder="E-mail" />
            </div>
          </ComponentDemo>
        </div>

        <SectionLabel number="04.2" title="Input — Estados" />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo
            label="Default"
            code={`<Input label="Patente" placeholder="Ex.: Sargento" />`}
          >
            <div style={{ width: "100%", maxWidth: "320px" }}>
              <Input label="Patente" placeholder="Ex.: Sargento" />
            </div>
          </ComponentDemo>

          <ComponentDemo
            label="Com label e helper text"
            code={`<Input label="CPF" placeholder="000.000.000-00" helperText="Digite apenas números" />`}
          >
            <div style={{ width: "100%", maxWidth: "320px" }}>
              <Input label="CPF" placeholder="000.000.000-00" helperText="Digite apenas números" />
            </div>
          </ComponentDemo>

          <ComponentDemo
            label="Required"
            code={`<Input label="Nome de guerra" placeholder="Ex.: Silva" required />`}
          >
            <div style={{ width: "100%", maxWidth: "320px" }}>
              <Input label="Nome de guerra" placeholder="Ex.: Silva" required />
            </div>
          </ComponentDemo>

          <ComponentDemo
            label="Error"
            code={`<Input inputState="error" label="E-mail" defaultValue="invalido@" helperText="E-mail inválido" required />`}
          >
            <div style={{ width: "100%", maxWidth: "320px" }}>
              <Input
                inputState="error"
                label="E-mail"
                defaultValue="invalido@"
                helperText="E-mail inválido"
                required
              />
            </div>
          </ComponentDemo>

          <ComponentDemo
            label="Success"
            code={`<Input inputState="success" label="Matrícula" defaultValue="12345678" helperText="Matrícula encontrada" />`}
          >
            <div style={{ width: "100%", maxWidth: "320px" }}>
              <Input
                inputState="success"
                label="Matrícula"
                defaultValue="12345678"
                helperText="Matrícula encontrada"
              />
            </div>
          </ComponentDemo>

          <ComponentDemo
            label="Disabled"
            code={`<Input label="Força" defaultValue="Exército Brasileiro" disabled />`}
          >
            <div style={{ width: "100%", maxWidth: "320px" }}>
              <Input label="Força" defaultValue="Exército Brasileiro" disabled />
            </div>
          </ComponentDemo>
        </div>

        <SectionLabel
          number="04.3"
          title="Textarea"
          description="Redimensionável verticalmente. Compartilha o mesmo sistema de estados e tamanhos do Input."
        />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo
            label="Default"
            code={`<Textarea label="Observações" placeholder="Descreva aqui..." />`}
          >
            <div style={{ width: "100%", maxWidth: "400px" }}>
              <Textarea label="Observações" placeholder="Descreva aqui..." />
            </div>
          </ComponentDemo>

          <ComponentDemo
            label="Error"
            code={`<Textarea inputState="error" label="Justificativa" helperText="Campo obrigatório" required />`}
          >
            <div style={{ width: "100%", maxWidth: "400px" }}>
              <Textarea
                inputState="error"
                label="Justificativa"
                helperText="Campo obrigatório"
                required
              />
            </div>
          </ComponentDemo>
        </div>

        <SectionLabel
          number="04.4"
          title="Exemplo de Formulário"
          description="Composição realista com vários campos."
        />
        <ComponentDemo label="Formulário de inscrição">
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxWidth: "400px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <Input label="Nome" placeholder="Nome" required />
              <Input label="Sobrenome" placeholder="Sobrenome" required />
            </div>
            <Input label="E-mail" type="email" placeholder="email@exemplo.com" required />
            <Input label="Telefone" type="tel" placeholder="(11) 99999-9999" />
            <Textarea label="Motivação" placeholder="Por que deseja ingressar nas Forças Armadas?" />
          </div>
        </ComponentDemo>

        <div className="mt-10">
          <SectionLabel number="04.5" title="Tokens Usados" />
          <div
            className="border-2 overflow-hidden"
            style={{ borderColor: "var(--border-strong)", boxShadow: "var(--shadow-sm)" }}
          >
            {[
              { prop: "border", token: "--border-strong / --state-error / --state-success", value: "2px solid" },
              { prop: "background (error)", token: "--state-error-pale", value: "#f7eaea" },
              { prop: "background (success)", token: "--state-success-pale", value: "var(--b-50)" },
              { prop: "focus shadow", token: "--accent / --state-error / --state-success", value: "2px 2px 0 {color}" },
              { prop: "label font", token: "--font-mono", value: "'JetBrains Mono'" },
              { prop: "label size", token: "--text-xs", value: "11px uppercase" },
              { prop: "helper color (error)", token: "--state-error", value: "#922020" },
            ].map((row, i) => (
              <div
                key={row.prop}
                className="flex items-center gap-4 px-5 py-3 border-b"
                style={{
                  borderColor: i < 6 ? "var(--border-default)" : "transparent",
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
