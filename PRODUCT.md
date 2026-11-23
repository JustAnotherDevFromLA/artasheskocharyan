# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary visitor is a hiring manager deciding whether to interview Artashes Alex Kocharyan for a software quality assurance or test automation role. They arrive with a role to fill, read the published record, and judge whether his experience matches the job.

## Product Purpose

artasheskocharyan.com is Artashes Alex Kocharyan's personal portfolio. It exists so a hiring manager can verify the work he has published and reach him. A successful visit means they can check that record and find a way to contact him. No single conversion, including an email, is required.

## Positioning

The site is this person's own employment and project record, not a generic QA pitch. A neighboring portfolio could not truthfully claim his roles at Testify, Meta's Central Reliability Support team, and Altruist, or the projects published on the page.

## Operating Context

Visitors evaluate a single page: hero, experience, projects, about, and contact. The published record includes founding Testify (an AI testing startup), founding membership of Meta's Central Reliability Support team, software quality assurance at Altruist, consulting on migrations and releases, and side projects. He is based in Los Angeles and the page also says he is open to consulting engagements. The primary visitor job remains hiring evaluation. Reach paths on the page are email, GitHub, LinkedIn, and X.

## Capabilities and Constraints

Current site capabilities, from the implementation:

- One static page, built with Vite, React, and TypeScript, and hosted as static files (Firebase Hosting config points at `dist/`).
- Sections: navigation, hero, experience, projects, about, contact, footer.
- Dark default with a light theme toggle stored in the browser.
- Contact composes a pre-filled mailto draft. There is no backend.
- Copy lives in `src/content/` (`site.ts`, `experience.ts`, `projects.ts`, `about.ts`).

Confirmed constraint:

- Published identity stays as written: Artashes Alex Kocharyan (short form Artashes Kocharyan), Los Angeles, CA, artashesalexkocharyan@gmail.com, GitHub https://github.com/JustAnotherDevFromLA (@JustAnotherDevFromLA), LinkedIn https://www.linkedin.com/in/artashes-kocharyan/ (in/artashes-kocharyan), X https://x.com/expertfrogger (@expertfrogger).

Undecided, and not to be treated as settled:

- Whether contact must remain a mailto draft.
- Whether copy must remain isolated in `src/content/`.
- Whether future work may add claims, metrics, client names, testimonials, or case-study numbers beyond the published record. Do not add them until that is confirmed.

## Brand Commitments

The binding identity is the name, location, email, and social handles listed above. The public title on the site is "Software Quality Assurance Engineer | Test Automation Expert".

## Evidence on Hand

Published copy is the evidence. Testimonials, client logos, press clippings, and extra metrics are not in the repository. Do not fabricate them.

- `src/content/site.ts` — name, tagline, intro, location, availability, email, navigation, social links, hero highlights (Testify, Meta, Altruist).
- `src/content/experience.ts` — Testify, Meta CRS, Altruist, OWASP Los Angeles.
- `src/content/projects.ts` — migration and release consulting, self-hosted Bitcoin node, ticket management extension, and toolbox skill groups.
- `src/content/about.ts` — bio, events (ETHDenver, Chainlink SmartCon, OWASP LA, LA tech mixers), off-screen notes.
- `README.md` — how the site is built and edited.

## Product Principles

- Serve the hiring manager's decision: can this person be interviewed for QA or test automation?
- Let the published record do the proving. Verification and a way to reach him are the outcome; a forced email or application is not.
- Keep the published identity exact: name, Los Angeles, email, and the three social handles.
- Add proof only from the published record, or from facts he later supplies.
