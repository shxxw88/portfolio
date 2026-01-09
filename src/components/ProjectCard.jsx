import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        
        <p className="project-description">{project.description}</p>
        
        <p className="project-details">{project.details}</p>
        
        <div className="project-skills">
          {project.skills && project.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
        
        <a href="#" className="project-link">
          Case study coming soon!
        </a>
      </div>
      
      <div className="project-image">
        {project.image ? (
          <div className="image-container">
            <img 
              src={project.image} 
              alt={project.title}
              className="project-img"
            />
            <div className="image-overlay">
              <span className="overlay-text">Case study coming soon!</span>
            </div>
          </div>
        ) : (
          <div className="image-placeholder">
            <div className="phone-mockups">
              <div className="phone-mockup phone-1"></div>
              <div className="phone-mockup phone-2"></div>
              <div className="phone-mockup phone-3"></div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}