import { useEffect, useState } from 'react'
import { navLinks, personalInfo } from '../data/portfolioData'

/**
 * Top fixed navigation bar with fullscreen mobile/desktop overlay menu
 */
export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock background scroll when menu is active
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          {personalInfo.shortName}
        </a>

        <div className="navbar-actions">
          <button
            className="theme-quick-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? 'Close ×' : 'Menu +'}
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="menu-inner">
          <nav className="menu-links">
            {navLinks.map((link, index) => (
              <a key={link.label} href={link.href} onClick={closeMenu}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="menu-side">
            <p className="info-label">CONNECT</p>
            <a
              href={personalInfo.contactDetails.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Resume ↗
            </a>
            <a
              href={personalInfo.contactDetails.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href={personalInfo.contactDetails.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a href={`mailto:${personalInfo.contactDetails.email}`}>
              {personalInfo.contactDetails.email}
            </a>

            <button className="menu-theme" onClick={toggleTheme}>
              {theme === 'dark' ? '☀ Switch to light' : '☾ Switch to dark'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
