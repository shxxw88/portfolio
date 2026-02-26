import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🖼️ Replace these imports with your actual image paths
import back1 from "./images/postcard-back1.png";
import back2 from "./images/postcard-back2.png";
import back3 from "./images/postcard-back3.png";
import back4 from "./images/postcard-back4.png";

const backImages = [back1, back2, back3, back4];

const getRandomImage = (exclude = null) => {
  const options = backImages.filter((img) => img !== exclude);
  return options[Math.floor(Math.random() * options.length)];
};

export default function PostcardHero() {
  const [flipped, setFlipped] = useState(false);
  const [currentBack, setCurrentBack] = useState(() => getRandomImage());
  const [hasFlipped, setHasFlipped] = useState(false);
  const lastBack = useRef(currentBack);

  const handleFlip = () => {
    if (!flipped) {
      // Picking a new random back different from the last
      const next = getRandomImage(lastBack.current);
      lastBack.current = next;
      setCurrentBack(next);
    }
    setFlipped((f) => !f);
    setHasFlipped(true);
  };

  return (
    <div style={styles.scene} onClick={handleFlip} title="Click to flip">
      <motion.div
        style={styles.card}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        whileHover={{ scale: 1.015, rotate: flipped ? 0 : -0.5 }}
      >
        {/* ── FRONT ── */}
        <div style={styles.front}>
          {/* Top bar */}
          <div style={styles.topBar}>
            <span style={styles.portfolioLabel}>PORTFOLIO</span>
          </div>

          {/* Divider */}
          <div style={styles.divider} />

          {/* Stamp area */}
          <div style={styles.stampArea}>
            <div style={styles.postmarkRing}>
              <span style={styles.postmarkText}>YVR</span>
              <span style={styles.postmarkYear}>2026</span>
            </div>
            <div style={styles.stamp}>
              <span style={styles.stampLabel}>PLACE</span>
              <span style={styles.stampLabel}>STAMP</span>
              <span style={styles.stampLabel}>HERE</span>
            </div>
          </div>

          {/* Left content */}
          <div style={styles.leftContent}>
            <div style={styles.greeting}>
              <span style={styles.hey}>Hey,</span>
              <span style={styles.name}>I'm Sharleen Wang</span>
            </div>
            <div style={styles.title}>Product Designer.</div>
            <div style={styles.addressLabel}>MESSAGE</div>
          </div>

          {/* Right content */}
          <div style={styles.rightContent}>
            <div style={styles.addressLabel}>ADDRESS</div>
            <p style={styles.tagline}>
              I bring an artist's eye and designer's mindset to every product I build.
            </p>
            <p style={styles.taglineSub}>(Plus a bit of code to make it all come alive!)</p>

            <div style={styles.addressLines}>
              <div style={styles.addressLine} />
              <div style={styles.addressLine} />
              <div style={styles.addressLine} />
            </div>
          </div>

          {/* Bottom bar */}
          <div style={styles.bottomBar}>
            <span style={styles.location}>VANCOUVER &nbsp;&nbsp; 2026</span>
            {!hasFlipped && (
              <motion.span
                style={styles.flipHint}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                flip ↩
              </motion.span>
            )}
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          style={{
            ...styles.back,
            backgroundImage: `url(${currentBack})`,
          }}
        >
          <div style={styles.backOverlay} />
          <div style={styles.backTopBar}>
            <span style={styles.portfolioLabel}>PORTFOLIO</span>
          </div>
          <motion.span
            key={currentBack}
            style={styles.backTitle}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            Portfolio
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Styles
// ─────────────────────────────────────────────
const CARD_W = 600;
const CARD_H = 400;
const FONT_MONO = "'Courier New', Courier, monospace";

const styles = {
  scene: {
    width: CARD_W,
    height: CARD_H,
    perspective: 1200,
    cursor: "pointer",
    userSelect: "none",
    WebkitUserSelect: "none",
  },

  card: {
    width: "100%",
    height: "100%",
    position: "relative",
    transformStyle: "preserve-3d",
  },

  // ── shared face base ──
  faceBase: {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    borderRadius: 4,
    overflow: "hidden",
    boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
  },

  // ── FRONT ──
  front: {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    borderRadius: 4,
    overflow: "hidden",
    boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
    backgroundColor: "#fafaf8",
    display: "grid",
    gridTemplateColumns: "1fr 1px 1fr",
    gridTemplateRows: "auto 1fr auto",
    fontFamily: FONT_MONO,
  },

  topBar: {
    gridColumn: "1 / 4",
    padding: "12px 20px 8px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #e8e8e4",
  },

  portfolioLabel: {
    fontSize: 9,
    letterSpacing: "0.18em",
    color: "#aaa",
    fontFamily: FONT_MONO,
  },

  divider: {
    gridColumn: "2 / 3",
    gridRow: "2 / 3",
    width: 1,
    background:
      "repeating-linear-gradient(to bottom, #ccc 0px, #ccc 6px, transparent 6px, transparent 12px)",
    alignSelf: "stretch",
    margin: "0 0",
  },

  stampArea: {
    gridColumn: "3 / 4",
    gridRow: "1 / 2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: 10,
    padding: "8px 16px 0 0",
    position: "absolute",
    top: 0,
    right: 0,
  },

  postmarkRing: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    border: "1.5px solid #b8c44a",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginRight: 4,
  },

  postmarkText: {
    fontSize: 8,
    letterSpacing: "0.12em",
    color: "#b8c44a",
    fontFamily: FONT_MONO,
    lineHeight: 1.1,
  },

  postmarkYear: {
    fontSize: 7,
    color: "#b8c44a",
    fontFamily: FONT_MONO,
    lineHeight: 1.1,
  },

  stamp: {
    width: 52,
    height: 62,
    border: "1.5px solid #b8c44a",
    marginTop: 16,
    marginRight: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },

  stampLabel: {
    fontSize: 7,
    letterSpacing: "0.15em",
    color: "#b8c44a",
    fontFamily: FONT_MONO,
    lineHeight: 1.2,
  },

  leftContent: {
    gridColumn: "1 / 2",
    gridRow: "2 / 3",
    padding: "28px 24px 16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  greeting: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  hey: {
    fontSize: 13,
    color: "#555",
    fontFamily: FONT_MONO,
  },

  name: {
    fontSize: 13,
    color: "#333",
    fontFamily: FONT_MONO,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a1a1a",
    fontFamily: FONT_MONO,
    marginTop: 10,
    letterSpacing: "-0.01em",
  },

  addressLabel: {
    fontSize: 8,
    letterSpacing: "0.2em",
    color: "#bbb",
    fontFamily: FONT_MONO,
    marginTop: "auto",
  },

  rightContent: {
    gridColumn: "3 / 4",
    gridRow: "2 / 3",
    padding: "28px 24px 16px",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  tagline: {
    fontSize: 11.5,
    lineHeight: 1.6,
    color: "#444",
    fontFamily: FONT_MONO,
    textDecoration: "underline",
    textUnderlineOffset: 3,
    textDecorationColor: "#ccc",
    margin: 0,
    marginTop: 12,
  },

  taglineSub: {
    fontSize: 11.5,
    lineHeight: 1.6,
    color: "#444",
    fontFamily: FONT_MONO,
    textDecoration: "underline",
    textUnderlineOffset: 3,
    textDecorationColor: "#ccc",
    margin: 0,
  },

  addressLines: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: "auto",
  },

  addressLine: {
    height: 1,
    backgroundColor: "#ddd",
    width: "100%",
  },

  bottomBar: {
    gridColumn: "1 / 4",
    padding: "8px 20px",
    borderTop: "1px solid #e8e8e4",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  location: {
    fontSize: 9,
    letterSpacing: "0.18em",
    color: "#aaa",
    fontFamily: FONT_MONO,
  },

  flipHint: {
    fontSize: 9,
    letterSpacing: "0.12em",
    color: "#b8c44a",
    fontFamily: FONT_MONO,
  },

  // ── BACK ──
  back: {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    borderRadius: 4,
    overflow: "hidden",
    boxShadow: "0 8px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)",
    transform: "rotateY(180deg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#222",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  backOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 60%)",
    pointerEvents: "none",
  },

  backTopBar: {
    position: "relative",
    zIndex: 1,
    padding: "12px 20px",
    borderBottom: "1px solid rgba(255,255,255,0.15)",
  },

  backTitle: {
    position: "relative",
    zIndex: 1,
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    fontSize: 28,
    color: "#fff",
    padding: "0 24px 24px",
    letterSpacing: "0.02em",
  },
};
