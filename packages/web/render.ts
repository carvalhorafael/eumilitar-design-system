import type {
  BenefitsBlockData,
  CaptureBlockData,
  CtaBlockData,
  FaqBlockData,
  HeroBlockData,
  TestimonialsBlockData,
  UrgencyBlockData,
  WebAction,
  WebBadge,
  WebFeatureItem,
  WebFormField,
  WebStat,
  WebTestimonialItem,
} from "./types";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderBadge(badge: WebBadge) {
  const variant = badge.variant ?? "default";
  return `<span class="ds-badge ds-badge--${escapeHtml(variant)}">${escapeHtml(badge.label)}</span>`;
}

function renderAction(action: WebAction) {
  const variant = action.variant ?? "primary";
  return `<a class="ds-button ds-button--${escapeHtml(variant)}" href="${escapeHtml(action.href)}">${escapeHtml(action.label)}</a>`;
}

function renderStat(stat: WebStat, blockClass: string) {
  return [
    `<div class="${blockClass}__stat">`,
    `<strong class="${blockClass}__stat-value">${escapeHtml(stat.value)}</strong>`,
    `<span class="${blockClass}__stat-label">${escapeHtml(stat.label)}</span>`,
    `</div>`,
  ].join("");
}

function renderFeatureItem(item: WebFeatureItem) {
  return [
    `<article class="ds-benefits__item">`,
    `<h3 class="ds-benefits__item-title">${escapeHtml(item.title)}</h3>`,
    `<p class="ds-benefits__item-body">${escapeHtml(item.description)}</p>`,
    `</article>`,
  ].join("");
}

function renderField(field: WebFormField) {
  const required = field.required ? " required" : "";
  const requiredLabel = field.required ? " *" : "";
  const label = `<label class="ds-input__label" for="${escapeHtml(field.id)}">${escapeHtml(field.label)}${requiredLabel}</label>`;

  if (field.type === "textarea") {
    return [
      label,
      `<textarea class="ds-input__field" id="${escapeHtml(field.id)}" placeholder="${escapeHtml(field.placeholder ?? "")}"${required}></textarea>`,
    ].join("");
  }

  if (field.type === "select") {
    const options = (field.options ?? [])
      .map(
        (option) =>
          `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`,
      )
      .join("");

    return [
      label,
      `<select class="ds-select__field" id="${escapeHtml(field.id)}"${required}>${options}</select>`,
    ].join("");
  }

  return [
    label,
    `<input class="ds-input__field" id="${escapeHtml(field.id)}" type="${escapeHtml(field.type)}" placeholder="${escapeHtml(field.placeholder ?? "")}"${required} />`,
  ].join("");
}

function renderTestimonialItem(item: WebTestimonialItem) {
  const badge = item.badge ? renderBadge(item.badge) : "";
  const meta = item.meta
    ? `<p class="ds-testimonials__meta">${escapeHtml(item.meta)}</p>`
    : "";

  return [
    `<article class="ds-testimonials__item">`,
    `<blockquote class="ds-testimonials__quote">${escapeHtml(item.quote)}</blockquote>`,
    `<p class="ds-testimonials__author">${escapeHtml(item.author)}</p>`,
    meta,
    badge,
    `</article>`,
  ].join("");
}

export function renderHeroBlock(data: HeroBlockData) {
  const variant = data.variant ?? "light";
  const eyebrow = data.eyebrow
    ? `<p class="ds-hero__eyebrow">${escapeHtml(data.eyebrow)}</p>`
    : "";
  const badges = data.badges?.length
    ? `<div class="ds-hero__badges">${data.badges.map(renderBadge).join("")}</div>`
    : "";
  const secondaryCta = data.secondaryCta ? renderAction(data.secondaryCta) : "";
  const urgencyAlert = data.urgencyAlert
    ? `<div class="ds-alert ds-alert--urgent ds-hero__alert">${escapeHtml(data.urgencyAlert)}</div>`
    : "";

  return [
    `<section class="ds-hero ds-hero--${escapeHtml(variant)}">`,
    eyebrow,
    badges,
    `<h1 class="ds-hero__title">${escapeHtml(data.headline)}</h1>`,
    `<p class="ds-hero__body">${escapeHtml(data.supportingCopy)}</p>`,
    `<div class="ds-hero__actions">`,
    renderAction(data.primaryCta),
    secondaryCta,
    `</div>`,
    urgencyAlert,
    `</section>`,
  ].join("");
}

