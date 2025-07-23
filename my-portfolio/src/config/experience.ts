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
      "Built 4 production applications including AI chat bot and job recommendation system in a 10-week program",
      "Optimized application performance through caching, code splitting, and lazy loading techniques",
      "Implemented LLM integration with optimized API configuration and deployed on AWS and Vercel",
      "Collaborated with cross-functional teams using Git version control and agile development methodologies"
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
      "Designed WCAG 2.1 accessible React components with comprehensive form validation using TypeScript",
      "Deployed applications with CI/CD pipelines ensuring reliable uptime and automated testing workflows",
      "Collaborated on technical architecture decisions and participated in code reviews with development team"
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
      "Developed full-stack applications with React/Next.js and engaged in pair programming sessions",
      "Created RESTful APIs with Express.js and applied performance optimization techniques",
      "Built responsive web applications with modern CSS frameworks and implemented web security best practices"
    ],
    technologies: ["react", "nextjs", "nodejs", "express", "javascript"],
    logo: "/images/codepathlogo.jpg"
  },
  {
    id: "hunter-college-education",
    title: "Bachelor of Science in Computer Science",
    company: "CUNY Hunter College",
    date: "September 2022 - Present",
    location: {
      city: "New York",
      country: "USA"
    },
    type: "education",
    status: "current",
    description: "Computer Science degree with focus on data structures, algorithms, and web development. Active in CS community and maintaining 3.7 GPA.",
    highlights: [
      "Maintaining 3.7 GPA while actively participating in Computer Science Club and WiCS (Women in Computer Science)",
      "Completed core curriculum including Data Structures & Algorithms, Operating Systems, and Practical Web Development",
      "Enhanced technical skills through CodePath Advanced Web Development program and ongoing Technical Interview Course"
    ],
    technologies: ["javascript", "python", "cpp"],
    logo: "/images/HunterCollege.jpg"
  }
];