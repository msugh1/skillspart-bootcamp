import { ArrowUpRight, CalendarClock, ShieldCheck } from "lucide-react";
import { Link } from "react-router";
import PageHero from "../components/ui/PageHero";
import { SITE_CONFIG } from "../config/site";

export default function ApplyPage() {
  const open = SITE_CONFIG.applicationsOpen;
  return (
    <>
      <PageHero eyebrow="Applications" title="Take the first step.">
        SkillSpark is preparing a free, 6–8 week online intensive for Nigerian students from underserved communities.
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-spark-dark">First intake · Cybersecurity only</p>
          <h2 className="text-3xl font-bold text-navy">Learn skills that create possibilities.</h2>
          <p className="mt-4 leading-relaxed text-muted">
            SkillSpark welcomes eligible learners aged 16 and above, including secondary-school and university students from underserved communities in Nigeria.
            You'll need basic internet access and a smartphone or laptop. Exact cohort dates and available places will be announced.
          </p>
          <div className="mt-8 rounded-2xl border border-line bg-mist p-6">
            <h3 className="flex items-center gap-2 font-bold text-navy"><ShieldCheck size={20} aria-hidden /> A safe, free application</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              There is no tuition fee or application payment. Applications are intended for learners aged 16 and above.
              Never provide passwords, payment details or identity documents in an application.
            </p>
          </div>
          <p className="mt-6 text-sm text-muted">
            Questions? Contact <a className="font-semibold text-navy underline decoration-spark underline-offset-4" href={"mailto:" + SITE_CONFIG.contactEmail}>{SITE_CONFIG.contactEmail}</a>.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-white p-7 shadow-sm sm:p-10">
          {open ? (
            <div>
              <span className="inline-block rounded-full bg-mist px-4 py-2 text-xs font-bold text-navy">Applications open</span>
              <h2 className="mt-5 text-2xl font-bold">Apply for Cybersecurity</h2>
              <p className="mt-3 leading-relaxed text-muted">
                Applications are handled through SkillSpark's Google Form. The form will open in a new tab,
                and your information will be submitted through Google Forms, not this website.
              </p>
              <a href={SITE_CONFIG.googleFormUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-spark px-7 py-3 font-bold text-navy transition-colors hover:bg-navy hover:text-white">
                Open official application form <ArrowUpRight size={18} aria-hidden />
                <span className="sr-only">(opens Google Forms in a new tab)</span>
              </a>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                An application does not guarantee admission or automatic certification. Read the <Link to="/privacy" className="font-semibold underline decoration-spark">privacy information</Link> before submitting.
              </p>
            </div>
          ) : (
            <div role="status">
              <CalendarClock size={32} className="text-spark-dark" aria-hidden />
              <span className="mt-5 inline-block rounded-full bg-mist px-4 py-2 text-xs font-bold text-navy">Applications not yet open</span>
              <h2 className="mt-5 text-2xl font-bold">Registration is coming soon.</h2>
              <p className="mt-3 leading-relaxed text-muted">
                We are finalising the first intake. Once enrollment opens, this page will link directly to the official SkillSpark Google application form.
              </p>
              <p className="mt-4 text-sm text-muted">
                No applicant information is collected on this page. IT Support and IT Automation are planned future tracks, not part of this intake.
              </p>
              <Link to="/programmes/cybersecurity" className="mt-7 inline-flex min-h-11 items-center border-b-2 border-spark font-bold text-navy hover:text-spark-dark">
                Explore the Cybersecurity programme
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
