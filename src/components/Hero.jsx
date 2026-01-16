import { useEffect } from 'react';
import Sphere from './Sphere';
import './Hero.css';

export default function Hero() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const nameElement = document.querySelector('.hero-name-typing');
      if (nameElement) {
        nameElement.classList.add('typed');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const spheres = [
    { 
      initialTop: '15%', 
      initialRight: '20%', 
      color: 'green',
      animationName: 'floatRandom1',
      duration: '20s'
    },
    { 
      initialTop: '60%', 
      initialLeft: '15%', 
      color: 'orange',
      animationName: 'floatRandom2',
      duration: '20s'
    },
    { 
      initialBottom: '20%', 
      initialRight: '25%', 
      color: 'blue',
      animationName: 'floatRandom3',
      duration: '20s'
    }
  ];

  const handleSphereClick = (color) => {
    console.log(`Clicked ${color} sphere!`);
    alert(`You clicked the ${color} sphere!`);
  };

  return (
    <section className="hero">
      {/* Floating spheres
      <div className="hero-spheres">
        {spheres.map((sphere, index) => (
          <div
            key={index}
            className="sphere-wrapper clickable"
            style={{
              position: 'absolute',
              top: sphere.initialTop,
              left: sphere.initialLeft,
              right: sphere.initialRight,
              bottom: sphere.initialBottom,
              animation: `${sphere.animationName} ${sphere.duration} ease-in-out infinite`,
              pointerEvents: 'auto',
              cursor: 'pointer'
            }}
            onClick={() => handleSphereClick(sphere.color)}
          >
            <Sphere size={90} color={sphere.color} />
          </div>
        ))}
      </div> */}

      <div className="hero-container">
        {/* Name with typing animation */}
        <h1 className="hero-name hero-name-typing">Sharleen Wang</h1>
        
        {/* Product Designer (no animation) */}
        <span className="hero-role highlight">Product Designer</span>
        
        {/* Description */}
        <div className="hero-description">
          <p className="hero-title">
            I bring an artist's eye and designer's mindset to every product I build.
          </p>
          <p className="hero-subtitle">
            (Plus a bit of code to make it all come alive!)
          </p>
        </div>
      </div>
    </section>
  );
}