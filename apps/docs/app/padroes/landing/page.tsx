import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Button, Badge, Alert, Accordion } from "@eumilitar/ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Padrão — Landing Page Completa" };

/* ── Ícones ── */
const IconArrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 6h8M6 2l4 4-4 4" />
  </svg>
);
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="2.5,8.5 6,12 13.5,4.5" strokeLinecap="square" />
  </svg>
);
const IconBook = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
const IconTarget = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);
const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path d="M7 1l1.545 3.09L12 4.636l-2.5 2.436.59 3.437L7 8.946l-3.09 1.563L4.5 7.072 2 4.636l3.455-.546L7 1z" />
  </svg>
);

/* ── Seção: Hero ── */
function HeroSection() {
  return (
    <div>
      <Alert variant="urgent" title="Inscrições encerram em 36 horas">
        Restam apenas 14 vagas na turma de Sargento do Exército — Turma Agosto 2025. Garanta sua vaga agora.
      </Alert>
      <div style={{ background: "var(--surface-brand)", padding: "80px 64px" }}>
        <div style={{ maxWidth: "640px" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
            {["Exército", "Marinha", "Aeronáutica", "PM", "Bombeiros"].map((f) => (
              <span key={f} style={{
                fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.1em",
                color: "rgba(245,240,232,0.55)", border: "1px solid rgba(245,240,232,0.25)", padding: "3px 8px",
              }}>
                {f}
              </span>
            ))}
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(42px, 6vw, 72px)",
            fontWeight: 900, textTransform: "uppercase", lineHeight: 0.95,
            color: "#f5f0e8", margin: "0 0 20px",
          }}>
            Última turma<br />
            <span style={{ color: "var(--fire)" }}>do semestre</span>
          </h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "18px",
            color: "rgba(245,240,232,0.75)", lineHeight: 1.6, margin: "0 0 32px", maxWidth: "480px",
          }}>
            Método validado por mais de 12.000 aprovados. Trilhas por força, banco de questões comentadas e simulados no formato real.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Button variant="urgent" size="lg" icon={<IconArrow />} iconPosition="right">
              Garantir minha vaga
            </Button>
            <Button variant="ghost-inverse" size="lg">
              Ver detalhes do curso
            </Button>
          </div>
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: "11px",
            color: "rgba(245,240,232,0.30)", marginTop: "20px", letterSpacing: "0.05em",
          }}>
            Acesso imediato · Garantia de 7 dias · Cancele quando quiser
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Seção: Benefícios ── */
const beneficios = [
  { icon: <IconBook />, title: "Conteúdo por força", desc: "Trilhas específicas para Exército, Marinha, FAB, PM e Bombeiros. Cada edital tem sua grade própria." },
  { icon: <IconTarget />, title: "+10.000 questões", desc: "Banco atualizado com questões de provas anteriores. Filtro por matéria, banca e dificuldade." },
  { icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ), title: "Simulados cronometrados", desc: "Provas no formato real do concurso, com gabarito comentado e análise de desempenho por módulo." },
  { icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ), title: "Professores aprovados", desc: "Corpo docente formado por militares aprovados e especialistas nas bancas de cada força." },
  { icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
    </svg>
  ), title: "Garantia de 7 dias", desc: "Reembolso integral sem perguntas nos primeiros 7 dias. Compre com segurança." },
  { icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ), title: "Comunidade ativa", desc: "Grupo de estudos com alunos de todo o Brasil. Tire dúvidas e troque experiências." },
];

