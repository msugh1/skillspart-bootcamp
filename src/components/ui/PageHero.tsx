import type { ReactNode } from "react";

export default function PageHero({ eyebrow, title, children, actions }: { eyebrow: string; title: string; children: ReactNode; actions?: ReactNode }) {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-navy">
          <span className="h-0.5 w-6 bg-spark" aria-hidden />
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/85">{children}</p>
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}
