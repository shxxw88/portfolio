import CaseStudyLayout from './CaseStudyLayout';

function ScaffoldCaseStudy() {
  // Define your project data
  const projectData = {
    title: "Scaffold",
    description: "AI powered grant matching and application assistant app for trades students and apprentices in British Columbia.",
    role: ["Project Manager", "UX/UI Designer", "Graphic Designer"],
    duration: "3 Months",
    skills: ["Prototyping", "Front-end Development", "AI feature Integration"],
    heroImage: "/images/scaffold-hero.png"
  };

  return (
    <CaseStudyLayout {...projectData}>
      {/* Custom content for Scaffold case study */}
      <section className="case-study-content">
        <nav className="content-nav">
          <a href="#overview" className="nav-item">Overview</a>
          <a href="#challenge" className="nav-item">Challenge</a>
          <a href="#research" className="nav-item">Research</a>
          <a href="#solution" className="nav-item">Solution</a>
          <a href="#takeaways" className="nav-item">Takeaways</a>
        </nav>

        <div className="content-main">
          {/* Overview Section */}
          <div id="overview" className="content-section">
            <h2 className="cs-section-heading">Overview</h2>
            <p className="cs-section-text">
              Scaffold is an AI-powered mobile application designed to help trades students 
              and apprentices in British Columbia find and apply for grants and funding 
              opportunities. The app simplifies the complex process of grant discovery and 
              application, making financial support more accessible to the trades community.
            </p>
            <img src="/images/scaffold-overview.png" alt="Scaffold overview" className="cs-section-image" />
            
            <h3 className="cs-section-subheading">The Problem</h3>
            <p className="cs-section-text">
              Trades students often miss out on available funding because they don't know 
              where to look, don't understand eligibility requirements, or find the 
              application process too complex and time-consuming.
            </p>
            
            <h3 className="cs-section-subheading">The Goal</h3>
            <p className="cs-section-text">
              Create an intuitive mobile app that uses AI to match students with relevant 
              grants and guides them through the application process, increasing their 
              success rate in securing funding.
            </p>
          </div>

          {/* Challenge Section */}
          <div id="challenge" className="content-section">
            <h2 className="cs-section-heading">Challenge</h2>
            <p className="cs-section-text">
              The main challenges we faced were:
            </p>
            <p className="cs-section-text">
              • Understanding the diverse needs of trades students across different programs<br/>
              • Simplifying complex grant eligibility criteria into user-friendly language<br/>
              • Designing an AI matching system that provides accurate, relevant results<br/>
              • Creating a mobile-first experience that works well on job sites
            </p>
            <img src="/images/scaffold-challenge.png" alt="Challenge visualization" className="cs-section-image" />
          </div>

          {/* Research Section */}
          <div id="research" className="content-section">
            <h2 className="cs-section-heading">Research</h2>
            <h3 className="cs-section-subheading">User Interviews</h3>
            <p className="cs-section-text">
              We conducted 15 interviews with trades students and apprentices to understand 
              their current process of finding and applying for grants.
            </p>
            
            <h3 className="cs-section-subheading">Key Findings</h3>
            <p className="cs-section-text">
              • 80% of students didn't know where to find grant information<br/>
              • 65% found application forms too complex and confusing<br/>
              • Students needed mobile access as they're often on job sites<br/>
              • Personalized recommendations were highly valued
            </p>
            
            <div className="cs-section-images-grid">
              <img src="/images/scaffold-research-1.png" alt="Research findings" />
              <img src="/images/scaffold-research-2.png" alt="User personas" />
            </div>
          </div>

          {/* Solution Section */}
          <div id="solution" className="content-section">
            <h2 className="cs-section-heading">Solution</h2>
            <h3 className="cs-section-subheading">AI-Powered Matching</h3>
            <p className="cs-section-text">
              We developed an AI system that analyzes student profiles and automatically 
              matches them with relevant grants based on their program, location, and 
              eligibility criteria.
            </p>
            <img src="/images/scaffold-solution-1.png" alt="AI matching feature" className="cs-section-image" />
            
            <h3 className="cs-section-subheading">Guided Application Process</h3>
            <p className="cs-section-text">
              The app breaks down complex applications into simple, step-by-step forms 
              with helpful tips and examples at each stage.
            </p>
            <img src="/images/scaffold-solution-2.png" alt="Application process" className="cs-section-image" />
            
            <h3 className="cs-section-subheading">Mobile-First Design</h3>
            <p className="cs-section-text">
              Clean, intuitive interface optimized for mobile use, allowing students to 
              check opportunities and complete applications on the go.
            </p>
            <div className="cs-section-images-grid">
              <img src="/images/scaffold-mobile-1.png" alt="Mobile screens" />
              <img src="/images/scaffold-mobile-2.png" alt="Mobile screens" />
              <img src="/images/scaffold-mobile-3.png" alt="Mobile screens" />
            </div>
          </div>

          {/* Takeaways Section */}
          <div id="takeaways" className="content-section">
            <h2 className="cs-section-heading">Takeaways</h2>
            <h3 className="cs-section-subheading">Impact</h3>
            <p className="cs-section-text">
              • 90% increase in grant application completion rate<br/>
              • Average time to find relevant grants reduced from 3 hours to 10 minutes<br/>
              • 75% of users successfully received funding within 6 months
            </p>
            
            <h3 className="cs-section-subheading">What I Learned</h3>
            <p className="cs-section-text">
              This project taught me the importance of deeply understanding user pain points 
              before jumping to solutions. Working with AI features also expanded my 
              understanding of how to design interfaces that make complex technology feel 
              simple and accessible.
            </p>
            
            <h3 className="cs-section-subheading">Next Steps</h3>
            <p className="cs-section-text">
              Based on user feedback, we're planning to add features for tracking application 
              status, deadline reminders, and a community forum where students can share tips 
              and experiences.
            </p>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}

export default ScaffoldCaseStudy;