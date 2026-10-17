import { Compass, Eye, GraduationCap, HeartHandshake, Lightbulb, Target, Users, Wrench, Briefcase, Sparkles } from "lucide-react";
import ButtonLink from "../components/ui/ButtonLink";
import CallToAction from "../components/ui/CallToAction";
import FeatureCard from "../components/ui/FeatureCard";
import PageHero from "../components/ui/PageHero";
import PhotoFrame from "../components/ui/PhotoFrame";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";

const values = [
  { icon: Wrench, title: "Practical learning", body: "We focus on building useful skills through structured, practical training." },
  { icon: HeartHandshake, title: "Inclusion", body: "No gatekeeping. Beginners are the audience, not an afterthought." },
  { icon: Lightbulb, title: "Curiosity", body: "Good questions matter more than quick answers." },
  { icon: Users, title: "Community", body: "We seek to build a supportive peer community and mentorship opportunities." },
  { icon: Briefcase, title: "Career readiness", body: "We aim to connect learning with meaningful career pathways." },
];

const audience = [
  { icon: GraduationCap, title: "Students", body: "Add practical skills to what you study." },
  { icon: Sparkles, title: "Recent graduates", body: "Build proof of skill alongside your degree." },
  { icon: Compass, title: "Career explorers", body: "Try tech without committing to a long course." },
  { icon: Target, title: "Motivated beginners", body: "Start from zero with structure and support." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About SkillSpark" title="Opening the door to practical tech skills.">
        SkillSpark is a free online technology bootcamp and Millennium Fellowship 2026 project aligned with SDG 4: Quality Education. It starts with Cybersecurity and plans additional IT Support and IT Automation tracks.
      </PageHero>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
        <Reveal>
          <SectionHeading eyebrow="Why we exist" title="Closing the skills gap, one learner at a time">
            Students from underserved communities across Nigeria may face barriers to structured technology training, resources and mentorship.
          </SectionHeading>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Founded by Msugh F. Demkiir (Felix), a Millennium Fellow and cybersecurity student at NUTM Lagos, SkillSpark aims to make industry-relevant learning more accessible.
          </p>
        </Reveal>
        <Reveal delay={0.1}><PhotoFrame name="lab" w={900} h={700} /></Reveal>
      </section>

      <section className="border-t border-line px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <FeatureCard icon={Target} title="Our mission">
            To close the digital-skills gap through free, practical training, access to learning resources and a supportive peer community.
          </FeatureCard>
          <FeatureCard icon={Eye} title="Our vision">
            A Nigeria where young people from underserved communities can develop verifiable skills and pursue meaningful technology opportunities.
          </FeatureCard>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading eyebrow="Our values" title="What guides everything we teach" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => <FeatureCard key={v.title} icon={v.icon} title={v.title}>{v.body}</FeatureCard>)}
        </div>
      </section>

      <section className="bg-mist px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Who it is for" title="Built for people starting out" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audience.map((v) => <FeatureCard key={v.title} icon={v.icon} title={v.title}>{v.body}</FeatureCard>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-mist">
          <div className="grid items-center lg:grid-cols-2">
            <div className="p-8 sm:p-14">
              <SectionHeading eyebrow="Built for possibility" title="Every learner deserves a spark.">
                Explore the programmes and find the right place to begin.
              </SectionHeading>
              <div className="mt-8"><ButtonLink to="/programmes" variant="navy">See programmes</ButtonLink></div>
            </div>
            <PhotoFrame name="classroom" w={900} h={640} className="!rounded-none" />
          </div>
        </div>
      </section>

      <CallToAction title="Start your SkillSpark journey" showProgramme={false} />
    </>
  );
}
