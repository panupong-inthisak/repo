import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { profile } from '../../data/content'
import { floatingCta } from '../../data/extras'
import { Tx } from '../../i18n/LanguageContext'

/** Pill that appears after the hero and hides again once the contact section is on screen. */
export function FloatingCta() {
  const [pastHero, setPastHero] = useState(false)
  const [atContact, setAtContact] = useState(false)

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const contact = document.getElementById('contact')
    const io = contact ? new IntersectionObserver(([e]) => setAtContact(e.isIntersecting), { threshold: 0.15 }) : null
    if (contact && io) io.observe(contact)

    return () => {
      window.removeEventListener('scroll', onScroll)
      io?.disconnect()
    }
  }, [])

  return (
    <AnimatePresence>
      {pastHero && !atContact && (
        <motion.div
          className="float-cta"
          initial={{ y: 80, opacity: 0, x: '-50%' }}
          animate={{ y: 0, opacity: 1, x: '-50%' }}
          exit={{ y: 80, opacity: 0, x: '-50%' }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        >
          <img src={profile.photo} alt="" className="float-cta-avatar" width={896} height={1195} />
          <span className="float-cta-label">
            <Tx text={floatingCta.label} />
          </span>
          <a href={profile.resume} download className="float-cta-btn ghost">
            ⬇ <Tx text={floatingCta.resume} />
          </a>
          <a href="#contact" className="float-cta-btn">
            <Tx text={floatingCta.contact} /> →
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
