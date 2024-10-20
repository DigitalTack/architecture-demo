import { expect, test } from "@playwright/test";

test.describe('site language', () => {
  test('is configured', async ({ page }) => {
    await page.goto('http://localhost:8000')

    const title = page.getByText('Products')
    await expect(title).toBeVisible()

    const content = await page.content()

    expect(content).toContain('<html lang="en">')
  })
})


