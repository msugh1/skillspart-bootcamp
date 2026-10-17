import { ArrowUpRight, Globe, Mail } from "lucide-react";
import Accordion from "../components/ui/Accordion";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { SITE_CONFIG } from "../config/site";
import { GENERAL_FAQS } from "../data/faqs";

export default function ContactPage() {
  const companyLinkedIn = SITE_CONFIG.socials.find((social) => social.label === "SkillSpark on LinkedIn");
  return (
    <>
      <PageHero eyebrow="Contact" title="Stay connected with SkillSpark.">
        Follow our official company page for bootcamp announcements, programme information, and upcoming opportunities.
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
          <h2 className="text-2xl font-bold text-navy">Company email coming soon</h2>
          <p className="mt-3 max-w-lg leading-relaxed text-muted">
            We're setting up an official SkillSpark email address for applications, enquiries and partnerships.
            We'll publish it here as soon as it's ready.
          </p>
          <p className="mt-6 text-sm text-muted">
            Applications are not yet open. The official Cybersecurity application form will be linked from the Apply page when registration begins.
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
