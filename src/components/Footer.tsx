import { site } from '../content/site'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-medium text-ink">{site.name}</p>
          <p className="mt-1 font-mono text-[11px] text-faint">
            © {new Date().getFullYear()} · {site.location}
          </p>
        </div>

        <nav aria-label="Social links" className="flex items-center gap-2">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
            >
              <Icon name={social.icon} className="h-4 w-4" />
            </a>
          ))}
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
          >
            <Icon name="mail" className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </footer>
  )
}
