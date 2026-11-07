import { useState } from 'react'
import { personalInfo } from '../data/portfolioData'

/**
 * Contact section with direct links and an interactive email message form
 */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const { contactDetails } = personalInfo

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
    )
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading reveal">
        <p className="section-label">LET'S CONNECT</p>
        <h2>
          Get In <span>Touch</span>
        </h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info reveal">
          <h3>{personalInfo.contactHeading}</h3>
          <p>{personalInfo.contactDescription}</p>

          <div className="contact-list">
            <a href={`tel:${contactDetails.phone}`} className="contact-item">
              <span>PHONE</span>
              {contactDetails.phone}
            </a>
            <a
              href={`mailto:${contactDetails.email}`}
              className="contact-item"
            >
              <span>EMAIL</span>
              {contactDetails.email}
            </a>
            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span>LINKEDIN</span>
              linkedin.com/in/vikas-sm63
            </a>
            <a
              href={contactDetails.github}
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span>GITHUB</span>
              github.com/Vikas6360
            </a>
            <div className="contact-item">
              <span>LOCATION</span>
              {contactDetails.location}
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
              placeholder="Tell me about your role or project..."
              required
            />
          </label>

          <button type="submit" className="primary-button">
            Send Message ↗
          </button>
        </form>
      </div>
    </section>
  )
}
