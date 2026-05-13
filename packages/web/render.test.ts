import { enhanceAccordion } from "./behavior";
import {
  webBlockBaseClasses,
  webBlockIds,
  webBlockVariants,
  webStableContracts,
} from "./manifest";
import {
  renderBenefitsBlock,
  renderCaptureBlock,
  renderCtaBlock,
  renderFaqBlock,
  renderHeroBlock,
  renderTestimonialsBlock,
  renderUrgencyBlock,
} from "./render";

describe("@carvalhorafael/eumilitar-web", () => {
  it("expõe manifesto público estável", () => {
    expect(webBlockIds).toEqual([
      "hero",
      "urgency",
      "faq",
      "capture",
      "benefits",
      "testimonials",
      "cta",
    ]);

    expect(webBlockBaseClasses.hero).toBe("ds-hero");
    expect(webBlockVariants.hero).toContain("brand-dark");
    expect(webStableContracts.behaviors.accordion).toBe("enhanceAccordion");
    expect(webStableContracts.markupDataAttributes.accordionTrigger).toBe("data-accordion-trigger");
  });

  it("renderiza hero com CTA secundário e badges", () => {
    const html = renderHeroBlock({
      eyebrow: "Preparação militar",
      badges: [
        { label: "Exército", variant: "ex" },
        { label: "Marinha", variant: "mb" },
      ],
      headline: "Prepare-se com trilhas por força",
      supportingCopy: "Questões, simulados e acompanhamento.",
      primaryCta: { label: "Começar", href: "#planos" },
      secondaryCta: { label: "Ver detalhes", href: "#faq", variant: "secondary" },
    });

    expect(html).toContain('class="ds-hero ds-hero--light"');
    expect(html).toContain("Preparação militar");
    expect(html).toContain("ds-badge--ex");
    expect(html).toContain("ds-button--secondary");
  });

  it("renderiza faq com atributos para enhancement progressivo", () => {
    const html = renderFaqBlock({
      headline: "Perguntas e respostas",
      items: [
        {
          question: "Quanto tempo tenho acesso?",
          answer: "O acesso é válido por 12 meses.",
        },
      ],
    });

    expect(html).toContain("data-accordion-root");
    expect(html).toContain("data-accordion-trigger");
    expect(html).toContain("data-accordion-panel");
    expect(html).toContain('aria-expanded="false"');
  });

  it("aplica enhancement de accordion no DOM", () => {
    document.body.innerHTML = renderFaqBlock({
      headline: "Perguntas e respostas",
      items: [
        {
          question: "Quanto tempo tenho acesso?",
          answer: "O acesso é válido por 12 meses.",
        },
      ],
    });

    enhanceAccordion(document);

    const trigger = document.querySelector("[data-accordion-trigger]");
    const panel = document.querySelector("[data-accordion-panel]");

    expect(trigger).toBeInstanceOf(HTMLElement);
    expect(panel).toBeInstanceOf(HTMLElement);
    expect(trigger?.getAttribute("aria-expanded")).toBe("false");
    expect((panel as HTMLElement).hidden).toBe(true);

    (trigger as HTMLElement).click();

    expect(trigger?.getAttribute("aria-expanded")).toBe("true");
    expect((panel as HTMLElement).hidden).toBe(false);
  });

  it("renderiza os demais blocos portáveis com classes esperadas", () => {
    const urgency = renderUrgencyBlock({
      headline: "Restam apenas 7 vagas",
      supportingCopy: "Acesso imediato após a confirmação.",
      badge: { label: "Última turma", variant: "urgent" },
      stat: { value: "7", label: "vagas restantes" },
      primaryCta: { label: "Garantir vaga", href: "#checkout", variant: "urgent" },
    });

    const capture = renderCaptureBlock({
      headline: "Receba o material gratuito",
      fields: [
        { id: "lead-name", label: "Nome", type: "text", required: true },
        {
          id: "lead-force",
          label: "Força",
          type: "select",
          options: [{ label: "Exército", value: "ex" }],
        },
      ],
      submitLabel: "Receber material",
    });

    const benefits = renderBenefitsBlock({
      headline: "Tudo que você precisa para ser aprovado",
      items: [{ title: "Conteúdo por força", description: "Trilhas específicas por edital." }],
      stats: [{ value: "+1200", label: "questões comentadas" }],
    });

    const testimonials = renderTestimonialsBlock({
      headline: "Aprovados que estudaram com a EuMilitar",
      items: [
        {
          quote: "O material de Matemática foi decisivo.",
          author: "Cabo Rodrigo Almeida",
          badge: { label: "Exército", variant: "ex" },
        },
      ],
    });

    const cta = renderCtaBlock({
      headline: "Comece sua preparação hoje",
      primaryCta: { label: "Assinar agora", href: "#checkout", variant: "brand-inverse" },
    });

    expect(urgency).toContain('class="ds-urgency ds-urgency--max-conversion-cta"');
    expect(capture).toContain('class="ds-capture ds-capture--lead"');
    expect(capture).toContain('class="ds-select__field"');
    expect(benefits).toContain('class="ds-benefits ds-benefits--icon-grid"');
    expect(testimonials).toContain('class="ds-testimonials ds-testimonials--grid"');
    expect(cta).toContain('class="ds-cta ds-cta--brand-dark"');
  });
});
