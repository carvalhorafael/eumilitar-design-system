import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Tipografia" };

const scale = [
  { token: "--text-6xl", size: "120px", weight: 900, label: "6XL / Display Hero", family: "display" },
  { token: "--text-5xl", size: "80px", weight: 900, label: "5XL / Display Grande", family: "display" },
  { token: "--text-4xl", size: "64px", weight: 700, label: "4XL / Heading 1", family: "display" },
  { token: "--text-3xl", size: "48px", weight: 700, label: "3XL / Heading 2", family: "display" },
  { token: "--text-2xl", size: "36px", weight: 700, label: "2XL / Heading 3", family: "display" },
  { token: "--text-xl", size: "28px", weight: 600, label: "XL / Heading 4", family: "body" },
  { token: "--text-lg", size: "22px", weight: 600, label: "LG / Lead / Subtítulo", family: "body" },
  { token: "--text-md", size: "18px", weight: 400, label: "MD / Body grande", family: "body" },
  { token: "--text-base", size: "16px", weight: 400, label: "BASE / Body padrão", family: "body" },
  { token: "--text-sm", size: "13px", weight: 400, label: "SM / Auxiliar / Label", family: "body" },
  { token: "--text-xs", size: "11px", weight: 700, label: "XS / Caption / Badge", family: "mono" },
];

const families = [
  {
    name: "Barlow Condensed",
    token: "--font-display",
    role: "Display / Títulos",
    description:
      "Condensada e impactante. Usada em headings, labels de seção em caixa alta e elementos de identidade. Weights: 300, 400, 600, 700, 900.",
    sample: "MISSÃO CUMPRIDA",
    sampleSize: "56px",
    fontFamily: "var(--font-display)",
  },
  {
    name: "Barlow",
    token: "--font-body",
    role: "Body / Interface",
    description:
      "Legível e versátil. Usada em parágrafos, botões, inputs e qualquer texto de interface. Weights: 300, 400, 500, 600, 700, 900.",
    sample: "Prepare-se para a sua aprovação com método e disciplina.",
    sampleSize: "24px",
    fontFamily: "var(--font-body)",
  },
  {
    name: "JetBrains Mono",
    token: "--font-mono",
    role: "Monospace / Código / Labels técnicos",
    description:
      "Monospace de alta legibilidade. Usada em tokens, código, labels técnicos com tracking alto e numeração sequencial.",
    sample: "01 — var(--text-base) · 16px",
    sampleSize: "18px",
    fontFamily: "var(--font-mono)",
  },
];

const usageExamples = [
  {
    label: "Título de seção — caixa alta, condensed, bold",
    element: (
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "48px",
          fontWeight: 900,
          lineHeight: 1.05,
          textTransform: "uppercase",
          color: "var(--ink)",
        }}
      >
        Cursos Militares
      </h2>
    ),
    code: `font: 900 48px/1.05 'Barlow Condensed';\ntext-transform: uppercase;`,
  },
  {
    label: "Label de seção — monospace, tracking largo",
    element: (
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--pencil)",
        }}
      >
        01 — Fundamentos
      </span>
    ),
    code: `font: 700 11px 'JetBrains Mono';\nletter-spacing: 0.15em;\ntext-transform: uppercase;`,
  },
  {
    label: "Parágrafo — body regular",
    element: (
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: 1.6,
          color: "var(--text-secondary)",
          maxWidth: "520px",
        }}
      >
        O EuMilitar prepara candidatos para concursos das Forças Armadas e
        corporações militares com método de estudo comprovado e alto índice de
        aprovação.
      </p>
    ),
    code: `font: 400 16px/1.6 'Barlow';\ncolor: var(--text-secondary);`,
  },
];

