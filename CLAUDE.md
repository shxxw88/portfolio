# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with HMR
npm run build      # Production build
npm run preview    # Preview production build locally
npm run lint       # ESLint (max-warnings 0)
```

## Architecture

React 19 + Vite SPA with React Router DOM for client-side routing. Deployed on Vercel (vercel.json rewrites all routes to index.html for SPA support).

**Routing** is defined in `src/main.jsx`. Routes:
- `/` — Home (Hero, FeaturedWorks)
- `/about` — About page
- `/case-study/scaffold` and `/case-study/picki` — UX case studies
- `/design/aurore-menu`, `/design/daily-coffee`, `/design/iceland-guide` — Graphic design projects

**Styling** is plain CSS with a 1:1 JSX:CSS file mapping per component. CSS custom properties are defined in `src/App.css`:
- `--color-accent: #BEDC3B` (lime green), `--color-blue: #D5E9FF`
- Spacing scale: `--spacing-xs` through `--spacing-xl`
- Primary breakpoint: 768px

**Animation** uses two libraries:
- **Framer Motion** — primary library for UI motion: page transitions, scroll-driven animations (`useScroll`, `useTransform`), spring physics, hover states, and the postcard hero 3D effect
- **GSAP** — used for more complex timeline-based animations

**Custom cursor** logic lives in `src/App.jsx` via a `mousemove` listener; cursor assets are in `/public/cursor/`.

**Reusable layout wrappers**: `CaseStudyLayout.jsx` and `GraphicProjectLayout.jsx` wrap all project pages with consistent structure. New projects should use these.

**State** is component-local via React hooks — no global state management (no Redux, no Context).

Static assets (images, videos) live in `/public/`.

## Design System
- Typefaces: `Sen` (headings/display), `Roboto Mono` (body/default)
- Light theme — `--color-bg: #ffffff`, `--color-text: #333333`, `--color-text-light: #999999`
- Accents: `--color-accent: #BEDC3B` (lime green), `--color-blue: #D5E9FF`
- Spacing scale: `--spacing-xs: 0.5rem` → `--spacing-sm: 1rem` → `--spacing-md: 2rem` → `--spacing-lg: 4rem` → `--spacing-xl: 6rem`
- Layout: max-width `1400px`, padding `3rem` desktop / `1.5rem` mobile, breakpoint `768px`

## Current Priorities
1. Games page (due April) — nonogram, connect-the-dots, word search, pixel canvas
2. Framer Motion animation polish — spring physics, scroll-triggered transitions
3. Case study pages — Scaffold and Picki, before/after implementation comparisons

## Projects Context
- Scaffold: AI-powered grant matching for BC trades apprentices (PM + UX/UI role)
- Picki: mobile group planning app (user research, Figma prototypes, usability testing)

## Conventions
- 1:1 JSX:CSS file mapping — always create a matching CSS file for new components
- Framer Motion for UI animations, GSAP for complex timelines
- No global state — keep state component-local
- No inline styles

## Games Page — Current Progress
- PuzzleCard.jsx component is built (in src/components/PuzzleCard/)
- puzzles.js has 3 puzzle configs: Music Note (easy), Tulip (medium), Rabbit (hard)
- Next step: build GamesPage.jsx with stacked postcard layout
- Cards stack with rotation, click to bring forward (z-index swap)
- Reference mockup: 3 postcards overlapping, sticky note + how-to-play badge in corner
- Each card: left panel (title, stars, timer, hint/reset) + right panel (grid)