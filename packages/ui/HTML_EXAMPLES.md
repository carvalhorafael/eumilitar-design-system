# @carvalhorafael/eumilitar-ui — Exemplos em HTML puro

## Objetivo

Registrar exemplos mínimos de marcação HTML para consumo fora de React, preservando a anatomia e as classes semânticas do pacote `@carvalhorafael/eumilitar-ui`.

## Pré-requisitos

- importar `@carvalhorafael/eumilitar-tokens`
- importar `@carvalhorafael/eumilitar-ui/styles.css`
- manter as classes `ds-*` e os `data-slot` quando quiser preservar compatibilidade com a anatomia documentada

## Button

```html
<button class="ds-button ds-button--primary" type="button" data-slot="button">
  <span class="ds-button__icon" data-slot="icon">+</span>
  Começar agora
</button>
```

## Badge

```html
<span class="ds-badge ds-badge--ex" data-slot="badge">
  <span class="ds-badge__dot" data-slot="dot"></span>
  Exército
</span>
```

## Card

```html
<article class="ds-card ds-card--default" data-slot="card">
  <header class="ds-card__header" data-slot="header">Plano completo</header>
  <div class="ds-card__body" data-slot="body">
    Conteúdo principal do card.
  </div>
  <footer class="ds-card__footer" data-slot="footer">
    Rodapé com CTA ou metadado.
  </footer>
</article>
```

## Alert

```html
<div class="ds-alert ds-alert--urgent" role="alert" data-slot="alert">
  <span class="ds-alert__icon" data-slot="icon">!</span>
  <div class="ds-alert__content" data-slot="content">
    <strong class="ds-alert__title" data-slot="title">Inscrições encerram hoje</strong>
    <div class="ds-alert__body" data-slot="body">Restam apenas 7 vagas.</div>
  </div>
  <button class="ds-alert__dismiss" type="button" aria-label="Fechar alerta" data-slot="dismiss">
    ×
  </button>
</div>
```

## Accordion

```html
<div class="ds-accordion" data-slot="accordion">
  <div class="ds-accordion__item" data-slot="item">
    <button
      class="ds-accordion__trigger"
      type="button"
      aria-expanded="false"
      aria-controls="faq-1-panel"
      id="faq-1-trigger"
      data-slot="trigger"
    >
      <span class="ds-accordion__title" data-slot="title">Quanto tempo tenho acesso?</span>
      <span class="ds-accordion__icon" data-slot="icon">+</span>
    </button>
    <div
      class="ds-accordion__panel"
      id="faq-1-panel"
      role="region"
      aria-labelledby="faq-1-trigger"
      hidden
      data-slot="panel"
    >
      <div class="ds-accordion__content" data-slot="content">
        O acesso é válido por 12 meses.
      </div>
    </div>
  </div>
</div>
```

## Input

```html
<div class="ds-input" data-slot="wrapper">
  <label class="ds-input__label" for="lead-email" data-slot="label">E-mail</label>
  <input
    class="ds-input__field"
    id="lead-email"
    type="email"
    aria-describedby="lead-email-helper"
    data-slot="field"
  />
  <p class="ds-input__helper" id="lead-email-helper" data-slot="helper">
    Você receberá o material no e-mail informado.
  </p>
</div>
```

## Textarea

```html
<div class="ds-input" data-slot="wrapper">
  <label class="ds-input__label" for="lead-message" data-slot="label">Mensagem</label>
  <textarea class="ds-input__field ds-textarea-field" id="lead-message" rows="4" data-slot="field"></textarea>
</div>
```

## Select

```html
<div class="ds-select" data-slot="wrapper">
  <label class="ds-select__label" for="lead-force" data-slot="label">Força de interesse</label>
  <div class="ds-select__field-wrap" data-slot="field-wrap">
    <select class="ds-select__field" id="lead-force" data-slot="field">
      <option value="">Selecione...</option>
      <option value="ex">Exército</option>
      <option value="mb">Marinha</option>
    </select>
    <span class="ds-select__icon" aria-hidden="true" data-slot="icon">▼</span>
  </div>
</div>
```

## Checkbox

```html
<label class="ds-checkbox" data-slot="label">
  <span class="ds-checkbox__control-wrap" data-slot="control-wrap">
    <input type="checkbox" />
    <span class="ds-checkbox__control" aria-hidden="true" data-slot="control"></span>
  </span>
  <span class="ds-checkbox__text" data-slot="text">Aceito os termos</span>
</label>
```

## Radio

```html
<label class="ds-radio" data-slot="label">
  <span class="ds-radio__control-wrap" data-slot="control-wrap">
    <input type="radio" name="plan" value="anual" />
    <span class="ds-radio__control" aria-hidden="true" data-slot="control"></span>
  </span>
  <span class="ds-radio__text" data-slot="text">Plano anual</span>
</label>
```

## Table

```html
<div class="ds-table-wrap" data-slot="wrapper">
  <table class="ds-table" data-slot="table">
    <thead class="ds-table__head" data-slot="head">
      <tr class="ds-table__row" data-slot="row">
        <th class="ds-table__th" scope="col" data-slot="th">Força</th>
        <th class="ds-table__th" scope="col" data-slot="th">Plano</th>
      </tr>
    </thead>
    <tbody data-slot="body">
      <tr class="ds-table__row" data-slot="row">
        <td class="ds-table__td" data-slot="td">Exército</td>
        <td class="ds-table__td" data-slot="td">Completo</td>
      </tr>
    </tbody>
  </table>
</div>
```
