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

export function enhanceNavbar(root: ParentNode = document) {
  root.querySelectorAll("[data-navbar-root]").forEach((navbar) => {
    const trigger = navbar.querySelector("[data-navbar-trigger]");
    const icon = navbar.querySelector(".ds-navbar__menu-icon");

    if (!isHTMLElement(navbar) || !isHTMLElement(trigger)) {
      return;
    }

    trigger.addEventListener("click", () => {
      const nextOpen = navbar.getAttribute("data-open") !== "true";
      const menuLabel = trigger.getAttribute("data-menu-label") ?? "Abrir menu";
      const closeLabel = trigger.getAttribute("data-close-label") ?? "Fechar menu";

      navbar.setAttribute("data-open", nextOpen ? "true" : "false");
      trigger.setAttribute("aria-expanded", nextOpen ? "true" : "false");
      trigger.setAttribute("aria-label", nextOpen ? closeLabel : menuLabel);

      if (isHTMLElement(icon)) {
        icon.setAttribute("data-open", nextOpen ? "true" : "false");
      }
    });

    navbar.querySelectorAll(".ds-navbar__link").forEach((link) => {
      link.addEventListener("click", () => {
        navbar.setAttribute("data-open", "false");
        trigger.setAttribute("aria-expanded", "false");
        trigger.setAttribute("aria-label", trigger.getAttribute("data-menu-label") ?? "Abrir menu");
        if (isHTMLElement(icon)) {
          icon.setAttribute("data-open", "false");
        }
      });
    });
  });
}

export function enhanceDrawer(root: ParentNode = document) {
  root.querySelectorAll("[data-drawer-root]").forEach((drawer) => {
    const trigger = drawer.querySelector("[data-drawer-trigger]");
    const layer = drawer.querySelector("[data-drawer-layer]");

    if (!isHTMLElement(drawer) || !isHTMLElement(trigger) || !isHTMLElement(layer)) {
      return;
    }

    const setOpen = (open: boolean) => {
      drawer.setAttribute("data-open", open ? "true" : "false");
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
      layer.hidden = !open;
    };

    trigger.addEventListener("click", () => setOpen(true));
    drawer.querySelectorAll("[data-drawer-close]").forEach((close) => {
      close.addEventListener("click", () => {
        setOpen(false);
        (trigger as HTMLElement).focus();
      });
    });
  });
}

export function enhanceTabs(root: ParentNode = document) {
  root.querySelectorAll("[data-tabs-root]").forEach((tabsRoot) => {
    const tabs = Array.from(tabsRoot.querySelectorAll("[data-tabs-tab]")).filter(isHTMLElement);
    const panels = Array.from(tabsRoot.querySelectorAll("[data-tabs-panel]")).filter(isHTMLElement);

    const selectTab = (tab: HTMLElement) => {
      tabs.forEach((currentTab) => {
        const selected = currentTab === tab;
        currentTab.setAttribute("aria-selected", selected ? "true" : "false");
        currentTab.setAttribute("tabindex", selected ? "0" : "-1");
      });

      panels.forEach((panel) => {
        panel.hidden = panel.id !== tab.getAttribute("aria-controls");
      });
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => selectTab(tab));
      tab.addEventListener("keydown", (event) => {
        if (!(event instanceof KeyboardEvent)) return;
        const lastIndex = tabs.length - 1;
        let nextIndex: number | undefined;

        if (event.key === "ArrowRight") nextIndex = index === lastIndex ? 0 : index + 1;
        if (event.key === "ArrowLeft") nextIndex = index === 0 ? lastIndex : index - 1;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = lastIndex;

        if (nextIndex === undefined) return;
        event.preventDefault();

        const nextTab = tabs[nextIndex];
        if (nextTab.hasAttribute("disabled")) return;
        selectTab(nextTab);
        nextTab.focus();
      });
    });
  });
}

