import { Project, Technology } from "../types/index";

export const projects: Project[] = [
  // Featured projects first (most recent work)
  {
    id: "project1",
    title: "Luxe Marketplace",
    projectType: "E-commerce Platform",
    description: "Full-stack e-commerce platform with integrated payment processing, authentication, and real-time analytics.",
    highlights: [
      "Integrated Stripe payments and Google OAuth for secure transactions and authentication",
      "Built 30+ RESTful API endpoints for product catalog, cart, and order management",
      "Designed normalized PostgreSQL schema with full-text search capabilities",
      "Created responsive seller dashboard with real-time product metrics"
    ],
    technologies: ["react", "nodejs", "express", "postgresql", "tailwindcss"],
    date: "01/2025",
    lastUpdated: "2025-07-18",
    status: "complete",
    links: {
      github: "https://github.com/miasdk/Vite-Ecommerce-Template",
      demo: "https://ecartdemo.vercel.app/"
    },
    image: "/images/luxe-demo.gif",
    images: ["/images/luxe-demo.gif", "/images/luxe.png", "/images/eCart1.jpg", "/images/ecart-final-homepage.png"],
    meta: {
      isTeamProject: false,
      isFeatured: true,
      isFullStack: true,
    },
    platforms: ["web"]
  },
  // {
  //   id: "project2",
  //   title: "AI-Powered Job Finder",
  //   shortTitle: "AI-Powered Job Finder",
  //   projectType: "Job Matching Platform",
  //   description: "Built full-stack job platform with Next.js/TypeScript frontend and Django REST API backend. Integrated 4+ external job board APIs (Adzuna, JSearch, Reed, Rise) aggregating 100+ daily job listings. Implemented Celery task queues with Redis broker for asynchronous job scraping, AI-powered matching, and automated email digests.",
  //   technologies: ["nextjs", "typescript", "django", "python", "postgresql", "react"],
  //   date: "07/2025",
  //   lastUpdated: "2025-07-23",
  //   status: "complete",
  //   links: {
  //     github: "https://github.com/miasdk/job-finder-backend",
  //     demo: "https://mia-jobfinder.vercel.app/"
  //   },
  //   image: "/images/job-finder-hero1.png",
  //   meta: {
  //     isFeatured: true,
  //     isFullStack: true,
  //     isAI: true,
  //     isTeamProject: false
  //   },
  //   platforms: ["web"]
  // },
  // Non-featured projects (reverse chronological)
 
 
  {
    id: "project5",
    title: "Portfolio",
    projectType: "Developer Portfolio",
    description: "Minimalist brutalist portfolio showcasing work experience and projects.",
    highlights: [
      "Built with Next.js 15 App Router and server-side rendering",
      "Designed minimal brutalist aesthetic with custom component architecture",
      "Implemented responsive image gallery with keyboard navigation"
    ],
    technologies: ["typescript", "javascript", "react", "nextjs", "tailwindcss"],
    date: "04/2025",
    lastUpdated: "2025-07-18",
    status: "complete",
    links: {
      github: "https://github.com/miasdk/Portfolio",
      demo: "https://miaelena.vercel.app/"
    },
    image: "/images/portfolio.jpg",
    images: ["/images/portfolio.jpg"],
    meta: {
      isFeatured: true,
    },
    platforms: ["web", "mobile"]
  }
  // {
  //   id: "project8",
  //   title: "Python Mastery Learning Platform",
  //   shortTitle: "Python Mastery",
  //   description: "Interactive Python learning platform with AI-powered code execution, real-time feedback, and personalized curriculum. Built comprehensive backend with PostgreSQL database, GitHub OAuth authentication, and Python code sandbox execution. Developed responsive React frontend with Monaco editor integration, progress tracking, and multi-level problem sets. Implemented production deployment with CI/CD pipeline supporting separate frontend/backend architecture.",
  //   technologies: ["react", "typescript", "nodejs", "express", "postgresql", "python", "tailwindcss"],
  //   date: "07/2025",
  //   lastUpdated: "2025-07-29",
  //   status: "complete",
  //   links: {
  //     github: "https://github.com/miasdk/python-mastery",
  //     demo: "https://python-mastery-i25r8d9go-mia-s-projects.vercel.app/"
  //   },
  //   image: "/images/python-mastery.png",
  //   meta: {
  //     isFeatured: true,
  //     isFullStack: true,
  //     isAI: false,
  //     isTeamProject: false
  //   },
  //   platforms: ["web"]
  // },
  
  
];