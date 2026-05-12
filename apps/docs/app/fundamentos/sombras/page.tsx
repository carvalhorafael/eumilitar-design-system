import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { ShadowHoverDemo } from "@/components/docs/ShadowHoverDemo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Sombras & Efeitos" };

const shadows = [
  { token: "--shadow-sm",    value: "2px 2px 0 var(--ink)",    label: "SM",    desc: "Botões secundários, badges, elementos sutis" },
  { token: "--shadow-md",    value: "4px 4px 0 var(--ink)",    label: "MD",    desc: "Botões primários, cards padrão — o mais usado" },
  { token: "--shadow-lg",    value: "6px 6px 0 var(--ink)",    label: "LG",    desc: "Cards de destaque, modais, elementos hero" },
  { token: "--shadow-brand", value: "4px 4px 0 var(--accent)", label: "Brand", desc: "CTAs de alta prioridade, elementos de marca" },
];

const radii = [
  { token: "--radius-sm",   value: "2px",   label: "SM — 2px",   desc: "Padrão para botões e badges" },
  { token: "--radius-md",   value: "4px",   label: "MD — 4px",   desc: "Cards e inputs" },
  { token: "--radius-lg",   value: "8px",   label: "LG — 8px",   desc: "Componentes maiores — usar com moderação" },
  { token: "--radius-full", value: "999px", label: "Full — pill", desc: "Tags e avatares circulares" },
];

export default function SombrasPage() {
  return (
    <div>
      <Header
        section="Fundamentos — 05"
        title="Sombras & Efeitos"
        description="O princípio do design system: sombras offset sem blur. Profundidade honesta — sem ilusionismo. O objeto existe no plano, a sombra mostra onde."
      />

      <div className="px-10 py-10 max-w-5xl">

        {/* Princípio */}
        <div
          className="mb-10 p-6 border-2"
          style={{
            borderColor: "var(--border-strong)",
            background: "var(--surface-dark)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <span
            className="text-xs font-bold uppercase tracking-widest block mb-3"
            style={{ fontFamily: "var(--font-mono)", color: "var(--b-400)" }}
          >
            Princípio — Neo-Brutalismo
          </span>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--n-200)", lineHeight: 1.8 }}>
            <span style={{ color: "var(--b-300)" }}>box-shadow: Xpx Xpx 0 color</span>
            {" — blur sempre "}
            <span style={{ color: "var(--bm-light)" }}>zero</span>.
            {" O offset cria ilusão de elevação sem fingimento. Quanto maior o offset, mais elevado o elemento parece. No hover, o offset colapsa e o elemento translada — simulando pressão física."}
          </p>
        </div>

        {/* Escala de sombras */}
        <SectionLabel
          number="05.1"
          title="Escala de Sombras"
          description="Quatro tokens. Use --shadow-md para 90% dos casos."
        />
        <div className="grid grid-cols-2 gap-6 mb-12 lg:grid-cols-4">
          {shadows.map((s) => (
            <div key={s.token} className="flex flex-col gap-4">
              <div
                style={{
                  height: "80px",
                  background: s.label === "Brand" ? "var(--accent-pale)" : "var(--paper)",
                  border: "2px solid var(--border-strong)",
                  boxShadow: s.value,
                }}
              />
              <div>
                <span
                  className="text-xs font-black uppercase block"
                  style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                >
                  Shadow {s.label}
                </span>
                <span
                  className="text-xs block mb-1"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}
                >
                  {s.token}
                </span>
                <span
                  className="text-xs block mb-2"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--pencil-soft)", wordBreak: "break-all" }}
                >
                  {s.value}
                </span>
                <p className="text-xs" style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hover interativo — Client Component */}
        <SectionLabel
          number="05.2"
          title="Hover — Efeito de Pressão"
          description="Passe o mouse para ver o collapse da sombra. Comportamento padrão de todos os elementos clicáveis."
        />
        <div className="mb-12">
          <ShadowHoverDemo />
        </div>

        {/* Border radius */}
        <SectionLabel
          number="05.3"
          title="Border Radius"
          description="Mínimo. O arredondamento excessivo contradiz o estilo neo-brutalista."
        />
        <div className="grid grid-cols-2 gap-6 mb-12 lg:grid-cols-4">
          {radii.map((r) => (
            <div key={r.token} className="flex flex-col gap-3">
              <div
                style={{
                  height: "64px",
                  background: "var(--paper)",
                  border: "2px solid var(--border-strong)",
                  borderRadius: r.value,
                  boxShadow: "var(--shadow-sm)",
                }}
              />
              <div>
                <span
                  className="text-xs font-black uppercase block"
                  style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                >
                  {r.label}
                </span>
                <span
                  className="text-xs block mb-1"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}
                >
                  {r.token}
                </span>
                <p className="text-xs" style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Efeitos especiais */}
        <SectionLabel
          number="05.4"
          title="Efeitos Especiais"
          description="Highlight, tape e rule — metáfora de material impresso aplicada ao digital."
        />
        <div className="flex flex-col gap-4">
          {/* Highlight */}
          <div
            className="border-2 p-6"
            style={{ borderColor: "var(--border-strong)", background: "var(--paper)", boxShadow: "var(--shadow-sm)" }}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest block mb-4"
              style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}
            >
              --highlight — rgba(255, 220, 80, 0.42)
            </span>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "var(--ink)", lineHeight: 1.8 }}>
              O EuMilitar forma candidatos aprovados nas{" "}
              <span style={{ background: "var(--highlight)", padding: "1px 4px" }}>
                principais escolas militares do Brasil
              </span>{" "}
              com método comprovado e disciplina.
            </p>
          </div>

          {/* Tape + Rule */}
          <div
            className="border-2 p-6"
            style={{ borderColor: "var(--border-strong)", background: "var(--paper)", boxShadow: "var(--shadow-sm)" }}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest block mb-5"
              style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}
            >
              --tape · --tape-edge · --rule
            </span>
            <div className="flex items-start gap-10 flex-wrap">
              {/* Tape demo */}
              <div className="relative">
                <div
                  style={{
                    width: "130px",
                    height: "90px",
                    background: "var(--surface-raised)",
                    border: "1px solid var(--border-default)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    color: "var(--pencil)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  conteúdo
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "-9px",
                    left: "50%",
                    transform: "translateX(-50%) rotate(-2deg)",
                    width: "90px",
                    height: "18px",
                    background: "var(--tape)",
                    borderTop: "1px solid var(--tape-edge)",
                    borderBottom: "1px solid var(--tape-edge)",
                  }}
                />
              </div>
              {/* Rule demo */}
              <div style={{ flex: 1, minWidth: "200px" }}>
                <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                  <code style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--ink)" }}>--rule</code> — linha divisória em bege médio
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <hr style={{ border: "none", borderTop: "1px solid var(--rule)" }} />
                  <hr style={{ border: "none", borderTop: "2px solid var(--rule)" }} />
                  <hr style={{ border: "none", borderTop: "1px solid var(--border-default)" }} />
                  <hr style={{ border: "none", borderTop: "2px solid var(--border-strong)" }} />
                </div>
                <div style={{ display: "flex", gap: "8px", marginTop: "8px", fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--pencil-soft)" }}>
                  <span>--rule</span>
                  <span>--rule 2px</span>
                  <span>--border-default</span>
                  <span>--border-strong</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
