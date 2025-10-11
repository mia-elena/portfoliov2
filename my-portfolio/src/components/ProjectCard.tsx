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
      <div className="relative flex flex-col h-full">
        {project.image && (
          <div className="relative w-full aspect-[4/3] flex-shrink-0 overflow-hidden bg-white/20 rounded-sm transition-all duration-300 group-hover:scale-[1.01]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
            <Image
              src={project.image}
              alt={`${project.title} screenshothttp://localhost:3000/`}
              fill
              className="object-cover object-center rounded-sm transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={project.meta?.isFeatured}
            />

            {/* Top-left: Featured/Status badge */}
            {project.meta?.isFeatured && (
              <div className="absolute top-3 left-3 z-20">
                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-gray-900 backdrop-blur-sm">
                  Featured
                </span>
              </div>
            )}

            {/* Top-right: GitHub icon link */}
            {project.links?.github && (
              <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github className="w-4 h-4 text-gray-900" />
                </Link>
              </div>
            )}
          </div>
        )}

        <div className="pt-4 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">
            {project.links?.github ? (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 transition-colors"
              >
                {project.shortTitle || project.title}
              </Link>
            ) : (
              <span>{project.shortTitle || project.title}</span>
            )}
          </h3>

          {/* Airbnb-style subtext: Project type • Date */}
          <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
            {project.projectType && <span>{project.projectType}</span>}
            {project.projectType && project.date && <span>•</span>}
            {project.date && <span>{project.date}</span>}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            {truncatedDescription}
          </p>

          <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="text-xs text-gray-500">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-xs text-gray-500">+{project.technologies.length - 4}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}