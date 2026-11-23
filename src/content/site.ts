import type { SiteContent } from './types'

// TODO: replace the email + social URLs below with your real handles.
export const site: SiteContent = {
  name: 'Artashes Alex Kocharyan',
  shortName: 'Artashes Kocharyan',
  tagline: 'Software Quality Assurance Engineer | Test Automation Expert',
  intro:
    'I build the safety net around software — automated test suites, release protocols, and AI-assisted testing tools that catch problems before users do.',
  location: 'Los Angeles, CA',
  availability: 'Open to consulting engagements',
  email: 'contact@artasheskocharyan.com',
  nav: [
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/artasheskocharyan', icon: 'github', handle: '@artasheskocharyan' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/artasheskocharyan', icon: 'linkedin', handle: 'in/artasheskocharyan' },
    { label: 'X', href: 'https://x.com/artasheskoch', icon: 'x', handle: '@artasheskoch' },
  ],
  highlights: [
    { value: 'Testify', label: 'AI testing startup, founder' },
    { value: 'Meta', label: 'Founding CRS team member' },
    { value: 'OWASP LA', label: 'Member & volunteer' },
  ],
}
