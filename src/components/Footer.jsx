import { useState, useEffect } from 'react';
import './Footer.css';

export default function Footer() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax offset (adjust multiplier for speed)
  const parallaxOffset = scrollY * 0.3; 

  return (
    <footer className="footer">
      <div className="footer-circle">
        <div className="footer-content">
          <h3 className="footer-heading">Connect with me!</h3>
          <div className="footer-links">
            <a 
              href="https://www.linkedin.com/in/sharleenwang/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:shar010588@gmail.com" 
              className="footer-link"
            >
              Email
            </a>
          </div>
          <p className="footer-credit">
            This website was coded with love using React &lt;3
          </p>
        </div>
      </div>
    </footer>
  );
}