"use client";

import { Header } from "@/components/layout/Header";
import { PatternGuidelines } from "@/components/docs/PatternGuidelines";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Button, Input, Select, Checkbox, Alert } from "@eumilitar/ui";
import { PatternContract, PatternShell, UsedComponents, getPatternDefinition } from "@eumilitar/patterns";
import { FormEvent, useRef, useState } from "react";

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

const captureDefinition = getPatternDefinition("capture");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadValues = {
  name: string;
  email: string;
  force: string;
  consent: boolean;
};

type SignupValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  force: string;
  consent: boolean;
};

function focusFirstInvalid(form: HTMLFormElement | null) {
  if (!form) return;

  requestAnimationFrame(() => {
    const target = form.querySelector<HTMLElement>(
      '[aria-invalid="true"], input:invalid, select:invalid, textarea:invalid',
    );
    target?.focus();
  });
}

function validateLead(values: LeadValues) {
  return {
    name: values.name.trim() ? "" : "Informe seu nome completo.",
    email: values.email.trim()
      ? emailPattern.test(values.email)
        ? ""
        : "Informe um e-mail válido."
      : "Informe seu e-mail.",
    force: values.force ? "" : "Selecione a força de interesse.",
    consent: values.consent ? "" : "Você precisa aceitar o recebimento de comunicações.",
  };
}

function validateSignup(values: SignupValues) {
  return {
    firstName: values.firstName.trim() ? "" : "Informe seu nome.",
    lastName: values.lastName.trim() ? "" : "Informe seu sobrenome.",
    email: values.email.trim()
      ? emailPattern.test(values.email)
        ? ""
        : "Informe um e-mail válido."
      : "Informe seu e-mail.",
    phone: values.phone.trim() && values.phone.replace(/\D/g, "").length < 10
      ? "Informe um telefone com DDD válido ou deixe o campo em branco."
      : "",
    force: values.force ? "" : "Selecione a força de interesse.",
    consent: values.consent ? "" : "Você precisa aceitar o recebimento de comunicações.",
  };
}

function hasErrors(errors: Record<string, string>) {
  return Object.values(errors).some(Boolean);
}

function ErrorList({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: "8px 0 0", paddingLeft: "18px" }}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [values, setValues] = useState<LeadValues>({
    name: "",
    email: "",
    force: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<keyof LeadValues, string>>({
    name: "",
    email: "",
    force: "",
    consent: "",
  });
  const [formError, setFormError] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const updateField = <K extends keyof LeadValues>(key: K, value: LeadValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
    setFormError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateLead(values);

    setErrors(nextErrors);

    if (hasErrors(nextErrors)) {
      setFormError("Revise os campos destacados antes de continuar.");
      focusFirstInvalid(formRef.current);
      return;
    }

    setSubmitting(true);
    setFormError("");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: "32px" }}>
        <Alert variant="success" title="Inscrição recebida">
          <p style={{ margin: 0 }}>
            Em breve você receberá nosso material gratuito de preparação no e-mail informado.
          </p>
        </Alert>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "16px", maxWidth: "400px" }}
    >
      {formError ? (
        <Alert variant="error" title="Não foi possível enviar">
          <p style={{ margin: 0 }}>{formError}</p>
          <ErrorList items={Object.values(errors).filter(Boolean)} />
        </Alert>
      ) : null}

      <Input
        label="Nome completo"
        placeholder="Seu nome"
        required
        value={values.name}
        onChange={(e) => updateField("name", e.target.value)}
        inputState={errors.name ? "error" : "default"}
        helperText={errors.name || "Use o nome como ele deve aparecer no cadastro."}
      />
      <Input
        label="E-mail"
        type="email"
        placeholder="email@exemplo.com"
        required
        value={values.email}
        onChange={(e) => updateField("email", e.target.value)}
        inputState={errors.email ? "error" : "default"}
        helperText={errors.email || "Enviaremos o material gratuito para este endereço."}
      />
      <Select
        label="Força de interesse"
        options={forcaOptions}
        placeholder="Selecione..."
        required
        value={values.force}
        onChange={(e) => updateField("force", e.target.value)}
        inputState={errors.force ? "error" : "default"}
        helperText={errors.force || "Isso nos ajuda a personalizar a sequência inicial."}
      />
      <Checkbox
        label="Aceito receber conteúdos e comunicações da EuMilitar"
        checked={values.consent}
        onChange={(e) => updateField("consent", e.target.checked)}
        inputState={errors.consent ? "error" : "default"}
        helperText={errors.consent || "Você pode cancelar esse recebimento depois."}
      />
      <Button
        variant="primary"
        size="md"
        icon={<ArrowIcon />}
        iconPosition="right"
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
        style={{ marginTop: "4px" }}
      >
        {submitting ? "Enviando..." : "Receber material gratuito"}
      </Button>
      <p
        aria-live="polite"
        style={{ margin: 0, minHeight: "18px", fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--pencil-soft)" }}
      >
        {submitting ? "Validando e enviando seus dados..." : ""}
      </p>
    </form>
  );
}

function FullForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [values, setValues] = useState<SignupValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    force: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<keyof SignupValues, string>>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    force: "",
    consent: "",
  });
  const [formError, setFormError] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const updateField = <K extends keyof SignupValues>(key: K, value: SignupValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
    setFormError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateSignup(values);

    setErrors(nextErrors);

    if (hasErrors(nextErrors)) {
      setFormError("Preencha os campos obrigatórios e revise os dados inválidos.");
      focusFirstInvalid(formRef.current);
      return;
    }

    setSubmitting(true);
    setFormError("");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: "40px 48px" }}>
        <Alert variant="success" title="Inscrição confirmada">
          <p style={{ margin: "0 0 8px" }}>
            Você receberá as instruções de acesso no e-mail informado em até 10 minutos.
          </p>
          <p style={{ margin: 0 }}>
            A equipe comercial pode entrar em contato para confirmar a força e a turma de interesse.
          </p>
        </Alert>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}
    >
      {/* Coluna esquerda — copy */}
      <div style={{ background: "var(--surface-brand)", padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-inverse-faint)", marginBottom: "16px" }}>
          Garanta sua vaga
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "36px",
          fontWeight: 900,
          textTransform: "uppercase",
          color: "var(--text-inverse)",
          lineHeight: 1,
          margin: "0 0 16px",
        }}>
          Comece sua preparação hoje
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-inverse-muted)", lineHeight: 1.65, margin: "0 0 28px" }}>
          Acesso imediato ao curso completo. Cancele quando quiser.
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "Trilhas por força e cargo",
            "Banco com +10.000 questões",
            "Simulados semanais",
            "Suporte por e-mail",
          ].map((item) => (
            <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-inverse-soft)" }}>
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
        {formError ? (
          <Alert variant="error" title="Dados pendentes">
            <p style={{ margin: 0 }}>{formError}</p>
            <ErrorList items={Object.values(errors).filter(Boolean)} />
          </Alert>
        ) : null}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <Input
            label="Nome"
            placeholder="Nome"
            required
            value={values.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            inputState={errors.firstName ? "error" : "default"}
            helperText={errors.firstName || "Use o primeiro nome do candidato."}
          />
          <Input
            label="Sobrenome"
            placeholder="Sobrenome"
            required
            value={values.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            inputState={errors.lastName ? "error" : "default"}
            helperText={errors.lastName || "Use o sobrenome principal do cadastro."}
          />
        </div>
        <Input
          label="E-mail"
          type="email"
          placeholder="email@exemplo.com"
          required
          value={values.email}
          onChange={(e) => updateField("email", e.target.value)}
          inputState={errors.email ? "error" : "default"}
          helperText={errors.email || "O acesso será liberado para este endereço."}
        />
        <Input
          label="Telefone"
          type="tel"
          placeholder="(11) 99999-9999"
          value={values.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          inputState={errors.phone ? "error" : "default"}
          helperText={errors.phone || "Opcional. Informe com DDD se quiser atendimento prioritário."}
        />
        <Select
          label="Força de interesse"
          options={forcaOptions}
          placeholder="Selecione..."
          required
          value={values.force}
          onChange={(e) => updateField("force", e.target.value)}
          inputState={errors.force ? "error" : "default"}
          helperText={errors.force || "Usamos essa informação para direcionar a turma correta."}
        />
        <Checkbox
          label="Aceito receber comunicações da EuMilitar por e-mail e WhatsApp"
          checked={values.consent}
          onChange={(e) => updateField("consent", e.target.checked)}
          inputState={errors.consent ? "error" : "default"}
          helperText={errors.consent || "Esse aceite é necessário para a sequência de matrícula e suporte."}
        />
        <Button
          variant="urgent"
          size="md"
          icon={<ArrowIcon />}
          iconPosition="right"
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          style={{ marginTop: "4px" }}
        >
          {submitting ? "Processando inscrição..." : "Garantir minha vaga"}
        </Button>
        <p
          aria-live="polite"
          style={{ margin: 0, minHeight: "18px", fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--pencil-soft)" }}
        >
          {submitting ? "Verificando dados e reservando sua vaga..." : ""}
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--pencil-soft)", textAlign: "center", lineHeight: 1.6 }}>
          Garantia de 7 dias · Cancele quando quiser
        </p>
      </div>
    </form>
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
        {captureDefinition ? <PatternContract definition={captureDefinition} /> : null}

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
        <PatternGuidelines
          rows={[
            { title: "Peça só o necessário para a ação imediata", description: "Cada campo extra reduz conversão." },
            { title: "Label sempre visível acima do campo", description: "Nunca dependa só de placeholder para contexto." },
            { title: "CTA descreve o resultado", description: "'Receber material' comunica melhor do que 'Enviar'." },
            { title: "Feedback de sucesso substitui o form", description: "Evita confusão pós-submissão e duplicidade de estado." },
            { title: "Urgência no CTA apenas quando for real", description: "Button urgent deve permanecer reservado para escassez." },
          ]}
        />

      </div>
    </div>
  );
}
