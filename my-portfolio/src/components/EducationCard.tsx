import Image from "next/image"
import TechBadge from "./TechBadge"
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react"
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
}

export default function EducationCard({ education }: EducationCardProps) {
  const { degree, institution, period, location, gpa, description, highlights, coursework, activities, technologies, logo } = education

  return (
    <article className="group relative rounded-md overflow-hidden bg-white transition-all duration-300">
      <div className="relative flex flex-col h-full">
        <header className="p-6 pb-4">
          <div className="flex items-start gap-5">
            <div className="relative">
              <div className="relative flex-shrink-0 p-3 bg-gray-50 rounded-md transition-all duration-300">
                {logo ? (
                  <Image
                    src={logo}
                    alt={`${institution} logo`}
                    width={40}
                    height={40}
                    className="rounded-md"
                    aria-hidden="true"
                  />
                ) : (
                  <GraduationCap className="w-5 h-5 text-gray-500" />
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-2">
              <div>
                <h3 className="font-bold text-gray-900 text-xl group-hover:text-gray-700 transition-colors">{degree}</h3>
                <p className="text-gray-700 font-medium mt-1">
                  {institution}
                </p>
              </div>
              <div className="text-left sm:text-right flex flex-col items-start sm:items-end mt-1 sm:mt-0">
                <p className="text-gray-600 text-sm flex items-center gap-1.5 mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {period}
                </p>
                <p className="text-gray-600 text-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {location.city}, {location.country}
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 pb-4">
          <p className="text-gray-700 text-sm leading-relaxed mb-4">{description}</p>
          
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
        </div>

        {(coursework && coursework.length > 0) && (
          <div className="px-6 pb-4">
            <h4 className="text-sm font-medium text-gray-600 mb-3 flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Relevant Coursework
            </h4>
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

        {(activities && activities.length > 0) && (
          <div className="px-6 pb-4">
            <h4 className="text-sm font-medium text-gray-600 mb-3">Activities & Leadership</h4>
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

        <div className="mt-auto pt-4 px-6 pb-6 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200">
          <h4 className="text-xs font-medium text-gray-600 mb-3 flex items-center">
            <span className="inline-block w-8 h-px bg-gray-300 mr-2"></span>
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <TechBadge
                key={tech}
                tech={tech as Technology}
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