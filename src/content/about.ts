import type { AboutContent } from './types'

export const about: AboutContent = {
  bio: [
    'I work on the unglamorous part of shipping software: proving it actually works. That has meant founding an AI testing startup, standing up reliability processes inside a very large org, and owning quality for tools people depend on every day.',
    'Most of what I know came from staying curious in public — conferences, chapter meetings, and local mixers where the interesting conversations happen in the hallway. I care about where AI, security, and decentralized systems intersect with quality engineering, so I keep showing up where those communities gather.',
  ],
  events: [
    { name: 'ETHDenver', detail: 'Builder-heavy week of protocol and tooling talks' },
    { name: 'Chainlink SmartCon', detail: 'Hong Kong & Barcelona editions' },
    { name: 'OWASP LA', detail: 'Chapter meetings on appsec and vulnerability mitigation' },
    { name: 'LA tech mixers', detail: 'Local founder and engineering meetups' },
  ],
  offScreen: [
    {
      title: 'Jiu-Jitsu & MMA',
      description: 'Training consistently — the same debugging instinct, applied to a live opponent.',
      icon: 'octagon',
    },
    {
      title: 'Running',
      description: 'Long, quiet miles. Where most of my architecture decisions actually get made.',
      icon: 'stopwatch',
    },
    {
      title: 'Automotive Mods',
      description: 'Custom builds and modifications — hardware iteration with immediate feedback.',
      icon: 'car',
    },
  ],
}
