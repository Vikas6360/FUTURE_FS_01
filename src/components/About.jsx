import { certifications, personalInfo, stats, timeline } from '../data/portfolioData'

/**
 * About section: Personal bio, key stats, experience/education cards, and certifications
 */
export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-heading reveal">
        <p className="section-label">GET TO KNOW ME</p>
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-text reveal">
          <h3>{personalInfo.aboutHeading}</h3>
          {personalInfo.aboutBio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

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
          {timeline.map((card, index) => (
            <div className="info-card" key={index}>
              <p className="info-label">{card.type}</p>
              <h4>{card.title}</h4>
              <p>{card.place}</p>
              <span>{card.duration}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="cert-block reveal">
        <p className="info-label">CERTIFICATIONS</p>
        <div className="cert-list">
          {certifications.map((cert) => (
            <span className="cert-chip" key={cert}>
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
