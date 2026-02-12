import CaseStudyLayout from './CaseStudyLayout';
import './ScaffoldCaseStudy.css';
import ProjectFooter from './ProjectFooter'; 
import { useEffect } from 'react';

function ScaffoldCaseStudy() {
  const projectData = {
    title: "Scaffold",
    description: [
      "Scaffold is an AI-powered app that helps trades students and apprentices across British Columbia discover and apply for financial support they qualify for.",
      "By centralizing fragmented funding information and simplifying repetitive application writing, Scaffold removes critical barriers between students and the funding they need."
    ],
    recognition: "3rd Place overall at the BCIT D3/FSWD x ConnectHer Student Design & Technology Innovation Showcase",
    role: ["Project Manager", "UX/UI Designer", "Graphic Designer"],
    skills: ["User Research", "UX/UI Design", "React Development"],
    duration: "Sept. – Dec. 2026",
    heroImage: "/images/scaffold-hero.png",
    heroClassName: "scaffold-hero"
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.content-section');
    const navItems = document.querySelectorAll('.nav-item');

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          
          navItems.forEach((item) => {
            item.classList.remove('active');
          });
          
          const activeNav = document.querySelector(`.nav-item[href="#${id}"]`);
          if (activeNav) {
            activeNav.classList.add('active');
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <CaseStudyLayout {...projectData}>
        <section className="case-study-content">
          <nav className="content-nav">
            <a href="#" className="nav-item back-to-top">⌃</a>
            <a href="#insights" className="nav-item">Insights</a>
            <a href="#research" className="nav-item">Research & Discovery</a>
            <a href="#strategy" className="nav-item">Design Strategy</a>
            <a href="#solution" className="nav-item">Solution</a>
            <a href="#marketing" className="nav-item">Marketing & Launch</a>
            <a href="#outcomes" className="nav-item">Outcomes & Takeaways</a>
          </nav>

          <div className="content-main">
            {/* Insights Section */}
            <div id="insights" className="content-section scaffold-insights-section">
              <h2 className="cs-section-heading scaffold-insights-heading">Insights</h2>
              
              <p className="scaffold-insights-subtitle">
                Canada's skilled trades face a retention crisis:
              </p>
              
              <div className="scaffold-insights-stats">
                <div className="scaffold-stat-item">
                  <div className="scaffold-stat-number">700,000</div>
                  <div className="scaffold-stat-description">
                    Trades people<br/>retiring by 2028
                  </div>
                </div>
                
                <div className="scaffold-stat-item">
                  <div className="scaffold-stat-number">50,000</div>
                  <div className="scaffold-stat-description">
                    BC registered<br/>apprentices
                  </div>
                </div>
                
                <div className="scaffold-stat-item">
                  <div className="scaffold-stat-number">46%</div>
                  <div className="scaffold-stat-description">
                    Apprenticeship<br/>completion rate
                  </div>
                </div>
                
                <div className="scaffold-stat-item">
                  <div className="scaffold-stat-number">Billions</div>
                  <div className="scaffold-stat-description">
                    in fragmented<br/>funding
                  </div>
                </div>
              </div>
              
              <p className="scaffold-insights-conclusion">
                While thousands of dollars in funding exists for trades training in BC. 
                eligible apprentices aren't accessing it.
              </p>
            </div>

            {/* Research & Discovery Section */}
            <div id="research" className="content-section scaffold-research-section">
              <h2 className="cs-section-heading scaffold-research-heading">Research & Discovery</h2>
              
              <p className="scaffold-research-intro">
                Through user interviews with trades workers and apprentices as well as heuristic 
                analysis of existing grant portals and applications, we uncovered these key insights:
              </p>
              
              <div className="scaffold-research-findings">
                <div className="scaffold-finding-card">
                  <div className="scaffold-finding-number">1.</div>
                  <div className="scaffold-finding-content">
                    <h3 className="scaffold-finding-title">Discoverability is the primary barrier</h3>
                    <p className="scaffold-finding-text">
                      Funding information is scattered across dozens of government and private sites with 
                      no way to filter what they actually qualify for.
                    </p>
                  </div>
                </div>
                
                <div className="scaffold-finding-card">
                  <div className="scaffold-finding-number">2.</div>
                  <div className="scaffold-finding-content">
                    <h3 className="scaffold-finding-title">Complicated process causes abandonment</h3>
                    <p className="scaffold-finding-text">
                      Complex language and multi step processes makes students give up before 
                      determining if they qualify.
                    </p>
                  </div>
                </div>
                
                <div className="scaffold-finding-card">
                  <div className="scaffold-finding-number">3.</div>
                  <div className="scaffold-finding-content">
                    <h3 className="scaffold-finding-title">Time is the real cost</h3>
                    <p className="scaffold-finding-text">
                      When applications require essays and repetitive manual writing, apprentices 
                      juggling work and school abandon them entirely.
                    </p>
                  </div>
                </div>
                
                <div className="scaffold-finding-card">
                  <div className="scaffold-finding-number">4.</div>
                  <div className="scaffold-finding-content">
                    <h3 className="scaffold-finding-title">Financial decisions demand clarity</h3>
                    <p className="scaffold-finding-text">
                      When money and tax implications are involved, users need complete transparency.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="scaffold-research-question">
                How can we make financial support easier to discover, understand and apply for, 
                without overwhelming users who are already stretched thin?
              </p>
            </div>

            {/* User Persona Section */}
            <div className="scaffold-user-persona-section">
              <h3 className="scaffold-persona-heading">User Persona</h3>
              
              <p className="scaffold-persona-intro">
                Based on interviews and research, we created a primary user persona:
              </p>
              
              <div className="scaffold-persona-card">
                <div className="scaffold-persona-profile">
                  <div className="scaffold-persona-image">
                    <img src="/images/scaffold-persona.png" alt="Talia Redsky" />
                  </div>
                  
                  <div className="scaffold-persona-info">
                    <h4 className="scaffold-persona-name">Talia Redsky</h4>
                    <p className="scaffold-persona-role">28, Carpentry Apprentice</p>
                    <p className="scaffold-persona-location">Williams Lake, BC</p>
                    
                    <p className="scaffold-persona-bio">
                      Indigenous tradeswoman working full-time for a small construction 
                      company while training towards Red Seal certification. She's passionate 
                      about supporting her community but find it difficult to apply for 
                      government funding.
                    </p>
                  </div>
                </div>
                
                <div className="scaffold-persona-details">
                  <div className="scaffold-persona-column">
                    <h5 className="scaffold-persona-column-title">Goals:</h5>
                    <ul className="scaffold-persona-list">
                      <li>Access Indigenous-specific funding programs.</li>
                      <li>Save time by using a tool that explains eligibility in plain language.</li>
                      <li>Never miss a deadline or lose track of applications.</li>
                      <li>Use technology that respects and reflects her community values.</li>
                    </ul>
                  </div>
                  
                  <div className="scaffold-persona-column">
                    <h5 className="scaffold-persona-column-title">Pain points:</h5>
                    <ul className="scaffold-persona-list">
                      <li>Grant information is scattered across multiple government sites.</li>
                      <li>Missed deadlines due to lack of reminders.</li>
                      <li>Limited awareness of what she actually qualifies for.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Strategy Section */}
            <div id="strategy" className="content-section scaffold-strategy-section">
              <h2 className="cs-section-heading scaffold-strategy-heading">Design Strategy</h2>
              
              <p className="scaffold-strategy-intro">
                Scaffold's design strategy is to: <strong>reduce cognitive load, help users make 
                informed decisions and prioritize mobile-first simplicity.</strong> Every feature 
                helps users move forward efficiently without feeling overwhelmed.
              </p>
              
              <p className="scaffold-strategy-flow-title">User Flow</p>
              
              <p className="scaffold-strategy-flow-description">
                From scattered information to a guided journey: Profile Creation → Discover Grants → Verify → Apply
              </p>
              
              <div className="scaffold-strategy-flow-image">
                <img src="/images/scaffold-flow.png" alt="Scaffold user flow diagram" />
              </div>
              
              <p className="scaffold-strategy-subsection-title">Design Iterations</p>

              <p className="scaffold-strategy-iterations-intro">
                Through iterative wireframing and testing, we learned that readability and simplicity was the highest 
                priority. The final interface breaks applications into guided steps and removes unnecessary information 
                to reduce cognitive load.
              </p>

              <div className="scaffold-iterations-grid">
                <div className="scaffold-iteration-item">
                  <div className="scaffold-iteration-image">
                    <img src="/images/scaffold-lofi.png" alt="Design iteration 1" />
                  </div>
                  <p className="scaffold-iteration-caption">Low-fidelity wireframe</p>
                </div>
                <div className="scaffold-iteration-item">
                  <div className="scaffold-iteration-image">
                    <img src="/images/scaffold-midfi.png" alt="Design iteration 2" />
                  </div>
                  <p className="scaffold-iteration-caption">Mid-fidelity wireframe</p>
                </div>
                <div className="scaffold-iteration-item">
                  <div className="scaffold-iteration-image">
                    <img src="/images/scaffold-hifi.png" alt="Design iteration 3" />
                  </div>
                  <p className="scaffold-iteration-caption">Final design</p>
                </div>
              </div>
            </div>

            {/* Solution Section */}
            <div id="solution" className="content-section scaffold-solution-section">
              <h2 className="cs-section-heading scaffold-solution-heading">Solution</h2>
              
              <p className="scaffold-solution-tagline">Resources exist, roadblocks don't have to.</p>
              
              <p className="scaffold-solution-intro">
                Scaffold helps trades students and apprentices find the funding they deserve with these core features:
              </p>
              
              {/* Phone Features */}
              <div className="scaffold-solution-phone-features">
                <div className="scaffold-phone-video-container">
                  <video autoPlay loop muted playsInline>
                    <source src="/videos/scaffold-application.mov" type="video/mp4" />
                  </video>
                </div>
                
                <div className="scaffold-phone-features-list">
                  <div className="scaffold-feature-item">
                    <h3 className="scaffold-feature-title"><span className="scaffold-emoji">📂</span> Centralized grant database with key information simplification</h3>
                    <p className="scaffold-feature-text">
                      By centralizing trades grants into one searchable platform, Scaffold removes fragmentation 
                      and simplifies comparison. Critical information such as funding amount, deadlines and 
                      eligibility requirements is surfaced immediately to reduce cognitive effort.
                    </p>
                  </div>
                  
                  <div className="scaffold-feature-item">
                    <h3 className="scaffold-feature-title"><span className="scaffold-emoji">🎯</span> AI-powered grant matching with smart profiles</h3>
                    <p className="scaffold-feature-text">
                      Scaffold's smart profile capture key user information once and use AI-powered matching to 
                      connect applicants with grants they are most likely eligible for. Reducing guesswork and 
                      unnecessary searching.
                    </p>
                  </div>
                  
                  <div className="scaffold-feature-item">
                    <h3 className="scaffold-feature-title"><span className="scaffold-emoji">📝</span> AI application support</h3>
                    <p className="scaffold-feature-text">
                      Smart application support creates application templates that align with real grant forms, 
                      allowing users to reuse and adapt responses across grants with AI-supported long-answer generation.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Desktop Feature */}
              <div className="scaffold-solution-desktop-feature">
                <div className="scaffold-desktop-feature-content">
                  <h3 className="scaffold-feature-title"><span className="scaffold-emoji">💻</span> Desktop supplement</h3>
                  <p className="scaffold-feature-text">
                    While the core experience is mobile-first, desktop acts as a supplemental environment for 
                    reviewing grant details and completing longer application responses more comfortably.
                  </p>
                </div>
                <div className="scaffold-desktop-video-container">
                  <video autoPlay loop muted playsInline>
                    <source src="/videos/scaffold-video.mov" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Technical Implementation */}
              <div className="scaffold-technical-implementation">
                <h3 className="scaffold-technical-heading">Technical Implementation</h3>
                
                <p className="scaffold-technical-intro">
                  Scaffold's technical implementation balanced AI capabilities with user trust and mobile first needs.
                </p>
                
                <div className="scaffold-technical-box">
                  <div className="scaffold-tech-stack">
                    <p className="scaffold-tech-label"><strong>Stack:</strong></p>
                    <p className="scaffold-tech-text">
                      Expo React Native, Node.js backend, Supabase database, OpenAI API for AI processing
                    </p>
                  </div>
                  
                  <div className="scaffold-tech-flow">
                    <p className="scaffold-tech-label"><strong>Core flow:</strong></p>
                    <ol className="scaffold-tech-list">
                      <li>
                        <strong>Grant ingestion & extraction:</strong> NLP models extract raw grant text from multiple 
                        formats (PDFs, websites, portals) and creates structured metadata storage
                      </li>
                      <li>
                        <strong>User profile creation:</strong> standardized inputs collected with trade certification, 
                        training level, geographic region, demographic identifiers etc.
                      </li>
                      <li>
                        <strong>Intelligent matching:</strong> semantic analysis evaluates grant-to-profile compatibility 
                        at token level with rule based validation.
                      </li>
                      <li>
                        <strong>Application template generation:</strong> AI extracts required form components then maps 
                        to user profile data to generate contextual narrative responses using prompt engineering.
                      </li>
                      <li>
                        <strong>User facing output:</strong> filtered grants list and plain language eligibility explanations.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing & Launch Support Section */}
            <div id="marketing" className="content-section scaffold-marketing-section">
              <h2 className="cs-section-heading scaffold-marketing-heading">Marketing & Launch Support</h2>
              
              <p className="scaffold-marketing-intro">
                To support the BCIT showcase and validate product-market fit, we developed Scaffold's brand identity, demo 
                materials, promotional posters and videos targeting trades students.
              </p>
              
              <div className="scaffold-marketing-row scaffold-marketing-full">
                <img src="/images/scaffold-style.png" alt="Scaffold brand identity and color palette" />
              </div>
              
              <div className="scaffold-marketing-row scaffold-marketing-grid-brochure">
                <img src="/images/scaffold-brochure.png" alt="Scaffold brochure" />
                <img src="/images/scaffold-stickers.png" alt="Scaffold promotional stickers" />
              </div>
              
              <div className="scaffold-marketing-row scaffold-marketing-video">
                <video autoPlay loop muted playsInline>
                  <source src="/videos/scaffold-promo.mov" type="video/mp4" />
                </video>
              </div>
              
              <div className="scaffold-marketing-row scaffold-marketing-grid-equal">
                <img src="/images/scaffold-banner.png" alt="Scaffold billboard banner" />
                <img src="/images/scaffold-signs.png" alt="Scaffold business cards" />
              </div>
            </div>

            {/* Outcomes & Takeaways Section */}
            <div id="outcomes" className="content-section scaffold-outcomes-section">
              <h2 className="cs-section-heading scaffold-outcomes-heading">Outcomes</h2>
              
              <p className="scaffold-outcomes-intro">
                After 3 months design and development, Scaffold was showcased at BCIT's D3/FSWD x 
                ConnectHer Student Design & Technology Innovation Showcase.
              </p>
              
              <p className="scaffold-outcomes-intro">
                The project was presented to distinguished judges including City of Burnaby Mayor, 
                B.C.'s Minister of State for Artificial Intelligence and New Technology and other 
                industry leaders.
              </p>
              
              <p className="scaffold-outcomes-subsection-title"><strong>Showcase Recognition</strong></p>
              
              <div className="scaffold-outcomes-stats">
                <div className="scaffold-outcome-stat">
                  <div className="scaffold-outcome-icon">🏆</div>
                  <div className="scaffold-outcome-number">3rd place overall</div>
                  <p className="scaffold-outcome-description">out of 10 capstone projects.</p>
                </div>
                
                <div className="scaffold-outcome-stat">
                  <div className="scaffold-outcome-icon">👥</div>
                  <div className="scaffold-outcome-number">100+ attendees</div>
                  <p className="scaffold-outcome-description">engaged with live demos, including current trades students and apprentices.</p>
                </div>
                
                <div className="scaffold-outcome-stat">
                  <div className="scaffold-outcome-icon">✅</div>
                  <div className="scaffold-outcome-number">Judges validated</div>
                  <p className="scaffold-outcome-description">Scaffolds real world viability and strategic approach to systemic barriers.</p>
                </div>
              </div>
              
              <div className="scaffold-outcomes-photos">
                <img src="/images/scaffold-image1.jpg" alt="Scaffold showcase presentation" />
                <img src="/images/scaffold-image2.JPG" alt="Scaffold showcase demo" />
              </div>
              
              <h2 className="cs-section-heading scaffold-takeaways-heading">Takeaways</h2>
              
              <div className="scaffold-takeaways-boxes">
                <div className="scaffold-takeaway-box">
                  <p className="scaffold-takeaway-title"><strong>Experiencing the problems we were solving</strong></p>
                  <p className="scaffold-takeaway-text">
                    While developing Scaffold, we struggled with the same fragmented grant information our users 
                    face. Manual grant ingestion with no automated web scraping pipeline became our biggest 
                    bottleneck. Validating that data fragmentation isn't just user inconvenience, it's a systemic 
                    infrastructure problem.
                  </p>
                  <p className="scaffold-takeaway-subtitle"><strong>What this taught us:</strong></p>
                  <p className="scaffold-takeaway-text">
                    Good design acknowledges reality. Although knowing manual ingestion is not scalable, it let 
                    us validate the core hypothesis with real users. Now we know exactly what users need, trust 
                    and what infrastructure must come next.
                  </p>
                </div>
                
                <div className="scaffold-takeaway-box">
                  <p className="scaffold-takeaway-title"><strong>As a project manager</strong></p>
                  <p className="scaffold-takeaway-text">
                    Leading a cross-functional team taught that me that effective PM work means trusting 
                    teammates and adapting quickly. I focused on creating clear goals while contributing across 
                    all roles. I trusted each team member's expertise while staying involved to facilitate 
                    alignment and fill gaps when needed. This collaborative approach showed me that the best 
                    solutions often emerged from collaborative problem solving and creative thinking. Being 
                    hands-on across all aspects helped me understand and make decisions faster when adaptability 
                    was needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </CaseStudyLayout>
      <ProjectFooter />
    </>
  );
}

export default ScaffoldCaseStudy;