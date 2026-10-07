import { motion } from 'motion/react'
import type { ReactNode } from 'react'

/** Fades and lifts its children into view the first time they scroll on screen. */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionTitle({ index, children }: { index: string; children: ReactNode }) {
  return (
    <Reveal>
      <h2 className="section-title">
        <span className="section-index">{index}</span>
        {children}
        <span className="section-line" />
      </h2>
    </Reveal>
  )
}
