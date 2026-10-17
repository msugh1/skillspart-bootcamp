import type { ReactNode } from "react";

export default function SectionHeading({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-navy">
          <span className="h-0.5 w-6 bg-spark" aria-hidden />
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{children}</p>}
    </div>
  );
}
