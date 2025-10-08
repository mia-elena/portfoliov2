import Image from "next/image"
import TechBadge from "./TechBadge"
import { Building, MapPin, ChevronRight } from "lucide-react"
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
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { role, company, period, logo, highlights, skills, metrics, location } = experience

  return (
    <article className="group relative rounded-sm overflow-hidden">
      <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-gray-50 via-white to-gray-50 shadow-md group-hover:shadow-lg transition-all duration-300"></div>
      <div className="relative z-10 flex flex-col h-full">
      <header className="p-6 pb-4">
        <div className="flex items-start gap-5">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="relative flex-shrink-0 p-3 bg-white rounded-lg shadow-sm border border-gray-100 group-hover:border-gray-200 transition-all duration-300">
              {logo ? (
                <Image
                  src={logo}
                  alt={`${company} logo`}
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              ) : (
                <Building className="w-5 h-5 text-gray-500" />
              )}
            </div>
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-lg group-hover:text-gray-700 transition-colors">{role}</h3>
            <p className="text-gray-700 font-medium text-sm mt-1">
              {company} • {period}
            </p>
            <p className="text-gray-600 text-sm flex items-center gap-1 mt-1">
              <MapPin className="w-3.5 h-3.5" />
              {location.city}, {location.country}
            </p>
          </div>
        </div>
      </header>

      <div className="px-6 pb-4">
        <ul className="space-y-2">
          {highlights.map((item, i) => (
            <li key={i} className="text-gray-700 text-sm flex items-start leading-relaxed">
              <span className="text-gray-400 mr-2 mt-1 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {metrics && metrics.length > 0 && (
        <div className="px-6 pb-4">
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

      <div className="mt-auto pt-4 px-6 pb-6 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200">
        <h4 className="text-xs font-medium text-gray-600 mb-3 flex items-center">
          <span className="inline-block w-8 h-px bg-gray-300 mr-2"></span>
          Technologies Used
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <TechBadge
              key={skill}
              tech={skill as Technology}
              size="sm"
              showLabel={true}
              showbg={true}
              showIcon={false}
              className="transition-all hover:shadow-sm hover:scale-105"
            />
          ))}
        </div>
      </div>
      </div>
    </article>
  )
}
