import { Link } from "react-router";
import { SITE_CONFIG } from "../../config/site";
import { MEDIA, type Media } from "../../data/media";
import Logo from "./Logo";
import { NAV } from "./nav";

export default function Footer() {
  const credits = [...new Set((Object.values(MEDIA) as Media[]).map((m) => m.credit).filter(Boolean))].join(", ");
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo className="h-8" />
          <p className="mt-5 max-w-xs text-muted">{SITE_CONFIG.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-navy">Explore</h2>
          <ul className="space-y-1">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="inline-flex min-h-9 items-center text-muted hover:text-navy">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-navy">Contact</h2>
          <ul className="space-y-3 text-muted">
            <li>
              <a
                href="https://www.linkedin.com/company/skillspark-bootcamp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-9 items-center font-medium text-navy underline decoration-spark underline-offset-4 hover:text-spark-dark"
              >
                SkillSpark on LinkedIn
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li className="text-sm">Company email coming soon</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-5 py-6 text-center text-xs text-muted sm:px-8">
        © {new Date().getFullYear()} SkillSpark Bootcamp. A Millennium Fellowship project · SDG 4. <Link to="/privacy" className="underline hover:text-navy">Privacy</Link>. {credits && <>Photography by {credits} on Unsplash.</>}
      </div>
    </footer>
  );
}
