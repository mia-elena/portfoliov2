'use client'

import { useState } from "react"
import type { Project } from "../types"
import Link from "next/link"
import Image from "next/image"
import { Github } from "lucide-react"

interface ProjectCardProps {
  project: Project
  className?: string
  variant?: "grid"
}

export default function ProjectCard({
  project,
  className = "",
  variant = "grid"
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const maxDescriptionLength = 120
  const showReadMore = project.description.length > maxDescriptionLength

  // Prefer demo link if available, otherwise use GitHub
  const projectLink = project.links?.demo || project.links?.github
  const hasValidLink = !!projectLink

  const cardContent = (
    <>
      {project.image && (
        <div className="relative w-full aspect-[4/3] flex-shrink-0 overflow-hidden rounded-xl mb-3">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={project.meta?.isFeatured}
          />

          {/* Featured badge */}
          {project.meta?.isFeatured && (
            <div className="absolute top-3 left-3 z-20">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white text-gray-900 shadow-sm">
                Featured
              </span>
            </div>
          )}
        </div>
      )}

      <div className="flex-1 flex flex-col">
        {/* Title */}
        <h3 className={`text-base font-semibold text-gray-900 mb-1 ${hasValidLink ? 'group-hover:underline' : ''}`}>
          {project.shortTitle || project.title}
        </h3>

        {/* Project type · Date */}
        <div className="flex items-center gap-1.5 mb-2 text-xs text-gray-600">
          {project.projectType && <span className="capitalize">{project.projectType}</span>}
          {project.projectType && project.date && <span>·</span>}
          {project.date && <span>{project.date}</span>}
        </div>

        {/* Description */}
        <p className={`text-gray-600 text-sm leading-relaxed mb-2 ${isExpanded ? '' : 'line-clamp-2'}`}>
          {project.description}
        </p>

        {showReadMore && (
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsExpanded(!isExpanded)
            }}
            className="text-sm text-gray-900 hover:text-gray-600 underline transition-colors mb-2 text-left font-medium"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}

        {/* Tech stack */}
        <div className={showReadMore && !isExpanded ? "mt-auto pt-2" : "mt-auto"}>
          <p className="text-xs text-gray-500">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span key={tech} className="capitalize">
                {tech}
                {i < Math.min(project.technologies.length, 3) - 1 && " · "}
              </span>
            ))}
            {project.technologies.length > 3 && ` +${project.technologies.length - 3}`}
          </p>
        </div>
      </div>
    </>
  )

  return (
    <article className={`group relative h-full flex flex-col ${hasValidLink ? 'cursor-pointer' : ''} ${className}`}>
      {hasValidLink ? (
        <Link
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex flex-col h-full"
        >
          {cardContent}
        </Link>
      ) : (
        <div className="relative flex flex-col h-full">
          {cardContent}
        </div>
      )}
    </article>
  )
}