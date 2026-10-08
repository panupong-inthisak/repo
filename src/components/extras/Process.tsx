import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useSpring, type MotionStyle } from 'motion/react'
import { process, type StepStatus } from '../../data/extras'
import { Tx } from '../../i18n/LanguageContext'
import { Reveal, SectionTitle } from '../Reveal'

/** Four-stage workflow whose statuses advance (queued → in progress → done) as you scroll. */
export function Process({ index }: { index: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 45%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 25 })
  const [progress, setProgress] = useState(0)
  useMotionValueEvent(scrollYProgress, 'change', (v) => setProgress(v))

  const n = process.steps.length
  const statusOf = (i: number): StepStatus => {
    const pos = progress * n
    if (pos >= i + 0.85) return 'done'
    if (pos >= i + 0.1) return 'doing'
    return 'todo'
  }

  return (
    <section id="process" className="section container">
      <SectionTitle index={index}>
        <Tx text={process.title} />
      </SectionTitle>
      <Reveal>
        <p className="process-sub muted">
          <Tx text={process.subtitle} />
        </p>
      </Reveal>

      <div className="process" ref={ref}>
        <div className="process-track">
          <motion.div className="process-fill" style={{ '--fill': fill } as unknown as MotionStyle} />
        </div>
        <ol className="process-steps">
          {process.steps.map((s, i) => {
            const st = statusOf(i)
            return (
              <li key={i} className={`process-step is-${st}`}>
                <span className="process-node">{st === 'done' ? '✓' : i + 1}</span>
                <div className="process-card">
                  <div className="process-card-head">
                    <span className="process-icon" aria-hidden>
                      {s.icon}
                    </span>
                    <motion.span key={st} className={`process-pill pill-${st}`} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                      {st === 'doing' && <i className="process-spin" />}
                      <Tx text={process.status[st]} />
                    </motion.span>
                  </div>
                  <h3>
                    <Tx text={s.title} />
                  </h3>
                  <p className="muted">
                    <Tx text={s.desc} />
                  </p>
                  <ul className="process-tasks">
                    {s.tasks.map((task, j) => {
                      const checked = st === 'done' || (st === 'doing' && j === 0)
                      return (
                        <li key={j} className={checked ? 'checked' : ''}>
                          <span className="process-check" aria-hidden>
                            {checked ? '✓' : ''}
                          </span>
                          <Tx text={task} />
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
