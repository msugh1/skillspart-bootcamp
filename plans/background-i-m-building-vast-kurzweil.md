# Build SkillSpark Bootcamp website

## Context
The detailed plan in `plans/skillspark-bootcamp-website.md` is approved. The repo is still a blank Vite scaffold (`src/App.tsx`, `src/index.css`, `src/main.tsx` only). This step executes that plan.

## Approach (follows plan section 9)
1. Install `react-router`, `lucide-react`, `motion` with pnpm.
2. `src/index.css`: Manrope import, Tailwind v4 `@theme` tokens (#00ACFF, #010033, #FFFFFF, #EAF8FF), focus and reduced-motion styles.
3. Add `src/config/site.ts` (typed SITE_CONFIG with empty applicationUrl and contactEmail), `src/data/{programmes,faqs,media}.ts`.
4. `src/routes.tsx` (createBrowserRouter), `src/App.tsx` (RouterProvider only), layout shell (Header, MobileNav, Footer, ScrollToTop, skip link).
5. UI components: ApplyButton, ButtonLink, SectionHeading, cards, PhotoFrame, Accordion, PageHero, CallToAction, Reveal.
6. Pages: Home, About, Programmes, Cybersecurity, Contact (validation + mailto), NotFound.
7. Logo: not yet re-uploaded. Use `public/brand/` once supplied. Until then, leave a single `Logo` component that renders the asset and a clearly marked placeholder, never recreating it in Knewave.

## Verification
`pnpm build`, then check each route in the existing preview at several widths, plus mobile menu, FAQ accordions, contact validation, and the disabled Apply state.
