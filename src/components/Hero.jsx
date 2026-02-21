import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import VariableProximity from './VariableProximity';
// import ScrollArrow from './ScrollArrow';
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
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const typeNext = () => {
      if (i >= NAME.length) {
        setTimeout(() => {
          setCaretVisible(false);
          setTypingDone(true);
        }, 1000);
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

  const scrollToWorks = () => {
    const works = document.querySelector('.featured-works');
    if (works) works.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-name">
          {!typingDone ? (
            <>
              <span style={{ whiteSpace: 'pre' }}>
                {NAME.slice(0, visibleCount)}
              </span>
              {caretVisible && (
                <motion.span
                  className="typing-caret"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                />
              )}
            </>
          ) : (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
            >
              <VariableProximity
                label={NAME}
                radius={140}
                minWeight={400}
                maxWeight={800}
                falloff="quadratic"
                enabled={true}
              />
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

      {/* Fades in after hero animations settle */}
      {/* <ScrollArrow onClick={scrollToWorks} /> */}
    </section>
  );
}