import GraphicProjectLayout from './GraphicProjectLayout';

function DailyCoffeeProject() {
  const projectData = {
    title: "Daily Coffee — Can Design",
    concept: 
    [
        "Brewed for everyday moments, Daily Coffee is a simple, consistent coffee experience designed for the modern consumer.",
        "The can design uses minimal imagery to highlight the simplicity and purity of the ingredients, reducing visual noise and keeping the focus on what matters. The result is a reliable, modern design that fits seamlessly into everyday routines."
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