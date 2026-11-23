import type { SiteContent } from './types'

export const site: SiteContent = {
  name: 'Artashes Alex Kocharyan',
  shortName: 'Artashes Kocharyan',
  tagline: 'Software Quality Assurance Engineer | Test Automation Expert',
  intro:
    'I automate software quality assurance using custom workflows, CI/CD integration, and live monitoring. My methodology focuses on risk-based automated test suites, efficient release protocols, alerts, and AI-driven remediation. Based in Los Angeles.',
  location: 'Los Angeles, CA',
  availability: null,
  email: 'artashesalexkocharyan@gmail.com',
  nav: [
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/JustAnotherDevFromLA', icon: 'github', handle: '@JustAnotherDevFromLA' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/artashes-kocharyan/', icon: 'linkedin', handle: 'in/artashes-kocharyan' },
    { label: 'X', href: 'https://x.com/expertfrogger', icon: 'x', handle: '@expertfrogger' },
  ],
  highlights: [
    { value: 'Testify', label: 'AI testing startup, founder' },
    { value: 'Meta', label: 'Founding member, Central Reliability Support' },
    { value: 'Altruist', label: 'Software quality assurance engineer' },
  ],
}
