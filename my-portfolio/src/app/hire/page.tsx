'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  description: z.string().min(20, 'Please provide at least 20 characters describing your project'),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

type FormStatus = {
  loading: boolean
  success: boolean
  error: boolean
  message: string
}

export default function HirePage() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: '',
    },
  })

  const [status, setStatus] = useState<FormStatus>({
    loading: false,
    success: false,
    error: false,
    message: '',
  })

  const projectType = watch('projectType')
  const budget = watch('budget')
  const timeline = watch('timeline')

  const onSubmit = async (data: ContactFormValues) => {
    setStatus({ loading: true, success: false, error: false, message: '' })

    try {
      const response = await fetch('/api/hire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: "Thank you for reaching out! I'll get back to you within 24 hours.",
        })
        reset()
      } else {
        throw new Error(result.error || "Failed to send message")
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: error instanceof Error ? error.message : "An error occurred. Please try again later.",
      })

      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false, message: '' })
      }, 5000)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's build something together
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            I'm a full-stack developer who specializes in React, Python, and building scalable web applications.
            Currently accepting projects for <span className="font-semibold text-gray-900">November 2025 onwards</span>.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#contact-form">
                Get in touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                View my work
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What I can help you with</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Full-stack web applications</h3>
              <p className="text-gray-600">
                Building complete web apps from the ground up using React, Next.js, Node.js, and PostgreSQL.
                I handle everything from database design to responsive UI.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">API development & integration</h3>
              <p className="text-gray-600">
                Creating RESTful APIs with FastAPI or Django, connecting to third-party services,
                and building reliable backend systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical consultation</h3>
              <p className="text-gray-600">
                Code reviews, architecture planning, and helping teams make good technical decisions.
                I can also help improve existing codebases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How we'll work together</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="relative border-gray-200 text-center">
              <CardContent className="pt-6">
                <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Initial conversation</h3>
                <p className="text-sm text-gray-600">
                  We'll discuss your project goals, timeline, and requirements. I'll ask questions to understand what you're trying to build.
                </p>
              </CardContent>
              <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-gray-300"></div>
            </Card>

            <Card className="relative border-gray-200 text-center">
              <CardContent className="pt-6">
                <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Proposal & scope</h3>
                <p className="text-sm text-gray-600">
                  I'll send you a detailed proposal with the project scope, timeline, and cost breakdown. No surprises.
                </p>
              </CardContent>
              <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-gray-300"></div>
            </Card>

            <Card className="relative border-gray-200 text-center">
              <CardContent className="pt-6">
                <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Build & iterate</h3>
                <p className="text-sm text-gray-600">
                  Regular check-ins and updates as I build. You'll see progress at every step and can give feedback along the way.
                </p>
              </CardContent>
              <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-gray-300"></div>
            </Card>

            <Card className="border-gray-200 text-center">
              <CardContent className="pt-6">
                <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Launch & support</h3>
                <p className="text-sm text-gray-600">
                  I'll help you launch and provide documentation. Available for ongoing support if you need it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What you can expect</h2>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Clear, regular communication</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Clean, well-documented code</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Realistic timelines and honest updates</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Responsive, production-ready applications</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Post-launch support and maintenance</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Flexible hourly or project-based pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Start a project</h2>
            <p className="text-gray-600">Tell me about what you're building. I'll get back to you within 24 hours.</p>
          </div>

          {status.success ? (
            <div className="border border-green-200 bg-green-50 rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Message sent!</h3>
              <p className="text-gray-700 mb-6">{status.message}</p>
              <button
                onClick={() => setStatus({ loading: false, success: false, error: false, message: '' })}
                className="px-4 py-2 bg-white text-gray-700 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors text-sm"
              >
                Send another message
              </button>
            </div>
          ) : (
            <Card className="border-gray-200 shadow-sm">
              <CardContent className="pt-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        {...register('name')}
                        placeholder="Your name"
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="your@email.com"
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (optional)</Label>
                    <Input
                      id="company"
                      type="text"
                      {...register('company')}
                      placeholder="Your company"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">What do you need? *</Label>
                      <Select
                        value={projectType}
                        onValueChange={(value) => setValue('projectType', value, { shouldValidate: true })}
                      >
                        <SelectTrigger id="projectType" className={errors.projectType ? 'border-red-500' : ''}>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-stack">Full-stack application</SelectItem>
                          <SelectItem value="api">API development</SelectItem>
                          <SelectItem value="consultation">Technical consultation</SelectItem>
                          <SelectItem value="other">Something else</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.projectType && (
                        <p className="text-sm text-red-500">{errors.projectType.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget range (optional)</Label>
                      <Select
                        value={budget}
                        onValueChange={(value) => setValue('budget', value)}
                      >
                        <SelectTrigger id="budget">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="<5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k+">$25,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">When do you need this? (optional)</Label>
                    <Select
                      value={timeline}
                      onValueChange={(value) => setValue('timeline', value)}
                    >
                      <SelectTrigger id="timeline">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="1-2months">1-2 months</SelectItem>
                        <SelectItem value="3-6months">3-6 months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Tell me about your project *</Label>
                    <Textarea
                      id="description"
                      {...register('description')}
                      rows={6}
                      placeholder="What are you trying to build? What problems are you trying to solve?"
                      className={`resize-none ${errors.description ? 'border-red-500' : ''}`}
                    />
                    {errors.description && (
                      <p className="text-sm text-red-500">{errors.description.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    size="lg"
                    disabled={status.loading}
                  >
                    {status.loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send message'
                    )}
                  </Button>

                  {status.error && (
                    <div className="border border-red-200 bg-red-50 rounded-lg p-4 flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-900 text-sm">Could not send message</p>
                        <p className="text-sm text-red-700 mt-1">
                          {status.message || 'Please try again later or email me directly.'}
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          )}

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Or email me directly at{' '}
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
