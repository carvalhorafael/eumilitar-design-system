# `@carvalhorafael/eumilitar-web` — Contrato público

Este documento registra o que deve ser tratado como **estável** para consumidores externos.

## Blocos suportados

- `hero`
- `urgency`
- `faq`
- `capture`
- `benefits`
- `testimonials`
- `cta`

## Renderers públicos

- `renderHeroBlock`
- `renderUrgencyBlock`
- `renderFaqBlock`
- `renderCaptureBlock`
- `renderBenefitsBlock`
- `renderTestimonialsBlock`
- `renderCtaBlock`

## Comportamentos públicos

- `enhanceAccordion`

## Classes-base estáveis

- `ds-hero`
- `ds-urgency`
- `ds-faq`
- `ds-capture`
- `ds-benefits`
- `ds-testimonials`
- `ds-cta`

## Atributos de markup estáveis para accordion

- `data-accordion-root`
- `data-accordion-item`
- `data-accordion-trigger`
- `data-accordion-panel`

## Variantes suportadas hoje

- `hero`: `light`, `brand-dark`, `urgent`
- `urgency`: `top-banner`, `max-conversion-cta`, `availability-card`
- `faq`: `default`
- `capture`: `lead`, `two-column`
- `benefits`: `icon-grid`, `checklist`, `stats-band`
- `testimonials`: `grid`, `featured-quote`, `proof-numbers-band`
- `cta`: `light`, `brand-dark`, `urgent`

## O que ainda não é contrato rígido

- conteúdo editorial dos exemplos
- estilo interno de cada subelemento
- utilitários auxiliares ainda não exportados
- qualquer classe não documentada aqui

## Regra prática para consumers

Se um consumer depender de:

- renderer exportado
- bloco suportado
- variante documentada
- classe-base documentada
- data-attribute documentado

isso deve ser tratado como parte da API pública de `@carvalhorafael/eumilitar-web`.
