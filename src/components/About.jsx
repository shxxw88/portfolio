import { useState, useEffect, useRef } from 'react';
import Header from './Header';
import '../App.css';
import './About.css';

function About() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [dotPositions, setDotPositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);
  const dotRefs = useRef([]);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Check distance to each dot and move them away if too close
      dotRefs.current.forEach((dot, index) => {
        if (!dot) return;
        
        const rect = dot.getBoundingClientRect();
        const dotCenterX = rect.left + rect.width / 2;
        const dotCenterY = rect.top + rect.height / 2;
        
        const deltaX = dotCenterX - e.clientX;
        const deltaY = dotCenterY - e.clientY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // If cursor is within 200px of dot center
        if (distance < 200) {
          const angle = Math.atan2(deltaY, deltaX);
          const pushDistance = 200 - distance;
          const pushX = Math.cos(angle) * pushDistance * 2.5;
          const pushY = Math.sin(angle) * pushDistance * 2.5;
          
          setDotPositions(prev => {
            const newPositions = [...prev];
            newPositions[index] = {
              x: pushX,
              y: pushY
            };
            return newPositions;
          });
        } else {
          // Slowly return to original position
          setDotPositions(prev => {
            const newPositions = [...prev];
            newPositions[index] = {
              x: prev[index].x * 0.95,
              y: prev[index].y * 0.95
            };
            return newPositions;
          });
        }
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div className="about-background">
        {/* Floating dots */}
        <div className="floating-dots">
          {[1, 2, 3, 4, 5].map((num, index) => (
            <div
              key={num}
              ref={el => dotRefs.current[index] = el}
              className={`dot dot-${num}`}
              style={{
                transform: `translate(${dotPositions[index].x}px, ${dotPositions[index].y}px)`
              }}
            ></div>
          ))}
        </div>
        
        <div 
          className="custom-cursor"
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        />
        <div className="app">
          <Header />
          <section className="about-page">
            {/* All your existing content */}
            <div className="about-intro">
              <div className="intro-left">
                <h1 className="intro-heading">Hey, I'm Sharleen!</h1>
              </div>
              <div className="intro-right">
                <p className="intro-text">I am a product designer</p>
              </div>
            </div>

            <div className="about-section">
              <div className="section-left">
                <h2 className="section-heading">About me</h2>
              </div>
              <div className="section-right">
                <p className="section-text">
                  Your about me text goes here. Tell your story and what you're passionate about.
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
        </div>
      </div>
    </>
  );
}

export default About;