function isHTMLElement(value: unknown): value is HTMLElement {
  return value instanceof HTMLElement;
}

export function enhanceAccordion(root: ParentNode = document) {
  const items = root.querySelectorAll("[data-accordion-item]");

  items.forEach((item) => {
    const trigger = item.querySelector("[data-accordion-trigger]");
    const panel = item.querySelector("[data-accordion-panel]");

    if (!isHTMLElement(trigger) || !isHTMLElement(panel)) {
      return;
    }

    trigger.addEventListener("click", () => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", isExpanded ? "false" : "true");
      panel.hidden = isExpanded;
    });
  });
}

export const accordionEnhancementScript = `
function enhanceAccordion(root = document) {
  const items = root.querySelectorAll("[data-accordion-item]");

  items.forEach((item) => {
    const trigger = item.querySelector("[data-accordion-trigger]");
    const panel = item.querySelector("[data-accordion-panel]");

    if (!(trigger instanceof HTMLElement) || !(panel instanceof HTMLElement)) {
      return;
    }

    trigger.addEventListener("click", () => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", isExpanded ? "false" : "true");
      panel.hidden = isExpanded;
    });
  });
}
`;
