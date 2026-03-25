import GraphicProjectLayout from './GraphicProjectLayout';

function AuroreMenuProject() {
  const projectData = {
    title: "Aurore Menu Design",
    concept: [
      "For Aurore, a French-inspired brunch restaurant, the goal was to reimagine traditional elegance in a more approachable way. The menu pairs organic forms, tactile textures, and expressive typography to soften the formality of French dining — balancing warmth with structure. Playful accents and clear hierarchy create a casually sophisticated experience that transitions seamlessly from brunch to aperitifs."
    ],

    tools: [
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe Photoshop"
    ],
    heroImage: "/images/aurore-hero.png" 
  };

  return (
    <GraphicProjectLayout {...projectData}>
      <div className="aurore-icons">
        <img src="/images/aurore-icons.png" alt="Menu design detail 1" />
      </div>

          <div className="menu-grid">
      {/* Row 1 - Left tall, Right short */}
      <div className="menu-page menu-page-tall">
        <img src="/images/aurore-menu-1.png" alt="Aurore menu page 1" />
      </div>
      <div className="menu-page menu-page-short">
        <img src="/images/aurore-menu-2.png" alt="Aurore menu page 2" />
      </div>
      
      {/* Row 2 - Left short, Right tall */}
      <div className="menu-page menu-page-short">
        <img src="/images/aurore-menu-3.png" alt="Aurore menu page 3" />
      </div>
      <div className="menu-page menu-page-tall">
        <img src="/images/aurore-menu-4.png" alt="Aurore menu page 4" />
      </div>
    </div>

    

    </GraphicProjectLayout>
  );
}

export default AuroreMenuProject;