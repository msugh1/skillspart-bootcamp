import { Compass, Flag, Layers } from "lucide-react";
import CallToAction from "../components/ui/CallToAction";
import FeatureCard from "../components/ui/FeatureCard";
import PageHero from "../components/ui/PageHero";
import ProgrammeCard from "../components/ui/ProgrammeCard";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { CYBER, PROGRAMMES } from "../data/programmes";

export default function ProgrammesPage() {
  return (
    <>
      <PageHero eyebrow="Programmes" title="Pick a pathway and start building.">
        One programme is almost ready to open, and more are being planned.
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading eyebrow="Available first" title="Cybersecurity" />
        <Reveal className="mt-10"><ProgrammeCard p={CYBER} featured /></Reveal>
      </section>

      <section className="bg-mist px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="More pathways" title="More pathways are coming">
            These programmes are in planning. No dates or enrolment yet.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {PROGRAMMES.filter((p) => p.status === "coming-next").map((p) => <ProgrammeCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading eyebrow="Choosing" title="How to choose a programme" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <FeatureCard icon={Compass} title="Follow your interest">Pick the field you are most curious about.</FeatureCard>
          <FeatureCard icon={Layers} title="Know your starting point">Every programme here welcomes beginners.</FeatureCard>
          <FeatureCard icon={Flag} title="Think about the outcome">Choose the project you would be proud to show.</FeatureCard>
        </div>
      </section>

      <CallToAction title="Begin with Cybersecurity" />
    </>
  );
}
