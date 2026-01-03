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
    <main className="max-w-3xl mx-auto px-8 pt-24 pb-12">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl mb-3">Mia E.</h1>

        {/* Icon Links */}
        <div className="flex gap-5">
          {profile.links?.github && (
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-stone-400 hover:text-stone-700 transition-colors duration-300"
            >
              <FaGithubAlt className="w-5 h-5" />
            </a>
          )}
          {profile.links?.linkedIn && (
            <a
              href={profile.links.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-stone-400 hover:text-stone-700 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" strokeWidth={1.5} />
            </a>
          )}
          <a
            href={`mailto:${profile.contact.email}`}
            aria-label="Email"
            className="text-stone-400 hover:text-stone-700 transition-colors duration-300"
          >
            <Mail className="w-5 h-5" strokeWidth={1.5} />
          </a>
          {profile.links?.resume && (
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="text-stone-400 hover:text-stone-700 transition-colors duration-300"
            >
              <FileText className="w-5 h-5" strokeWidth={1.5} />
            </a>
          )}
        </div>
      </header>

      {/* About */}
      <section className="mb-10">
        <div className="space-y-3">
          <p>
            I'm an AI engineer based in New York, specializing in agentic workflows and RAG-powered systems. I build autonomous agents using LangChain and LangGraph that handle complex reasoning with high reliability.
          </p>
         
         
        </div>
      </section>

      {/* Work & Projects - Combined */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Work & Projects</h2>

        <div className="space-y-6">
          {allWorkItems.map((item, index) => (
            <div key={item.id}>
              <WorkItem item={item} onImageClick={openGallery} />
              {index < allWorkItems.length - 1 && (
                <hr className="mt-6 border-t border-stone-100" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <div className="space-y-5">
          {education.map((edu) => (
            <div key={edu.id}>
              <div className="font-semibold text-xl mb-1">{edu.degree}</div>
              <div className="text-stone-600 mb-1">
                {edu.institution}
                <span> · </span>
                <span className="text-xs font-mono text-stone-500">{edu.period}</span>
              </div>
              {edu.gpa && <div className="text-xs font-mono text-stone-500 mb-3">GPA: {edu.gpa}</div>}
              {edu.highlights && edu.highlights.length > 0 && (
                <ul className="mt-1 space-y-1">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="flex"><span className="mr-2">–</span><span>{highlight}</span></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 pt-8 text-xs font-mono text-stone-500">
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
