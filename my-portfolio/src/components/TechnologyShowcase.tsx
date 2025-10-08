"use client"

import { useState } from "react"
import TechBadge from "./TechBadge"
import ColorSchemeToggle from "./ColorSchemeToggle"
import { Code, Database, Settings } from "lucide-react"
import type { Technology, ColorScheme } from "../types"

const categories = {
  frontend: {
    title: "Frontend",
    icon: Code,
  },
  backend: {
    title: "Backend & Data",
    icon: Database,
  },
  infra: {
    title: "DevOps & Tools",
    icon: Settings,
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
    <div className="space-y-6">
      <div className="flex justify-center">
        <ColorSchemeToggle currentScheme={colorScheme} onChange={setColorScheme} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(techCategories).map(([categoryKey, technologies]) => {
          const category = categories[categoryKey as keyof typeof categories]
          const CategoryIcon = category.icon

          return (
            <div
              key={categoryKey}
              className="relative rounded-lg overflow-hidden bg-white border border-gray-200"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50"></div>

              <div className="relative p-6 z-10">
                <div className="flex items-center gap-2 mb-4">
                  <CategoryIcon className="w-4 h-4 text-gray-700" />
                  <h3 className="text-sm font-semibold text-gray-900">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech: Technology) => (
                    <TechBadge
                      key={tech}
                      tech={tech}
                      colorScheme={colorScheme}
                      size="sm"
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
