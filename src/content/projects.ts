import type { Project, SkillGroup } from './types'

/**
 * Bento grid is 12 columns at `lg`. Tune `span` to re-flow the layout —
 * the spans in a row should sum to 12 for a flush edge. Full-width tiles
 * should also set `layout: 'wide'` so their content fills the extra room.
 */
export const projects: Project[] = [
  {
    id: 'migration-release-strategy',
    title: 'Migration & Release Strategy',
    category: 'Consulting',
    icon: 'rocket',
    span: 'lg:col-span-12',
    layout: 'wide',
    status: 'Client work',
    description:
      'Advising teams through platform migrations and release cutovers — turning "we think it works" into a signed-off, monitored release.',
    details: [
      'Formalized User Acceptance Criteria so sign-off is measurable instead of anecdotal.',
      'Built and automated regression test suites covering the paths a migration is most likely to break.',
      'Integrated suites into CI/CD so every deploy is gated by the same checks.',
      'Stood up live website health monitoring to catch post-release regressions in production.',
    ],
    stack: ['Playwright', 'CI/CD', 'UAT', 'Regression suites', 'Uptime monitoring'],
  },
  {
    id: 'bitcoin-node',
    title: 'Self-Hosted Bitcoin Node',
    category: 'Infrastructure',
    icon: 'node',
    span: 'lg:col-span-6',
    status: 'Running 24/7',
    description:
      'A locally self-hosted Bitcoin Core node with an Electrum server backend — fully independent verification of blockchain state.',
    details: [
      'Validates the chain locally rather than trusting a third-party endpoint.',
      'Electrum backend serves my own wallets without leaking address history.',
      'Adds a verifying node to the network in support of decentralization.',
    ],
    stack: ['Bitcoin Core', 'Electrum server', 'Linux', 'Self-hosting'],
  },
  {
    id: 'ticket-extension',
    title: 'Ticket Management Extension',
    category: 'Browser Extension',
    icon: 'puzzle',
    span: 'lg:col-span-6',
    status: 'Daily driver',
    description:
      'A browser extension that removes the repetitive clicking from ticket workflows and timesheet tracking.',
    details: [
      'Collapses recurring ticket state transitions into single actions.',
      'Auto-fills repeated data entry that used to be retyped every day.',
      'Keeps timesheet tracking aligned with the ticket it belongs to.',
    ],
    stack: ['JavaScript', 'Chrome Extension APIs', 'Workflow automation'],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    id: 'automation',
    title: 'Test Automation',
    icon: 'bolt',
    skills: ['Playwright', 'End-to-end testing', 'Regression suites', 'Cross-browser coverage', 'Test data design'],
  },
  {
    id: 'quality',
    title: 'Quality Engineering',
    icon: 'shield-check',
    skills: ['Manual & exploratory testing', 'User Acceptance Criteria', 'Release readiness reviews', 'Defect triage', 'QA process design'],
  },
  {
    id: 'delivery',
    title: 'Delivery & Reliability',
    icon: 'rocket',
    skills: ['CI/CD integration', 'Migration & cutover strategy', 'Live health monitoring', 'Escalation protocols'],
  },
  {
    id: 'security',
    title: 'Security & Systems',
    icon: 'lock',
    skills: ['Application security (OWASP)', 'Vulnerability mitigation', 'Self-hosted infrastructure', 'Linux', 'Bitcoin & Electrum'],
  },
]
