import Link from "next/link"
import { profile } from "../../config/profile"
import { Github, Linkedin, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="space-y-12">
          {/* Back to Home */}
          <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors">
            ← Home
          </Link>

          {/* Header */}
          <div>
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">About</h1>
              <div className="w-16 h-0.5 bg-gray-800 mx-auto"></div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm text-center mt-6">
              Hi, I'm Mia 👋 I'm a software engineer based in New York City.
            </p>
          </div>

          {/* What I'm Working With */}
          <div className="pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">What I'm Working With</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Backend</h3>
                <ul className="space-y-1.5 text-gray-600">
                  <li>Python</li>
                  <li>FastAPI</li>
                  <li>Django</li>
                  <li>Node.js</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Frontend</h3>
                <ul className="space-y-1.5 text-gray-600">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Tools</h3>
                <ul className="space-y-1.5 text-gray-600">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>Vercel</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">Get in Touch</h2>
            <p className="text-gray-600 text-sm mb-6 text-center max-w-xl mx-auto">
              Available for freelance projects and contract work. Let's discuss how I can help bring your ideas to life.
            </p>
            <div className="flex gap-6 justify-center">
              <Link
                href={profile.links?.github || "https://github.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm font-medium">GitHub</span>
              </Link>
              <Link
                href={profile.links?.linkedIn || "https://linkedin.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm font-medium">LinkedIn</span>
              </Link>
              <Link
                href={`mailto:${profile.contact?.email}`}
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}