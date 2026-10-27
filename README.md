# Aleywa Studios

Brand identity and websites, made together. Static site for [aleywa.com](https://aleywa.com), built with Astro, TypeScript, Tailwind CSS 4 and SolidJS islands.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run check    # astro check (types)
npm run lint     # eslint
npm run format   # prettier --write .
```

## Deploy

Static output (`dist/`) for Cloudflare Pages: build command `npm run build`, output directory `dist`. No environment variables are required (see `.env.example`). No server, database, cookies, analytics or form is used. The one action is `mailto:info@aleywa.com` plus copy-address.

## Content workflow

- Add a post: add a Markdown file in `src/content/posts/` with frontmatter `title, date, dateLabel, minutes, excerpt, image` (image under `src/assets/img/`). It appears on `/blog`, the home blog section, and as next post by date order.
- Add work: add a Markdown file in `src/content/work/` with `title, caption, gaveUp?, label, image, order, size`.
- Jobs live as JSON in `src/content/jobs/` (one file per job, fields per the job page template). Reasons, steps, honest answers and glyphs are typed arrays in `src/data/`.
- Schemas are in `src/content.config.ts`; `npm run check` validates them.

## Fonts

Self-hosted in `public/fonts/`: Schibsted Grotesk (variable, roman + italic) and a Noto Sans subset (`Noto GH`) covering Ɔ Ɛ ɔ ɛ ɖ ɣ ʋ via `unicode-range`, so those letters render in the fallback face. Only the roman variable file is preloaded.

## Needs owner attention

- **Privacy page** (`src/pages/privacy.astro`, marked `<!-- TODO(owner): legal review -->`): short factual copy written for this site (static, no cookies, no analytics, no form). Needs legal review before launch. No company/legal details were invented.
- **Drafted posts** (`drafted: true` in frontmatter): `named-after-a-sweet`, `45-typefaces`, `typeface-cannot-set-e-o`, `one-square-five-places` were drafted from their card excerpts and facts already in the design, for owner rewrite. The designed post `spaced-by-measuring` is transcribed verbatim.
- Printer-sample labels already in copy (for example "Printer samples to come") stay as written until real samples exist.
