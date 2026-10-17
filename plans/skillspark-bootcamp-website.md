# SkillSpark Bootcamp Website — Implementation Plan

## 1. Goal and success criteria

Build a premium, fully responsive five-page marketing website for SkillSpark Bootcamp in the existing React 19 + Vite + Tailwind CSS v4 repository.

The finished site should:

- Present SkillSpark as a credible, mission-driven edtech initiative with a youthful but professional visual identity.
- Promote the inaugural Cybersecurity programme while making future programmes easy to add from shared data.
- Use the official uploaded SkillSpark logo without redrawing, stretching, recoloring, or altering its proportions.
- Use React Router for real route-based navigation, Lucide React for interface icons, and Motion for restrained interaction/entrance effects.
- Provide working desktop and mobile navigation, route transitions/scroll restoration, accessible accordions and controls, external application CTAs, and a validated contact-to-email handoff.
- Avoid implying that application or contact data is stored; this release has no backend.
- Remain polished from small mobile widths through large desktop screens, with appropriate focus states, keyboard behavior, reduced-motion handling, and image alt text.

## 2. Confirmed scope and constraints

### Routes

1. `/` — Home
2. `/about` — About SkillSpark
3. `/programmes` — Programmes overview
4. `/programmes/cybersecurity` — Cybersecurity programme detail
5. `/contact` — Contact and common questions
6. `*` — Branded not-found state (supporting route, not counted as a primary page)

All “Apply” actions point to one externally hosted form when its URL is configured.

### Content

- Write launch-ready draft copy in a confident, encouraging, plain-language voice.
- Use credible draft programme details for the inaugural offer: an 8-week, beginner-friendly, mentor-led, live online programme with practical labs, portfolio projects, career guidance, and a certificate of completion.
- Avoid unsupported outcome claims, fabricated partner logos, fake testimonials, fake learner counts, and guaranteed-employment language.
- Mark future programmes as “Coming next” rather than inventing dates or accepting enrolment.

### Backend

- Do not add Payload, another backend, authentication, persistence, or server endpoints.
- Application submission remains external.
- The contact page uses client-side validation and a `mailto:` handoff only after a real contact email has been configured.

### Launch inputs still required

- The user will re-upload the official SkillSpark logo. Implementation should place the supplied asset in `public/brand/` (or reference its imported asset path if required by the upload format), preserve intrinsic dimensions, and use it in the header/footer.
- The official application form URL and contact email are not yet available. Keep both values in one typed configuration file and do not expose fake URLs or email addresses.

## 3. Technical approach

### Dependencies

Add:

- `react-router` for Data Mode routing with `createBrowserRouter` and `RouterProvider`.
- `lucide-react` for all interface icons.
- `motion` for lightweight React animation primitives.

Keep the app frontend-only and avoid adding component frameworks or unnecessary utility packages.

### Proposed source structure

```text
src/
  App.tsx                       # RouterProvider only
  main.tsx
  index.css                     # Tailwind import, Manrope import, theme tokens, global styles
  routes.tsx                    # createBrowserRouter route definitions
  config/site.ts                # brand/contact/application constants
  data/
    programmes.ts               # typed programme/module/outcome data
    faqs.ts                     # shared FAQ content
    media.ts                    # selected Unsplash URLs, attribution, and alt text
  components/
    layout/
      SiteLayout.tsx
      Header.tsx
      MobileNav.tsx
      Footer.tsx
      ScrollToTop.tsx
    ui/
      ButtonLink.tsx
      ApplyButton.tsx
      SectionHeading.tsx
      ProgrammeCard.tsx
      FeatureCard.tsx
      StatCard.tsx
      PhotoFrame.tsx
      Accordion.tsx
      PageHero.tsx
      CallToAction.tsx
  pages/
    HomePage.tsx
    AboutPage.tsx
    ProgrammesPage.tsx
    CybersecurityPage.tsx
    ContactPage.tsx
    NotFoundPage.tsx
```

Keep components focused and data-driven; do not place the entire site in `App.tsx`.

### Routing behavior

