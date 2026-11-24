# Handoff: get the portfolio scores as high as the facts allow

Read this before editing. The site is Artashes Alex Kocharyan's portfolio at `/Users/tesitfylabs/Projects/artasheskocharyan`. Branch `v2.3` is pushed at `6cb06a6` ("Make overlapping roles and the contact form readable on a phone."). Do not commit or push unless he asks. Do not merge to `main`. The live domain follows the Firebase Hosting live channel, and that channel updates from `main`.

## What "perfect" means

Critique is an Experience page. Heuristics 7 and 10 are n/a, so the ceiling is **32/32**. Excellent starts at about **29/32**. A 4 on any heuristic is rare. Do not grind a 3 into a 4 by restyling the Night Console system.

Audit ceiling is **20/20**. Excellent starts at **18/20**.

Last **finished** scores, both from `2026-11-23T13-46-27Z`, on a page that is no longer current:

| Run | Score | Band |
|---|---|---|
| Critique | 24/32 | Good (75%) |
| Audit | 15/20 | Good (75%) |

Trend of finished critiques, all out of 32: 21, 24, 23, 23, 24. Reports live in `.impeccable/critique/` and `.impeccable/audit/`.

Those numbers are not the score of `6cb06a6`. Later review attempts scored a stale or dead Vite server and were discarded. Rescore a fresh server before treating any number as current.

## Hard rule

Do not invent a tool name, a client, a metric, a testimonial, a company page, or an outcome. Published identity stays exact:

- Artashes Alex Kocharyan, short form Artashes Kocharyan
- Los Angeles, CA
- artashesalexkocharyan@gmail.com
- GitHub https://github.com/JustAnotherDevFromLA (@JustAnotherDevFromLA)
- LinkedIn https://www.linkedin.com/in/artashes-kocharyan/ (in/artashes-kocharyan)
- X https://x.com/expertfrogger (@expertfrogger)

LinkedIn appears once, in Contact, and it is his profile. Do not put that same URL on Testify, Meta, Altruist, or OWASP.

The hero line "Open to consulting engagements" was removed on purpose (`site.availability` is `null`). Do not put it back. `PRODUCT.md` still says the page shows that line. The page wins. Update `PRODUCT.md` only to match the page, not the other way around.

Primary visitor: a hiring manager deciding whether to interview him for QA or test automation. Success is verifying the published record and being able to reach him. Consulting is secondary.

## Data he has to supply

Copy changes that add claims wait on these answers. If an answer is "leave it unnamed," keep the current sentence and do not substitute a clever paraphrase that implies a fact.

### Altruist (`src/content/experience.ts`, id `altruist`)

Current card: "Owned quality for internal fintech software the business relied on." One bullet about balancing manual passes with automated regression. Not featured. This is the QA title a hiring manager came to read, and it is the thinnest card.

Ask for:

1. The tool or system name, if it can be published. If it cannot, one sentence of scope he will stand behind: what the software did, and who inside the company depended on it. "Internal fintech software" is already approved. Do not upgrade it.
2. One or two outcomes that are true: what he owned, what he automated, and which framework or language, only if he names them.
3. Any number he wants on the card. If he does not supply one, add none.
4. Whether this card should be visually featured beside Testify and Meta. Default is no, until the card has a checkable sentence.

### Migration (`src/content/projects.ts`, id `migration-release-strategy`)

Current card is consulting, not a named client. Status is `Consulting`. Details already claim UAT, regression suites, CI/CD gating, and live health monitoring. Do not add a client, a metric, or a sharper outcome unless he writes it.

Ask for:

1. Client name, or an explicit "stay unnamed."
2. What moved, from what, to what, if he will say so.
3. Which of the four detail lines are safe to keep word for word.
4. One outcome he will put his name on. No invented sign-off rate.

### The hero sentence that nothing else repeats

`src/content/site.ts` intro says the methodology includes "AI-driven remediation." No experience or project card says that.

