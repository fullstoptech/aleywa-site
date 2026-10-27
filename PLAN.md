# Aleywa Studios — Implementation Plan

Source of truth: [aleywa-studios.figcraft](/home/kwabena/projects/aleywa-site/aleywa-studios.figcraft)
(inspected via FigCraft MCP / `figcraft-cli` + the file's `document.json`).
4 pages in the file: Foundations, Components, Screens (25 frames), Critique (empty).

## Design foundation (from Foundations + 224 variables)

- Type: Schibsted Grotesk only. Styles: Caption 13/500, Label 15/500, Body 18/400,
  Body-lg 21, Prose 20/1.6, H3 28/700, H2 44/700, H1 72/700, Hero-H1 60, Display 120/700,
  Statement 192, Pull quote 32 italic. Mobile: H1 38, Display 56, Hero 44.
  Tracking tightens with size (-0.025em H3 → -0.045em Statement).
- Fallback face by `unicode-range` for ɛ Ɛ ɔ Ɔ ɖ ɣ ʋ (Schibsted lacks them — the Letters
  page says so). Subset of Noto Sans, self-hosted.
- Colour (Light theme): paper `#f6f3ee`, ink `#181110`, ink-muted `#6a615f`,
  line `#e0dbd6`, line-strong `#877e7b`, accent/brand-600 `#ab2859` (raspberry),
  accent-hover `#7f1840`, pressed `#5e122e`, berry/surface-inverse `#460f22`,
  sunken dark `#2b0713`, surface-raised `#fefdfb`, surface-hover `#ece9e4`,
  brand 50–950 + neutral 0–950 ramps, danger/info/success/warning.
  A Dark theme exists in variables but no screen or toggle uses it → not shipped;
  dark surfaces on screens are the berry inverse surface.
- Space: 4/8/12/16/24/32/48/64/96/128/160. Container 1312. Margins 64 / 48 / 20
  (desktop/tablet/mobile). Gutter 24. Reading width 680.
- Breakpoints: tablet 768, desktop 1024, wide 1440 (Screens are 1440 and 390).
- Shape: radius 0–2px (full=999 only for the round Window). Hairline 1px rules,
  strong rule 2px. One shadow: popover (open menu + toast only).
- Signature device: the square **Stop** (raspberry square full stop, sized per type
  style, lifted off baseline) ending headings, plus round/square **Windows**
  (image seen through a shape) and labelled **Plates**.
- Motion (Foundations §05): only `transform`/`opacity`, one easing
  `cubic-bezier(0.2,0.7,0.2,1)`, durations fast 120 (hover/press), base 180
  (menu/toast/focus), slow 320 (section entrance, once), window 480 (hero).
  All off under `prefers-reduced-motion`. One entrance pattern per page.

## Pages (from Screens)

| Route | Screen |
|---|---|
| `/` | Home (hero counters, What we do, Recent work, Why choose us, How we work, From the blog, CTA band) |
| `/what-we-do` | What we do |
| `/what-we-do/strategy` … `/identity`, `/applications`, `/website` | 4 job pages (shared template, "N of 4", Next link) |
| `/recent-work` | Recent work (6 plates) |
| `/recent-work/our-brand-in-full` | Our brand in full (case study) |
| `/why-us` | Why us (5 reasons + Honest answers) |
| `/how-we-work` | How we work (4 steps) |
| `/letters` | Letters (glyph slots ɛ Ɛ ɔ Ɔ ɖ ɣ ʋ ŋ) |
| `/blog` + `/blog/[slug]` | Blog (5 posts) + Post (reading marker, pull quote, table, next post) |
| `/start-a-project` | Start a project — **no form** (design is explicit); Email block + copy-address |
| `/privacy` | Privacy (frame carries only the title; short honest copy, flagged for review) |
| 404 | "That page is not here." |

## Components (Page Core → Astro)

Wordmark (extracted SVG), Stop, Header (+ Nav item with stop for current page),
Menu panel, Footer, Button, Link, SectionHeader, Kicker, Label, Plate, Figure/Window,
JobRow, Reason (+ GlyphSlot), Step/StepGrid, PostCard, PostHero, Prose, PullQuote,
Table, ReadingMarker, HonestAnswer, Swatch, EmailBlock, CtaBand, Toast, HeroCounters.

Interactive (SolidJS islands only): mobile menu, copy-address (+ toast on phone),
hero scroll slide, reading marker. Everything else static Astro.

## Hero (signature moment)

Giant ink `aleywa` letters (extracted SVG paths, counters are holes) over images
placed behind the counters. Sticky stage: vertical scroll slides the word from
rest (`ale`, windows 1–2) to focus (`wa.` + Why-choose-us panel), transform-only,
480ms token feel. Band below swaps text. Reduced motion / no-JS: rest state in
normal flow with all captions readable. Mobile: first `a`, H1 above, band below
(per mobile variant); "Swipe along the word." → horizontal scroll-snap strip.

## Content architecture

Astro content collections: `jobs` (4), `work` (6 plates), `posts` (5, Markdown).
All copy transcribed from the screens. Images: the 49 files embedded in the
.figcraft, renamed semantically, served via `astro:assets`.

## Stack & checks

Astro 5 + TypeScript (strict) + Tailwind CSS 4 (theme from tokens above) +
SolidJS islands + `@astrojs/sitemap`. Self-hosted variable fonts (woff2).
SEO component (title/description/canonical/OG), robots.txt, sitemap.
`npm run dev|build|preview|check|lint|format`. Static output for Cloudflare Pages.
