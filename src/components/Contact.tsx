import { useState } from 'react'
import { motion } from 'motion/react'
import { contact, profile, ui } from '../data/content'
import { Tx, useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

const YEAR = new Date().getFullYear()

export function Contact() {
  const { lang } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section container">
      <Reveal className="contact-card">
        <div className="blob blob-contact" />
        <span className="section-index">06</span>
        <h2 className="contact-title">
          <Tx text={contact.title} />
        </h2>
        <p className="contact-sub">
          <Tx text={contact.subtitle} />
        </p>

        <motion.button className="email-btn" onClick={copyEmail} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          ✉ {profile.email}
          <span className="copy-hint">{copied ? (lang === 'th' ? 'คัดลอกแล้ว ✓' : 'Copied ✓') : lang === 'th' ? 'คลิกเพื่อคัดลอก' : 'Click to copy'}</span>
        </motion.button>

        <div className="contact-links">
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
            ✉ Email
          </a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
          <a className="btn btn-primary" href={profile.resume} download>
            ⬇ <Tx text={ui.downloadCv} />
          </a>
        </div>
      </Reveal>

      <footer className="footer">
        <span>© {YEAR} {profile.nameLatin}</span>
        <span>
          <Tx text={ui.footer} />
        </span>
      </footer>
    </section>
  )
}
