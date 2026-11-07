import { useEffect, useState } from 'react'
import './App.css'

// Modular Components
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)

  // Toggle dark/light theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  // Track scroll progress and scroll-to-top button threshold
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0)
      setShowTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll animations using IntersectionObserver
  useEffect(() => {
    if (loading) return

    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [loading])

  return (
    <div className={`app ${theme}`}>
      {/* Top Reading Progress Bar */}
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      {/* Intro Loader */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Header Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer & Back to Top */}
      <Footer showTopButton={showTop} />
    </div>
  )
}