export function enhanceToastDismiss(root: ParentNode = document) {
  root.querySelectorAll("[data-toast-close]").forEach((button) => {
    if (!isHTMLElement(button)) return;

    button.addEventListener("click", () => {
      button.closest(".ds-toast")?.remove();
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

export const componentEnhancementScript = `
function enhanceNavbar(root = document) {
  root.querySelectorAll("[data-navbar-root]").forEach((navbar) => {
    const trigger = navbar.querySelector("[data-navbar-trigger]");
    const icon = navbar.querySelector(".ds-navbar__menu-icon");
    if (!(navbar instanceof HTMLElement) || !(trigger instanceof HTMLElement)) return;
    trigger.addEventListener("click", () => {
      const nextOpen = navbar.getAttribute("data-open") !== "true";
      const menuLabel = trigger.getAttribute("data-menu-label") || "Abrir menu";
      const closeLabel = trigger.getAttribute("data-close-label") || "Fechar menu";
      navbar.setAttribute("data-open", nextOpen ? "true" : "false");
      trigger.setAttribute("aria-expanded", nextOpen ? "true" : "false");
      trigger.setAttribute("aria-label", nextOpen ? closeLabel : menuLabel);
      if (icon instanceof HTMLElement) icon.setAttribute("data-open", nextOpen ? "true" : "false");
    });
    navbar.querySelectorAll(".ds-navbar__link").forEach((link) => {
      link.addEventListener("click", () => {
        navbar.setAttribute("data-open", "false");
        trigger.setAttribute("aria-expanded", "false");
        trigger.setAttribute("aria-label", trigger.getAttribute("data-menu-label") || "Abrir menu");
        if (icon instanceof HTMLElement) icon.setAttribute("data-open", "false");
      });
    });
  });
}

function enhanceDrawer(root = document) {
  root.querySelectorAll("[data-drawer-root]").forEach((drawer) => {
    const trigger = drawer.querySelector("[data-drawer-trigger]");
    const layer = drawer.querySelector("[data-drawer-layer]");
    if (!(drawer instanceof HTMLElement) || !(trigger instanceof HTMLElement) || !(layer instanceof HTMLElement)) return;
    const setOpen = (open) => {
      drawer.setAttribute("data-open", open ? "true" : "false");
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
      layer.hidden = !open;
    };
    trigger.addEventListener("click", () => setOpen(true));
    drawer.querySelectorAll("[data-drawer-close]").forEach((close) => {
      close.addEventListener("click", () => {
        setOpen(false);
        trigger.focus();
      });
    });
  });
}

function enhanceTabs(root = document) {
  root.querySelectorAll("[data-tabs-root]").forEach((tabsRoot) => {
    const tabs = Array.from(tabsRoot.querySelectorAll("[data-tabs-tab]")).filter((tab) => tab instanceof HTMLElement);
    const panels = Array.from(tabsRoot.querySelectorAll("[data-tabs-panel]")).filter((panel) => panel instanceof HTMLElement);
    const selectTab = (tab) => {
      tabs.forEach((currentTab) => {
        const selected = currentTab === tab;
        currentTab.setAttribute("aria-selected", selected ? "true" : "false");
        currentTab.setAttribute("tabindex", selected ? "0" : "-1");
      });
      panels.forEach((panel) => {
        panel.hidden = panel.id !== tab.getAttribute("aria-controls");
      });
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => selectTab(tab));
      tab.addEventListener("keydown", (event) => {
        const lastIndex = tabs.length - 1;
        let nextIndex;
        if (event.key === "ArrowRight") nextIndex = index === lastIndex ? 0 : index + 1;
        if (event.key === "ArrowLeft") nextIndex = index === 0 ? lastIndex : index - 1;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = lastIndex;
        if (nextIndex === undefined) return;
        event.preventDefault();
        const nextTab = tabs[nextIndex];
        if (nextTab.hasAttribute("disabled")) return;
        selectTab(nextTab);
        nextTab.focus();
      });
    });
  });
}

function enhanceToastDismiss(root = document) {
  root.querySelectorAll("[data-toast-close]").forEach((button) => {
    if (!(button instanceof HTMLElement)) return;
    button.addEventListener("click", () => button.closest(".ds-toast")?.remove());
  });
}
`;
