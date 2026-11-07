import { personalInfo, projects } from '../data/portfolioData'

/**
 * Projects section with full-width screen layouts and CI/CD architecture diagrams
 */
export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section projects-intro">
        <div className="section-heading reveal">
          <p className="section-label">SOME OF MY WORK</p>
          <h2>
            Featured <span>Projects</span>
          </h2>
        </div>
      </div>

      {projects.map((project, index) => (
        <div
          className={`project-screen ${index % 2 !== 0 ? 'reverse' : ''}`}
          key={project.title}
        >
          {/* Project Details */}
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
              href={personalInfo.contactDetails.github}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              VIEW ON GITHUB ↗
            </a>
          </div>

          {/* Architecture / Pipeline Diagram */}
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
                      onError={(e) => {
                        e.currentTarget.style.visibility = 'hidden'
                      }}
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
                  <div className="connector">
                    <span />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
