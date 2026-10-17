export interface SiteConfig {
  name: string;
  tagline: string;
  contactEmail: string;
  googleFormUrl: string;
  applicationsOpen: boolean;
  phone?: string;
  location?: string;
  socials: { label: string; url: string }[];
  logoSrc: string;
}

/** Accept only an HTTPS Google Forms URL; do not send users to an untrusted redirect. */
function safeGoogleFormUrl(raw: string): string {
  try {
    const url = new URL(raw.trim());
    if (url.protocol !== "https:" || url.username || url.password) return "";
    if (url.hostname === "forms.gle" && /^\/[a-zA-Z0-9_-]+\/?$/.test(url.pathname)) return url.toString();
    if (
      url.hostname === "docs.google.com" &&
      /^\/forms\/d\/(?:e\/)?[a-zA-Z0-9_-]+\/viewform\/?$/.test(url.pathname)
    ) return url.toString();
    return "";
  } catch {
    return "";
  }
}

const googleFormUrl = safeGoogleFormUrl(import.meta.env.VITE_GOOGLE_FORM_URL ?? "");

export const SITE_CONFIG: SiteConfig = {
  name: "SkillSpark Bootcamp",
  tagline: "Free, practical digital-skills learning for underserved Nigerian youth.",
  contactEmail: "", // Company mailbox not yet available.
  phone: "",
  location: "",
  googleFormUrl,
  // Registration stays closed unless BOTH the URL and deliberate launch flag are set.
  applicationsOpen: import.meta.env.VITE_APPLICATIONS_OPEN === "true" && !!googleFormUrl,
  socials: [
    { label: "SkillSpark on LinkedIn", url: "https://www.linkedin.com/company/skillspark-bootcamp/" },
  ],
  logoSrc: "/brand/skillspark-logo.svg",
};
