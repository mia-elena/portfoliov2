'use client';
import { useState } from "react";
import { IconType } from 'react-icons';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiPrisma,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiDocker,
  SiAwslambda,
  SiPython,
  SiSupabase,
  SiSwift,
  SiJest,
  SiPytest,
  SiCplusplus,
  SiRailway,
  SiBootstrap,
  SiFastapi,
  SiStreamlit,
  SiScikitlearn,
  SiPandas,
  SiPlotly,
  SiNumpy,
  SiDjango,
  SiMysql,
  SiOpenapiinitiative,
  SiGooglecloud
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';
import { Technology } from '../types';

// ===================================
// 1. TYPE DEFINITIONS
// ===================================
type ColorScheme = 'brand' | 'mono' | 'minimal';

interface TechBadgeProps {
  tech: Technology;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  showLabel?: boolean;
  showbg?: boolean;
  showIcon?: boolean;
  className?: string;
  colorScheme?: ColorScheme;
}

interface ColorSchemeToggleProps {
  currentScheme: ColorScheme;
  onChange: (scheme: ColorScheme) => void;
  className?: string;
}

// ===================================
// 2. COLOR SCHEMES DATA
// ===================================

// Notion-inspired monochromatic color mapping for different tech categories
const monoColorScheme = {
  // Languages & Core Technologies
  primary: "bg-gray-100 text-gray-800 border border-gray-200 shadow-sm",
  // Frontend & UI
  frontend: "bg-gray-50 text-gray-800 border border-gray-200 shadow-sm",
  // Backend & Database
  backend: "bg-white text-gray-800 border border-gray-200 shadow-sm",
  // Infrastructure & DevOps
  infra: "bg-gray-100 text-gray-700 border border-gray-200 shadow-sm",
};

// Modern minimalist color scheme for tech categories
const minimalColorScheme = {
  // Languages & Core Technologies
  primary: "bg-indigo-50 text-indigo-900 border border-indigo-200",
  // Frontend & UI
  frontend: "bg-blue-50 text-blue-900 border border-blue-200",
  // Backend & Database
  backend: "bg-emerald-50 text-emerald-900 border border-emerald-200",
  // Infrastructure & DevOps
  infra: "bg-amber-50 text-amber-900 border border-amber-200",
};

// ===================================
// 3. TECHNOLOGY DATA
// ===================================

// Technology category mapping for monochromatic and minimal schemes
const techCategories: Record<Technology, keyof typeof monoColorScheme> = {
  // Primary Technologies (Languages)
  typescript: "primary",
  javascript: "primary",
  python: "primary",
  cpp: "primary",
  
  // Frontend Technologies
  html: "frontend",
  css: "frontend",
  react: "frontend",
  nextjs: "frontend",
  tailwindcss: "frontend",
  redux: "frontend",
  figma: "frontend",
  swift: "frontend",
  jest: "frontend",
  pytest: "backend",
  bootstrap: "frontend",
  plotly: "frontend",

  // Backend Technologies
  nodejs: "backend",
  express: "backend",
  graphql: "backend",
  prisma: "backend",
  postgresql: "backend",
  mongodb: "backend",
  firebase: "backend",
  supabase: "backend",
  fastapi: "backend",
  streamlit: "backend",
  "scikit-learn": "backend",
  pandas: "backend",
  numpy: "backend",
  django: "backend",
  java: "primary",
  mysql: "backend",
  openai: "backend",
  langchain: "backend",
  
  // Infrastructure Technologies
  git: "infra",
  github: "infra",
  vercel: "infra",
  netlify: "infra",
  docker: "infra",
  awslambda: "infra",
  railway: "infra",
  aws: "infra",
  gcp: "infra",
};

