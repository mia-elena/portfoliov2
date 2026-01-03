'use client'

import { useState, useEffect } from 'react'
import { profile } from '@/config/profile'
import { projects } from '@/config/projects'
import { experience } from '@/config/experience'
import { education } from '@/config/education'
import { WorkItem as WorkItemType } from '@/types'
import WorkItem from '@/components/WorkItem'
import { FaGithubAlt } from 'react-icons/fa6'
import { Linkedin, Mail, FileText } from 'lucide-react'

export default function Home() {
  // Gallery state management
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const [galleryIndex, setGalleryIndex] = useState(0)

  // Gallery functions
  const openGallery = (images: string[], index: number) => {
    setGalleryImages(images)
    setGalleryIndex(index)
    setGalleryOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeGallery = () => {
    setGalleryOpen(false)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (galleryIndex < galleryImages.length - 1) {
      setGalleryIndex(galleryIndex + 1)
    }
  }

  const prevImage = () => {
    if (galleryIndex > 0) {
      setGalleryIndex(galleryIndex - 1)
    }
  }

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!galleryOpen) return
      if (e.key === 'Escape') closeGallery()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [galleryOpen, galleryIndex])

  // Normalize experience data to WorkItem format
  const normalizedExperience: WorkItemType[] = experience.map((exp) => ({
    id: exp.id,
    title: exp.title,
    url: undefined, // Experience items typically don't have URLs
    role: exp.company,
    date: exp.date,
    description: exp.description,
    technicalDetails: exp.highlights || [],
    technologies: exp.technologies as any[],
    images: undefined
  }))

  // Normalize project data to WorkItem format
  const normalizedProjects: WorkItemType[] = projects.map((project) => ({
    id: project.id,
    title: project.title,
    url: project.links?.demo || project.links?.github,
    role: project.projectType || 'Personal Project',
    date: project.date,
    description: project.description,
    technicalDetails: project.highlights || [],
    technologies: project.technologies,
    images: project.images
  }))

  // Combine and sort all work items by date (most recent first)
  const allWorkItems = [...normalizedExperience, ...normalizedProjects].sort((a, b) => {
    // Simple date comparison - you may want to make this more robust
    return b.date.localeCompare(a.date)
  })

  return (
    <main className="max-w-3xl mx-auto px-8 pt-20 pb-12">
      {/* Header */}
      <header className="mb-12">
        <h4 className="text-4xl font-bold mb-3">Mia E.</h4>

        {/* Icon Links */}
        <div className="flex gap-4 text-xl">
          {profile.links?.github && (
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-800 hover:text-gray-900 transition-all duration-200 hover:-translate-y-0.5"
            >
              <FaGithubAlt className="w-6 h-6" />
            </a>
          )}
          {profile.links?.linkedIn && (
            <a
              href={profile.links.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-800 hover:text-gray-900 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Linkedin className="w-6 h-6 stroke-[2]" strokeWidth={2} />
            </a>
          )}
          <a
            href={`mailto:${profile.contact.email}`}
            aria-label="Email"
            className="text-gray-800 hover:text-gray-900 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Mail className="w-6 h-6 stroke-[2]" strokeWidth={2} />
          </a>
          {profile.links?.resume && (
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="text-gray-800 hover:text-gray-900 transition-all duration-200 hover:-translate-y-0.5"
            >
              <FileText className="w-6 h-6 stroke-[2]" strokeWidth={2} />
            </a>
          )}
        </div>
      </header>

      {/* About */}
      <section className="mb-12">
        <div className="space-y-3">
          <p>
            I'm an AI engineer based in New York, specializing in agentic workflows and RAG-powered systems. I build autonomous agents using LangChain and LangGraph that handle complex reasoning with high reliability.
          </p>
         
         
        </div>
      </section>

      {/* Work & Projects - Combined */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Work & Projects</h2>

        <div className="space-y-8">
          {allWorkItems.map((item, index) => (
            <div key={item.id}>
              <WorkItem item={item} onImageClick={openGallery} />
              {index < allWorkItems.length - 1 && (
                <hr className="mt-8 border-t border-gray-300" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="space-y-5">
          {education.map((edu) => (
            <div key={edu.id}>
              <div className="font-bold text-lg mb-1">{edu.degree}</div>
              <div className="mb-1">
                {edu.institution}
                <span> · </span>
                <span className="text-gray-600">{edu.period}</span>
              </div>
              {edu.gpa && <div className="text-sm text-gray-600 mb-2">GPA: {edu.gpa}</div>}
              {edu.highlights && edu.highlights.length > 0 && (
                <ul className="mt-1 text-sm space-y-1">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black pt-6 text-sm text-gray-600">
        <p>© 2025 {profile.name.replace('Hi, I\'m ', '').replace('.', '').trim()}</p>
        <p>
          <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
        </p>
      </footer>

      {/* Image Gallery Modal */}
      {galleryOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeGallery}
        >
          <button
            className="absolute top-8 right-8 text-white text-lg hover:opacity-70"
            onClick={closeGallery}
          >
            Close
          </button>

          {galleryIndex > 0 && (
            <button
              className="absolute left-8 text-white text-3xl hover:opacity-70"
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            >
              ←
            </button>
          )}

          <img
            src={galleryImages[galleryIndex]}
            alt={`Gallery image ${galleryIndex + 1}`}
            className="max-w-[85vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {galleryIndex < galleryImages.length - 1 && (
            <button
              className="absolute right-8 text-white text-3xl hover:opacity-70"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            >
              →
            </button>
          )}

          <div className="absolute bottom-8 text-white text-sm">
            {galleryIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </main>
  )
}
