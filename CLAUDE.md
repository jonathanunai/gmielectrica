# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at localhost:3000
npm run build      # Build for production
npm run generate   # Generate static site
npm run preview    # Preview production build
```

## Architecture

This is a **minimal Nuxt 4 single-page website** — a "coming soon" landing page for GMI Eléctricas.

**Stack:** Nuxt 4, Vue 3, TypeScript, Tailwind CSS v4, Nuxt UI

**Structure:**
- `app/app.vue` — the entire application lives in one component (no pages/components directories)
- `app/app.config.ts` — UI theme colors (primary: purple, neutral: zinc)
- `app/assets/css/main.css` — global styles, `@font-face` declarations for Centra font family + Montserrat
- `nuxt.config.ts` — Nuxt config with Tailwind vite plugin, Nuxt UI, Nuxt Image, Nuxt Content modules

**Form handling:**
- Reactive state via `reactive()`, validation via **Valibot** schemas
- On submit, posts to `https://formsubmit.co/ajax/info@gmcolaborativos.com`
- Feedback via Nuxt UI `useToast()`

**Assets in `public/`:** PWA icons, `VIDEOGM.mp4` (autoplay hero video), `GM-Colaborativos.png` logo
