import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Button, Badge, Alert } from "@eumilitar/ui";
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

function PatternShell({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <p style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "var(--pencil)",
        marginBottom: "12px",
      }}>
        {label}
      </p>
      <div style={{
        border: "2px solid var(--border-strong)",
        boxShadow: "var(--shadow-md)",
        overflow: "hidden",
      }}>
        {children}
      </div>
      </div>
  );
}

function UsedComponents({ items }: { items: string[] }) {
  return (
    <div style={{
      borderTop: "1px solid var(--border-default)",
      padding: "10px 20px",
      background: "var(--paper)",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flexWrap: "wrap",
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

export default function HeroPage() {
  return (
    <div>
      <Header
        section="Padrões — 01"
        title="Hero"
        description="Blocos de entrada de página. Estabelecem a proposta de valor, hierarquia de CTA e identidade visual da força. Três variações: claro, escuro e com urgência."
      />

      <div className="px-10 py-10 max-w-5xl">

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
                        color: "rgba(245,240,232,0.55)",
                        border: "1px solid rgba(245,240,232,0.25)",
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
                color: "#f5f0e8",
                margin: "0 0 20px",
              }}>
                Sua aprovação<br />começa aqui
              </h1>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "18px",
                color: "rgba(245,240,232,0.75)",
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
        <div
          className="border-2 p-6"
          style={{ borderColor: "var(--border-default)", background: "var(--paper)", fontFamily: "var(--font-mono)", fontSize: "12px" }}
        >
          {[
            { regra: "Headline sempre em Barlow Condensed 900 uppercase", token: "--font-display" },
            { regra: "Uma única ação primária por hero — não use dois botões primary", token: "Button hierarchy" },
            { regra: "Urgência real apenas — não use Hero 01.3 como padrão decorativo", token: "--fire (parcimônia)" },
            { regra: "Subtítulo em Barlow regular, máximo 2 linhas", token: "--font-body" },
            { regra: "Force badges orientam o usuário — sempre presente quando há múltiplas forças", token: "Badge (ex/mb/fab...)" },
          ].map((row, i) => (
            <div key={i} className="flex gap-6 py-2 border-b last:border-0" style={{ borderColor: "var(--rule)" }}>
              <span style={{ flex: 1, color: "var(--ink)", lineHeight: 1.6 }}>{row.regra}</span>
              <code style={{ flexShrink: 0, color: "var(--pencil)", fontSize: "11px" }}>{row.token}</code>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
