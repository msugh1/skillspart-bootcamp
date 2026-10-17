import { Clock, Cpu, KeyRound, Laptop, LifeBuoy, Network, Route, ShieldAlert, ShieldCheck, Signal, Wifi, BookOpen, Users, FlaskConical, MessageSquare, FolderGit2 } from "lucide-react";
import Accordion from "../components/ui/Accordion";
import ApplyButton from "../components/ui/ApplyButton";
import CallToAction from "../components/ui/CallToAction";
import FeatureCard from "../components/ui/FeatureCard";
import PhotoFrame from "../components/ui/PhotoFrame";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { CURRICULUM, CYBER } from "../data/programmes";
import { CYBER_FAQS } from "../data/faqs";

const learn = [
  { icon: ShieldCheck, title: "Security foundations", body: "The core ideas behind keeping information safe." },
  { icon: ShieldAlert, title: "Threats and vulnerabilities", body: "How attacks work and where weaknesses appear." },
  { icon: Network, title: "Networks and systems", body: "How devices connect, and how that can be secured." },
  { icon: KeyRound, title: "Identity and access", body: "Who gets in, and how we prove it." },
  { icon: Cpu, title: "Safe practices", body: "Everyday habits that reduce risk." },
  { icon: LifeBuoy, title: "Incident response", body: "A calm, ordered approach when things go wrong." },
  { icon: Route, title: "Career pathways", body: "The roles in security and how people move into them." },
];

const format = [
  { icon: Users, title: "Live instruction" },
  { icon: FlaskConical, title: "Guided labs" },
  { icon: MessageSquare, title: "Mentor feedback" },
  { icon: Users, title: "Peer learning" },
  { icon: FolderGit2, title: "Portfolio work" },
];

export default function CybersecurityPage() {
  const facts = [
    { Icon: Clock, v: CYBER.duration },
    { Icon: Laptop, v: CYBER.format },
    { Icon: Signal, v: CYBER.level },
  ];
  return (
    <>
      <section className="border-b border-navy/10 bg-spark">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="rounded-full bg-navy px-3 py-1 text-xs font-bold text-white">Inaugural programme</span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">Cybersecurity Bootcamp</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy/85">{CYBER.summary}</p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-semibold text-navy">
              {facts.map(({ Icon, v }) => <li key={v} className="flex items-center gap-2"><Icon size={18} className="text-navy" aria-hidden />{v}</li>)}
            </ul>
            <div className="mt-8"><ApplyButton onBlue /></div>
            <p className="mt-4 text-sm text-navy/80">No prior security experience required.</p>
          </div>
          <PhotoFrame name="cyber" w={900} h={760} eager />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading eyebrow="What you will learn" title="Seven areas, one clear path" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learn.map((l) => <FeatureCard key={l.title} icon={l.icon} title={l.title}>{l.body}</FeatureCard>)}
        </div>
      </section>

      <section className="bg-mist px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Curriculum" title="Your eight weeks" />
          <ol className="mt-10 space-y-4 border-l-2 border-spark/40 pl-6">
            {CURRICULUM.map((c) => (
              <li key={c.week} className="relative">
                <span className="absolute -left-[34px] top-5 size-4 rounded-full border-4 border-mist bg-spark" aria-hidden />
                <Reveal>
                  <div className="rounded-2xl border border-line bg-white p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-spark-dark">Week {c.week}</p>
                    <h3 className="mt-1 text-lg font-bold">{c.title}</h3>
                    <p className="mt-1 text-muted">{c.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading eyebrow="Learning format" title="How the programme runs" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {format.map((f) => (
            <li key={f.title} className="flex items-center gap-3 rounded-2xl border border-line p-5 font-bold text-navy">
              <f.icon size={20} className="text-spark-dark" aria-hidden />{f.title}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-mist px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Outcomes" title="What you will be able to do" />
            <ul className="mt-8 space-y-4">
              {CYBER.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-ink"><ShieldCheck size={20} className="mt-0.5 shrink-0 text-spark-dark" aria-hidden />{o}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-white p-7">
            <h3 className="text-xl font-bold">What you need</h3>
            <ul className="mt-4 space-y-3 text-ink">
              {[[Laptop, "A computer you can use each week"], [Wifi, "A stable internet connection"], [BookOpen, "Curiosity and a weekly study commitment"]].map(([I, t]) => {
                const Icon = I as typeof Laptop;
                return <li key={t as string} className="flex gap-3"><Icon size={20} className="shrink-0 text-spark-dark" aria-hidden />{t as string}</li>;
              })}
            </ul>
            <p className="mt-5 text-sm text-muted">Outcomes depend on your effort. We do not guarantee employment.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading eyebrow="FAQ" title="Questions about the programme" />
        <div className="mt-8"><Accordion items={CYBER_FAQS} /></div>
      </section>

      <CallToAction title="Apply for the Cybersecurity cohort" showProgramme={false} />
    </>
  );
}
