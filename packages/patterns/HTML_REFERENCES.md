# HTML References — Blocos portáveis

## Hero

```html
<section class="ds-hero ds-hero--light">
  <div class="ds-hero__badges">
    <span class="ds-badge ds-badge--ex">Exército</span>
    <span class="ds-badge ds-badge--mb">Marinha</span>
  </div>
  <h1 class="ds-hero__title">Prepare-se para as Forças Armadas</h1>
  <p class="ds-hero__body">Trilhas por força, banco de questões e simulados.</p>
  <div class="ds-hero__actions">
    <a class="ds-button ds-button--primary" href="#">Começar agora</a>
    <a class="ds-button ds-button--secondary" href="#">Ver planos</a>
  </div>
</section>
```

## Urgência

```html
<section class="ds-urgency ds-urgency--cta-dark">
  <span class="ds-badge ds-badge--urgent">Última turma do semestre</span>
  <h2 class="ds-urgency__title">Restam apenas 7 vagas</h2>
  <p class="ds-urgency__body">Acesso imediato após confirmação do pagamento.</p>
  <div class="ds-urgency__actions">
    <a class="ds-button ds-button--urgent" href="#">Garantir minha vaga</a>
    <a class="ds-button ds-button--ghost-inverse" href="#">Ver detalhes</a>
  </div>
</section>
```

## FAQ

```html
<section class="ds-faq">
  <p class="ds-faq__eyebrow">Dúvidas frequentes</p>
  <h2 class="ds-faq__title">Perguntas &amp; Respostas</h2>
  <div class="ds-accordion">
    <div class="ds-accordion__item">
      <button class="ds-accordion__trigger" type="button">Quanto tempo tenho acesso?</button>
      <div class="ds-accordion__panel">
        <div class="ds-accordion__content">
          O acesso é válido por 12 meses a partir da compra.
        </div>
      </div>
    </div>
  </div>
</section>
```

## Captação

```html
<section class="ds-capture ds-capture--lead">
  <form class="ds-capture__form">
    <label class="ds-input__label" for="lead-name">Nome completo</label>
    <input class="ds-input__field" id="lead-name" type="text" />

    <label class="ds-input__label" for="lead-email">E-mail</label>
    <input class="ds-input__field" id="lead-email" type="email" />

    <label class="ds-input__label" for="lead-force">Força de interesse</label>
    <select class="ds-select__field" id="lead-force"></select>

    <button class="ds-button ds-button--primary" type="submit">Receber material gratuito</button>
  </form>
</section>
```

## Benefícios

```html
<section class="ds-benefits ds-benefits--icon-grid">
  <h2 class="ds-benefits__title">Tudo que você precisa para ser aprovado</h2>
  <div class="ds-benefits__grid">
    <article class="ds-benefits__item">
      <h3 class="ds-benefits__item-title">Conteúdo por força</h3>
      <p class="ds-benefits__item-body">Trilhas específicas por edital.</p>
    </article>
  </div>
</section>
```

## Depoimentos

```html
<section class="ds-testimonials ds-testimonials--grid">
  <h2 class="ds-testimonials__title">Aprovados que estudaram com a EuMilitar</h2>
  <div class="ds-testimonials__grid">
    <article class="ds-testimonials__item">
      <blockquote class="ds-testimonials__quote">O material de Matemática foi decisivo.</blockquote>
      <p class="ds-testimonials__author">Cabo Rodrigo Almeida</p>
      <span class="ds-badge ds-badge--ex">Exército</span>
    </article>
  </div>
</section>
```

## CTA Final

```html
<section class="ds-cta ds-cta--brand-dark">
  <span class="ds-badge ds-badge--brand">Plano completo</span>
  <h2 class="ds-cta__title">Comece sua preparação hoje</h2>
  <p class="ds-cta__body">Acesso imediato ao curso completo.</p>
  <div class="ds-cta__actions">
    <a class="ds-button ds-button--brand-inverse" href="#">Começar agora</a>
    <a class="ds-button ds-button--ghost-inverse" href="#">Saiba mais</a>
  </div>
</section>
```
