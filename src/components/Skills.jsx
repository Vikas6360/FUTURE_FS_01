import { skillGroups } from '../data/portfolioData'

/**
 * Skills section displaying technical proficiencies by category
 */
export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-heading reveal">
        <p className="section-label">WHAT I WORK WITH</p>
        <h2>
          My <span>Skills</span>
        </h2>
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
                    alt={`${skill.name} logo`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.visibility = 'hidden'
                    }}
                  />
                </div>
                <h4>{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
