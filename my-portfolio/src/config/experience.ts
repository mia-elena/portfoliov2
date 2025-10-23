import { ExperienceConfig } from "../types";

export const experience: ExperienceConfig[] = [
  {
    id: "gogentic",
    title: "Junior Software Engineer",
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
      "Implemented role-based access control (RBAC) system with TypeScript enabling organization-level permissions for admin, instructor, and student roles",
      "Developed comprehensive test suite with pytest and Jest for authentication and permissions modules, improving code maintainability",
      "Researched and evaluated observability solutions including Datadog for monitoring microservices performance and error tracking"
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
      "Created GitHub Actions CI/CD workflow automating testing and deployment processes",
      "Participated in code reviews and collaborated with development team on React best practices"
    ],
    technologies: ["react", "typescript", "javascript", "git"],
    logo: "/images/HunterCollege.jpg"
  },
];