export function renderFaqBlock(data: FaqBlockData) {
  const eyebrow = data.eyebrow
    ? `<p class="ds-faq__eyebrow">${escapeHtml(data.eyebrow)}</p>`
    : "";
  const items = data.items
    .map((item, index) => {
      const panelId = `ds-faq-panel-${index + 1}`;
      return [
        `<div class="ds-accordion__item" data-accordion-item>`,
        `<button class="ds-accordion__trigger" type="button" aria-expanded="false" aria-controls="${panelId}" data-accordion-trigger>`,
        `${escapeHtml(item.question)}`,
        `</button>`,
        `<div class="ds-accordion__panel" id="${panelId}" hidden data-accordion-panel>`,
        `<div class="ds-accordion__content">${escapeHtml(item.answer)}</div>`,
        `</div>`,
        `</div>`,
      ].join("");
    })
    .join("");

  return [
    `<section class="ds-faq">`,
    eyebrow,
    `<h2 class="ds-faq__title">${escapeHtml(data.headline)}</h2>`,
    `<div class="ds-accordion" data-accordion-root>`,
    items,
    `</div>`,
    `</section>`,
  ].join("");
}

export function renderUrgencyBlock(data: UrgencyBlockData) {
  const variant = data.variant ?? "max-conversion-cta";
  const badge = data.badge ? renderBadge(data.badge) : "";
  const secondaryCta = data.secondaryCta ? renderAction(data.secondaryCta) : "";
  const stat = data.stat ? renderStat(data.stat, "ds-urgency") : "";

  return [
    `<section class="ds-urgency ds-urgency--${escapeHtml(variant)}">`,
    badge,
    `<h2 class="ds-urgency__title">${escapeHtml(data.headline)}</h2>`,
    `<p class="ds-urgency__body">${escapeHtml(data.supportingCopy)}</p>`,
    stat,
    `<div class="ds-urgency__actions">`,
    renderAction(data.primaryCta),
    secondaryCta,
    `</div>`,
    `</section>`,
  ].join("");
}

export function renderCaptureBlock(data: CaptureBlockData) {
  const variant = data.variant ?? "lead";
  const eyebrow = data.eyebrow
    ? `<p class="ds-capture__eyebrow">${escapeHtml(data.eyebrow)}</p>`
    : "";
  const supportingCopy = data.supportingCopy
    ? `<p class="ds-capture__body">${escapeHtml(data.supportingCopy)}</p>`
    : "";

  return [
    `<section class="ds-capture ds-capture--${escapeHtml(variant)}">`,
    eyebrow,
    `<h2 class="ds-capture__title">${escapeHtml(data.headline)}</h2>`,
    supportingCopy,
    `<form class="ds-capture__form">`,
    data.fields.map(renderField).join(""),
    `<button class="ds-button ds-button--primary" type="submit">${escapeHtml(data.submitLabel)}</button>`,
    `</form>`,
    `</section>`,
  ].join("");
}

export function renderBenefitsBlock(data: BenefitsBlockData) {
  const variant = data.variant ?? "icon-grid";
  const primaryCta = data.primaryCta ? renderAction(data.primaryCta) : "";
  const stats = data.stats?.length
    ? `<div class="ds-benefits__stats">${data.stats.map((stat) => renderStat(stat, "ds-benefits")).join("")}</div>`
    : "";

  return [
    `<section class="ds-benefits ds-benefits--${escapeHtml(variant)}">`,
    `<h2 class="ds-benefits__title">${escapeHtml(data.headline)}</h2>`,
    `<div class="ds-benefits__grid">`,
    data.items.map(renderFeatureItem).join(""),
    `</div>`,
    stats,
    primaryCta,
    `</section>`,
  ].join("");
}

export function renderTestimonialsBlock(data: TestimonialsBlockData) {
  const variant = data.variant ?? "grid";
  const eyebrow = data.eyebrow
    ? `<p class="ds-testimonials__eyebrow">${escapeHtml(data.eyebrow)}</p>`
    : "";
  const primaryCta = data.primaryCta ? renderAction(data.primaryCta) : "";
  const stats = data.stats?.length
    ? `<div class="ds-testimonials__stats">${data.stats.map((stat) => renderStat(stat, "ds-testimonials")).join("")}</div>`
    : "";

  return [
    `<section class="ds-testimonials ds-testimonials--${escapeHtml(variant)}">`,
    eyebrow,
    `<h2 class="ds-testimonials__title">${escapeHtml(data.headline)}</h2>`,
    `<div class="ds-testimonials__grid">`,
    data.items.map(renderTestimonialItem).join(""),
    `</div>`,
    stats,
    primaryCta,
    `</section>`,
  ].join("");
}

export function renderCtaBlock(data: CtaBlockData) {
  const variant = data.variant ?? "brand-dark";
  const badge = data.badge ? renderBadge(data.badge) : "";
  const supportingCopy = data.supportingCopy
    ? `<p class="ds-cta__body">${escapeHtml(data.supportingCopy)}</p>`
    : "";
  const secondaryCta = data.secondaryCta ? renderAction(data.secondaryCta) : "";

  return [
    `<section class="ds-cta ds-cta--${escapeHtml(variant)}">`,
    badge,
    `<h2 class="ds-cta__title">${escapeHtml(data.headline)}</h2>`,
    supportingCopy,
    `<div class="ds-cta__actions">`,
    renderAction(data.primaryCta),
    secondaryCta,
    `</div>`,
    `</section>`,
  ].join("");
}
