import { useEffect, useRef, useState } from 'react'
import { site } from '../content/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'
import { Icon } from './Icon'

const navIds = site.nav.map((item) => item.id)

export function Nav() {
  const sentinel = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(navIds)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const node = sentinel.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(([entry]) => {
      setScrolled(!entry.isIntersecting)
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div ref={sentinel} aria-hidden="true" className="pointer-events-none absolute top-6 h-px w-px" />
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled ? 'border-line/80 bg-canvas/90 backdrop-blur-sm' : 'border-transparent bg-transparent'
        }`}
      >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" aria-label={site.shortName} className="group flex items-center gap-2.5">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent font-mono text-sm font-bold text-canvas">
            AK
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-ink sm:block">{site.shortName}</span>
        </a>

        <div className="flex items-center gap-3">
          <nav aria-label="Sections" className="hidden items-center gap-1 md:flex">
            {site.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={`inline-flex min-h-11 items-center rounded-full px-3.5 text-sm transition-colors duration-200 hover:text-ink ${
                  active === item.id ? 'text-ink' : 'text-muted'
                }`}
              >
                <span className="relative">
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 ${
                      active === item.id ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </span>
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-accent/60 hover:text-accent"
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors duration-200 hover:text-ink md:hidden"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="h-4 w-4" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Sections"
          className="border-t border-line bg-canvas/95 px-5 py-3 md:hidden"
        >
          {site.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              aria-current={active === item.id ? 'true' : undefined}
              className={`flex min-h-11 items-center rounded-lg px-3 text-sm transition-colors hover:bg-elevated hover:text-ink ${
                active === item.id ? 'text-ink' : 'text-muted'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
      </header>
    </>
  )
}
