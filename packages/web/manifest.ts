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

export const webComponentIds = [
  "navbar",
  "breadcrumbs",
  "drawer",
  "tabs",
  "toast",
  "tooltip",
  "skeleton",
  "loading",
  "fieldset",
  "toggle",
  "file-input",
  "progress",
  "steps",
  "stat",
  "avatar",
  "status",
  "list",
  "divider",
  "pagination",
] as const;

export type WebComponentId = (typeof webComponentIds)[number];

export const webComponentBaseClasses = {
  navbar: "ds-navbar",
  breadcrumbs: "ds-breadcrumbs",
  drawer: "ds-drawer",
  tabs: "ds-tabs",
  toast: "ds-toast",
  tooltip: "ds-tooltip",
  skeleton: "ds-skeleton",
  loading: "ds-loading",
  fieldset: "ds-fieldset",
  toggle: "ds-toggle",
  "file-input": "ds-file-input",
  progress: "ds-progress",
  steps: "ds-steps",
  stat: "ds-stat",
  avatar: "ds-avatar",
  status: "ds-status",
  list: "ds-list",
  divider: "ds-divider",
  pagination: "ds-pagination",
} as const satisfies Record<WebComponentId, string>;

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
  componentRenderers: {
    navbar: "renderNavbar",
    breadcrumbs: "renderBreadcrumbs",
    drawer: "renderDrawer",
    tabs: "renderTabs",
    toast: "renderToast",
    tooltip: "renderTooltip",
    skeleton: "renderSkeleton",
    loading: "renderLoading",
    fieldset: "renderFieldset",
    toggle: "renderToggle",
    fileInput: "renderFileInput",
    progress: "renderProgress",
    steps: "renderSteps",
    stat: "renderStat",
    avatar: "renderAvatar",
    status: "renderStatus",
    list: "renderList",
    divider: "renderDivider",
    pagination: "renderPagination",
  },
  behaviors: {
    accordion: "enhanceAccordion",
    navbar: "enhanceNavbar",
    drawer: "enhanceDrawer",
    tabs: "enhanceTabs",
    toastDismiss: "enhanceToastDismiss",
  },
  markupDataAttributes: {
    accordionRoot: "data-accordion-root",
    accordionItem: "data-accordion-item",
    accordionTrigger: "data-accordion-trigger",
    accordionPanel: "data-accordion-panel",
    navbarRoot: "data-navbar-root",
    drawerRoot: "data-drawer-root",
    tabsRoot: "data-tabs-root",
    toastClose: "data-toast-close",
  },
} as const;
