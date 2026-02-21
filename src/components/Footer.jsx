import './Footer.css';

export default function Footer() {
  const links = [
     { id: 'email', label: 'Email', href: 'mailto:sharleenwang7@gmail.com' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/sharleenwang/' },
  ];

  return (
    <footer className="footer">
      {/* No background — transparent */}

      <div className="footer-content">
        <p className="footer-label">Connect with me!</p>

        <div className="footer-links">
          {links.map((link, i) => (
            <span key={link.id} className="footer-link-group">
              <a
                href={link.href}
                className="footer-link"
                target={link.id === 'linkedin' ? '_blank' : undefined}
                rel={link.id === 'linkedin' ? 'noreferrer' : undefined}
              >
                {link.label}
                <span className="arrow">→</span>
              </a>
              {i < links.length - 1 && (
                <span className="footer-divider">/</span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-credit">
          Designed and coded with love using React &copy; Sharleen Wang, 2026
        </p>
      </div>
    </footer>
  );
}