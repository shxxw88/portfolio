import React, { useEffect, useRef } from 'react';
import './ProjectFooter.css';

function ProjectFooter() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 10% of footer is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before footer is fully visible
      }
    );

    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  return (
    <footer className="project-footer" ref={footerRef}>
      {/* Top border line */}
      <div className="project-footer-border"></div>
      
      {/* Main content */}
      <div className="project-footer-content">
        {/* End message */}
        <h2 className="project-footer-title">You've reached the end!</h2>
        
        {/* See more projects link */}
        <a href="/" className="project-footer-link">
          See more projects <span className="arrow">↗</span>
        </a>
        
        {/* Bouncing 3D ball */}
        <div className="bouncing-ball"></div>
        
        {/* Contact section with icons */}
        <div className="project-footer-contact">
          <p className="contact-heading">Get in touch ☺</p>
          
          <div className="contact-icons">
            {/* LinkedIn Icon */}
            <a 
              href="https://www.linkedin.com/in/sharleenwang/" 
              className="contact-icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            {/* Email Icon */}
            <a 
              href="mailto:sharleenwang7@gmail.com" 
              className="contact-icon-link"
              aria-label="Email"
            >
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ProjectFooter;