- `src/App.tsx` renders `RouterProvider`.
- `src/routes.tsx` defines a shared `SiteLayout` with nested page routes.
- Use `NavLink` for active desktop/mobile navigation states.
- Internal links use React Router `Link`; external application links use semantic anchors with `target="_blank"` and `rel="noreferrer"`.
- Close the mobile navigation after route selection, close it on `Escape`, lock background scroll while open, and expose proper `aria-expanded`, `aria-controls`, and labels.
- Scroll to the top when pathname changes while preserving in-page hash behavior if later added.
- The 404 page offers clear links back home and to the programmes page.

## 4. Visual system

### Brand and color

Define Tailwind v4 theme tokens in `src/index.css`:

- Electric Blue: `#00ACFF` — primary actions, links, active states.
- Deep Navy: `#010033` — primary headings, footer, high-contrast surfaces.
- White: `#FFFFFF` — main canvas and reversed text.
- Soft Blue: `#EAF8FF` — alternating sections and subtle cards.
- Add restrained derived neutrals for body copy, borders, muted text, and pale blue focus/hover states while keeping official colors dominant.

Use mostly white space with soft-blue section alternation, fine borders, modest shadows, and medium corner radii. Avoid excessive gradients, glassmorphism, giant decorative blobs, and oversized display type. Any gradient should be a subtle blue wash used only to add depth behind a hero or CTA.

### Typography

- Import the public Google font Manrope at the top of `src/index.css`, after the Tailwind import ordering requirements are satisfied.
- Use Manrope for headings, body text, navigation, buttons, forms, and labels.
- Do not recreate the logo text in Knewave; the uploaded official logo image is the source of truth.
- Use a responsive type scale with compact line lengths: strong 48–64px desktop hero heading, approximately 38–44px section headings, readable 16–18px body copy, and smaller labels with adequate contrast.

### Layout language

- Content max width around 1200–1280px with responsive side gutters.
- Section spacing approximately 72–112px on desktop and 52–72px on mobile.
- Hero uses an editorial split layout rather than a generic centered banner.
- Use a consistent 12-column desktop grid and stacked mobile layout.
- Cards use strong hierarchy, restrained icon containers, and consistent internal spacing.
- Add subtle technology motifs through thin grid lines, code-like micro-labels, small status dots, and shield/network iconography rather than large abstract shapes.

### Official logo handling

- Inspect the re-uploaded file before use.
- Prefer SVG when supplied; otherwise use the highest-resolution transparent raster.
- Render with intrinsic aspect ratio and `object-contain`; never crop or stretch.
- Use a prominent but balanced desktop width around 150–180px and a smaller mobile width around 130–150px, adjusted after visual inspection.
- If only one logo colorway is supplied, ensure its surrounding header/footer surface preserves contrast rather than altering the logo.

## 5. Photography plan

Use intentionally cropped Unsplash photography with centralized metadata and descriptive alt text. Apply consistent image treatment: natural color, subtle navy/blue edge treatment, modest rounded corners, and no heavy color overlays that obscure faces.

Proposed selections found during planning:

- Home hero: Vitaly Gariev, “Diverse group of students gathered around a laptop” (`photo-1758270705172-07b53627dfcb`), wide crop with subjects kept visible.
- About section/page: Haseeb Modi, “Students in hijabs working at computers in a bright school computer lab” (`photo-1719159381981-1327b22aff9b`).
- Cybersecurity feature/detail: Daniel Thomas, “A woman with long braids using a laptop at a desk” (`photo-1604933762021-54a5858c9832`).
- Learning experience: Good Faces, “Man using a laptop” (`photo-1612299273045-362a39972259`) or Kojo Kwarteng’s laptop portrait (`photo-1620829813573-7c9e1877706f`), choosing the crop that best balances the final section.

Implementation should use Unsplash’s optimized image parameters, set explicit aspect ratios/sizes to prevent layout shift, lazy-load below-the-fold images, keep the hero eager/high-priority, and retain photographer attribution in the centralized media data or visible credits area.

## 6. Page-by-page content and behavior

### Home

