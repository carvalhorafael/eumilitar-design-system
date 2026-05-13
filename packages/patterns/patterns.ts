export type ContentFieldType =
  | "text"
  | "richText"
  | "badge"
  | "image"
  | "list"
  | "cta"
  | "number"
  | "faqItems"
  | "testimonialItems"
  | "featureItems"
  | "formFields";

export interface ContentField {
  key: string;
  label: string;
  type: ContentFieldType;
  required: boolean;
  description: string;
}

export interface PatternDefinition {
  id: string;
  label: string;
  category: "hero" | "urgency" | "faq" | "capture" | "benefits" | "testimonials" | "cta";
  variants: string[];
  anatomy: string[];
  tokens: string[];
  responsiveRules: string[];
  cmsFields: ContentField[];
  wordpressPriority: "high" | "medium" | "low";
}

export function getPatternDefinition(id: PatternDefinition["id"]) {
  return patternDefinitions.find((definition) => definition.id === id);
}

export const patternDefinitions: PatternDefinition[] = [
  {
    id: "hero",
    label: "Hero",
    category: "hero",
    variants: ["light", "brand-dark", "urgent"],
    anatomy: ["eyebrow", "badge-group", "headline", "supporting-copy", "primary-cta", "secondary-cta", "alert-optional"],
    tokens: ["--font-display", "--font-body", "--accent", "--surface-brand", "--fire", "--paper"],
    responsiveRules: [
      "headline deve reduzir por clamp em telas menores",
      "grupo de CTA precisa quebrar linha em mobile",
      "badge-group deve aceitar wrap sem perder hierarquia"
    ],
    cmsFields: [
      { key: "eyebrow", label: "Eyebrow", type: "text", required: false, description: "rótulo curto acima do título" },
      { key: "badgeGroup", label: "Grupo de badges", type: "list", required: false, description: "forças, categorias ou contextos" },
      { key: "headline", label: "Headline", type: "text", required: true, description: "mensagem principal do hero" },
      { key: "supportingCopy", label: "Texto de apoio", type: "richText", required: true, description: "subtítulo explicando a oferta" },
      { key: "primaryCta", label: "CTA primário", type: "cta", required: true, description: "ação principal do hero" },
      { key: "secondaryCta", label: "CTA secundário", type: "cta", required: false, description: "ação secundária opcional" },
      { key: "urgencyAlert", label: "Alerta de urgência", type: "text", required: false, description: "apenas para variante urgent" }
    ],
    wordpressPriority: "high"
  },
  {
    id: "urgency",
    label: "Urgência",
    category: "urgency",
    variants: ["top-banner", "max-conversion-cta", "availability-card"],
    anatomy: ["badge-or-alert", "headline", "urgency-copy", "count-or-stock", "cta", "supporting-proof"],
    tokens: ["--fire", "--urgent", "--surface-dark", "--accent", "--paper"],
    responsiveRules: [
      "cards de disponibilidade devem cair para uma coluna em mobile",
      "CTA central deve manter leitura em uma coluna em telas estreitas"
    ],
    cmsFields: [
      { key: "headline", label: "Headline", type: "text", required: true, description: "mensagem de escassez ou prazo" },
      { key: "copy", label: "Texto de urgência", type: "richText", required: true, description: "explicação curta do contexto urgente" },
      { key: "stockLabel", label: "Rótulo de disponibilidade", type: "text", required: false, description: "ex.: 3 vagas, esgotado" },
      { key: "primaryCta", label: "CTA primário", type: "cta", required: true, description: "ação principal em cenário urgente" },
      { key: "secondaryCta", label: "CTA secundário", type: "cta", required: false, description: "apoio opcional" }
    ],
    wordpressPriority: "high"
  },
  {
    id: "faq",
    label: "FAQ",
    category: "faq",
    variants: ["general", "force-specific"],
    anatomy: ["eyebrow", "headline", "accordion", "support-cta", "context-badge-optional"],
    tokens: ["--font-display", "--font-mono", "--paper", "--surface-raised", "--border-strong"],
    responsiveRules: [
      "acordeão precisa ocupar largura total em mobile",
      "badge contextual deve empilhar acima do título em telas estreitas"
    ],
    cmsFields: [
      { key: "eyebrow", label: "Eyebrow", type: "text", required: false, description: "rótulo curto da seção" },
      { key: "headline", label: "Headline", type: "text", required: true, description: "título da seção de perguntas" },
      { key: "faqItems", label: "Itens de FAQ", type: "faqItems", required: true, description: "pergunta, resposta e flags como defaultOpen" },
      { key: "supportCta", label: "CTA de suporte", type: "cta", required: false, description: "ação ao final do FAQ" }
    ],
    wordpressPriority: "high"
  },
  {
    id: "capture",
    label: "Captação",
    category: "capture",
    variants: ["lead-form", "full-signup"],
    anatomy: ["offer-copy", "form", "confirmation-state", "supporting-proof"],
    tokens: ["--surface-brand", "--surface-raised", "--accent", "--fire", "--font-display"],
    responsiveRules: [
      "form completo em duas colunas deve colapsar para uma coluna em mobile",
      "campos em grid devem empilhar verticalmente em telas pequenas"
    ],
    cmsFields: [
      { key: "headline", label: "Headline da oferta", type: "text", required: true, description: "texto principal da oferta" },
      { key: "copy", label: "Texto da oferta", type: "richText", required: false, description: "texto de apoio da oferta" },
      { key: "formFields", label: "Campos do formulário", type: "formFields", required: true, description: "lista de campos, tipos e obrigatoriedade" },
      { key: "primaryCta", label: "CTA do formulário", type: "cta", required: true, description: "botão de submissão" },
      { key: "confirmationMessage", label: "Mensagem de sucesso", type: "richText", required: true, description: "estado pós-envio" }
    ],
    wordpressPriority: "high"
  },
  {
    id: "benefits",
    label: "Benefícios",
    category: "benefits",
    variants: ["icon-grid", "checklist-two-columns", "stats-band"],
    anatomy: ["eyebrow", "headline", "feature-items", "cta-optional", "stats-optional"],
    tokens: ["--accent", "--font-display", "--paper", "--surface-brand", "--surface-raised"],
    responsiveRules: [
      "grid de três colunas deve cair para 1-2 colunas em telas menores",
      "checklist em duas colunas deve empilhar para uma coluna em mobile"
    ],
    cmsFields: [
      { key: "headline", label: "Headline", type: "text", required: true, description: "título da seção de benefícios" },
      { key: "featureItems", label: "Itens de benefício", type: "featureItems", required: true, description: "lista com título, descrição e opcionalmente ícone" },
      { key: "primaryCta", label: "CTA opcional", type: "cta", required: false, description: "ação de apoio em seção de benefícios" },
      { key: "stats", label: "Números", type: "list", required: false, description: "itens numéricos para a variante stats-band" }
    ],
    wordpressPriority: "high"
  },
  {
    id: "testimonials",
    label: "Depoimentos",
    category: "testimonials",
    variants: ["three-card-grid", "featured-quote", "proof-numbers-band"],
    anatomy: ["eyebrow", "headline", "testimonial-items", "featured-quote", "author-meta", "cta-optional", "stats-optional"],
    tokens: ["--font-display", "--fire", "--paper", "--surface-dark", "--accent"],
    responsiveRules: [
      "grid de depoimentos deve reduzir colunas progressivamente",
      "depoimento em destaque deve empilhar autor e badge em mobile"
    ],
    cmsFields: [
      { key: "headline", label: "Headline", type: "text", required: true, description: "título da seção de depoimentos" },
      { key: "testimonialItems", label: "Depoimentos", type: "testimonialItems", required: true, description: "citação, autor, força e metadados" },
      { key: "featuredQuote", label: "Depoimento destaque", type: "richText", required: false, description: "citação principal da variante destaque" },
      { key: "primaryCta", label: "CTA opcional", type: "cta", required: false, description: "ação após prova social" },
      { key: "stats", label: "Faixa de números", type: "list", required: false, description: "métricas quantitativas de credibilidade" }
    ],
    wordpressPriority: "high"
  },
  {
    id: "cta",
    label: "CTA Final",
    category: "cta",
    variants: ["light", "brand-dark", "urgent"],
    anatomy: ["badge-optional", "headline", "supporting-copy", "primary-cta", "secondary-cta", "supporting-proof"],
    tokens: ["--surface-dark", "--surface-brand", "--fire", "--accent", "--font-display"],
    responsiveRules: [
      "CTAs devem quebrar linha em telas pequenas",
      "headline deve preservar impacto sem overflow horizontal"
    ],
    cmsFields: [
      { key: "badge", label: "Badge", type: "badge", required: false, description: "rótulo opcional do CTA" },
      { key: "headline", label: "Headline", type: "text", required: true, description: "mensagem final de conversão" },
      { key: "supportingCopy", label: "Texto de apoio", type: "richText", required: false, description: "apoio ao CTA final" },
      { key: "primaryCta", label: "CTA primário", type: "cta", required: true, description: "ação principal de fechamento" },
      { key: "secondaryCta", label: "CTA secundário", type: "cta", required: false, description: "ação alternativa" }
    ],
    wordpressPriority: "high"
  }
];
