# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run Next.js linter
npm start        # Start production server
```

## Architecture

**TPL Journey** is a nonprofit Christian discipleship ministry site built on Next.js 15+ App Router with React 19 and Bootstrap 5. It is a mostly static marketing/resource site deployed to Vercel.

### Key structural rules

- **`data/tpljourney.js`** is the single source of truth for all page content — nav links, copy, scripture references, resource links, Google Drive URLs, and the TPL framework pillars. Edits to visible content belong here, not inline in components.
- **`@/*`** path alias maps to the project root (configured in `jsconfig.json`).
- **No `src/` directory** — everything is at the project root.
- Note the intentional folder name: **`utlis/`** (not `utils/`) — match this spelling when importing utilities.

### Page pattern

Every page in `app/` follows the same structure:
1. Export a `metadata` object (server-side SEO).
2. Wrap content in `<div className="theme-elegant"><div className="page" id="top">`.
3. Use `<nav className="main-nav dark transparent stick-fixed wow-menubar">` + `<HeaderTPL links={tplJourneyMenu} />`.
4. Include `<JourneyProgress currentStage={N} />` on inner journey pages.
5. Footer: `<footer className="bg-dark-1 light-content footer z-index-1 position-relative"><FooterTPL /></footer>`.

### Component organization

- `components/tpljourney/` — TPL-specific section components (HeroKingdom, TPLFramework, JourneyStages, ResourceSection, JourneyProgress). Prefer editing/creating here for TPL content.
- `components/headers/HeaderTPL.jsx` + `components/footers/FooterTPL.jsx` — shared site-wide layout shell.
- `components/common/` — reusable primitives (Parallax, ParallaxContainer, AnimateButton, etc.) originally from the Resonance theme.
- `components/homes/`, `components/blog/`, etc. — legacy theme components from the base Resonance template; largely unused by TPL pages.

### Styling

- Bootstrap 5 grid and utilities are the base.
- `public/assets/css/tpl-journey.css` — all TPL-specific custom styles (`.tpl-pillar-*`, `.scripture-block`, `.footer-tagline`, etc.). Add new TPL styles here.
- `public/assets/css/demo-elegant/demo-elegant.css` — theme stylesheet from Resonance base; do not modify.
- Icons use `mi-*` class names from a **custom 150-icon font** at `public/assets/css/icons.css` — NOT the full Material Icons set. Only use class names confirmed in that file.
- **Do NOT place `<i>` icon elements inside heading tags** (`<h1>`–`<h6>`). The heading's `font-family` CSS overrides the icon font, making them invisible. Always put icons in their own wrapper `<div>` before the heading.
- **Valid icon names** (prefix all with `mi-`): add, archive, ban, bar-chart, book, bookmark, calendar, call, camera, check, circle, clipboard, clock, close, cloud, comment, compass, computer, copy, database, delete, document, download, edit, email, enter, expand, export, eye, favorite, filter, flag, folder, grid, heart, home, image, inbox, layers, link, list, location, lock, log-in, log-out, map, megaphone, menu, message, mobile, moon, next, notification, options-horizontal, options-vertical, pause, pen, percentage, pin, play, print, rain, refresh, remove, repeat, save, search, select, send, settings, share, shuffle, snow, snowflake, sort, speakers, stop, storm, sun, sunrise, sunset, switch, table, tag, temperature, text, undo, unlock, user, user-add, user-check, users, volume-up, warning, webcam, wind, zoom-in, zoom-out *(and more — check icons.css for full list)*
- **Invalid names** (do not use): `mi-crown`, `mi-lightning`, `mi-book-open`, `mi-fire`, `mi-globe`, `mi-star`, `mi-hand` — these have no glyph in this font and render invisibly.

### Content data

All TPL page data lives in `data/tpljourney.js`:

| Export | Used by |
|--------|---------|
| `tplJourneyMenu` | Navigation on every page |
| `tplSocialLinks` / `tplFooterLinks` | FooterTPL |
| `journeyStages` / `tplFramework` | Homepage |
| `yourJourneyResources` | `/your-journey` |
| `lifeTogether` | `/life-together` |
| `leadersResources` | `/leaders` (resources marked `comingSoon: true` pending Google Drive links) |
| `intensives` | `/intensives` (resources marked `comingSoon: true` pending Google Drive links) |
| `theKingdomContent` | `/the-kingdom` |
| `aboutContent` | `/about` |

### Images

`next.config.mjs` sets `images.unoptimized: true`. Hero background images are loaded from Unsplash URLs directly in `style` props on `<ParallaxContainer>` components.

### Scroll/animation system

`app/layout.js` is a `"use client"` root layout that initializes WOW.js animations, jarallax parallax, and the sticky header behavior on every route change via a `useEffect` on `pathname`. Bootstrap JS is dynamically imported client-side. Do not remove these effect calls.
