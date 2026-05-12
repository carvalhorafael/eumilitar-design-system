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
- criar exemplos HTML agnósticos de framework para os blocos
