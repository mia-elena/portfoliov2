import { ExperienceConfig } from "../types";

export const experience: ExperienceConfig[] = [
  {
    id: "gogentic",
    title: "Junior Developer (Contract)",
    company: "Gogentic.ai",
    date: "August 2025 - Present",
    location: {
      city: "New York",
      country: "USA"
    },
    type: "work",
    status: "current",
    description: "Contributing to microservices-based AI education platform using Docker and GCP with multi-tenant architecture supporting multiple organizations.",
    highlights: [
      "Built microservices for AI education platform using Docker and LangChain for LLM integration. Designed and implemented role-based access control system with TypeScript, building authentication middleware across admin, instructor, and student roles."
    ],
    technologies: ["typescript", "python", "react", "docker", "gcp", "jest", "pytest"],
    logo: "/images/gogentic-logo.png"
  },
  {
    id: "hunter-college-dev",
    title: "Student Developer",
    company: "CUNY Hunter College",
    date: "January 2025 - May 2025",
    location: {
      city: "New York",
      country: "USA"
    },
    type: "work",
    status: "completed",
    description: "Developed accessible React components with TypeScript following WCAG 2.1 guidelines for campus web applications.",
    highlights: [
      "Assisted in deployment and user testing of web solutions, focusing on accessibility and responsive adoption. Participated in peer code reviews and collaborated on establishing React best practices for component architecture."
    ],
    technologies: ["react", "typescript", "javascript", "git"],
    logo: "/images/HunterCollege.jpg"
  },
];