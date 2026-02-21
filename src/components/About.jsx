import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import DotGrid from './DotGrid';
import '../App.css';
import './About.css';

// Reusable typewriter heading
function TypewriterHeading({ text, delay = 0, className }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const typeNext = () => {
        if (i >= text.length) return;
        setTimeout(() => {
          i++;
          setVisibleCount(i);
          typeNext();
        }, 60 + Math.random() * 30);
      };
      typeNext();
    }, delay);
    return () => clearTimeout(start);
  }, [text, delay]);

  return (
    <h2 className={className}>
      {text.slice(0, visibleCount)}
      {visibleCount < text.length && (
        <motion.span
          className="typing-caret"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        />
      )}
    </h2>
  );
}

const contentVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

function AboutSection({ heading, headingDelay, contentDelay, children }) {
  return (
    <div className="about-section">
      <div className="section-left">
        <TypewriterHeading
          text={heading}
          delay={headingDelay}
          className="section-heading"
        />
      </div>
      <motion.div
        className="section-right"
        variants={contentVariants}
        initial="hidden"
        animate="show"
        transition={{ delayChildren: contentDelay / 1000 }}
      >
        {React.Children.map(children, (child, i) => (
          <motion.div key={i} variants={itemVariants}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function About() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorToggle, setCursorToggle] = useState(false);
  const [isOverNavOrFooter, setIsOverNavOrFooter] = useState(false);
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      const headerElement = headerRef.current;
      const footerElement = footerRef.current;
      let isOverSpecialArea = false;
      if (headerElement) {
        const headerRect = headerElement.getBoundingClientRect();
        if (e.clientX >= headerRect.left && e.clientX <= headerRect.right &&
            e.clientY >= headerRect.top && e.clientY <= headerRect.bottom) {
          isOverSpecialArea = true;
        }
      }
      if (footerElement && !isOverSpecialArea) {
        const footerRect = footerElement.getBoundingClientRect();
        if (e.clientX >= footerRect.left && e.clientX <= footerRect.right &&
            e.clientY >= footerRect.top && e.clientY <= footerRect.bottom) {
          isOverSpecialArea = true;
        }
      }
      setIsOverNavOrFooter(isOverSpecialArea);
    };
    const handleClick = () => setCursorToggle(prev => !prev);
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const sections = [
    { heading: "Hey, I'm Sharleen!", headingDelay: 300,  contentDelay: 800  },
    { heading: 'About me',           headingDelay: 1200, contentDelay: 1600 },
    { heading: 'Skills',             headingDelay: 2000, contentDelay: 2400 },
    { heading: 'Tools',              headingDelay: 2700, contentDelay: 3100 },
    { heading: 'Education',          headingDelay: 3400, contentDelay: 3800 },
  ];

  return (
    <>
      <div className="about-background">
        <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
          <DotGrid
            dotSize={4}
            gap={34}
            baseColor="#d9f070"
            activeColor="#bedc3b"
            proximity={80}
            speedTrigger={70}
            shockRadius={110}
            shockStrength={3}
            maxSpeed={2500}
            resistance={950}
            returnDuration={1.5}
          />
        </div>

        <div
          className={`custom-cursor-png ${cursorToggle ? 'clicked' : ''} ${isOverNavOrFooter ? 'hidden' : ''}`}
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        />
        <div
          className={`custom-cursor ${isOverNavOrFooter ? 'visible' : ''}`}
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        />

        <div className="app about-app">
          <div ref={headerRef}><Header /></div>

          <section className="about-page">

            <AboutSection heading={sections[0].heading} headingDelay={sections[0].headingDelay} contentDelay={sections[0].contentDelay}>
              <p className="section-text">
                I design at the intersection of art and technology to create intentional digital experiences.
              </p>
            </AboutSection>

            <AboutSection heading={sections[1].heading} headingDelay={sections[1].headingDelay} contentDelay={sections[1].contentDelay}>
              <p className="section-text">
                My background in art history and fashion shapes my perspective as a designer, informing how I create functional products grounded in visual culture, aesthetics and meaning.
              </p>
              <p className="section-text">
                Outside of design, I like to hangout at the beach probably with an ice coffee in hand (even in the winter!), explore new restaurants and shop a little too much :)
              </p>
            </AboutSection>

            <AboutSection heading={sections[2].heading} headingDelay={sections[2].headingDelay} contentDelay={sections[2].contentDelay}>
              <p className="section-text">Wireframing</p>
              <p className="section-text">Rapid prototyping</p>
              <p className="section-text">User research</p>
              <p className="section-text">Usability testing</p>
              <p className="section-text">Front end development (Agentic coding)</p>
              <p className="section-text">Project management</p>
            </AboutSection>

            <AboutSection heading={sections[3].heading} headingDelay={sections[3].headingDelay} contentDelay={sections[3].contentDelay}>
              <div className="tools-grid">
                <div className="tools-column">
                  <p className="section-text">Figma</p>
                  <p className="section-text">HTML / CSS</p>
                  <p className="section-text">JavaScript</p>
                  <p className="section-text">Next.js / React</p>
                  <p className="section-text">Expo</p>
                  <p className="section-text">Vercel</p>
                </div>
                <div className="tools-column">
                  <p className="section-text">Adobe Photoshop</p>
                  <p className="section-text">Adobe Illustrator</p>
                  <p className="section-text">Adobe InDesign</p>
                  <p className="section-text">Adobe After Effects</p>
                  <p className="section-text">Trello / Notion</p>
                </div>
              </div>
            </AboutSection>

            <AboutSection heading={sections[4].heading} headingDelay={sections[4].headingDelay} contentDelay={sections[4].contentDelay}>
              <div className="education-item">
                <p className="section-text-bold">Digital Design and Development, Diploma</p>
                <p className="section-text">British Columbia Institute of Technology</p>
              </div>
              <div className="education-item">
                <p className="section-text-bold">Bachelors of Arts, Art History</p>
                <p className="section-text">University of British Columbia</p>
              </div>
            </AboutSection>

          </section>

          <div ref={footerRef}><Footer /></div>
        </div>
      </div>
    </>
  );
}

export default About;