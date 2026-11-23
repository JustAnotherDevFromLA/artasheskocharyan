import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  title: string
  /** Sentence under the heading. The heading itself names the section. */
  lede?: string
  description?: string
  /** One outbound check, sitting on the same row as the heading. */
  action?: { href: string; label: string }
  children: ReactNode
  className?: string
}

export function Section({ id, title, lede, description, action, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`border-t border-line/70 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">{title}</h2>
            {action && (
              <a
                href={action.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
              >
                {action.label}
              </a>
            )}
          </div>
          {lede && <p className="mt-4 text-lg leading-relaxed text-pretty text-ink">{lede}</p>}
          {description && <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>}
        </Reveal>
        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-elevated/60 px-2.5 py-1 font-mono text-[11px] tracking-tight text-muted">
      {children}
    </span>
  )
}
