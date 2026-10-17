# SkillSpark Bootcamp

**Free digital-skills education for underserved Nigerian youth.** A Millennium Fellowship 2026 project aligned with **SDG 4: Quality Education**, founded by Msugh F. Demkiir (Felix).

SkillSpark is designed as a **free 6–8 week online bootcamp** with a Cybersecurity inaugural track and planned IT Support and IT Automation tracks. The target audience includes secondary-school and university learners from underserved communities across Nigeria. Projected intake is 50–200 students per cohort, subject to capacity.

## Programme delivery

The project plans to use Google Classroom for modules, Google Meet for practical sessions, WhatsApp for peer community, and guest expert sessions and follow-up mentorship where available.

**Partner-supported learning:** The founder reports a partnership with **IT Experience** for learner access to the [Google Cybersecurity Professional Certificate on Coursera](https://www.coursera.org/professional-certificates/google-cybersecurity). Eligibility, seat allocation, access duration and branding permissions must be confirmed before public enrollment. Completion of the full Coursera course requirements is necessary for the official Google certificate; the 6–8 week bootcamp alone does not issue it.

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

## Applicant intake — Google Forms (closed by default)

The \`/apply\` page does not collect applicant details. Registration is **closed** until the intake is approved and a link to an official public Google Form is configured.

Read [Google Form configuration and safeguarding checklist](docs/google-form-setup.md). The form must be set up and approved separately in a SkillSpark-controlled Google account.

1. Set \`VITE_GOOGLE_FORM_URL\` to the respondent-facing Google Form link (e.g. \`https://forms.gle/...\` or \`https://docs.google.com/forms/d/e/.../viewform\`).
2. Keep \`VITE_APPLICATIONS_OPEN=false\` while you verify eligibility, under-18 guardian permission, data privacy/retention, form permissions and partner access terms.
3. When ready, set \`VITE_APPLICATIONS_OPEN=true\`, redeploy, and check that the form opens correctly on mobile and desktop and is accepting responses.

**Security:** Vite \`VITE_*\` values are embedded in the client bundle. Never put API keys, personal information or access tokens in them. The website only redirects; Google Forms handles any responses. The form owner must control its response data.

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
- [ ] Confirm IT Experience's public name, branding permission, sponsored Google certificate seats, eligibility, access duration and under-18 platform requirements
- [ ] Confirm facilitators, mentor availability and cohort delivery dates
- [ ] Approve under-18 safeguarding and data privacy/retention policy
- [ ] Create, privacy-review and test the Google Form including parent/guardian workflow; only then enable the form link
- [ ] Verify CI passes: typecheck and production build
- [ ] Manually test mobile navigation, forms, reduced-motion accessibility and direct-route refresh
- [ ] Review real-device photography, content accuracy and deployment URL
