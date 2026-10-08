import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { ui } from '../data/content'
import { Tx, useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../hooks/useTheme'

const links = ['about', 'process', 'experience', 'projects', 'skills', 'contact'] as const

export function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <nav className="nav-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          PI<span>.</span>
        </a>

        <ul className="nav-links">
          {links.map((id) => (
            <li key={id}>
              <a href={`#${id}`}>
                <Tx text={ui.nav[id]} />
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <div className="lang-switch" role="group" aria-label="Language">
            {(['th', 'en'] as const).map((l) => (
              <button key={l} className={lang === l ? 'active' : ''} onClick={() => setLang(l)} aria-pressed={lang === l}>
                {lang === l && <motion.span layoutId="lang-pill" className="lang-pill" />}
                <span>{l.toUpperCase()}</span>
              </button>
            ))}
          </div>
          <button className="icon-btn" onClick={toggle} aria-label={t(ui.toggleTheme)}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className={`icon-btn burger ${open ? 'open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={t(ui.menu)}
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((id, i) => (
              <motion.li key={id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                <a href={`#${id}`} onClick={() => setOpen(false)}>
                  {t(ui.nav[id])}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
