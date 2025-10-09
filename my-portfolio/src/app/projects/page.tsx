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

        <div className="max-w-4xl mx-auto space-y-8">
          {sortedProjects.map((project, index) => (
            <div
              key={project.id}
              className="flex gap-5 group pb-8 border-b border-gray-200 last:border-b-0 last:pb-0"
            >
              {/* Number */}
              <div className="flex-shrink-0 w-10 flex items-start pt-1">
                <span className="text-xl font-bold text-gray-400 group-hover:text-gray-600 transition-colors">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Title & Links */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-2.5 shrink-0">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-4.5 h-4.5 stroke-[2.5]" strokeWidth={2.5} />
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
                        <ExternalLink className="w-4.5 h-4.5 stroke-[2.5]" strokeWidth={2.5} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Type */}
                {project.projectType && (
                  <p className="text-sm text-gray-500 font-medium mb-3">
                    {project.projectType}
                  </p>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.map((tech) => (
                    <TechBadge
                      key={tech}
                      tech={tech}
                      size="sm"
                      showLabel={false}
                      showbg={true}
                      showIcon={true}
                    />
                  ))}
                </div>

                {/* Status & Date */}
                <div className="flex items-center gap-3 text-xs text-gray-500 font-normal">
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