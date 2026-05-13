export interface WebBadge {
  label: string;
  variant?: string;
}

export interface WebAction {
  label: string;
  href: string;
  variant?: string;
}

export interface WebStat {
  value: string;
  label: string;
}

export interface WebFeatureItem {
  title: string;
  description: string;
}

export interface WebSelectOption {
  label: string;
  value: string;
}

export interface WebFormField {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  placeholder?: string;
  required?: boolean;
  options?: WebSelectOption[];
}

export interface WebTestimonialItem {
  quote: string;
  author: string;
  meta?: string;
  badge?: WebBadge;
}

export interface HeroBlockData {
  variant?: "light" | "brand-dark" | "urgent";
  eyebrow?: string;
  badges?: WebBadge[];
  headline: string;
  supportingCopy: string;
  primaryCta: WebAction;
  secondaryCta?: WebAction;
  urgencyAlert?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqBlockData {
  eyebrow?: string;
  headline: string;
  items: FaqItem[];
}

export interface UrgencyBlockData {
  variant?: "top-banner" | "max-conversion-cta" | "availability-card";
  badge?: WebBadge;
  headline: string;
  supportingCopy: string;
  primaryCta: WebAction;
  secondaryCta?: WebAction;
  stat?: WebStat;
}

export interface CaptureBlockData {
  variant?: "lead" | "two-column";
  eyebrow?: string;
  headline: string;
  supportingCopy?: string;
  fields: WebFormField[];
  submitLabel: string;
}

export interface BenefitsBlockData {
  variant?: "icon-grid" | "checklist" | "stats-band";
  headline: string;
  items: WebFeatureItem[];
  primaryCta?: WebAction;
  stats?: WebStat[];
}

export interface TestimonialsBlockData {
  variant?: "grid" | "featured-quote" | "proof-numbers-band";
  eyebrow?: string;
  headline: string;
  items: WebTestimonialItem[];
  primaryCta?: WebAction;
  stats?: WebStat[];
}

export interface CtaBlockData {
  variant?: "light" | "brand-dark" | "urgent";
  badge?: WebBadge;
  headline: string;
  supportingCopy?: string;
  primaryCta: WebAction;
  secondaryCta?: WebAction;
}
