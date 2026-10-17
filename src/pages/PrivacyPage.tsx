import PageHero from "../components/ui/PageHero";
import { SITE_CONFIG } from "../config/site";
export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Applicant information.">
        This notice describes how the SkillSpark application form is designed to handle information. Please review before applying.
      </PageHero>
      <section className="mx-auto max-w-3xl space-y-7 px-5 py-16 leading-relaxed text-ink sm:px-8">
        <div><h2 className="text-xl font-bold">Information requested</h2><p className="mt-2">When enrollment opens, the form requests your name, email address, age group, available learning device, and optionally your school or community and motivation. Do not send passwords, identification documents or payment details.</p></div>
        <div><h2 className="text-xl font-bold">Purpose</h2><p className="mt-2">Application information is intended to be used for reviewing cohort eligibility and contacting applicants about their application. We do not accept applications while the form is disabled.</p></div>
        <div><h2 className="text-xl font-bold">Submission provider</h2><p className="mt-2">When enabled, the website sends form data to a separately configured Formspree endpoint. Before launch, SkillSpark must review that provider’s privacy and retention terms, determine who can access submissions and establish an appropriate retention and deletion policy.</p></div>
        <div><h2 className="text-xl font-bold">Younger applicants</h2><p className="mt-2">Applicants under 18 are asked to confirm parental or guardian approval. SkillSpark must review safeguarding and local privacy requirements before opening applications to minors.</p></div>
        <div><h2 className="text-xl font-bold">Contact</h2><p className="mt-2">For questions about applications or personal information, email <a className="font-semibold underline decoration-spark" href={"mailto:" + SITE_CONFIG.contactEmail}>{SITE_CONFIG.contactEmail}</a>.</p></div>
        <p className="border-t border-line pt-6 text-sm text-muted">This is a pre-launch notice. Final service-provider, retention and safeguarding details must be approved before collection begins.</p>
      </section>
    </>
  );
}
