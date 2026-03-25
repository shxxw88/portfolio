import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './Hero.css';

// 🖼️ Replace with your actual image paths
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
const MAX_TILT = 12; // degrees
const isTouch = window.matchMedia('(pointer: coarse)').matches;

export default function Hero() {
  const [flipped, setFlipped] = useState(false);
  const [currentBack, setCurrentBack] = useState(() => getRandomImage());
  const lastBack = useRef(currentBack);
  const cardRef = useRef(null);

  // Raw mouse motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoothed with spring physics
  const springX = useSpring(mouseX, SPRING);
  const springY = useSpring(mouseY, SPRING);

  // Map to rotation angles
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

  return (
    <section className="hero">
      <motion.div
        className="postcard-scene"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Tilt wrapper — handles mouse-tracked rotation */}
        <motion.div
          ref={cardRef}
          className="postcard-tilt"
          style={{ rotateX: isTouch ? 0 : rotateX, rotateY: isTouch ? 0 : rotateY }}
          onMouseMove={isTouch ? undefined : handleMouseMove}
          onMouseLeave={isTouch ? undefined : handleMouseLeave}
        >
          {/* Flip wrapper — handles click-to-flip rotation */}
          <motion.div
            className="postcard-card"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={handleFlip}
          >
            {/* ── FRONT ── */}
            <div className="postcard-face postcard-front">
              <img src={postcardFront} alt="Postcard front" className="postcard-img" />
            </div>

            {/* ── BACK ── */}
            <div
              className="postcard-face postcard-back"
              style={{ backgroundImage: `url(${currentBack})` }}
            />
          </motion.div>
        </motion.div>
        {isTouch && (
          <p className="postcard-flip-hint">{flipped ? 'tap to flip back' : 'tap to flip'}</p>
        )}
      </motion.div>
    </section>
  );
}