// Original brand color tech data
const brandTechData = {
  // Languages
  typescript: {
    icon: SiTypescript,
    color: "bg-blue-500 text-white",
    label: "TypeScript",
  },
  javascript: {
    icon: SiJavascript,
    color: "bg-[#f7df1e] text-black",
    label: "JavaScript",
  },
  python: {
    icon: SiPython,
    color: "bg-[#3776ab] text-[#ffd43b]",
    label: "Python",
  },
  cpp: {
    icon: SiCplusplus,
    color: "bg-[#00599c] text-white",
    label: "C++",
  },
  
  // Frontend
  html: {
    icon: SiHtml5,
    color: "bg-[#e34f26] text-white",
    label: "HTML5",
  },
  css: {
    icon: SiCss3,
    color: "bg-[#1572b6] text-white",
    label: "CSS3",
  },
  react: {
    icon: SiReact,
    color: "bg-[#61dafb] text-black",
    label: "React",
  },
  nextjs: {
    icon: SiNextdotjs,
    color: "bg-black text-white",
    label: "Next.js",
  },
  tailwindcss: {
    icon: SiTailwindcss,
    color: "bg-[#06b6d4] text-white",
    label: "Tailwind CSS",
  },
  redux: {
    icon: SiRedux,
    color: "bg-[#764abc] text-white",
    label: "Redux",
  },
  figma: {
    icon: SiFigma,
    color: "bg-[#f24e1e] text-white",
    label: "Figma",
  },
  swift: {
    icon: SiSwift,
    color: "bg-[#f05138] text-white",
    label: "Swift",
  },
  jest: {
    icon: SiJest,
    color: "bg-[#c21325] text-white",
    label: "Jest",
  },
  pytest: {
    icon: SiPytest,
    color: "bg-[#0a9edc] text-white",
    label: "Pytest",
  },
  bootstrap: {
    icon: SiBootstrap,
    color: "bg-[#563d7c] text-white",
    label: "Bootstrap",
  },
  
  // Backend & Data
  nodejs: {
    icon: SiNodedotjs,
    color: "bg-[#339933] text-white",
    label: "Node.js",
  },
  express: {
    icon: SiExpress,
    color: "bg-[#000000] text-white",
    label: "Express.js",
  },
  graphql: {
    icon: SiGraphql,
    color: "bg-[#e10098] text-white",
    label: "GraphQL",
  },
  prisma: {
    icon: SiPrisma,
    color: "bg-[#2d3748] text-white",
    label: "Prisma",
  },
  postgresql: {
    icon: SiPostgresql,
    color: "bg-[#336791] text-white",
    label: "PostgreSQL",
  },
  mongodb: {
    icon: SiMongodb,
    color: "bg-[#47a248] text-white",
    label: "MongoDB",
  },
  firebase: {
    icon: SiFirebase,
    color: "bg-[#ffca28] text-[#f57c00]",
    label: "Firebase",
  },
  supabase: {
    icon: SiSupabase,
    color: "bg-[#3ecf8e] text-white",
    label: "Supabase",
  },
  fastapi: {
  icon: SiFastapi,
  color: "bg-[#009688] text-white",
  label: "FastAPI",
  },
  django: {
    icon: SiDjango,
    color: "bg-[#092e20] text-white",
    label: "Django",
  },
  
  // Infrastructure
  git: {
    icon: SiGit,
    color: "bg-[#f05032] text-white",
    label: "Git",
  },
  github: {
    icon: SiGithub,
    color: "bg-[#24292e] text-white",
    label: "GitHub",
  },
  vercel: {
    icon: SiVercel,
    color: "bg-black text-white",
    label: "Vercel",
  },
  netlify: {
    icon: SiNetlify,
    color: "bg-[#00c7b7] text-white",
    label: "Netlify",
  },
  docker: {
    icon: SiDocker,
    color: "bg-[#2496ed] text-white",
    label: "Docker",
  },
  awslambda: {
    icon: SiAwslambda,
    color: "bg-[#ff9900] text-black",
    label: "AWS Lambda",
  },
  railway: {
    icon: SiRailway,
    color: "bg-[#ff5c00] text-white",
    label: "Railway",
  },
  aws: {
    icon: FaAws,
    color: "bg-[#ff9900] text-black",
    label: "AWS",
  },
  gcp: {
    icon: SiGooglecloud,
    color: "bg-[#4285f4] text-white",
    label: "Google Cloud",
  },

  // Data Science & Analytics
  streamlit: {
    icon: SiStreamlit,
    color: "bg-[#ff4b4b] text-white",
    label: "Streamlit",
  },
  "scikit-learn": {
    icon: SiScikitlearn,
    color: "bg-[#f7931e] text-white", 
    label: "scikit-learn",
  },
  pandas: {
    icon: SiPandas,
    color: "bg-[#150458] text-white",
    label: "pandas",
  },
  numpy: {
    icon: SiNumpy,
    color: "bg-[#013243] text-[#4dabcf]",
    label: "NumPy",
  },
  plotly: {
    icon: SiPlotly,
    color: "bg-[#3f4f75] text-white",
    label: "Plotly",
  },
  
  // Additional Technologies
  java: {
    icon: FaJava,
    color: "bg-[#f89820] text-white",
    label: "Java",
  },
  mysql: {
    icon: SiMysql,
    color: "bg-[#4479a1] text-white",
    label: "MySQL",
  },
  openai: {
    icon: SiOpenapiinitiative,
    color: "bg-[#412991] text-white",
    label: "OpenAI",
  },
  langchain: {
    icon: SiOpenapiinitiative, // Using OpenAI icon as placeholder
    color: "bg-[#1c3c73] text-white",
    label: "LangChain",
  },
} satisfies Record<Technology, { icon: IconType; color?: string; label: string }>;

