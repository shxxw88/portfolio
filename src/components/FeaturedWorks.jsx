import { useState } from 'react';
import ProjectCard from './ProjectCard';
import './FeaturedWorks.css';

export default function FeaturedWorks() {
  const [activeFilter, setActiveFilter] = useState('UX/UI');
  
  const filters = ['UX/UI', 'Graphic Design'];
  
  const projects = [
    {
      id: 1,
      title: 'Scaffold',
      description: 'Reducing financial barriers to trades training by centralizing fragmented grant databases and matching BC apprentices to relevant funding opportunities',
      skills: ['Project Management', 'UX/UI Design', 'Front-end development'],
      image: '/images/scaffold-cover.png',
      category: 'UX/UI',
      link: '/case-study/scaffold'
    },
    {
      id: 2,
      title: 'Picki',
      description: 'Getting friend groups from "what should we do?" to actually doing it by taking the pressure out of choosing.',
      skills: ['Product design', 'Usability testing', 'Prototyping'],
      image: '/images/picki-cover.jpg',
      category: 'UX/UI',
      link: '/case-study/picki'
    },
    {
      id: 3,
      title: 'Aurore Menu Design',
      description: '',
      skills: [],
      image: '/images/aurore-hero.png',
      category: 'Graphic Design',
      link: '/design/aurore-menu',
      noCaption: true,
      featured: true // Large card
    },
    {
      id: 4,
      title: 'Daily Coffee Project',
      description: '',
      skills: [],
      image: '/images/coffee-hero.png',
      category: 'Graphic Design',
      link: '/design/daily-coffee',
      noCaption: true
    },
    {
      id: 5,
      title: 'Iceland Guide',
      description: '',
      skills: [],
      image: '/images/iceland-hero.png',
      category: 'Graphic Design',
      link: '/design/iceland-guide',
      noCaption: true
    },
  ];

  const filteredProjects = projects.filter(p => p.category === activeFilter);
  const graphicProjects = filteredProjects.filter(p => p.category === 'Graphic Design');
  const featuredGraphic = graphicProjects.find(p => p.featured);
  const smallGraphic = graphicProjects.filter(p => !p.featured);

  return (
    <section className="featured-works">
      <div className="works-container">
        {/* Filters */}
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

        {/* UX/UI Grid */}
        {activeFilter === 'UX/UI' && (
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Graphic Design Grid */}
      
        {activeFilter === 'Graphic Design' && (
  <div className="graphic-grid">
    {filteredProjects.map((project, index) => (
      <div 
        key={project.id} 
        className={index === filteredProjects.length - 1 ? 'graphic-item-full' : 'graphic-item'}
      >
        <ProjectCard project={project} />
      </div>
    ))}
  </div>
)}

      </div>
    </section>
  );
}