import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './Hero.css';

const NAME = 'Sharleen Wang';

export default function Hero() {
  const wrapperRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (wrapperRef.current) {
      setWidth(wrapperRef.current.getBoundingClientRect().width);
    }
  }, []);

  const SWEEP_DELAY = 0.8;
  const SWEEP_DURATION = 0.6;
  const HOLD_DURATION = 1.5;

  const getOpacity = (i) => {
    if (activeIndex === null) return 0;
    const distance = Math.abs(i - activeIndex);
    if (distance === 0) return 0.35;
    if (distance === 1) return 0.2;
    if (distance === 2) return 0.08;
    return 0;
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div
          className="hero-name-wrapper"
          ref={wrapperRef}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <motion.h1
            className="hero-name"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)', 'inset(0 0% 0 0)'] }}
            transition={{
              duration: SWEEP_DURATION + HOLD_DURATION,
              times: [0, SWEEP_DURATION / (SWEEP_DURATION + HOLD_DURATION), 1],
              delay: SWEEP_DELAY,
              ease: ['easeInOut', 'linear'],
            }}
          >
            {NAME.split('').map((char, i) => (
              <span
                key={i}
                className="hero-name-char"
                onMouseEnter={() => setActiveIndex(i)}
                style={{ position: 'relative', display: 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
                <motion.span
                  className="char-highlight"
                  animate={{ opacity: getOpacity(i) }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                />
              </span>
            ))}
          </motion.h1>

          {/* Intro highlight */}
          <motion.div
            className="selection-highlight"
            initial={{ width: '0%', opacity: 1 }}
            animate={{
              width: ['0%', '100%', '100%', '100%'],
              opacity: [1, 1, 1, 0],
            }}
            transition={{
              duration: SWEEP_DURATION + HOLD_DURATION,
              times: [0, SWEEP_DURATION / (SWEEP_DURATION + HOLD_DURATION), 0.98, 1],
              delay: SWEEP_DELAY,
              ease: ['easeInOut', 'linear', 'linear'],
            }}
          />

          {/* Cursor bar */}
          <motion.div
            className="selection-cursor"
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: width, opacity: 0 }}
            transition={{
              x: { duration: SWEEP_DURATION, delay: SWEEP_DELAY, ease: 'easeInOut' },
              opacity: { duration: 0.1, delay: SWEEP_DELAY + SWEEP_DURATION + HOLD_DURATION - 0.1 },
            }}
          />
        </div>

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