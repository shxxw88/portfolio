import { useState, useEffect, useRef } from 'react';
import Sphere from './Sphere';
import './Hero.css';

export default function Hero() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [spherePositions, setSpherePositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);
  const sphereRefs = useRef([]);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Check distance to each sphere and move them away if too close
      sphereRefs.current.forEach((sphere, index) => {
        if (!sphere) return;
        
        const rect = sphere.getBoundingClientRect();
        const sphereCenterX = rect.left + rect.width / 2;
        const sphereCenterY = rect.top + rect.height / 2;
        
        const deltaX = sphereCenterX - e.clientX;
        const deltaY = sphereCenterY - e.clientY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        // If cursor is within 120px of sphere center
        if (distance < 120) {
          const angle = Math.atan2(deltaY, deltaX);
          const pushDistance = 120 - distance;
          const pushX = Math.cos(angle) * pushDistance * 2;
          const pushY = Math.sin(angle) * pushDistance * 2;
          
          setSpherePositions(prev => {
            const newPositions = [...prev];
            newPositions[index] = {
              x: pushX,
              y: pushY
            };
            return newPositions;
          });
        } else {
          // Slowly return to original position
          setSpherePositions(prev => {
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

  const spheres = [
    { 
      initialTop: '15%', 
      initialRight: '20%', 
      color: 'green',
      animationName: 'floatRandom1',
      duration: '35s'
    },
    { 
      initialTop: '60%', 
      initialLeft: '15%', 
      color: 'orange',
      animationName: 'floatRandom2',
      duration: '40s'
    },
    { 
      initialBottom: '20%', 
      initialRight: '25%', 
      color: 'blue',
      animationName: 'floatRandom3',
      duration: '30s'
    }
  ];

  return (
    <section className="hero">
      {/* Floating spheres */}
      <div className="hero-spheres">
        {spheres.map((sphere, index) => (
          <div
            key={index}
            className="sphere-wrapper"
            style={{
              position: 'absolute',
              top: sphere.initialTop,
              left: sphere.initialLeft,
              right: sphere.initialRight,
              bottom: sphere.initialBottom,
              animation: `${sphere.animationName} ${sphere.duration} ease-in-out infinite`
            }}
          >
            <div
              ref={el => sphereRefs.current[index] = el}
              style={{
                transform: `translate(${spherePositions[index].x}px, ${spherePositions[index].y}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <Sphere size={90} color={sphere.color} />
            </div>
          </div>
        ))}
      </div>

      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-name">Sharleen Wang</h1>
        </div>
        
        <div className="hero-right">
          <div className="hero-description">
            <p className="hero-title">
              <span className="highlight">Product Designer</span> blending creative aesthetics with user-centred thinking to design intuitive digital experiences.
            </p>
            <p className="hero-subtitle">
              (I also do a little bit of coding)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}