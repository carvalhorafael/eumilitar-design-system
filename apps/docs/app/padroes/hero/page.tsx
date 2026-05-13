import { Header } from "@/components/layout/Header";
import { PatternGuidelines } from "@/components/docs/PatternGuidelines";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Button, Badge, Alert } from "@eumilitar/ui";
import { PatternContract, PatternShell, UsedComponents, getPatternDefinition } from "@eumilitar/patterns";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Padrão — Hero" };

const forcaBadges = (
  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
    <Badge variant="ex" size="sm">Exército</Badge>
    <Badge variant="mb" size="sm">Marinha</Badge>
    <Badge variant="fab" size="sm">Aeronáutica</Badge>
    <Badge variant="pm" size="sm">Polícia Militar</Badge>
    <Badge variant="bm" size="sm">Bombeiros</Badge>
  </div>
);

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 6h8M6 2l4 4-4 4" />
  </svg>
);

const heroDefinition = getPatternDefinition("hero");

export default function HeroPage() {
  return (
    <div>
      <Header
        section="Padrões — 01"
        title="Hero"
        description="Blocos de entrada de página. Estabelecem a proposta de valor, hierarquia de CTA e identidade visual da força. Três variações: claro, escuro e com urgência."
      />

      <div className="px-10 py-10 max-w-5xl">
        {heroDefinition ? <PatternContract definition={heroDefinition} /> : null}

        <SectionLabel
          number="01.1"
          title="Hero Claro"
          description="Fundo paper, headline em display, CTA primário verde + secundário. Padrão para páginas institucionais e de força."
        />
        <PatternShell label="Variação clara — fundo paper">
          <div style={{ background: "var(--paper)", padding: "64px 48px" }}>
            <div style={{ maxWidth: "640px" }}>
              <div style={{ marginBottom: "16px" }}>{forcaBadges}</div>
              <h1 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(42px, 6vw, 72px)",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
                color: "var(--ink)",
                margin: "0 0 20px",
              }}>
                Prepare-se para<br />
                <span style={{ color: "var(--accent)" }}>as Forças Armadas</span>
              </h1>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "18px",
                color: "var(--pencil)",
                lineHeight: 1.6,
                margin: "0 0 32px",
                maxWidth: "480px",
              }}>
                Trilhas de estudo por força, banco de questões comentadas e simulados cronometrados. Do zero à aprovação.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Button variant="primary" size="lg" icon={<ArrowIcon />} iconPosition="right">
                  Começar agora
                </Button>
                <Button variant="secondary" size="lg">
                  Ver planos
                </Button>
              </div>
            </div>
          </div>
          <UsedComponents items={["Button", "Badge"]} />
        </PatternShell>

        <SectionLabel
          number="01.2"
          title="Hero Escuro — Brand"
          description="Fundo verde da marca, texto inverse. Para páginas de conversão de alto impacto."
        />
        <PatternShell label="Variação escura — fundo brand">
          <div style={{ background: "var(--surface-brand)", padding: "64px 48px" }}>
            <div style={{ maxWidth: "640px" }}>
              <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {["Exército", "Marinha", "Aeronáutica", "PM", "Bombeiros"].map((f) => (
                    <span
                      key={f}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--text-inverse-faint)",
                        border: "1px solid var(--border-inverse-soft)",
                        padding: "3px 8px",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <h1 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(42px, 6vw, 72px)",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 0.95,
                color: "var(--text-inverse)",
                margin: "0 0 20px",
              }}>
                Sua aprovação<br />começa aqui
              </h1>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "18px",
                color: "var(--text-inverse-muted)",
                lineHeight: 1.6,
                margin: "0 0 32px",
                maxWidth: "480px",
              }}>
                Método validado por mais de 12.000 aprovados. Estude com quem conhece o concurso.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Button variant="brand-inverse" size="lg" icon={<ArrowIcon />} iconPosition="right">
                  Começar agora
                </Button>
                <Button variant="ghost-inverse" size="lg">
                  Saiba mais
                </Button>
              </div>
            </div>
          </div>
          <UsedComponents items={["Button (brand-inverse, ghost)"]} />
        </PatternShell>

        <SectionLabel
          number="01.3"
          title="Hero com Urgência"
          description="Alert urgent no topo + CTA laranja. Reserve para quando há prazo real de inscrições."
        />
        <PatternShell label="Com alerta de urgência — vagas limitadas">
          <div>
            <Alert variant="urgent" title="Inscrições encerram em 48 horas">
              Restam apenas 23 vagas na turma de Sargento do Exército — Turma Julho 2025. Garanta sua vaga agora.
            </Alert>
            <div style={{ background: "var(--paper)", padding: "56px 48px" }}>
              <div style={{ maxWidth: "640px" }}>
                <div style={{ marginBottom: "16px" }}>{forcaBadges}</div>
                <h1 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(42px, 6vw, 68px)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 0.95,
                  color: "var(--ink)",
                  margin: "0 0 20px",
                }}>
                  Última turma<br />
                  <span style={{ color: "var(--fire)" }}>do semestre</span>
                </h1>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "18px",
                  color: "var(--pencil)",
                  lineHeight: 1.6,
                  margin: "0 0 32px",
                  maxWidth: "480px",
                }}>
                  Acesso imediato ao curso completo para Sargento do Exército com suporte até a prova.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Button variant="urgent" size="lg" icon={<ArrowIcon />} iconPosition="right">
                    Garantir vaga agora
                  </Button>
                  <Button variant="ghost" size="lg">
                    Ver detalhes
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <UsedComponents items={["Alert (urgent)", "Button (urgent, ghost)", "Badge"]} />
        </PatternShell>

        <SectionLabel
          number="01.4"
          title="Diretrizes de uso"
        />
        <PatternGuidelines
          rows={[
            { title: "Headline sempre em Barlow Condensed 900 uppercase", description: "Mantenha o hero com hierarquia de entrada forte.", aside: "--font-display" },
            { title: "Uma única ação primária por hero", description: "Não use dois botões primary no mesmo agrupamento.", aside: "Button hierarchy" },
            { title: "Urgência real apenas", description: "Não use Hero 01.3 como padrão decorativo.", aside: "--fire (parcimônia)" },
            { title: "Subtítulo em Barlow regular, máximo 2 linhas", description: "Evite heros verbosos ou com quebra excessiva.", aside: "--font-body" },
            { title: "Force badges orientam o usuário", description: "Sempre presente quando há múltiplas forças.", aside: "Badge (ex/mb/fab...)" },
          ]}
        />

      </div>
    </div>
  );
}
