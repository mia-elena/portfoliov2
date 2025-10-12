import { StaticImageData } from "next/image";

export type Technology =
  | "typescript"
  | "javascript"
  | "react"
  | "nextjs"
  | "tailwindcss"
  | "graphql"
  | "prisma"
  | "nodejs"
  | "express"
  | "postgresql"
  | "mongodb"
  | "firebase"
  | "git"
  | "github"
  | "vercel"
  | "netlify"
  | "figma"
  | "html"
  | "css"
  | "redux"
  | "docker"
  | "awslambda"
  | "python"
  | "supabase"
  | "swift"
  | "jest"
  | "pytest"
  | "gcp"
  | "cpp"
  | "railway"
  | "bootstrap"
  | "fastapi"
  | "streamlit"
  | "scikit-learn"
  | "pandas"
  | "numpy"
  | "plotly"
  | "django"
  | "aws"
  | "java"
  | "mysql"
  | "openai"
  | "langchain";

export interface Project {
  // Core Properties
  id: string;
  title: string;
  shortTitle?: string;
  projectType?: string; // Client-friendly project category (e.g., "E-commerce Platform", "SaaS Dashboard")
  description: string;
  shortDescription?: string; // Brief description for compact cards
  technologies: Technology[];
  
  image?: string | StaticImageData; // Path to image (optional)
  videoUrl?: string; // For demo videos
  
  date: 
    | `${number}` // "YYYY";
    | `${number}/${number}`; // "MM/YYYY"

  lastUpdated?: string; 
  status?: "complete" | "in-progress" | "planning" | "on-hold" | "archived";
  links?: {
    github?: string;
    demo?: string;
    figma?: string;
    caseStudy?: string;
    playStore?: string;
    appStore?: string;
  };
  
  // Additional Properties (optional)
  meta?: {
    isFeatured?: boolean; // Highlight on homepage
    isWIP?: boolean; // "Work in progress" badge
    isOpenSource?: boolean; // Shows GitHub prominence
    isTeamProject?: boolean; // Team collaboration flag
    isAI?: boolean; // AI/ML related
    isGame?: boolean; // Game development
    isDataScience?: boolean; // Data science projects
    isFullStack?: boolean; // Full-stack projects
  };

  // Platform Support 
  platforms?: ("web" | "mobile" | "cli")[];
}

export interface Profile {
  name: string;
  title: string;
  description: string;
  image?: string | StaticImageData;
  links?: {
    github?: string;
    linkedIn?: string;
    twitter?: string;
    website?: string;
    resume?: string; // Optional
  };
  skills: Technology[];
  contact: {  
    email: string;
    phone?: string;
  };
  location?: {
    city?: string;
    country?: string;
  };
}

export interface ExperienceItem {
  id: string; 
  role: string;
  company: string;
  period: string; // e.g., "Jan 2020 - Present"
  
  // Tiered content structure
  summary: string; // Short 1-2 line overview for card view
  highlights?: string[]; // 2-4 key bullet points for medium view
  description: string[]; // Full detailed descriptions for expanded view
  
  skills: Technology[]; // Technologies used
  logo?: string | StaticImageData; // Optional logo image
  links?: {
    companyWebsite?: string;
    projectLink?: string;
    caseStudy?: string;
    github?: string;
  }
  location?: {
    city?: string;
    country?: string;
  };
  metrics?: {
    value: string; // e.g., "20%"
    label: string; // e.g., "Increased efficiency"
  }[];
  
  // Display preferences
  displayOptions?: {
    showMetrics?: boolean; // Whether to show metrics in card view
    emphasizeSkills?: boolean; // Whether to prominently display tech stack
    cardLayout?: "compact" | "standard" | "detailed"; // Default layout preference
  };
}

export type ColorScheme = 'brand' | 'mono' | 'minimal';