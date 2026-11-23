import { useEffect, useState } from 'react'

/** Tracks which section id is currently closest to the top of the viewport. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    // Tracked across callbacks because each callback only reports the
    // sections whose intersection changed, not the full set.
    const intersecting = new Set<Element>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target)
          else intersecting.delete(entry.target)
        }

        // Positions are read fresh rather than taken from the entries, whose
        // rects are snapshots from whenever that section last changed state.
        // The section that started most recently is the one being read, so a
        // tall previous section barely clipping the band cannot win.
        let current: Element | null = null
        let currentTop = -Infinity
        for (const node of intersecting) {
          const { top } = node.getBoundingClientRect()
          if (top > currentTop) {
            currentTop = top
            current = node
          }
        }

        // Nothing in the band means we are above the first section — back at
        // the hero — so no nav item should read as active.
        setActive(current ? current.id : null)
      },
      // The top edge sits just under the sticky nav — the same offset anchor
      // links scroll to — so a freshly anchored section is inside the band.
      { rootMargin: '-88px 0px -70% 0px', threshold: 0 },
    )

    for (const id of ids) {
      const node = document.getElementById(id)
      if (node) observer.observe(node)
    }

    return () => observer.disconnect()
  }, [ids])

  return active
}
