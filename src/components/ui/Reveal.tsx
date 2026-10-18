import type { ReactNode } from "react";

/** Static content wrapper: avoids animation hook cleanup errors during route changes. */
export default function Reveal({ children, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <div className={className}>{children}</div>;
}
