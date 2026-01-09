import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-name">Sharleen Wang</h1>
        
        <div className="hero-description">
          <p className="hero-title">
            <span className="highlight">Product Designer</span> blending creative aesthetics with user-centred thinking to design intuitive digital experiences.
          </p>
          <p className="hero-subtitle">
            (I also do a little bit of coding)
          </p>
        </div>
      </div>
    </section>
  );
}