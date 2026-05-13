# `@eumilitar/web` — Consumo em HTML puro

Este guia mostra como usar a biblioteca em um site tradicional sem React e sem WordPress.

## Dependências conceituais

Para um site HTML/CSS/JS tradicional, a base recomendada é:

1. `@eumilitar/tokens`
2. `@eumilitar/css`
3. `@eumilitar/web`

## Estrutura mínima

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Landing EuMilitar</title>
    <link rel="stylesheet" href="tokens.css" />
    <link rel="stylesheet" href="design-system.css" />
  </head>
  <body>
    <main id="app"></main>
    <script type="module" src="./main.js"></script>
  </body>
</html>
```

## Exemplo de montagem

```js
import {
  enhanceAccordion,
  renderCtaBlock,
  renderFaqBlock,
  renderHeroBlock,
} from "@eumilitar/web";

const heroHtml = renderHeroBlock({
  eyebrow: "Preparação militar",
  badges: [
    { label: "Exército", variant: "ex" },
    { label: "Marinha", variant: "mb" },
  ],
  headline: "Prepare-se para as Forças Armadas com uma trilha por edital.",
  supportingCopy: "Questões, simulados e acompanhamento para acelerar a aprovação.",
  primaryCta: { label: "Começar agora", href: "#planos", variant: "primary" },
  secondaryCta: { label: "Ver planos", href: "#faq", variant: "secondary" },
});

const faqHtml = renderFaqBlock({
  eyebrow: "Dúvidas frequentes",
  headline: "Perguntas e respostas",
  items: [
    {
      question: "Quanto tempo tenho acesso?",
      answer: "O acesso é válido por 12 meses a partir da compra.",
    },
  ],
});

const ctaHtml = renderCtaBlock({
  badge: { label: "Plano completo", variant: "brand" },
  headline: "Comece sua preparação hoje",
  supportingCopy: "Acesso imediato ao curso completo.",
  primaryCta: { label: "Assinar agora", href: "#checkout", variant: "brand-inverse" },
  secondaryCta: { label: "Saiba mais", href: "#faq", variant: "ghost-inverse" },
});

document.querySelector("#app").innerHTML = [heroHtml, faqHtml, ctaHtml].join("");

enhanceAccordion(document);
```

## Regra de arquitetura

Se um site tradicional precisar de um novo bloco, a ordem recomendada é:

1. definir ou atualizar o contrato em `@eumilitar/patterns`
2. garantir a camada visual em `@eumilitar/css`
3. implementar a renderização canônica em `@eumilitar/web`
4. só depois adaptar isso para WordPress, Elementor ou outro CMS
