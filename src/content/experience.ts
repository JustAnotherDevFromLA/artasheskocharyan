import type { ExperienceItem } from './types'

// Ordered newest → oldest. Periods are plain strings so they are easy to edit.
// LinkedIn lives once, on the contact list. These cards are the record, not four copies of that profile.
export const experience: ExperienceItem[] = [
  {
    id: 'testify',
    organization: 'Testify',
    role: 'Founder',
    period: 'Sep 2024 — Present',
    kind: 'venture',
    featured: true,
    summary: 'An AI software testing startup turning product requirements into runnable coverage.',
    achievements: [
      'Shipped a functional MVP that generates test cases directly from feature specs and acceptance criteria.',
      'Wired generated cases into Playwright so suggested coverage becomes executable automation, not a document.',
      'Designing the workflow around how QA teams actually triage: review, adjust, then promote a case into the regression suite.',
    ],
    stack: ['Playwright', 'TypeScript', 'LLM tooling', 'Test case generation'],
  },
  {
    id: 'meta',
    organization: 'Meta',
    role: 'Central Reliability Support — Founding Member',
    period: 'Sep 2022 — Sep 2024',
    kind: 'role',
    summary: 'Helped stand up the Central Reliability Support team from its first cohort of engineers.',
    achievements: [
      'Reached 100% vendor-quality compliance, a top-ranked KPI, starting in Q3 2023.',
      'Cut cross-team collaboration friction by introducing escalation and hand-off protocols where none existed.',
      'Drove process improvements that made reliability support repeatable instead of person-dependent.',
    ],
    stack: ['Reliability support', 'Process design', 'Compliance', 'Cross-functional ops'],
    concurrentWith: 'Altruist',
  },
  {
    id: 'altruist',
    organization: 'Altruist',
    role: 'Software Quality Assurance Engineer',
    period: 'Sep 2021 — Dec 2023',
    kind: 'role',
    featured: true,
    summary: 'Owned quality for an internal tool the business relied on.',
    achievements: [
      'Balanced exploratory manual passes with automated regression coverage to keep feedback fast.',
    ],
    stack: ['Manual testing', 'Test automation', 'Regression coverage', 'Fintech'],
    concurrentWith: 'Meta',
  },
  {
    id: 'owasp-la',
    organization: 'OWASP Los Angeles',
    role: 'Member & Volunteer',
    period: 'Ongoing',
    kind: 'community',
    summary: 'Community work at the intersection of quality and application security.',
    achievements: [
      'Volunteer with the LA chapter, focused on application security and vulnerability mitigation.',
      'Bring security-minded thinking back into day-to-day test design and release review.',
    ],
    stack: ['Application security', 'Vulnerability mitigation', 'Community'],
  },
]
