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
              <span className="highlight">Product Designer</span> creating thoughtful digital experiences that are both beautiful and intuitive.
            </p>
            <p className="hero-subtitle">
              (Plus, I code a little too)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}