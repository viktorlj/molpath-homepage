# molpath.tools homepage

Landing page for [molpath.tools](https://molpath.tools) — a collection of
open-source molecular pathology web tools built by Viktor Ljungström.

## Tech stack

- **Astro** (static site generator) — plain HTML/CSS, no UI framework
- **molpath.css** — shared design system across all molpath.tools apps
  (lives in `public/molpath.css`; canonical source: `~/Webpages/molpath-design/molpath.css`)
- **Homepage-specific styles** in `public/homepage.css`
- Fonts: Space Grotesk + IBM Plex Mono (loaded from Google Fonts)

## Project structure

```
src/
  data/tools.ts      ← single source of truth for all tools
  layouts/Base.astro  ← HTML shell (head, fonts, CSS, OG tags)
  components/         ← reusable Astro components
    ToolCard.astro    ← card for each tool
  pages/
    index.astro       ← homepage
public/
  molpath.css         ← shared design system (DO NOT edit here — sync from molpath-design)
  homepage.css        ← homepage-specific overrides
  favicon.svg         ← MPT monogram icon
```

## Adding a new tool

1. Add an entry to `src/data/tools.ts` — follow the `Tool` interface
2. The homepage auto-renders it. No other file changes needed.
3. Fields `github`, `manuscript` are optional — omit until available

## Design conventions

- All styling uses CSS custom properties from `molpath.css` (`--mp-*` tokens)
- App-specific styles go in `homepage.css`, building on the shared tokens
- Class naming follows `mp-` prefix (design system) or plain descriptive (page-specific)
- Typography: Space Grotesk for body, IBM Plex Mono for code/labels
- Accent color: `--mp-accent` (#1f6f61 teal)
- Panel background: `--mp-panel` (#fffef9 warm white)
- No Tailwind, no CSS-in-JS, no frameworks

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server at localhost:4321
npm run build        # production build → dist/
npm run preview      # preview production build
```

## Related projects

- **molpath-design** (`~/Webpages/molpath-design/`) — canonical `molpath.css` and design docs
- **viktorljungstrom.com** (`~/Webpages/viktorljungstrom_homepage/`) — personal homepage
- Individual tools each live in their own repos under `github.com/viktorlj/`

## Deployment

Static site — deploy `dist/` to any static host (Cloudflare Pages, Netlify,
Google Cloud Run with a static server, etc.). The site is configured for
`https://molpath.tools` in `astro.config.mjs`.

## Content guidelines

- Tool descriptions are clinical/technical, aimed at pathologists and bioinformaticians
- Every tool card includes: name, category pill, status pill, tagline, description, links
- Disclaimer in footer: tools are for research and clinical decision support, not standalone diagnostics
- Link to viktorljungstrom.com and GitHub profile in footer

## Future additions

- `manuscript` field on tools — link to published papers when available
- Potential `/about` page with more detail on the project
- The favicon (`public/favicon.svg`) is an MPT monogram that can also be used
  as an icon on individual tool pages for branding consistency
