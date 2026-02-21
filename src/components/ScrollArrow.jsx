import { motion } from 'framer-motion';

export default function ScrollArrow({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      aria-label="Scroll to works"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.8, ease: 'easeIn' }}
      style={{
        position: 'absolute',
        bottom: '0.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0',
        width: '16px',
        height: '36px',     /* the invisible box — arrow clips at top & bottom edges */
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <motion.span
        aria-hidden="true"
        animate={{
          y: ['-100%', '0%', '0%', '100%'], /* enter → hold → exit */
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.0,
          repeat: Infinity,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 1], /* quick enter, long hold, quick exit */
          repeatDelay: 0.6,
        }}
        style={{ display: 'block' }}
      >
        <svg
          width="12"
          height="18"
          viewBox="0 0 14 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="7" y1="0" x2="7" y2="13" stroke="#282828ff" strokeWidth="1.5" strokeLinecap="round" />
          <polyline points="2,9 7,15 12,9" stroke="#282828ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </motion.span>
    </motion.button>
  );
}