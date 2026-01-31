import { Link } from 'react-router-dom';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const getCaseStudyRoute = (title) => {
    const routes = {
      'Scaffold': '/case-study/scaffold',
      'Aurore Menu': '/design/aurore-menu',
    };
    return routes[title] || '#';
  };

  const caseStudyRoute = getCaseStudyRoute(project.title);
  const hasRoute = caseStudyRoute !== '#';

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
        
        {hasRoute ? (
          <Link to={caseStudyRoute} className="project-link">
            View case study →
          </Link>
        ) : (
          <span className="project-link disabled">
            Case study coming soon!
          </span>
        )}
      </div>
      
      {hasRoute ? (
        <Link to={caseStudyRoute} className="project-image-link">
          <div className="project-image">
            {project.image ? (
              <div className="image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                />
                {/* ADD THIS OVERLAY */}
                <div className="image-overlay">
                  <span className="overlay-text">View case study</span>
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
        </Link>
      ) : (
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
      )}
    </article>
  );
}