import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './CaseStudyLayout.css';

function CaseStudyLayout({
  title,
  description,
  recognition,
  role,
  duration,
  skills,
  heroImage,
  heroClassName,
  demoUrl,
  demoLabel = "View Demo →",
  repoUrl,
  disclaimer,
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
      <Link to="/" className="back-link">
        <span className="arrow">←</span> Back
      </Link>

      {/* Hero Section - can have custom class */}
      <section className={heroClassName || "case-study-hero"}>
        <div className="hero-left">
          <h1 className="cs-hero-title">{title}</h1>
          
          {/* Updated description handling */}
          <div className="cs-hero-description">
            {Array.isArray(description) ? (
              description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{description}</p>
            )}
          </div>

          {/* Recognition Section (Optional) */}
          {recognition && (
            <div className="cs-recognition">
              <h3 className="cs-recognition-heading">Recognition</h3>
              <p className="cs-recognition-text">{recognition}</p>
            </div>
          )}

          {disclaimer && (
            <div className="cs-disclaimer">{disclaimer}</div>
          )}

          <hr className="cs-hero-divider" />

          {/* Project Info Grid */}
          <div className="cs-hero-info">
            <div className="info-column">
              <h3 className="info-heading">Role</h3>
              {role.map((r, index) => (
                <p key={index} className="info-text">{r}</p>
              ))}
            </div>

            <div className="info-column">
              <h3 className="info-heading">Timeline</h3>
              <p className="info-text">{duration}</p>
            </div>

            <div className="info-column">
              <h3 className="info-heading">Skills</h3>
              {skills.map((skill, index) => (
                <p key={index} className="info-text">{skill}</p>
              ))}
            </div>
          </div>


         {/* Buttons */}
          <div className="cs-hero-buttons">
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="cs-demo-button">
                {demoLabel}
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="cs-demo-button cs-demo-button--ghost">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px', verticalAlign: 'middle', flexShrink: 0 }}>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
            )}
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