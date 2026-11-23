/**
 * Captures full-page screenshots of the built site for design review.
 * Usage: node scripts/capture-screenshots.mjs <outputDir> [baseURL]
 */
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'

const outputDir = process.argv[2] ?? 'screenshots'
const baseURL = process.argv[3] ?? 'http://localhost:4173/'

const shots = [
  { name: 'desktop_dark', width: 1440, height: 900, theme: 'dark' },
  { name: 'desktop_light', width: 1440, height: 900, theme: 'light' },
  { name: 'mobile_dark', width: 390, height: 844, theme: 'dark' },
]

await mkdir(outputDir, { recursive: true })
const browser = await chromium.launch()

for (const shot of shots) {
  const context = await browser.newContext({
    viewport: { width: shot.width, height: shot.height },
    deviceScaleFactor: 2,
  })
  const page = await context.newPage()
  await page.addInitScript(`localStorage.setItem('theme', '${shot.theme}')`)
  await page.goto(baseURL, { waitUntil: 'load' })
  await page.waitForFunction(() => document.fonts.status === 'loaded')

  // Scroll through so every reveal animation has fired before capturing.
  const height = await page.evaluate(() => document.body.scrollHeight)
  for (let offset = 0; offset < height; offset += 400) {
    await page.mouse.wheel(0, 400)
    await page.waitForTimeout(70)
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  await page.waitForTimeout(700)

  await page.screenshot({ path: path.join(outputDir, `${shot.name}_full.png`), fullPage: true })
  await page.screenshot({ path: path.join(outputDir, `${shot.name}_hero.png`) })
  await context.close()
  console.log(`captured ${shot.name}`)
}

await browser.close()
