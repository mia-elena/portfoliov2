'use client'

import { useState } from 'react'
import { Check, Code, Zap, Users, Clock, ArrowRight, Mail, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function HirePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType || 'New Project'}`)
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'N/A'}
Project Type: ${formData.projectType}
Budget Range: ${formData.budget || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}

Project Description:
${formData.description}
    `.trim())

    // Open default email client
    window.location.href = `mailto:miariccidev@gmail.com?subject=${subject}&body=${body}`
  }

  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end web applications with React, Next.js, Node.js, and PostgreSQL"
    },
    {
      icon: Zap,
      title: "API Development",
      description: "RESTful APIs, FastAPI, Django, and seamless third-party integrations"
    },
    {
      icon: Users,
      title: "Technical Consultation",
      description: "Architecture planning, code reviews, and technical strategy"
    }
  ]

  const process = [
    { step: "1", title: "Discovery", description: "We'll discuss your project goals, requirements, and timeline" },
    { step: "2", title: "Proposal", description: "Receive a detailed proposal with scope, timeline, and pricing" },
    { step: "3", title: "Development", description: "Regular updates and iterative development with your feedback" },
    { step: "4", title: "Delivery", description: "Launch support, documentation, and ongoing maintenance options" }
  ]

  const benefits = [
    "Clear communication throughout the project",
    "Clean, maintainable, well-documented code",
    "On-time delivery with regular progress updates",
    "Post-launch support and maintenance",
    "Flexible engagement models (hourly/project-based)"
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-14 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full border border-green-200 mb-5">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Currently accepting new projects
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Let's Build Your Next Project
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-7 max-w-2xl mx-auto">
            Full-stack developer specializing in React, Python, and scalable web applications.
            From MVP to production — I'll help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-md shadow-md hover:bg-gray-800 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md shadow-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
            >
              View Past Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">What I Can Do For You</h2>
            <div className="w-16 h-0.5 bg-gray-800 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">How We'll Work Together</h2>
            <div className="w-16 h-0.5 bg-gray-800 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Work With Me</h2>
            <div className="w-16 h-0.5 bg-gray-800 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">
            <Clock className="w-5 h-5 text-gray-700" />
            <span className="text-sm font-medium text-gray-900">Currently accepting projects starting December 2024</span>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-14 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Start Your Project</h2>
            <div className="w-16 h-0.5 bg-gray-800 mx-auto mb-3"></div>
            <p className="text-gray-600 text-sm">Fill out the form below and I'll get back to you within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Company / Organization</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                placeholder="Your company (optional)"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Project Type *</label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                >
                  <option value="">Select type</option>
                  <option value="full-stack">Full-Stack Application</option>
                  <option value="api">API Development</option>
                  <option value="consultation">Technical Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                >
                  <option value="">Select budget</option>
                  <option value="<5k">Less than $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k+">$25,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Timeline</label>
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP</option>
                <option value="1-2months">1-2 months</option>
                <option value="3-6months">3-6 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Project Description *</label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows={6}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition resize-none"
                placeholder="Tell me about your project, goals, and any specific requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-md shadow-md hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send Project Inquiry
              <Mail className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Prefer email? Reach out directly at{' '}
              <a href="mailto:miariccidev@gmail.com" className="text-gray-900 font-semibold hover:underline">
                miariccidev@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
