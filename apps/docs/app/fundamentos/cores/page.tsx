import { Header } from "@/components/layout/Header";
import { PaletteRow, SemanticGroup, ColorSwatch } from "@/components/docs/ColorSwatch";
import { SectionLabel } from "@/components/docs/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Cores" };

const fireScale = [
  { name: "Base", value: "#C4521A", token: "--fire",       textColor: "light" as const },
  { name: "Light", value: "#E8AC80", token: "--fire-light", textColor: "dark" as const },
  { name: "Pale",  value: "#F7E8DC", token: "--fire-pale",  textColor: "dark" as const },
];

const urgencyTokens = [
  { token: "--fire",        value: "#C4521A", description: "Base — fundo de badge urgente, botão CTA máximo" },
  { token: "--fire-light",  value: "#E8AC80", description: "Light — bordas, ícones e texto sobre claro" },
  { token: "--fire-pale",   value: "#F7E8DC", description: "Pale — fundo sutil de banners de alerta" },
  { token: "--urgent",      value: "#C4521A", description: "Alias semântico → var(--fire)" },
  { token: "--urgent-light",value: "#E8AC80", description: "Alias semântico → var(--fire-light)" },
  { token: "--urgent-pale", value: "#F7E8DC", description: "Alias semântico → var(--fire-pale)" },
  { token: "--shadow-urgent",value: "4px 4px 0 #C4521A", description: "Shadow offset com cor de urgência" },
];

const neutralScale = [
  { name: "50", value: "#f5f0e8", token: "--n-50", textColor: "dark" as const },
  { name: "100", value: "#ede4cf", token: "--n-100", textColor: "dark" as const },
  { name: "200", value: "#e3d8bd", token: "--n-200", textColor: "dark" as const },
  { name: "300", value: "#c8bda5", token: "--n-300", textColor: "dark" as const },
  { name: "400", value: "#a89c8a", token: "--n-400", textColor: "dark" as const },
  { name: "500", value: "#7d7164", token: "--n-500", textColor: "light" as const },
  { name: "600", value: "#5a5048", token: "--n-600", textColor: "light" as const },
  { name: "700", value: "#433c34", token: "--n-700", textColor: "light" as const },
  { name: "800", value: "#2e2720", token: "--n-800", textColor: "light" as const },
  { name: "900", value: "#1a1612", token: "--n-900", textColor: "light" as const },
];

const brandScale = [
  { name: "50", value: "#eaf2eb", token: "--b-50", textColor: "dark" as const },
  { name: "100", value: "#d3e8d6", token: "--b-100", textColor: "dark" as const },
  { name: "200", value: "#b3d3ba", token: "--b-200", textColor: "dark" as const },
  { name: "300", value: "#85b890", token: "--b-300", textColor: "dark" as const },
  { name: "400", value: "#5c9968", token: "--b-400", textColor: "light" as const },
  { name: "500", value: "#3b7a47", token: "--b-500", textColor: "light" as const },
  { name: "600", value: "#2d6338", token: "--b-600", textColor: "light" as const },
  { name: "700", value: "#1f4d2a", token: "--b-700", textColor: "light" as const },
  { name: "800", value: "#122318", token: "--b-800", textColor: "light" as const },
  { name: "900", value: "#0a1a0e", token: "--b-900", textColor: "light" as const },
];

const semanticSurfaces = [
  { token: "--surface-base", value: "#ede4cf", description: "Fundo principal da aplicação" },
  { token: "--surface-brand", value: "#1f4d2a", description: "Fundo em verde da marca" },
  { token: "--surface-dark", value: "#1a1612", description: "Fundo escuro / dark mode base" },
  { token: "--surface-raised", value: "#ffffff", description: "Cards, modais e elementos elevados" },
];

const semanticText = [
  { token: "--text-primary", value: "#1a1612", description: "Texto principal" },
  { token: "--text-secondary", value: "#5a5048", description: "Texto secundário e labels" },
  { token: "--text-placeholder", value: "#a89c8a", description: "Placeholders e texto desabilitado" },
  { token: "--text-brand", value: "#1f4d2a", description: "Texto da marca / links ativos" },
  { token: "--text-inverse", value: "#f5f0e8", description: "Texto sobre fundos escuros" },
];

const semanticBorders = [
  { token: "--border-brand", value: "#1f4d2a", description: "Borda da marca" },
  { token: "--border-default", value: "#c8bda5", description: "Borda padrão" },
  { token: "--border-strong", value: "#433c34", description: "Borda de alto contraste" },
];

const materialTokens = [
  { token: "--ink", value: "#1a1612", description: "Tinta principal — texto e ícones" },
  { token: "--ink-soft", value: "#3a322a", description: "Tinta suavizada" },
  { token: "--pencil", value: "#7d7164", description: "Lápis — secundário" },
  { token: "--pencil-soft", value: "#a89c8a", description: "Lápis suavizado — terciário" },
  { token: "--paper", value: "#ede4cf", description: "Papel — fundo de cards" },
  { token: "--paper-deep", value: "#e3d8bd", description: "Papel mais escuro — separadores" },
  { token: "--block", value: "#d4c8a8", description: "Bloco — fundo de seções" },
  { token: "--rule", value: "#c8bda5", description: "Régua — linhas divisórias" },
];

