import { about, education } from '../data/content'
import { Tx } from '../i18n/LanguageContext'
import { Reveal, SectionTitle } from './Reveal'

export function About() {
  return (
    <section id="about" className="section container">
      <SectionTitle index="01">
        <Tx text={about.title} />
      </SectionTitle>

      <div className="about-grid">
        <div className="about-text">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p>
                <Tx text={p} />
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="edu-card card">
          <span className="edu-icon">🎓</span>
          <span className="eyebrow">
            <Tx text={education.title} />
          </span>
          <h3>
            <Tx text={education.degree} />
          </h3>
          <p className="muted">
            <Tx text={education.school} />
          </p>
          <p className="edu-period">
            <Tx text={education.period} />
          </p>
        </Reveal>
      </div>
    </section>
  )
}
