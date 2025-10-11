import Image from "next/image"
import TechBadge from "./TechBadge"
import { GraduationCap, MapPin, Calendar } from "lucide-react"
import type { Technology } from "../types"

interface EducationCardProps {
  education: {
    id: string
    degree: string
    institution: string
    location: {
      city: string
      country: string
    }
    period: string
    status: string
    gpa?: string
    description: string
    highlights: string[]
    coursework?: string[]
    activities?: string[]
    technologies: string[]
    logo?: string
  }
  index: number
  isLast?: boolean
}

export default function EducationCard({ education, index, isLast }: EducationCardProps) {
  const { degree, institution, period, location, description, highlights, coursework, activities, technologies, logo } = education

  return (
    <div className="relative flex gap-8 group">
      {/* Timeline with Number */}
      <div className="relative flex flex-col items-center flex-shrink-0">
        {/* Number Badge */}
        <div className="relative z-10 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
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
                  alt={`${institution} logo`}
                  width={36}
                  height={36}
                  className="rounded-md"
                />
              </div>
            )}

            {/* Title & Meta */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 text-lg mb-1">
                {degree}
              </h3>
              <p className="text-gray-700 font-semibold text-sm">
                {institution}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {location.city}, {location.country}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed mb-4">{description}</p>

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <ul className="space-y-2 mb-4">
              {highlights.map((item, i) => (
                <li key={i} className="text-gray-700 text-sm flex items-start leading-relaxed">
                  <span className="text-gray-400 mr-2 mt-1 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Coursework */}
          {(coursework && coursework.length > 0) && (
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded-full border border-gray-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Activities */}
          {(activities && activities.length > 0) && (
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Activities & Leadership</h4>
              <ul className="space-y-1">
                {activities.map((activity, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start">
                    <span className="text-gray-400 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="pt-4 border-t border-gray-100">
            <h4 className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Technologies Used</h4>
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tech) => (
                <TechBadge
                  key={tech}
                  tech={tech as Technology}
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
