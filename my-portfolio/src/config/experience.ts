import { ExperienceConfig } from "../types";

export const experience: ExperienceConfig[] = [
  {
    id: "gogentic",
    title: "Junior Developer (Contract)",
    company: "Gogentic.ai",
    date: "August 2025 - December 2025",
    location: {
      city: "New York",
      country: "USA"
    },
    type: "work",
    status: "current",
    description: "Contributing to microservices-based AI education platform using Docker and GCP with multi-tenant architecture supporting multiple organizations.",
    highlights: [
      "Contributed to microservices for AI education platform using Docker and LangChain for LLM integration. Designed and implemented role-based access control system with TypeScript, building authentication middleware across admin, instructor, and student roles."
    ],
    technologies: ["typescript", "python", "react", "docker", "gcp", "jest", "pytest"],
    logo: "/images/gogentic-logo.png"
  },
];