import Link from "next/link"
import { profile } from "../../config/profile"
import { Github, Linkedin, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About</h1>
            <p className="text-gray-700 leading-relaxed">
              Software engineer at <span className="font-medium">Gogentic.ai</span> building educational technology and full-stack applications with Python, TypeScript, and React. Based in New York, focused on creating scalable systems for education and healthcare.
            </p>
          </div>

          {/* What I'm Working With */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">What I'm Working With</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Backend</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>Python</li>
                  <li>FastAPI</li>
                  <li>Django</li>
                  <li>Node.js</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Frontend</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Tools</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>Vercel</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Currently Learning */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Currently Exploring</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Fine-tuning LLMs for domain-specific tasks</li>
              <li>• Prompt engineering and chain-of-thought reasoning</li>
              <li>• AI agent orchestration frameworks (LangGraph, CrewAI, AutoGen)</li>
              <li>• RAG pipeline architecture and vector embeddings</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-6">
              Open to discussing new opportunities, collaborations, or just connecting about tech.
            </p>
            <div className="flex gap-6">
              <Link
                href={profile.links?.github || "https://github.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </Link>
              <Link
                href={profile.links?.linkedIn || "https://linkedin.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </Link>
              <Link
                href={`mailto:${profile.contact?.email}`}
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}