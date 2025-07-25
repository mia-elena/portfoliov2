import { Project, Technology } from "../types/index";

export const projects: Project[] = [
  {
    id: "project1",
    title: "E-commerce Platform",
    description: "Full-stack platform with 30+ Swagger API endpoints, Stripe payments, Google OAuth, and Swagger documentation. Built PostgreSQL database with full-text search, real-time cart management, and CI/CD deployment. Developed social commerce features including product likes system, automated brand creation, and RESTful APIs. Implemented Firebase authentication, seller listing management, and multi-environment deployment.",
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
    platforms: ["web"]
  },
  {
    id: "project2",
    title: "AI-Powered Job Finder Platform",
    shortTitle: "Job Finder",
    description: "Architected intelligent job matching platform integrating 9+ APIs (Jsearch, Adzuna, Reed, RemoteOK). Implemented AI-driven scoring algorithms analyzing 50+ job attributes for personalized recommendations. Built scalable Django backend with Celery task queues processing 1000+ jobs daily from multiple sources. Developed responsive Next.js frontend with realtime filtering, advanced search, and user preference management.",
    technologies: [
      "python",
      "django",
      "react",
      "nextjs",
      "typescript",
      "postgresql"
    ],
    date: "07/2025",
    lastUpdated: "2025-07-23",
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
  },
  {
    id: "project3",
    title: "Smart Chat Component",
    shortTitle: "Smart Chat Component",
    description: "Reusable AI chat component with 4 intelligent personas and real-time conversational AI. Built responsive React component library with Typescript, 4 theme variants, and Framer motion animations. Implemented split deployment architecture with Vercel frontend and Render backend supporting CORS configuration. Created comprehensive documentation and integration guides enabling developers to easily adopt the component.",
    technologies: ["react", "typescript", "nodejs", "express", "tailwindcss", "openai"],
    date: "07/2025",
    lastUpdated: "2025-07-25",
    status: "complete", 
    links: {
      github: "https://github.com/miasdk/gemini-chatbot",
      demo: "https://gemini-chat-component.vercel.app/"
    },
    image: "/images/gemini-chatbot.png",
    meta: {
      isFeatured: true,
      isFullStack: true,
      isAI: true,
      isTeamProject: false,
    },
    platforms: ["web"]
  },
  {
    id: "project4",
    title: "AI-Medical Referral Hub",
    shortTitle: "Medical Referral Hub",
    description: "Built HIPAA-compliant healthcare application with normalized PostgreSQL schema and comprehensive audit logging. Engineered FHIR R4-compliant data models and APIs for healthcare interoperability across provider systems. Implemented AI-powered PDF document processing using Mistral AI and spaCy for medical data extraction. Currently implementing AI integration with Mistral AI for automated referral analysis.",
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
    lastUpdated: "2025-07-09",
    status: "in-progress",
    links: {
      github: "https://github.com/miasdk/medical-referral-hub",
    },
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    meta: {
      isWIP: true,
      isFeatured: true,
      isAI: true,
      isFullStack: true,
      isTeamProject: false,
    },
    platforms: ["web"]
  },
  {
    id: "project5",
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
  }
];