const forcas = [
  {
    name: "Exército Brasileiro",
    abbr: "EX",
    base: "#1f4d2a",
    light: "#c3d4bd",
    pale: "#eaf2eb",
    tokens: ["--ex", "--ex-light", "--ex-pale"],
    textColor: "light" as const,
  },
  {
    name: "Marinha do Brasil",
    abbr: "MB",
    base: "#132645",
    light: "#b8c8dc",
    pale: "#e5edf5",
    tokens: ["--mb", "--mb-light", "--mb-pale"],
    textColor: "light" as const,
  },
  {
    name: "Força Aérea Brasileira",
    abbr: "FAB",
    base: "#1a3d5c",
    light: "#bdd0e3",
    pale: "#e8f0f7",
    tokens: ["--fab", "--fab-light", "--fab-pale"],
    textColor: "light" as const,
  },
  {
    name: "Polícia Militar",
    abbr: "PM",
    base: "#1e1e58",
    light: "#b4b4e0",
    pale: "#e8e8f5",
    tokens: ["--pm", "--pm-light", "--pm-pale"],
    textColor: "light" as const,
  },
  {
    name: "Corpo de Bombeiros",
    abbr: "BM",
    base: "#5c1212",
    light: "#e0b0b0",
    pale: "#f5e5e5",
    tokens: ["--bm", "--bm-light", "--bm-pale"],
    textColor: "light" as const,
  },
];

export default function CoresPage() {
  return (
    <div>
      <Header
        section="Fundamentos — 01"
        title="Cores"
        description="Sistema de cores da EuMilitar: escala primitiva, tokens semânticos e paletas das forças militares. Clique em qualquer swatch para copiar o valor hex."
      />

      <div className="docs-page max-w-6xl">

        {/* Escala primitiva */}
        <SectionLabel
          number="01.1"
          title="Escala Primitiva"
          description="As escalas brutas de cor. Use os tokens semânticos nos componentes — estas escalas são a referência da fonte da verdade."
        />
        <PaletteRow label="Neutros — --n-*" swatches={neutralScale} />
        <PaletteRow label="Brand / Verde Militar — --b-*" swatches={brandScale} />
        <PaletteRow label="Urgência / Fire — --fire-*" swatches={fireScale} />

        {/* Metáfora de material */}
        <SectionLabel
          number="01.2"
          title="Metáfora de Material"
          description="Tokens inspirados em material impresso: tinta, lápis, papel, bloco e régua. Usados para hierarquia de texto e superfícies."
        />
        <SemanticGroup group="Material Impresso" items={materialTokens} />

        {/* Semânticas */}
        <SectionLabel
          number="01.3"
          title="Tokens Semânticos"
          description="Tokens de uso — sempre prefira estes nos componentes em vez dos valores primitivos."
        />
        <SemanticGroup group="Superfícies" items={semanticSurfaces} />
        <SemanticGroup group="Texto" items={semanticText} />
        <SemanticGroup group="Bordas" items={semanticBorders} />

        {/* Urgência — tokens */}
        <SectionLabel
          number="01.4"
          title="Urgência & Fire"
          description="Âmbar queimado — complementar ao verde, máximo contraste visual. Reserve para escassez, prazo e CTA prioritário. Exemplos de uso em Componentes → Badge e Button."
        />
        <SemanticGroup group="Tokens de Urgência" items={urgencyTokens} />

        {/* Forças militares */}
        <SectionLabel
          number="01.5"
          title="Forças Militares"
          description="Paletas específicas para cada força. Cada grupo tem três tons: base (saturado, para fundo de badge), light (para bordas e ícones) e pale (para fundos sutis)."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {forcas.map((f) => (
            <div
              key={f.abbr}
              className="border-2 overflow-hidden"
              style={{
                borderColor: "var(--border-strong)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              {/* Header da força */}
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{ background: f.base }}
              >
                <span
                  className="text-2xl font-black uppercase leading-none"
                  style={{ fontFamily: "var(--font-display)", color: "#f5f0e8" }}
                >
                  {f.abbr}
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "rgba(245,240,232,0.75)" }}
                >
                  {f.name}
                </span>
              </div>
              {/* Swatches */}
              <div className="grid grid-cols-3">
                {[
                  { value: f.base, label: "Base", token: f.tokens[0], textColor: "light" as const },
                  { value: f.light, label: "Light", token: f.tokens[1], textColor: "dark" as const },
                  { value: f.pale, label: "Pale", token: f.tokens[2], textColor: "dark" as const },
                ].map((s) => (
                  <ColorSwatch
                    key={s.token}
                    name={s.label}
                    value={s.value}
                    token={s.token}
                    textColor={s.textColor}
                    size="sm"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
