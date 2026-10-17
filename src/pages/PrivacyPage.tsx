import PageHero from "../components/ui/PageHero";
import { SITE_CONFIG } from "../config/site";

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="How applications will work.">
        SkillSpark is preparing its application process. Applications are currently closed.
        This page describes the planned use of Google Forms and what must be finalised before intake.
      </PageHero>
      <section className="mx-auto max-w-3xl space-y-8 px-5 py-16 leading-relaxed text-ink sm:px-8">
        <section>
          <h2 className="text-xl font-bold">Applications and information</h2>
          <p className="mt-2">When applications open, this site will direct prospective learners to an official Google Form. The website itself does not submit or store application responses. Only information necessary to assess eligibility and contact applicants should be requested in that form.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold">Google Forms</h2>
          <p className="mt-2">Application responses submitted through Google Forms will be processed using Google's services and made available to the authorised SkillSpark application team. Before opening, the final form must disclose what data is collected, why it is collected, who can access it, its retention period and how applicants can request corrections or deletion.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold">Applicants younger than 18</h2>
          <p className="mt-2">SkillSpark intends to accept eligible secondary-school students, including applicants under 18. The intake form must include appropriate parent or guardian permission and age-appropriate notices. The team must approve safeguarding procedures and review applicable privacy requirements before collecting information from minors.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold">Certificates and partner access</h2>
          <p className="mt-2">Google Cybersecurity Professional Certificate learning access is arranged through SkillSpark's reported partnership with IT Experience. Specific eligibility, available seats, access duration and completion requirements will be communicated to selected participants. Course completion and certificate issuance are subject to Google's and Coursera's rules.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold">Questions about your information</h2>
          <p className="mt-2">Email <a className="font-semibold underline decoration-spark" href={"mailto:" + SITE_CONFIG.contactEmail}>{SITE_CONFIG.contactEmail}</a> with application or privacy questions.</p>
        </section>
        <p className="border-t border-line pt-6 text-sm text-muted">Pre-launch information · The final applicant privacy notice, retention policy and safeguarding procedures must be approved before registration is activated.</p>
      </section>
    </>
  );
}
