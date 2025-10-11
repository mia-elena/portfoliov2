import Image from "next/image"
import TechBadge from "./TechBadge"
import { Building, MapPin } from "lucide-react"
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
  index: number
  isLast?: boolean
  isCurrent?: boolean
}

export default function ExperienceCard({ experience, index, isLast, isCurrent }: ExperienceCardProps) {
  const { role, company, period, logo, highlights, skills, metrics, location } = experience

  return (
    <div className="relative flex gap-8 group">
      {/* Timeline with Number */}
      <div className="relative flex flex-col items-center flex-shrink-0">
        {/* Number Badge */}
        <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
          isCurrent
            ? 'bg-[#57AE5B] text-white shadow-sm'
            : 'bg-gray-900 text-white'
        }`}>
          {index + 1}
        </div>

        {/* Connecting Line */}
        {!isLast && (
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="bg-white border border-gray-200 rounded-md p-6 hover:border-gray-300 transition-colors">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            {/* Logo */}
            {logo && (
              <div className="flex-shrink-0 p-2.5 bg-gray-50 rounded-md border border-gray-200">
                <Image
                  src={logo}
                  alt={`${company} logo`}
                  width={36}
                  height={36}
                  className="rounded-md"
                />
              </div>
            )}

            {/* Title & Meta */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 text-lg mb-1">
                {role}
              </h3>
              <p className="text-gray-700 font-semibold text-sm">
                {company}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-500">
                <span>{period}</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {location.city}, {location.country}
                </span>
                {isCurrent && (
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Current
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <ul className="space-y-2 mb-4">
            {highlights.map((item, i) => (
              <li key={i} className="text-gray-600 text-sm flex items-start leading-relaxed">
                <span className="text-gray-400 mr-2.5 mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Metrics (if provided) */}
          {metrics && metrics.length > 0 && (
            <div className="mb-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {metrics.map((metric, i) => (
                  <div key={i} className="p-3 text-center bg-gray-50 border border-gray-200 rounded-md">
                    <p className="text-lg font-bold text-gray-900">{metric.value}</p>
                    <p className="text-xs text-gray-600 mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <TechBadge
                  key={skill}
                  tech={skill as Technology}
                  size="sm"
                  showLabel={true}
                  showbg={true}
                  showIcon={false}
                  className="transition-all"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
