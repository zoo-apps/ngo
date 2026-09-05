import { useState } from 'react'
import { Appearance, useAppearance } from '@hanzo/appearance'
import { LOOK } from '@/config/look'

/**
 * How this page reads to you: type size, how far apart the sizes sit, density,
 * face, measure.
 *
 * Nothing here decides any of that. @hanzo/appearance writes the knobs and
 * @hanzo/design multiplies them into every ramp, so one choice reaches every
 * `var(--text-*)` and `var(--space-*)` on the site at once — which is why this
 * file has no list of things to retune.
 *
 * Bottom LEFT, because bottom right is Blue. Two floating marks in one corner
 * is one control the reader has to guess at.
 *
 * `useAppearance` runs whether the panel is open or shut. The head script paints
 * type and density before the first frame but deliberately does not validate a
 * colour, so the mount is where an accent lands. The panel itself is not built
 * until it is asked for.
 */
export default function Look() {
  const [open, setOpen] = useState(false)
  useAppearance({ install: LOOK })

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 'clamp(12px, 3vw, 24px)',
        left: 'clamp(12px, 3vw, 24px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 'var(--space-2)',
        zIndex: 'var(--z-popover)' as unknown as number,
      }}
    >
      {/* Opaque, unlike the site's cards: this floats over running text and the
          translucent `--card` leaves both unreadable. */}
      {open && (
        <div
          className='card'
          style={{
            background: '#fff',
            width: 320,
            maxWidth: 'calc(100vw - 24px)',
            maxHeight: '70vh',
            overflowY: 'auto',
            padding: 'var(--space-4)',
          }}
        >
          <Appearance install={LOOK} />
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label='How this page reads'
        aria-expanded={open}
        className='action'
        style={{ minHeight: 36, paddingInline: 'var(--space-3)' }}
      >
        Aa
      </button>
    </div>
  )
}
