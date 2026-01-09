import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-circle">
        <div className="footer-content">
          <h3 className="footer-heading">Connect with me!</h3>
          <div className="footer-links">
            <a 
              href="https://www.linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="footer-link"
            >
              Email
            </a>
          </div>
          <p className="footer-credit">
            This website was coded with love using React &lt;3
          </p>
        </div>
      </div>
    </footer>
  );
}