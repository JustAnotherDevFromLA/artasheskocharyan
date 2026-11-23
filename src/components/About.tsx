import { about } from '../content/about'
import { site } from '../content/site'
import { Section } from './Section'

export function About() {
  return (
    <Section
      id="about"
      title="About"
      lede="Continuous learning, on and off the clock"
      description={`Based in ${site.location}.`}
    >
      <div className="max-w-2xl space-y-5">
        {about.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-pretty text-muted">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12 max-w-2xl border-t border-line/70 pt-8">
        <h3 className="text-sm font-semibold tracking-tight text-ink">Where you'll find me</h3>
        <ul className="mt-4 space-y-2">
          {about.events.map((event) => (
            <li key={event.name} className="text-sm leading-relaxed text-pretty text-muted">
              <span className="font-medium text-ink">{event.name}. </span>
              {event.detail}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 max-w-2xl">
        <h3 className="text-sm font-semibold tracking-tight text-ink">Off-screen</h3>
        <ul className="mt-4 space-y-2">
          {about.offScreen.map((hobby) => (
            <li key={hobby.title} className="text-sm leading-relaxed text-pretty text-muted">
              <span className="font-medium text-ink">{hobby.title}. </span>
              {hobby.description}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
