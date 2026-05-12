import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Accordion" };

const faqItems = [
  {
    title: "Quem pode se inscrever no concurso para Sargento do Exército?",
    content:
      "Podem se inscrever brasileiros natos, do sexo masculino, com idade entre 17 e 24 anos completos no ano de realização do concurso. É necessário ter concluído o Ensino Médio e estar quite com as obrigações militares e eleitorais.",
  },
  {
    title: "Quais matérias são cobradas na prova objetiva?",
    content:
      "A prova objetiva abrange Língua Portuguesa, Matemática, Conhecimentos Gerais (Atualidades, História, Geografia) e Inglês. O conteúdo específico varia conforme o quadro de habilitação escolhido (Comunicações, Saúde, Logística etc.).",
  },
  {
    title: "Como funciona o Curso Preparatório EuMilitar?",
    content:
      "O curso é 100% online e estruturado por força e concurso. Inclui videoaulas, questões comentadas, simulados cronometrados e acompanhamento de desempenho por módulo. Você estuda no seu ritmo, com acesso por 12 meses.",
    defaultOpen: true,
  },
  {
    title: "O certificado de conclusão tem validade para o processo seletivo?",
    content:
      "Não. O certificado emitido pela EuMilitar é um documento de conclusão de curso livre e não substitui diplomas ou certificados exigidos no edital. Consulte sempre os requisitos do edital vigente.",
  },
  {
    title: "Posso cancelar minha assinatura a qualquer momento?",
    content:
      "Sim. Você pode cancelar sua assinatura a qualquer momento pelo painel do aluno. O acesso permanece ativo até o fim do período já pago. Reembolsos seguem a política de 7 dias corridos após a compra, conforme o Código de Defesa do Consumidor.",
  },
];

const etapasItems = [
  {
    title: "01 — Inscrição e pagamento da taxa",
    content: "Acesse o site do concurso no período de inscrições, preencha o formulário com seus dados, escolha o quadro de habilitação e efetue o pagamento da taxa via boleto ou cartão. Guarde o comprovante.",
  },
  {
    title: "02 — Prova objetiva",
    content: "Realizada em uma única data em todo o território nacional. Duração de 3 horas. Certifique-se do local e horário com antecedência pelo cartão de confirmação de inscrição.",
  },
  {
    title: "03 — Prova de aptidão física (TAF)",
    content: "Convocados para a TAF devem apresentar laudo médico atualizado. As provas incluem corrida de 12 minutos, flexão de braço e abdominal. Os parâmetros mínimos são publicados no edital.",
  },
  {
    title: "04 — Investigação social e exame de saúde",
    content: "Etapa eliminatória. Inclui verificação de antecedentes, exames laboratoriais, avaliação psicológica e inspeção de saúde. Realize os exames em clínicas credenciadas listadas no edital.",
  },
  {
    title: "05 — Concentração e incorporação",
    content: "Após aprovação em todas as etapas, o candidato recebe a convocação para incorporação na Organização Militar designada. Leve toda a documentação exigida no edital no dia da concentração.",
  },
];

const simpleItems = [
  {
    title: "O que é o design system da EuMilitar?",
    content: "Um conjunto de tokens, componentes e padrões de interface que define a linguagem visual da plataforma. Serve como referência para devs, designers e agentes de IA.",
  },
  {
    title: "Posso usar os componentes em outros projetos?",
    content: "Os componentes são construídos para o ecossistema EuMilitar. Consulte a equipe de produto antes de reutilizá-los em contextos externos.",
  },
  {
    title: "Como reportar um problema no sistema?",
    content: "Abra uma issue no repositório do projeto com o título do componente afetado, a descrição do comportamento esperado e o comportamento observado.",
  },
];

