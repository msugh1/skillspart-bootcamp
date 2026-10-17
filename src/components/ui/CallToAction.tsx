import ApplyButton from "./ApplyButton";
import ButtonLink from "./ButtonLink";

export default function CallToAction({ title = "Ready to spark something?", body = "Take the first step into practical tech skills with a programme built for beginners.", showProgramme = true }: { title?: string; body?: string; showProgramme?: boolean }) {
  return (
    <section className="bg-spark px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-navy/85">{body}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ApplyButton onBlue />
          {showProgramme && <ButtonLink to="/programmes/cybersecurity" variant="secondary">Explore Cybersecurity</ButtonLink>}
        </div>
      </div>
    </section>
  );
}
