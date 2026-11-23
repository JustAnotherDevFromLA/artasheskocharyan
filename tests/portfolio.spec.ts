import { expect, test } from '@playwright/test'

const sections = ['experience', 'projects', 'about', 'contact']

test.describe('page content', () => {
  test('renders the hero identity and both calls to action', async ({ page }) => {
    await page.goto('/')

    const heading = page.getByRole('heading', { level: 1 })
    await expect(heading).toContainText('Artashes Alex Kocharyan')
    await expect(heading).toContainText('Software Quality Assurance Engineer')
    await expect(heading).toContainText('Test Automation Expert')
    await expect(page.getByRole('link', { name: 'Review experience' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Get in touch' })).toBeVisible()
  })

  test('renders every section with a heading', async ({ page }) => {
    await page.goto('/')

    const headings: Record<(typeof sections)[number], string> = {
      experience: 'Experience',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    }

    for (const id of sections) {
      await expect(page.locator(`#${id}`)).toBeAttached()
      await expect(page.locator(`#${id} h2`)).toHaveText(headings[id])
    }
  })

  test('reveal animations settle to fully visible content', async ({ page }) => {
    await page.goto('/')

    // Step down the page so every observer gets a chance to fire, the way a
    // reader would scroll — jumping straight to the footer would skip them.
    const height = await page.evaluate(() => document.body.scrollHeight)
    for (let offset = 0; offset < height; offset += 400) {
      await page.mouse.wheel(0, 400)
      await page.waitForTimeout(60)
    }

    await expect(page.locator('[data-reveal="pending"]')).toHaveCount(0, { timeout: 5000 })
  })

  test('loads self-hosted Inter rather than a fallback', async ({ page }) => {
    await page.goto('/')
    await page.waitForFunction(() => document.fonts.status === 'loaded')

    const family = await page
      .getByRole('heading', { level: 1 })
      .evaluate((node) => getComputedStyle(node).fontFamily)
    expect(family).toContain('Inter Variable')
    expect(await page.evaluate(() => document.fonts.check('1rem "Inter Variable"'))).toBe(true)
  })

  test('has no horizontal overflow', async ({ page }) => {
    await page.goto('/')

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    )
    expect(overflow).toBeLessThanOrEqual(1)
  })
})

test.describe('contrast', () => {
  for (const theme of ['dark', 'light'] as const) {
    test(`${theme} text tokens clear WCAG AA against canvas and surface`, async ({ page }) => {
      await page.addInitScript(`localStorage.setItem('theme', '${theme}')`)
      await page.goto('/')

      const failures = await page.evaluate(() => {
        const value = (name: string) =>
          getComputedStyle(document.documentElement).getPropertyValue(name).trim()

        const luminance = (hex: string) => {
          const channels = [1, 3, 5]
            .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
            .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
          return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
        }

        const ratio = (a: string, b: string) => {
          const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
          return (hi + 0.05) / (lo + 0.05)
        }

        const backgrounds = ['--color-canvas', '--color-surface']
        const foregrounds = ['--color-ink', '--color-muted', '--color-faint', '--color-accent']
        const results: string[] = []

        for (const fg of foregrounds) {
          for (const bg of backgrounds) {
            const contrast = ratio(value(fg), value(bg))
            if (contrast < 4.5) results.push(`${fg} on ${bg}: ${contrast.toFixed(2)}`)
          }
        }
        return results
      })

      expect(failures).toEqual([])
    })
  }
})

test.describe('interactions', () => {
  test('hero actions scroll to their target sections', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('link', { name: 'Review experience' }).click()
    await expect(page.locator('#experience')).toBeInViewport({ timeout: 5000 })

    await page.getByRole('link', { name: 'Get in touch' }).click()
    await expect(page.locator('#contact')).toBeInViewport({ timeout: 5000 })
  })

  test('a project tile without a destination stays flat on hover', async ({ page, isMobile }) => {
    test.skip(!!isMobile, 'hover styles are gated behind (hover: hover)')
    await page.goto('/')

    const target = page.locator('[data-project="migration-release-strategy"]')
    await target.scrollIntoViewIfNeeded()

    const readState = () =>
      target.evaluate((node) => {
        const style = getComputedStyle(node)
        return { translate: style.translate, tag: node.tagName }
      })

    const before = await readState()
    await target.hover()
    await page.waitForTimeout(400)
    const after = await readState()

    expect(before.tag).toBe('DIV')
    expect(before.translate).toBe('none')
    expect(after.translate).toBe('none')
  })

  test('nav highlight follows the visible section and clears at the top', async ({ page, isMobile }) => {
    test.skip(!!isMobile, 'the desktop nav is hidden below md')
    await page.goto('/')

    const current = page.locator('header nav a[aria-current="true"]')
    await expect(current).toHaveCount(0)

    await page.getByRole('navigation', { name: 'Sections' }).getByRole('link', { name: 'Projects' }).click()
    await expect(current).toHaveText('Projects')

    await page.locator('#top').scrollIntoViewIfNeeded()
    await expect(current).toHaveCount(0)
  })

  test('theme toggle switches palette and persists across reloads', async ({ page }) => {
    await page.goto('/')

    const root = page.locator('html')
    await expect(root).toHaveClass(/dark/)

    await page.getByRole('button', { name: /Switch to light theme/i }).click()
    await expect(root).toHaveClass(/light/)

    await page.reload()
    await expect(page.locator('html')).toHaveClass(/light/)

    await page.getByRole('button', { name: /Switch to dark theme/i }).click()
    await expect(page.locator('html')).toHaveClass(/dark/)
  })

  test('contact form blocks empty submission and does not claim a draft opened', async ({ page }) => {
    await page.goto('/')

    const form = page.locator('#contact form')
    const draftNote = page.getByText('Opens a draft in your email app.')
    await expect(draftNote).toBeVisible()
    await form.getByRole('button', { name: 'Open email draft' }).click()

    await expect(page.getByText('Add your name so the draft is addressed.')).toBeVisible()
    await expect(page.getByText('Draft opened in your email client')).toHaveCount(0)

    await nameField.fill('Jane Doe')
    await form.getByLabel('Email').fill('jane@company.com')
    await form.getByLabel('Message').fill('Interested in a regression suite audit.')
    await form.getByRole('button', { name: 'Open email draft' }).click()

    await expect(draftNote).toBeVisible()
    await expect(page.getByText('Draft opened in your email client')).toHaveCount(0)
  })
})

test.describe('mobile navigation', () => {
  test.skip(({ isMobile }) => !isMobile, 'hamburger menu only renders below md')

  test('menu opens, closes, and restores the hamburger icon', async ({ page }) => {
    await page.goto('/')

    const toggle = page.getByRole('button', { name: 'Toggle navigation menu' })
    const menu = page.locator('#mobile-nav')

    await expect(menu).toBeHidden()
    await toggle.click()
    await expect(menu).toBeVisible()
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await toggle.click()
    await expect(menu).toBeHidden()
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  test('tapping a menu link closes the menu', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('button', { name: 'Toggle navigation menu' }).click()
    await page.locator('#mobile-nav').getByRole('link', { name: 'Projects' }).click()

    await expect(page.locator('#mobile-nav')).toBeHidden()
    await expect(page.getByRole('button', { name: 'Toggle navigation menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
