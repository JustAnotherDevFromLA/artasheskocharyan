import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Stagger in milliseconds. */
  delay?: number
  className?: string
  as?: ElementType
}

const revealCallbacks = new Map<Element, () => void>()
let revealObserver: IntersectionObserver | null = null

function getRevealObserver() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const show = revealCallbacks.get(entry.target)
          if (!show) continue
          revealCallbacks.delete(entry.target)
          revealObserver?.unobserve(entry.target)
          show()
        }
        if (revealCallbacks.size === 0) {
          revealObserver?.disconnect()
          revealObserver = null
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    )
  }
  return revealObserver
}

function unobserveReveal(node: Element) {
  revealCallbacks.delete(node)
  revealObserver?.unobserve(node)
  if (revealCallbacks.size === 0 && revealObserver) {
    revealObserver.disconnect()
    revealObserver = null
  }
}

/**
 * Fades and lifts its children into view once, on first intersection.
 * Every instance shares one IntersectionObserver.
 */
export function Reveal({ children, delay = 0, className, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    revealCallbacks.set(node, () => setVisible(true))
    getRevealObserver().observe(node)
    return () => unobserveReveal(node)
  }, [])

  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal={visible ? 'visible' : 'pending'}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  )
}
