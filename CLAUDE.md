# Personal Portfolio — Dr. Cyrilkumaar Vijayakumar

## Project Overview
Personal portfolio for a medical doctor and LSE Master's student (GMiM). The site is structured around three professional domains — Medicine, Technology, and Strategy — positioning the user at their intersection. All projects are framed as case studies with Problem → Approach → Outcome structure.

## Target Audience
Management consulting recruiters (McKinsey, BCG, Bain), health-tech companies, and MedTech investors. The site must communicate impact-first: quantified results visible within 10 seconds, structured thinking evident throughout, and leadership signals in every project.

## Tech Stack
- Framework: Next.js 16 (App Router)
- Styling: CSS Modules + CSS custom properties (no Tailwind)
- Fonts: Archivo (`--font-sans`, all text; its `wdth` axis is requested via `axes: ["wdth"]` and narrowed for display sizes) and Spline Sans Mono (`--font-mono`, figures and dates only), both via `next/font/google`. No serif anywhere.
- Icons: hand-drawn line SVGs in `src/components/ProjectIcon.tsx` (one per project slug), square caps and mitred joins. Used only on the case study page header. No emojis, no screenshots as thumbnails.
- Deployment: Vercel via GitHub integration (every push to `main` deploys to production at https://www.cyrilv.com; other branches get preview URLs). The canonical origin lives in `src/lib/site.ts`
- Package manager: npm (package-lock.json is the lockfile in use)

## Common Commands
- `npm run dev` — start dev server on localhost:3000
- `npm run build` — production build
- `npx tsc --noEmit` — type-check

## Design System

### Aesthetic Direction
The observation chart. One vertical rule runs the page as a measurement spine; figures and dates sit on it in mono and prose hangs to its right. Findings are set as ruled table rows rather than cards, so a recruiter scans a column of results. Deep blue-black and warm paper in alternating bands, with a single oxblood accent reserved for data. The hero, contact and every page head carry a 48px measurement grid that fades out down the band. No gradients, no shadows, no serif type, no parallax.

Do not reintroduce the tells the redesign removed: an all-caps mono eyebrow above every heading, one word of a headline accented in a `<span>`, `→ ↳ ↗ ↓` appended to button and link text, component-built middle-dot meta strings (`A · B · C`), mono used for small labels, or a fade-and-rise animation on every section.

### Colour Palette (CSS Variables in `src/app/globals.css`)
- Paper: `--paper #f2f1ed`, `--paper-raised #f8f7f4` (hover and fill)
- Ink: `--ink #17212c` (blue-black), `--ink-soft`, `--slate #5c6670`
- Rules: `--rule #d5d3cc`, `--rule-firm #b6b3aa` (the spine and every table's top rule)
- `--flag #8e2b2b` is the only colour on the site. It marks data and nothing else: the arrow inside a changed measurement (`28.6→59.3%`, rendered by `Figure.tsx`) and the "Now" marker in the timeline. Never on buttons, links, headings or focus states.
- Sections on ink ground use `className="onInk"`, which re-scopes every token — including `--paper` to the ink ground itself, so filled buttons and hover fills invert correctly — and paints the ground. `onInkChrome` rebinds the same tokens without painting a ground, for the sticky nav which paints its own translucent version. Add `gridded` for the 48px fading grid.
- Bands alternate down the page: hero (ink + grid), selected work (paper), experience (ink), education (paper), contact (ink + grid), footer (ink). Page heads on `/articles`, `/projects/[slug]` and the 404 are ink + grid, matching the hero
- The nav is always-dark chrome, as it sits over both grounds. It turns opaque while the mobile sheet is open, or the seam between bar and sheet shows
- The site always opens in light. Dark is opt-in via the toggle in `Nav.tsx` (stored in localStorage) and never follows the system setting. Dark overrides live under `[data-theme='dark']` and must keep rules and the spine clearly visible
- Aliases `--bg`, `--fg`, `--muted`, `--line` remain only so older selectors keep resolving

### Typography Rules
- Display: Archivo 500 with `font-variation-settings: "wdth" 82–86`, letter-spacing -0.035em, line-height ~1
- Section titles: Archivo 450 at `wdth` 90, letter-spacing -0.03em
- Body: Archivo 400 at `wdth` 100, 16-17px, measure under 70ch
- Mono (Spline Sans Mono) is for figures, dates and addresses only — never for labels, never uppercase-tracked. Set large figures with letter-spacing around -0.05em or they drift apart.
- Sentence case everywhere. IMPORTANT: never use serif fonts, Inter, Roboto or Arial; never add a second accent colour

### Layout and Grid
- Max width 1240px (`--page` 1180px content), `--edge` gutter clamps 20px to 60px
- `.sheet` is the page container: it carries the spine as a `border-left` plus faint 48px graduations, and because sections stack flush the rule reads as one continuous axis from nav to footer
- `.split` is the two-column primitive: a `--rail` column (136px) against the spine for dates, disciplines and figures, and the content column beside it. Below 640px it collapses to one column and the rail contents become a meta line.
- `.section` handles vertical rhythm; `.figure` sets tabular mono numerals
- Rows share a single bottom rule and fill with `--paper-raised` on hover. Corners use a 2px radius, never more.

### Animation
- One orchestrated load sequence in the hero (headline, portrait, sub, actions, figures settle in over ~0.6s). Nothing else on the site animates on scroll — there is no `Reveal` component any more.
- Hover is a background fill or an underline. Motion respects `prefers-reduced-motion`.

### Responsive and accessibility floor
- Every interactive target is at least 44px tall on mobile; body text is at least 16px
- No page scrolls horizontally at any width; verify with Playwright before shipping layout changes
- The hero portrait is served through `next/image` with `sizes`, so phones download a small file instead of the former 1px placeholder
- The mobile menu must stay outside `<header>`: the bar's `backdrop-filter` makes it a containing block for `position: fixed` children and would collapse the sheet to the height of the bar

## Information Architecture

### Navigation
Logo (square mark + "Cyril Vijayakumar", in `Nav.tsx`) → Work → Experience → Articles (route) → Contact (+ "Get in touch" CTA, theme toggle). `Nav` takes `mode="home"` for in-page anchors or `mode="page"` to point anchors back to the homepage, and `current` to mark the active item.

### Logo
A small square outline with a filled inner square, followed by the name "Cyril Vijayakumar". The same mark is `src/app/icon.svg`. A CV monogram was tried and rejected; do not reintroduce it.

### Homepage (`src/app/page.tsx`), tone in brackets
1. **Hero** (ink + grid) — headline, one-line positioning, "Projects" and "Download CV" buttons, grayscale portrait, and a four-figure strip read like a vitals row (mono figures on a shared baseline with ticks where each column meets the rule). No status line. On mobile the portrait leads, set beside its caption.
2. **Selected work** (paper, `Highlights.tsx`) — exactly three projects, one per discipline (Medicine, Technology, Strategy), set as a results table: discipline on the rail, title in the middle, headline figure in its own right-hand column so the figures align down the page. A quiet "See more work" text link to `/articles` follows. Keep it to three; quantity is not the point.
3. **Experience** (ink) — dated timeline from `src/lib/experience.ts`, dates on the spine; the current Synthax role lives here, marked "Now" in oxblood
4. **Education and skills** (paper)
5. **Contact** (ink) — the invitation set against the email (Outlook address) and LinkedIn rows, which are mono
6. **Footer** (ink, continuous with contact so the two read as one bookend)

### Articles (`src/app/articles/page.tsx`)
A quiet list, not cards: every case study as a row (date on the rail, title, one-line summary, domains in their own column separated by space rather than punctuation), then publications from `src/lib/publications.ts`. The page closes with the shared `Contact` section. Case study pages live at `/projects/[slug]` and link back to `/articles` and on to the next case study.

### SEO and sharing
- `src/app/sitemap.ts`, `src/app/robots.ts`, and static `opengraph-image.png` / `twitter-image.png` (1200x630, same design language) in `src/app`
- Page metadata sets canonical URLs; titles use the "%s — Cyril Vijayakumar" template
- `src/app/not-found.tsx` is the custom 404 in the hero style

### CV download
`public/Cyrilkumaar-Vijayakumar-CV.pdf` was generated from the site's own content (no phone number). The user may replace it with their own file at the same path. Do not publish the master CV directly: it contains [CONFIRM] notes and a phone number.

### Content rules
- The master CV is the source of truth, with the user's corrections recorded at the top of `src/lib/projects.ts`
- Never name the client of the Castore Consulting engagement
- Project `tag` values are sentence case ("Clinical audit", "AI go-to-market"), never ALL-CAPS
- TASKR is removed from the site
- Articles are sorted newest first by each project's `sortDate`; reading time is computed by `readingTime()`, never typed by hand
- Article bodies must not restate the Problem, Approach, Outcome or metrics shown above them
- No citations in the Reframe article; the hackathon build is a "24-hour prototype"

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
- [x] Add downloadable CV (PDF) link
- [x] Set up Vercel deployment
- [x] Full redesign away from the ruled-grid look
- [ ] Add page transition animations
