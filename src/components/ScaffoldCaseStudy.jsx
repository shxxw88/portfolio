import { useState, useEffect } from 'react';
import CaseStudyLayout from './CaseStudyLayout';
import ProjectFooter from './ProjectFooter';
import VideoPlayer from './VideoPlayer';
import './ScaffoldCaseStudy.css';

function ScaffoldCaseStudy() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setLightboxSrc(null); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);
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
    heroClassName: "scaffold-hero",
    demoUrl: "https://scaffold-theta.vercel.app/",
    demoLabel: "Try the Demo",
    repoUrl: "https://github.com/shxxw88/scaffold-demo?tab=readme-ov-file"
  };


  return (
    <>
    <CaseStudyLayout {...projectData}>
      <section className="case-study-content">
        <div className="content-main">
          {/* Insights Section */}
          <div id="insights" className="content-section">
            <h2 className="cs-section-heading insights-heading">Insights</h2>
            
            <p className="insights-subtitle">
              Canada's skilled trades face a retention crisis:
            </p>
            
            <div className="insights-stats">
              <div className="stat-item">
                <div className="stat-number">700,000</div>
                <div className="stat-description">
                  Trades people<br/>retiring by 2028
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">50,000</div>
                <div className="stat-description">
                  BC registered<br/>apprentices
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">46%</div>
                <div className="stat-description">
                  Apprenticeship<br/>completion rate
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">Billions</div>
                <div className="stat-description">
                  in fragmented<br/>funding
                </div>
              </div>
            </div>
            
            <p className="insights-conclusion">
              While thousands of dollars in funding exists for trades training in BC. 
              eligible apprentices are not accessing it.
            </p>
          </div>

          {/* Research & Discovery Section */}
          <div id="research" className="content-section">
            <h2 className="cs-section-heading research-heading">Research & Discovery</h2>
            
            <p className="research-intro">
              Through user interviews with trades workers and apprentices as well as heuristic 
              analysis of existing grant portals and applications, these key insights emerged:
            </p>
            
            <div className="research-findings">
              <div className="finding-card">
                <div className="finding-number">1.</div>
                <div className="finding-content">
                  <h3 className="finding-title">Discoverability is the primary barrier</h3>
                  <p className="finding-text">
                    Funding information is scattered across dozens of government and private sites with 
                    no way to filter what they actually qualify for.
                  </p>
                </div>
              </div>
              
              <div className="finding-card">
                <div className="finding-number">2.</div>
                <div className="finding-content">
                  <h3 className="finding-title">Complicated process causes abandonment</h3>
                  <p className="finding-text">
                    Complex language and multi step processes makes students give up before 
                    determining if they qualify.
                  </p>
                </div>
              </div>
              
              <div className="finding-card">
                <div className="finding-number">3.</div>
                <div className="finding-content">
                  <h3 className="finding-title">Time is the real cost</h3>
                  <p className="finding-text">
                    When applications require essays and repetitive manual writing, apprentices 
                    juggling work and school abandon them entirely.
                  </p>
                </div>
              </div>
              
              <div className="finding-card">
                <div className="finding-number">4.</div>
                <div className="finding-content">
                  <h3 className="finding-title">Financial decisions demand clarity</h3>
                  <p className="finding-text">
                    When money and tax implications are involved, users need complete transparency.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="research-question">
              How can we make financial support easier to discover, understand and apply for, 
              without overwhelming users who are already stretched thin?
            </p>

          <div className="user-persona-section">
            <h3 className="persona-heading">User Personas</h3>
            <p className="persona-intro">
              Based on interviews and research, two personas were created to represent the core needs, goals, and pain points of our target audience.
            </p>

            <div className="persona-cards-grid">

              {/* Primary Persona — Talia */}
              <div className="scaffold-persona-card">
                <div className="persona-profile">
                  <div className="persona-image">
                    <img src="/images/scaffold-persona.png" alt="Talia Redsky" />
                  </div>
                  <div className="persona-info">
                    <h4 className="persona-name">Talia Redsky</h4>
                    <p className="persona-role">28, Carpentry Apprentice</p>
                    <p className="persona-location">Williams Lake, BC</p>
                    <p className="persona-bio">Indigenous tradeswoman working full-time for a small construction company while training toward her Red Seal certification. Passionate about her community but frustrated by how difficult it is to find and apply for Indigenous-specific funding.</p>
                  </div>
                </div>

                <p className="persona-quote">"I want to keep learning and supporting my community, but the system makes it hard to get started."</p>

                <div className="persona-details">
                  <div className="persona-column">
                    <h5 className="persona-column-title">Goals</h5>
                    <ul className="persona-list">
                      <li>Access Indigenous-specific funding programs.</li>
                      <li>Save time with a tool that explains eligibility in plain language.</li>
                      <li>Never miss a deadline or lose track of applications.</li>
                      <li>Use technology that reflects her community values.</li>
                    </ul>
                  </div>
                  <div className="persona-column">
                    <h5 className="persona-column-title">Pain Points</h5>
                    <ul className="persona-list">
                      <li>Grant information scattered across multiple government sites.</li>
                      <li>Missed deadlines due to lack of reminders.</li>
                      <li>Limited awareness of what she qualifies for.</li>
                    </ul>
                  </div>
                </div>

                <div className="persona-scenario">
                  <h5 className="persona-column-title">Scenario</h5>
                  <p className="persona-scenario-text">Talia recently tried applying for Indigenous apprenticeship grants but found each one had different forms, deadlines, and requirements. After long workdays, she runs out of time and energy before completing the process.</p>
                </div>

                <div className="persona-tech-row">
                  <h5 className="persona-column-title">Technology</h5>
                  <p className="persona-tech-text">Smartphone (Android) · Laptop for forms and documents</p>
                </div>
              </div>

              {/* Secondary Persona — Mateo */}
              <div className="scaffold-persona-card">
                <div className="persona-profile">
                  <div className="persona-image">
                    <img src="/images/scaffold-persona2.png" alt="Mateo Alvarez" />
                  </div>
                  <div className="persona-info">
                    <h4 className="persona-name">Mateo Alvarez</h4>
                    <p className="persona-role">22, Plumbing Apprentice</p>
                    <p className="persona-location">Surrey, BC</p>
                    <p className="persona-bio">Second-year trade school student balancing classes with part-time work under a local contractor. Motivated and eager to learn, but unsure which grants apply to him or how to navigate the process. Needs something simple and mobile-first.</p>
                  </div>
                </div>

                <p className="persona-quote">"I just want to focus on learning my trade and not figuring out endless paperwork."</p>

                <div className="persona-details">
                  <div className="persona-column">
                    <h5 className="persona-column-title">Goals</h5>
                    <ul className="persona-list">
                      <li>Find and apply for apprenticeship grants and bursaries.</li>
                      <li>Get reminders for upcoming application deadlines.</li>
                      <li>Access funding without feeling overwhelmed.</li>
                      <li>Build financial independence while completing training.</li>
                    </ul>
                  </div>
                  <div className="persona-column">
                    <h5 className="persona-column-title">Pain Points</h5>
                    <ul className="persona-list">
                      <li>Unaware of grants until others mention them.</li>
                      <li>Application forms are confusing and full of jargon.</li>
                      <li>Government websites are not mobile-friendly.</li>
                      <li>Misses opportunities due to unclear deadlines.</li>
                    </ul>
                  </div>
                </div>

                <div className="persona-scenario">
                  <h5 className="persona-column-title">Scenario</h5>
                  <p className="persona-scenario-text">After getting one grant through word of mouth, Mateo discovered the program was canceled the following year. Searching for alternatives left him overwhelmed — he spent hours online and eventually gave up.</p>
                </div>

                <div className="persona-tech-row">
                  <h5 className="persona-column-title">Technology</h5>
                  <p className="persona-tech-text">Smartphone (iPhone) · Laptop for coursework and applications</p>
                </div>
              </div>

            </div>
          </div>
</div>

          {/* Design Strategy Section */}
<div id="strategy" className="content-section">
  <h2 className="cs-section-heading strategy-heading">Design Strategy</h2>
  
  <p className="strategy-intro">
    Scaffold's design strategy is to: <strong>reduce cognitive load, help users make 
    informed decisions and prioritize mobile-first simplicity.</strong> Every feature 
    helps users move forward efficiently without feeling overwhelmed.
  </p>
  
  <p className="strategy-flow-title"><strong>User Flow</strong></p>
  
  <p className="strategy-flow-description">
    From scattered information to a guided journey: Profile Creation → Discover Grants → Verify → Apply
  </p>
  
  <div className="strategy-flow-image">
    <img
      src="/images/scaffold-flow.png"
      alt="Scaffold user flow diagram"
      className="zoomable-image"
      onClick={() => setLightboxSrc('/images/scaffold-flow.png')}
    />
  </div>
<p className="strategy-subsection-title"><strong>Design Iterations</strong></p>

<p className="strategy-iterations-intro">
  Through iterative wireframing and testing, it was discovered that readability and simplicity was the highest 
  priority. The final interface breaks applications into guided steps and removes unnecessary information 
  to reduce cognitive load.
</p>

<div className="scaffold-strategy-iterations-grid">
<div className="scaffold-iteration-item">
  <div className="scaffold-iteration-image">
    <img src="/images/scaffold-lofi.png" alt="Design iteration 1" />
  </div>
  <p className="implementation-label">Lo-fi</p>
  <p className="implementation-text">Too much information on a single screen with grant details and snapshots competing for attention.</p>
</div>

<div className="scaffold-iteration-item">
  <div className="scaffold-iteration-image">
    <img src="/images/scaffold-midfi.png" alt="Design iteration 2" />
  </div>
  <p className="implementation-label">Mid-fi</p>
  <p className="implementation-text">UI needed refinement and the application tracker wasn't giving users enough at a glance.</p>
</div>

<div className="scaffold-iteration-item">
  <div className="scaffold-iteration-image">
    <img src="/images/scaffold-hifi.png" alt="Design iteration 3" />
  </div>
  <p className="implementation-label">Final</p>
  <p className="implementation-text">Polished UI with funding amounts surfaced upfront and clear calls to action throughout.</p>
</div>
</div>

{/* Design Implementations */}
<div className="scaffold-implementations-subsection">

  {/* Grant Info Page */}
  <div className="scaffold-implementation-example">
    <div className="scaffold-implementation-column">
      <div className="scaffold-implementation-inner">
        <img src="/images/scaffold-info-before.png" alt="Grant info before" />
      </div>
    </div>
    <div className="scaffold-implementation-arrow">→</div>
    <div className="scaffold-implementation-column">
      <div className="scaffold-implementation-inner">
        <img src="/images/scaffold-info-after.png" alt="Grant info after" />
      </div>
    </div>
  </div>
  <div className="scaffold-implementation-texts">
    <div className="scaffold-implementation-text-item">
      <p className="implementation-label">Before:</p>
      <p className="implementation-text">Key details like amount, deadline, and eligibility were buried in a dense paragraph, making it hard to quickly assess a grant.</p>
    </div>
    <div className="scaffold-implementation-spacer"></div>
    <div className="scaffold-implementation-text-item">
      <p className="implementation-label">After:</p>
      <p className="implementation-text">Scannable chips surface the most critical information upfront, letting users evaluate fit at a glance.</p>
    </div>
  </div>


  {/* Grant Cards */}
  <div className="scaffold-implementation-example">
    <div className="scaffold-implementation-column">
      <div className="scaffold-implementation-inner">
        <img src="/images/scaffold-grantcard-before.png" alt="Grant cards before" />
      </div>
    </div>
    <div className="scaffold-implementation-arrow">→</div>
    <div className="scaffold-implementation-column">
      <div className="scaffold-implementation-inner">
        <img src="/images/scaffold-grantcard-after.png" alt="Grant cards after" />
      </div>
    </div>
  </div>
  <div className="scaffold-implementation-texts">
    <div className="scaffold-implementation-text-item">
      <p className="implementation-label">Before:</p>
      <p className="implementation-text">Inconsistent layout and competing visual elements made it difficult to compare grants or identify eligibility status.</p>
    </div>
    <div className="scaffold-implementation-spacer"></div>
    <div className="scaffold-implementation-text-item">
      <p className="implementation-label">After:</p>
      <p className="implementation-text">A unified card structure with clear hierarchy makes eligibility, amount, and deadline immediately readable.</p>
    </div>
  </div>


  {/* Progress Tracker */}
  <div className="scaffold-implementation-example">
    <div className="scaffold-implementation-column">
      <div className="scaffold-implementation-inner">
        <img src="/images/scaffold-progress-before.png" alt="Progress tracker before" />
      </div>
    </div>
    <div className="scaffold-implementation-arrow">→</div>
    <div className="scaffold-implementation-column">
      <div className="scaffold-implementation-inner">
        <img src="/images/scaffold-progress-after.png" alt="Progress tracker after" />
      </div>
    </div>
  </div>
  <div className="scaffold-implementation-texts">
    <div className="scaffold-implementation-text-item">
      <p className="implementation-label">Before:</p>
      <p className="implementation-text">All steps expanded simultaneously, making it hard to know where to focus or track progress through the application.</p>
    </div>
    <div className="scaffold-implementation-spacer"></div>
    <div className="scaffold-implementation-text-item">
      <p className="implementation-label">After:</p>
      <p className="implementation-text">A collapsible accordion with distinct active and completed states guides users through one step at a time.</p>
    </div>
  </div>
</div>
</div>
      {/* Solution Section */}
<div id="solution" className="content-section">
  <h2 className="cs-section-heading solution-heading">Solution</h2>
  
  <p className="solution-tagline">Resources exist, roadblocks don't have to.</p>
  
  <p className="solution-intro">
    Scaffold helps trades students and apprentices find the funding they deserve with these core features:
  </p>
  
  {/* Phone Features - One video, 3 descriptions */}
  <div className="solution-phone-features">
    <div className="phone-video-container">
      <video autoPlay loop muted playsInline>
        <source src="/videos/scaffold-application.mov" type="video/mp4" />
      </video>
    </div>
    
    <div className="phone-features-list">
      <div className="feature-item">
        <h3 className="feature-title"><span className="scaffold-emoji">📂</span> Centralized grant database with key information simplification</h3>
        <p className="feature-text">
          By centralizing trades grants into one searchable platform, Scaffold removes fragmentation 
          and simplifies comparison. Critical information such as funding amount, deadlines and 
          eligibility requirements is surfaced immediately to reduce cognitive effort.
        </p>
      </div>
      
      <div className="feature-item">
        <h3 className="feature-title"><span className="scaffold-emoji">🎯</span> AI-powered grant matching with smart profiles</h3>
        <p className="feature-text">
          Scaffold's smart profile capture key user information once and use AI-powered matching to 
          connect applicants with grants they are most likely eligible for. Reducing guesswork and 
          unnecessary searching.
        </p>
      </div>
      
      <div className="feature-item">
        <h3 className="feature-title"><span className="scaffold-emoji">📝</span> AI application support</h3>
        <p className="feature-text">
          Smart application support creates application templates that align with real grant forms, 
          allowing users to reuse and adapt responses across grants with AI-supported long-answer generation.
        </p>
      </div>
    </div>
  </div>
  
  {/* Desktop Feature - Separate */}
  <div className="solution-desktop-feature">
    <div className="desktop-feature-content">
      <h3 className="feature-title"><span className="scaffold-emoji">💻</span> Desktop supplement</h3>
      <p className="feature-text">
        While the core experience is mobile-first, desktop acts as a supplemental environment for 
        reviewing grant details and completing longer application responses more comfortably.
      </p>
    </div>
    <div className="desktop-video-container">
      <video autoPlay loop muted playsInline>
        <source src="/videos/scaffold-video.mov" type="video/mp4" />
      </video>
    </div>
  </div>

  {/* Add this after the desktop feature, before the closing </div> of solution section */}

<div className="technical-implementation">
  <h3 className="technical-heading">Technical Implementation</h3>
  
  <p className="technical-intro">
    Scaffold's technical implementation balanced AI capabilities with user trust and mobile first needs.
  </p>
  
  <div className="technical-box">
    <div className="tech-stack">
      <p className="tech-label"><strong>Stack:</strong></p>
      <p className="tech-text">
        Expo React Native, Node.js backend, Supabase database, OpenAI API for AI processing
      </p>
    </div>
    
    <div className="tech-flow">
      <p className="tech-label"><strong>Core flow:</strong></p>
      <ol className="tech-list">
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
<div id="marketing" className="content-section">
  <h2 className="cs-section-heading marketing-heading">Marketing & Launch Support</h2>
  
  <p className="marketing-intro">
    To support the BCIT Showcase and validate product market fit, Scaffold's brand identity, demo materials, and promotional assets were developed to engage trades students. 
    The materials were distributed to guests and judges at the BCIT D3/FSWD x ConnectHer Student Design & Technology Innovation Showcase.
  </p>
  
  {/* Row 1 - Brand Identity */}
  <div className="marketing-asset">
    <div className="marketing-row marketing-full">
      <img src="/images/scaffold-style.png" alt="Scaffold brand identity and color palette" className="zoomable-image" onClick={() => setLightboxSrc('/images/scaffold-style.png')} />
    </div>
    <p className="marketing-caption">Brand identity style guide with logo, typography and colours</p>
  </div>
  
  {/* Row 2 - Brochure and Stickers */}
  <div className="marketing-asset">
    <div className="marketing-row marketing-grid-brochure">
      <div className="marketing-asset-item">
        <img src="/images/scaffold-brochure.png" alt="Scaffold brochure" className="zoomable-image" onClick={() => setLightboxSrc('/images/scaffold-brochure.png')} />
        <p className="marketing-caption">Showcase brochure</p>
      </div>
      <div className="marketing-asset-item">
        <img src="/images/scaffold-stickers.png" alt="Scaffold promotional stickers" className="zoomable-image" onClick={() => setLightboxSrc('/images/scaffold-stickers.png')} />
        <p className="marketing-caption">Promotional stickers</p>
      </div>
    </div>
  </div>
  
  {/* Row 3 - Promo Video */}
  <div className="marketing-asset">
    <div className="marketing-row marketing-video">
      <VideoPlayer src="/videos/scaffold-promo.mov" />
    </div>
    <p className="marketing-caption">Promotional video</p>
  </div>
  
  {/* Row 4 - Billboard and Business Cards */}
  <div className="marketing-asset">
    <div className="marketing-row marketing-grid-equal">
      <div className="marketing-asset-item">
        <img src="/images/scaffold-banner.png" alt="Scaffold billboard banner" className="zoomable-image" onClick={() => setLightboxSrc('/images/scaffold-banner.png')} />
        <p className="marketing-caption">Event banner</p>
      </div>
      <div className="marketing-asset-item">
        <img src="/images/scaffold-signs.png" alt="Scaffold business cards" className="zoomable-image" onClick={() => setLightboxSrc('/images/scaffold-signs.png')} />
        <p className="marketing-caption">Signage</p>
      </div>
    </div>
  </div>
</div>

       {/* Outcomes & Takeaways Section */}
<div id="outcomes" className="content-section">
  {/* Outcomes Subsection */}
  <h2 className="cs-section-heading outcomes-heading">Outcomes</h2>
  
  <p className="outcomes-intro">
    After 3 months design and development, Scaffold was showcased at BCIT's D3/FSWD x 
    ConnectHer Student Design & Technology Innovation Showcase.
  </p>
  
  <p className="outcomes-intro">
    The project was presented to distinguished judges including City of Burnaby Mayor, 
    B.C.'s Minister of State for Artificial Intelligence and New Technology and other 
    industry leaders.
  </p>
  
  <p className="outcomes-subsection-title"><strong>Showcase Regcognition</strong></p>
  
  <div className="outcomes-stats">
    <div className="outcome-stat">
      <div className="outcome-icon">🏆</div>
      <div className="outcome-number">3rd place overall</div>
      <p className="outcome-description">out of 10 capstone projects.</p>
    </div>
    
    <div className="outcome-stat">
      <div className="outcome-icon">👥</div>
      <div className="outcome-number">300+ attendees</div>
      <p className="outcome-description">engaged with live demos, including current trades students and apprentices.</p>
    </div>
    
    <div className="outcome-stat">
      <div className="outcome-icon">✅</div>
      <div className="outcome-number">Judges validated</div>
      <p className="outcome-description">Scaffolds real world viability and strategic approach to systemic barriers.</p>
    </div>
  </div>
  
  <div className="outcomes-photos">
    <img src="/images/scaffold-image1.jpg" alt="Scaffold showcase presentation" />
    <img src="/images/scaffold-image2.JPG" alt="Scaffold showcase demo" />
  </div>
  
  {/* Takeaways Subsection */}
  <div className="takeaways-section">
  <h2 className="cs-section-heading takeaways-heading">Takeaways</h2>

  <div className="takeaways-boxes">
    <div className="takeaway-box">
      <p className="takeaway-title"><strong>Experiencing the problems we were solving</strong></p>
      <p className="takeaway-text">
        While developing Scaffold, we struggled with the same fragmented grant information our users 
        face. Manual grant ingestion with no automated web scraping pipeline became our biggest 
        bottleneck. Validating that data fragmentation isn't just user inconvenience, it's a systemic 
        infrastructure problem.
      </p>
      <p className="takeaway-subtitle"><strong>What this taught us:</strong></p>
      <p className="takeaway-text">
        Good design acknowledges reality. Although knowing manual ingestion is not scalable, it let 
        us validate the core hypothesis with real users. Now we know exactly what users need, trust 
        and what infrastructure must come next.
      </p>
    </div>
    
    <div className="takeaway-box">
      <p className="takeaway-title"><strong>As a project manager</strong></p>
      <p className="takeaway-text">
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
        </div>
      </section>
    </CaseStudyLayout>
         <ProjectFooter />

      {lightboxSrc && (
        <div className="lightbox-overlay" onClick={() => setLightboxSrc(null)}>
          <img src={lightboxSrc} alt="Zoomed view" className="lightbox-image" />
        </div>
      )}
</>
  );
}

export default ScaffoldCaseStudy;