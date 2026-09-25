import { expect, test } from "@playwright/test"

for (const viewport of [
  { width: 320, height: 700 },
  { width: 390, height: 844 },
  { width: 768, height: 900 },
  { width: 1440, height: 900 },
]) {
  test(`does not overflow at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport)
    await page.goto("/")
    await expect(page).toHaveTitle(/Avícola Dias/)
    const widths = await page.evaluate(() => ({
      client: document.documentElement.clientWidth,
      scroll: document.documentElement.scrollWidth,
    }))
    expect(widths.scroll).toBeLessThanOrEqual(widths.client)
  })
}

test("mobile menu reaches Assados and closes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")
  await page.getByRole("button", { name: /abrir menu/i }).click()
  await page.getByRole("navigation", { name: "Navegação móvel" }).getByRole("link", { name: "Assados", exact: true }).click()
  await expect(page).toHaveURL(/#assados$/)
  await expect(page.getByRole("button", { name: /abrir menu/i })).toHaveAttribute("aria-expanded", "false")
  await page.waitForTimeout(900)
  const sectionTop = await page.locator("#assados").evaluate((section) => Math.round(section.getBoundingClientRect().top))
  expect(sectionTop).toBeGreaterThanOrEqual(72)
  expect(sectionTop).toBeLessThanOrEqual(100)
})

test("Sunday heading preserves the approved yellow word", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/#assados")
  const heading = page.getByRole("heading", { name: "Trabalhamos com assados aos domingos" })
  await expect(heading).toBeVisible()
  await expect(heading.locator(".text-primary")).toHaveText("assados")
  await expect(heading.locator(".text-primary")).toHaveCSS("color", "rgb(244, 180, 0)")
})

test("desktop keeps all five bird cards in one grid row", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/#aves")
  const cards = page.locator("#aves article")
  await expect(cards).toHaveCount(5)
  const tops = await cards.evaluateAll((items) => items.map((item) => Math.round(item.getBoundingClientRect().top)))
  expect(new Set(tops).size).toBe(1)
})

test("store WhatsApp actions are green and readable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/#lojas")
  const links = page.getByRole("link", { name: /WhatsApp da unidade/ })

  await expect(links).toHaveCount(2)
  for (const link of await links.all()) {
    await expect(link).toHaveCSS("background-color", "rgb(18, 140, 126)")
    await expect(link).toHaveCSS("color", "rgb(255, 255, 255)")
    await expect(link).toHaveAttribute("target", "_blank")
  }
})
