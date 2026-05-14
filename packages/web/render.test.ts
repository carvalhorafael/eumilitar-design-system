import { enhanceAccordion, enhanceDrawer, enhanceNavbar, enhanceTabs, enhanceToastDismiss } from "./behavior";
import {
  renderBreadcrumbs,
  renderDrawer,
  renderLoading,
  renderPagination,
  renderProgress,
  renderSkeleton,
  renderTabs,
  renderToast,
  renderNavbar,
  renderStats,
  renderStatus,
} from "./components";
import {
  webBlockBaseClasses,
  webBlockIds,
  webBlockVariants,
  webComponentBaseClasses,
  webComponentIds,
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
    expect(webComponentIds).toContain("tabs");
    expect(webComponentBaseClasses.pagination).toBe("ds-pagination");
    expect(webBlockVariants.hero).toContain("brand-dark");
    expect(webStableContracts.behaviors.accordion).toBe("enhanceAccordion");
    expect(webStableContracts.componentRenderers.tabs).toBe("renderTabs");
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

  it("renderiza componentes portáveis adicionados na versão 0.3", () => {
    const navbar = renderNavbar({
      brand: "EuMilitar",
      groups: [{ label: "Componentes", items: [{ href: "/componentes/tabs", label: "Tabs" }] }],
      activeHref: "/componentes/tabs",
    });
    const breadcrumbs = renderBreadcrumbs({
      items: [
        { href: "/", label: "Início" },
        { label: "Tabs" },
      ],
    });
    const tabs = renderTabs({
      id: "demo-tabs",
      items: [
        { value: "a", label: "A", contentHtml: "<p>A</p>" },
        { value: "b", label: "B", contentHtml: "<p>B</p>" },
      ],
    });
    const feedback = [
      renderToast({ variant: "success", bodyHtml: "<p>Salvo.</p>", dismissible: true }),
      renderSkeleton({ variant: "text", lines: 2 }),
      renderLoading({ variant: "dots" }),
      renderProgress({ value: 70, showValue: true }),
    ].join("");
    const dataDisplay = [
      renderStats({ items: [{ title: "Aprovados", value: "+1200" }] }),
      renderStatus({ tone: "success", label: "Publicado", pulse: true }),
      renderPagination({ page: 2, totalPages: 3, getHref: (page) => `?page=${page}` }),
    ].join("");

    expect(navbar).toContain("data-navbar-root");
    expect(navbar).toContain('aria-current="page"');
    expect(breadcrumbs).toContain('class="ds-breadcrumbs"');
    expect(tabs).toContain("data-tabs-root");
    expect(tabs).toContain('role="tabpanel"');
    expect(feedback).toContain('class="ds-toast"');
    expect(feedback).toContain("70%");
    expect(dataDisplay).toContain('class="ds-stats"');
    expect(dataDisplay).toContain('data-tone="success"');
    expect(dataDisplay).toContain('class="ds-pagination"');
  });

  it("aplica enhancements progressivos de componentes", () => {
    document.body.innerHTML = [
      renderNavbar({
        brand: "EuMilitar",
        groups: [{ label: "Navegação", items: [{ href: "/docs", label: "Docs" }] }],
      }),
      renderDrawer({ title: "Menu", bodyHtml: "<p>Conteúdo</p>", id: "drawer-demo" }),
      renderTabs({
        id: "enhanced-tabs",
        items: [
          { value: "first", label: "Primeira", contentHtml: "<p>1</p>" },
          { value: "second", label: "Segunda", contentHtml: "<p>2</p>" },
        ],
      }),
      renderToast({ title: "Aviso", dismissible: true }),
    ].join("");

    enhanceNavbar(document);
    enhanceDrawer(document);
    enhanceTabs(document);
    enhanceToastDismiss(document);

    const navbarTrigger = document.querySelector("[data-navbar-trigger]") as HTMLElement;
    const navbar = document.querySelector("[data-navbar-root]");
    navbarTrigger.click();
    expect(navbar?.getAttribute("data-open")).toBe("true");

    const drawerTrigger = document.querySelector("[data-drawer-trigger]") as HTMLElement;
    const drawerLayer = document.querySelector("[data-drawer-layer]") as HTMLElement;
    drawerTrigger.click();
    expect(drawerLayer.hidden).toBe(false);

    const secondTab = document.querySelector("#enhanced-tabs-second-tab") as HTMLElement;
    const firstPanel = document.querySelector("#enhanced-tabs-first-panel") as HTMLElement;
    const secondPanel = document.querySelector("#enhanced-tabs-second-panel") as HTMLElement;
    secondTab.click();
    expect(firstPanel.hidden).toBe(true);
    expect(secondPanel.hidden).toBe(false);

    const toastClose = document.querySelector("[data-toast-close]") as HTMLElement;
    toastClose.click();
    expect(document.querySelector(".ds-toast")).toBeNull();
  });
});
