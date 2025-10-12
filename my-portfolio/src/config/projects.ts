import { Project, Technology } from "../types/index";

export const projects: Project[] = [
  // Featured projects first (most recent work)
  {
    id: "project7",
    title: "Hunter Daily Events Portal",
    shortTitle: "Hunter Events Portal",
    projectType: "Campus Event Platform",
    description: "Full-stack event management platform centralizing all Hunter College club events with real-time updates. Features Firebase database with automated daily cleanup, React frontend with dynamic event cards, and admin-authenticated form access for club presidents. Implements one-event-per-day restrictions per club and role-based access control. Deployed on Vercel with weekly team sprints following agile methodology.",
    technologies: ["react", "nodejs", "express", "firebase", "tailwindcss", "figma"],
    date: "10/2025",
    lastUpdated: "2025-10-12",
    status: "planning",
    links: {
      github: "TBD"
    },
    image: "https://s29068.pcdn.co/wp-content/uploads/streetfair-dsc-8099-1024x576.jpg.webp",
    meta: {
      isWIP: true,
      isFeatured: true,
      isFullStack: true,
      isTeamProject: true
    },
    platforms: ["web"]
  },
  {
    id: "project6",
    title: "Canvas LMS Feedback Intelligence Platform",
    shortTitle: "Canvas LMS Feedback Platform",
    projectType: "EdTech Analytics Platform",
    description: "Analytics platform that helps educators prioritize course improvements by analyzing student feedback from Canvas LMS. Features intelligent scoring algorithm weighing 60+ metrics across impact, urgency, and effort. Built with async FastAPI backend, React frontend, and PostgreSQL with automated survey extraction.",
    technologies: ["python", "react", "typescript", "postgresql", "fastapi", "tailwindcss"],
    date: "10/2025",
    lastUpdated: "2025-10-06",
    status: "in-progress",
    links: {
      github: "https://github.com/miasdk/canvas-feedback-aggregator"
    },
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=870&auto=format&fit=crop",
    meta: {
      isWIP: true,
      isFeatured: true,
      isFullStack: true,
      isAI: false,
      isTeamProject: false
    },
    platforms: ["web"]
  },
  {
    id: "project1",
    title: "Luxe Marketplace",
    projectType: "E-commerce Platform",
    description: "Full-stack e-commerce platform with Stripe payments, Google OAuth, and 30+ RESTful API endpoints. Features PostgreSQL database with full-text search, real-time cart management, social commerce features including product likes, and seller listing management. Includes CI/CD deployment pipeline.",
    technologies: ["react", "nodejs", "express", "postgresql", "firebase", "tailwindcss"],
    date: "01/2025",
    lastUpdated: "2025-07-18",
    status: "complete",
    links: {
      github: "https://github.com/miasdk/Vite-Ecommerce-Template",
      demo: "https://ecartdemo.vercel.app/"
    },
    image: "/images/ecart-homepage2.png",
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
    shortTitle: "AI-Powered Job Finder",
    projectType: "Job Matching Platform",
    description: "AI-powered job matching platform integrating 9+ job APIs with intelligent scoring algorithms. Processes 1000+ daily job postings through Django backend with Celery task queues and Next.js frontend for personalized recommendations.",
    technologies: ["python", "django", "react", "nextjs", "typescript", "postgresql"],
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
  // Non-featured projects (reverse chronological)
  {
    id: "project3",
    title: "Smart Chat Component",
    shortTitle: "Smart Chat Component",
    projectType: "AI Chat Component",
    description: "Reusable AI chat component library with 4 intelligent personas and theme variants. Built with React, TypeScript, and OpenAI featuring real-time conversations and comprehensive developer documentation.",
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
      isFeatured: false,
      isFullStack: true,
      isAI: true,
      isTeamProject: false,
    },
    platforms: ["web"]
  },
  // {
  //   id: "project4",
  //   title: "AI-Medical Referral Hub",
  //   shortTitle: "Medical Referral Hub",
  //   projectType: "Healthcare Platform",
  //   description: "HIPAA-compliant healthcare platform with FHIR R4-compliant APIs for medical referral management. Features AI-powered PDF processing with Mistral AI and normalized PostgreSQL database with audit logging.",
  //   technologies: ["python", "django", "postgresql", "react", "typescript", "tailwindcss", "docker"],
  //   date: "06/2025",
  //   lastUpdated: "2025-07-09",
  //   status: "in-progress",
  //   links: {
  //     github: "https://github.com/miasdk/medical-referral-hub",
  //   },
  //   image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   meta: {
  //     isWIP: true,
  //     isFeatured: false,
  //     isAI: true,
  //     isFullStack: true,
  //     isTeamProject: false,
  //   },
  //   platforms: ["web"]
  // },
  {
    id: "project5",
    title: "Portfolio",
    projectType: "Developer Portfolio",
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