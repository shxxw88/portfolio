import Sphere from './Sphere';
import './Hero.css';

export default function Hero() {
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
    // Add your click handler logic here
    // For example: 
    // - Navigate to a project page
    // - Open a modal
    // - Trigger an animation
  };

  return (
    <section className="hero">
      {/* Floating spheres */}
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


