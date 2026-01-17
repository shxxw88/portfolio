import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './CaseStudyLayout.css';

function CaseStudyLayout({ 
  title, 
  description, 
  role, 
  duration, 
  skills, 
  heroImage,
  children 
}) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="case-study-container">
      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
      
      {/* Back Link */}
      <Link to="/" className="back-link">Back</Link>

      {/* Hero Section */}
      <section className="case-study-hero">
        <div className="hero-left">
          <h1 className="cs-hero-title">{title}</h1>
          <p className="cs-hero-description">{description}</p>

          {/* Project Info Grid */}
          <div className="cs-hero-info">
            <div className="info-column">
              <h3 className="info-heading">Role</h3>
              {role.map((r, index) => (
                <p key={index} className="info-text">{r}</p>
              ))}
            </div>

             <div className="info-column">
              <h3 className="info-heading">Skills</h3>
              {skills.map((skill, index) => (
                <p key={index} className="info-text">{skill}</p>
              ))}
            </div>

            <div className="info-column">
              <h3 className="info-heading">Duration</h3>
              <p className="info-text">{duration}</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-right">
          <div className="image-placeholder">
            <img src={heroImage} alt={`${title} project`} />
          </div>
        </div>
      </section>

      {/* Content Sections - This is where custom content goes */}
      {children}
    </div>
  );
}

export default CaseStudyLayout;