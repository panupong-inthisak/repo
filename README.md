# Panupong Inthisak — Portfolio

Personal portfolio of **Panupong Inthisak**, a full-stack web developer (PHP/CodeIgniter) maintaining **240+ live government websites across 40 provinces** in Thailand.

🔗 **Live site:** https://panupong-inthisak.github.io/repo/

> เว็บพอร์ตโฟลิโอส่วนตัว รองรับภาษาไทย/อังกฤษ และโหมดมืด พัฒนาด้วย React + TypeScript

## Features

- **Bilingual (TH / EN)** — switch instantly; the choice is remembered, and first-time visitors get their browser's language
- **Light / dark mode** — follows the system setting, with a circular reveal when toggled
- **Scroll animations** — typewriter hero, count-up stats, a timeline that draws as you scroll, 3D tilt cards and skill marquees
- **Accessible motion** — animations turn off automatically when the visitor prefers reduced motion
- **Responsive** — works from phones to wide screens

## Tech stack

| | |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite |
| Animation | [Motion](https://motion.dev) |
| Lint | Oxlint |
| Hosting | GitHub Pages via GitHub Actions |

## Project structure

```
src/
├── data/content.ts          # All text (TH/EN) — edit content here
├── i18n/LanguageContext.tsx # Language state + <Tx> cross-fade text
├── hooks/useTheme.ts        # Light/dark theme toggle
├── components/              # Navbar, Hero, Stats, About, Experience,
│                            # Projects, Skills, Contact, Reveal
└── index.css                # Design tokens and styles
public/
├── my_photo2.png            # Profile photo
└── Panupong_Resume.pdf      # Downloadable CV
```

## Run locally

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check and build to dist/
npm run lint     # run Oxlint
```

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
The base path is set in [`vite.config.ts`](vite.config.ts) (`base: '/repo/'`) and must match the repository name.

## Contact

- Email: panupong3305@hotmail.com
- GitHub: [@panupong-inthisak](https://github.com/panupong-inthisak)
