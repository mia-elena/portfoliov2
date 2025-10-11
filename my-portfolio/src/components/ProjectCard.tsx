'use client'

import { useState } from "react"
import type { Project } from "../types"
import Link from "next/link"
import Image from "next/image"
import TechBadge from "./TechBadge"
import StatusBadge from "./StatusBadge"
import { Calendar, Github, Clock, ExternalLink, ChevronDown } from "lucide-react"

interface ProjectCardProps {
  project: Project
  className?: string
  variant?: "grid"
}

function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

  if (diffInDays === 0) return 'Today'
  if (diffInDays === 1) return 'Yesterday'
  if (diffInDays < 7) return `${diffInDays} days ago`
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`
  return `${Math.floor(diffInDays / 365)} years ago`
}

export default function ProjectCard({
  project,
  className = "",
  variant = "grid"
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const maxDescriptionLength = 120
  const showReadMore = project.description.length > maxDescriptionLength
  const truncatedDescription = project.description.length > maxDescriptionLength
    ? project.description.substring(0, maxDescriptionLength) + "..."
    : project.description

  return (
    <article className={`group relative h-full flex flex-col rounded-md overflow-hidden bg-white ${className}`}>
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-gray-100 to-gray-50 shadow-md group-hover:shadow-lg transition-all duration-300"></div>

      <div className="relative flex flex-col h-full z-10">
        {project.image && (
          <div className="relative w-full aspect-[16/9] flex-shrink-0 overflow-hidden bg-white/20 border border-gray-200/40 rounded-md transition-all duration-300 group-hover:border-gray-400 group-hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
            <Image
              src={project.image}
              alt={`${project.title} screenshothttp://localhost:3000/`}
              fill
              className="object-cover object-center rounded-md transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={project.meta?.isFeatured}
            />
            {!project.meta?.isFeatured && (
              <div className="absolute top-3 right-3 z-20 flex flex-col gap-2 items-end">
                {project.status && (
                  <StatusBadge status={project.status} size="sm" />
                )}
                {project.meta?.isWIP && !project.status && (
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 shadow-sm">
                    In Progress
                  </span>
                )}
              </div>
            )}
            <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
              {project.links?.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/90 text-gray-800 hover:bg-white hover:text-black transition-colors shadow-sm"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <Github className="w-4 h-4" />
                </Link>
              )}
              {project.links?.demo && (
                <Link
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/90 text-gray-800 hover:bg-white hover:text-black transition-colors shadow-sm"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        )}

        <div className="p-5 flex-1 flex flex-col">
          <div className="mb-3">
            {project.projectType && (
              <span className="text-xs uppercase tracking-wide text-gray-600 font-semibold mb-1.5 block">
                {project.projectType}
              </span>
            )}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors leading-tight">
                {project.links?.github ? (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline decoration-2 underline-offset-2 transition-all"
                  >
                    {project.shortTitle || project.title}
                  </Link>
                ) : (
                  <span>{project.shortTitle || project.title}</span>
                )}
              </h3>
            </div>

            <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                <span>{project.date}</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 text-sm leading-relaxed flex-grow">
              {isExpanded ? project.description : truncatedDescription}
            </p>
            {showReadMore && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900 mt-2 transition-colors"
              >
                <span>{isExpanded ? 'Read less' : 'Read more'}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.meta?.isOpenSource && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium border border-gray-200">Open Source</span>
            )}
            {project.meta?.isTeamProject && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium border border-gray-200">
                Team Project
              </span>
            )}
            {project.meta?.isAI && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium border border-gray-200">AI Enhanced</span>
            )}
            {project.meta?.isDataScience && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium border border-gray-200">
                Data Science
              </span>
            )}
          </div>

          <div className="mt-auto pt-4 border-t border-gray-100">
            <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Technologies</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <TechBadge
                  key={tech}
                  tech={tech}
                  size="sm"
                  showLabel={true}
                  showbg={true}
                  showIcon={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}