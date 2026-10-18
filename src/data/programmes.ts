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
// SkillSpark's suggested six-week pacing, not Coursera's official schedule.
// Google's eight core cybersecurity courses are the primary coursework.
// The AI job-search course is an optional career extension where accessible.
export const CURRICULUM = [
  { week: 1, title: "Cybersecurity foundations and risk", courses: "Foundations of Cybersecurity; Play It Safe: Manage Security Risks", body: "Explore cybersecurity careers, the CIA triad, security ethics, risk frameworks, controls and security audits.", live: "Welcome and guided risk-assessment discussion." },
  { week: 2, title: "Networking and network security", courses: "Connect and Protect: Networks and Network Security", body: "Learn network architecture, protocols, firewalls, network attacks, hardening and cloud security concepts.", live: "Network diagrams and network-security walkthrough." },
  { week: 3, title: "Linux, SQL and security assets", courses: "Tools of the Trade: Linux and SQL; begin Assets, Threats, and Vulnerabilities", body: "Practise Linux commands and permissions, SQL queries and asset classification.", live: "Guided Linux and SQL exercises." },
  { week: 4, title: "Threats, vulnerabilities and detection", courses: "Finish Assets, Threats, and Vulnerabilities; begin Sound the Alarm: Detection and Response", body: "Explore attacks, threat modelling, vulnerabilities, security logs and alert triage.", live: "Threat modelling and security-alert investigation." },
  { week: 5, title: "Incident response and Python", courses: "Finish Sound the Alarm: Detection and Response; begin Automate Cybersecurity Tasks with Python", body: "Work with SIEM tools, incident handling, network traffic, Python fundamentals and security scripts.", live: "Incident-response scenario and Python introduction." },
  { week: 6, title: "Automation, portfolio and career readiness", courses: "Finish Automate Cybersecurity Tasks with Python; Put It to Work: Prepare for Cybersecurity Jobs", body: "Practise Python automation, build a cybersecurity portfolio and prepare for entry-level applications. Coursera's AI job-search course is an optional follow-on.", live: "Portfolio review, career Q&A and next-steps planning." },
];
