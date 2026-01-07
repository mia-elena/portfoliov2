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
  highlights?: string[]; // Key technical achievements/details
  technologies: Technology[];

  image?: string | StaticImageData; // Path to image (optional)
  images?: string[]; // Array of image paths for gallery
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
  technicalFocus?: string[]; // Key technical interests/specializations
  currentlyWorkingOn?: string; // Current projects/learning
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

// Config type for experience data (matches the structure in experience.ts)
export interface ExperienceConfig {
  id: string;
  title: string; // Maps to role
  company: string;
  date: string; // Maps to period
  location?: {
    city?: string;
    country?: string;
  };
  type?: string;
  status?: string;
  description: string; // Single string
  highlights?: string[];
  technologies?: string[]; // Maps to skills
  logo?: string;
}

export type ColorScheme = 'brand' | 'mono' | 'minimal';

// Normalized schema for both work experience and projects
export interface WorkItem {
  id: string;
  title: string; // Project name or Position
  url?: string; // Link for the title (demo, company website, etc.)
  role: string; // "Founder & Developer (Web - React...)" or company name
  date: string; // "2024 04 - ongoing"
  description: string; // Main paragraph
  technicalDetails: string[]; // Bullet points of achievements/details
  technologies?: Technology[]; // Tech stack for rendering badges
  images?: string[]; // Gallery images
}