import { Header } from "@/components/layout/Header";
import { PatternGuidelines } from "@/components/docs/PatternGuidelines";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Badge, Button } from "@eumilitar/ui";
import { PatternContract, PatternShell, UsedComponents, getPatternDefinition } from "@eumilitar/patterns";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Padrão — Depoimentos" };

/* ── Ícone ── */
const IconArrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 6h8M6 2l4 4-4 4" />
  </svg>
);

const IconQuote = () => (
  <svg width="28" height="20" viewBox="0 0 28 20" fill="currentColor">
    <path d="M0 20V12.667C0 5.778 3.556 1.556 10.667 0l1.777 2.444C9.111 3.334 7.111 5.334 6.667 8.445H11.11V20H0zm16.889 0V12.667C16.889 5.778 20.444 1.556 27.556 0l1.777 2.444c-3.333.89-5.333 2.89-5.777 6.001H28V20H16.889z" />
  </svg>
);

const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path d="M7 1l1.545 3.09L12 4.636l-2.5 2.436.59 3.437L7 8.946l-3.09 1.563L4.5 7.072 2 4.636l3.455-.546L7 1z" />
  </svg>
);

const testimonialsDefinition = getPatternDefinition("testimonials");

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "var(--fire)" }}><IconStar /></span>
      ))}
    </div>
  );
}

/* ── Dados ── */
type Depoimento = {
  citacao: string;
  nome: string;
  cargo: string;
  forca: "ex" | "mb" | "fab" | "pm" | "bm";
  forcaLabel: string;
  aprovado: string;
};

const depoimentos: Depoimento[] = [
  {
    citacao: "O material de Matemática é o mais completo que já vi para concurso militar. Resolvi mais de 800 questões comentadas e passei na primeira tentativa.",
    nome: "Cabo Rodrigo Almeida",
    cargo: "Aprovado — Sargento do Exército, 2024",
    forca: "ex",
    forcaLabel: "Exército",
    aprovado: "2024",
  },
  {
    citacao: "Estudei 6 meses com a EuMilitar. Os simulados cronometrados foram decisivos — chegué na prova sem ansiedade porque já tinha praticado o formato real.",
    nome: "Camila Torres",
    cargo: "Aprovada — Corpo Feminino da Marinha, 2024",
    forca: "mb",
    forcaLabel: "Marinha",
    aprovado: "2024",
  },
  {
    citacao: "A trilha específica para a FAB é excelente. O suporte dos professores por e-mail resolveu todas as minhas dúvidas de Física durante a preparação.",
    nome: "Tenente Lucas Ferreira",
    cargo: "Aprovado — Oficial da Aeronáutica, 2023",
    forca: "fab",
    forcaLabel: "Aeronáutica",
    aprovado: "2023",
  },
];

const depoimentoDestaque: Depoimento = {
  citacao: "Já tinha tentado outros cursos antes. A diferença da EuMilitar é o foco total no edital — sem enrolação, sem conteúdo genérico. Estudei menos horas por dia e passei melhor do que esperava.",
  nome: "Sgt. Marcos Vieira",
  cargo: "Aprovado — Sargento das Armas, Exército Brasileiro",
  forca: "ex",
  forcaLabel: "Exército",
  aprovado: "2024",
};

