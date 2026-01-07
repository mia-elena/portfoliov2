import { WorkItem, Technology } from "../types";

export const experience: WorkItem[] = [
  {
    id: "gogentic",
    title: "Junior Developer (Contract)",
    role: "Gogentic.ai",
    date: "August 2025 - December 2025",
    description: "Contributing to microservices-based AI education platform using Docker and GCP with multi-tenant architecture supporting multiple organizations.",
    technicalDetails: [
      "Architected Docker-based microservices for a multi-tenant AI education platform",
      "Implemented stateful LLM integrations using LangChain and TypeScript-based RBAC",
      "Developed authentication middleware for admin, instructor, and student roles"
    ],
    technologies: ["typescript", "python", "react", "docker", "gcp", "jest", "pytest"] as Technology[]
  },
];