export default function AccordionPage() {
  return (
    <div>
      <Header
        section="Componentes — 08"
        title="Accordion"
        description="Conteúdo expansível com transição suave. Modo exclusivo (um por vez) ou múltiplo. Ícone +/− animado e hover no header."
      />

      <div className="px-10 py-10 max-w-4xl">

        <SectionLabel
          number="08.1"
          title="Básico — modo exclusivo"
          description="Por padrão, abrir um item fecha o anterior. Clique para alternar."
        />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo
            label="FAQ simples"
            code={`<Accordion items={[\n  { title: "Pergunta 1", content: "Resposta..." },\n  { title: "Pergunta 2", content: "Resposta...", defaultOpen: true },\n]} />`}
          >
            <Accordion items={simpleItems} />
          </ComponentDemo>
        </div>

        <SectionLabel
          number="08.2"
          title="defaultOpen — item aberto por padrão"
          description="Passe defaultOpen: true no item para que ele inicie expandido."
        />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo label='Item 3 inicia aberto via defaultOpen: true'>
            <Accordion items={faqItems} />
          </ComponentDemo>
        </div>

        <SectionLabel
          number="08.3"
          title="allowMultiple — vários abertos simultaneamente"
          description="Com allowMultiple, cada item controla seu próprio estado independentemente."
        />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo
            label="Etapas do concurso — múltiplos abertos"
            code={`<Accordion allowMultiple items={etapas} />`}
          >
            <Accordion allowMultiple items={etapasItems} />
          </ComponentDemo>
        </div>

        <SectionLabel
          number="08.4"
          title="Conteúdo rico"
          description="O campo content aceita qualquer ReactNode — use Badge, listas ou texto formatado."
        />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo label="Com Badge e lista">
            <Accordion
              items={[
                {
                  title: "Forças disponíveis na plataforma",
                  defaultOpen: true,
                  content: (
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        <Badge variant="ex">Exército</Badge>
                        <Badge variant="mb">Marinha</Badge>
                        <Badge variant="fab">FAB</Badge>
                        <Badge variant="pm">PM</Badge>
                        <Badge variant="bm">Bombeiros</Badge>
                      </div>
                      <p style={{ margin: 0, fontSize: "14px", color: "var(--pencil)", lineHeight: 1.6 }}>
                        Cada força possui trilha de estudo dedicada com questões de provas anteriores, simulados e cronograma de revisão adaptado ao edital vigente.
                      </p>
                    </div>
                  ),
                },
                {
                  title: "O que está incluído no plano mensal?",
                  content: (
                    <ul style={{ margin: 0, paddingLeft: "18px", color: "var(--pencil)", fontSize: "14px", lineHeight: 2 }}>
                      <li>Acesso a todas as trilhas de forças</li>
                      <li>Banco de questões com mais de 10.000 itens comentados</li>
                      <li>Simulados semanais cronometrados</li>
                      <li>Correção de redação por IA (2 por mês)</li>
                      <li>Suporte por e-mail em até 48h</li>
                    </ul>
                  ),
                },
              ]}
            />
          </ComponentDemo>
        </div>

        <SectionLabel number="08.5" title="Tokens Usados" />
        <div
          className="border-2 overflow-hidden"
          style={{ borderColor: "var(--border-strong)", boxShadow: "var(--shadow-sm)" }}
        >
          {[
            { prop: "container border",   token: "--border-strong",   value: "2px solid #433c34" },
            { prop: "container shadow",   token: "--shadow-sm",       value: "2px 2px 0 var(--ink)" },
            { prop: "header bg (open)",   token: "--paper-deep",      value: "#e3d8bd" },
            { prop: "header bg (hover)",  token: "--paper",           value: "#ede4cf" },
            { prop: "item separator",     token: "--border-strong",   value: "2px solid" },
            { prop: "content separator",  token: "--border-default",  value: "1px solid #c8bda5" },
            { prop: "icon (open)",        token: "--accent",          value: "var(--b-700)" },
            { prop: "icon (closed)",      token: "--pencil",          value: "#7d7164" },
            { prop: "content color",      token: "--pencil",          value: "#7d7164" },
            { prop: "transition",         token: "max-height",        value: "200ms ease" },
          ].map((row, i) => (
            <div
              key={row.prop}
              className="flex items-center gap-4 px-5 py-3 border-b"
              style={{
                borderColor: i < 9 ? "var(--border-default)" : "transparent",
                background: i % 2 === 0 ? "var(--surface-raised)" : "var(--paper)",
              }}
            >
              <span className="w-44 shrink-0 text-sm" style={{ color: "var(--text-secondary)" }}>{row.prop}</span>
              <span className="flex-1 text-sm font-bold" style={{ fontFamily: "var(--font-mono)", color: "var(--ink)" }}>{row.token}</span>
              <span className="text-sm" style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}>{row.value}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
