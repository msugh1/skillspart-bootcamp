export interface SiteConfig {
  name: string;
  tagline: string;
  applicationUrl: string;
  contactEmail: string;
  phone?: string;
  location?: string;
  socials: { label: string; url: string }[];
  logoSrc: string;
}

export const SITE_CONFIG: SiteConfig = {
  name: "SkillSpark Bootcamp",
  tagline: "Practical digital skills for the next generation of builders.",
  applicationUrl: "",
  contactEmail: "",
  phone: "",
  location: "",
  socials: [],
  logoSrc: "/brand/skillspark-logo.svg",
};
