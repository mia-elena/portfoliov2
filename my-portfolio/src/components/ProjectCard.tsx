'use client'

import { useState } from 'react'
import type { Project } from "../types"
import Link from "next/link"
import Image from "next/image"
import TechBadge from "./TechBadge"
import StatusBadge from "./StatusBadge"
import { ArrowUpRight, Calendar, Github, Star, Clock, MoreHorizontal, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  project: Project
  className?: string
  variant?: "compact" | "standard" | "detailed" | "grid"
  showFullDescription?: boolean
}

function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
}

export default function ProjectCard({ 
  project, 
  className = "", 
  variant = "standard",
  showFullDescription = false 
}: ProjectCardProps) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(showFullDescription)
  const [isTechExpanded, setIsTechExpanded] = useState(false)
  
  // Determine content based on variant
  const getDescription = () => {
    if (variant === "compact") {
      return project.shortDescription || project.description.substring(0, 80) + "...";
    }
    if (variant === "grid" && !isDescriptionExpanded) {
      return project.description.length > 120 
        ? project.description.substring(0, 120) + "..." 
        : project.description;
    }
    return project.description;
  };

  const getTechCount = () => {
    switch (variant) {
      case "compact": return 3;
      case "grid": return 4;
      default: return project.technologies.length;
    }
  };

  const shouldShowDescriptionToggle = () => {
    if (variant === "compact") return false;
    if (variant === "grid") return project.description.length > 120;
    return false;
  };

  const shouldShowTechToggle = () => {
    const maxTech = getTechCount();
    return project.technologies.length > maxTech && variant !== "standard";
  };

  const displayedTechnologies = isTechExpanded 
    ? project.technologies 
    : project.technologies.slice(0, getTechCount());

  const hiddenTechCount = project.technologies.length - getTechCount();

  const showImage = project.image && variant !== "compact"; // Show images for all variants except compact
  const imageHeight = variant === "detailed" ? "h-56 sm:h-64" : "h-48 sm:h-56"; // Responsive fixed heights

  return (
    <article className={`group relative h-full flex flex-col rounded-sm overflow-hidden bg-white ${className}`}>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 shadow-md group-hover:shadow-lg transition-all duration-300"></div>

      <div className="relative flex flex-col h-full z-10">
        {showImage && (
          <div className={`relative w-full aspect-[16/9] flex-shrink-0 overflow-hidden bg-white/20 border border-gray-200/40 rounded-xl transition-all duration-300 group-hover:border-gray-400 group-hover:scale-[1.02]`}>
            {/* Optional: subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title ? `Screenshot of ${project.title}` : "Project screenshot"}
              fill
              className="object-cover object-center rounded-xl transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={project.meta?.isFeatured}
            />
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

        <div className={`${variant === "compact" ? "p-4" : "p-5"} flex-1 flex flex-col`}>
          <div className={`${variant === "compact" ? "mb-2" : "mb-3"}`}>
            <div className="flex items-center justify-between">
              <h3 className={`${variant === "compact" ? "text-base" : "text-lg"} font-bold text-gray-900 group-hover:text-gray-700 transition-colors leading-tight`}>
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
            
            {variant !== "compact" && (
              <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>Created {project.date}</span>
                </div>
                
                {project.lastUpdated && (
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>Updated {formatRelativeDate(project.lastUpdated)}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Expandable Description */}
          <div className={`${variant === "compact" ? "mb-3" : "mb-4"}`}>
            <p className={`text-gray-700 ${variant === "compact" ? "text-xs" : "text-sm"} leading-relaxed flex-grow`}>
              {isDescriptionExpanded ? project.description : getDescription()}
            </p>
            
            {shouldShowDescriptionToggle() && (
              <button
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="mt-2 flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
              >
                {isDescriptionExpanded ? (
                  <>
                    <ChevronUp className="w-3 h-3" />
                    Show less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3 h-3" />
                    Read more
                  </>
                )}
              </button>
            )}
          </div>

          {variant !== "compact" && (
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
          )}

          {/* Expandable Technologies */}
          <div className={`mt-auto ${variant === "compact" ? "pt-2" : "pt-4"} border-t border-gray-100`}>
            <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Technologies</h4>
            <div className="flex flex-wrap gap-1.5">
              {displayedTechnologies.map((tech) => (
                <TechBadge 
                  key={tech} 
                  tech={tech} 
                  size={variant === "compact" ? "sm" : "sm"} 
                  showLabel={true} 
                  showbg={true} 
                  showIcon={false} 
                />
              ))}
              
              {/* Show More/Less Technologies Button */}
              {shouldShowTechToggle() && (
                <button
                  onClick={() => setIsTechExpanded(!isTechExpanded)}
                  className="flex items-center gap-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs rounded-md font-medium transition-colors"
                >
                  {isTechExpanded ? (
                    <>
                      <ChevronUp className="w-3 h-3" />
                      Show less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3 h-3" />
                      +{hiddenTechCount} more
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* {variant !== "compact" && (
          <div className="px-5 pb-5">
            <div className="flex gap-2 mt-4">
              {project.links?.demo && (
                <Link
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  View Demo <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              )}
              {project.links?.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 text-sm font-medium rounded-lg transition-colors ${!project.links.demo ? "flex-1" : ""}`}
                >
                  <Github className="w-3.5 h-3.5 mr-1.5" /> Code
                </Link>
              )}
            </div>
          </div>
        )} */}
      </div>
    </article>
  )
}