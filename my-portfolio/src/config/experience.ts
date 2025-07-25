import { ExperienceItem, Technology } from "../types";
export const experience = [
  {
    id: "headstarter",
    title: "Software Engineering Resident",
    company: "Headstarter",
    date: "May 2025 - Present",
    location: {
      city: "New York",
      country: "USA"
    },
    type: "residency",
    status: "current",
    description: "Built 4 production applications including AI chat bot and job recommendation system in a 10-week program with focus on modern development practices and deployment.",
    highlights: [
      "Built 4 production applications including AI chatbot and job recommendation system in 10-week program",
      "Optimized application performance through Redis caching, React code splitting, and lazy loading techniques",
      "Implemented Large Language Models with optimized API configuration and deployed on AWS and Vercel",
    ],
    technologies: ["python", "react", "nextjs", "aws", "vercel", "openai"],
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
    description: "Developed accessible web applications with focus on WCAG 2.1 compliance and modern React development practices.",
    highlights: [
      "Designed WCAG 2.1 accessible React components with comprehensive form validation and error handling",
      "Deployed applications with CI/CD ensuring reliable uptime; collaborated on technical architecture decisions",
      "Built robust TypeScript applications with comprehensive testing and automated deployment workflows"
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
    description: "Developed portfolio management features and implemented security controls for client dashboard systems.",
    highlights: [
      "Developed portfolio management features improving client dashboard functionality and user experience",
      "Implemented role-based access control components following senior architect guidance and security standards",
      "Built responsive dashboard interfaces with real-time data visualization and interactive financial charts"
    ],
    technologies: ["react", "typescript", "nodejs", "postgresql"],
    logo: "/images/evergreen-logo.jpg"
  },
  {
    id: "codepath",
    title: "Advanced Web Development Mentee",
    company: "CodePath",
    date: "August 2023 - January 2024",
    location: {
      city: "New York",
      country: "USA"
    },
    type: "program",
    status: "completed",
    description: "Completed intensive web development program focused on full-stack application development and modern frameworks.",
    highlights: [
      "Developed full-stack applications with React/Next.js engaging in weekly pair programming sessions",
      "Created RESTful APIs with comprehensive endpoint documentation and applied database query optimizations",
      "Built responsive web applications with modern CSS frameworks and implemented web security best practices"
    ],
    technologies: ["react", "nextjs", "nodejs", "express", "javascript"],
    logo: "/images/codepathlogo.jpg"
  }
];