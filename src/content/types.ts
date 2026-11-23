import type { IconName } from '../components/Icon'

export type SocialLink = {
  label: string
  href: string
  icon: IconName
  /** Shown next to the icon in the footer, e.g. an @handle. */
  handle?: string
}

export type NavLink = {
  label: string
  /** Section id on the page, without the leading `#`. */
  id: string
}

export type SiteContent = {
  name: string
  shortName: string
  tagline: string
  /** One or two sentences under the hero tagline. */
  intro: string
  location: string
  /** Set to `null` to hide the availability pill in the hero. */
  availability: string | null
  email: string
  nav: NavLink[]
  socials: SocialLink[]
  /** Small stats rendered under the hero actions. */
  highlights: { value: string; label: string }[]
}

export type ExperienceKind = 'venture' | 'role' | 'community'

export type ExperienceItem = {
  /** Stable key — also used for React list keys. */
  id: string
  organization: string
  role: string
  period: string
  kind: ExperienceKind
  /** Short line rendered under the role title. */
  summary: string
  /** Concrete outcomes. Keep each to a single sentence. */
  achievements: string[]
  stack: string[]
  href?: string
  /** Another published role whose dates overlap this one. */
  concurrentWith?: string
  /** Renders the accent-bordered treatment. Use for the flagship item. */
  featured?: boolean
}

export type Project = {
  id: string
  title: string
  /** Short kicker above the title, e.g. "Consulting". */
  category: string
  description: string
  details: string[]
  stack: string[]
  icon: IconName
  /**
   * Tailwind column/row span classes for the bento grid (12-col at `lg`).
   * Example: 'lg:col-span-6'.
   */
  span: string
  /**
   * 'wide' splits the tile into summary + details columns, which keeps a
   * full-width tile from leaving dead space. Defaults to 'standard'.
   */
  layout?: 'standard' | 'wide'
  href?: string
  status?: string
  /** 'aside' sits in the quieter Also running group. Defaults to the proof grid. */
  emphasis?: 'proof' | 'aside'
}

export type SkillGroup = {
  id: string
  title: string
  icon: IconName
  skills: string[]
}

export type AboutContent = {
  /** Each string renders as its own paragraph. */
  bio: string[]
  events: { name: string; detail: string }[]
  offScreen: { title: string; description: string; icon: IconName }[]
}
