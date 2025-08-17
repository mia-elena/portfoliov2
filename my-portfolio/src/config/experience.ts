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
    description: "Developed comprehensive RBAC using TypeScript with comprehensive permissions and multi-organization support. Developed AI-powered educational technology solutions supporting student learning outcomes and educational tools. Collaborated cross-functionally with product and design teams on technical requirements and implementation strategy.",
    highlights: [
      "Developed comprehensive RBAC using TypeScript with comprehensive permissions and multi-organization support",
      "Developed AI-powered educational technology solutions supporting student learning outcomes, educational tools",
      "Collaborated cross-functionally with product, design teams on technical requirements and implementation strategy"
    ],
    technologies: ["typescript", "react", "nextjs", "nodejs", "postgresql", "aws"],
    logo: "/images/gogentic-logo.png"
  },
  {
    id: "headstarter",
    title: "Software Engineering Resident",
    company: "Headstarter",
    date: "May 2025 - August 2025",
    location: {
      city: "New York",
      country: "USA"
    },
    type: "residency",
    status: "completed",
    description: "Built 4 production applications including AI chatbot and job recommendation system in a 10-week program with focus on modern development practices and deployment.",
    highlights: [
      "Built 4 production applications including AI chatbot and job recommendation system in 10-week program",
      "Optimized application performance through Redis caching, React code splitting, and lazy loading techniques",
      "Architected scalable AI pipeline with prompt engineering, token optimization, and multi-modal API integration",
    ],
    technologies: ["python", "react", "nextjs", "aws", "vercel", "openai", "postgresql"],
    logo: "/images/headstarter.jpeg"
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