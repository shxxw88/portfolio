import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './FeaturedWorks.css';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function FeaturedWorks() {
  const [activeFilter, setActiveFilter] = useState('UX/UI');
  const [dotStyle, setDotStyle] = useState({ left: 0 });
  const btnRefs = useRef([]);
  const filters = ['UX/UI', 'Graphic Design'];

  useEffect(() => {
    const index = filters.indexOf(activeFilter);
    const btn = btnRefs.current[index];
    if (btn) {
      setDotStyle({ left: btn.offsetLeft + btn.offsetWidth / 2 - 3 });
    }
  }, [activeFilter]);

  const projects = [
    {
      id: 1,
      title: 'Scaffold',
      description: 'Reducing financial barriers to trades training by centralizing fragmented grant databases and matching BC apprentices to relevant funding opportunities.',
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
      featured: true
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
    {
      id: 6,
      title: 'VCH Parenting Skills',
      description: 'Refining the digital learning experience for Vancouver Coastal Health\'s parenting education program through UI component improvements and visual design.',
      skills: ['UX/UI Design', 'Visual Design', 'Brand Identity'],
      image: '/images/vch-cover.png',
      category: 'UX/UI',
      link: '/design/parenting-skills',
    }
  ];

  const filteredProjects = projects.filter(p => p.category === activeFilter);

  return (
    <section className="featured-works">
      <div className="works-container">

        {/* Filters */}
        <div className="works-filters">
          <div className="filter-inner">
            {filters.map((filter, i) => (
              <>
                <button
                  key={filter}
                  ref={el => btnRefs.current[i] = el}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
                {i < filters.length - 1 && (
                  <span className="filter-slash">/</span>
                )}
              </>
            ))}
            <div className="filter-dot" style={{ left: dotStyle.left }} />
          </div>
        </div>

        {/* UX/UI Grid */}
        {activeFilter === 'UX/UI' && (
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Graphic Design Grid */}
        {activeFilter === 'Graphic Design' && (
          <div className="graphic-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="graphic-item"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}