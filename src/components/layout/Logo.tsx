import { SITE_CONFIG } from "../../config/site";

export default function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <img src="/brand/skillspark-mark.png" alt="" width={240} height={240} className={`aspect-square w-auto rounded-lg object-cover ${className}`} />
      <img src={SITE_CONFIG.logoSrc} alt="SkillSpark Bootcamp" width={238} height={60} className={`w-auto object-contain ${className}`} />
    </span>
  );
}
