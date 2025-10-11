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
    description: "Contributing to microservices-based AI education platform with 5+ interconnected services using Docker and GCP, scaling to support 1000+ concurrent users across multi-tenant architecture.",
    highlights: [
      "Contributed to microservices-based AI education platform with 5+ interconnected services using Docker and GCP, scaling to support 1000+ concurrent users across multi-tenant architecture",
      "Engineered comprehensive RBAC system with Typescript enabling multi-organization permissions, role hierarchies, and granular access control for admin, instructor, and student roles",
      "Implemented comprehensive testing framework with pytest and Jest featuring multi-modal AI ensemble evaluation, increasing code coverage by 30% and improving test readability",
      "Collaborated with product and design teams to deliver 3 platform features 2 weeks ahead of schedule, including RBAC system, authentication flows, and admin dashboard"
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
    description: "Designed WCAG 2.1 accessible React components with Typescript, improving UX for students with disabilities. Built CI/CD pipeline with GitHub Actions reducing deployment time by 60% across 4 development teams.",
    highlights: [
      "Designed WCAG 2.1 accessible React components with Typescript, improving UX for students with disabilities",
      "Built CI/CD pipeline with GitHub Actions reducing deployment time by 60% across 4 development teams",
      "Participated in technical reviews for 3 applications, collaborating with 5 developers on modern React patterns"
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
    description: "Developed front end features and RESTful APIs improving client dashboard functionality for 200+ users. Built full-stack applications with React/Next.js in Agile environment with code reviews and pair programming.",
    highlights: [
      "Developed front end features and RESTful APIs improving client dashboard functionality for 200+ users",
      "Built full-stack applications with React/Next.js in Agile environment with code reviews and pair programming",
      "Applied database query optimizations reducing API response time by 35%"
    ],
    technologies: ["react", "nextjs", "typescript", "nodejs", "postgresql"],
    logo: "/images/evergreen-logo.jpg"
  }
];