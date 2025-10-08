'use client'

import { projects } from '../../config/projects'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import TechBadge from '../../components/TechBadge'

export default function ProjectsPage() {
  // Sort by newest first
  const sortedProjects = [...projects].sort((a, b) =>
    new Date(b.lastUpdated || b.date).getTime() - new Date(a.lastUpdated || a.date).getTime()
  )

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Projects</h1>

        <div className="space-y-8">
          {sortedProjects.map((project) => (
            <div
              key={project.id}
              className="border-b border-gray-200 pb-8 last:border-b-0"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-xl font-semibold text-gray-900 hover:text-gray-600 transition-colors">
                  {project.title}
                </h2>
                <div className="flex items-center gap-3 shrink-0">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
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
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

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

              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>{project.date}</span>
                {project.status && (
                  <span className="capitalize">{project.status.replace('-', ' ')}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}