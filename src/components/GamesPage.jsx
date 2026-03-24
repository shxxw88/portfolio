import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PuzzleCard from './PuzzleCard'
import { PUZZLES } from './Puzzles'
import '../App.css'
import './GamesPage.css'

// Horizontal spread across the page; card 0 = front (highest z)
const STEP_X = 400

const FIXED_POSES = [
  { x: 0,          y: 20,  rotate: -5  },
  { x: STEP_X,     y: 120, rotate: 2   },
  { x: STEP_X * 2, y: 35,  rotate: -3  },
]

export default function GamesPage() {
  const [frontCard, setFrontCard]       = useState(0)
  const [howToPlayOpen, setHowToPlay]   = useState(false)
  const [whatIsOpen, setWhatIs]         = useState(false)

  return (
    <div className="games-page">
      <main className="games-main">
        {/* card stack + floating badges */}
        <div className="games-content">

          {/* red ticket badge — what is a nonogram */}
          <motion.button
            className="badge-nonogram"
            onClick={() => setWhatIs(true)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>NONOGRAM<br/>PUZZLE</span>
          </motion.button>

          {/* green oval badge — how to play */}
          <motion.button
            className="badge-howtoplay"
            onClick={() => setHowToPlay(true)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="badge-howtoplay__q">?</span>
            <span className="badge-howtoplay__label">How to<br/>play</span>
          </motion.button>

          {/* decorative star sticker */}
          <div className="deco-star" aria-hidden="true">★</div>

          <div className="games-stack-area">
            <div className="games-stack">
              {PUZZLES.map((puzzle, puzzleIdx) => {
                const isFront = puzzleIdx === frontCard
                const pose = FIXED_POSES[puzzleIdx]
                const zIndex = isFront ? 10 : (PUZZLES.length - puzzleIdx)

                return (
                  <motion.div
                    key={puzzle.id}
                    className="games-card-wrap"
                    style={{ zIndex }}
                    animate={{ rotate: pose.rotate, x: pose.x, y: pose.y }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    {!isFront && (
                      <div
                        className="games-card-overlay"
                        onClick={() => setFrontCard(puzzleIdx)}
                      />
                    )}
                    <PuzzleCard {...puzzle} />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        <p className="games-sub">Click a card to bring it forward.</p>
      </main>

      {/* ---- How to Play overlay ---- */}
      <AnimatePresence>
        {howToPlayOpen && (
          <motion.div
            className="games-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setHowToPlay(false)}
          >
            <motion.div
              className="games-overlay__card"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="games-overlay__close" onClick={() => setHowToPlay(false)}>×</button>
              <h2 className="games-overlay__title">How to Play</h2>
              <div className="games-overlay__body">
                <div className="overlay-rule">
                  <span className="overlay-rule__icon">◀</span>
                  <p>Each row and column has clue numbers on its left or top edge. They tell you how many consecutive filled cells appear in that line — in order.</p>
                </div>
                <div className="overlay-rule">
                  <span className="overlay-rule__icon">◀</span>
                  <p>A clue of <strong>3 1</strong> means: first a run of 3 filled cells, then at least one gap, then a run of 1. Runs must appear in that exact order.</p>
                </div>
                <div className="overlay-rule">
                  <span className="overlay-rule__icon">◀</span>
                  <p><strong>Left click</strong> a cell to fill it. <strong>Right click</strong> to place an × marker — useful for cells you're sure are empty.</p>
                </div>
                <div className="overlay-rule">
                  <span className="overlay-rule__icon">◀</span>
                  <p>Use logic to deduce which cells must be filled. When every row and column matches its clues, the puzzle is solved!</p>
                </div>
                <div className="overlay-rule">
                  <span className="overlay-rule__icon">◀</span>
                  <p>Stuck? Use the <strong>Hint</strong> button to reveal one correct cell. <strong>Reset</strong> clears the board.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---- What is a Nonogram overlay ---- */}
      <AnimatePresence>
        {whatIsOpen && (
          <motion.div
            className="games-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setWhatIs(false)}
          >
            <motion.div
              className="games-overlay__card"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="games-overlay__close" onClick={() => setWhatIs(false)}>×</button>
              <h2 className="games-overlay__title">What is a Nonogram?</h2>
              <div className="games-overlay__body">
                <div className="overlay-rule">
                  <span className="overlay-rule__icon">◀</span>
                  <p>A nonogram is a logic puzzle where you shade cells in a grid to reveal a hidden picture — guided only by number clues.</p>
                </div>
                <div className="overlay-rule">
                  <span className="overlay-rule__icon">◀</span>
                  <p>Also known as <strong>Picross</strong>, <strong>Paint by Numbers</strong>, or <strong>Griddlers</strong>, they originated in Japan in the 1980s and became a global puzzle phenomenon.</p>
                </div>
                <div className="overlay-rule">
                  <span className="overlay-rule__icon">◀</span>
                  <p>Unlike sudoku, nonograms are purely deductive — every puzzle has a single unique solution reachable through logic alone.</p>
                </div>
                <div className="overlay-rule">
                  <span className="overlay-rule__icon">◀</span>
                  <p>The finished grid forms a pixel-art image. The harder the puzzle, the more detailed the picture.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
