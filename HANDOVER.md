# HANDOVER — execute this, do not re-plan

Written by the planning model. The executing model implements briefs **W1→W6 in order**.
**Rule: if a choice would change design, scope, routes, copy or tokens, STOP and report it. Do not guess.**
Read first: [PLAN.md](/home/kwabena/projects/aleywa-site/PLAN.md), then the extraction in
[docs/extraction](/home/kwabena/projects/aleywa-site/docs/extraction) (`tokens.json`, `screens/*.txt` =
per-screen structure + verbatim copy, `post-text.txt`, `brand-text.txt`, `imgmap.txt`, `renders/*.png`).

## Already done (do not redo)

- Deps installed: astro 5, @astrojs/solid-js, solid-js, @astrojs/sitemap, tailwindcss 4,
  @tailwindcss/vite, typescript, @astrojs/check, eslint + eslint-plugin-astro, prettier + prettier-plugin-astro.
  esbuild/sharp install-scripts approved. `package.json` exists but has no scripts yet (W1).
- Fonts built in `public/fonts/`: `schibsted-grotesk.woff2`, `schibsted-grotesk-italic.woff2`
  (variable, wght 400–900), `noto-gh.woff2` (Noto Sans subset: U+0186 Ɔ, U+0189, U+0190 Ɛ,
  U+0254 ɔ, U+0256 ɖ, U+025B ɛ, U+0263 ɣ, U+028B ʋ). Verified: Schibsted lacks those glyphs, has ŋ.
