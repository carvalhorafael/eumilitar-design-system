# @eumilitar/ui — Anatomia e checklist mínimo

## Objetivo

Registrar a anatomia estável dos componentes base para consumo futuro fora do app `docs`, inclusive em HTML/CSS puro e em um futuro tema WordPress.

## Convenções

- Cada componente expõe uma classe raiz `ds-*`
- Cada subparte relevante expõe `data-slot`
- Sempre que fizer sentido, a subparte também expõe classe `ds-<componente>__<slot>`

## Anatomia atual

### Button

- raiz: `ds-button`
- ícone: `ds-button__icon`

### Badge

- raiz: `ds-badge`
- ponto opcional: `ds-badge__dot`

### Card

- raiz: `ds-card`
- header: `ds-card__header`
- body: `ds-card__body`
- footer: `ds-card__footer`

### Alert

- raiz: `ds-alert`
- ícone: `ds-alert__icon`
- conteúdo: `ds-alert__content`
- título: `ds-alert__title`
- corpo: `ds-alert__body`
- dismiss: `ds-alert__dismiss`

### Accordion

- raiz: `ds-accordion`
- item: `ds-accordion__item`
- trigger: `ds-accordion__trigger`
- title: `ds-accordion__title`
- icon: `ds-accordion__icon`
- panel: `ds-accordion__panel`
- content: `ds-accordion__content`

### Input e Textarea

- wrapper: `ds-input`
- label: `ds-input__label`
- field: `ds-input__field`
- helper: `ds-input__helper`

### Select

- wrapper: `ds-select`
- label: `ds-select__label`
- field-wrap: `ds-select__field-wrap`
- field: `ds-select__field`
- icon: `ds-select__icon`
- helper: `ds-select__helper`

### Checkbox e Radio

- wrapper: `ds-checkbox` / `ds-radio`
- label: `ds-checkbox__label` / `ds-radio__label`
- control-wrap: `ds-checkbox__control-wrap` / `ds-radio__control-wrap`
- control: `ds-checkbox__control` / `ds-radio__control`
- text: `ds-checkbox__text` / `ds-radio__text`
- helper-wrap: `ds-checkbox__helper-wrap` / `ds-radio__helper-wrap`

### Table

- wrapper: `ds-table-wrap`
- table: `ds-table`
- head: `ds-table__head`
- row: `ds-table__row`
- header cell: `ds-table__th`
- body cell: `ds-table__td`

## Tokens por componente

### Button

- tipografia: `--font-body`
- superfícies: `--surface-brand`, `--paper`, `--n-50`, `--surface-inverse-soft`
- texto: `--ink`, `--text-inverse`, `--text-inverse-muted`
- bordas: `--border-strong`, `--border-inverse-soft`, `--border-inverse-strong`
- efeitos: `--shadow-sm`, `--shadow-md`, `--shadow-urgent`
- semânticos: `--fire`

### Badge

- tipografia: `--font-mono`
- texto: `--ink`, `--text-inverse`
- superfícies: `--paper`, `--surface-dark`
- bordas e semânticos: `--border-strong`, `--accent`, `--fire`, `--ex`, `--mb`, `--fab`, `--pm`, `--bm`

### Card

- tipografia: `--font-display`, `--font-body`
- superfícies: `--surface-raised`, `--surface-brand`, `--surface-dark`, `--paper`
- texto: `--ink`, `--text-inverse`, `--pencil`
- bordas e efeitos: `--border-strong`, `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-brand`

### Alert

- tipografia: `--font-mono`, `--font-body`
- superfícies: `--paper`, `--state-success-pale`, `--state-error-pale`, `--fire-pale`, `--fire`
- texto e semânticos: `--ink`, `--ink-soft`, `--text-inverse`, `--text-inverse-soft`, `--state-success`, `--state-error`
- bordas e efeitos: `--border-strong`, `--shadow-sm`, `--shadow-md`

### Accordion

- tipografia: `--font-body`
- superfícies: `--surface-raised`, `--paper`, `--paper-deep`
- texto: `--ink`, `--pencil`
- bordas e efeitos: `--border-strong`, `--border-default`, `--shadow-sm`
- semânticos: `--accent`

### Input e Textarea

- tipografia: `--font-mono`, `--font-body`
- superfícies: `--surface-raised`, `--state-error-pale`, `--state-success-pale`
- texto: `--ink`, `--pencil`
- bordas e semânticos: `--border-strong`, `--state-error`, `--state-success`, `--accent`
- raios: `--radius-sm`

### Select

- tipografia: `--font-mono`, `--font-body`
- superfícies: `--surface-raised`, `--state-error-pale`, `--state-success-pale`
- texto: `--ink`, `--pencil`
- bordas e semânticos: `--border-strong`, `--state-error`, `--state-success`, `--accent`
- raios: `--radius-sm`

### Checkbox e Radio

- tipografia: `--font-mono`, `--font-body`
- superfícies: `--surface-raised`
- texto: `--ink`, `--pencil`
- bordas e semânticos: `--border-strong`, `--state-error`, `--state-success`, `--accent`
- raios: `--radius-sm`

### Table

- tipografia: `--font-display`, `--font-body`, `--font-mono`
- superfícies: `--surface-raised`, `--paper`, `--paper-deep`
- texto: `--ink`, `--pencil`
- bordas e efeitos: `--border-strong`, `--border-default`, `--shadow-sm`

## Checklist mínimo de reuso

- Tokens vêm de `@eumilitar/tokens`
- Estrutura principal expõe classes estáveis
- Subpartes importantes expõem `data-slot`
- `className` externo pode compor o componente
- Eventos nativos repassam handlers recebidos
- Componente builda no app `docs`
- Componente funciona em dark mode com tokens atuais

## Pendências ainda abertas

- reduzir mais estilos inline repetidos
- documentar tokens usados por componente em detalhe
- expandir checklist de acessibilidade por componente
- detalhar exemplos de integração com JavaScript para comportamento de accordion e dismiss
