import GraphicProjectLayout from './GraphicProjectLayout';

function AuroreMenuProject() {
  const projectData = {
    title: "Aurore Menu Design",
    concept: [
      "Aurore is a modern, French-inspired brunch restaurant that balances approachability with refinement.",
      "The menu design pairs organic shapes, tactile textures, and expressive typography to soften the traditionally formal tone of French dining. Playful visual elements are balanced with clear hierarchy and structure, creating an experience that feels both welcoming and polished. The result is a casually sophisticated menu that transitions seamlessly from brunch to aperitifs."
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