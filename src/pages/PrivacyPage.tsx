import { Link } from "react-router";
import PageHero from "../components/ui/PageHero";
import { SITE_CONFIG } from "../config/site";

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="How applications will work.">
        SkillSpark is preparing applications for learners aged 16 and above. Applications are currently closed.
      </PageHero>
      <section className="mx-auto max-w-3xl space-y-8 px-5 py-16 leading-relaxed text-ink sm:px-8">
        <section><h2 className="text-xl font-bold">Applications and information</h2><p className="mt-2">When intake opens, this site will link to an official Google Form. This website itself does not receive or store application responses. The form will ask only for information needed to review applications and contact applicants.</p></section>
        <section><h2 className="text-xl font-bold">Google Forms</h2><p className="mt-2">Responses are processed using Google's services and accessed by authorised SkillSpark reviewers. The final application form will explain the data collected, its purpose, who has access, retention periods and how applicants can request corrections or deletion.</p></section>
        <section><h2 className="text-xl font-bold">Age eligibility</h2><p className="mt-2">SkillSpark plans to accept learners aged 16 or older. Because 16–17-year-old applicants are still minors, applicable data-protection obligations and appropriate safeguards will be reviewed before personal information is collected.</p></section>
        <section><h2 className="text-xl font-bold">Learning access and certification</h2><p className="mt-2">SkillSpark plans to offer eligible learners access to the Google Cybersecurity Professional Certificate courses on Coursera. Eligibility and access details will be shared with accepted participants. The official Google certificate is awarded for successful completion of the full Coursera programme, not simply for joining SkillSpark.</p></section>
        <section><h2 className="text-xl font-bold">Contact</h2><p className="mt-2">For questions about privacy or personal information, email <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="font-semibold underline decoration-spark">{SITE_CONFIG.contactEmail}</a>, or visit the <Link reloadDocument to="/contact" className="font-semibold underline decoration-spark">Contact page</Link> for other official channels. Applications remain closed while the privacy and response arrangements are finalised.</p></section>
        <p className="border-t border-line pt-6 text-sm text-muted">Pre-launch notice. The final privacy policy, data retention and safeguarding arrangements must be reviewed before registration opens.</p>
      </section>
    </>
  );
}
