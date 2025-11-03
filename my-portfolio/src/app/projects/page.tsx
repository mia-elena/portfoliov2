import { projects } from '../../config/projects'
import Link from 'next/link'
import ProjectCard from '../../components/ProjectCard'

export default function ProjectsPage() {
  // Sort projects by date (most recent first)
  const sortedProjects = [...projects].sort((a, b) =>
    new Date(b.lastUpdated || b.date).getTime() - new Date(a.lastUpdated || a.date).getTime()
  )

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
      

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Projects</h1>
          <div className="w-16 h-0.5 bg-gray-800"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
