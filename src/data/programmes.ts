import type { MEDIA } from "./media";

export interface Programme {
  slug: string;
  title: string;
  status: "open-soon" | "coming-next";
  eyebrow: string;
  summary: string;
  duration: string;
  format: string;
  level: string;
  image?: keyof typeof MEDIA;
  skills: string[];
  outcomes: string[];
  canApply: boolean;
  href?: string;
}

export const PROGRAMMES: Programme[] = [
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    status: "open-soon",
    eyebrow: "Inaugural programme",
    summary:
      "Learn how digital systems are attacked and defended. Eight weeks of live teaching, guided labs and a capstone project, built for complete beginners.",
    duration: "8 weeks",
    format: "Live online",
    level: "Beginner friendly",
    image: "cyber",
    skills: [
      "Security foundations",
      "Threats and vulnerabilities",
      "Networks and systems",
      "Identity and access",
      "Safe digital practices",
      "Incident response",
    ],
    outcomes: [
      "Explain core security concepts in plain language",
      "Spot common threats and weak points in everyday systems",
      "Apply basic defensive practices in guided labs",
      "Present a portfolio project and a clear next-step plan",
    ],
    canApply: true,
    href: "/programmes/cybersecurity",
  },
  {
    slug: "web-development",
    title: "Web Development",
    status: "coming-next",
    eyebrow: "Coming next",
    summary: "Build and ship real websites with modern tools.",
    duration: "To be announced",
    format: "Live online",
    level: "Beginner friendly",
    skills: ["HTML and CSS", "JavaScript", "Deployment"],
    outcomes: [],
    canApply: false,
  },
  {
    slug: "data-ai",
    title: "Data & AI",
    status: "coming-next",
    eyebrow: "Coming next",
    summary: "Turn data into decisions and understand how AI works.",
    duration: "To be announced",
    format: "Live online",
    level: "Beginner friendly",
    skills: ["Data literacy", "Analysis", "AI foundations"],
    outcomes: [],
    canApply: false,
  },
  {
    slug: "product-design",
    title: "Product Design",
    status: "coming-next",
    eyebrow: "Coming next",
    summary: "Design useful, usable digital products from idea to prototype.",
    duration: "To be announced",
    format: "Live online",
    level: "Beginner friendly",
    skills: ["Research", "Interface design", "Prototyping"],
    outcomes: [],
    canApply: false,
  },
];

export const CYBER = PROGRAMMES[0];

export const CURRICULUM = [
  { week: 1, title: "Digital safety and security mindset", body: "Why security matters and how attackers think." },
  { week: 2, title: "Systems, networks, and the internet", body: "How devices talk to each other, and where it goes wrong." },
  { week: 3, title: "Threats, vulnerabilities, and risk", body: "Recognise common attacks and weigh their impact." },
  { week: 4, title: "Identity, authentication, and access", body: "Passwords, multi-factor sign-in and least privilege." },
  { week: 5, title: "Defensive tools and monitoring", body: "Meet the tools defenders use to see and stop problems." },
  { week: 6, title: "Incident response fundamentals", body: "What to do, in order, when something goes wrong." },
  { week: 7, title: "Guided practical challenge", body: "Apply everything in a hands-on scenario with mentor support." },
  { week: 8, title: "Capstone presentation and next steps", body: "Present your project and plan your learning path." },
];
