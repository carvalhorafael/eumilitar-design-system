# @carvalhorafael/eumilitar-ui — Qualidade mínima para reuso

## Escopo

Este documento registra a base mínima de qualidade do pacote `@carvalhorafael/eumilitar-ui` para consumo em apps React hoje e para futura transposição de comportamento para HTML/CSS e WordPress.

## Padrões já adotados

- Tokens visuais vêm de `@carvalhorafael/eumilitar-tokens`
- Componentes expõem classes estáveis `ds-*`
- Componentes expõem `data-slot` nas subpartes relevantes
- `className` externo pode compor a maioria dos componentes principais
- Estados visuais seguem tokens semânticos
- Build validado no app `docs`
- Smoke tests cobrindo render, acessibilidade básica e interação essencial

## Acessibilidade básica aplicada

### Input e Textarea

- `label` explícito associado por `htmlFor`
- `aria-invalid` em estado de erro
- `aria-describedby` quando há helper text
- `aria-required` quando o campo é obrigatório

### Select

- `label` explícito associado por `htmlFor`
- `aria-invalid` em estado de erro
- `aria-describedby` quando há helper text
- `aria-required` quando o campo é obrigatório

### Checkbox e Radio

- `label` explícito associado por `htmlFor`
- `aria-invalid` em estado de erro
- `aria-describedby` quando há helper text
- `indeterminate` real aplicado no DOM para checkbox

### Alert

- `role="alert"`
- botão dismiss com `aria-label`

### Accordion

- `aria-expanded`
- `aria-controls`
- `role="region"` no painel
- `aria-labelledby` ligando trigger e conteúdo

## Props, variantes e estados

### Button

- variantes: `primary`, `secondary`, `ghost`, `ghost-inverse`, `danger`, `brand-inverse`, `urgent`
- tamanhos: `sm`, `md`, `lg`
- estado: `disabled`
- slots: `button`, `icon-left`, `icon-right`

### Badge

- variantes: `default`, `brand`, `urgent`, `ex`, `mb`, `fab`, `pm`, `bm`, `outline`, `dark`
- tamanhos: `sm`, `md`
- estado: `dot`
- slots: `badge`, `dot`

### Card

- variantes: `default`, `brand`, `dark`, `ghost`
- sombras: `none`, `sm`, `md`, `lg`, `brand`
- slots: `card`, `header`, `body`, `footer`

### Alert

- variantes: `default`, `success`, `error`, `warning`, `urgent`
- estados: `dismissible`
- slots: `alert`, `icon`, `content`, `title`, `body`, `dismiss`

### Accordion

- modos: exclusivo ou `allowMultiple`
- estados: `defaultOpen`
- slots: `accordion`, `item`, `trigger`, `title`, `icon`, `panel`, `content`

### Input e Textarea

- estados: `default`, `error`, `success`
- tamanhos: `sm`, `md`, `lg`
- slots: `label`, `field`, `helper`

### Select

- estados: `default`, `error`, `success`
- tamanhos: `sm`, `md`, `lg`
- slots: `field-wrap`, `field`, `icon`, `helper`

### Checkbox e Radio

- estados: `default`, `error`, `success`
- slots: `label`, `control-wrap`, `control`, `text`, `helper-wrap`

### Table

- primitivos: `Table`, `Thead`, `Tbody`, `Tr`, `Th`, `Td`
- conveniência: `DataTable`
- slots: `table-wrap`, `table`, `head`, `row`, `th`, `td`

## Tokens mais usados

- tipografia: `--font-display`, `--font-body`, `--font-mono`
- cores de base: `--ink`, `--paper`, `--paper-deep`, `--surface-raised`, `--surface-brand`, `--surface-dark`
- bordas: `--border-default`, `--border-strong`
- semânticos: `--accent`, `--state-error`, `--state-success`, `--fire`
- efeitos: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-brand`, `--shadow-urgent`

## Resultado da auditoria rápida de dark mode

### Cobertura atual

- os componentes usam majoritariamente tokens semânticos, não valores hardcoded
- isso preserva o comportamento em dark mode para a maioria dos casos
- variantes inversas principais de `Button`, `Badge` e `Alert` agora usam tokens semânticos de texto e borda

### Exceções a observar

- ainda existem valores literais em páginas de padrões do app `docs`
- isso não quebra o tema atual, mas essas páginas ainda não devem ser tratadas como fonte final de implementação portável

## Revisão mais forte de acessibilidade

### Melhorias aplicadas

- grupos de checkbox e radio migrados para `fieldset` e `legend`
- grupos agora propagam `aria-describedby` e `aria-invalid` no `fieldset`
- `th` agora assume `scope="col"` por padrão
- accordion agora oculta painéis fechados de tecnologias assistivas via `hidden`
- componentes interativos principais receberam `:focus-visible` consistente
- formulários de captação do app `docs` agora validam campos, exibem erro por campo e anunciam status de envio

## Pendências ainda abertas

- validar contraste visual fino de páginas e blocos em revisão manual no browser
- aprofundar checklist de acessibilidade por componente com navegação por teclado mais detalhada
- ampliar a mesma qualidade de fluxo de formulário para futuros blocos além de `captação`
