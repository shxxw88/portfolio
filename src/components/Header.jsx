import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check if featured works section is in view
      const worksSection = document.querySelector('.featured-works');
      if (worksSection) {
        const rect = worksSection.getBoundingClientRect();
        const isInView = rect.top <= 200 && rect.bottom >= 200;
        
        if (isInView && location.pathname === '/') {
          setActiveSection('works');
        } else {
          setActiveSection('');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.querySelector('.footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToWorks = (e) => {
    e.preventDefault();
    
    if (window.location.pathname === '/about') {
      window.location.href = '/';
      return;
    }
    
    const works = document.querySelector('.featured-works');
    if (works) {
      works.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <a 
          href="#works" 
          className={`nav-link ${activeSection === 'works' ? 'active' : ''}`}
          onClick={scrollToWorks}
        >
          Works
        </a>
        <a 
          href="/about" 
          className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
        >
          About
        </a>
        <a 
          href="#contact" 
          className="nav-link" 
          onClick={scrollToFooter}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}