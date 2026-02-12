import CaseStudyLayout from './CaseStudyLayout';
import ProjectFooter from './ProjectFooter'; 
import { useEffect } from 'react';
import './PickiCaseStudy.css';

function PickiCaseStudy() {
  const projectData = {
    title: "Picki",
    description: [
      "For the friend groups that can never decide. Picki is the app that ends the endless debates. Create an event, invite friends to suggest activites and let Picki randomly pick your plans.",
    ],
    role: ["UX/UI Designer"],
    duration: "Jan. – April 2025",
    skills: ["Product Design","Usability Testing", "Prototyping"],
    heroImage: "/images/picki-hero.png",
    heroClassName: "picki-hero"
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
            <a href="#context" className="nav-item">Context</a>
            <a href="#persona" className="nav-item">User Persona</a>
            <a href="#userflow" className="nav-item">User Flow</a>
            <a href="#iterations" className="nav-item">Iterations</a>
            <a href="#testing" className="nav-item">Usability Tests</a>
            <a href="#design" className="nav-item">Design</a>
            <a href="#styleguide" className="nav-item">Style Guide</a>
            <a href="#reflections" className="nav-item">Reflections</a>
          </nav>

          <div className="content-main">
            {/* Context Section */}
            <div id="context" className="content-section picki-context-section">
              <h2 className="cs-section-heading">Context</h2>
              
              <div className="picki-context-chat-image">
                <img src="/images/picki-chat.png" alt="Group chat showing indecision" />
              </div>
              
              <p className="picki-context-problem-text">
                89 messages later, you've eliminated every restaurant, activity, and outdoor space in a 10-mile 
                radius. The planner friend is exhausted. Everyone else is still saying <strong>"I'm down for whatever"</strong> but 
                nothing happens.
              </p>
              
              <p className="picki-context-problem-text">
                When everyone wants to be considerate and nobody wants to impose, the group gets stuck and 
                decision fatigue sets in.
              </p>
              
              <h3 className="picki-context-subsection-title">What if nobody had to choose?</h3>
              
              <p className="picki-context-solution-text">
                Picki is an app that makes indecision fun instead of stressful. 
                Friends suggest activities they'd enjoy, everyone inputs their preferences and Picki randomly 
                picks one to plan your event.
              </p>
              
              <div className="picki-context-phone-showcase">
                <img src="/images/picki-phones.png" alt="Picki app features - Explore Ideas, Plan Events, Create Groups" />
              </div>
            </div>

            {/* User Persona Section */}
            <div id="persona" className="content-section picki-persona-section">
              <h2 className="cs-section-heading">User Persona</h2>
              
              <p className="picki-persona-intro">
                We created a user persona based on conversations with friends and peers who struggle with group decision making, helping us understand the emotional and practical barriers to spontaneous plans. 
              </p>

              <div className="picki-persona-card">
                <div className="picki-persona-profile">
                  <div className="picki-persona-image">
                    <img src="/images/picki-persona.png" alt="User Persona" />
                  </div>
                  
                  <div className="picki-persona-info">
                    <h4 className="picki-persona-name">Amy Ross</h4>
                    <p className="picki-persona-role">25, Graphic Designer</p>
                    <p className="picki-persona-location">East Vancouver, BC.</p>
                    <p className="picki-persona-bio">
                      Amy is a graphic designer living in East Vancouver, who loves trying new cafés, exploring hidden gems, and spending time with her small circle of friends. She has strong aesthetic preferences and knows exactly what kind of vibe she wants.
                    </p>
                  </div>
                </div>
                
                <div className="picki-persona-details">
                  <div className="picki-persona-column">
                    <h5 className="picki-persona-column-title">Goals:</h5>
                    <ul className="picki-persona-list">
                      <li>Discover unique spots that match her aesthetics, not generic top-rated places.</li>
                      <li>Make group decisions quickly without the guilt of being "the decider."</li>
                      <li>Turn planning from a chore into something exciting again.</li>
                    </ul>
                  </div>
                  
                  <div className="picki-persona-column">
                    <h5 className="picki-persona-column-title">Pain points:</h5>
                    <ul className="picki-persona-list">
                      <li>Worries about disappointing friends with her choices.</li>
                      <li>Gets overwhelmed by too many options and ends up choosing nothing.</li>
                      <li>Wants hidden gems and curated experiences, but finding them takes too much research.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* User Flow Section */}
            <div id="userflow" className="content-section picki-userflow-section">
              <h2 className="cs-section-heading">User Flow</h2>
              
              <p className="picki-userflow-intro">
                Picki's core experience is built around 4 key user flows:
              </p>
              
              <div className="picki-userflow-list">
                <div className="picki-userflow-item">
                  <span className="picki-userflow-number">1.</span> Create event
                </div>
                <div className="picki-userflow-item">
                  <span className="picki-userflow-number">2.</span> Create group
                </div>
                <div className="picki-userflow-item">
                  <span className="picki-userflow-number">3.</span> Explore ideas
                </div>
                <div className="picki-userflow-item">
                  <span className="picki-userflow-number">4.</span> Discovery quiz
                </div>
              </div>
              
              <div className="picki-userflow-embed">
                <iframe 
                  src="https://embed.figma.com/board/77uCMus34bkrrxgC85gOn9/Picki-user-flows?node-id=0-1&embed-host=share"
                  allowFullScreen
                  title="Picki User Flow Diagram"
                />
              </div>
            </div>

            {/* Design Iterations Section */}
            <div id="iterations" className="content-section picki-iterations-section">
              <h2 className="cs-section-heading">Design Iterations</h2>
              
              <h3 className="picki-iterations-subsection-title">Low fidelity to Mid fidelity</h3>
              
              <p className="picki-iterations-intro">
                Early wireframes focused on mapping out the essential interactions and introduced Picki's playful visual language.
              </p>
              
              <div className="picki-iterations-container">
                <div className="picki-iterations-images">
                  <div className="picki-iteration-image">
                    <img src="/images/picki-lofi1.png" alt="Low-fidelity wireframe 1" />
                  </div>
                  <div className="picki-iteration-image">
                    <img src="/images/picki-lofi2.png" alt="Low-fidelity wireframe 2" />
                  </div>
                  <div className="picki-iteration-image">
                    <img src="/images/picki-mifi1.png" alt="Mid-fidelity wireframe 1" />
                  </div>
                  <div className="picki-iteration-image">
                    <img src="/images/picki-mifi2.png" alt="Mid-fidelity wireframe 2" />
                  </div>
                </div>
                
                <div className="picki-iterations-labels">
                  <p className="picki-iteration-label">Low-fidelity mockup</p>
                  <p className="picki-iteration-label">Mid-fidelity mockup</p>
                </div>
              </div>
            </div>

            {/* Usability Tests Section */}
            <div id="testing" className="content-section picki-testing-section">
              <h2 className="cs-section-heading">Usability Tests</h2>
              
              <p className="picki-testing-intro">
                We conducted usability tests with 5 participants (ages 22–28) using Figma prototypes. Participants 
                completed 6 tasks including event creation, group management and the activity quiz feature.
              </p>
              
              <p className="picki-testing-intro">
                Issues were categorized by severity to tackle the most critical usability barriers first.
              </p>
              
              <div className="picki-testing-priorities">
                <div className="picki-priority-box high">
                  <div className="picki-priority-header">
                    <span className="picki-priority-icon">❌</span>
                    <h4 className="picki-priority-title">High Priority</h4>
                  </div>
                  <ul className="picki-priority-list">
                    <li>Button visibility & hierarchy</li>
                    <li>Groups vs. Events distinction</li>
                  </ul>
                </div>
                
                <div className="picki-priority-box medium">
                  <div className="picki-priority-header">
                    <span className="picki-priority-icon">⚠️</span>
                    <h4 className="picki-priority-title">Medium Priority</h4>
                  </div>
                  <ul className="picki-priority-list">
                    <li>Copy clarity and directiveness</li>
                  </ul>
                </div>
                
                <div className="picki-priority-box low">
                  <div className="picki-priority-header">
                    <span className="picki-priority-icon">🟢</span>
                    <h4 className="picki-priority-title">Low Priority</h4>
                  </div>
                  <ul className="picki-priority-list">
                    <li>Currency indicators</li>
                    <li>Contextual descriptions</li>
                  </ul>
                </div>
              </div>

              {/* Implementations Subsection */}
              <div className="picki-implementations-subsection">
                <h3 className="picki-implementations-title">Implementations</h3>
                
                {/* Example 1 */}
                <div className="picki-implementation-example">
                  <div className="picki-implementation-column">
                    <div className="picki-implementation-images">
                      <img src="/images/picki-eventsbefore.png" alt="Before implementation 1" />
                    </div>
                  </div>
                  
                  <div className="picki-implementation-arrow">→</div>
                  
                  <div className="picki-implementation-column">
                    <div className="picki-implementation-images">
                      <img src="/images/picki-events.png" alt="After implementation 1" />
                    </div>
                  </div>
                </div>
                
                <div className="picki-implementation-texts">
                  <div className="picki-implementation-text-item">
                    <p className="picki-implementation-label">Before:</p>
                    <p className="picki-implementation-text">
                      Unclear labels and tab style navigation caused confusion between scheduling options.
                    </p>
                  </div>
                  
                  <div className="picki-implementation-spacer"></div>
                  
                  <div className="picki-implementation-text-item">
                    <p className="picki-implementation-label">After:</p>
                    <p className="picki-implementation-text">
                      Dedicated screens with clear labels separate event timing from RSVP management.
                    </p>
                  </div>
                </div>
                
                {/* Example 2 */}
                <div className="picki-implementation-example">
                  <div className="picki-implementation-column">
                    <div className="picki-implementation-images">
                      <img src="/images/picki-invitebefore.png" alt="Before implementation 2" />
                    </div>
                  </div>
                  
                  <div className="picki-implementation-arrow">→</div>
                  
                  <div className="picki-implementation-column">
                    <div className="picki-implementation-images smaller">
                      <img src="/images/picki-invite.png" alt="After implementation 2" />
                    </div>
                  </div>
                </div>
                
                <div className="picki-implementation-texts">
                  <div className="picki-implementation-text-item">
                    <p className="picki-implementation-label">Before:</p>
                    <p className="picki-implementation-text">
                      "Make Group" in the event flow caused confusion between organizing contacts and planning activities.
                    </p>
                  </div>
                  
                  <div className="picki-implementation-spacer"></div>
                  
                  <div className="picki-implementation-text-item">
                    <p className="picki-implementation-label">After:</p>
                    <p className="picki-implementation-text">
                      Removed the "Make Group" button to streamline event creation and eliminate feature overlap.
                    </p>
                  </div>
                </div>
                
                {/* Example 3 */}
                <div className="picki-implementation-example">
                  <div className="picki-implementation-column">
                    <div className="picki-implementation-images">
                      <img src="/images/picki-budgetbefore.png" alt="Before implementation 3" />
                    </div>
                  </div>
                  
                  <div className="picki-implementation-arrow">→</div>
                  
                  <div className="picki-implementation-column">
                    <div className="picki-implementation-images smaller">
                      <img src="/images/picki-budget.png" alt="After implementation 3" />
                    </div>
                  </div>
                </div>
                
                <div className="picki-implementation-texts">
                  <div className="picki-implementation-text-item">
                    <p className="picki-implementation-label">Before:</p>
                    <p className="picki-implementation-text">
                      Missing currency symbols and range labels made the budget feature hard to interpret.
                    </p>
                  </div>
                  
                  <div className="picki-implementation-spacer"></div>
                  
                  <div className="picki-implementation-text-item">
                    <p className="picki-implementation-label">After:</p>
                    <p className="picki-implementation-text">
                      Added currency symbols and range labels for clarity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Section */}
            <div id="design" className="content-section picki-design-section">
              <h2 className="cs-section-heading">Design</h2>
              
              <p className="picki-design-intro">
                The final designs showcase Picki's core user flows with a playful, intuitive interface.
              </p>
              
              <div className="picki-design-videos-grid">
                <div className="picki-design-video-item">
                  <div className="picki-design-video-container">
                    <video autoPlay loop muted playsInline>
                      <source src="/videos/picki-explorevid.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <p className="picki-design-video-label">Explore ideas</p>
                </div>
                
                <div className="picki-design-video-item">
                  <div className="picki-design-video-container">
                    <video autoPlay loop muted playsInline>
                      <source src="/videos/picki-eventvid.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <p className="picki-design-video-label">Picki reveal</p>
                </div>
                
                <div className="picki-design-video-item">
                  <div className="picki-design-video-container">
                    <video autoPlay loop muted playsInline>
                      <source src="/videos/picki-groupvid.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <p className="picki-design-video-label">Friend groups</p>
                </div>
              </div>
            </div>

            {/* Style Guide Section */}
            <div id="styleguide" className="content-section picki-styleguide-section">
              <h2 className="cs-section-heading">Style Guide</h2>
              
              <p className="picki-styleguide-intro">
                Picki's visual identity uses bright, energetic colours and rounded typography to create an 
                intentionally approachable and playful experience. Every design choice reinforces that deciding 
                where to go should be exciting.
              </p>
              
              <div className="picki-styleguide-grid">
                <div className="picki-styleguide-row-three">
                  <img src="/images/picki-logo.png" alt="Picki style guide" />
                  <img src="/images/picki-colours.png" alt="Picki style guide" />
                  <img src="/images/picki-type.png" alt="Picki style guide" />
                </div>
                
                <div className="picki-styleguide-row-two">
                  <img src="/images/picki-cards.png" alt="Picki style guide" />
                  <img src="/images/picki-buttons.png" alt="Picki style guide" />
                </div>
              </div>
            </div>

            {/* Reflections Section */}
            <div id="reflections" className="content-section picki-reflections-section">
              <h2 className="cs-section-heading">Reflections</h2>

              <div className="picki-reflection-boxes">
                <div className="picki-reflection-box">
                  <div className="picki-reflection-layout">
                    <div className="picki-reflection-icon-col">
                      <span className="picki-reflection-icon">🎡</span>
                    </div>

                    <div className="picki-reflection-content">
                      <h3 className="picki-reflection-title">
                        The inspiration: a wheel in my backpack.
                      </h3>
                      <p className="picki-reflection-text">
                        My friend group was so chronically indecisive that we made a physical
                        "spin-the-wheel" to carry around for lunch decisions! It worked, but
                        hauling around a prop just to pick a restaurant felt a little silly.
                        That's what inspired me to create Picki, a digital solution for a
                        problem we can all relate to.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="picki-reflection-box">
                  <div className="picki-reflection-layout">
                    <div className="picki-reflection-icon-col">
                      <span className="picki-reflection-icon">📝</span>
                    </div>

                    <div className="picki-reflection-content">
                      <h3 className="picki-reflection-title">
                        Key learnings
                      </h3>

                      <p className="picki-reflection-text">
                        This project taught me that good design sometimes means removing
                        choice instead of optimizing.Important takeaways include:
                      </p>

                      <ul className="picki-reflection-list">
                        <li>Prioritize clarity over clever copy.</li>
                        <li>Test core mechanics before polishing visuals.</li>
                        <li>Never assume features that make sense to us will be obvious to users.</li>
                      </ul>
                    </div>
                  </div>
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

export default PickiCaseStudy;