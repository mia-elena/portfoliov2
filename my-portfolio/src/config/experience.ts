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
    description: "Developed comprehensive RBAC using TypeScript with comprehensive permissions and multi-organization support. Built Canvas LMS feedback intelligence platform with FastAPI backend, priority scoring algorithms, and modular Canvas API architecture. Developed AI-powered educational technology solutions supporting student learning outcomes and educational tools.",
    highlights: [
      "Built Canvas LMS feedback platform with FastAPI backend, modular API clients, and async SQLAlchemy 2.0—processing 60+ metrics across 4 weighted dimensions for AI-driven course improvement recommendations",
      "Engineered priority scoring algorithm with explainable recommendations and automated survey discovery using confidence-based Canvas quiz identification",
      "Developed comprehensive RBAC system with TypeScript supporting granular permissions and multi-organization access control"
    ],
    technologies: ["python", "fastapi", "typescript", "react", "nextjs", "nodejs", "postgresql", "aws"],
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
    description: "Designed WCAG 2.1 accessible React components with form validation and type safety using Typescript. Built CI/CD pipeline with GitHub Actions integrating automated testing, linting, and multi-environment deployments. Led technical architecture reviews for 3 web applications, mentoring junior peers on modern React patterns.",
    highlights: [
      "Designed WCAG 2.1 accessible React components with form validation and type safety using Typescript",
      "Built CI/CD pipeline with GitHub Actions integrating automated testing, linting, and multi-environment deployments",
      "Led technical architecture reviews for 3 web applications, mentoring junior peers on modern React patterns"
    ],
    technologies: ["react", "typescript", "javascript", "git", "github"],
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
    description: "Developed portfolio management features improving client dashboard functionality and user experience. Created RESTful APIs with comprehensive endpoint documentation and applied database query optimizations. Developed full-stack applications with React/Next.js engaging in weekly pair programming sessions.",
    highlights: [
      "Developed portfolio management features improving client dashboard functionality and user experience",
      "Created RESTful APIs with comprehensive endpoint documentation and applied database query optimizations",
      "Developed full-stack applications with React/Next.js engaging in weekly pair programming sessions"
    ],
    technologies: ["react", "typescript", "nodejs", "postgresql", "nextjs"],
    logo: "/images/evergreen-logo.jpg"
  }
];