import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-circle">
        {/* Top curved text */}
        <svg className="curved-text curved-text-top" viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path 
              id="curve-top" 
              d="M 100,250 Q 400,80 700,250" 
              fill="transparent"
            />
          </defs>
          <text className="curved-text-path">
            <textPath href="#curve-top" startOffset="50%" textAnchor="middle">
              Connect with me!
            </textPath>
          </text>
        </svg>

        <div className="footer-content">
          <div className="footer-links">
            <a 
              href="https://www.linkedin.com/in/sharleenwang/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:sharleenwang7@gmail.com" 
              className="footer-link"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom wavy text */}
        <svg className="curved-text curved-text-bottom" viewBox="0 0 1000 150" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path 
              id="wave-bottom" 
              d="M 50,75 Q 150,50 250,75 T 450,75 T 650,75 T 850,75 T 950,75" 
              fill="transparent"
            />
          </defs>
          <text className="curved-text-path curved-text-path-small">
            <textPath href="#wave-bottom" startOffset="50%" textAnchor="middle">
              This website was coded with love using React &lt;3
            </textPath>
          </text>
        </svg>
      </div>
    </footer>
  );
}