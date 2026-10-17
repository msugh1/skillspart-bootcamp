import { BookOpenCheck, FlaskConical, Globe2, HeartHandshake, Users, Video } from "lucide-react";
import ApplyButton from "../components/ui/ApplyButton";
import ButtonLink from "../components/ui/ButtonLink";
import CallToAction from "../components/ui/CallToAction";
import PhotoFrame from "../components/ui/PhotoFrame";
import ProgrammeCard from "../components/ui/ProgrammeCard";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { CYBER, PROGRAMMES } from "../data/programmes";

const steps = [
  { t: "Learn the foundations", d: "Short live sessions that explain the why before the how." },
  { t: "Practise in guided labs", d: "Hands-on exercises with mentors close by." },
  { t: "Build a portfolio project", d: "Finish with something real you can show." },
  { t: "Prepare for next steps", d: "Career guidance and a clear learning path." },
];

const principles = [
  { Icon: Globe2, t: "Access", d: "Clear teaching and no assumed experience." },
  { Icon: FlaskConical, t: "Practical learning", d: "Every concept is practised, not just explained." },
  { Icon: HeartHandshake, t: "Confidence", d: "Mentors and peers who help you keep going." },
];

const support = [
  { Icon: Users, t: "Mentor support" },
  { Icon: HeartHandshake, t: "Peer community" },
  { Icon: Video, t: "Live sessions" },
  { Icon: BookOpenCheck, t: "Accessible resources" },
];

export default function HomePage() {
  return (
    <>
      <div className="bg-spark border-b border-navy/10 px-5 py-2.5 text-center text-sm font-semibold text-navy">
        <span className="mr-2 inline-block size-2 rounded-full bg-navy align-middle" aria-hidden />
        Applications for the inaugural Cybersecurity cohort are opening soon
      </div>

      <section className="border-b border-navy/10 bg-spark">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="lg:col-span-6">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-navy">
              <span className="h-0.5 w-6 bg-navy" aria-hidden />
              SkillSpark Bootcamp
            </p>
            <h1 className="text-4xl font-bold leading-[1.06] sm:text-5xl lg:text-[3.75rem]">
              Practical tech skills that light the way forward.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy/85">
              Mentor-led, beginner-friendly programmes where you learn by doing. Our first programme is Cybersecurity.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ApplyButton onBlue />
              <ButtonLink to="/programmes/cybersecurity" variant="secondary">Explore the programme</ButtonLink>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-2 text-sm font-semibold text-navy">
              {["Beginner friendly", "Practical labs", "Mentor led"].map((t) => (
                <li key={t} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-navy" aria-hidden />{t}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <PhotoFrame name="hero" w={960} h={800} eager />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal><PhotoFrame name="lab" w={900} h={760} /></Reveal>
          <Reveal delay={0.1}>
            <SectionHeading eyebrow="Our mission" title="Skills that move you forward">
              Technology opens doors, but too many people never get a clear, supportive way in. SkillSpark exists to change that.
            </SectionHeading>
            <ul className="mt-10 space-y-6">
              {principles.map(({ Icon, t, d }) => (
                <li key={t} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-mist text-spark-dark"><Icon size={18} aria-hidden /></span>
                  <div><h3 className="font-bold">{t}</h3><p className="text-muted">{d}</p></div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Featured programme" title="Start with Cybersecurity" />
          <Reveal className="mt-12"><ProgrammeCard p={CYBER} featured /></Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="How learning works" title="From first lesson to finished project" />
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t}>
                <Reveal delay={i * 0.06} className="h-full">
                  <div className="h-full border-t-2 border-navy pt-5">
                    <span className="text-sm font-bold text-spark-dark">0{i + 1}</span>
                    <h3 className="mt-3 text-lg font-bold">{s.t}</h3>
                    <p className="mt-2 text-muted">{s.d}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Learning experience" title="You will never learn alone">
              Support is built into every week of the programme.
            </SectionHeading>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {support.map(({ Icon, t }) => (
                <li key={t} className="flex items-center gap-3 rounded-xl border border-line p-4 font-semibold text-navy">
                  <Icon size={18} className="text-spark-dark" aria-hidden />{t}
                </li>
              ))}
            </ul>
          </div>
          <PhotoFrame name="learner" w={900} h={760} />
        </div>
      </section>

      <section className="bg-mist px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Future pathways" title="More programmes are on the way">
            Not open yet, but this is where SkillSpark is heading.
          </SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PROGRAMMES.filter((p) => p.status === "coming-next").map((p) => (
              <ProgrammeCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
