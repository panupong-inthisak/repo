import { MotionConfig } from 'motion/react'
import { LanguageProvider } from './i18n/LanguageContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </LanguageProvider>
    </MotionConfig>
  )
}

export default App
