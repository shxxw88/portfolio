import { Link } from 'react-router-dom';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const getCaseStudyRoute = (title) => {
    const routes = {
      'Scaffold': '/case-study/scaffold',
      'Picki': '/case-study/picki',
      'Aurore Menu Design': '/design/aurore-menu',
      'Daily Coffee Project': '/design/daily-coffee',
      'Iceland Guide': '/design/iceland-guide'
    };
    return routes[title] || '#';
  };

  const caseStudyRoute = getCaseStudyRoute(project.title);
  const hasRoute = caseStudyRoute !== '#';
  const noCaption = project.noCaption || false;

  return (
    <article className={`project-card ${noCaption ? 'graphic-design-card' : ''}`}>
      
      {/* Image */}
      {hasRoute ? (
        <Link to={caseStudyRoute} className="project-image-link">
          <div className="project-image">
            <div className="image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
              <div className="image-overlay">
                <span className="overlay-text">View project →</span>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div className="project-image">
          <div className="image-container">
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <div className="image-overlay">
              <span className="overlay-text">Coming soon!</span>
            </div>
          </div>
        </div>
      )}

      {/* Caption - hidden for graphic design projects */}
      {!noCaption && (
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
      )}
    </article>
  );
}