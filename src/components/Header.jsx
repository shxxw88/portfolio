import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [pastHero, setPastHero] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero');
      const heroHeight = hero ? hero.offsetHeight : window.innerHeight;
      setPastHero(window.scrollY > heroHeight - 80);

      // Active section detection
      const worksSection = document.querySelector('.featured-works');
      if (worksSection) {
        const rect = worksSection.getBoundingClientRect();
        const isInView = rect.top <= 200 && rect.bottom >= 200;
        setActiveSection(isInView && location.pathname === '/' ? 'works' : '');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.querySelector('.footer');
    if (footer) footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToWorks = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/about') {
      window.location.href = '/';
      return;
    }
    const works = document.querySelector('.featured-works');
    if (works) works.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`header ${pastHero ? 'at-top' : 'at-bottom'}`}>
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