import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  title: string
  /** Sentence under the heading. The heading itself names the section. */
  lede?: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, lede, description, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 border-t border-line/70 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">{title}</h2>
          {lede && <p className="mt-4 text-lg leading-relaxed text-ink">{lede}</p>}
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
