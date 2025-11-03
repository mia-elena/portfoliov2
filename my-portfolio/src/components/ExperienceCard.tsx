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
  isFirst?: boolean
  isLast?: boolean
  isCurrent?: boolean
}

export default function ExperienceCard({ experience, isFirst, isLast, isCurrent }: ExperienceCardProps) {
  const { role, company, period, logo, highlights, skills, metrics, location } = experience

  return (
    <div className="relative flex gap-6 md:gap-8 group">
      {/* Timeline Line & Node */}
      <div className="relative flex flex-col items-center">
        {/* Top Line */}
        {!isFirst && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gray-300"></div>
        )}

        {/* Node */}
        <div className="relative z-10 mt-6">
          {isCurrent ? (
            // Current role: Filled gray circle
            <div className="w-4 h-4 bg-gray-900 rounded-full border-4 border-white group-hover:scale-110 transition-transform"></div>
          ) : (
            // Past roles: Outlined gray circle
            <div className="w-4 h-4 bg-white rounded-full border-3 border-gray-300 group-hover:border-gray-400 group-hover:scale-110 transition-all" style={{ borderWidth: '3px' }}></div>
          )}
        </div>

        {/* Bottom Line */}
        {!isLast && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300" style={{ top: '40px' }}></div>
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-8">
        <article className="relative rounded-md overflow-hidden bg-white transition-all duration-300">
          <div className="p-5 md:p-6">
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              {/* Logo */}
              <div className="relative flex-shrink-0">
                <div className="p-2.5 bg-gray-50 rounded-md border border-gray-200 group-hover:border-gray-300 transition-all duration-300">
                  {logo ? (
                    <Image
                      src={logo}
                      alt={`${company} logo`}
                      width={36}
                      height={36}
                      className="rounded-md"
                    />
                  ) : (
                    <Building className="w-9 h-9 text-gray-400" />
                  )}
                </div>
              </div>

              {/* Title & Meta */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">
                  {role}
                </h3>
                <p className="text-gray-700 font-medium text-sm">
                  {company}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-gray-500">
                  <span>{period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {location.city}, {location.country}
                  </span>
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
                    <div key={i} className="p-3 text-center bg-gray-50 rounded-md">
                      <p className="text-lg font-bold text-gray-900">{metric.value}</p>
                      <p className="text-xs text-gray-600 mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="pt-4">
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
        </article>
      </div>
    </div>
  )
}
