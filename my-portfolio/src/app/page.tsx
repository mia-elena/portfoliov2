"use client"

import Image from "next/image"
import Link from "next/link"
import { projects } from "../config/projects"
import { profile } from "../config/profile"
import { experience } from "../config/experience"
import { education } from "../config/education"
import ProjectCard from "../components/ProjectCard"
import ExperienceCard from "../components/ExperienceCard"
import EducationCard from "../components/EducationCard"
import ContactForm from "../components/ContactForm"
import { ArrowRight, Linkedin, Mail, FileText } from "lucide-react"
import { FaGithubAlt } from "react-icons/fa6"
import { motion } from "framer-motion"

// Animation variants for reusability
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  const featuredProjects = projects.filter((project) => project.meta?.isFeatured);
  const totalProjects = projects.length;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden">
        <div className="w-full mx-auto relative z-10 flex flex-col items-center mb-10">
          <motion.div
            className="relative mb-3"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={profile.image || "/default-profile.png"}
              alt={`${profile.name}'s profile picture`}
              width={140}
              height={140}
              className="rounded-full object-cover border-[4px] border-gray-100 bg-gray-50"
              priority
            />
            <div className="absolute bottom-0 left-full -ml-[30px] group cursor-pointer">
              <div className="relative h-9 bg-white border-[3px] border-gray-100 rounded-full flex items-center overflow-hidden transition-all duration-300 ease-in-out w-9 group-hover:w-auto group-hover:pr-3">
                <div className="w-9 h-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg pe-2">🪷</span>
                </div>
                <span className="text-xs font-medium text-gray-700 whitespace-nowrap opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:pl-1 transition-all duration-300 ease-in-out">
                  {profile.status?.message || "Available"}
                </span>
              </div>
            </div>
          </motion.div>
          <motion.h1
            className="text-2xl font-extrabold text-gray-900 mb-1 text-center"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
          >
            {profile.name}
          </motion.h1>
          <motion.p
            className="text-sm md:text-base text-gray-600 mb-4 font-normal"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.12, ease: "easeOut" }}
          >
          {profile.description}
          </motion.p>

          <motion.div
            className="flex gap-4 mb-1"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            <a
              href={profile.links?.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-gray-800 hover:text-gray-900 transition-all duration-200 hover:-translate-y-0.5 group"
              aria-label="GitHub"
            >
              <FaGithubAlt className="w-6 h-6" />
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap pointer-events-none">
                GitHub
              </span>
            </a>
            <a
              href={profile.links?.linkedIn || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-gray-800 hover:text-gray-900 transition-all duration-200 hover:-translate-y-0.5 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 stroke-[2]" strokeWidth={2} />
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap pointer-events-none">
                LinkedIn
              </span>
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="relative text-gray-800 hover:text-gray-900 transition-all duration-200 hover:-translate-y-0.5 group"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 stroke-[2]" strokeWidth={2} />
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap pointer-events-none">
                Email
              </span>
            </a>
            <a
              href={profile.links?.resume || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-gray-800 hover:text-gray-900 transition-all duration-200 hover:-translate-y-0.5 group"
              aria-label="Download Resume"
            >
              <FileText className="w-6 h-6 stroke-[2]" strokeWidth={2} />
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap pointer-events-none">
                Resume
              </span>
            </a>
          </motion.div>

          <motion.img
            src="https://raw.githubusercontent.com/miaskyelena/contribution_snk/output/github-contribution-grid-snake.svg"
            alt="GitHub Contribution Snake"
            className="mx-auto w-full max-w-6xl h-32 opacity-90"
            transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
          />
        </div>
      </section>

      <section id="projects" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Projects</h2>
            <div className="w-16 h-0.5 bg-gray-800 mx-auto"></div>
          </motion.div>
          
          <div className="mx-auto max-w-6xl">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 auto-rows-fr"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {featuredProjects.slice(0, 3).map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <ProjectCard
                    project={project}
                    variant="grid"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <Link
              href="/hire"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-md shadow-md hover:bg-gray-800 transition-all duration-300 group"
            >
              <span>Hire me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md shadow-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 group"
            >
              <span>View all projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Experience</h2>
            <div className="w-16 h-0.5 bg-gray-800 mx-auto mb-10"></div>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={fadeInUp}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ExperienceCard
                  experience={{
                    id: exp.id,
                    role: exp.title,
                    company: exp.company,
                    period: exp.date,
                    highlights: exp.highlights || [],
                    skills: exp.technologies || [],
                    logo: exp.logo,
                    location: {
                      city: exp.location?.city || "Unknown",
                      country: exp.location?.country || "Unknown",
                    },
                  }}
                  isFirst={index === 0}
                  isLast={index === experience.length - 1}
                  isCurrent={exp.status === "current"}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="education" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Education</h2>
            <div className="w-16 h-0.5 bg-gray-800 mx-auto mb-10"></div>
          </motion.div>

          <motion.div
            className="grid gap-6 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={fadeInUp}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <EducationCard
                  education={edu}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Let's Work Together</h2>
            <div className="w-16 h-0.5 bg-gray-800 mx-auto mb-4"></div>

            <p className="text-center mb-8 text-gray-600 text-sm max-w-xl mx-auto">
              Available for freelance and contract opportunities. Whether you need a full-stack application, API development, or technical consultation — let's build something great together.
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </main>
  )
}