export default function DepoimentosPage() {
  return (
    <div>
      <Header
        section="Padrões — 06"
        title="Depoimentos"
        description="Social proof com citação real, nome, patente e força. Duas variações: grid de cards e depoimento único em destaque."
      />

      <div className="px-10 py-10 max-w-5xl">
        {testimonialsDefinition ? <PatternContract definition={testimonialsDefinition} /> : null}

        <SectionLabel
          number="06.1"
          title="Grid de Cards — 3 Colunas"
          description="Formato padrão para listar múltiplos depoimentos. Badge de força ancora a credibilidade ao contexto do concurso."
        />
        <PatternShell label="3 depoimentos — grid de cards">
          <div style={{ background: "var(--paper)", padding: "56px 48px" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <p style={{
                fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.1em",
                color: "var(--pencil)", marginBottom: "10px",
              }}>
                Quem já passou
              </p>
              <h2 style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.5vw, 40px)",
                fontWeight: 900, textTransform: "uppercase",
                color: "var(--ink)", margin: 0,
              }}>
                Aprovados que estudaram<br />com a EuMilitar
              </h2>
            </div>

            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px", background: "var(--border-default)",
              border: "2px solid var(--border-strong)",
            }}>
              {depoimentos.map((d) => (
                <div
                  key={d.nome}
                  style={{
                    background: "var(--surface-raised)",
                    padding: "28px 24px",
                    display: "flex", flexDirection: "column", gap: "16px",
                  }}
                >
                  {/* Aspas + estrelas */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--border-strong)", opacity: 0.4 }}>
                      <IconQuote />
                    </span>
                    <Stars />
                  </div>

                  {/* Citação */}
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "14px",
                    color: "var(--ink)", lineHeight: 1.7,
                    margin: 0, flex: 1,
                    fontStyle: "italic",
                  }}>
                    &ldquo;{d.citacao}&rdquo;
                  </p>

                  {/* Rodapé */}
                  <div style={{ borderTop: "1px solid var(--border-default)", paddingTop: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <Badge variant={d.forca} size="sm">{d.forcaLabel}</Badge>
                    <div>
                      <p style={{
                        fontFamily: "var(--font-display)", fontSize: "14px",
                        fontWeight: 700, textTransform: "uppercase",
                        color: "var(--ink)", margin: "0 0 2px",
                      }}>
                        {d.nome}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-body)", fontSize: "12px",
                        color: "var(--pencil)", margin: 0, lineHeight: 1.4,
                      }}>
                        {d.cargo}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <UsedComponents items={["Badge (ex/mb/fab)", "tokens: --font-display, --surface-raised"]} />
        </PatternShell>

        <SectionLabel
          number="06.2"
          title="Depoimento em Destaque"
          description="Formato de alto impacto para um depoimento único. Aspas grandes, citação ampliada e CTA integrado. Quebra visual eficiente entre seções de conteúdo."
        />
        <PatternShell label="Depoimento único — destaque com CTA">
          <div style={{ background: "var(--surface-dark)", padding: "72px 64px" }}>
            <div style={{ maxWidth: "680px", margin: "0 auto" }}>

              {/* Aspas decorativas */}
              <div style={{ color: "var(--accent)", opacity: 0.5, marginBottom: "24px" }}>
                <svg width="48" height="36" viewBox="0 0 28 20" fill="currentColor">
                  <path d="M0 20V12.667C0 5.778 3.556 1.556 10.667 0l1.777 2.444C9.111 3.334 7.111 5.334 6.667 8.445H11.11V20H0zm16.889 0V12.667C16.889 5.778 20.444 1.556 27.556 0l1.777 2.444c-3.333.89-5.333 2.89-5.777 6.001H28V20H16.889z" />
                </svg>
              </div>

              {/* Estrelas */}
              <div style={{ marginBottom: "20px" }}>
                <Stars />
              </div>

              {/* Citação */}
              <blockquote style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(20px, 2.5vw, 28px)",
                fontWeight: 700, textTransform: "uppercase",
                color: "var(--text-inverse)", lineHeight: 1.3,
                margin: "0 0 32px",
              }}>
                &ldquo;{depoimentoDestaque.citacao}&rdquo;
              </blockquote>

              {/* Autor */}
              <div style={{
                display: "flex", alignItems: "center", gap: "16px",
                borderTop: "1px solid var(--border-inverse-soft)", paddingTop: "24px",
                marginBottom: "32px",
              }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: "48px", height: "48px", flexShrink: 0,
                  background: "var(--accent)", border: "2px solid var(--border-strong)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{
                    fontFamily: "var(--font-display)", fontSize: "18px",
                    fontWeight: 900, color: "var(--text-inverse)", textTransform: "uppercase",
                  }}>
                    {depoimentoDestaque.nome.split(" ").pop()?.charAt(0)}
                  </span>
                </div>
                <div>
                  <p style={{
                    fontFamily: "var(--font-display)", fontSize: "15px",
                    fontWeight: 700, textTransform: "uppercase",
                    color: "var(--text-inverse)", margin: "0 0 4px",
                  }}>
                    {depoimentoDestaque.nome}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "13px",
                    color: "var(--text-inverse-faint)", margin: 0,
                  }}>
                    {depoimentoDestaque.cargo}
                  </p>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <Badge variant={depoimentoDestaque.forca} size="sm">{depoimentoDestaque.forcaLabel}</Badge>
                </div>
              </div>

              {/* CTA */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Button variant="brand-inverse" size="md" icon={<IconArrow />} iconPosition="right">
                  Começar minha preparação
                </Button>
                <Button variant="ghost-inverse" size="md">
                  Ver mais depoimentos
                </Button>
              </div>
            </div>
          </div>
          <UsedComponents items={["Badge (ex)", "Button (brand-inverse, ghost-inverse)"]} />
        </PatternShell>

        <SectionLabel
          number="06.3"
          title="Faixa de Números — Social Proof Quantitativo"
          description="Complemento aos depoimentos qualitativos. Números verificáveis reforçam credibilidade. Use em conjunto com a seção 06.1 ou 06.2, nunca isolado."
        />
        <PatternShell label="Faixa de prova social — números">
          <div style={{ background: "var(--surface-raised)", padding: "40px 48px", borderTop: "4px solid var(--accent)" }}>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0", borderLeft: "2px solid var(--border-strong)",
            }}>
              {[
                { numero: "12.400+", label: "Aprovados", sub: "desde 2019" },
                { numero: "4,9 / 5",  label: "Avaliação média", sub: "com base em 3.200 notas" },
                { numero: "94%",      label: "Satisfação geral", sub: "em pesquisa pós-aprovação" },
                { numero: "1ª tent.", label: "Aprovação", sub: "para 68% dos alunos" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    padding: "28px 24px",
                    borderRight: "2px solid var(--border-strong)",
                    borderBottom: "2px solid var(--border-strong)",
                  }}
                >
                  <p style={{
                    fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 36px)",
                    fontWeight: 900, color: "var(--ink)",
                    margin: "0 0 4px", lineHeight: 1,
                  }}>
                    {stat.numero}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "13px",
                    fontWeight: 600, color: "var(--ink)",
                    margin: "0 0 2px",
                  }}>
                    {stat.label}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-mono)", fontSize: "11px",
                    color: "var(--pencil)", margin: 0,
                  }}>
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <UsedComponents items={["tokens: --font-display, --accent, --surface-raised"]} />
        </PatternShell>

        <SectionLabel
          number="06.4"
          title="Diretrizes de uso"
        />
        <PatternGuidelines
          rows={[
            { title: "Citações sempre entre aspas e com nome identificável", description: "Sem depoimentos anônimos se a intenção é credibilidade." },
            { title: "Badge de força é obrigatório", description: "O leitor precisa se identificar com o aprovado." },
            { title: "Estrelas só com origem verificável", description: "Evita prova social fabricada." },
            { title: "Máximo de 6 cards no grid", description: "Prefira poucos depoimentos fortes a muitos medianos." },
            { title: "Destaques em fundo escuro em seção própria", description: "Não intercale o bloco escuro com o grid claro sem ritmo." },
            { title: "Números da faixa 06.3 devem ser reais", description: "Use data de referência visível quando necessário." },
          ]}
        />

      </div>
    </div>
  );
}