function BeneficiosSection() {
  return (
    <div style={{ background: "var(--paper)", padding: "80px 64px" }}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <p style={{
          fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--pencil)", marginBottom: "10px",
        }}>
          Por que a EuMilitar
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 900, textTransform: "uppercase", color: "var(--ink)", margin: 0, lineHeight: 1,
        }}>
          Tudo que você precisa<br />para ser aprovado
        </h2>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2px", background: "var(--border-default)",
        border: "2px solid var(--border-strong)",
      }}>
        {beneficios.map((b) => (
          <div key={b.title} style={{
            background: "var(--surface-raised)", padding: "28px 24px",
            display: "flex", flexDirection: "column", gap: "12px",
          }}>
            <span style={{ color: "var(--accent)" }}>{b.icon}</span>
            <strong style={{
              fontFamily: "var(--font-display)", fontSize: "18px",
              fontWeight: 700, textTransform: "uppercase", color: "var(--ink)", lineHeight: 1.1,
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
  );
}

/* ── Seção: Como Funciona ── */
const passos = [
  {
    numero: "01",
    titulo: "Escolha sua força",
    desc: "Selecione o concurso para o qual está se preparando. O sistema monta sua grade de estudos com base no edital vigente.",
  },
  {
    numero: "02",
    titulo: "Estude com método",
    desc: "Videoaulas, PDFs e banco de questões organizados por módulo. Cronograma adaptável ao seu tempo disponível.",
  },
  {
    numero: "03",
    titulo: "Simule e ajuste",
    desc: "Faça simulados no formato real da banca. Relatórios de desempenho indicam onde concentrar esforço nas últimas semanas.",
  },
];

function ComoFuncionaSection() {
  return (
    <div style={{ background: "var(--surface-raised)", padding: "80px 64px", borderTop: "2px solid var(--border-strong)", borderBottom: "2px solid var(--border-strong)" }}>
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <p style={{
          fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--pencil)", marginBottom: "10px",
        }}>
          O método
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 900, textTransform: "uppercase", color: "var(--ink)", margin: 0, lineHeight: 1,
        }}>
          Como funciona
        </h2>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0",
        border: "2px solid var(--border-strong)",
      }}>
        {passos.map((p, i) => (
          <div key={p.numero} style={{
            padding: "40px 32px",
            borderRight: i < passos.length - 1 ? "2px solid var(--border-strong)" : "none",
          }}>
            <p style={{
              fontFamily: "var(--font-display)", fontSize: "64px",
              fontWeight: 900, color: "var(--border-default)",
              margin: "0 0 16px", lineHeight: 1,
              textTransform: "uppercase",
            }}>
              {p.numero}
            </p>
            <h3 style={{
              fontFamily: "var(--font-display)", fontSize: "20px",
              fontWeight: 700, textTransform: "uppercase",
              color: "var(--ink)", margin: "0 0 12px", lineHeight: 1.1,
            }}>
              {p.titulo}
            </h3>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "14px",
              color: "var(--pencil)", lineHeight: 1.65, margin: 0,
            }}>
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Seção: Depoimentos ── */
const depoimentos = [
  {
    citacao: "O material de Matemática é o mais completo que já vi para concurso militar. Resolvi mais de 800 questões e passei na primeira tentativa.",
    nome: "Cabo Rodrigo Almeida",
    cargo: "Aprovado — Sargento do Exército, 2024",
    forca: "ex" as const,
    forcaLabel: "Exército",
  },
  {
    citacao: "Os simulados cronometrados foram decisivos — cheguei na prova sem ansiedade porque já tinha praticado o formato real inúmeras vezes.",
    nome: "Camila Torres",
    cargo: "Aprovada — Corpo Feminino da Marinha, 2024",
    forca: "mb" as const,
    forcaLabel: "Marinha",
  },
  {
    citacao: "A trilha específica para a FAB é excelente. O suporte dos professores por e-mail resolveu todas as minhas dúvidas de Física.",
    nome: "Tenente Lucas Ferreira",
    cargo: "Aprovado — Oficial da Aeronáutica, 2023",
    forca: "fab" as const,
    forcaLabel: "Aeronáutica",
  },
];

function DepoimentosSection() {
  return (
    <div style={{ background: "var(--paper)", padding: "80px 64px" }}>
      {/* Números */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        gap: "0", border: "2px solid var(--border-strong)",
        background: "var(--surface-brand)", marginBottom: "48px",
      }}>
        {[
          { numero: "12.400+", label: "Aprovados desde 2019" },
          { numero: "94%",     label: "Taxa de satisfação" },
          { numero: "5 forças",label: "Cobertura de concursos" },
        ].map((s, i) => (
          <div key={s.label} style={{
            padding: "32px 28px", textAlign: "center",
            borderLeft: i > 0 ? "1px solid rgba(245,240,232,0.15)" : "none",
          }}>
            <p style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 900, color: "#f5f0e8", margin: "0 0 8px", lineHeight: 1,
            }}>
              {s.numero}
            </p>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "14px",
              color: "rgba(245,240,232,0.65)", margin: 0,
            }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2px", background: "var(--border-default)",
        border: "2px solid var(--border-strong)",
      }}>
        {depoimentos.map((d) => (
          <div key={d.nome} style={{
            background: "var(--surface-raised)", padding: "28px 24px",
            display: "flex", flexDirection: "column", gap: "16px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <svg width="24" height="18" viewBox="0 0 28 20" fill="currentColor" style={{ opacity: 0.2, color: "var(--ink)" }}>
                <path d="M0 20V12.667C0 5.778 3.556 1.556 10.667 0l1.777 2.444C9.111 3.334 7.111 5.334 6.667 8.445H11.11V20H0zm16.889 0V12.667C16.889 5.778 20.444 1.556 27.556 0l1.777 2.444c-3.333.89-5.333 2.89-5.777 6.001H28V20H16.889z" />
              </svg>
              <div style={{ display: "flex", gap: "2px" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: "var(--fire)" }}><IconStar /></span>
                ))}
              </div>
            </div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "14px",
              color: "var(--ink)", lineHeight: 1.7, margin: 0, flex: 1, fontStyle: "italic",
            }}>
              "{d.citacao}"
            </p>
            <div style={{ borderTop: "1px solid var(--border-default)", paddingTop: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <Badge variant={d.forca} size="sm">{d.forcaLabel}</Badge>
              <div>
                <p style={{
                  fontFamily: "var(--font-display)", fontSize: "14px",
                  fontWeight: 700, textTransform: "uppercase", color: "var(--ink)", margin: "0 0 2px",
                }}>
                  {d.nome}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "12px",
                  color: "var(--pencil)", margin: 0,
                }}>
                  {d.cargo}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Seção: FAQ ── */
