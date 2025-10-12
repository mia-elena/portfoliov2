'use client'

import { X } from 'lucide-react'

export type ProjectStatus = 'all' | 'complete' | 'in-progress' | 'planning'
export type ProjectCategory = 'all' | 'fullstack' | 'ai' | 'healthcare' | 'ecommerce' | 'education'

interface FilterBarProps {
  selectedTech: string
  onTechChange: (tech: string) => void
  selectedStatus: ProjectStatus
  onStatusChange: (status: ProjectStatus) => void
  selectedCategory: ProjectCategory
  onCategoryChange: (category: ProjectCategory) => void
  availableTechs: string[]
  resultCount: number
  totalCount: number
  onClearFilters: () => void
}

export default function FilterBar({
  selectedTech,
  onTechChange,
  selectedStatus,
  onStatusChange,
  selectedCategory,
  onCategoryChange,
  availableTechs,
  resultCount,
  totalCount,
  onClearFilters
}: FilterBarProps) {
  const hasActiveFilters = selectedTech !== 'all' || selectedStatus !== 'all' || selectedCategory !== 'all'

  const techOptions = [
    { value: 'all', label: 'All Technologies' },
    ...availableTechs.map(tech => ({
      value: tech,
      label: tech.charAt(0).toUpperCase() + tech.slice(1)
    }))
  ]

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'complete', label: 'Complete' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'planning', label: 'Planning' }
  ]

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'fullstack', label: 'Full-Stack' },
    { value: 'ai', label: 'AI-Powered' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'education', label: 'Education' }
  ]

  return (
    <div className="mb-8">
      {/* Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <select
          value={selectedTech}
          onChange={(e) => onTechChange(e.target.value)}
          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm bg-white appearance-none cursor-pointer"
        >
          {techOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => onStatusChange(e.target.value as ProjectStatus)}
          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm bg-white appearance-none cursor-pointer"
        >
          {statusOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value as ProjectCategory)}
          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm bg-white appearance-none cursor-pointer"
        >
          {categoryOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Results Count & Clear Filters */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {resultCount === totalCount ? (
            <span>Showing all {totalCount} projects</span>
          ) : (
            <span>Showing {resultCount} of {totalCount} projects</span>
          )}
        </p>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <X className="w-4 h-4" />
            Clear filters
          </button>
        )}
      </div>

      {/* Active Filter Pills */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mt-3">
          {selectedTech !== 'all' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200">
              {selectedTech.charAt(0).toUpperCase() + selectedTech.slice(1)}
              <button
                onClick={() => onTechChange('all')}
                className="hover:text-gray-900"
                aria-label="Remove tech filter"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {selectedStatus !== 'all' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200">
              {statusOptions.find(s => s.value === selectedStatus)?.label}
              <button
                onClick={() => onStatusChange('all')}
                className="hover:text-gray-900"
                aria-label="Remove status filter"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {selectedCategory !== 'all' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200">
              {categoryOptions.find(c => c.value === selectedCategory)?.label}
              <button
                onClick={() => onCategoryChange('all')}
                className="hover:text-gray-900"
                aria-label="Remove category filter"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  )
}
