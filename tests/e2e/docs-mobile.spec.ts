import { expect, test } from "@playwright/test";

const criticalRoutes = [
  "/",
  "/componentes/botao",
  "/componentes/breadcrumbs",
  "/componentes/drawer",
  "/componentes/input",
  "/componentes/navbar",
  "/componentes/tabs",
  "/componentes/table",
  "/padroes/captacao",
  "/padroes/beneficios",
  "/padroes/landing",
];

test.describe("docs mobile viewport", () => {
  for (const route of criticalRoutes) {
    test(`${route} renders without page-level horizontal overflow`, async ({ page }) => {
      await page.goto(route);
      await expect(page.locator("main")).toBeVisible();

      const metrics = await page.evaluate(() => {
        const root = document.documentElement;
        const body = document.body;
        const main = document.querySelector("main");

        return {
          viewportWidth: window.innerWidth,
          documentScrollWidth: Math.max(root.scrollWidth, body.scrollWidth),
          mainScrollWidth: main?.scrollWidth ?? 0,
          mainClientWidth: main?.clientWidth ?? 0,
        };
      });

      expect(metrics.documentScrollWidth).toBeLessThanOrEqual(metrics.viewportWidth + 1);
      expect(metrics.mainScrollWidth).toBeLessThanOrEqual(metrics.mainClientWidth + 1);
    });
  }
});

test("docs mobile menu opens and closes through Navbar", async ({ page }) => {
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Abrir navegação" });
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");

  await menuButton.click();
  const closeButton = page.getByRole("button", { name: "Fechar navegação" });
  await expect(closeButton).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("link", { name: "10 — Navbar" })).toBeVisible();

  await page.getByRole("link", { name: "10 — Navbar" }).click();
  await expect(page).toHaveURL(/\/componentes\/navbar$/);
});
