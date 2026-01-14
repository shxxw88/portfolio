import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.querySelector('.footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToWorks = (e) => {
    e.preventDefault();
    
    // If on About page, navigate to home
    if (window.location.pathname === '/about') {
      window.location.href = '/';
      return;
    }
    
    // Otherwise scroll to featured works section
    const works = document.querySelector('.featured-works');
    if (works) {
      works.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <a href="#works" className="nav-link active" onClick={scrollToWorks}>Works</a>
        <a href="/about" className="nav-link">About</a>
        <a href="#contact" className="nav-link" onClick={scrollToFooter}>Contact</a>
      </nav>
    </header>
  );
}