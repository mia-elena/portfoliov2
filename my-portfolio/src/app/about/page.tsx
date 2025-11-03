import Link from "next/link"
import { profile } from "../../config/profile"
import { Github, Linkedin, Mail } from "lucide-react"
import TechBadge from "@/components/TechBadge"
import NextImage from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="space-y-12">

          {/* Header */}
          <div>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">About</h1>
              <div className="w-16 h-0.5 bg-gray-800"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <a
                href="https://www.youtube.com/watch?v=q7gy2GRwT-I"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 cursor-pointer hover:opacity-95 transition-opacity duration-300"
              >
                <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
                  <NextImage
                    src="/images/kiki.gif"
                    alt="Logo"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
              </a>

              <div className="flex-1">
                <p className="text-gray-600 text-sm leading-relaxed mt-14">
                  Hi, I'm Mia. I'm a software engineer and sometimes UX designer. I live in New York City with my cat Achilles. 
                  <p>
                  I like <a href="https://letterboxd.com/mia___elena/" target="_blank" rel="noopener noreferrer" className="hover:underline">movies</a>.
                  </p>
                </p>
              </div>
            </div>

          </div>

          {/* Tech Stack */}
          <div className="pt-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Tech Stack</h2>
            </div>

            <div className="space-y-6 max-w-2xl">
              {/* Languages */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Languages</h3>
                <p className="text-gray-700 text-sm">TypeScript, Python, JavaScript</p>
              </div>

              {/* Frontend */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Frontend</h3>
                <p className="text-gray-700 text-sm">React, Next.js, TailwindCSS</p>
              </div>

              {/* Backend */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Backend</h3>
                <p className="text-gray-700 text-sm">Node.js, Django, PostgreSQL, MongoDB</p>
              </div>

              {/* Tools & Cloud */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Tools & Cloud</h3>
                <p className="text-gray-700 text-sm">Docker, AWS, Git</p>
              </div>
            </div>
          </div>

          {/* Contact Links */}
          <div className="pt-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Get in Touch</h2>
            </div>
            <div className="space-y-3">
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