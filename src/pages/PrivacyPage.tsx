import type { ReactNode } from "react";
import { ArrowUpRight, Mail, ShieldCheck } from "lucide-react";
import { Link } from "react-router";
import PageHero from "../components/ui/PageHero";
import { SITE_CONFIG } from "../config/site";

function PolicySection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line pt-9 sm:pt-11">
      <h2 className="text-xl font-extrabold text-navy sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-[0.98rem] leading-7 text-ink sm:text-base">{children}</div>
    </section>
  );
}

const bulletList = "list-disc space-y-2 pl-5 marker:text-spark-dark";
const textLink = "font-semibold text-navy underline decoration-spark underline-offset-4 transition-colors hover:text-spark-dark";

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy notice" title="Your information. Handled with care.">
        Here's what happens to the details you share when you contact SkillSpark,
        apply for the bootcamp or take part in our learning community.
      </PageHero>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { title: "Purposeful collection", body: "We ask for information that helps us review applications and support learners." },
            { title: "Your story, your choice", body: "Testimonials, photographs and publicity require a separate decision from you." },
            { title: "Questions are welcome", body: "You can contact us about access, corrections, deletion or privacy concerns." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-white p-6">
              <ShieldCheck size={22} className="mb-4 text-spark-dark" aria-hidden="true" />
              <h2 className="text-lg font-bold text-navy">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
          <div className="min-w-0">
            <p className="text-sm text-muted">Last updated: 18 October 2026</p>
            <p className="mt-4 leading-7 text-ink">
              SkillSpark Bootcamp is a free digital-skills education initiative based in Nigeria.
              This notice explains how we handle personal information associated with our website,
              Cybersecurity Bootcamp applications and related programme communication.
              SkillSpark is responsible for how it uses the information applicants provide.
            </p>

            <PolicySection id="information" title="1. Information we may collect">
              <p>What we receive depends on how you interact with SkillSpark:</p>
              <ul className={bulletList}>
                <li><strong>Applications:</strong> your name, email, age or age range, state of residence, education or work status, and your responses about cybersecurity interests, motivation and past commitments.</li>
                <li><strong>Learning readiness:</strong> information you choose to share about devices, internet access, available study time and attendance at weekly live sessions.</li>
                <li><strong>Messages:</strong> your email address and the contents of enquiries you send to SkillSpark.</li>
                <li><strong>Programme participation:</strong> if admitted, information needed to communicate with you and coordinate coursework, live sessions and community access.</li>
                <li><strong>Optional choices:</strong> whether you'd be open to a testimonial later or wish to follow our LinkedIn page. Neither affects admission.</li>
              </ul>
              <p>
                We do not ask applicants for passwords, payment information, national ID numbers,
                full birth dates or exact home addresses. Please avoid including unnecessary sensitive
                information in free-text answers or messages.
              </p>
            </PolicySection>

            <PolicySection id="purposes" title="2. Why we use your information">
              <ul className={bulletList}>
                <li>Check eligibility and fairly review applications, including motivation and readiness for the six-week course.</li>
                <li>Contact applicants about decisions, next steps, schedules and access instructions.</li>
                <li>Organise Coursera-based coursework, weekly live learning sessions and appropriate learner support.</li>
                <li>Respond to questions, address concerns and help keep the programme safe and well run.</li>
                <li>Meet applicable legal obligations and handle privacy requests.</li>
              </ul>
              <p>
                We use information only for purposes connected with your application, requested
                programme participation or another appropriate lawful basis. Where separate consent
                is required—for example, publishing a personal testimonial—we will ask first.
              </p>
            </PolicySection>

            <PolicySection id="platforms" title="3. Platforms and external services">
              <p>
                The SkillSpark website is hosted on Vercel. Application forms are provided through
                Google Forms: the website links you to the form, but the website itself does not
                store form responses. SkillSpark email is handled through Zoho Mail.
              </p>
              <p>
                For accepted learners, the programme uses Google's Cybersecurity Professional
                Certificate courses on Coursera and may use Google Meet, Google Classroom and
                WhatsApp to run sessions and communicate. Details needed for access to these
                services may be handled by the relevant providers under their own privacy terms.
                These services may process information outside Nigeria.
              </p>
              <p>
                Some website images and fonts may be provided by external services such as
                Unsplash and Google Fonts. Website infrastructure providers may receive limited
                technical information, such as browser details, IP address and request logs,
                when you visit a page.
              </p>
              <p>
                You can review the privacy information for{" "}
                <a className={textLink} href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google <ArrowUpRight size={13} className="inline" aria-hidden /></a>,{" "}
                <a className={textLink} href="https://www.coursera.org/about/privacy" target="_blank" rel="noopener noreferrer">Coursera <ArrowUpRight size={13} className="inline" aria-hidden /></a>,{" "}
                <a className={textLink} href="https://www.zoho.com/privacy.html" target="_blank" rel="noopener noreferrer">Zoho <ArrowUpRight size={13} className="inline" aria-hidden /></a> and{" "}
                <a className={textLink} href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">Vercel <ArrowUpRight size={13} className="inline" aria-hidden /></a>.
              </p>
            </PolicySection>

            <PolicySection id="sharing" title="4. Who can access your application">
              <p>
                Application responses are intended for the people authorised to review applications
                and organise SkillSpark's bootcamp, not for public viewing. We may share the limited
                details needed with service providers to deliver the learning experience, or disclose
                information where legally required.
              </p>
              <p>
                We do not publish applicants' personal answers or share individual application
                responses on our LinkedIn page. Online services carry security risks, so we work
                to limit access and unnecessary collection rather than promise that any system
                is completely risk-free.
              </p>
            </PolicySection>

            <PolicySection id="young-learners" title="5. Applicants aged 16–17">
              <p>
                SkillSpark is intended for learners aged 16 and above. Applicants who are 16 or 17
                require additional care because they are under 18. Where applicable law requires
                permission from a parent or legal guardian to process their information, SkillSpark
                must obtain and appropriately verify that permission before relying on consent.
                Extra safeguards also apply to participation and publicity involving minors.
              </p>
              <p>
                If you're under 18 and have questions about providing your information,
                please contact us before applying. Applicants younger than 16 are not eligible
                for this cohort.
              </p>
            </PolicySection>

            <PolicySection id="testimonials" title="6. Testimonials, photos and publicity">
              <p>
                We may invite learners to tell us what they gained from SkillSpark after the
                programme. Expressing interest in a future testimonial on an application is
                <strong> optional</strong> and has no bearing on admission.
              </p>
              <p>
                Before publishing a quote, name, photograph, recording or video, we will request
                separate, specific permission and explain where it may appear. You may say no.
                We will apply additional safeguards for anyone under 18. Following SkillSpark
                on LinkedIn is also optional and is not used to select applicants.
              </p>
            </PolicySection>

            <PolicySection id="retention" title="7. How long we keep information">
              <p>
                Application and learner records should be kept only for as long as reasonably
                needed to review applications, administer the cohort, resolve follow-up requests
                and meet applicable legal obligations. We will review records that are no longer
                needed for deletion or anonymisation.
              </p>
              <p>
                A fixed retention timetable has not yet been published. If you'd like to know
                how long a particular record may be held, or want to request its deletion,
                please email us using the address below.
              </p>
            </PolicySection>

            <PolicySection id="rights" title="8. Your choices and privacy rights">
              <p>
                Subject to applicable law, you may ask what information we hold about you,
                request a copy, ask for corrections or deletion, object to or request restrictions
                on certain uses, or withdraw consent where processing relies on it.
                You can also raise a complaint with Nigeria's data protection regulator.
              </p>
              <p>
                Send privacy requests to{" "}
                <a className={textLink} href={`mailto:${SITE_CONFIG.contactEmail}?subject=SkillSpark%20Privacy%20Request`}>
                  {SITE_CONFIG.contactEmail}
                </a>.
                We may need to verify that a request comes from the right person before making
                changes. You may also learn about rights and complaints from the{" "}
                <a className={textLink} href="https://ndpc.gov.ng/" target="_blank" rel="noopener noreferrer">
                  Nigeria Data Protection Commission <ArrowUpRight size={13} className="inline" aria-hidden />
                </a>.
              </p>
            </PolicySection>

            <PolicySection id="updates" title="9. Changes to this notice">
              <p>
                We may update this notice if our application process, learning tools or legal
                requirements change. The updated version and its date will be posted on this page.
                Material changes affecting applicants or learners should be communicated through
                an appropriate programme channel.
              </p>
            </PolicySection>

            <div className="mt-12 rounded-2xl border border-line bg-mist p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <Mail size={24} className="mt-1 shrink-0 text-spark-dark" aria-hidden="true" />
                <div>
                  <h2 className="text-xl font-bold text-navy">Questions about your data?</h2>
                  <p className="mt-2 leading-7 text-ink">
                    Contact SkillSpark to ask a privacy question, request a correction
                    or discuss information you've shared.
                  </p>
                  <a href={`mailto:${SITE_CONFIG.contactEmail}?subject=SkillSpark%20Privacy%20Enquiry`} className="mt-4 inline-flex min-h-11 items-center gap-2 break-all font-bold text-navy underline decoration-spark underline-offset-4 hover:text-spark-dark">
                    {SITE_CONFIG.contactEmail} <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                  <p className="mt-3 text-sm text-muted">
                    Or visit our <Link reloadDocument to="/contact" className={textLink}>Contact page</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="hidden lg:block lg:sticky lg:top-28">
            <nav aria-label="Privacy notice contents" className="rounded-2xl border border-line bg-white p-5">
              <h2 className="text-sm font-bold uppercase tracking-widest text-navy">On this page</h2>
              <ol className="mt-4 space-y-3 text-sm">
                {[
                  ["information", "Information we collect"],
                  ["purposes", "Why we use it"],
                  ["platforms", "External services"],
                  ["sharing", "Access and sharing"],
                  ["young-learners", "Learners aged 16–17"],
                  ["testimonials", "Testimonials and photos"],
                  ["retention", "How long we keep it"],
                  ["rights", "Your privacy rights"],
                  ["updates", "Changes to this notice"],
                ].map(([id, label]) => (
                  <li key={id}>
                    <a className="text-muted transition-colors hover:text-spark-dark" href={`#${id}`}>{label}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
        </div>
      </div>
    </>
  );
}
