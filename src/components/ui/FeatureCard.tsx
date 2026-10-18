import type { LucideIcon } from "lucide-react";

export default function FeatureCard({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: string }) {
  return (
    <div className="h-full rounded-xl border border-line bg-white p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-spark hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none">
      <div className="mb-5 grid size-10 place-items-center rounded-full bg-mist text-spark-dark">
        <Icon size={18} aria-hidden />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{children}</p>
    </div>
  );
}
