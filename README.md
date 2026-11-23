# artasheskocharyan.com

Personal portfolio for **Artashes Alex Kocharyan** — Software Quality Assurance Engineer and test automation expert.

Single-page React site: dark-first theme with orange accents, bento-box project grid, scroll-reveal animations, and a data-driven content layer so copy can be edited without touching component code.

## Stack

| Piece    | Choice                                        |
| -------- | --------------------------------------------- |
| Build    | Vite 8                                        |
| UI       | React 19 + TypeScript                         |
| Styling  | Tailwind CSS 4 (`@theme` design tokens)       |
| Fonts    | Self-hosted Inter + JetBrains Mono (variable) |
| Lint     | oxlint                                        |
| Tests    | Playwright (desktop + mobile projects)        |
| Runtime  | Static output — no server required            |

No animation or icon libraries. Reveal animations use a single `IntersectionObserver` per element and CSS transitions; icons are inline SVG. Production output is roughly 70 kB of gzipped JS plus 10 kB of CSS.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build to dist/
npm run preview  # serve the production build
npm run lint     # oxlint
npm test         # Playwright suite (builds, previews, then runs)
```

First test run needs a browser: `npx playwright install chromium`.

Deploy `dist/` to any static host (Vercel, Netlify, Cloudflare Pages, S3). No environment variables or backend needed.

## Editing content

All copy lives in `src/content/`. Components read from these files, so adding a project or role never requires editing JSX.

| File            | Controls                                                        |
| --------------- | --------------------------------------------------------------- |
| `site.ts`       | Name, tagline, intro, email, social links, nav, hero highlights  |
| `experience.ts` | Experience & Ventures timeline entries                           |
| `projects.ts`   | Bento-grid projects and the Toolbox skill groups                 |
| `about.ts`      | Bio paragraphs, events attended, Off-screen hobbies              |
| `types.ts`      | Shared types — the contract each content file must satisfy       |

### Add a project

Append an entry to the `projects` array in `src/content/projects.ts`:

```ts
{
  id: 'my-new-project',
  title: 'My New Project',
  category: 'Automation',
  icon: 'bolt',                    // any key from src/components/Icon.tsx
  span: 'lg:col-span-6',           // bento grid is 12 columns at `lg`
  status: 'In progress',           // optional pill, omit to hide
  description: 'One-line summary shown under the title.',
  details: ['Bullet one.', 'Bullet two.'],
  stack: ['Playwright', 'TypeScript'],
  href: 'https://github.com/...',  // optional — makes the whole tile a link
}
```

The bento grid is 12 columns at the `lg` breakpoint and single-column below it. Spans in a row should add up to 12 for a flush edge — the current layout is `7 + 5` with the first tile spanning two rows, then `5`. Adjust `span` values to re-flow without touching the grid component.

### Adjust the palette

Design tokens are defined once in `src/index.css` under `@theme`, with light-mode overrides in `html.light`. Changing `--color-accent` re-themes every accent, glow, and hover state across the site.

## First-run checklist

Email and social links in `src/content/site.ts` are the handles from the previous site. If the domain changes, update the canonical and Open Graph URLs in `index.html` and the loc in `public/sitemap.xml`.

## Structure

```
src/
├── App.tsx                  # section composition order
├── index.css                # design tokens, fonts, reveal + grid-glow styles
├── components/
│   ├── Nav.tsx              # sticky nav, active-section tracking, theme toggle
│   ├── Hero.tsx             # name, tagline, primary/secondary CTAs, highlights
│   ├── Experience.tsx       # timeline of ventures, roles, community work
│   ├── Projects.tsx         # bento grid + Toolbox skill groups
│   ├── About.tsx            # bio, events, Off-screen hobbies
│   ├── Contact.tsx          # mailto-backed form, direct links
│   ├── Footer.tsx           # social links, copyright
│   ├── Section.tsx          # shared section shell + Tag pill
│   ├── Reveal.tsx           # IntersectionObserver entrance animation
│   └── Icon.tsx             # inline SVG icon set
├── content/                 # all editable copy
└── hooks/
    ├── useTheme.ts          # dark/light with localStorage persistence
    └── useActiveSection.ts  # nav highlight
tests/portfolio.spec.ts      # Playwright coverage
scripts/capture-screenshots.mjs
```

## Tests

`tests/portfolio.spec.ts` runs against the production build in two projects, desktop and mobile Chrome. It covers the hero identity and both calls to action, the presence of every section, reveal animations settling to fully visible content, self-hosted Inter actually loading, absence of horizontal overflow, anchor scrolling, project tile hover treatment, nav highlight tracking, theme toggle persistence across reloads, contact form validation and its drafted-email confirmation, and the mobile menu open/close cycle.

Hover and desktop-nav assertions are skipped on the mobile project, since hover styles are gated behind `(hover: hover)` and the desktop nav is hidden below `md`.

`scripts/capture-screenshots.mjs` captures full-page screenshots in both themes for design review:

```bash
npm run build && npm run preview -- --port 4173 &
node scripts/capture-screenshots.mjs ./screenshots
```

## Notes

- **Contact form** composes a pre-filled `mailto:` draft, so it works with no backend. To use a hosted form service instead, replace the body of `submitByEmail` in `src/components/Contact.tsx` with a `fetch` POST to your endpoint.
- **Theme** defaults to dark. An inline script in `index.html` applies the stored preference before first paint so there is no flash of the wrong palette.
- **Accessibility**: skip-to-content link, labelled controls, `aria-current` on the active nav item, visible focus rings, and all motion gated behind `prefers-reduced-motion`.