1. **Announcement strip:** “Applications for the inaugural Cybersecurity cohort are opening soon,” with a small status treatment.
2. **Hero:** mission-led headline, short supporting copy, primary Apply CTA, secondary Explore programme CTA, and learner photography. Include a compact trust row (“Beginner friendly,” “Practical labs,” “Mentor led”) rather than invented numerical social proof.
3. **Mission snapshot:** a concise “Skills that move you forward” story paired with the computer-lab image and three principles: access, practical learning, and confidence.
4. **Featured programme:** Cybersecurity card with level, format, duration, short outcomes, image, and detail link.
5. **How learning works:** four steps—learn foundations, practise in guided labs, build a portfolio project, prepare for next steps.
6. **Learning experience:** mentor support, peer community, live sessions, and accessible learning resources beside a relevant learner photo.
7. **Future pathways:** compact cards for Web Development, Data & AI, and Product Design marked “Coming next,” demonstrating extensibility without pretending they are open.
8. **Final CTA:** clear next action to explore Cybersecurity and apply externally when configured.

### About

1. Page hero with the SkillSpark mission and a quiet technology motif.
2. Origin/purpose section explaining the access and skills gap without fabricated founding details.
3. Mission and vision cards.
4. Values grid: practical learning, inclusion, curiosity, community, and career readiness.
5. “Who it is for” section covering students, recent graduates, career explorers, and motivated beginners.
6. Photo-led “Built for possibility” promotional band.
7. CTA to explore programmes.

### Programmes

1. Page hero introducing present and future learning pathways.
2. Featured Cybersecurity programme card with complete summary and detail CTA.
3. “More pathways are coming” grid driven by the same `programmes.ts` model.
4. Programme selection guidance: choose by interest, starting point, and desired project outcomes.
5. CTA for the inaugural programme.

The data shape should support fields such as slug, title, status, eyebrow, summary, duration, format, level, image, skills, modules, outcomes, and apply eligibility so a future programme can be added without changing page structure.

### Cybersecurity

1. Programme hero with image, “Inaugural programme” badge, key facts, Apply CTA, and a note that no prior security experience is required.
2. Overview and learner-fit sections.
3. “What you will learn” grid: security foundations, threats and vulnerabilities, networks and systems, identity/access, safe practices, incident response, and career pathways.
4. 8-week curriculum timeline:
   - Week 1: Digital safety and security mindset
   - Week 2: Systems, networks, and the internet
   - Week 3: Threats, vulnerabilities, and risk
   - Week 4: Identity, authentication, and access
   - Week 5: Defensive tools and monitoring
   - Week 6: Incident response fundamentals
   - Week 7: Guided practical challenge
   - Week 8: Capstone presentation and next steps
5. Learning format section: live instruction, guided labs, mentor feedback, peer learning, and portfolio work.
6. Outcomes section using capability-based language, not employment guarantees.
7. Beginner reassurance and requirements: computer access, stable internet, curiosity, and weekly study commitment.
8. FAQ accordion specific to eligibility, schedule, experience, certificate, and application.
9. Final external application CTA.

### Contact

1. Friendly page hero with expected response framing that does not promise a specific turnaround unless configured.
2. Contact options card using configured email/social values only.
3. Accessible client-side form fields: name, email, topic, and message.
4. Validate required fields, email shape, and meaningful message length; provide inline errors linked with `aria-describedby`.
5. On valid submit, create a safely encoded `mailto:` URL using the configured recipient, subject, and body. Do not collect or persist the form values.
6. If no recipient email is configured, disable the submit action and show an honest “Contact details coming soon” notice.
7. General FAQ accordion for application, programme format, beginner suitability, and future programmes.

## 7. Shared interactions and state

### External Apply behavior

Create a single `SITE_CONFIG.applicationUrl` value:

- When populated, `ApplyButton` renders an external anchor and clearly communicates that it opens the application form in a new tab.
- When empty, it renders a disabled “Applications opening soon” state with explanatory accessible text.
- Every application CTA must consume this shared component to prevent inconsistent links.

### Contact configuration

