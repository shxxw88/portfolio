import React from 'react';
import { motion } from 'framer-motion';
import './ProjectFooter.css';

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

function ProjectFooter() {
  return (
    <footer className="project-footer footer">
      <motion.div
        className="project-footer-content"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={fadeUp} className="project-footer-title">
          You've reached the end!
        </motion.p>

        <motion.a variants={fadeUp} href="/" className="project-footer-link">
          See more projects <span className="arrow">→</span>
        </motion.a>

        <motion.div variants={fadeUp} className="bouncing-ball" />

        <motion.div variants={fadeUp} className="project-footer-contact">
          <p className="contact-heading">Get in touch ☺</p>
          <div className="contact-links">
            <a href="mailto:sharleenwang7@gmail.com" className="contact-text-link">
              Email <span className="arrow">→</span>
            </a>
            <span className="contact-divider">/</span>
            <a
              href="https://www.linkedin.com/in/sharleenwang/"
              className="contact-text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span className="arrow">→</span>
            </a>
          </div>
        </motion.div>

      </motion.div>

      <div className="project-footer-bottom">
        <p className="project-footer-copyright">
          Designed and coded with love using React © Sharleen Wang, 2026
        </p>
      </div>
    </footer>
  );
}

export default ProjectFooter;