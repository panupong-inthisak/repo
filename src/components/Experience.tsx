import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { experience, ui } from '../data/content'
import { Tx } from '../i18n/LanguageContext'
import { SectionTitle } from './Reveal'

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const line = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section id="experience" className="section container">
      <SectionTitle index="03">
        <Tx text={experience.title} />
      </SectionTitle>

      <div className="timeline" ref={ref}>
        <div className="timeline-track" />
        <motion.div className="timeline-fill" style={{ scaleY: line }} />

        {experience.jobs.map((job) => (
          <div key={job.company} className="timeline-item">
            <motion.span
              className="timeline-dot"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            />
            <motion.div
              className="job-head"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3>{job.company}</h3>
                <p className="muted">
                  <Tx text={job.role} />
                </p>
              </div>
              <span className="chip chip-accent">
                <Tx text={job.start} /> – <Tx text={job.end ?? ui.present} />
              </span>
            </motion.div>

            <ul className="job-points">
              {job.points.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                >
                  <Tx text={p} />
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
