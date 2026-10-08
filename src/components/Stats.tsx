import { stats } from '../data/content'
import { Tx } from '../i18n/LanguageContext'
import { Odometer } from './extras/Odometer'
import { Reveal } from './Reveal'

export function Stats() {
  return (
    <section className="stats container">
      {stats.map((s, i) => (
        <Reveal key={i} delay={i * 0.12} className="stat-card">
          <Odometer value={s.value} suffix={s.suffix} className="stat-value" />
          <span className="stat-label">
            <Tx text={s.label} />
          </span>
        </Reveal>
      ))}
    </section>
  )
}
