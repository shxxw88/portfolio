import './Hero.css';

export default function Hero() {
  return (
    <div className="hero">
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
    </div>
  );
}