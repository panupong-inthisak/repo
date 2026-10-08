import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { builtWith } from '../../data/extras'
import { Tx } from '../../i18n/LanguageContext'

/** Footer credit whose tech name reveals a "currently learning" note on hover, focus or tap. */
export function BuiltWith() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <span className="built-with">
      <Tx text={builtWith.prefix} />{' '}
      <span
        ref={ref}
        className="built-with-anchor"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          type="button"
          className="built-with-trigger"
          aria-expanded={open}
          aria-describedby="built-with-note"
          onClick={() => setOpen((o) => !o)}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        >
          {builtWith.tech} <span aria-hidden>✨</span>
        </button>
        <AnimatePresence>
          {open && (
            <motion.span
              id="built-with-note"
              role="tooltip"
              className="built-with-pop"
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 380, damping: 26 }}
            >
              <span className="built-with-badge">
                🌱 <Tx text={builtWith.badge} />
              </span>
              <Tx text={builtWith.note} />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </span>
  )
}