export default function TipografiaPage() {
  return (
    <div>
      <Header
        section="Fundamentos — 02"
        title="Tipografia"
        description="Trio tipográfico: Barlow Condensed para display, Barlow para body e JetBrains Mono para elementos técnicos e código."
      />

      <div className="docs-page max-w-5xl">

        {/* Famílias */}
        <SectionLabel
          number="02.1"
          title="Famílias de Fonte"
          description="Três famílias com papéis bem definidos. Nunca intercambie os papéis."
        />
        <div className="flex flex-col gap-6 mb-12">
          {families.map((f) => (
            <div
              key={f.token}
              className="border-2 overflow-hidden"
              style={{
                borderColor: "var(--border-strong)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              {/* Info header */}
              <div
                className="px-6 py-4 flex items-center justify-between border-b-2"
                style={{
                  borderColor: "var(--border-strong)",
                  background: "var(--paper-deep)",
                }}
              >
                <div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest block"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}
                  >
                    {f.token} — {f.role}
                  </span>
                  <span
                    className="text-lg font-bold"
                    style={{ fontFamily: "var(--font-body)", color: "var(--ink)" }}
                  >
                    {f.name}
                  </span>
                </div>
              </div>
              {/* Sample */}
              <div
                className="px-6 py-8"
                style={{ background: "var(--surface-base)" }}
              >
                <p
                  style={{
                    fontFamily: f.fontFamily,
                    fontSize: f.sampleSize,
                    fontWeight: f.name === "JetBrains Mono" ? 400 : 700,
                    color: "var(--ink)",
                    lineHeight: 1.1,
                  }}
                >
                  {f.sample}
                </p>
              </div>
              {/* Description */}
              <div
                className="px-6 py-4 border-t-2"
                style={{
                  borderColor: "var(--border-default)",
                  background: "var(--paper)",
                }}
              >
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Escala */}
        <SectionLabel
          number="02.2"
          title="Escala Tipográfica"
          description="Escala construída em progressão. Use os tokens CSS, não os valores px diretamente."
        />
        <div
          className="border-2 overflow-hidden mb-12"
          style={{
            borderColor: "var(--border-strong)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          {scale.map((s, i) => (
            <div
              key={s.token}
              className="flex items-center gap-6 px-6 py-5 border-b"
              style={{
                borderColor: i < scale.length - 1 ? "var(--border-default)" : "transparent",
                background: i % 2 === 0 ? "var(--surface-raised)" : "var(--paper)",
              }}
            >
              {/* Token label */}
              <div className="w-44 shrink-0">
                <span
                  className="text-xs font-bold block"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}
                >
                  {s.token}
                </span>
                <span
                  className="text-xs"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--pencil-soft)" }}
                >
                  {s.size} · w{s.weight}
                </span>
              </div>
              {/* Sample text */}
              <div className="flex-1 overflow-hidden">
                <span
                  style={{
                    fontFamily:
                      s.family === "display"
                        ? "var(--font-display)"
                        : s.family === "mono"
                        ? "var(--font-mono)"
                        : "var(--font-body)",
                    fontSize: s.size,
                    fontWeight: s.weight,
                    color: "var(--ink)",
                    lineHeight: 1.1,
                    textTransform: s.family === "display" ? "uppercase" : "none",
                    display: "block",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Exemplos de uso */}
        <SectionLabel
          number="02.3"
          title="Exemplos de Uso"
          description="Padrões tipográficos mais comuns. Use como referência ao compor novos elementos."
        />
        <div className="flex flex-col gap-6">
          {usageExamples.map((ex, i) => (
            <div
              key={i}
              className="border-2 overflow-hidden"
              style={{
                borderColor: "var(--border-strong)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                className="px-6 py-2 border-b-2"
                style={{
                  borderColor: "var(--border-strong)",
                  background: "var(--paper-deep)",
                }}
              >
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}
                >
                  {ex.label}
                </span>
              </div>
              <div
                className="px-8 py-10"
                style={{ background: "var(--surface-base)" }}
              >
                {ex.element}
              </div>
              <div
                className="px-6 py-4 border-t-2"
                style={{
                  borderColor: "var(--border-default)",
                  background: "var(--surface-dark)",
                }}
              >
                <pre
                  className="text-xs"
                  style={{ fontFamily: "var(--font-mono)", color: "#85b890" }}
                >
                  {ex.code}
                </pre>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
