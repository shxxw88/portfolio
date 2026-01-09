import { useState, useEffect } from 'react';
import Header from './Header';
import '../App.css';
import './About.css';

function About() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div className="about-background">
          {/* Floating dots */}
          <div className="floating-dots">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            <div className="dot dot-4"></div>
            <div className="dot dot-5"></div>
          </div>
          <div 
        className="custom-cursor"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
        <div className="app">
          <Header />
          <section className="about-page">
            {/* Intro Section */}
            <div className="about-intro">
              <div className="intro-left">
                <h1 className="intro-heading">Hey, I'm Sharleen!</h1>
              </div>
              <div className="intro-right">
                <p className="intro-text">I am a product designer</p>
              </div>
            </div>

            {/* About Me Section */}
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

            {/* Skills Section */}
            <div className="about-section">
              <div className="section-left">
                <h2 className="section-heading">Skills</h2>
              </div>
              <div className="section-right">
                <p className="section-text">Project management</p>
                <p className="section-text">Wireframing</p>
                <p className="section-text">Rapid prototyping</p>
                <p className="section-text">User research & testing</p>
                <p className="section-text">Front-end development (low code)</p>
              </div>
            </div>

            {/* Tools Section */}
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
                    <p className="section-text">NextJS / React.js</p>
                    <p className="section-text">Expo</p>
                  </div>
                  <div className="tools-column">
                    <p className="section-text">Adobe Photoshop</p>
                    <p className="section-text">Adobe Illustrator</p>
                    <p className="section-text">Adobe InDesign</p>
                    <p className="section-text">Adobe After Effects</p>
                    <p className="section-text">Adobe Premiere Pro</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="about-section">
              <div className="section-left">
                <h2 className="section-heading">Education</h2>
              </div>
              <div className="section-right">
                <div className="education-item">
                  <p className="section-text">Digital Design and Development, Diploma</p>
                  <p className="section-text">British Columbia Institute of Technology (BCIT)</p>
                </div>
                <div className="education-item">
                  <p className="section-text">Bachelors of Arts, Art History</p>
                  <p className="section-text">University of British Columbia (UBC)</p>
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