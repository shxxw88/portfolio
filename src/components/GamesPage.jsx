import { useState } from 'react'
import { motion } from 'framer-motion'
import PuzzleCard from './PuzzleCard'
import { PUZZLES } from './Puzzles'
import '../App.css'
import './GamesPage.css'

// Cards stay at fixed positions — clicking only changes z-index (brings to front)
const STEP = 360  // vertical step; card is 420px tall so 60px of overlap

const FIXED_POSES = [
  { y: 0,          x: 0,   rotate: 0    },
  { y: STEP,       x: 16,  rotate: 0.7  },
  { y: STEP * 2,   x: -10, rotate: -0.4 },
]

export default function GamesPage() {
  // Which puzzle index is currently brought to front
  const [frontCard, setFrontCard] = useState(0)

  return (
    <div className="games-page">
      <main className="games-main">
        <div className="games-header">
          <h1 className="games-title">Games</h1>
          <p className="games-sub">Click a card to bring it forward — left click fills, right click marks.</p>
        </div>

        <div className="games-stack-area">
          <div className="games-stack">
            {PUZZLES.map((puzzle, puzzleIdx) => {
              const isFront = puzzleIdx === frontCard
              const pose = FIXED_POSES[puzzleIdx]
              // Natural z: top card (idx 0) highest, bottom lowest. Front card overrides to 10.
              const zIndex = isFront ? 10 : (PUZZLES.length - puzzleIdx)

              return (
                <motion.div
                  key={puzzle.id}
                  className="games-card-wrap"
                  style={{ zIndex }}
                  animate={{ rotate: pose.rotate, x: pose.x, y: pose.y }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  {/* Overlay on non-front cards intercepts clicks to bring forward */}
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
      </main>
    </div>
  )
}
