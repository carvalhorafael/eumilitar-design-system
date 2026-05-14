import { Header } from "@/components/layout/Header";
import { PatternGuidelines } from "@/components/docs/PatternGuidelines";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Accordion, Button, Badge } from "@carvalhorafael/eumilitar-ui";
import { getPatternDefinition } from "@carvalhorafael/eumilitar-patterns";
import { PatternContract, PatternShell, UsedComponents } from "@carvalhorafael/eumilitar-patterns/docs";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Padrão — FAQ" };

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 6h8M6 2l4 4-4 4" />
  </svg>
);

const faqDefinition = getPatternDefinition("faq");

const faqGeral = [
  {
    title: "Quanto tempo tenho acesso ao curso após a compra?",
    content: "O acesso é válido por 12 meses a partir da data da compra, independentemente do início do uso. Durante esse período você pode acessar todo o conteúdo, simulados e atualizações do curso.",
  },
  {
    title: "O conteúdo é atualizado quando sai um novo edital?",
    content: "Sim. Nosso time pedagógico revisa o material sempre que um novo edital é publicado. As atualizações ficam disponíveis automaticamente para todos os alunos com acesso ativo, sem custo adicional.",
    defaultOpen: true,
  },
  {
    title: "Posso usar a plataforma no celular?",
    content: "A plataforma é responsiva e funciona bem em smartphones e tablets. Para os simulados cronometrados, recomendamos o uso em desktop para melhor experiência — especialmente para as provas com gráficos e questões de raciocínio.",
  },
  {
    title: "Como funciona a garantia de 7 dias?",
    content: "Se em até 7 dias corridos após a compra você não estiver satisfeito, devolvemos 100% do valor pago sem perguntas. Basta enviar um e-mail para suporte@eumilitar.com.br com seu nome e CPF.",
  },
  {
    title: "Existe suporte para dúvidas sobre o conteúdo?",
    content: "Sim. Assinantes dos planos pagos têm acesso ao suporte por e-mail com retorno em até 48 horas úteis. O plano Anual inclui suporte prioritário com retorno em até 24h.",
  },
];

const faqExercito = [
  {
    title: "Quais são os requisitos de idade para o concurso de Sargento?",
    content: "Para o Concurso de Admissão ao Curso de Formação de Sargentos (CACS), o candidato deve ter entre 17 e 24 anos completos no ano de realização do concurso. Consulte sempre o edital vigente para informações atualizadas.",
  },
  {
    title: "O que é cobrado na Prova de Aptidão Física (TAF)?",
    content: (
      <div>
        <p style={{ margin: "0 0 10px" }}>A TAF do Exército avalia três provas:</p>
        <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: 2 }}>
          <li><strong>Corrida de 12 minutos</strong> — distância mínima conforme faixa etária</li>
          <li><strong>Flexão de braço</strong> — número mínimo em 1 minuto</li>
          <li><strong>Abdominal remador</strong> — número mínimo em 1 minuto</li>
        </ul>
        <p style={{ margin: "10px 0 0", fontSize: "13px", color: "var(--pencil-soft)" }}>
          Os parâmetros mínimos são publicados no edital do concurso.
        </p>
      </div>
    ),
  },
  {
    title: "Posso me inscrever em mais de um quadro de habilitação?",
    content: "Não. Cada candidato pode se inscrever em apenas um quadro de habilitação por concurso. Escolha com atenção o quadro que melhor se adapta ao seu perfil e às vagas disponíveis na sua região.",
  },
];

export default function FaqPage() {
  return (
    <div>
      <Header
        section="Padrões — 04"
        title="FAQ"
        description="Seções de perguntas frequentes com Accordion. Dois modelos: FAQ geral de plataforma e FAQ específico por força com conteúdo rico."
      />

      <div className="docs-page max-w-5xl">
        {faqDefinition ? <PatternContract definition={faqDefinition} /> : null}

        <SectionLabel
          number="04.1"
          title="FAQ Geral — Seção de Landing Page"
          description="Perguntas sobre plataforma e planos. Item 2 aberto por padrão — abra com a pergunta mais estratégica para conversão."
        />
        <PatternShell label="FAQ — modo exclusivo, item 2 aberto">
          <div className="docs-pattern-block" style={{ background: "var(--surface-raised)" }}>
            <div style={{ maxWidth: "680px", margin: "0 auto" }}>
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--pencil)",
                marginBottom: "8px",
              }}>
                Dúvidas frequentes
              </p>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "32px",
                fontWeight: 900,
                textTransform: "uppercase",
                color: "var(--ink)",
                margin: "0 0 28px",
              }}>
                Perguntas & Respostas
              </h2>
              <Accordion items={faqGeral} />
              <div style={{ marginTop: "24px", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--pencil)", marginBottom: "12px" }}>
                  Não encontrou sua dúvida?
                </p>
                <Button variant="secondary" size="sm" icon={<ArrowIcon />} iconPosition="right">
                  Falar com suporte
                </Button>
              </div>
            </div>
          </div>
          <UsedComponents items={["Accordion", "Button (secondary)"]} />
        </PatternShell>

        <SectionLabel
          number="04.2"
          title="FAQ por Força — Com Conteúdo Rico"
          description="FAQ específico de concurso com conteúdo formatado: listas, negrito, notas. Accordion em allowMultiple para consulta simultânea."
        />
        <PatternShell label="FAQ específico — Exército, allowMultiple, conteúdo rico">
          <div className="docs-pattern-block" style={{ background: "var(--paper)" }}>
            <div style={{ maxWidth: "680px", margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <Badge variant="ex">Exército Brasileiro</Badge>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--pencil)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Concurso de Sargentos
                </span>
              </div>
              <Accordion allowMultiple items={faqExercito} />
            </div>
          </div>
          <UsedComponents items={["Accordion (allowMultiple)", "Badge (ex)"]} />
        </PatternShell>

        <SectionLabel
          number="04.3"
          title="Diretrizes de FAQ"
        />
        <PatternGuidelines
          rows={[
            { title: "Abra o item mais estratégico por padrão", description: "Guia o usuário para a informação que mais converte." },
            { title: "Limite de 5–7 perguntas por seção", description: "Use allowMultiple apenas para FAQs técnicos mais densos." },
            { title: "Perguntas em linguagem do usuário", description: "'Quanto tempo tenho acesso?' comunica melhor do que linguagem interna de produto." },
            { title: "Respostas curtas no FAQ geral", description: "Contexto define o nível de profundidade adequado." },
            { title: "Finalize com CTA para suporte", description: "Reduz abandono por dúvida não respondida." },
          ]}
        />

      </div>
    </div>
  );
}
