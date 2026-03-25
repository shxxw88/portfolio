import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './Hero.css';

import postcardFront from '/images/postcard-front.png';
import back1 from '/images/postcard-back1.png';
import back2 from '/images/postcard-back2.png';
import back3 from '/images/postcard-back3.png';
import back4 from '/images/postcard-back4.png';

const BACK_IMAGES = [back1, back2, back3, back4];

const getRandomImage = (exclude = null) => {
  const options = BACK_IMAGES.filter((img) => img !== exclude);
  return options[Math.floor(Math.random() * options.length)];
};

const SPRING = { stiffness: 60, damping: 18, mass: 1.2 };
const MAX_TILT = 12;
const isTouch = window.matchMedia('(pointer: coarse)').matches;
const isMobilePhone = isTouch && window.innerWidth < 768;

function TypewriterText({ text, delay = 0, className }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const typeNext = () => {
        if (i >= text.length) return;
        setTimeout(() => {
          i++;
          setVisibleCount(i);
          typeNext();
        }, 60 + Math.random() * 30);
      };
      typeNext();
    }, delay);
    return () => clearTimeout(start);
  }, [text, delay]);

  return (
    <p className={className}>
      {text.slice(0, visibleCount)}
      {visibleCount < text.length && (
        <motion.span
          className="typing-caret"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        />
      )}
    </p>
  );
}

export default function Hero() {
  const [flipped, setFlipped] = useState(false);
  const [currentBack, setCurrentBack] = useState(() => getRandomImage());
  const lastBack = useRef(currentBack);
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, SPRING);
  const springY = useSpring(mouseY, SPRING);
  const rotateX = useTransform(springY, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleFlip = () => {
    if (!flipped) {
      const next = getRandomImage(lastBack.current);
      lastBack.current = next;
      setCurrentBack(next);
    }
    setFlipped((f) => !f);
  };

  if (isMobilePhone) {
    return (
      <section className="hero hero--mobile">
        <div className="hero-mobile-copy">
          <p className="hmc-greeting">Hey, I'm Sharleen Wang</p>

          <TypewriterText
            text="Product Designer"
            delay={300}
            className="hmc-title"
          />

          <div className="hmc-desc-block">
            <p className="hmc-desc">
              I bring an artist's eye and designer's mindset to every product I build.
            </p>
            <p className="hmc-desc">
              (Plus a bit of code to make it all come alive!)
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero">
      <motion.div
        className="postcard-scene"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.div
          ref={cardRef}
          className="postcard-tilt"
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="postcard-card"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={handleFlip}
          >
            <div className="postcard-face postcard-front">
              <img src={postcardFront} alt="Postcard front" className="postcard-img" />
            </div>
            <div
              className="postcard-face postcard-back"
              style={{ backgroundImage: `url(${currentBack})` }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
