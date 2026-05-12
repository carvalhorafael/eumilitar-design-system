import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Espaçamento" };

const scale = [
  { token: "--sp-1",  value: "4px",  px: 4,  uso: "Gap mínimo entre ícone e label" },
  { token: "--sp-2",  value: "8px",  px: 8,  uso: "Padding interno de badges e chips" },
  { token: "--sp-3",  value: "12px", px: 12, uso: "Padding vertical de inputs" },
  { token: "--sp-4",  value: "16px", px: 16, uso: "Padding interno de botões, gap em listas" },
  { token: "--sp-5",  value: "20px", px: 20, uso: "Padding interno de cards pequenos" },
  { token: "--sp-6",  value: "24px", px: 24, uso: "Gap entre seções de card, padding de sidebar" },
  { token: "--sp-8",  value: "32px", px: 32, uso: "Margin entre componentes de seção" },
  { token: "--sp-10", value: "40px", px: 40, uso: "Padding de painéis, gap entre colunas" },
  { token: "--sp-12", value: "48px", px: 48, uso: "Padding de header, espaço entre seções" },
  { token: "--sp-16", value: "64px", px: 64, uso: "Margin de layout, espaço entre blocos grandes" },
  { token: "--sp-20", value: "80px", px: 80, uso: "Seção hero, espaço vertical de página" },
  { token: "--sp-24", value: "96px", px: 96, uso: "Margem máxima de layout de página" },
];

const contextExamples = [
  {
    label: "Espaçamento interno de componente — Button",
    description: "px --sp-4 (16px) · py --sp-2 (8px) · gap --sp-2 (8px)",
    render: (
      <div className="flex items-center gap-6 flex-wrap">
        {["Primário", "Secundário", "Ghost"].map((label, i) => (
          <button
            key={label}
            style={{
              paddingTop: "8px",
              paddingBottom: "8px",
              paddingLeft: "16px",
              paddingRight: "16px",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              border: "2px solid var(--border-strong)",
              background: i === 0 ? "var(--surface-brand)" : i === 1 ? "var(--paper)" : "transparent",
              color: i === 0 ? "var(--text-inverse)" : "var(--ink)",
              boxShadow: i < 2 ? "var(--shadow-sm)" : "none",
              cursor: "default",
            }}
          >
            {label}
          </button>
        ))}
      </div>
    ),
  },
  {
    label: "Espaçamento de lista — gap --sp-2 (8px)",
    description: "Listas de itens com separação mínima",
    render: (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "320px" }}>
        {["01 — Exército Brasileiro", "02 — Marinha do Brasil", "03 — Força Aérea"].map((item) => (
          <div
            key={item}
            style={{
              padding: "12px 16px",
              border: "2px solid var(--border-default)",
              background: "var(--paper)",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--ink)",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Espaçamento de card — padding --sp-6 (24px)",
    description: "Gap entre seções internas do card: --sp-4 (16px)",
    render: (
      <div
        style={{
          border: "2px solid var(--border-strong)",
          boxShadow: "var(--shadow-md)",
          background: "var(--paper)",
          maxWidth: "320px",
          width: "100%",
        }}
      >
        <div
          style={{
            padding: "24px",
            borderBottom: "2px solid var(--border-default)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--pencil)",
              display: "block",
              marginBottom: "4px",
            }}
          >
            01 — Destaque
          </span>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "22px",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "var(--ink)",
              lineHeight: 1.1,
            }}
          >
            Card de Exemplo
          </p>
        </div>
        <div style={{ padding: "24px" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>
            Padding interno: 24px (--sp-6). Gap entre elementos: 16px (--sp-4).
          </p>
          <button
            style={{
              padding: "8px 16px",
              border: "2px solid var(--border-strong)",
              background: "var(--surface-brand)",
              color: "var(--text-inverse)",
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              boxShadow: "var(--shadow-sm)",
              cursor: "default",
            }}
          >
            Ação →
          </button>
        </div>
      </div>
    ),
  },
  {
    label: "Grid de layout — gap --sp-8 (32px)",
    description: "Separação entre colunas de conteúdo",
    render: (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px", maxWidth: "480px" }}>
        {["EX", "MB", "FAB"].map((abbr, i) => {
          const colors = ["#1f4d2a", "#132645", "#1a3d5c"];
          return (
            <div
              key={abbr}
              style={{
                background: colors[i],
                padding: "16px",
                border: "2px solid var(--border-strong)",
                boxShadow: "var(--shadow-sm)",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "28px",
                  fontWeight: 900,
                  color: "#f5f0e8",
                  display: "block",
                }}
              >
                {abbr}
              </span>
            </div>
          );
        })}
      </div>
    ),
  },
];

export default function EspacamentoPage() {
  return (
    <div>
      <Header
        section="Fundamentos — 03"
        title="Espaçamento"
        description="Grid de 4px. Use exclusivamente os tokens --sp-* nos componentes — jamais valores px avulsos."
      />
      <div className="px-10 py-10 max-w-5xl">

        {/* Escala visual */}
        <SectionLabel
          number="03.1"
          title="Escala"
          description="12 passos, base 4px. A barra verde mostra proporção visual do valor."
        />
        <div
          className="border-2 overflow-hidden mb-12"
          style={{ borderColor: "var(--border-strong)", boxShadow: "var(--shadow-md)" }}
        >
          {scale.map((s, i) => (
            <div
              key={s.token}
              className="flex items-center gap-5 px-6 py-4 border-b"
              style={{
                borderColor: i < scale.length - 1 ? "var(--border-default)" : "transparent",
                background: i % 2 === 0 ? "var(--surface-raised)" : "var(--paper)",
              }}
            >
              {/* Token */}
              <span
                className="shrink-0 text-xs font-bold"
                style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)", width: "80px" }}
              >
                {s.token}
              </span>
              {/* Valor */}
              <span
                className="shrink-0 text-xs font-bold"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink)", width: "44px" }}
              >
                {s.value}
              </span>
              {/* Barra */}
              <div className="flex-1 flex items-center gap-3">
                <div
                  style={{
                    width: `${Math.min(s.px * 3, 288)}px`,
                    height: "8px",
                    background: "var(--accent)",
                    flexShrink: 0,
                  }}
                />
              </div>
              {/* Uso */}
              <span
                className="shrink-0 text-xs hidden lg:block"
                style={{ color: "var(--text-secondary)", maxWidth: "220px" }}
              >
                {s.uso}
              </span>
            </div>
          ))}
        </div>

        {/* Exemplos contextuais */}
        <SectionLabel
          number="03.2"
          title="Espaçamento em Contexto"
          description="Como os tokens se traduzem em componentes e layouts reais."
        />
        <div className="flex flex-col gap-8">
          {contextExamples.map((ex, i) => (
            <div
              key={i}
              className="border-2 overflow-hidden"
              style={{ borderColor: "var(--border-strong)", boxShadow: "var(--shadow-sm)" }}
            >
              <div
                className="px-6 py-3 border-b-2 flex items-baseline gap-4"
                style={{ borderColor: "var(--border-strong)", background: "var(--paper-deep)" }}
              >
                <span
                  className="text-xs font-black uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                >
                  {ex.label}
                </span>
                <span
                  className="text-xs"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}
                >
                  {ex.description}
                </span>
              </div>
              <div
                className="px-8 py-10 flex items-start"
                style={{ background: "var(--surface-base)" }}
              >
                {ex.render}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
