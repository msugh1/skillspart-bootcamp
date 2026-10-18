import { Link } from "react-router";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "navy" | "ghost";

export const buttonClasses = (variant: Variant = "primary") =>
  `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-[transform,background-color,color,border-color,box-shadow] duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 ${
    {
      primary: "bg-spark text-navy hover:bg-navy hover:text-white",
      secondary: "border border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-white",
      navy: "bg-navy text-white hover:bg-white hover:text-navy",
      ghost: "text-navy hover:text-spark-dark",
    }[variant]
  }`;

export default function ButtonLink({ to, children, variant = "primary", className = "" }: { to: string; children: ReactNode; variant?: Variant; className?: string }) {
  return (
    <Link reloadDocument to={to} className={`${buttonClasses(variant)} ${className}`}>
      {children}
    </Link>
  );
}