// ===================================
// 4. STYLE CONFIGURATIONS
// ===================================

// Size class configurations
const sizeClasses = {
  sm: "text-xs px-2 py-1 gap-1",
  md: "text-sm px-3 py-1.5 gap-1.5",
  lg: "text-base px-4 py-2 gap-2",
  xl: "text-lg px-5 py-2.5 gap-2.5",
  xxl: "text-xl px-2 py-3 gap-1"
};

// Icon size configurations
const iconSizes = {
  sm: "text-[1.2em]",
  md: "text-[1.4em]",
  lg: "text-[1.5em]",
  xl: "text-[1.6em]",
  xxl: "text-[2.5em]",
};

// ===================================
// 5. COMPONENTS
// ===================================

// Main TechBadge component
export default function TechBadge({
  tech,
  size = "md",
  showLabel = true,
  showbg = true,
  showIcon = true,
  className = "",
  colorScheme = 'mono', 
}: TechBadgeProps) {
  const techData = brandTechData[tech];
  
  // If technology is not found, provide fallback
  if (!techData) {
    console.warn(`Technology "${tech}" not found in brandTechData`);
    return (
      <span className={`inline-flex items-center font-medium transition-all rounded-md ${sizeClasses[size]} bg-gray-100 text-gray-800 border border-gray-200 ${className}`}>
        {showLabel && <span>{tech}</span>}
      </span>
    );
  }
  
  const { icon: Icon, label } = techData;
  
  // Determine which color scheme to use
  let color = brandTechData[tech].color; // Default to brand color
  
  if (colorScheme === 'mono') {
    color = monoColorScheme[techCategories[tech]];
  } else if (colorScheme === 'minimal') {
    color = minimalColorScheme[techCategories[tech]];
  }
  
  const roundedStyles = colorScheme === 'mono' 
    ? "rounded-lg" // More rounded for Notion-like feel
    : "rounded-md";

  // Base classes all badges will have
  const baseClasses = `inline-flex items-center font-medium transition-all ${roundedStyles} ${sizeClasses[size]} ${className}`;
  
  // Conditional color classes based on showbg prop
  const colorClasses = showbg 
    ? color 
    : "bg-transparent text-gray-700";

  // Icon color class
  let iconColorClass = "";
  if (!showbg) {
    if (colorScheme === 'mono') {
      iconColorClass = "text-gray-600"; // Notion-like icon color
    } else if (colorScheme === 'minimal') {
      iconColorClass = "text-slate-700";
    }
  }

  return (
    <span
      className={`${baseClasses} ${colorClasses} group relative`}
      role="img"
      aria-label={showLabel ? undefined : `${label} icon`}
    >
      {showIcon && 
        <span className={`flex-shrink-0 ${iconSizes[size]} ${iconColorClass}`}>
          <Icon aria-hidden="true" />
        </span>
      }
      {showLabel && <span>{label}</span>}
      
      {/* Tooltip - only show when label is hidden */}
      {!showLabel && (
        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
          {label}
        </span>
      )}
    </span>
  );
}



