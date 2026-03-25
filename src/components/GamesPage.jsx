import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PuzzleCard from './PuzzleCard'
import { PUZZLES } from './Puzzles'
import '../App.css'
import './GamesPage.css'

const STEP_X = 400

const FIXED_POSES = [
  { x: 0,          y: 20,  rotate: -5  },
  { x: STEP_X,     y: 120, rotate: 2   },
  { x: STEP_X * 2, y: 35,  rotate: -3  },
]

const MOBILE_POSES = [
  { x: 0, y: 0, rotate: -2   },
  { x: 0, y: 0, rotate: 1.5  },
  { x: 0, y: 0, rotate: -1   },
]

export default function GamesPage() {
  const [frontCard, setFrontCard]           = useState(0)
  const [instructionsOpen, setInstructions] = useState(false)
  const [isMobile, setIsMobile]             = useState(() => window.innerWidth <= 900)

  const zCounter = useRef(PUZZLES.length)
  const [zMap, setZMap] = useState(() =>
    Object.fromEntries(PUZZLES.map((_, i) => [i, i === 0 ? PUZZLES.length : i]))
  )

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 900)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  function bringToFront(idx) {
    zCounter.current += 1
    setZMap(prev => ({ ...prev, [idx]: zCounter.current }))
    setFrontCard(idx)
  }

  return (
    <div className="games-page">

      {/* SVG filter for pink card's wavy border */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="pc-wavy-filter">
            <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="2" seed="8" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <Link to="/" className="games-back-link">
        <span className="arrow">←</span> Back
      </Link>

      {/* ---- Info panel ---- */}
      <div className="games-top">
        <div className="games-info">
          <p className="games-info__title">NONOGRAM PUZZLE</p>
          <p className="games-info__desc">A logic puzzle where every grid hides a tiny piece of art.</p>
          <p className="games-info__sub">Click a card to bring it to the front.</p>

          <button
            className="games-info__toggle"
            onClick={() => setInstructions(o => !o)}
          >
            <motion.span
              animate={{ rotate: instructionsOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'inline-block', marginRight: '6px' }}
            >
              ▾
            </motion.span>
            How to play
          </button>

          <AnimatePresence initial={false}>
            {instructionsOpen && (
              <motion.div
                className="games-info__body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <ul className="games-info__rules">
                  <li>The numbers along each row and column are your clues.</li>
                  <li>Each number tells you how many cells to fill and in what order.</li>
                  <li><strong>3 2</strong> means a group of 3, a gap, then a group of 2, with a gap in between.</li>
                  <li><strong>Left click</strong> fills a cell. <strong>Right click</strong> places a x to mark a cell you want to skip.</li>
                  <li>Use logic until every row and column matches its clues.</li>
                  <li>Stuck? Hit <strong>Hint</strong> to reveal one cell.</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <motion.main layout className="games-main" transition={{ type: 'spring', stiffness: 200, damping: 30 }}>
        <div className="games-content">
          <div className="games-stack-area">
            <div className={`games-stack${isMobile ? ' games-stack--mobile' : ''}`}>
              {PUZZLES.map((puzzle, puzzleIdx) => {
                const isFront = puzzleIdx === frontCard
                const pose = (isMobile ? MOBILE_POSES : FIXED_POSES)[puzzleIdx]

                return (
                  <motion.div
                    key={puzzle.id}
                    className="games-card-wrap"
                    style={{ zIndex: zMap[puzzleIdx] }}
                    animate={{
                      rotate: isFront ? pose.rotate * 0.4 : pose.rotate,
                      x: pose.x,
                      y: isFront ? pose.y - 12 : pose.y,
                      scale: isFront ? 1.02 : 1,
                    }}
                    whileHover={!isFront ? { y: pose.y - 8, scale: 1.015 } : {}}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  >
                    {!isFront && (
                      <div
                        className="games-card-overlay"
                        onClick={() => bringToFront(puzzleIdx)}
                      />
                    )}
                    <PuzzleCard {...puzzle} isActive={isFront} isMobile={isMobile} />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  )
}
