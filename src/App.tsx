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
import { Statement } from './components/extras/Statement'
import { Process } from './components/extras/Process'
import { FloatingCta } from './components/extras/FloatingCta'
import './components/extras/extras.css'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Statement />
          <About />
          <Process index="02" />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <FloatingCta />
      </LanguageProvider>
    </MotionConfig>
  )
}

export default App
