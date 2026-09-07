# Personal Portfolio — Dr. Cyrilkumaar Vijayakumar

## Project Overview
Personal portfolio for a medical doctor and LSE Master's student (GMiM). The site is structured around three professional domains — Medicine, Technology, and Strategy — positioning the user at their intersection. All projects are framed as case studies with Problem → Approach → Outcome structure.

## Target Audience
Management consulting recruiters (McKinsey, BCG, Bain), health-tech companies, and MedTech investors. The site must communicate impact-first: quantified results visible within 10 seconds, structured thinking evident throughout, and leadership signals in every project.

## Tech Stack
- Framework: Next.js 16 (App Router)
- Styling: CSS Modules + CSS custom properties (no Tailwind)
- Fonts: Onest via `next/font/google` (the only typeface; exposed as `--font-sans`). No serif anywhere on the site.
- Icons: hand-drawn line SVGs in `src/components/ProjectIcon.tsx` (one per project slug) and inline in `Domains.tsx`. No emojis, no screenshots as thumbnails.
- Deployment: Vercel via GitHub integration (every push to `main` deploys to production; other branches get preview URLs)
- Package manager: npm (package-lock.json is the lockfile in use)

## Common Commands
- `npm run dev` — start dev server on localhost:3000
- `npm run build` — production build
- `npx tsc --noEmit` — type-check

## Design System

### Aesthetic Direction
Clean, modern, minimal. One sans typeface, generous whitespace, rounded surfaces, a single accent colour. No serif type, no paper grain, no grid rules, no parallax.

### Colour Palette (CSS Variables in `src/app/globals.css`)
- `--bg: #f7f7f5` page ground · `--surface: #ffffff` cards
- `--fg: #121417` text · `--fg-soft` / `--muted` secondary text
- `--accent: #d4582a` burnt orange for metrics, icons and highlights · `--accent-soft` tinted backgrounds
- `--border` / `--border-strong` dividers · `--radius: 16px`
- Dark theme overrides live under `[data-theme='dark']`; the toggle is in `Nav.tsx`.
- Legacy aliases `--serif`, `--display`, `--mono` all resolve to `--sans`. Do not reintroduce a second typeface.

### Typography Rules
- Headings: Onest 700, letter-spacing -0.02em to -0.03em
- Body: Onest 400, 14-18px, line-height 1.6
- Labels: Onest 600, 11-12px, uppercase, letter-spacing 0.08-0.1em
- IMPORTANT: Never use serif fonts, Inter, Roboto, Arial, or system fonts as the primary face
- IMPORTANT: Never use purple gradients or generic AI aesthetics

### Layout
- Max content width: 1200px (`--max`), 40px horizontal gutter (`--gutter`, 20px on mobile)
- Sections stack with 88px top padding; cards use `--surface`, 1px `--border`, `--radius`
- Impact metrics: accent-colour numbers with small muted labels

### Animation
- `Reveal` component: intersection-observer fade and 28px rise, easing cubic-bezier(0.22, 1, 0.36, 1)
- Hover: 3px lift on cards. Nothing else.

## Information Architecture

### Navigation
Projects → Experience → Contact (+ "Get in touch" CTA, theme toggle)

### Page Structure (`src/app/page.tsx`)
1. **Hero** — "Now" status pill (current role), headline, one-line positioning, two CTAs, portrait (`public/profile.jpg`), 4-cell metrics row
2. **Now** — highlighted card for the current role (Clinical AI Fellow, Synthax AI) with three outcomes
3. **Domains** — Medicine, Technology, Strategy cards; clicking one filters the projects grid via a `filter-domain` window event
4. **Projects** — all case studies in a filterable 3-column grid, each with a line-icon tile; links to `/projects/[slug]`
5. **Experience** — dated timeline from `src/lib/experience.ts`, current role marked "Now"
6. **Education and skills** — education stack + skill chips
7. **Contact** — dark card with email and LinkedIn
8. **Footer**

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