const faqItems = [
  {
    title: "Para quais concursos o curso serve?",
    content: (
      <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--pencil)", lineHeight: 1.7, margin: 0 }}>
        A EuMilitar cobre <strong style={{ color: "var(--ink)" }}>Exército Brasileiro, Marinha do Brasil, Força Aérea Brasileira, Polícia Militar e Corpo de Bombeiros</strong>. Cada força tem trilha de estudos própria, montada com base no edital vigente.
      </p>
    ),
  },
  {
    title: "Por quanto tempo terei acesso?",
    content: (
      <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--pencil)", lineHeight: 1.7, margin: 0 }}>
        O acesso é por <strong style={{ color: "var(--ink)" }}>12 meses</strong> a partir da data da compra. Durante esse período você também recebe atualizações gratuitas caso o edital seja publicado com mudanças no conteúdo programático.
      </p>
    ),
  },
  {
    title: "Posso acessar pelo celular?",
    content: (
      <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--pencil)", lineHeight: 1.7, margin: 0 }}>
        Sim. A plataforma funciona em qualquer navegador moderno — celular, tablet e computador. Não há aplicativo para instalar.
      </p>
    ),
  },
  {
    title: "Como funciona a garantia de 7 dias?",
    content: (
      <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--pencil)", lineHeight: 1.7, margin: 0 }}>
        Se por qualquer motivo você não ficar satisfeito nos primeiros <strong style={{ color: "var(--ink)" }}>7 dias</strong>, basta enviar um e-mail para nosso suporte e o reembolso integral é processado em até 5 dias úteis. Sem perguntas.
      </p>
    ),
  },
  {
    title: "O conteúdo é atualizado com novos editais?",
    content: (
      <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--pencil)", lineHeight: 1.7, margin: 0 }}>
        Sim. Nossa equipe monitora a publicação dos editais e atualiza o material dentro de <strong style={{ color: "var(--ink)" }}>48 horas</strong>. Alunos com acesso ativo recebem as atualizações automaticamente, sem custo adicional.
      </p>
    ),
  },
];

