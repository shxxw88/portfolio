import { useState } from 'react';
import ProjectCard from './ProjectCard';
import './FeaturedWorks.css';

export default function FeaturedWorks() {
  const [activeFilter, setActiveFilter] = useState('Featured');
  
  const filters = ['Featured', 'UX/UI', 'Design'];
  
  const projects = [
    {
      id: 1,
      title: 'Scaffold',
      description: 'AI powered grant matching and application assistant app for trades students and apprentices in British Columbia.',
      details: 'Scaffold is a native iOS app that simplifies grant discovery, eligibility, and creates tailored application drafts based on the user\'s profile.',
      role: 'Project Management',
      tools: ['UX/UI', 'iOS Development'],
      image: '/project-scaffold.png',
      category: 'UX/UI'
    }
    // Add more projects here
  ];

  const filteredProjects = activeFilter === 'Featured' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}