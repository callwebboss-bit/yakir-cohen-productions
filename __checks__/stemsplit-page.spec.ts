import { test, expect } from "@playwright/test";

const BASE =
  process.env.PRODUCTION_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  "http://localhost:3000";

test("StemSplit page — H1 visible, tool loads, no console errors", async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });

  await page.goto(`${BASE}/stemsplit`, { waitUntil: "domcontentloaded" });

  // ── 1. LCP element is server-rendered — must be in DOM immediately ──
  const h1 = page.locator("h1");
  await expect(h1).toBeVisible({ timeout: 3000 });
  await expect(h1).toContainText("StemSplit");

  // ── 2. Trust badges rendered (server-side content) ──
  await expect(page.getByText("עד 50MB לקובץ")).toBeVisible({ timeout: 3000 });

  // ── 3. Interactive tool hydrates ──
  // Wait for dynamic component to load (spinner disappears, upload zone appears)
  await expect(page.getByRole("tab", { name: "העלה קובץ" })).toBeVisible({ timeout: 8000 });

  // ── 4. Upload zone is interactive ──
  const uploadZone = page.locator(".upload-zone");
  await expect(uploadZone).toBeVisible({ timeout: 5000 });

  // ── 5. Submit button exists and is initially disabled ──
  const submitBtn = page.getByRole("button", { name: /הפרד ערוצים/i });
  await expect(submitBtn).toBeVisible();
  await expect(submitBtn).toBeDisabled();

  // ── 6. No critical console errors ──
  const criticalErrors = consoleErrors.filter(
    (e) => !e.includes("favicon") && !e.includes("404")
  );
  expect(criticalErrors).toHaveLength(0);
});
