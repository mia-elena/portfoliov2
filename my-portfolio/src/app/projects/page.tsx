'use client'

import { useState, useMemo } from 'react'
import ProjectCard from '../../components/ProjectCard'
import FilterBar from '../../components/FilterBar'
import { projects } from '../../config/projects'
import type { Technology, Project } from '../../types'
import { Filter } from 'lucide-react'

type FilterType = 'all' | 'featured' | 'ai' | 'fullstack' | 'data-science' | 'open-source'
type SortType = 'newest' | 'oldest' | 'title' | 'updated'
type ViewType = 'grid' | 'list'

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all')
  const [selectedTech, setSelectedTech] = useState<Technology | 'all'>('all')
  const [sortBy, setSortBy] = useState<SortType>('newest')
  const [viewType, setViewType] = useState<ViewType>('grid')

  // Get unique technologies from all projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<Technology>()
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech))
    })
    return Array.from(techSet).sort()
  }, [])

  const filteredProjects = useMemo(() => {
    let filtered = projects.filter(project => {
      const matchesSearch = searchTerm === '' || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())

      let matchesFilter = true
      switch (selectedFilter) {
        case 'featured':
          matchesFilter = project.meta?.isFeatured === true
          break
        case 'ai':
          matchesFilter = project.meta?.isAI === true
          break
        case 'fullstack':
          matchesFilter = project.meta?.isFullStack === true
          break
        case 'data-science':
          matchesFilter = project.meta?.isDataScience === true
          break
        case 'open-source':
          matchesFilter = project.meta?.isOpenSource === true
          break
      }
      const matchesTech = selectedTech === 'all' || 
        project.technologies.includes(selectedTech)

      return matchesSearch && matchesFilter && matchesTech
    })

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.lastUpdated || b.date).getTime() - new Date(a.lastUpdated || a.date).getTime()
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case 'title':
          return a.title.localeCompare(b.title)
        case 'updated':
          return new Date(b.lastUpdated || '1970-01-01').getTime() - new Date(a.lastUpdated || '1970-01-01').getTime()
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedFilter, selectedTech, sortBy])

  const filterOptions: { value: FilterType; label: string; count: number }[] = [
    { value: 'all', label: 'All Projects', count: projects.length },
    { value: 'featured', label: 'Featured', count: projects.filter(p => p.meta?.isFeatured).length },
    { value: 'ai', label: 'AI/ML', count: projects.filter(p => p.meta?.isAI).length },
    { value: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.meta?.isFullStack).length },
    { value: 'data-science', label: 'Data Science', count: projects.filter(p => p.meta?.isDataScience).length },
    { value: 'open-source', label: 'Open Source', count: projects.filter(p => p.meta?.isOpenSource).length },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-left mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 ">All Projects</h1>
            <p className="text-sm text-gray-600">
               Use the filters below to search by name, category, or technology.
            </p>
        </div>
        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
          selectedTech={selectedTech}
          onTechChange={setSelectedTech}
          sortBy={sortBy}
          onSortChange={setSortBy}
          viewType={viewType}
          onViewChange={setViewType}
          allTechnologies={allTechnologies}
          filterOptions={filterOptions}
          resultCount={filteredProjects.length}
          totalCount={projects.length}
        />
        {filteredProjects.length > 0 ? (
          <div className={viewType === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "space-y-6"
          }>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant={viewType === 'grid' ? 'grid' : 'standard'}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}