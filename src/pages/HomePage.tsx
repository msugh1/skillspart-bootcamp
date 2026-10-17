import { BookOpenCheck, Compass, GraduationCap, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import ApplyButton from "../components/ui/ApplyButton";
import ButtonLink from "../components/ui/ButtonLink";
import CallToAction from "../components/ui/CallToAction";
import PhotoFrame from "../components/ui/PhotoFrame";
import ProgrammeCard from "../components/ui/ProgrammeCard";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { CYBER, PROGRAMMES } from "../data/programmes";
const principles = [
  { Icon: GraduationCap, title: "No tuition fees", body: "The programme is designed to be free for selected learners." },
  { Icon: BookOpenCheck, title: "Relevant skills", body: "Foundational training in cybersecurity and wider IT pathways." },
  { Icon: HeartHandshake, title: "Community", body: "Peer collaboration, accountability and ongoing encouragement." },
];
const steps = [
  { title: "Explore", body: "Find a learning pathway and review its requirements." },
  { title: "Apply", body: "Submit an application when the next intake opens." },
  { title: "Learn", body: "Follow structured modules and practical online activities." },
  { title: "Grow", body: "Use new skills and pursue relevant credentials and opportunities." },
];
export default function HomePage() {
  return (
    <>
      <div className="border-b border-line bg-mist px-5 py-3 text-center text-xs font-bold text-navy sm:text-sm">Free digital-skills bootcamp · Inaugural Cybersecurity intake in preparation</div>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-spark-dark"><span className="h-0.5 w-7 bg-spark" />SkillSpark Bootcamp</p>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] text-navy sm:text-5xl lg:text-6xl">Ignite your potential. <span className="text-spark-dark">Build skills for tomorrow.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">A free, 6–8 week online technology intensive for learners aged 16 and above, focused on practical skills and opportunities for underserved Nigerian communities.</p>
            <div className="mt-9 flex flex-wrap gap-3"><ButtonLink to="/programmes/cybersecurity">Explore Cybersecurity</ButtonLink><ApplyButton /></div>
            <p className="mt-7 text-sm text-muted">A Millennium Fellowship 2026 project aligned with SDG 4: Quality Education.</p>
          </div>
          <PhotoFrame name="hero" w={960} h={800} eager />
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Why SkillSpark" title="Access should spark opportunity.">
            Technology opportunities should not depend on the resources available where you grew up. SkillSpark connects practical learning, structured guidance and peer support.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{principles.map(({ Icon, title, body }) => <div key={title} className="rounded-2xl border border-line bg-white p-7"><span className="mb-5 grid size-11 place-items-center rounded-xl bg-mist text-spark-dark"><Icon aria-hidden size={22} /></span><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 leading-relaxed text-muted">{body}</p></div>)}</div>
        </div>
      </section>
      <section className="bg-mist px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our first track" title="Start with Cybersecurity">
            The inaugural learning focus introduces core digital safety, security awareness and practical cybersecurity foundations.
          </SectionHeading>
          <Reveal className="mt-10"><ProgrammeCard p={CYBER} featured /></Reveal>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal><PhotoFrame name="lab" w={900} h={750} /></Reveal>
          <div>
            <SectionHeading eyebrow="How it works" title="A connected learning experience">
              Google Classroom is planned for weekly modules, Google Meet for practical sessions and WhatsApp for daily learning community communication.
            </SectionHeading>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">{[
              { icon: ShieldCheck, label: "Practical modules" },{ icon: Users, label: "Peer collaboration" },{ icon: Compass, label: "Weekly expert sessions" },{ icon: HeartHandshake, label: "Follow-up mentorship" }
            ].map(({ icon: Icon, label }) => <div key={label} className="flex items-center gap-3 rounded-xl border border-line p-4 font-semibold text-navy"><Icon size={19} className="text-spark-dark" aria-hidden />{label}</div>)}</div>
            <p className="mt-4 text-sm text-muted">Expert sessions and follow-up mentorship are programme goals, subject to facilitator availability.</p>
          </div>
        </div>
      </section>
      <section className="border-t border-line bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Certificate pathway" title="Learn cybersecurity with Google on Coursera">
              Eligible SkillSpark learners will have the opportunity to access the Google Cybersecurity Professional Certificate courses on Coursera.
            </SectionHeading>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted">The full Coursera certificate programme is separate from SkillSpark's 6–8 week intensive. Earning Google's official credential requires completing all course requirements and may take longer than the bootcamp.</p>
            <a href="https://www.coursera.org/professional-certificates/google-cybersecurity" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center border-b-2 border-spark font-bold text-navy hover:text-spark-dark">Explore the certificate course <span className="sr-only">(opens Coursera in a new tab)</span></a>
          </div>
          <div className="rounded-2xl border border-line bg-mist p-8">
            <h3 className="text-xl font-bold">A practical learning pathway</h3>
            <ul className="mt-5 space-y-3 text-ink">
              <li>• Beginner-focused cybersecurity foundations</li>
              <li>• A structured online learning community</li>
              <li>• Coursera course access for eligible learners</li>
              <li>• An opportunity to earn a recognised Google credential</li>
            </ul>
            <p className="mt-5 text-sm text-muted">Enrolling in SkillSpark does not automatically award the Google certificate.</p>
          </div>
        </div>
      </section>
      <section className="border-t border-line px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="The learning journey" title="From interest to practical skills" />
          <ol className="mt-12 grid gap-8 md:grid-cols-4">{steps.map((step, i) => <li key={step.title} className="border-t-2 border-spark pt-5"><span className="text-xs font-bold text-spark-dark">0{i + 1}</span><h3 className="mt-3 text-lg font-bold">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p></li>)}</ol>
        </div>
      </section>
      <section className="bg-mist px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="More pathways" title="One spark. More directions.">Cybersecurity comes first. IT Support and IT Automation are included in our wider programme plan, with intake dates still to be confirmed.</SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2">{PROGRAMMES.filter(p => p.status === "coming-next").map(p => <ProgrammeCard key={p.slug} p={p} />)}</div>
        </div>
      </section>
      <CallToAction title="Your next chapter starts with a spark." body="Explore the bootcamp and check when applications open." />
    </>
  );
}
