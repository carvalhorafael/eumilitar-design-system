export const webBlockIds = [
  "hero",
  "urgency",
  "faq",
  "capture",
  "benefits",
  "testimonials",
  "cta",
] as const;

export type WebBlockId = (typeof webBlockIds)[number];

export const webBlockVariants = {
  hero: ["light", "brand-dark", "urgent"],
  urgency: ["top-banner", "max-conversion-cta", "availability-card"],
  faq: ["default"],
  capture: ["lead", "two-column"],
  benefits: ["icon-grid", "checklist", "stats-band"],
  testimonials: ["grid", "featured-quote", "proof-numbers-band"],
  cta: ["light", "brand-dark", "urgent"],
} as const satisfies Record<WebBlockId, readonly string[]>;

export const webBlockBaseClasses = {
  hero: "ds-hero",
  urgency: "ds-urgency",
  faq: "ds-faq",
  capture: "ds-capture",
  benefits: "ds-benefits",
  testimonials: "ds-testimonials",
  cta: "ds-cta",
} as const satisfies Record<WebBlockId, string>;

export const webStableContracts = {
  renderers: {
    hero: "renderHeroBlock",
    urgency: "renderUrgencyBlock",
    faq: "renderFaqBlock",
    capture: "renderCaptureBlock",
    benefits: "renderBenefitsBlock",
    testimonials: "renderTestimonialsBlock",
    cta: "renderCtaBlock",
  },
  behaviors: {
    accordion: "enhanceAccordion",
  },
  markupDataAttributes: {
    accordionRoot: "data-accordion-root",
    accordionItem: "data-accordion-item",
    accordionTrigger: "data-accordion-trigger",
    accordionPanel: "data-accordion-panel",
  },
} as const;
