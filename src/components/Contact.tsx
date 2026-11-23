import { useState, type FormEvent } from 'react'
import { site } from '../content/site'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Section } from './Section'

const fieldClass =
  'w-full rounded-xl border border-line bg-elevated/60 px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors duration-200 hover:border-line-strong focus:border-accent focus:outline-none'

/**
 * Submits by composing a mailto: draft, so the form works with no backend.
 * To switch to a hosted form service, replace the body of this function with a
 * `fetch(endpoint, { method: 'POST', body: JSON.stringify(payload) })` call.
 */
function submitByEmail(payload: { name: string; email: string; message: string }) {
  const subject = `Portfolio inquiry from ${payload.name}`
  const body = `${payload.message}\n\n—\n${payload.name}\n${payload.email}`
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function Contact() {
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    submitByEmail({
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
    })
    setSent(true)
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard permission denied — the mailto link above still works.
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="04 / Contact"
      title="Let's talk about release quality"
      description="Consulting, automation strategy, or just comparing notes on testing tools — my inbox is open."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="flex h-full flex-col rounded-tile border border-line bg-surface p-6 sm:p-8">
            <h3 className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">Direct</h3>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-2.5 text-base font-medium break-all text-ink transition-colors duration-200 hover:text-accent"
            >
              <Icon name="mail" className="h-4 w-4 shrink-0 text-accent" />
              {site.email}
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-line px-3.5 py-2 font-mono text-[11px] tracking-wide text-muted transition-colors duration-200 hover:border-accent/60 hover:text-accent"
            >
              <Icon name={copied ? 'check' : 'copy'} className="h-3.5 w-3.5" />
              {copied ? 'Copied' : 'Copy address'}
            </button>

            <div className="mt-8 border-t border-line/70 pt-6">
              <h3 className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">Elsewhere</h3>
              <ul className="mt-4 space-y-2">
                {site.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-elevated/40 px-4 py-3 transition-colors duration-200 hover:border-accent/40"
                    >
                      <span className="flex items-center gap-3">
                        <Icon name={social.icon} className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
                        <span className="text-sm text-ink">{social.label}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        {social.handle && (
                          <span className="hidden font-mono text-[11px] text-faint sm:inline">{social.handle}</span>
                        )}
                        <Icon
                          name="arrow"
                          className="h-3.5 w-3.5 text-faint transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                        />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="flex h-full flex-col rounded-tile border border-line bg-surface p-6 sm:p-8"
          >
            <h3 className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">Send a message</h3>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-medium text-muted">Name</span>
                <input required name="name" autoComplete="name" placeholder="Jane Doe" className={`mt-2 ${fieldClass}`} />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-muted">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="jane@company.com"
                  className={`mt-2 ${fieldClass}`}
                />
              </label>
            </div>

            <label className="mt-4 block flex-1">
              <span className="text-xs font-medium text-muted">Message</span>
              <textarea
                required
                name="message"
                rows={6}
                placeholder="What are you building, and what needs testing?"
                className={`mt-2 resize-y ${fieldClass}`}
              />
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-canvas transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-soft hover:shadow-[0_12px_32px_-12px_var(--color-accent)]"
              >
                Send message
                <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
              <p aria-live="polite" className="text-xs text-faint">
                {sent
                  ? 'Draft opened in your email client — hit send there.'
                  : 'Opens a pre-filled draft in your email client.'}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
