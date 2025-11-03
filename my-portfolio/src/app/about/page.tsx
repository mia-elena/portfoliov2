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
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">About</h1>
              <div className="w-16 h-0.5 bg-gray-800"></div>
            </div>

            <a
              href="https://www.youtube.com/watch?v=q7gy2GRwT-I"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer hover:opacity-95 transition-opacity duration-300 mb-6"
            >
              <NextImage
                src="/images/kiki.gif"
                alt="Logo"
                width={200}
                height={200}
                className="object-cover"
                unoptimized
              />
            </a>

            <p className="text-gray-600 text-sm leading-relaxed max-w-prose">
              Hi, I'm Mia. I'm a software engineer and sometimes UX designer. I live in New York City with my cat Achilles.
            </p>
            
          </div>

          {/* Tech Stack */}
          <div className="pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Tech Stack</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Languages */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Languages</h3>
                <div className="space-y-2">
                  {['python', 'javascript', 'typescript'].filter(skill => profile.skills.includes(skill as any)).map((skill) => (
                    <div key={skill}>
                      <TechBadge tech={skill as any} size="sm" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Frontend</h3>
                <div className="space-y-2">
                  {['react', 'nextjs', 'tailwindcss', 'html', 'css'].filter(skill => profile.skills.includes(skill as any)).map((skill) => (
                    <div key={skill}>
                      <TechBadge tech={skill as any} size="sm" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Backend</h3>
                <div className="space-y-2">
                  {['nodejs', 'express', 'django', 'postgresql', 'mongodb', 'firebase'].filter(skill => profile.skills.includes(skill as any)).map((skill) => (
                    <div key={skill}>
                      <TechBadge tech={skill as any} size="sm" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools & Infrastructure */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Tools & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {['git', 'github', 'docker', 'aws', 'vercel'].filter(skill => profile.skills.includes(skill as any)).map((skill) => (
                  <TechBadge key={skill} tech={skill as any} size="sm" />
                ))}
              </div>
            </div>
          </div>

          {/* Contact Links */}
          <div className="pt-8 space-y-3">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h2>
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
    </main>
  )
}