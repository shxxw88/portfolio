import CaseStudyLayout from './CaseStudyLayout';
import ProjectFooter from './ProjectFooter';
import './VCHCaseStudy.css';

function VCHCaseStudy() {
  const projectData = {
    title: "Parenting Skills",
    description: [
      "Refining the digital learning experience for Vancouver Coastal Health's parenting skills program by applying brand standards to UI components, designing a hero cover, and creating original illustrations for module content.",
    ],
    role: ["Multimedia Design Intern"],
    duration: "April – June 2026",
    skills: ["UX/UI Design", "Illustration", "Brand Identity"],
    heroImage: "/images/vch-hero.png",
    heroClassName: "vch-hero",
    disclaimer: "Some on-screen text has been replaced with placeholder copy at the client's request.",
  };

  return (
    <>
      <CaseStudyLayout {...projectData}>
        <section className="case-study-content">
          <div className="content-main">

            {/* Context */}
            <div className="content-section">
              <h2 className="cs-section-heading">Context</h2>
              <p className="vch-body-text">
The parenting skills e-learning website had strong content but lacked a consistent look. Working with the VCH Learning Technologies team, I shaped the visual system with a custom landing page hero, brand-aligned UI components, and original module illustrations.
              </p>
            </div>

            {/* 01 Hero Cover */}
            <div className="content-section">
              <h2 className="cs-section-heading">01 — Hero Cover</h2>
              <h3 className="vch-subsection-title">A grounded kind of playful</h3>
              <p className="vch-body-text">
Out of several cover explorations for the website landing page, the selected direction pairs a fluid, hand-drawn brush stroke, evoking the spontaneity and energy of childhood, with a deep, calming blue that grounds the experience in VCH's visual identity. Type hierarchy and contrast were prioritized throughout to keep the cover readable and on-brand.
             </p>

              <div className="vch-full-bleed">
                <img src="/images/vch-hero-c.png" alt="Selected hero cover" />
              </div>

              <div className="vch-explorations-img">
                <img src="/images/vch-hero-explorations.png" alt="Hero cover explorations" />
              </div>
              <div className="vch-divider-note">Other explorations</div>

            </div>

            {/* 02 UI Refinements */}
            <div className="content-section">
              <h2 className="cs-section-heading">02 — UI Refinements</h2>
              <h3 className="vch-subsection-title">Aligning components to brand standards</h3>
              <p className="vch-body-text">
The existing UI components needed to align with VCH brand standards, so the module's colour palette and border weights were updated for consistency across interactive elements. </p>
              <p className="vch-body-text">
The end-of-module footer and call to action were designed to improve layout hierarchy and give the learning experience a clear, on-brand close.              </p>
              <div className="vch-ui-image">
                <img src="/images/vch-ui.png" alt="UI refinements — colour, footer, and call to action components" />
              </div>
            </div>

            {/* 03 Module Illustrations */}
            <div className="content-section">
              <h2 className="cs-section-heading">03 — Module Illustrations</h2>
              <h3 className="vch-subsection-title">Original artwork for course content</h3>
              <p className="vch-body-text">
                Custom illustrations were created to support the module question prompts, using a playful style and a consistent colour theme to help learners engage with the material. Each was designed to be clear, culturally considerate, and consistent with VCH's accessible communication style.
              </p>
              <div className="vch-illus-video-wrap">
                <video className="vch-illus-video" autoPlay loop muted playsInline>
                  <source src="/videos/vch-video.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="vch-illus-drawings-wrap">
                <img className="vch-drawing" src="/images/vch-drawing1.png" alt="Module illustration 1" />
                <img className="vch-drawing" src="/images/vch-drawing2.png" alt="Module illustration 2" />
                <img className="vch-drawing" src="/images/vch-drawing3.png" alt="Module illustration 3" />
              </div>
            </div>

            {/* Outcome */}
            <div className="content-section">
              <h2 className="cs-section-heading">Outcome</h2>
              <div className="vch-outcome-card">
                <p className="vch-outcome-text">
                  The hero cover, illustrations, and updated UI components were delivered to the VCH Learning Technologies team for integration into the live parenting skills learning experience. All designs and illustrations were approved and will be incorporated into the final course.
                </p>
              </div>

              <div className="vch-reflection">
                <div className="vch-outcome-card">
                  <p className="vch-outcome-title"><strong>Designing within a system</strong></p>
                  <p className="vch-outcome-text">
                    Working within VCH's established brand guidelines was a shift from designing freely. At first the palette, type rules, and component standards felt like limits on what the illustrations and hero could be, but working inside them taught me where the actual creative room was. Brand guidelines aren't a restriction, they're a framework, and the fun is finding the creative freedom inside them. Often the constraints made the stronger design choices more obvious.
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

export default VCHCaseStudy;
