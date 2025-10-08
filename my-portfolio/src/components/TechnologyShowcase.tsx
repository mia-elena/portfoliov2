"use client"

import { useState } from "react"
import TechBadge from "./TechBadge"
import ColorSchemeToggle from "./ColorSchemeToggle"
import { Code, Database, Settings } from "lucide-react"
import type { Technology, ColorScheme } from "../types"

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

  const categoryConfig = {
    frontend: {
      label: "Frontend",
      icon: Code,
    },
    backend: {
      label: "Backend & Data",
      icon: Database,
    },
    infra: {
      label: "DevOps & Tools",
      icon: Settings,
    },
  }

  return (
    <div className="space-y-5">
      <div className="flex justify-center">
        <ColorSchemeToggle currentScheme={colorScheme} onChange={setColorScheme} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(techCategories).map(([categoryKey, technologies]) => {
          const config = categoryConfig[categoryKey as keyof typeof categoryConfig]
          const Icon = config.icon

          return (
            <div
              key={categoryKey}
              className="group relative rounded-md overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>

              <div className="relative z-10 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-gray-900 rounded-md group-hover:bg-gray-800 transition-colors">
                    <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                    {config.label}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {technologies.map((tech: Technology) => (
                    <TechBadge
                      key={tech}
                      tech={tech}
                      colorScheme={colorScheme}
                      size="sm"
                      className="transition-all hover:scale-110 hover:shadow-sm"
                    />
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
