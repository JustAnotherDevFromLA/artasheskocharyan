import { about } from '../content/about'
import { site } from '../content/site'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function About() {
  return (
    <Section
      id="about"
      title="About"
      lede="Continuous learning, on and off the clock"
      description={`Based in ${site.location}.`}
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="h-full rounded-tile border border-line bg-surface p-6 sm:p-8">
            <div className="space-y-5">
              {about.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 border-t border-line/70 pt-6">
              <h3 className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
                <Icon name="calendar" className="h-3.5 w-3.5" />
                Where you'll find me
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {about.events.map((event) => (
                  <li key={event.name} className="rounded-xl border border-line bg-elevated/50 px-4 py-3">
                    <p className="text-sm font-medium text-ink">{event.name}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-faint">{event.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-5">
          <div className="flex h-full flex-col rounded-tile border border-line bg-surface p-6 sm:p-8">
            <h3 className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">Off-screen</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The habits that keep the engineering sharp.
            </p>

            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {about.offScreen.map((hobby) => (
                <li
                  key={hobby.title}
                  className="group flex flex-1 items-center gap-4 rounded-xl border border-line bg-elevated/40 p-4 transition-colors duration-300 hover:border-accent/40"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-surface text-accent transition-transform duration-300 group-hover:scale-105">
                    <Icon name={hobby.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-tight text-ink">{hobby.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{hobby.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
