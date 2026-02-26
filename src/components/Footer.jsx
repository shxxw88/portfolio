import { motion } from 'framer-motion';
import './Footer.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
  }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

export default function Footer() {
  const links = [
    { id: 'email',    label: 'Email',    href: 'mailto:sharleenwang7@gmail.com' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/sharleenwang/' },
  ];

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={fadeUp} className="footer-label">
          Connect with me!
        </motion.p>

        <motion.div variants={fadeUp} className="footer-links">
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
        </motion.div>
      </motion.div>

      <div className="footer-bottom">
        <p className="footer-credit">
          Designed and coded with love using React &copy; Sharleen Wang, 2026
        </p>
      </div>
    </footer>
  );
}