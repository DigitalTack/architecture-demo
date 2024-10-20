import { expect, test } from "@playwright/test";
import ColorContrastChecker from 'color-contrast-checker'

function rgbaToHex(rgba) {
  const [r, g, b, a] = rgba.match(/\d+/g)
  const red = parseInt(r).toString(16).padStart(2, '0')
  const green = parseInt(g).toString(16).padStart(2, '0')
  const blue = parseInt(b).toString(16).padStart(2, '0')

  return `#${red}${green}${blue}`
}

test.describe('contrast checkers', () => {
  test('can check the contrast of an element', async ({ page }) => {
    const contrastChecker = new ColorContrastChecker()
    await page.goto('http://localhost:8000')

    const title = page.getByText('Products')
    await expect(title).toBeVisible()

    const style = await title.evaluate((title) => {
      return window.getComputedStyle(title)
    })

    const bgColor = rgbaToHex(style['backgroundColor'])
    const color = rgbaToHex(style['color'])
    const fontSize = parseInt(style['fontSize'])

    expect(contrastChecker.isLevelAA(bgColor, color, fontSize)).toBeTruthy()
  })
})

