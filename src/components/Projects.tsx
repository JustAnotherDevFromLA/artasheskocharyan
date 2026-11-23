import { projects, skillGroups } from '../content/projects'
import type { Project } from '../content/types'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Section, Tag } from './Section'

function TileHeader({ project }: { project: Project }) {
  return (
    <div className="relative flex items-start justify-between gap-4">
      <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-elevated text-accent transition-colors duration-300 group-hover:border-accent/40">
        <Icon name={project.icon} className="h-5 w-5" />
      </span>
      {project.status && (
        <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-faint uppercase">
          {project.status}
        </span>
      )}
    </div>
  )
}

function TileHeading({ project }: { project: Project }) {
  return (
    <>
      <p className="relative mt-6 font-mono text-[11px] tracking-[0.16em] text-accent uppercase">{project.category}</p>
      <h3 className="relative mt-2 flex items-center gap-2 text-xl font-semibold tracking-tight text-ink">
        {project.title}
        {project.href && (
          <Icon
            name="arrow"
            className="h-4 w-4 text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        )}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
    </>
  )
}

function TileDetails({ details, className = '' }: { details: string[]; className?: string }) {
  return (
    <ul className={`relative ${className}`}>
      {details.map((detail) => (
        <li key={detail} className="flex gap-2.5 text-sm leading-relaxed text-muted">
          <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  )
}

function TileStack({ stack, className = '' }: { stack: string[]; className?: string }) {
  return (
    <div className={`relative flex flex-wrap gap-2 ${className}`}>
      {stack.map((tech) => (
        <Tag key={tech}>{tech}</Tag>
      ))}
    </div>
  )
}

const tileClass =
  'group relative overflow-hidden rounded-tile border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_60px_-32px_var(--color-accent)] sm:p-7'

function HoverGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-24 -right-16 h-48 w-48 rounded-full bg-accent/8 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
    />
  )
}

function ProjectTile({ project }: { project: Project }) {
  const Container = project.href ? 'a' : 'div'
  const linkProps = project.href ? { href: project.href, target: '_blank', rel: 'noreferrer' } : {}

  // A full-width tile splits into summary + details columns so it fills its
  // width instead of stretching one narrow column of text.
  if (project.layout === 'wide') {
    return (
      <Container {...linkProps} data-project={project.id} className={`${tileClass} block h-full`}>
        <HoverGlow />
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <TileHeader project={project} />
            <TileHeading project={project} />
            <TileStack stack={project.stack} className="mt-6" />
          </div>
          <div className="lg:col-span-7 lg:border-l lg:border-line/70 lg:pl-12">
            <p className="relative font-mono text-[10px] tracking-[0.16em] text-faint uppercase">What that involves</p>
            <TileDetails details={project.details} className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-x-8" />
          </div>
        </div>
      </Container>
    )
  }

  return (
    <Container {...linkProps} data-project={project.id} className={`${tileClass} flex h-full flex-col`}>
      <HoverGlow />
      <TileHeader project={project} />
      <TileHeading project={project} />
      <TileDetails details={project.details} className="mt-5 space-y-2 border-t border-line/70 pt-5" />
      <TileStack stack={project.stack} className="mt-auto pt-6" />
    </Container>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="02 / Projects & Skills"
      title="Things I've shipped and run"
      description="Client engagements, self-hosted infrastructure, and the internal tooling I built because the manual version was wasting my time."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 80} className={project.span}>
            <ProjectTile project={project} />
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <Reveal>
          <h3 className="font-mono text-xs tracking-[0.2em] text-faint uppercase">Toolbox</h3>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 60}>
              <div className="h-full rounded-tile border border-line bg-surface/60 p-5 transition-colors duration-300 hover:border-line-strong">
                <div className="flex items-center gap-2.5">
                  <Icon name={group.icon} className="h-4 w-4 text-accent" />
                  <h4 className="text-sm font-semibold tracking-tight text-ink">{group.title}</h4>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="font-mono text-[12px] leading-relaxed text-muted">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
