import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import './Header.css';

export default function Header() {
  const [heroHeight, setHeroHeight] = useState(window.innerHeight);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const menuRef = useRef(null);
  const location = useLocation();
  const { scrollY } = useScroll();

  // Measure hero height on mount
  useEffect(() => {
    const hero = document.querySelector('.hero');
    if (hero) setHeroHeight(hero.offsetHeight);
  }, []);

  // Track mobile breakpoint
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  const navLinks = (onClickExtra) => (
    <>
      <a href="#works" className={`nav-link ${activeSection === 'works' ? 'active' : ''}`} onClick={(e) => { scrollToWorks(e); onClickExtra?.(); }}>Works</a>
      <a href="/about" className={`nav-link ${location.pathname === '/about' && activeSection !== 'contact' ? 'active' : ''}`} onClick={onClickExtra}>About</a>
      <a href="/puzzle" className={`nav-link ${location.pathname === '/puzzle' ? 'active' : ''}`} onClick={onClickExtra}>Puzzle</a>
      <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => { scrollToFooter(e); onClickExtra?.(); }}>Contact</a>
    </>
  );

  return (
    <motion.header
      className={`header ${isMobile ? 'header--mobile' : ''}`}
      style={{ top: (isAbout || isMobile) ? 32 : navY }}
    >
      {/* Desktop nav */}
      <nav className="nav">
        {navLinks()}
      </nav>

      {/* Mobile hamburger */}
      <div className="mobile-nav" ref={menuRef}>
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-icon ${menuOpen ? 'open' : ''}`}>
            <span /><span /><span />
          </span>
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="nav-dropdown"
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              {navLinks(() => setMenuOpen(false))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}