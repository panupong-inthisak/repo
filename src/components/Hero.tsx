import { useEffect, useState, type MouseEvent } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'motion/react'
import { profile, ui } from '../data/content'
import { Tx, useLanguage } from '../i18n/LanguageContext'

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let delay = deleting ? 35 : 70
    if (!deleting && text === word) delay = 1600
    if (deleting && text === '') delay = 300

    const id = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => i + 1)
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(id)
  }, [text, deleting, index, words])

  return text
}

export function Hero() {
  const { lang } = useLanguage()
  const role = useTypewriter(profile.roles[lang])

  // Spotlight that follows the cursor
  const mx = useMotionValue(-500)
  const my = useMotionValue(-500)
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, var(--glow), transparent 70%)`
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  const letters = profile.nameLatin.split('')

  return (
    <section id="top" className="hero" onMouseMove={onMove}>
      <motion.div className="hero-spotlight" style={{ background: spotlight }} />
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="grid-bg" />

      <div className="hero-inner">
        <motion.div
          className="avatar-wrap"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="avatar-ring" />
          <img src={profile.photo} alt={profile.name.en} className="avatar" width={896} height={1195} />
          <motion.span
            className="avatar-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <span className="dot" /> 240+ live sites
          </motion.span>
        </motion.div>

        <div className="hero-text">
          <motion.p className="hero-greeting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Tx text={profile.greeting} />
          </motion.p>

          <h1 className="hero-name" aria-label={profile.nameLatin}>
            {letters.map((ch, i) => (
              <motion.span
                key={i}
                aria-hidden
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.3 + i * 0.035, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {ch === ' ' ? ' ' : ch}
              </motion.span>
            ))}
          </h1>

          <motion.p className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <span className="gradient-text">{role}</span>
            <span className="caret" />
          </motion.p>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <Tx text={profile.tagline} />
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.6 }}
          >
            <a className="btn btn-primary" href={profile.resume} download>
              ⬇ <Tx text={ui.downloadCv} />
            </a>
            <a className="btn btn-ghost" href="#contact">
              ✉ <Tx text={ui.contactMe} />
            </a>
          </motion.div>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span className="mouse">
          <span className="wheel" />
        </span>
        <Tx text={ui.scroll} />
      </a>
    </section>
  )
}
