# Personal Portfolio — Dr. Cyrilkumaar Vijayakumar

## Project Overview
Personal portfolio for a medical doctor and LSE Master's student (GMiM). The site is structured around three professional domains — Medicine, Technology, and Strategy — positioning the user at their intersection. All projects are framed as case studies with Problem → Approach → Outcome structure.

## Target Audience
Management consulting recruiters (McKinsey, BCG, Bain), health-tech companies, and MedTech investors. The site must communicate impact-first: quantified results visible within 10 seconds, structured thinking evident throughout, and leadership signals in every project.

## Tech Stack
- Framework: Next.js 15 (App Router)
- Styling: CSS Modules + CSS custom properties (no Tailwind)
- Fonts: Google Fonts — Instrument Serif (display), Cormorant Garamond (body), JetBrains Mono (mono/labels)
- Deployment: Vercel
- Package manager: pnpm

## Common Commands
- `pnpm dev` — start dev server on localhost:3000
- `pnpm build` — production build
- `pnpm lint` — run ESLint

## Design System

### Aesthetic Direction
Swiss-editorial meets technical documentation. Inspired by Dieter Rams product pages, NASA mission layouts, and Swiss graphic design. Should feel like a refined printed publication — not a typical developer or student portfolio.

### Colour Palette (CSS Variables)
- `--bg: #f4f1ec` — warm off-white
- `--fg: #1a1a1a` — near-black
- `--accent: #d4582a` — burnt orange for metrics and highlights
- `--muted: #8a847b` — warm grey secondary text
- `--border: #d4cfc7` — subtle dividers
- `--card: #edeae4` — card backgrounds

### Typography Rules
- Display: Instrument Serif, 44-110px, letter-spacing -2px
- Body: Cormorant Garamond, 300 weight, line-height 1.65-1.8
- Labels: JetBrains Mono, 9-11px, uppercase, letter-spacing 1.5-3px
- IMPORTANT: Never use Inter, Roboto, Arial, or system fonts
- IMPORTANT: Never use purple gradients or generic AI aesthetics

### Layout
- Max content width: 1400px, centered
- 100px section padding, 48px horizontal padding
- Grid-based with intentional asymmetry
- Section numbering (01, 02, 03) in monospace
- Impact metrics: large accent-colour numbers with small mono labels
- Case studies: three-column layout (meta | body | metrics)

### Animation
- Intersection observer for scroll-triggered reveals
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Stagger delays: 0.05-0.12s between sibling elements
- Movement: translateY(28px) + opacity fade
- No parallax, no excessive motion

## Information Architecture

### Navigation
Impact → Domains → Credentials → Contact (+ "Get in Touch" CTA button)

### Page Structure
1. **Hero** — Name, eyebrow label ("Doctor · Technologist · Strategist"), one-line positioning statement, 4-cell metrics grid (patients, monitoring improvement, testing increase, languages)
2. **Three Domains** — Equal-weight cards: Medicine, Technology, Strategy. Each with description and skill tags. This replaces a traditional "About" section.
3. **Case Studies** — Filterable by domain (All / Medicine / Technology / Strategy). Each case study has: tag, title, domain pills, Problem section, Approach section, Outcome section, and 2 quantified metrics.
4. **Credentials** — Two-column: Education stack (LSE, Sheffield, Dulwich) + Skills (languages with proficiency dots, technical, finance)
5. **Contact** — Large CTA text + email/LinkedIn/phone links
6. **Footer** — Copyright + tagline

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
- [ ] Add portrait photo to hero or domains section
- [ ] Add blog/articles section for published pieces
- [ ] Add downloadable CV (PDF) link
- [ ] Set up Vercel deployment
- [ ] Add page transition animations