- Images named in `src/assets/img/` (30 files, mapping in W3). Vectors: `src/assets/wordmark.svg`
  (fills `#181110` + stop `#AB2859`; recolour via CSS `fill` overrides — inline it, don't `<img>` it),
  `src/assets/letters.svg` (giant `aleywa` paths, 3440.232×1062, counters are holes in the path).
- FigCraft access if needed: `figcraft-cli info|export|render aleywa-studios.figcraft …` works headless.
  The GUI control server on :47901 was session-bound and may be dead — extraction is sufficient; don't block on it.

## Locked decisions

1. **Stack**: Astro static + TS strict + Tailwind 4 (`@tailwindcss/vite`) + Solid islands only for:
   mobile menu, copy-address, hero slide, reading marker. No React, no router/SPA, no View Transitions
   (design says one entrance pattern; page transitions not in design — cut).
2. **No form anywhere.** Design is explicit ("There is no form"). PROMPT.md §27 does not apply.
   The one action: `mailto:info@aleywa.com` + copy-address. Copy behaviour per Components spec:
   desktop = button label changes to "Address copied." only; phone (<768px) = Toast only. Never both.
   Clipboard failure: keep label, select nothing, no error UI (fallback line already on page).
3. **No dark mode.** Dark variable theme exists but no screen/toggle uses it. Berry `#460f22` is a surface, not a theme.
4. **Routes** exactly as PLAN.md table. Job pages under `/what-we-do/<slug>`. Brand case study at
   `/recent-work/our-brand-in-full`. Blog slugs: `named-after-a-sweet`, `45-typefaces`,
   `spaced-by-measuring`, `typeface-cannot-set-e-o`, `one-square-five-places`.
5. **Tailwind theme** from `docs/extraction/tokens.json` (Light values). Key tokens:
   paper `#f6f3ee`, ink `#181110`, ink-muted `#6a615f`, line `#e0dbd6`, line-strong `#877e7b`,
   accent `#ab2859`, accent-hover `#7f1840`, accent-pressed `#5e122e`, accent-on-inverse `#de4c7d`,
   berry `#460f22`, berry-deep `#2b0713`, raised `#fefdfb`, hover-ground `#ece9e4`, focus `#de4c7d`.
   Full brand 50–950 + neutral 0–950 ramps in tokens.json. Breakpoints: md 768, lg 1024, xl 1440.
   Container: max 1312 + margins 20/48/64. Spacing = Tailwind default scale (design px ÷ 4).
   Radius: 0 default, 2px max, full only for round Window. Shadow: only `0 12px 28px -14px rgba(24,17,16,.35)`.
6. **Type utilities** (define as Tailwind `--text-*` theme entries incl. line-height + tracking):
   caption 13/500/1.4/+0.01em · label 15/500/1.3 · body 18/400/1.55 · body-lg 21/400/1.5/-0.005em ·
   prose 20/400/1.6 · h3 28/700/1.15/-0.025em · h2 44/700/1.08/-0.035em · h1 72/700/1.0/-0.04em ·
   hero-h1 60/700/1.04/-0.04em · display 120/700/0.96/-0.04em · statement 192/700/0.95/-0.045em ·
   pull 32 italic/1.3. Mobile overrides where screens show them: display 56, h1 38, hero 44 (use `clamp()`
   between the 390 and 1440 values — decided: fluid type is faithful to two fixed frames).
   Font stacks: `"Schibsted Grotesk","Noto GH",system-ui,…`; `@font-face` for Noto GH with the
   unicode-range above, `font-display:swap` all, preload only the roman variable file.
7. **The Stop**: raspberry square after headings. Sizes (px) by style: caption 6, label 9, body/h3 10,
   h1 14, h2 9 (as in screens: SectionHeader stops are 9), display 24. Baseline lift tokens exist
   (`size/stop-lift/*` in tokens.json). Implement as inline-block span, `aria-hidden`, heading text
   itself carries no trailing period where the design shows the square instead (check each screen txt:
   e.g. "What we do" + Stop; but "1 Strategy." keeps its period — copy screens verbatim).
8. **Motion** (Foundations §05, non-negotiable): only transform/opacity; one easing
   `cubic-bezier(0.2,0.7,0.2,1)`; 120ms hover/press, 180ms menu/toast, 320ms section entrance **once**
   (IntersectionObserver, `data-reveal`, translateY(12px)+fade — decided), 480ms hero.
   `@media (prefers-reduced-motion: reduce)`: all of it off, hero unpinned. No parallax, no cursor effects.
9. **Hero geometry** (stage 1440×900, origin top-left of hero):
   Letters layer 3657.546×1152 at y=-244.8; inside it the letters vector 3440.232×1062 at y=+54.
   Rest state x-offset 0; focus state x-offset **-2700** (all three layers move together).
   Images sit *behind* the letters (counters show them): a1 slot 345.6² at (118.8, 448.2) in layer coords
   (`hero-window-a1.png`); e slot 261.726×107.308 at (1029.957, 468.258) (`hero-window-e.png`);
   a2 slot 345.6² at (2965.05, 448.2) (`hero-window-a2.png`); stop picture 148.5² at (3507.39, 751.5)
   (`hero-window-stop.png`). Scale the whole 3657-wide layer to viewport width with CSS transform scale
   on a 1440×900 stage (decided: stage scales, preserving design proportions at any width ≥1024;
   below that use the mobile variant). Captions/labels are HTML absolutely positioned in stage coords
   (rest: Caption 1 at x190 y561 w240; focus: Caption 4 at x807 y375 w200, label-stop x807 y659,
   Why-choose-us panel x1010 y120 w366, label-a2 x285 y177). Band: y680 h220, berry, swaps
   "Brand identity and websites, made together." ↔ "The card / A 9 mm square…" (cross-fade+translate).
   Behaviour: sticky stage inside a tall wrapper; scroll progress 0→1 maps x 0→-2700 with a hold at
   both ends (decided: progress curve 0–20% rest hold, 20–80% slide, 80–100% focus hold); rAF-throttled;
   transform only. Top bar inside hero on Home only (wordmark + Start a project link) — Home has **no**
   standard Header; every other page does. Mobile (<768): static first `a` window + H1 above + band below
   per mobile variant in `screens/home-390.txt`; no slide ("Swipe along the word." = the strip may
   overflow-x scroll-snap — decided: simple overflow strip of the scaled stage, no JS).
   No-JS/reduced-motion: rest state static; focus content (Caption 4 + Why list) must still exist in DOM
   reachable below (decided: render panel contents in normal flow under the band on reduced/no-JS via CSS).
10. **Header**: desktop 88px, mobile 64px, paper bg, hairline bottom when scrolled (state=scrolled;
    decided: add `border-b line` + slight bg solidity after 8px scroll, tiny vanilla/Solid in Header island —
    put menu+scroll state in ONE Solid island `Header.tsx` rendering nav for all pages).
    Current page nav item gets a 10px Stop before its label (see screens). Mobile menu = full-screen
    Menu panel (numbered 44px items, ink primary button, email) per `screens/menu-390.txt` + render.
    Focus trap + Escape + return focus (a11y requirement, not optional).
11. **Buttons/Links**: primary = ink bg/paper text on paper; on berry = paper bg/ink text ("Write to us");
    secondary = 1px outline current surface text, transparent bg ("Copy address" 224px wide in EmailBlock).
    Heights lg 56 / md 48, radius 2px max (screens show square corners — use 0). Hover: accent→accent-hover
    family per tokens; press: pressed tokens; focus-visible: 3px outline `focus` colour, 3px offset site-wide.
    Text Link: underline offset, hover colour accent-hover (120ms). Verify exact variant colours against
    Components renders if unsure: `figcraft-cli export … --node <id>` — ids in extraction txts.
12. **Plates**: image (4:3-ish crops as per screens: lg 723×542, md 501×376, sm 389×292) on raised mat,
    H3 title, body caption, optional "gave up" line, 13px Label under image. Home plate rows offset
    (second plate `margin-top:96` on desktop). Recent-work grid: rows (7+5 / 5+7 / 6+6 cols) per
    `screens/recent-work.txt`. Every image gets the design's Label text verbatim + real `alt`.
13. **Post page**: reading column 680, Prose 20/1.6, H3 section heads, PullQuote 32 italic, Table
    (label head row, hairlines, figure style numbers), Figure images 960 wide with caption+credit lines,
    "What we gave up" block, Next post card, ReadingMarker (fixed top hairline, 10px stop travels 0→100%
    by article scroll progress; Solid island; hidden under reduced motion? No — decided: it is progress,
    keep but without transition).
14. **Privacy**: screen has title only. Write a short factual page describing THIS site's behaviour
    (static, no cookies, no analytics, no form; email is an ordinary mailto; hosting logs line) in the
    site's plain voice, max ~6 short sections, and add `<!-- TODO(owner): legal review -->` + list it in
    the final report as needing owner review. Do not invent company/legal details.
15. **The 4 undesigned post bodies**: draft from their card excerpts + facts already in the design
    (brand-text, letters page, foundations). Plain voice, structure like the designed post (intro,
    H3 sections, What we gave up). Mark each file with frontmatter `drafted: true` and list in README
    as drafted-from-excerpts for owner rewrite. The designed post (`spaced-by-measuring`) is transcribed
    verbatim from `docs/extraction/post-text.txt` incl. table, pull quote, figure captions, rules list.
16. **SEO**: `Seo` props per page (title pattern `"<Page> — Aleywa Studios"`, Home just studio name +
    tagline), descriptions from each page's sub/lead line, canonical from `site` in astro.config
    `https://aleywa.com`, OG image = `plate-brand-full.jpg` processed to 1200×630 in `public/og.jpg`
    (generate via sharp in W6), `@astrojs/sitemap`, `public/robots.txt`, favicon = berry square with
    paper "a." — build from `hero-window-stop.png`? Decided: simple SVG favicon: berry rounded-2 square,
    paper bold "a" + raspberry stop, hand-written SVG in `public/favicon.svg`.
17. **Content collections** (Astro content layer, `src/content.config.ts`):
    `posts` = glob `src/content/posts/*.md` (title, date, minutes, excerpt, image, drafted?);
    `work` = glob `src/content/work/*.md` (title, caption, gaveUp?, label, image, order, size);
    `jobs` = glob `src/content/jobs/*.json` (all fields per `screens/strategy.txt` pattern:
    n, slug, title, line, intro, example{title,body,gaveUp,label,image}, gets[], needs, needsNote?,
    weDo, youDecide, youReceive, windowImage, windowLabel).
    Reasons/steps/honest-answers/glyphs: typed arrays in `src/data/*.ts` (decided — single-use, no collection).
18. **Images via `astro:assets`** `<Image>` with widths; hero window images `loading="eager"` only a1.
    Keep original filenames in `src/assets/img/`. Hash→name map is in `docs/extraction/imgmap.txt`.
19. `.gitignore` add `.astro/`; keep existing file otherwise. `.env.example` = comment only (no env vars).
    Do NOT commit (no git writes at all). Do NOT touch `PROMPT.md`, `PLAN.md`, `aleywa-studios.figcraft`.

## Worker briefs

### W1 — Config + foundation
GOAL: empty site builds with fonts, tokens, type utilities working.
DO: `package.json` scripts (dev/build/preview/check=`astro check`, lint=`eslint .`, format=`prettier --write .`);
`astro.config.mjs` (site, solid, sitemap, tailwind vite plugin); `tsconfig.json` (astro strict);
`eslint.config.js` (astro recommended + ts parser); `.prettierrc` (astro plugin); `src/env.d.ts`;
`src/styles/global.css` (@theme tokens per decision 5–6, @font-face×3, base: paper bg/ink text,
focus-visible ring, selection colour = brand-200, reduced-motion kill switch, `data-reveal` styles,
`.container-x` helper = max-w-[1312px] + responsive margins); placeholder `src/pages/index.astro`.
DONE WHEN: `npm run build` passes; a test heading renders Schibsted at h2 metrics. REPORT paths + build output tail.

### W2 — Core components + layout
GOAL: every Page Core component as an Astro component with the screens' exact dimensions/copy patterns.
DO: `src/layouts/BaseLayout.astro` (head+Seo, skip link, Header unless `bare`, main, Footer, reveal script);
`src/components/Seo.astro, Wordmark.astro (inline svg, `tone` prop), Stop.astro, Button.astro, TextLink.astro,
Kicker.astro, SectionHeader.astro (title+stop+intro 680), PageHero.astro (display title+stop+sub, optional window),
Plate.astro, WindowFigure.astro (round|square), JobRow.astro, Reason.astro, GlyphSlot.astro, StepGrid.astro,
PostCard.astro (featured|standard), HonestAnswer.astro, Swatch.astro, CtaBand.astro, EmailBlock.astro,
Footer.astro` (columns exactly per screens; `tone: paper|berry`), `src/data/site.ts` (nav, email, footer copy).
Copy/dimensions: `docs/extraction/screens/*.txt`. Header comes in W5 (island) — stub `Header.astro` static now.
DONE WHEN: build passes with a kitchen-sink page (delete after) or storybook-less spot check via `/` using several.

### W3 — Content
GOAL: all copy in collections/data, zero copy invented beyond decisions 14–15.
DO: `src/content.config.ts`; 4 job JSONs from `screens/{strategy,identity,applications,website}.txt` +
 `what-we-do` gets lists; 6 work .md (Our brand in full, The wordmark, The space between the letters,
 The card, The wall, This website) from home/recent-work txts; 5 posts (decision 15), designed one verbatim;
 `src/data/reasons.ts` (5 + figures: 1 plate-website, 2 plate-brand-full, 3 plate-spacing, 4 glyphs, 5 plate-card),
 `steps.ts`, `honest.ts`, `glyphs.ts` (ɛ Ɛ ɔ Ɔ ɖ ɣ ʋ not-drawn, ŋ in-typeface), brand chapters in the page file (W4).
Image fields reference `src/assets/img/*` names listed in decision 18/imgmap.
DONE WHEN: `astro check` passes collection schemas; spot-diff 10 strings against extraction txts.

### W4 — Pages (static)
GOAL: all 15 routes rendering the screens.
DO: index (hero placeholder div with rest state static — W5 animates; sections What we do/Recent work/
Why choose us/How we work/From the blog/CtaBand), what-we-do (+Together sunken band), what-we-do/[slug]
from jobs collection (breadcrumb "What we do · N of 4", Our own example, What you get/need, How it works,
Next, CtaBand), recent-work, recent-work/our-brand-in-full (chapters from `brand-text.txt`: idea w/ window,
wordmark, spacing, colour w/ 5 Swatches Paper #F6F3EE Ink #181110 Stone #6A615F Raspberry #AB2859 Berry
#460F22, type w/ glyph slots, where-it-goes, book), why-us, how-we-work, letters, blog, blog/[slug]
(article layout decision 13, next-post = next by date), start-a-project (What to include / What happens
next + EmailBlock + berry footer), privacy (decision 14), 404 (Window empty round, "Go to the home page" lead link).
Responsive: follow `screens/*-390.txt` (stack, margins 20, fluid type, plates full-width, step grid → stacked steps).
DONE WHEN: build passes; every route returns content; no horizontal scroll at 390.

### W5 — Islands + motion
GOAL: the four interactive pieces, motion-token exact.
DO: `Header.tsx` (Solid: scrolled state, mobile Menu panel w/ trap/Esc, aria-current stop) replacing stub;
`CopyAddress.tsx` inside EmailBlock+CtaBand (decision 2; toast component, popover shadow, auto-dismiss 2.4s decided);
`Hero.tsx` (decision 9; `client:load` on Home only; SSR renders rest state so no-JS is correct);
`ReadingMarker.tsx` (post only). Reveal script already in layout (W2) — verify once-only.
DONE WHEN: menu keyboard-operable; copy writes `info@aleywa.com` to clipboard (verify via browser eval or manual);
hero slides 0→-2700 by scroll and is static under reduced-motion emulation; marker travels on post.
No animation library. transform/opacity only — grep your CSS to prove it.

### W6 — SEO, assets, README, verification
GOAL: production-ready, verified against the design renders.
DO: per-page Seo props; `public/robots.txt`, `public/favicon.svg` (decision 16), `public/og.jpg` via sharp script
in `/tmp` (not committed... script in /tmp, output in public); README.md (install/dev/build/preview, Cloudflare
Pages static deploy, content workflow: add post/work = add file, fonts, drafted-posts + privacy flags);
`.env.example` comment-only; run `npm run check`, `npm run lint`, `npm run build` — all green;
serve `npm run preview`, screenshot every route at 1440+390 (headless chromium if present:
`command -v chromium`), compare side-by-side with `docs/extraction/renders/` + re-render design frames
with `figcraft-cli export aleywa-studios.figcraft -o /tmp/x.png --format png --node <id> --scale 0.5`
(frame ids in PLAN/extraction), fix spacing/type mismatches, check console errors, broken links
(`grep -o 'href="[^"]*"' dist/**/*.html` sanity), keyboard tab order, reduced-motion pass.
DONE WHEN: check+lint+build green; screenshot comparison done with fixes listed; final report per PROMPT.md §40
(9 points) incl. manual-attention list: privacy legal review, 4 drafted posts, printer-sample labels already in copy.
