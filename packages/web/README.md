# @carvalhorafael/eumilitar-web

Base agnóstica de plataforma para consumo do design system em sites não React.

## Objetivo

Servir como camada intermediária entre:

- `@carvalhorafael/eumilitar-patterns`, que descreve contratos e anatomia;
- `@carvalhorafael/eumilitar-css`, que fornece a camada visual compartilhada;
- adapters de plataforma como WordPress.

## Escopo inicial

- funções de renderização HTML para blocos portáveis;
- comportamento JS mínimo para interações progressivas;
- base para CMSs, temas tradicionais e páginas estáticas.

## Blocos iniciais

- `renderHeroBlock`
- `renderUrgencyBlock`
- `renderFaqBlock`
- `renderCaptureBlock`
- `renderBenefitsBlock`
- `renderTestimonialsBlock`
- `renderCtaBlock`
- `enhanceAccordion`

## Direção

`@carvalhorafael/eumilitar-web` não deve depender de WordPress. O adapter WordPress deve consumir esta camada, e não o contrário.

## Documentação complementar

- `HTML_CONSUMPTION.md`
- `CONTRACT.md`
