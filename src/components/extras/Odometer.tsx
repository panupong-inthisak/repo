import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const DIGITS = Array.from({ length: 10 }, (_, i) => i)

/** Number whose digits roll up like a meter the first time it scrolls into view. */
export function Odometer({ value, suffix = '', className }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const digits = String(value).split('').map(Number)

  return (
    <span ref={ref} className={`odo ${className ?? ''}`} aria-label={`${value}${suffix}`}>
      {digits.map((d, i) => (
        <span key={i} className="odo-col" aria-hidden>
          <motion.span
            className="odo-strip"
            initial={{ y: '0%' }}
            animate={{ y: inView ? `-${d * 10}%` : '0%' }}
            transition={{ duration: 1.6 + i * 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {DIGITS.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </motion.span>
        </span>
      ))}
      {suffix && (
        <span className="odo-suffix" aria-hidden>
          {suffix}
        </span>
      )}
    </span>
  )
}
