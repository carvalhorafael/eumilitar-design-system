"use client";

import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Alert } from "@/components/ui/Alert";
import { useState } from "react";

const forcaOptions = [
  { value: "ex",  label: "Exército Brasileiro" },
  { value: "mb",  label: "Marinha do Brasil" },
  { value: "fab", label: "Força Aérea Brasileira" },
  { value: "pm",  label: "Polícia Militar" },
  { value: "bm",  label: "Corpo de Bombeiros Militar" },
];

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 6h8M6 2l4 4-4 4" />
  </svg>
);

function PatternShell({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <p style={{
        fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700,
        textTransform: "uppercase", letterSpacing: "0.08em",
        color: "var(--pencil)", marginBottom: "12px",
      }}>
        {label}
      </p>
      <div style={{ border: "2px solid var(--border-strong)", boxShadow: "var(--shadow-md)", overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
}

function UsedComponents({ items }: { items: string[] }) {
  return (
    <div style={{
      borderTop: "1px solid var(--border-default)", padding: "10px 20px",
      background: "var(--paper)", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap",
    }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--pencil)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
        Composto por:
      </span>
      {items.map((item) => (
        <code key={item} style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--ink)", background: "var(--paper-deep)", padding: "2px 6px" }}>
          {item}
        </code>
      ))}
    </div>
  );
}

function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [aceito, setAceito] = useState(false);

  if (submitted) {
    return (
      <div style={{ padding: "32px" }}>
        <Alert variant="success" title="Inscrição recebida">
          Em breve você receberá nosso material gratuito de preparação no e-mail informado.
        </Alert>
      </div>
    );
  }

  return (
    <div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "16px", maxWidth: "400px" }}>
      <Input label="Nome completo" placeholder="Seu nome" required />
      <Input label="E-mail" type="email" placeholder="email@exemplo.com" required />
      <Select label="Força de interesse" options={forcaOptions} placeholder="Selecione..." required />
      <Checkbox
        label="Aceito receber conteúdos e comunicações da EuMilitar"
        checked={aceito}
        onChange={(e) => setAceito(e.target.checked)}
      />
      <Button
        variant="primary"
        size="md"
        icon={<ArrowIcon />}
        iconPosition="right"
        onClick={() => setSubmitted(true)}
        style={{ marginTop: "4px" }}
      >
        Receber material gratuito
      </Button>
    </div>
  );
}

function FullForm() {
  const [submitted, setSubmitted] = useState(false);
  const [aceito, setAceito] = useState(false);

  if (submitted) {
    return (
      <div style={{ padding: "40px 48px" }}>
        <Alert variant="success" title="Inscrição confirmada">
          Você receberá as instruções de acesso no e-mail informado em até 10 minutos.
        </Alert>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
      {/* Coluna esquerda — copy */}
      <div style={{ background: "var(--surface-brand)", padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(245,240,232,0.5)", marginBottom: "16px" }}>
          Garanta sua vaga
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "36px",
          fontWeight: 900,
          textTransform: "uppercase",
          color: "#f5f0e8",
          lineHeight: 1,
          margin: "0 0 16px",
        }}>
          Comece sua preparação hoje
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(245,240,232,0.7)", lineHeight: 1.65, margin: "0 0 28px" }}>
          Acesso imediato ao curso completo. Cancele quando quiser.
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "Trilhas por força e cargo",
            "Banco com +10.000 questões",
            "Simulados semanais",
            "Suporte por e-mail",
          ].map((item) => (
            <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(245,240,232,0.8)" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--accent-pale)" strokeWidth="2">
                <polyline points="2,7 5.5,10.5 12,3.5" strokeLinecap="square" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Coluna direita — form */}
      <div style={{ background: "var(--surface-raised)", padding: "48px 40px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <Input label="Nome" placeholder="Nome" required />
          <Input label="Sobrenome" placeholder="Sobrenome" required />
        </div>
        <Input label="E-mail" type="email" placeholder="email@exemplo.com" required />
        <Input label="Telefone" type="tel" placeholder="(11) 99999-9999" />
        <Select label="Força de interesse" options={forcaOptions} placeholder="Selecione..." required />
        <Checkbox
          label="Aceito receber comunicações da EuMilitar por e-mail e WhatsApp"
          checked={aceito}
          onChange={(e) => setAceito(e.target.checked)}
        />
        <Button
          variant="urgent"
          size="md"
          icon={<ArrowIcon />}
          iconPosition="right"
          onClick={() => setSubmitted(true)}
          style={{ marginTop: "4px" }}
        >
          Garantir minha vaga
        </Button>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--pencil-soft)", textAlign: "center", lineHeight: 1.6 }}>
          Garantia de 7 dias · Cancele quando quiser
        </p>
      </div>
    </div>
  );
}

export default function CaptacaoPage() {
  return (
    <div>
      <Header
        section="Padrões — 03"
        title="Captação"
        description="Formulários de conversão: do lead simples ao form completo de inscrição. Todos os estados de validação aplicados."
      />

      <div className="px-10 py-10 max-w-5xl">

        <SectionLabel
          number="03.1"
          title="Form de Lead Simples"
          description="Captação de e-mail com força de interesse. Mínimo de campos para máxima conversão. Clique em 'Receber material' para ver o estado de sucesso."
        />
        <PatternShell label="Lead form — e-mail + força + CTA">
          <div style={{ background: "var(--surface-raised)" }}>
            <LeadForm />
          </div>
          <UsedComponents items={["Input", "Select", "Checkbox", "Button (primary)", "Alert (success)"]} />
        </PatternShell>

        <SectionLabel
          number="03.2"
          title="Form Completo de Inscrição"
          description="Layout em duas colunas: copy da oferta à esquerda, formulário à direita. Clique em 'Garantir minha vaga' para ver o estado de confirmação."
        />
        <PatternShell label="Form de inscrição — layout duas colunas">
          <FullForm />
          <UsedComponents items={["Input", "Select", "Checkbox", "Button (urgent)", "Alert (success)"]} />
        </PatternShell>

        <SectionLabel
          number="03.3"
          title="Diretrizes de Formulários"
        />
        <div className="border-2 p-6" style={{ borderColor: "var(--border-default)", background: "var(--paper)", fontFamily: "var(--font-mono)", fontSize: "12px" }}>
          {[
            { regra: "Mínimo de campos: peça só o necessário para a ação imediata", motivo: "Cada campo extra reduz conversão" },
            { regra: "Label sempre visível acima do campo — nunca só placeholder", motivo: "Acessibilidade e usabilidade" },
            { regra: "Botão CTA descreve o resultado, não a ação — 'Receber material' > 'Enviar'", motivo: "Clareza da proposta de valor" },
            { regra: "Feedback de sucesso substitui o form — não adiciona acima dele", motivo: "Evita confusão pós-submissão" },
            { regra: "Urgência no CTA do form apenas quando há urgência real na oferta", motivo: "Button urgent reservado para escassez" },
          ].map((row, i) => (
            <div key={i} className="flex flex-col py-3 border-b last:border-0" style={{ borderColor: "var(--rule)", gap: "4px" }}>
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>{row.regra}</span>
              <span style={{ color: "var(--pencil)", fontSize: "11px" }}>↳ {row.motivo}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
