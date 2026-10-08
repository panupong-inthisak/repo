import type { MouseEvent, ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { projects, ui } from '../data/content'
import { Tx, useLanguage } from '../i18n/LanguageContext'
import { Reveal, SectionTitle } from './Reveal'

/** Card that tilts in 3D toward the cursor. */
function TiltCard({ children, className, max = 8 }: { children: ReactNode; className?: string; max?: number }) {
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(y, [0, 1], [max, -max]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-max, max]), { stiffness: 200, damping: 20 })

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!matchMedia('(hover: hover)').matches) return
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }
  const onLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
    >
      {children}
    </motion.div>
  )
}

function BrowserMockup() {
  const { featured } = projects
  return (
    <div className="browser">
      <div className="browser-bar">
        <span className="dots">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-url">{featured.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
      </div>
      <div className="browser-screen">
        {featured.screenshot ? (
          <img src={featured.screenshot} alt={`${featured.name} screenshot`} className="screenshot-scroll" loading="lazy" />
        ) : (
          <div className="faux-site">
            <div className="faux-nav">
              <span className="faux-logo">🌿 isanspabiz</span>
              <span className="faux-links">
                <i />
                <i />
                <i />
                <span className="faux-lang">TH · EN · 中文</span>
              </span>
            </div>
            <div className="faux-hero">
              <strong>Isan Spa & Wellness</strong>
              <span>20 provinces · directory · reviews</span>
            </div>
            <div className="faux-cards">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="faux-card">
                  <div className="faux-img" />
                  <i />
                  <i className="short" />
                  <span className="faux-stars">★★★★★</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function Projects() {
  const { t } = useLanguage()
  const { featured, others } = projects

  return (
    <section id="projects" className="section container">
      <SectionTitle index="04">
        <Tx text={projects.title} />
      </SectionTitle>

      <Reveal>
        <TiltCard className="featured card" max={4}>
          <a href={featured.url} target="_blank" rel="noreferrer" className="featured-preview" aria-label={featured.name}>
            <BrowserMockup />
          </a>
          <div className="featured-body">
            <span className="eyebrow">
              ★ <Tx text={ui.featured} />
            </span>
            <h3 className="featured-title">{featured.name}</h3>
            <p className="muted">
              <Tx text={featured.description} />
            </p>
            <div className="tags">
              {featured.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
            <a href={featured.url} target="_blank" rel="noreferrer" className="btn btn-primary">
              {t(ui.visitSite)} ↗
            </a>
          </div>
        </TiltCard>
      </Reveal>

      <div className="project-grid">
        {others.map((p, i) => (
          <Reveal key={p.name.en} delay={(i % 2) * 0.1}>
            <TiltCard className="project-card card">
              <span className="project-icon">{p.icon}</span>
              <h3>
                <Tx text={p.name} />
              </h3>
              <p className="muted">
                <Tx text={p.description} />
              </p>
              <div className="tags">
                {p.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
