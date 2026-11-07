import { useEffect, useRef, useState } from 'react'
import { personalInfo } from '../data/portfolioData'

/**
 * Hero section with kinetic typography, interactive glow effect, and typing roles
 */
export default function Hero() {
  const [roleText, setRoleText] = useState('')
  const heroRef = useRef(null)
  const glowRef = useRef(null)
  const letterRefs = useRef([])

  // Typing effect for multiple roles
  useEffect(() => {
    const roles = personalInfo.roles
    let roleIndex = 0
    let charIndex = 0
    let isDeleting = false

    const typingInterval = setInterval(() => {
      const currentRole = roles[roleIndex]

      if (!isDeleting) {
        charIndex++
        setRoleText(currentRole.slice(0, charIndex))
        if (charIndex === currentRole.length) isDeleting = true
      } else {
        charIndex--
        setRoleText(currentRole.slice(0, charIndex))
        if (charIndex === 0) {
          isDeleting = false
          roleIndex = (roleIndex + 1) % roles.length
        }
      }
    }, 110)

    return () => clearInterval(typingInterval)
  }, [])

  // Kinetic typography stretching on mouse move
  const updateLetters = (clientX, clientY, isActive) => {
    letterRefs.current.forEach((el) => {
      if (!el) return
      let influence = 0.35

      if (isActive) {
        const box = el.getBoundingClientRect()
        const dx = clientX - (box.left + box.width / 2)
        const dy = clientY - (box.top + box.height / 2)
        influence = Math.max(0, 1 - Math.hypot(dx, dy) / 350)
      }

      el.style.setProperty('--sx', (0.45 + influence * 0.85).toFixed(2))
      el.style.setProperty('--op', (0.4 + influence * 0.6).toFixed(2))
    })
  }

  useEffect(() => {
    updateLetters(0, 0, false)
  }, [])

  const handlePointerMove = (e) => {
    if (glowRef.current && heroRef.current) {
      const box = heroRef.current.getBoundingClientRect()
      glowRef.current.style.left = `${e.clientX - box.left}px`
      glowRef.current.style.top = `${e.clientY - box.top}px`
    }
    updateLetters(e.clientX, e.clientY, true)
  }

  const handlePointerLeave = () => {
    updateLetters(0, 0, false)
  }

  const letters = personalInfo.name.split('')

  return (
    <section
      id="home"
      className="hero"
      ref={heroRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="hero-glow" ref={glowRef} />

      <p className="hero-tag">
        <i /> {personalInfo.tagline}
      </p>

      <h1 className="name-letters" aria-label={personalInfo.name}>
        {letters.map((char, index) =>
          char === ' ' ? (
            <span className="name-space" key={index} />
          ) : (
            <span
              key={index}
              ref={(el) => (letterRefs.current[index] = el)}
              className={`name-letter ${index >= 6 ? 'accent' : ''}`}
              aria-hidden="true"
            >
              {char}
            </span>
          )
        )}
      </h1>

      <div className="hero-bottom">
        <div className="hero-left">
          <p className="typing-text">
            {roleText}
            <span className="cursor">|</span>
          </p>
          <p className="hero-description">{personalInfo.heroDescription}</p>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            Explore Projects
          </a>
          <a
            href={personalInfo.contactDetails.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            Resume ↗
          </a>
          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>
      </div>

      <a href="#about" className="scroll-cue">
        <span>SCROLL</span>
        <span className="scroll-arrow">↓</span>
      </a>
    </section>
  )
}
