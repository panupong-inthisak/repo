import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { Lang, Text } from '../data/content'

const STORAGE_KEY = 'lang'

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'th' || saved === 'en') return saved
  } catch {
    // storage unavailable — fall through to browser language
  }
  return navigator.language.toLowerCase().startsWith('th') ? 'th' : 'en'
}

type LanguageValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (text: Text) => string
}

const LanguageContext = createContext<LanguageValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore
    }
  }, [])

  const t = useCallback((text: Text) => text[lang], [lang])

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}

/** Translated text that cross-fades when the language changes. */
export function Tx({ text }: { text: Text }) {
  const { lang } = useLanguage()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={lang}
        className="tx"
        initial={{ opacity: 0, y: 6, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -6, filter: 'blur(4px)' }}
        transition={{ duration: 0.2 }}
      >
        {text[lang]}
      </motion.span>
    </AnimatePresence>
  )
}
