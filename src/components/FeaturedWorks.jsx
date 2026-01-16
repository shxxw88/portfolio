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