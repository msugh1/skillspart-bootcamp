import { Link } from "react-router";
import { SITE_CONFIG } from "../../config/site";
import { MEDIA, type Media } from "../../data/media";
import Logo from "./Logo";
import { NAV } from "./nav";

export default function Footer() {
  const { contactEmail, phone, location, socials } = SITE_CONFIG;
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
          <ul className="space-y-2 text-muted">
            {contactEmail && <li><a href={`mailto:${contactEmail}`} className="hover:text-navy">{contactEmail}</a></li>}
            {phone && <li>{phone}</li>}
            {location && <li>{location}</li>}
            {socials.map((s) => (
              <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer" className="hover:text-navy">{s.label}</a></li>
            ))}
            {!contactEmail && <li className="text-sm">Company email coming soon</li>}
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-5 py-6 text-center text-xs text-muted sm:px-8">
        © {new Date().getFullYear()} SkillSpark Bootcamp. A Millennium Fellowship project · SDG 4. <Link to="/privacy" className="underline hover:text-navy">Privacy</Link>. {credits && <>Photography by {credits} on Unsplash.</>}
      </div>
    </footer>
  );
}
