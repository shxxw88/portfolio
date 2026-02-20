import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Hero.css';

const NAME = 'Sharleen Wang';

const getDelay = (char) => {
  if (char === ' ') return 120;
  if ('.!?,'.includes(char)) return 200;
  return 70 + Math.random() * 40;
};

export default function Hero() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [caretVisible, setCaretVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    const typeNext = () => {
      if (i >= NAME.length) {
        // Stop caret after a pause
        setTimeout(() => setCaretVisible(false), 1000);
        return;
      }
      const delay = getDelay(NAME[i]);
      setTimeout(() => {
        i++;
        setVisibleCount(i);
        typeNext();
      }, delay);
    };

    const startDelay = setTimeout(typeNext, 500);
    return () => clearTimeout(startDelay);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-name">
          <span style={{ whiteSpace: 'pre' }}>
            {NAME.slice(0, visibleCount)}
          </span>
          {caretVisible && (
            <motion.span
              className="typing-caret"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
            >
              
            </motion.span>
          )}
        </h1>

        <span className="hero-role highlight">Product Designer</span>

        <div className="hero-description">
          <p className="hero-title">
            I bring an artist's eye and designer's mindset to every product I build.
          </p>
          <p className="hero-subtitle">
            (Plus a bit of code to make it all come alive!)
          </p>
        </div>
      </div>
    </section>
  );
}