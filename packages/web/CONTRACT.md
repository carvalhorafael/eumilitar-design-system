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

## Componentes portáveis suportados

- `navbar`
- `breadcrumbs`
- `drawer`
- `tabs`
- `toast`
- `tooltip`
- `skeleton`
- `loading`
- `fieldset`
- `toggle`
- `file-input`
- `progress`
- `steps`
- `stat`
- `avatar`
- `status`
- `list`
- `divider`
- `pagination`

## Renderers públicos de componentes

- `renderNavbar`
- `renderBreadcrumbs`
- `renderDrawer`
- `renderTabs`
- `renderToast`
- `renderToastViewport`
- `renderTooltip`
- `renderSkeleton`
- `renderLoading`
- `renderFieldset`
- `renderToggle`
- `renderFileInput`
- `renderProgress`
- `renderSteps`
- `renderStats`
- `renderStat`
- `renderAvatar`
- `renderStatus`
- `renderList`
- `renderDivider`
- `renderPagination`

## Comportamentos públicos

- `enhanceAccordion`
- `enhanceNavbar`
- `enhanceDrawer`
- `enhanceTabs`
- `enhanceToastDismiss`

## Classes-base estáveis

- `ds-hero`
- `ds-urgency`
- `ds-faq`
- `ds-capture`
- `ds-benefits`
- `ds-testimonials`
- `ds-cta`
- `ds-navbar`
- `ds-breadcrumbs`
- `ds-drawer`
- `ds-tabs`
- `ds-toast`
- `ds-tooltip`
- `ds-skeleton`
- `ds-loading`
- `ds-fieldset`
- `ds-toggle`
- `ds-file-input`
- `ds-progress`
- `ds-steps`
- `ds-stat`
- `ds-avatar`
- `ds-status`
- `ds-list`
- `ds-divider`
- `ds-pagination`

## Atributos de markup estáveis para accordion

- `data-accordion-root`
- `data-accordion-item`
- `data-accordion-trigger`
- `data-accordion-panel`

## Atributos de markup estáveis para componentes

- `data-navbar-root`
- `data-navbar-trigger`
- `data-drawer-root`
- `data-drawer-trigger`
- `data-drawer-layer`
- `data-drawer-close`
- `data-tabs-root`
- `data-tabs-tab`
- `data-tabs-panel`
- `data-toast-close`

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
