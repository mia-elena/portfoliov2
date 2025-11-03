import Link from "next/link"
import type { Technology } from "../types"

interface Metric {
  value: string
  label: string
}

interface ExperienceCardProps {
  experience: {
    id: string
    role: string
    company: string
    period: string
    logo?: string
    highlights: string[]
    skills: string[]
    metrics?: Metric[]
    location: {
      city: string
      country: string
    }
  }
  isFirst?: boolean
  isLast?: boolean
  isCurrent?: boolean
}

export default function ExperienceCard({ experience, isFirst, isLast, isCurrent }: ExperienceCardProps) {
  const { role, company, period, highlights, skills, location } = experience

  return (
    <div className="group relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-8 pb-12 transition-all">
      {/* Date Column */}
      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide pt-1">
        {period}
      </div>

      {/* Content Column */}
      <div className="space-y-3">
        {/* Title & Company */}
        <div>
          <h3 className="text-gray-900 font-semibold text-base group-hover:text-gray-700 transition-colors">
            {role} · {company}
          </h3>
        </div>

        {/* Description */}
        <div className="text-gray-600 text-sm leading-relaxed space-y-2">
          {highlights.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full capitalize"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
