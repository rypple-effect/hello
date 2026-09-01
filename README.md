# Galaban Portfolio

A dark, cinematic personal portfolio landing page for Ryan Christian S. Galaban —
Statistician & Data Scientist. Built with React, Vite, TypeScript, Tailwind CSS,
and Three.js.

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS (+ `tailwindcss-animate`)
- `three` + `@react-three/fiber` + `@react-three/drei` — hero particle field
- `gsap` — glitch / split-reveal text animation
- `vanilla-tilt` — 3D card tilt on hover

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

This repository is configured for automatic deployment to GitHub Pages via GitHub Actions:

1. In your GitHub repository, go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Pushing commits to the `main` branch will automatically trigger `.github/workflows/deploy.yml` to build and deploy the site.
4. You can also manually trigger a deployment from the **Actions** tab by selecting **Deploy to GitHub Pages** > **Run workflow**.

## Project structure

```
src/
  components/   All page sections + reusable text/visual effect components
  hooks/        useParallax, useInView, useCountUp, useTilt
  lib/          cn() className helper
  index.css     Theme tokens, liquid-glass, noise texture, grid background
  App.tsx       Assembles all sections
```

## Notes

- The hero background video is streamed from an external CDN URL — swap the
  `src` in `src/components/Hero.tsx` if you want to self-host it.
- Parallax and tilt effects are automatically disabled on mobile viewports
  (`< 768px`) and respect `prefers-reduced-motion`.
- Color theme, fonts, and the liquid-glass effect are all defined as CSS
  variables / utility classes in `src/index.css` and `tailwind.config.ts`.
