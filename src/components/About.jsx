import { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../App.css';
import './About.css';

function About() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorToggle, setCursorToggle] = useState(false);
  const [isOverNavOrFooter, setIsOverNavOrFooter] = useState(false);
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is over header or footer
      const headerElement = headerRef.current;
      const footerElement = footerRef.current;
      
      let isOverSpecialArea = false;
      
      if (headerElement) {
        const headerRect = headerElement.getBoundingClientRect();
        if (
          e.clientX >= headerRect.left &&
          e.clientX <= headerRect.right &&
          e.clientY >= headerRect.top &&
          e.clientY <= headerRect.bottom
        ) {
          isOverSpecialArea = true;
        }
      }
      
      if (footerElement && !isOverSpecialArea) {
        const footerRect = footerElement.getBoundingClientRect();
        if (
          e.clientX >= footerRect.left &&
          e.clientX <= footerRect.right &&
          e.clientY >= footerRect.top &&
          e.clientY <= footerRect.bottom
        ) {
          isOverSpecialArea = true;
        }
      }
      
      setIsOverNavOrFooter(isOverSpecialArea);
    };

    const handleClick = () => {
      setCursorToggle(prev => !prev);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div className="about-background">
        {/* PNG Cursor - hidden when over nav/footer */}
        <div 
          className={`custom-cursor-png ${cursorToggle ? 'clicked' : ''} ${isOverNavOrFooter ? 'hidden' : ''}`}
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        />
        
        {/* Circle Cursor - shown when over nav/footer */}
        <div 
          className={`custom-cursor ${isOverNavOrFooter ? 'visible' : ''}`}
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        />
        
        <div className="app about-app">
          <div ref={headerRef}>
            <Header />
          </div>
          
          <section className="about-page">
            <div className="about-section">
              <div className="section-left">
                <h2 className="section-heading">Hey, I'm Sharleen!</h2>
              </div>
              <div className="section-right">
                <p className="section-text">
                  I design at the intersection of art and technology by using creativity to solve problems and craft intentional, usable, and visually compelling digital experiences.
                </p>
              </div>
            </div>

            <div className="about-section">
              <div className="section-left">
                <h2 className="section-heading">About me</h2>
              </div>
              <div className="section-right">
                <p className="section-text">
                 My background in art history and fashion shapes my perspective as a designer, informing how I create functional digital products grounded in visual culture, aesthetics and meaning.
                </p>
                <p className="section-text">
                 Outside of design, I like to hangout at the beach probably with an ice coffee in hand (even in the winter!), explore new restaurants and shop a little too much :) 
                </p>
              </div>
            </div>

            <div className="about-section">
              <div className="section-left">
                <h2 className="section-heading">Skills</h2>
              </div>
              <div className="section-right">
                <p className="section-text">Wireframe</p>
                <p className="section-text">Rapid prototyping</p>
                <p className="section-text">User research & testing</p>
                <p className="section-text">Front end development (low code)</p>
                <p className="section-text">Project management</p>
              </div>
            </div>

            <div className="about-section">
              <div className="section-left">
                <h2 className="section-heading">Tools</h2>
              </div>
              <div className="section-right">
                <div className="tools-grid">
                  <div className="tools-column">
                    <p className="section-text">Figma</p>
                    <p className="section-text">HTML / CSS</p>
                    <p className="section-text">JavaScript</p>
                    <p className="section-text">Next.js / React.js</p>
                    <p className="section-text">Expo</p>
                  </div>
                  <div className="tools-column">
                    <p className="section-text">Adobe Photoshop</p>
                    <p className="section-text">Adobe Illustrator</p>
                    <p className="section-text">Adobe InDesign</p>
                    <p className="section-text">Adobe After Effects</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-section">
              <div className="section-left">
                <h2 className="section-heading">Education</h2>
              </div>
              <div className="section-right">
                <div className="education-item">
                  <p className="section-text-bold">Digital Design and Development, Diploma</p>
                  <p className="section-text">British Columbia Institute of Technology</p>
                </div>
                <div className="education-item">
                  <p className="section-text-bold">Bachelors of Arts, Art History</p>
                  <p className="section-text">University of British Columbia</p>
                </div>
              </div>
            </div>
          </section>
          
          <div ref={footerRef}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;