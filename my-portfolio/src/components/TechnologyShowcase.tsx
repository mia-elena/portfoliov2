"use client"

import { useState } from "react"
import TechBadge from "./TechBadge"
import ColorSchemeToggle from "./ColorSchemeToggle"
import { Code, Database, Settings } from "lucide-react"
import type { Technology, ColorScheme } from "../types"

const categories = {
  frontend: {
    title: "Frontend Development",
    description: "Modern tools and frameworks I use to build user interfaces",
    icon: Code,
    gradient: "from-gray-50 to-slate-50",
    iconGradient: "from-gray-600 to-slate-700",
    borderHover: "group-hover:border-gray-300",
    iconColor: "text-gray-600",
  },
  backend: {
    title: "Backend & Data",
    description: "Technologies I work with for server-side development",
    icon: Database,
    gradient: "from-gray-50 to-neutral-50",
    iconGradient: "from-gray-600 to-neutral-700",
    borderHover: "group-hover:border-gray-300",
    iconColor: "text-gray-600",
  },
  infra: {
    title: "DevOps & Infrastructure",
    description: "DevOps and infrastructure tools I leverage for deployment",
    icon: Settings,
    gradient: "from-gray-50 to-stone-50",
    iconGradient: "from-gray-600 to-stone-700",
    borderHover: "group-hover:border-gray-300",
    iconColor: "text-gray-600",
  },
}

interface TechnologyCategories {
  frontend: Technology[]
  backend: Technology[]
  infra: Technology[]
}

export default function TechnologyShowcase() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("mono")

  const techCategories: TechnologyCategories = {
    frontend: ["typescript", "react", "nextjs", "tailwindcss", "figma", "jest", "bootstrap", "swift"],
    backend: ["nodejs", "express", "supabase", "postgresql", "python", "firebase", "mongodb", "cpp", "django"],
    infra: ["git", "github", "vercel", "netlify", "docker", "awslambda", "railway"],
  } 

  return (
    <div className="space-y-8">
      <div className="flex justify-center mb-8">
        <div className="bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-gray-200">
          <ColorSchemeToggle currentScheme={colorScheme} onChange={setColorScheme} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(techCategories).map(([categoryKey, technologies]) => {
          const category = categories[categoryKey as keyof typeof categories]
          const CategoryIcon = category.icon

          return (
            <div
              key={categoryKey}
              className="group relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 hover:border-gray-300"
            >
              {/* Subtle background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col bg-white/70 backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className={`flex-shrink-0 p-3 rounded-md bg-white/90 shadow-sm border border-gray-200 ${category.borderHover} transition-all duration-300`}
                  >
                    <CategoryIcon className={`w-5 h-5 ${category.iconColor}`} />
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{category.title}</h2>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{category.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-200/60">
                  {technologies.map((tech: Technology) => (
                    <TechBadge
                      key={tech}
                      tech={tech}
                      colorScheme={colorScheme}
                      size="sm"
                      className="hover:scale-105 hover:shadow-sm transition-all duration-200"
                    />
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Optional: Add a subtle note about the color schemes */}
      <div className="text-center mt-8">
        <p className="text-xs text-gray-500">
          Switch between color schemes to see different visual styles
        </p>
      </div>
    </div>
  )
}
