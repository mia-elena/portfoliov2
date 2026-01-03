import { WorkItem, Technology } from "../types";

export const workitems: WorkItem[] = [
  // Experience
  {
    id: "gogentic",
    title: "Gogentic.ai",
    url: "https://www.gogentic.ai/",
    role: "Developer (Contract)",
    date: "August 2025 - December 2025",
    description: "Contributed to CORTEX, an AI-powered course creation platform serving universities, corporate training teams, and instructional designers with end-to-end content generation, LMS integration, and multi-tenant architecture.",
    technicalDetails: [
      "Worked with Docker containerization in production environment, deploying and managing microservices on Google Cloud Platform",
      "Gained experience with LLM-based microservices architecture where each service functioned as its own RAG pipeline",
      "Learned observability practices and tools for monitoring distributed AI systems in production"
    ],
    technologies: ["typescript", "python", "react", "docker", "gcp", "langchain", "jest", "pytest"] as Technology[]
  },

  // Projects
  {
    id: "project1",
    title: "Luxe Marketplace",
    url: "https://ecartdemo.vercel.app/",
    role: "Lead Developer",
    date: "01/2025",
    description: "Full-stack e-commerce platform with integrated payment processing, authentication, and real-time analytics.",
    technicalDetails: [
      "Integrated Stripe payments and Google OAuth for secure transactions and authentication",
      "Built 30+ RESTful API endpoints for product catalog, cart, and order management",
      "Designed normalized PostgreSQL schema with full-text search capabilities",
      "Created responsive seller dashboard with real-time product metrics"
    ],
    technologies: ["react", "nodejs", "express", "postgresql", "tailwindcss"] as Technology[],
    images: ["/images/luxe-demo.gif", "/images/luxe.png", "/images/eCart1.jpg", "/images/ecart-final-homepage.png"]
  },
  {
    id: "project5",
    title: "Portfolio",
    url: "https://miaelena.vercel.app/",
    role: "Lead Developer",
    date: "04/2025",
    description: "Minimalist brutalist portfolio showcasing work experience and projects.",
    technicalDetails: [
      "Built with Next.js 15 App Router and server-side rendering",
      "Designed minimal brutalist aesthetic with custom component architecture",
      "Implemented responsive image gallery with keyboard navigation"
    ],
    technologies: ["typescript", "javascript", "react", "nextjs", "tailwindcss"] as Technology[],
    images: ["/images/portfolio.jpg"]
  }
];