Keep `contactEmail`, optional phone, optional location, and social URLs in `SITE_CONFIG`. Components render only populated values. No fake contact information appears in the UI.

### Accordion

- Use native buttons with `aria-expanded` and associated content regions.
- Support keyboard activation.
- Animate height/opacity subtly with Motion while preserving reduced-motion behavior.

### Motion

- Add light section reveal animations, card hover lift, image scale on hover, mobile menu transitions, and accordion expansion.
- Keep durations short and movement small; no looping decorative animation.
- Use a shared reveal primitive/variants instead of copy-pasted transitions.
- Respect `prefers-reduced-motion` via Motion’s reduced-motion support and CSS fallbacks.

## 8. Accessibility, responsiveness, and quality details

- Use semantic landmarks: header, nav, main, sections, footer.
- Include a keyboard-visible skip link.
- Maintain WCAG-friendly contrast, especially white text on Electric Blue; use Deep Navy text where white would be insufficient.
- Provide visible focus rings and 44px minimum interactive targets.
- Keep one logical `h1` per route and sequential heading levels.
- Give meaningful images descriptive alt text and decorative motifs empty alt/hidden semantics.
- Ensure navigation, accordions, and the contact form are usable without a pointer.
- Avoid horizontal overflow at 320px width.
- Use responsive images, explicit aspect ratios, and lazy loading below the fold.
- Keep text measures readable and avoid tiny labels.

Responsive checkpoints:

- Mobile: 320–479px, stacked layout, full-width actions where useful, drawer navigation.
- Large mobile/tablet: 480–767px.
- Tablet: 768–1023px, selective two-column layouts.
- Desktop: 1024–1439px.
- Large desktop: 1440px+, capped content width to retain balance.

## 9. Implementation sequence

1. Re-check session uploads and inspect the official logo asset; place/reference it without modification.
2. Install `react-router`, `lucide-react`, and `motion`.
3. Add theme tokens, Manrope font wiring, global body/focus/selection styles, and reduced-motion safeguards in `src/index.css`.
4. Add typed site configuration, programme data, FAQ content, and centralized image metadata.
5. Create the router, shared `SiteLayout`, scroll behavior, responsive header/mobile navigation, and footer.
6. Build reusable buttons, headings, cards, image treatment, accordion, page hero, and CTA components.
7. Implement Home, About, Programmes, Cybersecurity, Contact, and Not Found pages.
8. Wire all internal routes, active states, Apply behavior, contact validation/mailto handoff, and empty-configuration states.
9. Add restrained Motion effects and reduced-motion behavior.
10. Review responsive layouts and refine spacing, crop positions, text wrapping, header behavior, and card alignment.

## 10. Verification

Run the repository-prescribed build:

```sh
pnpm build
```

Then verify in the already-running Figma Make preview without starting another development server:

- Visit every route directly and through desktop/mobile navigation.
- Confirm active nav states, 404 behavior, and scroll-to-top behavior.
- Test the mobile menu with pointer, keyboard, `Escape`, and route changes.
- Confirm Apply CTAs are consistently disabled with an honest message while `applicationUrl` is empty, then temporarily validate external-link behavior with a configured test URL without committing that test value.
- Test contact validation for blank fields, malformed email, short message, and valid mailto generation; confirm no data persistence is implied.
- Expand/collapse every FAQ by keyboard and pointer.
- Inspect representative widths at 320, 375, 768, 1024, and 1440px for overflow, cropping, heading wraps, and touch target size.
- Check hover/focus states, image loading, alt text, semantic heading order, and color contrast.
- Enable reduced motion and verify that the site remains fully usable without entrance/transition movement.
- Confirm the official logo is crisp, uncropped, and proportionally correct in header and footer.

## 11. Out of scope

- Backend/CMS, admin editing, stored form submissions, user accounts, authentication, payments, analytics, and email delivery.
- Fabricated testimonials, partner logos, application statistics, placement claims, or accreditation claims.
- Additional programme detail routes until official content exists.
- Recreating or modifying the official SkillSpark logo artwork.
