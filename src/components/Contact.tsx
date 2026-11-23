import { useEffect, useRef, useState, type FormEvent } from 'react'
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
  const subject = `Message from ${payload.name}`
  const body = `${payload.message}\n\n—\n${payload.name}\n${payload.email}`
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

type CopyState = 'idle' | 'copied' | 'failed'
type FieldName = 'name' | 'email' | 'message'
type FieldIssue = 'empty' | 'format'
type FieldIssues = Partial<Record<FieldName, FieldIssue>>

function fieldMessage(field: FieldName, issue: FieldIssue) {
  if (field === 'name') return 'Add your name so the draft is addressed.'
  if (field === 'message') return 'Add a note for the draft.'
  if (issue === 'format') return 'That email address needs a name and a domain, like jane@company.com.'
  return 'Add an email address so a reply has somewhere to go.'
}

export function Contact() {
  const [copyState, setCopyState] = useState<CopyState>('idle')
  const [invalid, setInvalid] = useState<FieldIssues>({})
  const copiedTimer = useRef<number | undefined>(undefined)
  const emailRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    return () => window.clearTimeout(copiedTimer.current)
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const emailField = form.elements.namedItem('email')
    const emailValid = emailField instanceof HTMLInputElement && emailField.validity.valid

    const issues: FieldIssues = {}
    if (!name) issues.name = 'empty'
    if (!email) issues.email = 'empty'
    else if (!emailValid) issues.email = 'format'
    if (!message) issues.message = 'empty'
    setInvalid(issues)

    const first = (['name', 'email', 'message'] as const).find((field) => issues[field])
    if (first) {
      const field = form.elements.namedItem(first)
      if (field instanceof HTMLElement) field.focus()
      return
    }

    submitByEmail({ name, email, message })
  }

  function selectEmail() {
    const node = emailRef.current
    if (!node) return
    const range = document.createRange()
    range.selectNodeContents(node)
    const selection = window.getSelection()
    selection?.removeAllRanges()
    selection?.addRange(range)
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopyState('copied')
      window.clearTimeout(copiedTimer.current)
      copiedTimer.current = window.setTimeout(() => setCopyState('idle'), 2000)
    } catch {
      selectEmail()
      setCopyState('failed')
    }
  }

  return (
    <Section
      id="contact"
      title="Contact"
      lede="Email reaches me directly. The form only opens a draft, and you send it."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="flex h-full flex-col rounded-tile border border-line bg-surface p-6 sm:p-8">
            <h3 className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">Email</h3>
            <a
              ref={emailRef}
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
              <Icon name={copyState === 'copied' ? 'check' : 'copy'} className="h-3.5 w-3.5" />
              {copyState === 'copied' ? 'Copied' : 'Copy address'}
            </button>
            <p aria-live="polite" className="mt-2 text-xs text-faint">
              {copyState === 'failed' ? "Couldn't copy. The address is selected." : copyState === 'copied' ? 'Copied.' : ''}
            </p>

            <div className="mt-8 border-t border-line/70 pt-6">
              <h3 className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">Profiles</h3>
              <ul className="mt-4 space-y-2">
                {site.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-elevated/40 px-4 py-3 transition-colors duration-200 hover:border-accent/40"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <Icon name={social.icon} className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
                        <span className="min-w-0">
                          <span className="block text-sm text-ink">{social.label}</span>
                          {social.handle && (
                            <span className="block font-mono text-[11px] text-faint">{social.handle}</span>
                          )}
                        </span>
                      </span>
                      <span className="flex items-center gap-2">
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

        <Reveal delay={100} className="lg:col-span-5">
          <form
            noValidate
            onSubmit={handleSubmit}
            className="flex h-full flex-col rounded-tile border border-line bg-surface p-6 sm:p-8"
          >
            <h3 className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">Open a draft</h3>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-medium text-muted">Name</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  aria-invalid={Boolean(invalid.name)}
                  aria-describedby={invalid.name ? 'draft-error-name' : undefined}
                  className={`mt-2 ${fieldClass} ${invalid.name ? 'border-accent' : ''}`}
                />
                {invalid.name && (
                  <span id="draft-error-name" className="mt-2 block text-xs text-accent">
                    {fieldMessage('name', invalid.name)}
                  </span>
                )}
              </label>
              <label className="block">
                <span className="text-xs font-medium text-muted">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="jane@company.com"
                  aria-invalid={Boolean(invalid.email)}
                  aria-describedby={invalid.email ? 'draft-error-email' : undefined}
                  className={`mt-2 ${fieldClass} ${invalid.email ? 'border-accent' : ''}`}
                />
                {invalid.email && (
                  <span id="draft-error-email" className="mt-2 block text-xs text-accent">
                    {fieldMessage('email', invalid.email)}
                  </span>
                )}
              </label>
            </div>

            <label className="mt-4 block flex-1">
              <span className="text-xs font-medium text-muted">Message</span>
              <textarea
                required
                name="message"
                rows={6}
                placeholder="A role, a question, or a note"
                aria-invalid={Boolean(invalid.message)}
                aria-describedby={invalid.message ? 'draft-error-message' : undefined}
                className={`mt-2 resize-y ${fieldClass} ${invalid.message ? 'border-accent' : ''}`}
              />
              {invalid.message && (
                <span id="draft-error-message" className="mt-2 block text-xs text-accent">
                  {fieldMessage('message', invalid.message)}
                </span>
              )}
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-canvas transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-soft hover:shadow-[0_12px_32px_-12px_var(--color-accent)]"
              >
                Open email draft
                <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
              <p className="text-xs text-faint">
                Opens a draft in your email app. If it doesn't open, use the address above.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
