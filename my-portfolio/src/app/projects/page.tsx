'use client'

import { projects } from '../../config/projects'
import { ExternalLink, Github } from 'lucide-react'
import TechBadge from '../../components/TechBadge'

export default function ProjectsPage() {
  // Sort by newest first
  const sortedProjects = [...projects].sort((a, b) =>
    new Date(b.lastUpdated || b.date).getTime() - new Date(a.lastUpdated || a.date).getTime()
  )

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
          <div className="w-16 h-0.5 bg-gray-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {sortedProjects.map((project, index) => (
            <div
              key={project.id}
              className="flex gap-4 group"
            >
              {/* Number */}
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-400 group-hover:text-gray-600 transition-colors">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Title & Links */}
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h2 className="text-base font-bold text-gray-900 leading-snug">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4 stroke-[2.5]" strokeWidth={2.5} />
                      </a>
                    )}
                    {project.links?.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4 stroke-[2.5]" strokeWidth={2.5} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Type */}
                {project.projectType && (
                  <p className="text-xs text-gray-500 font-medium mb-2">
                    {project.projectType}
                  </p>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <TechBadge
                      key={tech}
                      tech={tech}
                      size="sm"
                      showLabel={false}
                      showbg={true}
                      showIcon={true}
                    />
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-xs text-gray-400 font-medium self-center">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Status & Date */}
                <div className="flex items-center gap-3 text-xs text-gray-400 font-normal">
                  <span>{project.date}</span>
                  {project.status && (
                    <span className="capitalize">{project.status.replace('-', ' ')}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}