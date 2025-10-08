'use client'

import { Check, Code, Zap, Users, Clock, ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

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

export default function HirePage() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
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

  const projectType = watch('projectType')
  const budget = watch('budget')
  const timeline = watch('timeline')

  const onSubmit = async (data: ContactFormValues) => {
    // Create mailto link with form data
    const subject = encodeURIComponent(`Project Inquiry: ${data.projectType || 'New Project'}`)
    const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'N/A'}
Project Type: ${data.projectType}
Budget Range: ${data.budget || 'Not specified'}
Timeline: ${data.timeline || 'Not specified'}

Project Description:
${data.description}
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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-4 py-2 bg-green-50 text-green-700 border-green-200 hover:bg-green-50">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
            Currently accepting new projects
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Let's Build Your Next Project
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-stack developer specializing in React, Python, and scalable web applications.
            From MVP to production — I'll help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="px-8">
              <a href="#contact-form">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link href="/projects">
                View Past Work
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What I Can Do For You</h2>
            <Separator className="w-20 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How We'll Work Together</h2>
            <Separator className="w-20 mx-auto" />
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="relative border-gray-200 text-center">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-gray-300"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Work With Me</h2>
            <Separator className="w-20 mx-auto" />
          </div>
          <Card className="border-gray-200">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-gray-700 text-base">{benefit}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Availability */}
      <section className="py-12 px-6 bg-gray-50/50">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="outline" className="px-6 py-3 text-sm bg-white border-gray-200 shadow-sm">
            <Clock className="w-5 h-5 text-gray-700 mr-2" />
            Currently accepting projects starting December 2024
          </Badge>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Start Your Project</h2>
            <Separator className="w-20 mx-auto mb-4" />
            <p className="text-gray-600">Fill out the form below and I'll get back to you within 24 hours</p>
          </div>

          <Card className="border-gray-200 shadow-lg">
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
                  <Label htmlFor="company">Company / Organization</Label>
                  <Input
                    id="company"
                    type="text"
                    {...register('company')}
                    placeholder="Your company (optional)"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select
                      value={projectType}
                      onValueChange={(value) => setValue('projectType', value)}
                    >
                      <SelectTrigger id="projectType" className={errors.projectType ? 'border-red-500' : ''}>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-stack">Full-Stack Application</SelectItem>
                        <SelectItem value="api">API Development</SelectItem>
                        <SelectItem value="consultation">Technical Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.projectType && (
                      <p className="text-sm text-red-500">{errors.projectType.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select
                      value={budget}
                      onValueChange={(value) => setValue('budget', value)}
                    >
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<5k">Less than $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k+">$25,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline</Label>
                  <Select
                    value={timeline}
                    onValueChange={(value) => setValue('timeline', value)}
                  >
                    <SelectTrigger id="timeline">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1-2months">1-2 months</SelectItem>
                      <SelectItem value="3-6months">3-6 months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea
                    id="description"
                    {...register('description')}
                    rows={6}
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                    className={`resize-none ${errors.description ? 'border-red-500' : ''}`}
                  />
                  {errors.description && (
                    <p className="text-sm text-red-500">{errors.description.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Project Inquiry'}
                  <Mail className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

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
