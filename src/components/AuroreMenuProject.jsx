import GraphicProjectLayout from './GraphicProjectLayout';

function AuroreMenuProject() {
  const projectData = {
    title: "Aurore Menu Design",
    concept: "A playful approach to French brunch, where organic shapes and expressive typography bring warmth and approachability. Casually sophisticated, perfect from eggs to aperitifs.",
    tools: [
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe Photoshop"
    ],
    heroImage: "/images/aurore-hero.png" // Replace with your actual image
  };

  return (
    <GraphicProjectLayout {...projectData}>
      {/* Additional content images */}
      <div className="gp-content-image">
        <img src="/images/aurore-detail-1.png" alt="Menu design detail 1" />
      </div>

      <div className="gp-content-image">
        <img src="/images/aurore-detail-2.png" alt="Menu design detail 2" />
      </div>

      {/* Optional: Add text sections if needed */}
      {/* 
      <div className="gp-text-section">
        <h2 className="gp-section-heading">Design Process</h2>
        <p className="gp-section-text">
          Your design process description here...
        </p>
      </div>
      */}

      {/* Optional: Add image grid if needed */}
      {/* 
      <div className="gp-images-grid">
        <div className="gp-content-image">
          <img src="/images/aurore-1.png" alt="Design variation 1" />
        </div>
        <div className="gp-content-image">
          <img src="/images/aurore-2.png" alt="Design variation 2" />
        </div>
        <div className="gp-content-image">
          <img src="/images/aurore-3.png" alt="Design variation 3" />
        </div>
      </div>
      */}
    </GraphicProjectLayout>
  );
}

export default AuroreMenuProject;