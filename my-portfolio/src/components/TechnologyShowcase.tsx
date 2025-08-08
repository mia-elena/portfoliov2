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
    <div className="space-y-10">
      {/* Enhanced toggle container */}
      <div className="flex justify-center mb-10">
        <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg shadow-gray-200/50 border border-gray-200/80 ring-1 ring-gray-200/20">
          <ColorSchemeToggle currentScheme={colorScheme} onChange={setColorScheme} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(techCategories).map(([categoryKey, technologies], index) => {
          const category = categories[categoryKey as keyof typeof categories]
          const CategoryIcon = category.icon

          return (
            <div
              key={categoryKey}
              className="group relative rounded-xl overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-gray-200/60 border border-gray-200/80 hover:border-gray-300/80 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Enhanced background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
              ></div>

              {/* Subtle noise texture overlay */}
              <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(circle_at_50%_120%,rgba(120,120,120,0.3),transparent_50%)]"></div>

              {/* Content */}
              <div className="relative z-10 p-7 h-full flex flex-col bg-white/80 backdrop-blur-md">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`flex-shrink-0 p-3.5 rounded-xl bg-white/95 shadow-md shadow-gray-200/50 border border-gray-200/60 ${category.borderHover} transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gray-200/60`}
                  >
                    <CategoryIcon className={`w-5 h-5 ${category.iconColor}`} />
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 tracking-tight">{category.title}</h2>
                    <p className="text-sm text-gray-600 mt-1.5 leading-relaxed font-medium">{category.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 mt-auto pt-5 border-t border-gray-200/70">
                  {technologies.map((tech: Technology, techIndex: number) => (
                    <TechBadge
                      key={tech}
                      tech={tech}
                      colorScheme={colorScheme}
                      size="sm"
                      className="hover:scale-110 hover:shadow-md hover:shadow-gray-200/60 transition-all duration-300 ease-out"
                    />
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Enhanced footer note */}
      <div className="text-center mt-12">
        <p className="text-sm text-gray-500 font-medium tracking-wide">
          Switch between color schemes to explore different visual styles
        </p>
      </div>
    </div>
  )
}
