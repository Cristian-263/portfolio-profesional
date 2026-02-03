import { profileData } from '../data';

export const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Proyectos Destacados</h2>
      <div className="projects-grid">
        {profileData.projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            
            <div className="links">
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                Ver Código GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};