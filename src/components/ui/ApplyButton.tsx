import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { SITE_CONFIG } from "../../config/site";
import { buttonClasses } from "./ButtonLink";
export default function ApplyButton({ onBlue = false, className = "" }: { onBlue?: boolean; className?: string }) {
  return (
    <Link to="/apply" className={buttonClasses(onBlue ? "navy" : "primary") + " " + className}>
      {SITE_CONFIG.applicationsOpen ? "Apply now" : "Application details"}
      <ArrowUpRight size={16} aria-hidden />
    </Link>
  );
}
