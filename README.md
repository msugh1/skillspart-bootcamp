# SkillSpark Bootcamp

**Free digital-skills education for underserved Nigerian youth.** A Millennium Fellowship 2026 project aligned with **SDG 4: Quality Education**, founded by Msugh F. Demkiir (Felix).

SkillSpark is designed as a **free 6–8 week online bootcamp** with a Cybersecurity inaugural track and planned IT Support and IT Automation tracks. The target audience includes secondary-school and university learners from underserved communities across Nigeria. Projected intake is 50–200 students per cohort, subject to capacity.

## Programme delivery

The project plans to use Google Classroom for modules, Google Meet for practical sessions, WhatsApp for peer community, and guest expert sessions and follow-up mentorship where available.

**Important:** Exact cohort dates, finalized lesson plans, certification access and partners have not yet been announced. Certificates from external platforms depend on their respective requirements. No Coursera sponsorship or other partnership is claimed as confirmed.

## Technology

React 19, TypeScript, Vite 8, Tailwind CSS 4, React Router, Motion and pnpm. Existing Figma Make development tooling is retained for compatibility.

## Local setup

Use Node 22 and pnpm 10:

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Run checks:

```bash
pnpm typecheck
pnpm build
```

## Applicant intake (disabled by default)

The `/apply` page is public, but **does not collect data** while applications are closed. To activate after your data handling review:

1. Create and configure a **Formspree** form endpoint and review its inbox access, spam control, data retention, privacy obligations and consent language.
2. Copy `sample.env` to `.env.local` locally, or add the same values in your hosting provider's environment settings.
3. Set `VITE_APPLICATION_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID` using a real Formspree form ID.
4. Only after confirming intake readiness and safeguarding for under-18 applicants, set `VITE_APPLICATIONS_OPEN=true`.
5. Perform an end-to-end test submission and verify receipt before sharing the application link.

**Security:** Vite `VITE_*` values are public in browser bundles. Never put API keys, secrets or private access tokens in them. Email, age group and optional application information are transmitted to Formspree when enabled. Application intake requires an approved privacy/retention policy before launch. Frontend validation is not a substitute for server-side validation.

## Pages

Home `/`, About `/about`, Programmes `/programmes`, Cybersecurity `/programmes/cybersecurity`, Apply `/apply`, Contact `/contact`, Privacy `/privacy`.

## Hosting

`vercel.json` includes an SPA fallback so direct navigation to nested routes works when deployed to Vercel. Use **Vite**, build command `pnpm build`, output directory `dist`. The project should also remain compatible with its Figma Make workflow, subject to testing.

## Founder & contact

Msugh F. Demkiir (Felix) · Millennium Fellow, 2026 · NUTM Lagos

- Email: felixdemkiir@gmail.com
- LinkedIn: https://www.linkedin.com/in/msugh-felix-demkiir-cybersecurity-analyst/
- GitHub: https://github.com/msugh1

## Launch checklist

- [ ] Approve curriculum, 6–8 week delivery plan and confirmed intake dates
- [ ] Confirm facilitators, mentor availability, certificate conditions and learning platforms
- [ ] Approve under-18 safeguarding and data privacy/retention policy
- [ ] Set and test Formspree endpoint; open intake only afterward
- [ ] Verify CI passes: typecheck and production build
- [ ] Manually test mobile navigation, forms, reduced-motion accessibility and direct-route refresh
- [ ] Review real-device photography, content accuracy and deployment URL
