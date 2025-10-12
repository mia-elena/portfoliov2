import { ExperienceItem, Technology } from "../types";
export const experience = [
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
    description: "Contributing to microservices-based AI education platform built with Docker and GCP in a multi-tenant architecture.",
    highlights: [
      "Built role-based access control system enabling organization-level permissions and user management",
      "Developed testing framework for AI model evaluation and platform features"
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
    description: "Developed accessible web applications and deployment infrastructure for campus development teams.",
    highlights: [
      "Created accessible React components following WCAG 2.1 standards for inclusive user experiences",
      "Implemented CI/CD pipelines with GitHub Actions to streamline development workflows"
    ],
    technologies: ["react", "typescript", "javascript", "git"],
    logo: "/images/HunterCollege.jpg"
  },
  {
    id: "evergreen-investments",
    title: "Software Engineering Intern",
    company: "Evergreen Investments",
    date: "June 2024 - December 2024",
    location: {
      city: "New York",
      country: "USA"
    },
    type: "internship",
    status: "completed",
    description: "Built full-stack features and RESTful APIs for client-facing dashboard in collaborative Agile environment.",
    highlights: [
      "Developed frontend interfaces and backend APIs to enhance dashboard functionality for users",
      "Improved application performance through database query optimization"
    ],
    technologies: ["react", "nextjs", "typescript", "nodejs", "postgresql"],
    logo: "/images/evergreen-logo.jpg"
  }
];