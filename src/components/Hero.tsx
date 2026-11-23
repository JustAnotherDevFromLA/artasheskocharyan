import { site } from '../content/site'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-glow pointer-events-none absolute inset-x-0 top-0 h-[38rem]" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
        <Reveal>
          <h1>
            <span className="block text-4xl font-semibold tracking-tight text-balance text-ink sm:text-6xl lg:text-7xl">
              {site.name}
            </span>
            <span className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm font-normal tracking-normal text-muted sm:text-base">
              <span className="text-accent">Software Quality Assurance Engineer</span>
              <span aria-hidden="true" className="text-line-strong">
                /
              </span>
              <span>Test Automation Expert</span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-muted">{site.intro}</p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-canvas transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-soft hover:shadow-[0_12px_32px_-12px_var(--color-accent)]"
            >
              Review experience
              <Icon
                name="arrow-down"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Get in touch
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
          {site.availability && <p className="mt-4 text-sm text-muted">{site.availability}</p>}
        </Reveal>

        <Reveal delay={300}>
          <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-tile border border-line bg-line sm:grid-cols-3">
            {site.highlights.map((item) => (
              <div key={item.value} className="bg-surface px-5 py-5">
                <dt className="text-lg font-semibold tracking-tight text-ink">{item.value}</dt>
                <dd className="mt-1 text-sm text-faint">{item.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
