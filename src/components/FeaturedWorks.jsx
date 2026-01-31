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
      image: '/images/picki-cover.jpg',
      category: 'UX/UI',
      link: '/case-study/picki'
    },
    // {
    //   id: 3,
    //   title: 'Aurore Menu Design',
    //   description: 'Aurore Menu Design project description.',
    //   details: '',
    //   skills: ['Graphic Design', 'UI Design'],
    //   image: '/images/aurore-hero.png',
    //   category: 'Graphic Design',
    //   link: '/design/aurore-menu'
    // },
  ];

  // Filter logic: Featured shows only UX/UI for now
  const filteredProjects = activeFilter === 'Featured' 
    ? projects.filter(p => p.category === 'UX/UI')
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

        {/* Show coming soon for Graphic Design, otherwise show projects */}
        <div className="projects-grid">
          {activeFilter === 'Graphic Design' ? (
            <div className="coming-soon-message">
              <p>Graphic design projects coming soon!</p>
            </div>
          ) : (
            filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}