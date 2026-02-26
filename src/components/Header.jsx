import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Header.css';

export default function Header() {
  const [heroHeight, setHeroHeight] = useState(window.innerHeight);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const { scrollY } = useScroll();

  // Measure hero height on mount
  useEffect(() => {
    const hero = document.querySelector('.hero');
    if (hero) setHeroHeight(hero.offsetHeight);
  }, []);

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const worksSection = document.querySelector('.featured-works');
      const footer = document.querySelector('.footer');

      // Check footer — only when fully in view
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveSection('contact');
          return;
        }
      }

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

  // Smoothly interpolate Y from bottom of viewport to top
  // At scroll 0: nav sits near bottom (heroHeight - ~80px from top)
  // At scroll heroHeight: nav sits at top (32px from top)
  const isAbout = location.pathname === '/about';

  const navY = useTransform(
    scrollY,
    [0, heroHeight * 0.6],
    [heroHeight - 80, 32],
    { clamp: true }
  );

  const scrollToFooter = (e) => {
    e.preventDefault();
    document.querySelector('.footer')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToWorks = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/about') {
      window.location.href = '/';
      return;
    }
    document.querySelector('.featured-works')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header
      className="header"
      style={{ top: isAbout ? 32 : navY }}
    >
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
          className={`nav-link ${location.pathname === '/about' && activeSection !== 'contact' ? 'active' : ''}`}
        >
          About
        </a>
        <a
          href="#contact"
          className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={scrollToFooter}
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}