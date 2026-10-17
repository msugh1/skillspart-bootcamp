export interface SiteConfig {
  name: string;
  tagline: string;
  contactEmail: string;
  applicationEndpoint: string;
  applicationsOpen: boolean;
  socials: { label: string; url: string }[];
  logoSrc: string;
}
const applicationEndpoint = (import.meta.env.VITE_APPLICATION_ENDPOINT ?? "").trim();
const validEndpoint = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(applicationEndpoint);
export const SITE_CONFIG: SiteConfig = {
  name: "SkillSpark Bootcamp",
  tagline: "Free, practical digital-skills learning for underserved Nigerian youth.",
  contactEmail: "felixdemkiir@gmail.com",
  applicationEndpoint: validEndpoint ? applicationEndpoint : "",
  applicationsOpen: import.meta.env.VITE_APPLICATIONS_OPEN === "true" && validEndpoint,
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/msugh-felix-demkiir-cybersecurity-analyst/" },
    { label: "GitHub", url: "https://github.com/msugh1" },
  ],
  logoSrc: "/brand/skillspark-logo.svg",
};
