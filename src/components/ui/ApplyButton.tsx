import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../../config/site";
import { buttonClasses } from "./ButtonLink";

export default function ApplyButton({ onBlue = false, className = "" }: { onBlue?: boolean; className?: string }) {
  const url = SITE_CONFIG.applicationUrl;
  if (!url) {
    return (
      <span
        role="note"
        className={`inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-full px-6 py-3 text-sm font-bold ${
          onBlue ? "bg-white/50 text-navy" : "bg-mist text-navy/70"
        } ${className}`}
      >
        Applications opening soon
      </span>
    );
  }
  return (
    <a href={url} target="_blank" rel="noreferrer" className={`${buttonClasses(onBlue ? "navy" : "primary")} ${className}`}>
      Apply now <ArrowUpRight size={16} aria-hidden />
      <span className="sr-only">(opens the application form in a new tab)</span>
    </a>
  );
}