function FaqSection() {
  return (
    <div style={{ background: "var(--surface-raised)", padding: "80px 64px", borderTop: "2px solid var(--border-strong)" }}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 900, textTransform: "uppercase", color: "var(--ink)", margin: 0, lineHeight: 1,
        }}>
          Perguntas frequentes
        </h2>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", border: "2px solid var(--border-strong)" }}>
        <Accordion items={faqItems} />
      </div>
    </div>
  );
}

/* ── Seção: CTA Final ── */
const incluso = [
  "Trilha completa para sua força",
  "10.000+ questões comentadas",
  "Simulados cronometrados",
  "Videoaulas em HD",
  "PDFs de resumo por matéria",
  "Suporte por e-mail em 48h",
  "Atualizações de edital inclusas",
  "Garantia de 7 dias",
];

function CtaFinalSection() {
  return (
    <div style={{ background: "var(--surface-dark)", padding: "80px 64px" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        <div style={{ marginBottom: "20px" }}>
          <Badge variant="urgent">Última turma — 14 vagas restantes</Badge>
        </div>
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 60px)",
          fontWeight: 900, textTransform: "uppercase", color: "#f5f0e8",
          lineHeight: 1, margin: "0 0 16px",
        }}>
          Pronto para ser aprovado?
        </h2>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "16px",
          color: "rgba(245,240,232,0.65)", lineHeight: 1.6, margin: "0 0 40px", maxWidth: "520px",
        }}>
          Acesso imediato após a confirmação do pagamento. Comece a estudar hoje.
        </p>

        {/* Lista do que está incluso */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 40px",
          marginBottom: "40px", maxWidth: "520px",
        }}>
          {incluso.map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
              <span style={{
                flexShrink: 0, marginTop: "1px",
                color: "var(--accent)", border: "1.5px solid var(--accent)",
                width: "18px", height: "18px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <IconCheck />
              </span>
              <span style={{
                fontFamily: "var(--font-body)", fontSize: "13px",
                color: "rgba(245,240,232,0.80)", lineHeight: 1.5,
              }}>
                {item}
              </span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Button variant="urgent" size="lg" icon={<IconArrow />} iconPosition="right">
            Garantir minha vaga agora
          </Button>
          <Button variant="ghost-inverse" size="lg">
            Ver detalhes do plano
          </Button>
        </div>
        <p style={{
          fontFamily: "var(--font-mono)", fontSize: "11px",
          color: "rgba(245,240,232,0.25)", marginTop: "20px", letterSpacing: "0.05em",
        }}>
          Vagas atualizadas em tempo real · Pagamento seguro · Garantia de 7 dias
        </p>
      </div>
    </div>
  );
}

/* ── Página ── */
export default function LandingPage() {
  return (
    <div>
      <Header
        section="Padrões — 07"
        title="Landing Page Completa"
        description="Composição sequencial de todos os padrões. Referência para geração de páginas por agentes de IA. Sequência: Urgência → Hero → Benefícios → Como Funciona → Depoimentos → FAQ → CTA Final."
      />

      <div className="px-10 py-10 max-w-5xl">

        <SectionLabel
          number="07.1"
          title="Sequência Canônica"
          description="Ordem recomendada das seções em uma landing page de conversão. Cada seção cumpre uma função específica no funil."
        />

        {/* Mapa de sequência */}
        <div
          className="border-2 mb-10"
          style={{ borderColor: "var(--border-strong)", boxShadow: "var(--shadow-sm)", overflow: "hidden" }}
        >
          {[
            { num: "01", label: "Urgência (Alert)",  funcao: "Capturar atenção antes do hero — apenas quando há prazo ou escassez real" },
            { num: "02", label: "Hero",               funcao: "Proposta de valor, headline e CTA principal. Tom define o restante da página" },
            { num: "03", label: "Benefícios",         funcao: "Responder 'por que este curso?' — diferenciais concretos, não genéricos" },
            { num: "04", label: "Como Funciona",      funcao: "Reduzir fricção — mostrar que o processo é simples e guiado" },
            { num: "05", label: "Depoimentos",        funcao: "Social proof antes da decisão de compra — validação de pares, não da marca" },
            { num: "06", label: "FAQ",                funcao: "Eliminar objeções finais antes do CTA — responde às dúvidas que impedem a compra" },
            { num: "07", label: "CTA Final",          funcao: "Reforçar urgência e converter. Repete o CTA principal com lista de inclusões" },
          ].map((row, i) => (
            <div
              key={row.num}
              style={{
                display: "flex", alignItems: "flex-start", gap: "20px",
                padding: "16px 20px",
                background: i % 2 === 0 ? "var(--surface-raised)" : "var(--paper)",
                borderBottom: i < 6 ? "1px solid var(--border-default)" : "none",
              }}
            >
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700,
                color: "var(--pencil)", flexShrink: 0, paddingTop: "1px",
              }}>
                {row.num}
              </span>
              <span style={{
                fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700,
                textTransform: "uppercase", color: "var(--accent)",
                flexShrink: 0, width: "160px", paddingTop: "1px",
              }}>
                {row.label}
              </span>
              <span style={{
                fontFamily: "var(--font-body)", fontSize: "13px",
                color: "var(--pencil)", lineHeight: 1.6,
              }}>
                {row.funcao}
              </span>
            </div>
          ))}
        </div>

        <SectionLabel
          number="07.2"
          title="Página Completa"
          description="Composição real — não são mocks. Todos os componentes e tokens funcionam exatamente como em produção."
        />

        {/* Landing page completa dentro de um shell */}
        <div style={{
          border: "2px solid var(--border-strong)",
          boxShadow: "var(--shadow-md)",
          overflow: "hidden",
          marginBottom: "48px",
        }}>
          <HeroSection />
          <BeneficiosSection />
          <ComoFuncionaSection />
          <DepoimentosSection />
          <FaqSection />
          <CtaFinalSection />
        </div>

        <SectionLabel
          number="07.3"
          title="Diretrizes para Agentes de IA"
          description="Instruções de como usar esta referência para gerar variações de landing pages."
        />
        <div
          className="border-2 p-6"
          style={{ borderColor: "var(--border-default)", background: "var(--paper)", fontFamily: "var(--font-mono)", fontSize: "12px" }}
        >
          {[
            { regra: "Hero escuro (surface-brand) quando há urgência — hero claro (paper) para páginas informativas", motivo: "Tom da página" },
            { regra: "Alert de urgência apenas quando vagas ou prazo são reais — nunca decorativo", motivo: "Credibilidade" },
            { regra: "Seção 'Como Funciona' com 3 passos no máximo — mais do que isso fragmenta o método", motivo: "Clareza" },
            { regra: "Depoimentos devem vir depois dos benefícios, não antes — validação após proposta de valor", motivo: "Sequência persuasiva" },
            { regra: "CTA final repete a urgência do hero — não introduz nova proposta de valor", motivo: "Coerência de mensagem" },
            { regra: "Badge de força obrigatório em depoimentos — o leitor precisa se identificar com o aprovado", motivo: "Relevância" },
            { regra: "Variar fundos entre seções: brand escuro → paper bege → branco → paper → branco → dark. Nunca dois fundos iguais adjacentes", motivo: "Ritmo visual" },
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
