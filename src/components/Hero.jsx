import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
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

export default function Hero() {
  const [flipped, setFlipped] = useState(false);
  const [hasFlipped, setHasFlipped] = useState(false);
  const [currentBack, setCurrentBack] = useState(() => getRandomImage());
  const lastBack = useRef(currentBack);

  const handleFlip = () => {
    if (!flipped) {
      const next = getRandomImage(lastBack.current);
      lastBack.current = next;
      setCurrentBack(next);
    }
    setFlipped((f) => !f);
    setHasFlipped(true);
  };

  return (
    <section className="hero">
      <motion.div
        className="postcard-scene"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.div
          className="postcard-card"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ scale: 1.012, rotate: flipped ? 0 : -0.4 }}
          onClick={handleFlip}
        >
          {/* ── FRONT ── */}
          <div className="postcard-face postcard-front">
            <img src={postcardFront} alt="Postcard front" className="postcard-img" />
            {!hasFlipped && (
              <motion.span
                className="pc-flip-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                flip ↩
              </motion.span>
            )}
          </div>

          {/* ── BACK ── */}
          <div
            className="postcard-face postcard-back"
            style={{ backgroundImage: `url(${currentBack})` }}
          />

        </motion.div>
      </motion.div>
    </section>
  );
}