Ask which card that phrase belongs on, or whether to delete it from the intro. Do not invent a remediation story to make the sentence true.

### Meta compliance line

Already published: "Reached 100% vendor-quality compliance, a top-ranked KPI, starting in Q3 2023."

Ask what the population was, in one clause, or confirm the sentence stays exactly as published. Do not explain it with a guessed denominator.

## Already on `6cb06a6`. Do not revert these.

- Employer tiles link to `#role-testify`, `#role-meta`, and `#role-altruist`, they are visible on a phone, and the names are underlined.
- Overlap reads "Overlapped the Altruist role" and "Overlapped the Meta role." `concurrentWith` stays on the `ExperienceItem` type.
- Role titles are ink, not orange. Meta's first achievement is the emphasized line. Meta is featured. Altruist is not.
- Hero intro is three sentences. The middle sentence is hidden below `sm`. There is no slash between the two titles.
- Contact fields are 16px, focus outline is intact, errors are ink, and the email link and Copy address are at least 44px tall.
- Nav mark and mobile rows are 44px. The mobile menu sets `aria-current`.
- Side projects are bordered cards, title plus description. The toolbox UI is gone. `skillGroups` is still exported and unused. Do not bring the toolbox back.
- About measure is `max-w-2xl`.
- `html` has `scroll-padding-top: 5rem`. Role cards have `scroll-mt-24`. Section blocks themselves do not.
- Theme color is set from the computed `--color-canvas`. Selection uses `--color-accent` and `--color-canvas`.

The side-project cards may now be louder than the last critique wanted. If a new critique says they compete with the jobs, quiet them. Do not add more chrome.

## Rescore before editing

1. Stop stale Vite processes for this repo. A previous server on 5174 and another on 5196 both served old UI. Port 4321 is a different project. Leave it alone.
2. Start one fresh `npm run dev`.
3. Confirm the served page contains all of these before any reviewer looks at it: `Overlapped the Altruist role`, `Overlapped the Meta role`, `Owned quality for internal fintech software`, `Review experience`, and employer links to `#role-testify`, `#role-meta`, `#role-altruist`. If any string is missing, you are scoring the wrong server. Discard that run.
4. Run `/impeccable critique` and `/impeccable audit` on that URL, desktop and 390px, dark and light.
5. Stop the live overlay with `--keep-inject`. Do not let it rewrite `index.html`.

`npm test` cannot run until `npx playwright install chromium`. The suite expects "Review experience," "Get in touch," the name error "Add your name so the draft is addressed," and the migration tile to stay `translate: none` on hover.

## After the new scores

Fix only findings that are real on the fresh page and that do not need a fact he has not given you.

Likely leftovers to verify, not assume:

- A jump to Experience still lands in the section's top padding. If the heading sits in a blank band, fix the scroll offset. Do not add numbered eyebrows.
- One-word last lines at 390px. `text-pretty` is already on the long paragraphs. Shorten a sentence only when a wrap is still a single word.
- New-tab links do not say they leave the page.
- Desktop nav hit area, if a control is still under 44px.

Detector hits that are not defects. Do not "fix" them:

- `index.html` pre-hydration contrast compared with white
- The `#000` mask stop in `.grid-glow`
- Inter Variable
- 11px mono labels
- The 1.125rem opening paragraph

All five are the documented Night Console system in `DESIGN.md`.

## When to stop

Apply his answers in `src/content/experience.ts`, `src/content/projects.ts`, and `src/content/site.ts`. Rescore once. If the remaining deductions are unnamed facts he refused, or the detector false positives above, stop and report the ceiling. Do not invent the missing sentence to chase 32/32.

A perfect audit does not need new facts. A perfect critique does, and only for the Altruist card, the migration card, and the unmatched "AI-driven remediation" sentence. Even with those answers, 32/32 is not guaranteed. Say so in the score report.
