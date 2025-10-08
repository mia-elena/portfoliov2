'use client'

import { useState } from 'react'
import { projects } from '../../config/projects'
import { ExternalLink, Github, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import TechBadge from '../../components/TechBadge'

export default function ProjectsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  // Sort by newest first
  const sortedProjects = [...projects].sort((a, b) =>
    new Date(b.lastUpdated || b.date).getTime() - new Date(a.lastUpdated || a.date).getTime()
  )

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const truncateDescription = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
          <div className="w-16 h-0.5 bg-gray-800"></div>
        </div>

        <div className="space-y-6">
          {sortedProjects.map((project) => {
            const isExpanded = expandedId === project.id
            const showTruncated = project.description.length > 120

            return (
              <div
                key={project.id}
                className="border-b border-gray-200 pb-6 last:border-b-0"
              >
                <div
                  className="cursor-pointer"
                  onClick={() => showTruncated && toggleExpand(project.id)}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2 flex-1">
                      <h2 className="text-lg font-bold text-gray-900 hover:text-gray-700 transition-colors">
                        {project.title}
                      </h2>
                      {showTruncated && (
                        <ChevronDown
                          className={`w-4 h-4 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex items-center gap-2.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-gray-900 transition-colors"
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
                          className="text-gray-700 hover:text-gray-900 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4.5 h-4.5 stroke-[2.5]" strokeWidth={2.5} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {isExpanded || !showTruncated
                      ? project.description
                      : truncateDescription(project.description)}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-2.5">
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

                <div className="flex items-center gap-4 text-xs text-gray-500 font-normal">
                  <span>{project.date}</span>
                  {project.status && (
                    <span className="capitalize">{project.status.replace('-', ' ')}</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}