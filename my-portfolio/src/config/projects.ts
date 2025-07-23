import { Project, Technology } from "../types/index";

export const projects: Project[] = [
  {
    id: "project1",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce platform featuring 25+ documented REST API endpoints, advanced PostgreSQL full-text search, and interactive Swagger documentation. Built with scalable design patterns including Firebase authentication, Stripe payment processing, and optimized database queries. Deployed on Vercel/Render with comprehensive CI/CD pipeline.",
    technologies: ["react", "nodejs", "express", "postgresql", "firebase", "tailwindcss"],
    date: "01/2025",
    lastUpdated: "2025-07-18",
    status: "complete", 
    links: {
      github: "https://github.com/miasdk/Vite-Ecommerce-Template",
      demo: "https://ecartdemo.vercel.app/"
    },
    image: "/images/luxe.png",
    meta: {
      isTeamProject: false,
      isFeatured: true,
      isFullStack: true,
    },
  },
  {
    id: "project2",
    title: "Portfolio",
    description: "Next.js portfolio featuring server-side rendering, responsive design, and custom component library for consistent UI/UX.",
    technologies: ["typescript", "javascript", "react", "nextjs", "tailwindcss"],
    date: "04/2025",
    lastUpdated: "2025-07-18",
    status: "complete", 
    links: {
      github: "https://github.com/miasdk/Portfolio",
      demo: "https://miaelena.vercel.app/"
    },
    image: "/images/portfolio.jpg",
    meta: {
      isFeatured: false,
    },
    platforms: ["web", "mobile"]
  },
{
  id: "project3",
  title: "Medical Referral Hub: AI-Powered Healthcare Automation",
  shortTitle: "AI Medical Referral Hub",
  description: "Full-stack healthcare automation system built with Django and React. Features intelligent document processing, provider matching algorithms, and FHIR R4 compliance. Demonstrates clean architecture with PostgreSQL, comprehensive audit trails, and production-ready deployment pipeline. Currently implementing AI integration with Mistral AI for automated referral analysis.",
  technologies: [
    "python",
    "django", 
    "postgresql",
    "react",
    "typescript",
    "tailwindcss",
    "docker"
  ],
  date: "06/2025",
  lastUpdated: "2025-07-09", // Update to today's date
  status: "in-progress", // Keep as in-progress since AI integration isn't complete
  links: {
    github: "https://github.com/miasdk/medical-referral-hub", // Update with your actual GitHub username
    // demo: "https://medical-referral-hub.vercel.app/" // Add when deployed
  },
  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  meta: {
    isWIP: true, // Keep as true since it's actively being developed
    isFeatured: true,
    isAI: true,
    isFullStack: true,
    isTeamProject: false,
  },
  platforms: ["web"]
},
{
  id: "project4",
  title: "Job Finder: AI-Powered Python/Django Job Search",
  shortTitle: "Job Finder",
  description: "Personalized AI-powered job search platform built specifically for aiding my job search. This app provides custom job matching, real-time scraping from multiple sources, and a modern dashboard UI. Built with Django, React, and TypeScript, it supports remote, hybrid, and on-site roles, and includes automated email digests, user preferences, and a scoring engine for tailored recommendations.",
  technologies: [
    "python",
    "django",
    "react",
    "typescript",
    "postgresql",
    "tailwindcss",
  ],
  date: "07/2025",
  lastUpdated: "2025-07-23", // Update as needed
  status: "complete",
  links: {
    github: "https://github.com/miasdk/job-finder-backend",
    demo: "https://mia-jobfinder.vercel.app/"
  },
  image: "/images/job-finder-hero1.png",
  meta: {
    isFeatured: true,
    isFullStack: true,
    isAI: true,
    isTeamProject: false
  },
  platforms: ["web"]
}
];