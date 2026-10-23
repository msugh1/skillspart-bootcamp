import { ArrowUpRight, Globe, Mail } from "lucide-react";
import Accordion from "../components/ui/Accordion";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { SITE_CONFIG } from "../config/site";
import { GENERAL_FAQS } from "../data/faqs";
import { Link } from "react-router";

export default function ContactPage() {
  const companyLinkedIn = SITE_CONFIG.socials.find((social) => social.label === "SkillSpark on LinkedIn");
  return (
    <>
      <PageHero eyebrow="Contact" title="Stay connected with SkillSpark.">
        Email us with questions about the bootcamp, volunteering and partnerships, or follow our official company page for updates.
      </PageHero>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
        <div className="rounded-2xl border border-line bg-mist p-7 sm:p-10">
          <span className="mb-6 grid size-12 place-items-center rounded-xl bg-spark text-navy">
            <Globe size={24} aria-hidden />
          </span>
          <h2 className="text-2xl font-bold text-navy">Our official LinkedIn page</h2>
          <p className="mt-3 max-w-lg leading-relaxed text-ink">
            Follow SkillSpark Bootcamp on LinkedIn for project news, cohort updates, and programme announcements.
          </p>
          {companyLinkedIn && (
            <a
              href={companyLinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-spark hover:text-navy"
            >
              Visit SkillSpark on LinkedIn <ArrowUpRight size={17} aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
        </div>
        <div className="rounded-2xl border border-line bg-white p-7 sm:p-10">
          <span className="mb-6 grid size-12 place-items-center rounded-xl bg-mist text-spark-dark">
            <Mail size={24} aria-hidden />
          </span>
          <h2 className="text-2xl font-bold text-navy">Email SkillSpark</h2>
          <p className="mt-3 max-w-lg leading-relaxed text-muted">Have a question about the bootcamp, applications, volunteering or partnerships? We'd be glad to hear from you.</p>
          <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="mt-7 inline-flex min-h-11 items-center gap-2 break-all font-bold text-navy underline decoration-spark underline-offset-4 hover:text-spark-dark">
            {SITE_CONFIG.contactEmail} <ArrowUpRight size={17} aria-hidden />
          </a>
          <p className="mt-6 text-sm text-muted">
            Applications are now open for the Cybersecurity intake. Visit our{" "}
            <Link reloadDocument to="/apply" className="font-semibold text-navy underline decoration-spark underline-offset-4">Apply page</Link>{" "}
            to complete the official application form.
          </p>
        </div>
      </section>
      <section className="border-t border-line px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Common questions" title="Quick answers" />
          <div className="mt-8"><Accordion items={GENERAL_FAQS} /></div>
        </div>
      </section>
    </>
  );
}
