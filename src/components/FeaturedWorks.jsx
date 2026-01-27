import { useState } from 'react';
import ProjectCard from './ProjectCard';
import './FeaturedWorks.css';

export default function FeaturedWorks() {
  const [activeFilter, setActiveFilter] = useState('Featured');
  
  const filters = ['Featured', 'UX/UI', 'Graphic Design'];
  
  const projects = [
    {
      id: 1,
      title: 'Scaffold',
      description: 'AI powered grant matching and application assistant app for trades students and apprentices in British Columbia.',
      details: '',
      skills: ['Project Management', 'UX/UI Design', 'Front-end development'],
      image: '/images/scaffold-cover.png',
      category: 'UX/UI',
      link: '/case-study/scaffold'
    },
    {
      id: 2,
      title: 'Picki',
      description: 'Event planning app that helps friend groups decide faster. Everyone suggests ideas, Picki randomly picks one for less debating, more doing.',
      details: '',
      skills: ['UX/UI design', 'User testing', 'Wireframe & Prototype'],
      image: '/images/picki-cover.png',
      category: 'UX/UI',
      link: '/case-study/picki'
    },
    {
      id: 3,
      title: 'Aurore Menu Design',
      description: 'Aurore Menu Design project description.',
      details: '',
      skills: ['Graphic Design', 'UI Design'],
      image: '/images/aurore-hero.png',
      category: 'Graphic Design',
      link: '/design/aurore-menu'
    },
    {
      id: 4,
      title: 'Concert Posters',
      description: 'Concert poster series.',
      details: '',
      skills: ['Graphic Design', 'Print Design'],
      image: '/images/poster-cover.png',
      category: 'Graphic Design',
      link: '/design/concert-posters'
    }
  ];

  // Filter logic: Featured shows only UX/UI for now
  const filteredProjects = activeFilter === 'Featured' 
    ? projects.filter(p => p.category === 'UX/UI')
    : projects.filter(p => p.category === activeFilter);

  // Check if we're showing Graphic Design projects
  const isGraphicDesign = activeFilter === 'Graphic Design';

  return (
    <section className="featured-works">
      <div className="works-container">
        <div className="works-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Conditional rendering based on filter */}
        {isGraphicDesign ? (
          // Graphic Design Grid Layout
          <div className="design-grid">
            {filteredProjects.map(project => (
              <a 
                key={project.id} 
                href={project.link} 
                className="design-grid-item"
              >
                <div className="design-grid-image">
                  <img src={project.image} alt={project.title} />
                  <div className="design-grid-overlay">
                    <h3 className="design-grid-title">{project.title}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          // UX/UI Project Cards Layout
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}