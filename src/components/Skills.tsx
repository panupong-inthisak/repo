import { motion } from 'motion/react'
import { skills } from '../data/content'
import { Tx } from '../i18n/LanguageContext'
import { Reveal, SectionTitle } from './Reveal'

const all = skills.groups.flatMap((g) => g.items)
const half = Math.ceil(all.length / 2)
const rows = [all.slice(0, half), all.slice(half)]

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle index="04">
          <Tx text={skills.title} />
        </SectionTitle>
      </div>

      <div className="marquee-wrap" aria-hidden>
        {rows.map((row, r) => (
          <div key={r} className={`marquee ${r === 1 ? 'reverse' : ''}`}>
            <div className="marquee-track">
              {[...row, ...row, ...row, ...row].map((s, i) => (
                <span key={i} className="marquee-item">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="container skill-groups">
        {skills.groups.map((g, gi) => (
          <Reveal key={g.name.en} delay={gi * 0.08} className="skill-group card">
            <h3>
              <Tx text={g.name} />
            </h3>
            <div className="tags">
              {g.items.map((s, i) => (
                <motion.span
                  key={s}
                  className="chip"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.15 + i * 0.05 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
