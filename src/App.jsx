import { useEffect, useRef, useState } from 'react'
import './App.css'

const icon = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-${variant}.svg`

const skillGroups = [
  {
    title: 'Cloud & DevOps',
    note: 'AWS: EC2 · IAM · S3 · VPC · RDS · Auto Scaling · Load Balancing · CloudWatch',
    items: [
      { name: 'AWS', logo: icon('amazonwebservices') },
      { name: 'Docker', logo: icon('docker') },
      { name: 'Kubernetes', logo: icon('kubernetes', 'plain') },
      { name: 'Jenkins', logo: icon('jenkins') },
      { name: 'Ansible', logo: icon('ansible') },
      { name: 'Terraform', logo: icon('terraform') },
      { name: 'Git', logo: icon('git') },
      { name: 'GitHub', logo: icon('github') },
      { name: 'Maven', logo: icon('maven') }
    ]
  },
  {
    title: 'Linux & Scripting',
    items: [
      { name: 'Linux', logo: icon('linux') },
      { name: 'Ubuntu', logo: icon('ubuntu', 'plain') },
      { name: 'Bash', logo: icon('bash') }
    ]
  },
  {
    title: 'Backend & Web',
    items: [
      { name: 'Java', logo: icon('java') },
      { name: 'Spring Boot', logo: icon('spring') },
      { name: 'MySQL', logo: icon('mysql') },
      { name: 'Redis', logo: icon('redis') },
      { name: 'Nginx', logo: icon('nginx') },
      { name: 'Tomcat', logo: icon('tomcat') },
      { name: 'JavaScript', logo: icon('javascript') },
      { name: 'React', logo: icon('react') },
      { name: 'Node.js', logo: icon('nodejs') },
      { name: 'HTML', logo: icon('html5') },
      { name: 'CSS', logo: icon('css3') }
    ]
  },
  {
    title: 'Tools',
    items: [
      { name: 'VS Code', logo: icon('vscode') },
      { name: 'Eclipse', logo: icon('eclipse') },
      { name: 'Postman', logo: icon('postman') }
    ]
  }
]

const projects = [
  {
    type: 'FULL-STACK + DEVOPS',
    title: 'Student Management System',
    description:
      'A full-stack web application for managing student records, containerized and deployed automatically through a Jenkins CI/CD pipeline on AWS.',
    points: [
      'Built with Spring Boot, MySQL, Thymeleaf, HTML and CSS',
      'REST APIs and CRUD operations using Hibernate/JPA',
      'Containerized with Docker and deployed via Jenkins on AWS'
    ],
    tech: ['Spring Boot', 'MySQL', 'Docker', 'Jenkins', 'Kubernetes'],
    flow: [
      { label: 'Spring Boot App', sub: 'Thymeleaf + REST APIs', logo: icon('spring') },
      { label: 'MySQL', sub: 'Hibernate / JPA', logo: icon('mysql') },
      { label: 'Docker Image', sub: 'Containerized app', logo: icon('docker') },
      { label: 'Jenkins Pipeline', sub: 'Automated build & deploy', logo: icon('jenkins') },
      { label: 'AWS', sub: 'Hosted on EC2', logo: icon('amazonwebservices') }
    ]
  },
  {
    type: 'CI/CD AUTOMATION',
    title: 'CI/CD Pipeline using Jenkins',
    description:
      'An end-to-end pipeline that takes code from GitHub to a running container behind Nginx with no manual steps.',
    points: [
      'Automated source checkout, Maven build and Docker image creation',
      'Automated deployment behind Nginx',
      'Cut deployment time from 30 min (manual) to under 5 min'
    ],
    tech: ['Jenkins', 'GitHub', 'Maven', 'Docker', 'Nginx'],
    flow: [
      { label: 'GitHub', sub: 'Source checkout', logo: icon('github') },
      { label: 'Jenkins', sub: 'Pipeline trigger', logo: icon('jenkins') },
      { label: 'Maven', sub: 'Build & package', logo: icon('maven') },
      { label: 'Docker', sub: 'Image creation', logo: icon('docker') },
      { label: 'Nginx', sub: 'Deployment', logo: icon('nginx') }
    ]
  },
  {
    type: 'CONTAINER ORCHESTRATION',
    title: 'Kubernetes Deployment',
    description:
      'Containerized Spring Boot applications deployed on Kubernetes using declarative YAML manifests, with rolling updates for zero-downtime releases.',
    points: [
      'Deployment, Service, ConfigMap and Ingress manifests',
      'Managed applications with kubectl',
      'Performed rolling updates'
    ],
    tech: ['Docker', 'Kubernetes', 'YAML', 'kubectl'],
    flow: [
      { label: 'Docker Image', sub: 'Container image', logo: icon('docker') },
      { label: 'Deployment', sub: 'Rolling updates', logo: icon('kubernetes', 'plain') },
      { label: 'Service', sub: 'Internal networking', logo: icon('kubernetes', 'plain') },
      { label: 'ConfigMap', sub: 'App configuration', logo: icon('kubernetes', 'plain') },
      { label: 'Ingress', sub: 'External access', logo: icon('kubernetes', 'plain') }
    ]
  }
]

const stats = [
  { value: '50%', label: 'Fewer manual deployment steps' },
  { value: '<5 min', label: 'Automated deploy time' },
  { value: '3', label: 'DevOps projects built' }
]

const certifications = [
  'Java Full Stack with DevOps – JSpiders',
  'Linux Unhatched – Cisco Networking Academy',
  'Networking Basics – Cisco Networking Academy',
  'IBM Cloud Computing Fundamentals',
  'IBM Artificial Intelligence Fundamentals'
]

const menuLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

const nameLetters = 'VIKAS S M'.split('')

function App() {
  const [theme, setTheme] = useState('dark')
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)
  const [role, setRole] = useState('')
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [loaderOut, setLoaderOut] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const heroRef = useRef(null)
  const glowRef = useRef(null)
  const letterRefs = useRef([])

  /* LOADER (about 2 seconds) */
  useEffect(() => {
    const duration = 2000
    const start = performance.now()
    let frame
    let timeout

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      setCount(Math.round(p * 100))

      if (p < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setLoaderOut(true)
        timeout = setTimeout(() => setLoading(false), 600)
      }
    }

    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(timeout)
    }
  }, [])

  /* LOCK SCROLL WHILE LOADER / MENU IS OPEN */
  useEffect(() => {
    document.body.style.overflow = loading || menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading, menuOpen])

  /* CLOSE MENU WITH ESC */
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  /* SCROLL PROGRESS + BACK TO TOP */
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight

      setProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0)
      setShowTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* TYPING ROLE */
  useEffect(() => {
    const roles = [
      'DevOps Engineer',
      'AWS Cloud Enthusiast',
      'Java Full Stack Developer'
    ]

    let index = 0
    let letter = 0
    let deleting = false

    const timer = setInterval(() => {
      const current = roles[index]

      if (!deleting) {
        letter++
        setRole(current.slice(0, letter))
        if (letter === current.length) deleting = true
      } else {
        letter--
        setRole(current.slice(0, letter))
        if (letter === 0) {
          deleting = false
          index = (index + 1) % roles.length
        }
      }
    }, 110)

    return () => clearInterval(timer)
  }, [])

  /* SCROLL REVEAL */
  useEffect(() => {
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

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  /* HERO NAME: LETTERS STRETCH / MORPH WITH CURSOR */
  const applyLetters = (x, y, active) => {
    letterRefs.current.forEach((el) => {
      if (!el) return

      let influence = 0.35

      if (active) {
        const box = el.getBoundingClientRect()
        const dx = x - (box.left + box.width / 2)
        const dy = y - (box.top + box.height / 2)
        influence = Math.max(0, 1 - Math.hypot(dx, dy) / 350)
      }

      el.style.setProperty('--sx', (0.45 + influence * 0.85).toFixed(2))
      el.style.setProperty('--op', (0.4 + influence * 0.6).toFixed(2))
    })
  }

  useEffect(() => {
    applyLetters(0, 0, false)
  }, [])

  const moveHero = (event) => {
    if (glowRef.current && heroRef.current) {
      const box = heroRef.current.getBoundingClientRect()
      glowRef.current.style.left = `${event.clientX - box.left}px`
      glowRef.current.style.top = `${event.clientY - box.top}px`
    }
    applyLetters(event.clientX, event.clientY, true)
  }

  const leaveHero = () => applyLetters(0, 0, false)

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const closeMenu = () => setMenuOpen(false)
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value })

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`
    )

    window.location.href = `mailto:vikas.sm732@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className={`app ${theme}`}>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      {/* LOADER */}
      {loading && (
        <div className={`loader ${loaderOut ? 'out' : ''}`}>
          <div className="loader-count">{count}</div>
          <p className="loader-name">VIKAS S M</p>
          <div className="loader-bar">
            <span style={{ width: `${count}%` }} />
          </div>
        </div>
      )}

      {/* TOP BAR */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>VS.</a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
        >
          {menuOpen ? 'Close ×' : 'Menu +'}
        </button>
      </header>

      {/* MENU OVERLAY */}
      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="menu-inner">
          <nav className="menu-links">
            {menuLinks.map((link, index) => (
              <a key={link.label} href={link.href} onClick={closeMenu}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="menu-side">
            <p className="info-label">CONNECT</p>

            <a
              href="/Vikas_Devops_resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume ↗
            </a>
            <a
              href="https://linkedin.com/in/vikas-sm63"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/Vikas6360"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a href="mailto:vikas.sm732@gmail.com">vikas.sm732@gmail.com</a>

            <button className="menu-theme" onClick={toggleTheme}>
              {theme === 'dark' ? '☀ Switch to light' : '☾ Switch to dark'}
            </button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section
        id="home"
        className="hero"
        ref={heroRef}
        onPointerMove={moveHero}
        onPointerLeave={leaveHero}
      >
        <div className="hero-glow" ref={glowRef} />

        <p className="hero-tag">
          <i /> FROM COMMIT TO CLOUD, AUTOMATED.
        </p>

        <h1 className="name-letters" aria-label="Vikas S M">
          {nameLetters.map((char, index) =>
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
              {role}<span className="cursor">|</span>
            </p>
            <p className="hero-description">
              I build, containerize and automate deployments on AWS using
              Docker, Kubernetes and Jenkins, turning ideas into reliable,
              running systems.
            </p>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore Projects
            </a>
            <a
              href="/Vikas_Devops_resume.pdf"
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

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-heading reveal">
          <p className="section-label">GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <h3>Curious mind. Automation mindset.</h3>
            <p>
              I'm a final-year Computer Science and Engineering student
              and a DevOps Engineer in the making, with hands-on experience
              in Linux, AWS, Docker, Kubernetes, Jenkins, Ansible and CI/CD
              automation.
            </p>
            <p>
              During my internship at JSpiders Bengaluru, I built CI/CD
              pipelines with Jenkins, GitHub and Maven, deployed
              containerized Spring Boot applications on AWS EC2, and wrote
              Ansible playbooks for configuration management and automated
              deployment.
            </p>
            <p>
              I also have a Java Full Stack background (Spring Boot, MySQL,
              REST APIs), so I understand the applications I deploy, not
              just the pipelines around them. I'm looking for a fresher
              DevOps / Cloud role where I can keep learning and ship
              reliable infrastructure.
            </p>

            <div className="stats-row">
              {stats.map((item) => (
                <div className="stat" key={item.label}>
                  <h4>{item.value}</h4>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-side reveal">
            <div className="info-card">
              <p className="info-label">EDUCATION</p>
              <h4>B.E. – Computer Science and Engineering</h4>
              <p>Vivekananda Institute of Technology, VTU</p>
              <span>2022 – 2026</span>
            </div>

            <div className="info-card">
              <p className="info-label">EXPERIENCE</p>
              <h4>DevOps and Full-Stack Java Intern</h4>
              <p>JSpiders Bengaluru</p>
              <span>Feb 2026 – Present</span>
            </div>

            <div className="info-card">
              <p className="info-label">PRE-UNIVERSITY</p>
              <h4>Poorna Prajna PU College</h4>
              <p>Bengaluru</p>
              <span>2020 – 2022</span>
            </div>
          </div>
        </div>

        <div className="cert-block reveal">
          <p className="info-label">CERTIFICATIONS</p>
          <div className="cert-list">
            {certifications.map((cert) => (
              <span className="cert-chip" key={cert}>{cert}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-heading reveal">
          <p className="section-label">WHAT I WORK WITH</p>
          <h2>My <span>Skills</span></h2>
        </div>

        {skillGroups.map((group) => (
          <div className="skill-group reveal" key={group.title}>
            <h3 className="skill-group-title">{group.title}</h3>
            {group.note && <p className="skill-note">{group.note}</p>}

            <div className="skills-grid">
              {group.items.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <div className="skill-logo">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      loading="lazy"
                      onError={(e) => { e.currentTarget.style.visibility = 'hidden' }}
                    />
                  </div>
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects-section">
        <div className="section projects-intro">
          <div className="section-heading reveal">
            <p className="section-label">SOME OF MY WORK</p>
            <h2>Featured <span>Projects</span></h2>
          </div>
        </div>

        {projects.map((project, index) => (
          <div
            className={`project-screen ${index % 2 ? 'reverse' : ''}`}
            key={project.title}
          >
            <div className="project-info reveal">
              <span className="project-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <ul className="project-points">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="tech-tags">
                {project.tech.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                href="https://github.com/Vikas6360"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                VIEW ON GITHUB ↗
              </a>
            </div>

            <div className="diagram reveal">
              <p className="info-label">PIPELINE / ARCHITECTURE</p>

              {project.flow.map((node, i) => (
                <div className="diagram-item" key={node.label}>
                  <div className="node">
                    <div className="node-logo">
                      <img
                        src={node.logo}
                        alt={node.label}
                        loading="lazy"
                        onError={(e) => { e.currentTarget.style.visibility = 'hidden' }}
                      />
                    </div>
                    <div>
                      <h4>{node.label}</h4>
                      <p>{node.sub}</p>
                    </div>
                    <span className="node-step">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {i < project.flow.length - 1 && (
                    <div className="connector"><span /></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="section-heading reveal">
          <p className="section-label">LET'S CONNECT</p>
          <h2>Get In <span>Touch</span></h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Looking for a DevOps fresher?</h3>
            <p>
              I'm open to DevOps and cloud opportunities, collaboration, and
              connecting with people in technology.
            </p>

            <div className="contact-list">
              <a href="tel:+916360266090" className="contact-item">
                <span>PHONE</span>
                +91 6360266090
              </a>
              <a href="mailto:vikas.sm732@gmail.com" className="contact-item">
                <span>EMAIL</span>
                vikas.sm732@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/vikas-sm63"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <span>LINKEDIN</span>
                linkedin.com/in/vikas-sm63
              </a>
              <a
                href="https://github.com/Vikas6360"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <span>GITHUB</span>
                github.com/Vikas6360
              </a>
              <div className="contact-item">
                <span>LOCATION</span>
                Bangalore, Karnataka
              </div>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <label>
              NAME
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>

            <label>
              EMAIL
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              MESSAGE
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the role or opportunity..."
                required
              />
            </label>

            <button type="submit" className="primary-button">
              Send Message ↗
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 VIKAS S M. ALL RIGHTS RESERVED.</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>

      {showTop && (
        <button className="top-button" onClick={goTop}>↑</button>
      )}
    </div>
  )
}

export default App