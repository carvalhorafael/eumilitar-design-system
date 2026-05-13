# @eumilitar/patterns

Camada de formalização dos padrões de composição da EuMilitar.

## Objetivo

Separar os padrões de landing page do app de documentação e registrá-los como blocos portáveis, com:

- variantes;
- anatomia;
- contrato de conteúdo;
- campos esperados para CMS;
- prioridade para tema WordPress;
- referência HTML agnóstica de framework.

## Blocos formalizados

- `hero`
- `urgency`
- `faq`
- `capture`
- `benefits`
- `testimonials`
- `cta`

## Como usar

- Use `patternDefinitions` para mapear os blocos prioritários do tema
- Use os contratos de `cmsFields` para modelar campos no WordPress
- Use a referência HTML em `HTML_REFERENCES.md` como base de template

## Próximo passo natural

Traduzir esses blocos para:

- templates HTML/CSS reutilizáveis;
- blocos Gutenberg;
- seções de tema com mapping claro de campos.
