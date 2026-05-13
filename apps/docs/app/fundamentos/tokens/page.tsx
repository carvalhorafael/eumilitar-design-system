import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Tokens" };

const allTokens = [
  {
    group: "Cores — Neutros",
    tokens: [
      { token: "--n-50", value: "#f5f0e8", type: "color" },
      { token: "--n-100", value: "#ede4cf", type: "color" },
      { token: "--n-200", value: "#e3d8bd", type: "color" },
      { token: "--n-300", value: "#c8bda5", type: "color" },
      { token: "--n-400", value: "#a89c8a", type: "color" },
      { token: "--n-500", value: "#7d7164", type: "color" },
      { token: "--n-600", value: "#5a5048", type: "color" },
      { token: "--n-700", value: "#433c34", type: "color" },
      { token: "--n-800", value: "#2e2720", type: "color" },
      { token: "--n-900", value: "#1a1612", type: "color" },
    ],
  },
  {
    group: "Cores — Brand",
    tokens: [
      { token: "--b-50", value: "#eaf2eb", type: "color" },
      { token: "--b-100", value: "#d3e8d6", type: "color" },
      { token: "--b-200", value: "#b3d3ba", type: "color" },
      { token: "--b-300", value: "#85b890", type: "color" },
      { token: "--b-400", value: "#5c9968", type: "color" },
      { token: "--b-500", value: "#3b7a47", type: "color" },
      { token: "--b-600", value: "#2d6338", type: "color" },
      { token: "--b-700", value: "#1f4d2a", type: "color" },
      { token: "--b-800", value: "#122318", type: "color" },
      { token: "--b-900", value: "#0a1a0e", type: "color" },
    ],
  },
  {
    group: "Semânticas — Superfícies",
    tokens: [
      { token: "--surface-base", value: "#ede4cf", type: "color" },
      { token: "--surface-brand", value: "#1f4d2a", type: "color" },
      { token: "--surface-dark", value: "#1a1612", type: "color" },
      { token: "--surface-raised", value: "#ffffff", type: "color" },
    ],
  },
  {
    group: "Semânticas — Texto",
    tokens: [
      { token: "--text-primary", value: "#1a1612", type: "color" },
      { token: "--text-secondary", value: "#5a5048", type: "color" },
      { token: "--text-placeholder", value: "#a89c8a", type: "color" },
      { token: "--text-brand", value: "#1f4d2a", type: "color" },
      { token: "--text-inverse", value: "#f5f0e8", type: "color" },
    ],
  },
  {
    group: "Material Impresso",
    tokens: [
      { token: "--ink", value: "#1a1612", type: "color" },
      { token: "--ink-soft", value: "#3a322a", type: "color" },
      { token: "--pencil", value: "#7d7164", type: "color" },
      { token: "--pencil-soft", value: "#a89c8a", type: "color" },
      { token: "--paper", value: "#ede4cf", type: "color" },
      { token: "--paper-deep", value: "#e3d8bd", type: "color" },
      { token: "--block", value: "#d4c8a8", type: "color" },
      { token: "--rule", value: "#c8bda5", type: "color" },
    ],
  },
  {
    group: "Tipografia — Famílias",
    tokens: [
      { token: "--font-display", value: "'Barlow Condensed', sans-serif", type: "font" },
      { token: "--font-body", value: "'Barlow', sans-serif", type: "font" },
      { token: "--font-mono", value: "'JetBrains Mono', monospace", type: "font" },
    ],
  },
  {
    group: "Tipografia — Tamanhos",
    tokens: [
      { token: "--text-xs", value: "11px", type: "size" },
      { token: "--text-sm", value: "13px", type: "size" },
      { token: "--text-base", value: "16px", type: "size" },
      { token: "--text-md", value: "18px", type: "size" },
      { token: "--text-lg", value: "22px", type: "size" },
      { token: "--text-xl", value: "28px", type: "size" },
      { token: "--text-2xl", value: "36px", type: "size" },
      { token: "--text-3xl", value: "48px", type: "size" },
      { token: "--text-4xl", value: "64px", type: "size" },
      { token: "--text-5xl", value: "80px", type: "size" },
      { token: "--text-6xl", value: "120px", type: "size" },
    ],
  },
  {
    group: "Espaçamento",
    tokens: [
      { token: "--sp-1", value: "4px", type: "size" },
      { token: "--sp-2", value: "8px", type: "size" },
      { token: "--sp-3", value: "12px", type: "size" },
      { token: "--sp-4", value: "16px", type: "size" },
      { token: "--sp-5", value: "20px", type: "size" },
      { token: "--sp-6", value: "24px", type: "size" },
      { token: "--sp-8", value: "32px", type: "size" },
      { token: "--sp-10", value: "40px", type: "size" },
      { token: "--sp-12", value: "48px", type: "size" },
      { token: "--sp-16", value: "64px", type: "size" },
      { token: "--sp-20", value: "80px", type: "size" },
      { token: "--sp-24", value: "96px", type: "size" },
    ],
  },
  {
    group: "Efeitos",
    tokens: [
      { token: "--radius-sm", value: "2px", type: "size" },
      { token: "--radius-md", value: "4px", type: "size" },
      { token: "--radius-lg", value: "8px", type: "size" },
      { token: "--radius-full", value: "999px", type: "size" },
      { token: "--shadow-sm", value: "2px 2px 0 var(--ink)", type: "shadow" },
      { token: "--shadow-md", value: "4px 4px 0 var(--ink)", type: "shadow" },
      { token: "--shadow-lg", value: "6px 6px 0 var(--ink)", type: "shadow" },
      { token: "--shadow-brand", value: "4px 4px 0 var(--accent)", type: "shadow" },
    ],
  },
];

export default function TokensPage() {
  return (
    <div>
      <Header
        section="Fundamentos — 04"
        title="Tokens"
        description="Referência completa de todas as CSS Custom Properties. Esta é a fonte da verdade — qualquer produto EuMilitar deve consumir esses tokens."
      />
      <div className="docs-page max-w-4xl">
        {allTokens.map((group, gi) => (
          <div key={group.group} className="mb-10">
            <SectionLabel number={`0${gi + 1}`} title={group.group} />
            <div
              className="border-2 overflow-hidden"
              style={{ borderColor: "var(--border-strong)", boxShadow: "var(--shadow-sm)" }}
            >
              {group.tokens.map((t, i) => (
                <div
                  key={t.token}
                  className="flex items-center gap-4 px-5 py-3 border-b"
                  style={{
                    borderColor: i < group.tokens.length - 1 ? "var(--border-default)" : "transparent",
                    background: i % 2 === 0 ? "var(--surface-raised)" : "var(--paper)",
                  }}
                >
                  {t.type === "color" && (
                    <div
                      className="w-6 h-6 shrink-0 border"
                      style={{
                        background: t.value,
                        borderColor: "var(--border-strong)",
                      }}
                    />
                  )}
                  <span
                    className="flex-1 text-sm font-bold"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--ink)" }}
                  >
                    {t.token}
                  </span>
                  <span
                    className="text-sm"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}
                  >
                    {t.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
