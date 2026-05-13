import { expect, test } from "@playwright/test";

const criticalRoutes = [
  "/",
  "/componentes/botao",
  "/componentes/input",
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
