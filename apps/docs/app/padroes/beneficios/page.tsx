import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Padrão — Benefícios" };

/* ── Ícones ── */
const IconBook = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="9" y1="7" x2="15" y2="7" />
    <line x1="9" y1="11" x2="15" y2="11" />
  </svg>
);
const IconTarget = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const IconClock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconStar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const IconUsers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="2.5,8.5 6,12 13.5,4.5" strokeLinecap="square" />
  </svg>
);
const IconArrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 6h8M6 2l4 4-4 4" />
  </svg>
);

/* ── Helpers ── */
function PatternShell({ children, label, dark }: { children: React.ReactNode; label: string; dark?: boolean }) {
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

/* ── Dados ── */
const beneficios3col = [
  {
    icon: <IconBook />,
    title: "Conteúdo por força",
    desc: "Trilhas específicas para Exército, Marinha, FAB, PM e Bombeiros. Cada edital tem sua grade própria.",
  },
  {
    icon: <IconTarget />,
    title: "+10.000 questões comentadas",
    desc: "Banco atualizado com questões de provas anteriores. Filtro por matéria, banca e nível de dificuldade.",
  },
  {
    icon: <IconClock />,
    title: "Simulados cronometrados",
    desc: "Provas no formato real do concurso, com gabarito comentado e análise de desempenho por módulo.",
  },
  {
    icon: <IconStar />,
    title: "Professores aprovados",
    desc: "Corpo docente formado por militares aprovados e especialistas nas bancas de cada força.",
  },
  {
    icon: <IconShield />,
    title: "Garantia de 7 dias",
    desc: "Reembolso integral sem perguntas nos primeiros 7 dias. Compre com segurança.",
  },
  {
    icon: <IconUsers />,
    title: "Comunidade ativa",
    desc: "Grupo de estudos com alunos de todo o Brasil. Tire dúvidas e troque experiências.",
  },
];

const beneficios2col = [
  "Videoaulas em HD com revisões periódicas",
  "PDF de resumos para cada matéria",
  "Cronograma de estudos personalizado",
  "Acesso pelo celular, tablet e computador",
  "Atualizações gratuitas a cada novo edital",
  "Suporte por e-mail em até 48 horas",
  "Certificado de conclusão ao final do curso",
  "Acesso por 12 meses a partir da compra",
];

export default function BeneficiosPage() {
  return (
    <div>
      <Header
        section="Padrões — 05"
        title="Benefícios"
        description="Blocos de diferenciais e features. Três variações: grid de 3 colunas com ícone, grid de 2 colunas com lista e destaque em fundo escuro."
      />

      <div className="px-10 py-10 max-w-5xl">

        <SectionLabel
          number="05.1"
          title="Grid 3 Colunas — Com Ícone"
          description="Formato mais comum em landing pages. Ícone SVG no topo, título em display, descrição em body. Fundo paper cria separação sutil da seção anterior."
        />
        <PatternShell label="6 diferenciais — grid 3 colunas">
          <div style={{ background: "var(--paper)", padding: "56px 48px" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <p style={{
                fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.1em",
                color: "var(--pencil)", marginBottom: "10px",
              }}>
                Por que a EuMilitar
              </p>
              <h2 style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 900, textTransform: "uppercase",
                color: "var(--ink)", margin: 0, lineHeight: 1,
              }}>
                Tudo que você precisa<br />para ser aprovado
              </h2>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
              background: "var(--border-default)",
              border: "2px solid var(--border-strong)",
            }}>
              {beneficios3col.map((b) => (
                <div
                  key={b.title}
                  style={{
                    background: "var(--surface-raised)",
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <span style={{ color: "var(--accent)" }}>{b.icon}</span>
                  <strong style={{
                    fontFamily: "var(--font-display)", fontSize: "18px",
                    fontWeight: 700, textTransform: "uppercase",
                    color: "var(--ink)", lineHeight: 1.1,
                  }}>
                    {b.title}
                  </strong>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "14px",
                    color: "var(--pencil)", lineHeight: 1.65, margin: 0,
                  }}>
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <UsedComponents items={["SVG icons", "tokens: --font-display, --accent, --paper"]} />
        </PatternShell>

        <SectionLabel
          number="05.2"
          title="Grid 2 Colunas — Lista de Itens"
          description="Para listas longas de features onde a descrição detalhada é secundária. Eficiente em espaço, fácil de escanear."
        />
        <PatternShell label="Lista de features — 2 colunas com checklist">
          <div style={{ background: "var(--surface-raised)", padding: "56px 48px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
              {/* Copy */}
              <div>
                <Badge variant="brand" size="sm" style={{ marginBottom: "16px" }}>Plano completo</Badge>
                <h2 style={{
                  fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.5vw, 40px)",
                  fontWeight: 900, textTransform: "uppercase",
                  color: "var(--ink)", margin: "0 0 16px", lineHeight: 1,
                }}>
                  Tudo incluído,<br />sem surpresas
                </h2>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "15px",
                  color: "var(--pencil)", lineHeight: 1.65, margin: "0 0 28px",
                }}>
                  Um único plano com acesso completo a todos os recursos. Sem módulos pagos separadamente.
                </p>
                <Button variant="primary" size="md" icon={<IconArrow />} iconPosition="right">
                  Assinar agora
                </Button>
              </div>
              {/* Lista */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 24px",
              }}>
                {beneficios2col.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <span style={{
                      flexShrink: 0, marginTop: "2px",
                      color: "var(--accent)",
                      border: "1.5px solid var(--accent)",
                      borderRadius: "var(--radius-sm)",
                      width: "18px", height: "18px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <IconCheck />
                    </span>
                    <span style={{
                      fontFamily: "var(--font-body)", fontSize: "13px",
                      color: "var(--ink)", lineHeight: 1.5,
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <UsedComponents items={["Badge (brand)", "Button (primary)"]} />
        </PatternShell>

        <SectionLabel
          number="05.3"
          title="Destaque em Fundo Escuro"
          description="Variação de alto contraste para seções intermediárias de uma landing page. Quebra o ritmo visual entre seções claras."
        />
        <PatternShell label="Benefícios em fundo brand — 3 itens horizontais">
          <div style={{ background: "var(--surface-brand)", padding: "56px 48px" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.5vw, 40px)",
                fontWeight: 900, textTransform: "uppercase",
                color: "#f5f0e8", margin: 0,
              }}>
                Aprovação em números
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
              {[
                { numero: "12.400+", label: "Aprovados desde 2019" },
                { numero: "94%",     label: "Taxa de satisfação dos alunos" },
                { numero: "5 forças",label: "Cobertura completa de concursos" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  style={{
                    padding: "32px 28px",
                    textAlign: "center",
                    borderLeft: i > 0 ? "1px solid rgba(245,240,232,0.15)" : "none",
                  }}
                >
                  <p style={{
                    fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 56px)",
                    fontWeight: 900, color: "#f5f0e8",
                    margin: "0 0 8px", lineHeight: 1,
                  }}>
                    {stat.numero}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "14px",
                    color: "rgba(245,240,232,0.65)",
                    margin: 0, lineHeight: 1.4,
                  }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <UsedComponents items={["tokens: --surface-brand, --font-display"]} />
        </PatternShell>

        <SectionLabel
          number="05.4"
          title="Diretrizes de uso"
        />
        <div
          className="border-2 p-6"
          style={{ borderColor: "var(--border-default)", background: "var(--paper)", fontFamily: "var(--font-mono)", fontSize: "12px" }}
        >
          {[
            { regra: "Máximo 6 itens no grid 3 colunas — mais do que isso perde impacto", motivo: "Escaneabilidade" },
            { regra: "Ícones sempre no mesmo tamanho e estilo (stroke, não fill)", motivo: "Consistência visual" },
            { regra: "Uma única seção de benefícios por página — escolha o formato mais adequado", motivo: "Evitar redundância" },
            { regra: "Números de destaque (05.3) apenas com dados reais e verificáveis", motivo: "Credibilidade" },
            { regra: "Grid em fundo paper após hero claro; fundo brand como quebra de ritmo no meio da página", motivo: "Hierarquia de seções" },
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
