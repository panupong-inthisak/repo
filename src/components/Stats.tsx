import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'motion/react'
import { stats } from '../data/content'
import { Tx } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref} className="stat-value">
      {value}
      <span className="stat-suffix">{suffix}</span>
    </span>
  )
}

export function Stats() {
  return (
    <section className="stats container">
      {stats.map((s, i) => (
        <Reveal key={i} delay={i * 0.12} className="stat-card">
          <CountUp to={s.value} suffix={s.suffix} />
          <span className="stat-label">
            <Tx text={s.label} />
          </span>
        </Reveal>
      ))}
    </section>
  )
}
