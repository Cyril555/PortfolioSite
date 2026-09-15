# Personal Portfolio — Dr. Cyrilkumaar Vijayakumar

## Project Overview
Personal portfolio for a medical doctor and LSE Master's student (GMiM). The site is structured around three professional domains — Medicine, Technology, and Strategy — positioning the user at their intersection. All projects are framed as case studies with Problem → Approach → Outcome structure.

## Target Audience
Management consulting recruiters (McKinsey, BCG, Bain), health-tech companies, and MedTech investors. The site must communicate impact-first: quantified results visible within 10 seconds, structured thinking evident throughout, and leadership signals in every project.

## Tech Stack
- Framework: Next.js 16 (App Router)
- Styling: CSS Modules + CSS custom properties (no Tailwind)
- Fonts: Host Grotesk (`--font-sans`, all text) and Geist Mono (`--font-mono`, small uppercase labels only), both via `next/font/google`. No serif anywhere.
- Icons: hand-drawn line SVGs in `src/components/ProjectIcon.tsx` (one per project slug) and inline in `Domains.tsx`, square caps and mitred joins. No emojis, no screenshots as thumbnails.
- Deployment: Vercel via GitHub integration (every push to `main` deploys to production; other branches get preview URLs)
- Package manager: npm (package-lock.json is the lockfile in use)

## Common Commands
- `npm run dev` — start dev server on localhost:3000
- `npm run build` — production build
- `npx tsc --noEmit` — type-check

## Design System

### Aesthetic Direction
Grayscale and serious, modelled on Palantir's site: charcoal and white, large light-weight headings, tiny mono uppercase labels, and 1px rules that divide every section into cells. No colour accent (no orange), no rounded corners, no shadows, no serif type, no parallax.

### Colour Palette (CSS Variables in `src/app/globals.css`)
- Light body: `--bg #ffffff`, `--panel #f4f4f4` (hover/fill), `--fg #1e2124`, `--fg-soft`, `--muted #72767b`, `--line #dcdddf`, `--line-strong`
- Always-dark chrome (nav, hero, footer): `--ink #0e0f11`, `--ink-fg`, `--ink-muted`, `--ink-line`, `--ink-grid` (the faint 48px background grid)
- The site always opens in light. Dark is opt-in via the toggle in `Nav.tsx` (stored in localStorage) and never follows the system setting. Dark overrides live under `[data-theme='dark']` and must keep lines and grids clearly visible
- Aliases `--accent`, `--border`, `--card`, `--display`, `--serif` exist only so the project detail page keeps working; they map to grayscale tokens

### Typography Rules
- Headings: Host Grotesk 300-400, letter-spacing -0.02em to -0.035em
- Body: Host Grotesk 400, 14-18px
- Labels, buttons, nav links: Geist Mono 10.5-12px, uppercase, letter-spacing 0.06em
- Link markers use "↳" and "↗"
- IMPORTANT: Never use serif fonts, Inter, Roboto or Arial; never add a colour accent or purple gradients

### Layout and Grid
- Max width 1240px (`--max`), 40px gutter (`--gutter`, 20px on mobile)
- Sections alternate light and dark: `<section className="band">` or `<section className="band tone-dark">`, each wrapping a `<div className="frame">`. `.tone-dark` re-scopes the colour tokens, so components never need dark-specific styles
- `.frame` draws side rules on the container, a full-bleed bottom rule, and crosshair marks where they meet (all in `globals.css`)
- Sections open with `SectionHead`: small mono label stacked above a left-aligned light title, both on the section's left gutter so every heading lines up
- Content lives in ruled cells that share 1px borders; hover fills a cell with `--panel` or inverts to `--ink`
- Hero and contact use a fading 48px grid background; the portrait is grayscale with corner ticks

### Animation
- `Reveal` component: intersection-observer fade and 28px rise, easing cubic-bezier(0.22, 1, 0.36, 1)
- Hover: background fills and inversions only. The status square in the hero blinks slowly.

## Information Architecture

### Navigation
Logo (square mark + "Cyril Vijayakumar", in `Nav.tsx`) → Work → Experience → Articles (route) → Contact (+ "Get in touch" CTA, theme toggle). `Nav` takes `mode="home"` for in-page anchors or `mode="page"` to point anchors back to the homepage, and `current` to mark the active item.

### Logo
A small square outline with a filled inner square, followed by the name "Cyril Vijayakumar". The same mark is `src/app/icon.svg`. A CV monogram was tried and rejected; do not reintroduce it.

### Homepage (`src/app/page.tsx`), tone in brackets
1. **Hero** (dark) — headline, one-line positioning, two CTAs, grayscale portrait, 4-cell metrics row. No status line.
2. **Selected work** (light, `Highlights.tsx`) — exactly three projects, one per discipline (Medicine, Technology, Strategy), plus a quiet right-aligned "See more work →" text link to `/articles` (hover underlines the text only; no filled button). Keep it to three; quantity is not the point.
3. **Experience** (dark) — dated timeline from `src/lib/experience.ts`; the current Synthax role lives here, marked "Now"
4. **Education and skills** (light)
5. **Contact** (dark) — email (Outlook address) and LinkedIn rows over a faint grid
6. **Footer** (dark)

### Articles (`src/app/articles/page.tsx`)
A quiet list, not cards: every case study as a row (date, icon, title, one-line summary, domains), then publications from `src/lib/publications.ts`. Case study pages live at `/projects/[slug]` and link back to `/articles` and on to the next case study.

### Content rules
- The master CV is the source of truth, with the user's corrections recorded at the top of `src/lib/projects.ts`
- Never name the client of the Castore Consulting engagement
- TASKR is removed from the site

### Case Study Template (Problem → Approach → Outcome)
Every project must follow this structure. A recruiter reads these like mini-consulting cases. Always include at least one quantified metric per case study.

## Content Data
- Full name: Dr. Cyrilkumaar Vijayakumar
- Email: 
- LinkedIn: 
- Phone: 
- Location: London, UK
- Languages: English (native), Mandarin, Spanish, Tamil (professional)
- Positioning: "Doctor · Technologist · Strategist"

## Code Conventions
- TypeScript for all files
- Components: `src/components/` PascalCase
- Pages: `src/app/` App Router conventions
- Styles: CSS Modules (`ComponentName.module.css`)
- Global vars: `src/app/globals.css`
- Max 150 lines per component — extract sub-components
- Images: `public/images/` kebab-case

## Git Workflow
- Imperative commit messages: "Add case study filter", "Fix mobile nav"
- Branch naming: `feature/section-name` or `fix/description`

## Current Focus
- [ ] Convert to multi-page Next.js app with shared layout
- [x] Add portrait photo to hero
- [ ] Add blog/articles section for published pieces
- [ ] Add downloadable CV (PDF) link
- [x] Set up Vercel deployment
- [ ] Add page transition animations
