'use client'

import { useState, useMemo, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { projects } from '../../config/projects'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import TechBadge from '../../components/TechBadge'
import FilterBar, { ProjectStatus, ProjectCategory } from '../../components/FilterBar'

export default function ProjectsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Initialize filters from URL params
  const [selectedTech, setSelectedTech] = useState<string>(searchParams.get('tech') || 'all')
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus>(
    (searchParams.get('status') as ProjectStatus) || 'all'
  )
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(
    (searchParams.get('category') as ProjectCategory) || 'all'
  )

  // Get all unique technologies from projects
  const availableTechs = useMemo(() => {
    const techSet = new Set<string>()
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech))
    })
    return Array.from(techSet).sort()
  }, [])

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Tech filter
      const matchesTech = selectedTech === 'all' || project.technologies.includes(selectedTech as any)

      // Status filter
      const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus

      // Category filter
      let matchesCategory = true
      if (selectedCategory !== 'all') {
        switch (selectedCategory) {
          case 'fullstack':
            matchesCategory = project.meta?.isFullStack === true
            break
          case 'ai':
            matchesCategory = project.meta?.isAI === true
            break
          case 'healthcare':
            matchesCategory = project.projectType?.toLowerCase().includes('healthcare') || false
            break
          case 'ecommerce':
            matchesCategory = project.projectType?.toLowerCase().includes('commerce') || false
            break
          case 'education':
            matchesCategory =
              project.projectType?.toLowerCase().includes('edtech') ||
              project.projectType?.toLowerCase().includes('learning') ||
              project.projectType?.toLowerCase().includes('education') ||
              project.title.toLowerCase().includes('campus') ||
              false
            break
        }
      }

      return matchesTech && matchesStatus && matchesCategory
    })
  }, [selectedTech, selectedStatus, selectedCategory])

  // Sort filtered projects by date
  const sortedProjects = useMemo(() => {
    return [...filteredProjects].sort((a, b) =>
      new Date(b.lastUpdated || b.date).getTime() - new Date(a.lastUpdated || a.date).getTime()
    )
  }, [filteredProjects])

  // Update URL params when filters change
  useEffect(() => {
    const params = new URLSearchParams()
    if (selectedTech !== 'all') params.set('tech', selectedTech)
    if (selectedStatus !== 'all') params.set('status', selectedStatus)
    if (selectedCategory !== 'all') params.set('category', selectedCategory)

    const queryString = params.toString()
    const newUrl = queryString ? `/projects?${queryString}` : '/projects'

    router.push(newUrl, { scroll: false })
  }, [selectedTech, selectedStatus, selectedCategory, router])

  const handleClearFilters = () => {
    setSelectedTech('all')
    setSelectedStatus('all')
    setSelectedCategory('all')
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back to Home */}
        <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors mb-10">
          ← Home
        </Link>

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
          <div className="w-16 h-0.5 bg-gray-800"></div>
        </div>

        {/* Filter Bar */}
        <FilterBar
          selectedTech={selectedTech}
          onTechChange={setSelectedTech}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          availableTechs={availableTechs}
          resultCount={sortedProjects.length}
          totalCount={projects.length}
          onClearFilters={handleClearFilters}
        />

        {/* Projects List */}
        {sortedProjects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-2">No projects found</p>
            <p className="text-gray-400 text-sm">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="space-y-8">
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
        )}
      </div>
    </div>
  )
}
