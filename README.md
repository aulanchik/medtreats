# MedTreats

Single-page marketing site for a skincare and aesthetics clinic. Designed & created by Artyom Ulanchik

**Stack:** React 19, TypeScript, Vite, Tailwind CSS v4. Fonts are self-hosted via Fontsource (Instrument Serif + Manrope).

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build to dist/
npm run lint
npm run preview  # serve the production build
```

Requires Node 20.19+ (Netlify is pinned to Node 22 in `netlify.toml`).

## Project structure

```
src/
├── components/   One file per section (Hero, Treatments, Academy, Gallery, Testimonials, Enquiry, ...)
├── data/         All site copy as JSON; edit text here, not in components
├── hooks/        usePrefersReducedMotion
├── index.css     Tailwind import + design tokens (@theme: colours, fonts, type scale, animations)
├── App.tsx
└── main.tsx
public/
├── images/       WebP images (hero is 1600px wide)
└── __forms.html  Static form definition so Netlify Forms can detect the enquiry form
```

In the JSON files, `*text*` marks the italic accent part of a heading (e.g. `"Our *Treatments*"`).

## Design tokens

Colours, fonts, fluid type sizes (`text-display`, `text-h2`, `text-h3`) and animations live in the `@theme` block in `src/index.css`. Change the palette there.

## Enquiry form

The form posts to [Netlify Forms](https://docs.netlify.com/forms/setup/) (`name="enquiry"`). It works once deployed on Netlify; locally it shows the error message because there is nothing to receive the POST. To receive submissions by email, you have to enable a form notification in the Netlify dashboard (Forms > Form notifications).

## Accessibility notes

- Skip link, visible focus rings, semantic landmarks, labelled form fields.
- The testimonials carousel pauses on hover and focus, has previous/next and dot controls, and does not auto-advance for users who prefer reduced motion.
- All motion respects `prefers-reduced-motion`.
