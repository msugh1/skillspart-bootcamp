import { ArrowRight, Clock, Laptop, Signal } from "lucide-react";
import { Link } from "react-router";
import type { Programme } from "../../data/programmes";
import PhotoFrame from "./PhotoFrame";

export default function ProgrammeCard({ p, featured = false }: { p: Programme; featured?: boolean }) {
  if (!featured) {
    return (
      <div className="flex h-full flex-col rounded-xl border border-line bg-white p-6">
        <span className="w-fit rounded-full bg-mist px-3 py-1 text-xs font-bold text-navy">Coming next</span>
        <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
        <p className="mt-2 text-muted">{p.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {p.skills.map((s) => (
            <li key={s} className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted">{s}</li>
          ))}
        </ul>
        <p className="mt-auto pt-6 text-sm font-semibold text-muted">Dates to be announced</p>
      </div>
    );
  }
  const facts = [
    { Icon: Clock, v: p.duration },
    { Icon: Laptop, v: p.format },
    { Icon: Signal, v: p.level },
  ];
  return (
    <article className="grid overflow-hidden rounded-2xl border border-line bg-white lg:grid-cols-2">
      {p.image && <PhotoFrame name={p.image} w={900} h={760} className="!rounded-none lg:h-full" />}
      <div className="flex flex-col justify-center p-6 sm:p-10">
        <span className="w-fit rounded-full bg-spark px-3 py-1 text-xs font-bold text-navy">{p.eyebrow}</span>
        <h3 className="mt-4 text-3xl font-bold">{p.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-navy">
          {facts.map(({ Icon, v }) => (
            <li key={v} className="flex items-center gap-2"><Icon size={16} className="text-spark-dark" aria-hidden />{v}</li>
          ))}
        </ul>
        <ul className="mt-5 space-y-2 text-sm text-ink">
          {p.outcomes.slice(0, 3).map((o) => (
            <li key={o} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-spark" aria-hidden />{o}</li>
          ))}
        </ul>
        {p.href && (
          <Link to={p.href} className="mt-7 inline-flex min-h-11 w-fit items-center gap-2 border-b-2 border-spark font-bold text-navy hover:text-spark-dark">
            View programme details <ArrowRight size={18} aria-hidden />
          </Link>
        )}
      </div>
    </article>
  );
}
