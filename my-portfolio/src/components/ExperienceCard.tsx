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
    <article className="relative rounded-xl overflow-hidden bg-white">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 shadow-md"></div>
      <div className="relative p-6 z-10">
      <header className="mb-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-2 bg-gray-100 rounded-md border border-gray-200">
            {logo ? (
              <Image
                src={logo}
                alt={`${company} logo`}
                width={40}
                height={40}
                className="rounded"
              />
            ) : (
              <Building className="w-5 h-5 text-gray-700" />
            )}
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-base">{role}</h3>
            <p className="text-gray-700 text-sm mt-1">
              {company} • {period}
            </p>
            <p className="text-gray-600 text-sm flex items-center gap-1 mt-1">
              <MapPin className="w-3.5 h-3.5" />
              {location.city}, {location.country}
            </p>
          </div>
        </div>
      </header>

      <div className="mb-4">
        <ul className="space-y-2">
          {highlights.map((item, i) => (
            <li key={i} className="text-gray-700 text-sm flex items-start leading-relaxed">
              <span className="text-gray-400 mr-2 mt-1 flex-shrink-0">
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

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

      <div className="pt-4 border-t border-gray-200">
        <h4 className="text-xs font-medium text-gray-700 mb-3">Technologies Used</h4>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <TechBadge
              key={skill}
              tech={skill as Technology}
              size="sm"
              showLabel={true}
              showbg={true}
              showIcon={false}
            />
          ))}
        </div>
      </div>
      </div>
    </article>
  )
}
