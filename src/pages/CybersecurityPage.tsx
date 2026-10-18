import { BookOpen, ChevronDown, Cpu, KeyRound, Laptop, Network, ShieldAlert, ShieldCheck, Users, Wifi } from "lucide-react";
import { useState } from "react";
import Accordion from "../components/ui/Accordion";
import ApplyButton from "../components/ui/ApplyButton";
import CallToAction from "../components/ui/CallToAction";
import FeatureCard from "../components/ui/FeatureCard";
import PhotoFrame from "../components/ui/PhotoFrame";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { CURRICULUM, CYBER } from "../data/programmes";
import { CYBER_FAQS } from "../data/faqs";
const topics = [
  { icon: ShieldCheck, title: "Security foundations", body: "Understand why and how we protect digital systems." },
  { icon: ShieldAlert, title: "Cyber threats", body: "Identify common attacks and warning signs." },
  { icon: Network, title: "Networking basics", body: "Explore how computers connect and communicate." },
  { icon: KeyRound, title: "Identity and access", body: "Learn safer password, authentication and access habits." },
  { icon: Cpu, title: "Safe practices", body: "Build practical digital-security habits." },
  { icon: BookOpen, title: "Further pathways", body: "Discover certificates and next steps, where available." },
];
export default function CybersecurityPage() {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-block rounded-full bg-mist px-4 py-2 text-xs font-bold text-navy">Inaugural track · Free</span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">Cybersecurity Bootcamp</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{CYBER.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-navy">
              {[CYBER.duration, CYBER.format, CYBER.level].map(label => <span key={label} className="rounded-full border border-line px-4 py-2">{label}</span>)}
            </div>
            <div className="mt-8"><ApplyButton /></div>
            <p className="mt-4 text-sm text-muted">The six-week SkillSpark cohort combines independent Coursera coursework with one live learning session each week. Exact dates and access instructions will be shared with selected learners.</p>
          </div>
          <PhotoFrame name="cyber" w={900} h={740} eager />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <p className="mb-6 text-sm font-semibold text-spark-dark">For learners aged 16 and above</p>
        <SectionHeading eyebrow="The fundamentals" title="What you can expect to explore" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{topics.map(t => <FeatureCard key={t.title} icon={t.icon} title={t.title}>{t.body}</FeatureCard>)}</div>
      </section>
      <section className="bg-mist px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Six-week curriculum" title="Learn with Google on Coursera">Our suggested six-week learning plan follows the Google Cybersecurity Professional Certificate courses on Coursera. Each week includes independent coursework and a SkillSpark live learning session. This is SkillSpark’s pacing guide, not Coursera’s official timetable.</SectionHeading>
          <p className="mt-5 text-sm text-muted">Choose any week to explore its Coursera coursework and live session.</p>
          <ol className="mt-8 space-y-3">
            {CURRICULUM.map((topic) => {
              const isOpen = expandedWeek === topic.week;
              const detailsId = `curriculum-week-${topic.week}`;
              return (
                <li key={topic.week}>
                  <div className={`overflow-hidden rounded-2xl border bg-white transition-[border-color,box-shadow] duration-200 ${isOpen ? "border-spark shadow-md" : "border-line hover:border-spark/60"}`}>
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={detailsId}
                        onClick={() => setExpandedWeek(isOpen ? null : topic.week)}
                        className="group flex w-full items-center gap-4 px-5 py-5 text-left sm:gap-5 sm:px-6"
                      >
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-mist text-sm font-extrabold text-spark-dark">
                          {String(topic.week).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-xs font-bold uppercase tracking-wider text-spark-dark">Week {topic.week}</span>
                          <span className="mt-1 block text-base font-bold text-navy sm:text-lg">{topic.title}</span>
                        </span>
                        <ChevronDown
                          size={21}
                          aria-hidden="true"
                          className={`shrink-0 text-navy transition-transform duration-200 group-hover:text-spark-dark motion-reduce:transition-none ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </h3>
                    <div
                      id={detailsId}
                      role="region"
                      aria-label={`Week ${topic.week} details`}
                      aria-hidden={!isOpen}
                      className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="space-y-3 border-t border-line px-5 pb-6 pt-4 sm:px-6">
                          <p className="text-sm font-semibold text-navy">{topic.courses}</p>
                          <p className="leading-relaxed text-muted">{topic.body}</p>
                          <div className="rounded-xl bg-mist px-4 py-3 text-sm text-ink">
                            <strong className="text-navy">Weekly live session:</strong> {topic.live}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Learning together" title="Structured, supported and online">Coursera hosts the core Google Cybersecurity Professional Certificate lessons, exercises and assessments. Each week, SkillSpark will hold a live learning session on Google Meet to discuss the coursework and practise key skills. WhatsApp supports peer communication and questions.</SectionHeading>
          <p className="mt-5 text-sm text-muted">Learners work through Coursera at an intensive pace between sessions. Google Classroom may be used for coordination. Eligible learners will receive their course-access instructions before the cohort starts.</p>
        </div>
        <div className="rounded-2xl border border-line bg-white p-8">
          <h3 className="text-xl font-bold">Who should consider applying?</h3>
          <ul className="mt-6 space-y-4 text-ink">
            <li className="flex gap-3"><Users className="shrink-0 text-spark-dark" size={20} />Eligible learners aged 16 and above, including secondary-school and university students</li>
            <li className="flex gap-3"><Laptop className="shrink-0 text-spark-dark" size={20} />Motivated beginners with access to a smartphone or laptop</li>
            <li className="flex gap-3"><Wifi className="shrink-0 text-spark-dark" size={20} />Learners with basic internet access and time for the intensive</li>
          </ul>
        </div>
      </section>
      <section className="border-t border-line bg-white px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Certificate pathway" title="Our Coursera learning pathway">
            Coursera is the primary learning platform throughout the SkillSpark bootcamp. The weekly live sessions provide an additional layer of explanation, discussion and practical support.
          </SectionHeading>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-mist p-7"><h3 className="text-xl font-bold">SkillSpark intensive</h3><p className="mt-3 leading-relaxed text-muted">Six weeks of Coursera study, with weekly SkillSpark live sessions and a supportive learning community.</p></div>
            <div className="rounded-2xl border border-line bg-white p-7"><h3 className="text-xl font-bold">Google Professional Certificate</h3><p className="mt-3 leading-relaxed text-muted">The official Google credential is earned by completing Coursera's full course and assessment requirements, not by attending SkillSpark alone.</p></div>
          </div>
          <p className="mt-6 text-sm text-muted">This is an ambitious six-week schedule. Coursera typically allows months for the complete certificate, so some learners may need to continue after the SkillSpark cohort. Joining the bootcamp does not guarantee a Google certificate.</p>
          <a className="mt-4 inline-flex min-h-11 items-center font-bold text-navy underline decoration-spark underline-offset-4" href="https://www.coursera.org/professional-certificates/google-cybersecurity" target="_blank" rel="noopener noreferrer">View the official Coursera programme <span className="sr-only">(opens in a new tab)</span></a>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24"><SectionHeading eyebrow="FAQs" title="Questions about Cybersecurity" /><div className="mt-8"><Accordion items={CYBER_FAQS} /></div></section>
      <CallToAction title="Explore your next opportunity" body="Explore the six-week Coursera-based Cybersecurity Bootcamp and application details." showProgramme={false} />
    </>
  );
}
