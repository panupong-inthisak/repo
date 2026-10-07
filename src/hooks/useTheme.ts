import { useCallback, useEffect, useState, type MouseEvent } from 'react'

type Theme = 'light' | 'dark'
const STORAGE_KEY = 'theme'

function initialTheme(): Theme {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // ignore
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  // Circular reveal from the button using the View Transitions API when available
  const toggle = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const next: Theme = theme === 'dark' ? 'light' : 'dark'
      const apply = () => {
        document.documentElement.dataset.theme = next
        setTheme(next)
        try {
          localStorage.setItem(STORAGE_KEY, next)
        } catch {
          // ignore
        }
      }

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!document.startViewTransition || reduced) {
        apply()
        return
      }

      const x = e.clientX
      const y = e.clientY
      const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
      const transition = document.startViewTransition(apply)
      transition.ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 550, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' },
        )
      })
    },
    [theme],
  )

  return { theme, toggle }
}
