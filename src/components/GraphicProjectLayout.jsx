import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './GraphicProjectLayout.css';

function GraphicProjectLayout({ 
  title, 
  concept,
  tools,
  heroImage,
  children 
}) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <div className="graphic-project-container">
      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
      
      {/* Back Link */}
      <Link to="/" className={`gp-back-link ${scrolled ? 'scrolled' : ''}`}>
        <span className="arrow">←</span> Back
      </Link>

      {/* Hero Image */}
      <div className="gp-hero-image">
        {heroImage ? (
          <img src={heroImage} alt={`${title} hero`} />
        ) : (
          <div className="image-placeholder"></div>
        )}
      </div>

      {/* Project Title */}
      <h1 className="gp-title">{title}</h1>

      {/* Concept and Tools Section */}
      <div className="gp-info-grid">
        <div className="gp-info-column gp-concept-column">
          <h3 className="gp-info-heading">Concept</h3>
                  {Array.isArray(concept) ? (
            concept.map((paragraph, index) => (
              <p key={index} className="gp-info-text">{paragraph}</p>
            ))
          ) : (
            <p className="gp-info-text">{concept}</p>
          )}
        </div>

        <div className="gp-info-column">
          <h3 className="gp-info-heading">Tools</h3>
          <div className="gp-tools-list">
            {tools.map((tool, index) => (
              <p key={index} className="gp-info-text">{tool}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Content Area */}
      <div className="gp-content">
        {children}
      </div>
    </div>
  );
}

export default GraphicProjectLayout;