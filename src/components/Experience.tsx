import { experience } from '../content/experience'
import type { ExperienceItem, ExperienceKind } from '../content/types'
import { Icon, type IconName } from './Icon'
import { Reveal } from './Reveal'
import { Section, Tag } from './Section'

const kindMeta: Record<ExperienceKind, { label: string; icon: IconName }> = {
  venture: { label: 'Venture', icon: 'spark' },
  role: { label: 'Professional', icon: 'building' },
  community: { label: 'Community', icon: 'users' },
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const meta = kindMeta[item.kind]

  return (
    <article
      className={`group relative rounded-tile border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
        item.featured
          ? 'border-accent/40 hover:border-accent hover:shadow-[0_20px_50px_-24px_var(--color-accent)]'
          : 'border-line hover:border-line-strong hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.7)]'
      }`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] tracking-wide uppercase ${
            item.featured ? 'bg-accent/12 text-accent' : 'bg-elevated text-faint'
          }`}
        >
          <Icon name={meta.icon} className="h-3.5 w-3.5" />
          {meta.label}
        </span>
        <span className="font-mono text-[11px] tracking-wide text-faint">{item.period}</span>
        {item.concurrentWith && (
          <span className="font-mono text-[11px] tracking-wide text-accent">
            Concurrent with {item.concurrentWith}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">
        {item.href ? (
          <a href={item.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
            {item.organization}
            <span className="sr-only"> on LinkedIn</span>
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        ) : (
          item.organization
        )}
      </h3>
      <p className="mt-1 text-sm font-medium text-accent">{item.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>

      <ul className="mt-5 space-y-2.5">
        {item.achievements.map((achievement) => (
          <li key={achievement} className="flex gap-3 text-sm leading-relaxed text-muted">
            <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {item.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </article>
  )
}

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      lede="Founder of Testify, founding member of Meta's Central Reliability Support team, and QA at Altruist."
    >
      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[15px] hidden w-px bg-gradient-to-b from-accent/60 via-line to-transparent sm:block"
        />
        <ol className="relative space-y-5 sm:space-y-6 sm:pl-10">
          {experience.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 70} className="relative">
              <span
                aria-hidden="true"
                className={`absolute top-8 -left-[31px] hidden h-3 w-3 rounded-full ring-4 ring-canvas sm:block ${
                  item.featured ? 'bg-accent' : 'bg-line-strong'
                }`}
              />
              <ExperienceCard item={item} />
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  )
}
