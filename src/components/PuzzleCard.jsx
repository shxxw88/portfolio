import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import './PuzzleCard.css'

// --- helpers ---
function getClues(grid) {
  const rowClues = grid.map(row => {
    const clues = []
    let count = 0
    row.forEach(cell => {
      if (cell) { count++ }
      else if (count) { clues.push(count); count = 0 }
    })
    if (count) clues.push(count)
    return clues.length ? clues : [0]
  })

  const cols = grid[0].length
  const colClues = []
  for (let c = 0; c < cols; c++) {
    const clues = []
    let count = 0
    grid.forEach(row => {
      if (row[c]) { count++ }
      else if (count) { clues.push(count); count = 0 }
    })
    if (count) clues.push(count)
    colClues.push(clues.length ? clues : [0])
  }

  return { rowClues, colClues }
}

function formatTime(s) {
  const m = Math.floor(s / 60).toString().padStart(2, '0')
  const sec = (s % 60).toString().padStart(2, '0')
  return `${m}:${sec}`
}

// --- component ---
export default function PuzzleCard({ title, difficulty, grid, theme, isActive = false }) {
  const rows = grid.length
  const cols = grid[0].length
  const { rowClues, colClues } = getClues(grid)
  const maxRowClueLen = Math.max(...rowClues.map(r => r.length))
  const maxColClueLen = Math.max(...colClues.map(c => c.length))

  // Card is 630×420px (3:2 landscape). Left panel: 180px + 32px×2 padding = 244px.
  // Right panel: 630-244-1 = 385px, padding 24px×2 = 337px available width.
  // Height: 420px - 36px×2 padding - 4px col-clue margin = 344px available.
  // Row clue: 14px per digit + 3px gap. Col clue: 14px per line.
  const rowClueW = maxRowClueLen * 14 + Math.max(0, maxRowClueLen - 1) * 3
  const colClueH = maxColClueLen * 14
  const cellSize = Math.min(
    Math.floor((344 - colClueH) / rows),
    Math.floor(337 / cols),
    30
  )

  const emptyBoard = () => Array(rows).fill(null).map(() => Array(cols).fill(null))

  const [cells, setCells]     = useState(emptyBoard)
  const [seconds, setSeconds] = useState(0)
  const [won, setWon]         = useState(false)

  // timer — only runs when this card is the active (front) card
  useEffect(() => {
    if (won || !isActive) return
    const id = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(id)
  }, [won, isActive])

  // win check
  useEffect(() => {
    const solved = grid.every((row, r) =>
      row.every((cell, c) =>
        cell === 1 ? cells[r][c] === 'filled' : cells[r][c] !== 'filled'
      )
    )
    if (solved) setWon(true)
  }, [cells, grid])

  // confetti on solve — fire from both sides for full-screen coverage
  useEffect(() => {
    if (!won) return
    const colors = [theme.accent, theme.fill, '#ffffff']
    const opts = { particleCount: 80, spread: 90, colors }
    confetti({ ...opts, origin: { x: 0.1, y: 0.5 }, angle: 60  })
    confetti({ ...opts, origin: { x: 0.9, y: 0.5 }, angle: 120 })
    confetti({ ...opts, origin: { x: 0.5, y: 0.8 }, angle: 90  })
  }, [won])

  function handleClick(r, c) {
    if (won) return
    setCells(prev => {
      const next = prev.map(row => [...row])
      next[r][c] = next[r][c] === 'filled' ? null : 'filled'
      return next
    })
  }

  function handleRightClick(e, r, c) {
    e.preventDefault()
    if (won) return
    setCells(prev => {
      const next = prev.map(row => [...row])
      next[r][c] = next[r][c] === 'marked' ? null : 'marked'
      return next
    })
  }

  function handleHint() {
    const candidates = []
    grid.forEach((row, r) =>
      row.forEach((cell, c) => {
        if (cell === 1 && cells[r][c] !== 'filled') candidates.push([r, c])
      })
    )
    if (!candidates.length) return
    const [r, c] = candidates[Math.floor(Math.random() * candidates.length)]
    setCells(prev => {
      const next = prev.map(row => [...row])
      next[r][c] = 'filled'
      return next
    })
  }

  function handleReset() {
    setCells(emptyBoard())
    setSeconds(0)
    setWon(false)
  }

  // connected rounded corners
  function cellRadius(r, c) {
    if (cells[r][c] !== 'filled') return '0px'
    const f = (dr, dc) => cells[r + dr]?.[c + dc] === 'filled'
    const tl = f(-1, 0) && f(0, -1) && f(-1, -1) ? '0' : '7px'
    const tr = f(-1, 0) && f(0,  1) && f(-1,  1) ? '0' : '7px'
    const bl = f( 1, 0) && f(0, -1) && f( 1, -1) ? '0' : '7px'
    const br = f( 1, 0) && f(0,  1) && f( 1,  1) ? '0' : '7px'
    return `${tl} ${tr} ${br} ${bl}`
  }

  const DIFFICULTY_LABELS = ['Easy', 'Medium', 'Hard']

  return (
    <div
      className={`puzzle-card ${won ? 'puzzle-card--won' : ''}`}
      style={{
        '--pc-bg':             theme.bg,
        '--pc-fill':           theme.fill,
        '--pc-accent':         theme.accent,
        '--pc-text':           theme.text,
        '--pc-border':         theme.border,
        '--pc-border-style':   theme.borderStyle  ?? 'dashed',
        '--pc-border-width':   theme.borderWidth  ?? '1.5px',
        '--pc-border-radius':  theme.borderRadius ?? '2px',
        '--pc-border-inset':   theme.borderInset  ?? '10px',
        '--pc-border-filter':  theme.borderFilter ?? 'none',
        '--pc-cell':           `${cellSize}px`,
        '--pc-row-clue-w':     `${rowClueW}px`,
      }}
    >
      {/* LEFT PANEL */}
      <div className="pc-left">
        <h2 className="pc-title">{title}</h2>

        <div className="pc-stars">
          {Array(3).fill(0).map((_, i) => (
            <span key={i} className={`pc-star ${i < difficulty ? 'pc-star--on' : ''}`}>★</span>
          ))}
        </div>
        <div className="pc-diff">{DIFFICULTY_LABELS[difficulty - 1]}</div>

        <div className="pc-timer">{formatTime(seconds)}</div>

        <div className="pc-actions">
          <button className="pc-btn" onClick={handleHint}>Hint</button>
          <button className="pc-btn pc-btn--ghost" onClick={handleReset}>Reset</button>
        </div>

        {won && <div className="pc-solved">✦ Solved!</div>}
      </div>

      {/* DIVIDER */}
      <div className="pc-divider" />

      {/* RIGHT PANEL — grid */}
      <div className="pc-right">
        <div className="pc-grid-wrap">

          {/* Column clues */}
          <div
            className="pc-col-clues"
            style={{ paddingLeft: `${rowClueW + 4}px` }}
          >
            {colClues.map((clue, c) => (
              <div key={c} className="pc-col-clue">
                {clue.map((n, i) => <span key={i}>{n}</span>)}
              </div>
            ))}
          </div>

          {/* Rows: row clue + cells */}
          <div className="pc-rows">
            {grid.map((row, r) => (
              <div key={r} className="pc-row">
                <div className="pc-row-clue">
                  {rowClues[r].map((n, i) => <span key={i}>{n}</span>)}
                </div>
                {row.map((_, c) => (
                  <div
                    key={c}
                    className={`pc-cell ${cells[r][c] ? `pc-cell--${cells[r][c]}` : ''}`}
                    style={{ borderRadius: cellRadius(r, c) }}
                    onClick={() => handleClick(r, c)}
                    onContextMenu={e => handleRightClick(e, r, c)}
                  >
                    {cells[r][c] === 'marked' && <span className="pc-cell-x">×</span>}
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
