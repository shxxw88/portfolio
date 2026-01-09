import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        
        <p className="project-description">{project.description}</p>
        
        <p className="project-details">{project.details}</p>
        
        <div className="project-meta">
          <div className="meta-item">
            <span className="meta-label">Project Management</span>
            <span className="meta-value">{project.role}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Tools</span>
            <span className="meta-value">{project.tools.join(' • ')}</span>
          </div>
        </div>
        
        <a href="#" className="project-link">
          Read case study
        </a>
      </div>
      
      <div className="project-image">
        <div className="image-placeholder">
          {/* Project mockup/screenshot goes here */}
          <div className="phone-mockups">
            <div className="phone-mockup phone-1"></div>
            <div className="phone-mockup phone-2"></div>
            <div className="phone-mockup phone-3"></div>
          </div>
        </div>
      </div>
    </article>
  );
}