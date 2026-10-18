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
    slug: "cybersecurity", title: "Cybersecurity", status: "open-soon",
    eyebrow: "Inaugural programme", 
    summary: "A free six-week online bootcamp using Google’s Cybersecurity Professional Certificate courses on Coursera, plus weekly SkillSpark live learning sessions and community support for eligible learners.",
    duration: "6 weeks", format: "Coursera + live sessions", level: "Beginner friendly", image: "cyber",
    skills: ["Digital safety", "Cyber threats", "Network fundamentals", "Identity protection", "Defensive practices"],
    outcomes: [
      "Explain foundational security concepts",
      "Recognise common online threats",
      "Apply safer security habits",
      "Identify a pathway for further technical learning",
    ],
    canApply: false, href: "/programmes/cybersecurity",
  },
  {
    slug: "it-support", title: "IT Support", status: "coming-next",
    eyebrow: "Planned track",
    summary: "Explore essential troubleshooting, device setup and everyday technical support skills.",
    duration: "6–8 week bootcamp model", format: "Online", level: "Beginner-oriented",
    skills: ["Troubleshooting", "Computer systems", "User support"], outcomes: [], canApply: false,
  },
  {
    slug: "it-automation", title: "IT Automation", status: "coming-next",
    eyebrow: "Planned track",
    summary: "Explore how scripts and repeatable workflows can make everyday IT tasks more efficient.",
    duration: "6–8 week bootcamp model", format: "Online", level: "Beginner-oriented",
    skills: ["Automation concepts", "Scripts", "Workflows"], outcomes: [], canApply: false,
  },
];
export const CYBER = PROGRAMMES[0];
// Topic previews are provisional. This is not a confirmed weekly timetable.
export const CURRICULUM = [
  { week: 1, title: "Digital safety and security mindset", body: "Understand why protecting information and devices matters." },
  { week: 2, title: "Systems and networks", body: "Explore how computers and connected services communicate." },
  { week: 3, title: "Threats and vulnerabilities", body: "Recognise common attack patterns, scams and technical weaknesses." },
  { week: 4, title: "Authentication and identity", body: "Learn about passwords, multifactor authentication and permissions." },
  { week: 5, title: "Everyday defensive practice", body: "Apply practical precautions to protect accounts and devices." },
  { week: 6, title: "Security career pathways", body: "Explore entry points, further study and responsible professional practice." },
];
