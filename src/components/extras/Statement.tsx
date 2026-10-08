import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { statement } from '../../data/extras'
import { Tx, useLanguage } from '../../i18n/LanguageContext'
import { Reveal } from '../Reveal'

/** Big headline whose highlighted phrase rotates through what the sites deliver. */
export function Statement({ className = '' }: { className?: string }) {
  const { t } = useLanguage()
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % statement.words.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section className={`statement container ${className}`}>
      <Reveal>
        <h2 className="statement-title">
          <span className="statement-lead">
            <Tx text={statement.lead} />
          </span>{' '}
          <motion.span layout className="statement-word-wrap" transition={{ duration: 0.4 }}>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={`${i}-${t(statement.words[i])}`}
                className="statement-word"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-110%', opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {t(statement.words[i])}
              </motion.span>
            </AnimatePresence>
          </motion.span>
        </h2>
        <p className="statement-sub">
          <Tx text={statement.sub} />
        </p>
      </Reveal>
    </section>
  )
}
