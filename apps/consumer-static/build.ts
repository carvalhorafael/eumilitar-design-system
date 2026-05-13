import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  accordionEnhancementScript,
  renderBenefitsBlock,
  renderCaptureBlock,
  renderCtaBlock,
  renderFaqBlock,
  renderHeroBlock,
  renderTestimonialsBlock,
  renderUrgencyBlock,
} from "@eumilitar/web";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "../..");
const distDir = path.join(__dirname, "dist");

async function readWorkspaceFile(...segments: string[]) {
  return readFile(path.join(repoRoot, ...segments), "utf8");
}

async function buildStyles() {
  const parts = await Promise.all([
    readWorkspaceFile("packages", "tokens", "colors.css"),
    readWorkspaceFile("packages", "tokens", "typography.css"),
    readWorkspaceFile("packages", "tokens", "spacing.css"),
    readWorkspaceFile("packages", "tokens", "effects.css"),
    readWorkspaceFile("packages", "css", "ui.css"),
    readWorkspaceFile("packages", "css", "patterns.css"),
  ]);

  return [
    '@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,700&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,400&family=JetBrains+Mono:wght@400;500;700&display=swap");',
    ...parts,
    `
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: var(--font-body);
  background: var(--surface-base);
  color: var(--text-primary);
}

body {
  margin: 0;
}

.page-shell {
  display: grid;
  gap: 24px;
  max-width: 1120px;
  margin: 0 auto;
  padding: 48px 20px 80px;
}
`,
  ].join("\n\n");
}

function buildHtml() {
  const hero = renderHeroBlock({
    eyebrow: "Preparação militar",
    badges: [
      { label: "Exército", variant: "ex" },
      { label: "Marinha", variant: "mb" },
      { label: "Aeronáutica", variant: "fab" },
    ],
    headline: "Uma landing tradicional consumindo a biblioteca sem React.",
    supportingCopy: "Este consumer valida tokens, CSS compartilhado, markup canônico e comportamento progressivo fora do app docs.",
    primaryCta: { label: "Quero conhecer", href: "#captacao", variant: "primary" },
    secondaryCta: { label: "Ver FAQ", href: "#faq", variant: "secondary" },
  });

  const urgency = renderUrgencyBlock({
    badge: { label: "Última turma do semestre", variant: "urgent" },
    headline: "Restam apenas 7 vagas para a próxima turma.",
    supportingCopy: "Acesso imediato após confirmação do pagamento.",
    stat: { value: "7", label: "vagas restantes" },
    primaryCta: { label: "Garantir minha vaga", href: "#cta-final", variant: "urgent" },
    secondaryCta: { label: "Ver detalhes", href: "#beneficios", variant: "ghost-inverse" },
  });

  const benefits = renderBenefitsBlock({
    headline: "Tudo que você precisa para acelerar sua aprovação",
    items: [
      { title: "Trilhas por força", description: "Estrutura específica por edital e objetivo." },
      { title: "Banco de questões", description: "Prática contínua com foco no que mais cai." },
      { title: "Simulados e revisão", description: "Ciclos para medir evolução e corrigir rota." },
    ],
    stats: [
      { value: "+1200", label: "questões comentadas" },
      { value: "12 meses", label: "de acesso" },
      { value: "3 forças", label: "com trilhas dedicadas" },
    ],
  });

  const capture = renderCaptureBlock({
    variant: "two-column",
    eyebrow: "Captação",
    headline: "Receba um material gratuito para começar hoje",
    supportingCopy: "Use este bloco como referência para sites tradicionais, CMSs e futuros adapters.",
    fields: [
      { id: "lead-name", label: "Nome completo", type: "text", required: true, placeholder: "Seu nome" },
      { id: "lead-email", label: "E-mail", type: "email", required: true, placeholder: "voce@eumilitar.com" },
      {
        id: "lead-force",
        label: "Força de interesse",
        type: "select",
        options: [
          { label: "Exército", value: "ex" },
          { label: "Marinha", value: "mb" },
          { label: "Aeronáutica", value: "fab" },
        ],
      },
    ],
    submitLabel: "Receber material gratuito",
  });

  const faq = renderFaqBlock({
    eyebrow: "Dúvidas frequentes",
    headline: "Perguntas e respostas",
    items: [
      {
        question: "Esse consumer usa React?",
        answer: "Não. O HTML é renderizado a partir de @eumilitar/web e o estilo vem de tokens e CSS compartilhado.",
      },
      {
        question: "WordPress é obrigatório para usar essa base?",
        answer: "Não. WordPress será apenas um adapter por cima desta mesma camada web.",
      },
    ],
  });

  const testimonials = renderTestimonialsBlock({
    eyebrow: "Prova social",
    headline: "Depoimentos e sinais de confiança",
    items: [
      {
        quote: "A estrutura de estudos ficou muito mais clara com a trilha por força.",
        author: "Candidato aprovado",
        meta: "EsPCEx 2026",
        badge: { label: "Exército", variant: "ex" },
      },
      {
        quote: "Os simulados me deram ritmo e previsibilidade até a prova.",
        author: "Aluna EuMilitar",
        meta: "EEAR 2026",
        badge: { label: "Aeronáutica", variant: "fab" },
      },
    ],
  });

  const cta = renderCtaBlock({
    variant: "brand-dark",
    badge: { label: "Plano completo", variant: "brand" },
    headline: "A mesma base visual poderá ser consumida por múltiplos sites.",
    supportingCopy: "O próximo adapter pode ser WordPress, mas a base central continua aqui.",
    primaryCta: { label: "Começar agora", href: "#checkout", variant: "brand-inverse" },
    secondaryCta: { label: "Falar com consultor", href: "#contato", variant: "ghost-inverse" },
  });

  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Consumer Static</title>
    <meta
      name="description"
      content="Consumer estático do EuMilitar Design System sem React e sem WordPress."
    />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <main class="page-shell">
      ${hero}
      ${urgency}
      ${benefits}
      <div id="captacao">${capture}</div>
      <div id="faq">${faq}</div>
      ${testimonials}
      <div id="cta-final">${cta}</div>
    </main>
    <script type="module" src="./main.js"></script>
  </body>
</html>`;
}

async function main() {
  await mkdir(distDir, { recursive: true });

  const html = buildHtml();
  const styles = await buildStyles();
  const mainJs = `${accordionEnhancementScript}\n\nenhanceAccordion(document);\n`;

  await Promise.all([
    writeFile(path.join(distDir, "index.html"), html, "utf8"),
    writeFile(path.join(distDir, "styles.css"), styles, "utf8"),
    writeFile(path.join(distDir, "main.js"), mainJs, "utf8"),
  ]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
