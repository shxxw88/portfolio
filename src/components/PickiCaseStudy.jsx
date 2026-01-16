import CaseStudyLayout from './CaseStudyLayout';

function PickiCaseStudy() {
  // Define your project data
  const projectData = {
    title: "Picki",
    description: "Event planning app that helps friend groups decide faster. Everyone suggests ideas, Picki randomly picks one for less debating, more doing.",
    role: ["UX/UI Designer", "User Researcher"],
    duration: "2 Months",
    skills: ["User Testing", "Wireframing", "Prototyping"],
    heroImage: "/images/picki-hero.png"
  };

  return (
    <CaseStudyLayout {...projectData}>
      {/* Custom content for Picki case study - Different structure than Scaffold! */}
      <section className="case-study-content">
        <nav className="content-nav">
          <a href="#overview" className="nav-item">Overview</a>
          <a href="#problem" className="nav-item">Problem</a>
          <a href="#user-research" className="nav-item">User Research</a>
          <a href="#ideation" className="nav-item">Ideation</a>
          <a href="#design" className="nav-item">Design</a>
          <a href="#testing" className="nav-item">Testing</a>
          <a href="#reflection" className="nav-item">Reflection</a>
        </nav>

        <div className="content-main">
          {/* Overview Section */}
          <div id="overview" className="content-section">
            <h2 className="cs-section-heading">Overview</h2>
            <p className="cs-section-text">
              We've all been there - endless group chats trying to decide where to eat, 
              what movie to watch, or which bar to go to. Picki solves this by turning 
              decision-making into a fun, quick process where everyone gets a say, but 
              nobody has to argue.
            </p>
            <img src="/images/picki-overview.png" alt="Picki overview" className="cs-section-image" />
          </div>

          {/* Problem Section */}
          <div id="problem" className="content-section">
            <h2 className="cs-section-heading">The Problem</h2>
            <p className="cs-section-text">
              Friend groups waste an average of 30 minutes per outing just trying to 
              decide what to do. This "decision fatigue" often leads to frustration, 
              last-minute cancellations, or always defaulting to the same places.
            </p>
            
            <h3 className="cs-section-subheading">How might we...</h3>
            <p className="cs-section-text">
              How might we help friend groups make decisions faster while ensuring 
              everyone feels heard and the process remains fun?
            </p>
            
            <img src="/images/picki-problem.png" alt="Problem statement" className="cs-section-image" />
          </div>

          {/* User Research Section */}
          <div id="user-research" className="content-section">
            <h2 className="cs-section-heading">User Research</h2>
            <p className="cs-section-text">
              I conducted interviews with 20 people aged 18-35 who regularly make plans 
              with friend groups of 3-8 people.
            </p>
            
            <h3 className="cs-section-subheading">Pain Points Discovered</h3>
            <p className="cs-section-text">
              • "One person always dominates the decision"<br/>
              • "By the time we decide, we're too tired to go out"<br/>
              • "We always end up at the same places because it's easier"<br/>
              • "People say they don't care, but then complain about the choice"
            </p>
            
            <div className="cs-section-images-grid">
              <img src="/images/picki-research-1.png" alt="User interviews" />
              <img src="/images/picki-research-2.png" alt="Survey results" />
            </div>
          </div>

          {/* Ideation Section */}
          <div id="ideation" className="content-section">
            <h2 className="cs-section-heading">Ideation & Sketches</h2>
            <p className="cs-section-text">
              I explored various approaches: voting systems, swipe-based interfaces, 
              and AI recommendations. The random selection approach emerged as the most 
              exciting because it removed pressure while keeping things fair.
            </p>
            <img src="/images/picki-sketches.png" alt="Initial sketches" className="cs-section-image" />
          </div>

          {/* Design Section */}
          <div id="design" className="content-section">
            <h2 className="cs-section-heading">Design Solution</h2>
            
            <h3 className="cs-section-subheading">Core Features</h3>
            <p className="cs-section-text">
              <strong>Suggestion Mode:</strong> Everyone adds their ideas to the pool. 
              No judgment, no arguing - just brainstorming.
            </p>
            <img src="/images/picki-suggestions.png" alt="Suggestion interface" className="cs-section-image" />
            
            <p className="cs-section-text">
              <strong>The Pick:</strong> A fun, animated random selection that builds 
              anticipation and makes the decision feel like a game rather than a chore.
            </p>
            <img src="/images/picki-animation.png" alt="Pick animation" className="cs-section-image" />
            
            <p className="cs-section-text">
              <strong>History & Favorites:</strong> Keep track of past picks and save 
              favorites for quick re-use later.
            </p>
            <img src="/images/picki-history.png" alt="History feature" className="cs-section-image" />
          </div>

          {/* Testing Section */}
          <div id="testing" className="content-section">
            <h2 className="cs-section-heading">User Testing</h2>
            <p className="cs-section-text">
              I tested the prototype with 5 friend groups over 2 weeks. They used Picki 
              for real outings and provided feedback.
            </p>
            
            <h3 className="cs-section-subheading">Key Insights</h3>
            <p className="cs-section-text">
              ✓ Decision time reduced from 30 minutes to under 2 minutes<br/>
              ✓ Users loved the playful animation<br/>
              ✗ Some wanted the ability to veto options<br/>
              ✗ Categories needed to be clearer (food, drinks, activities)
            </p>
            
            <h3 className="cs-section-subheading">Iterations Made</h3>
            <p className="cs-section-text">
              Based on feedback, I added category tags and a "shuffle again" option 
              (usable once per session) to address concerns while maintaining the 
              commitment-free spirit of the app.
            </p>
          </div>

          {/* Reflection Section */}
          <div id="reflection" className="content-section">
            <h2 className="cs-section-heading">Reflection</h2>
            <p className="cs-section-text">
              <strong>What worked:</strong> The random selection approach was more 
              popular than expected. Users found it liberating not to have to justify 
              their choices or negotiate.
            </p>
            
            <p className="cs-section-text">
              <strong>What I learned:</strong> Sometimes the best design solution is 
              the one that removes choice rather than adding more options. Simplicity 
              can be powerful.
            </p>
            
            <p className="cs-section-text">
              <strong>Future improvements:</strong> Integration with reservation 
              systems, location-based suggestions, and group profiles to remember 
              preferences.
            </p>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}

export default PickiCaseStudy;