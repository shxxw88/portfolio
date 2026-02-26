import GraphicProjectLayout from './GraphicProjectLayout';

function DailyCoffeeProject() {
  const projectData = {
    title: "Daily Coffee — Can Design",
    concept: 
    [
        "Daily Coffee is a modern coffee brand created to deliver a simple, consistent experience for everyday routines.",
        "The can design uses minimal imagery and restrained typography to emphasize ingredient purity and reduce visual noise. This approach keeps the focus on what matters, resulting in a reliable, modern system that fits naturally into daily life."
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe Stock Images"],
    heroImage: "/images/coffee-hero.png"
  };

  return (
    <GraphicProjectLayout {...projectData}>
         <div className="coffee-icons-marquee">
            <div className="coffee-icons-track">
                <img src="/images/coffee-icons.png" alt="Coffee ingredients" />
                <img src="/images/coffee-icons.png" alt="Coffee ingredients" />
                <img src="/images/coffee-icons.png" alt="Coffee ingredients" /> 
                <img src="/images/coffee-icons.png" alt="Coffee ingredients" />  {/* Duplicate for loop */}
            </div>
        </div>
        <div className="cans-grid">
            <div className="can-item">
                <img src="/images/coffee-can-1.png" alt="Orange Espresso Tonic" />
            </div>
            <div className="can-item">
                <img src="/images/coffee-can-2.png" alt="Weekly coffee can" />
            </div>
            <div className="can-item">
                <img src="/images/coffee-can-3.png" alt="Daily Coffee can" />
            </div>
        </div>
       <div className="labels-grid">
        {/* Row 1 - Two smaller images */}
        <div className="labels-row-two">
            <img src="/images/coffee-label-1.png" alt="Cold Brew label" />
            <img src="/images/coffee-label-2.png" alt="Cold Brew label variant" />
        </div>
        
        {/* Row 2 - One large image */}
        <div className="labels-row-full">
            <img src="/images/coffee-label-3.png" alt="Cold Brew label full" />
        </div>
        </div>

    </GraphicProjectLayout>
  );
}

export default DailyCoffeeProject;