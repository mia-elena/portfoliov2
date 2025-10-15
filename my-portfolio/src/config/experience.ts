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
    description: "Developed frontend features and RESTful APIs for client dashboard used by 200+ investors.",
    highlights: [
      "Built full-stack applications with React/Next.js in Agile environment with code reviews and pair programming",
      "Applied database query optimizations reducing API response time by 35% for portfolio data retrieval"
    ],
    technologies: ["react", "nextjs", "typescript", "nodejs", "postgresql"],
    logo: "/images/evergreen-logo.jpg"
  },
];