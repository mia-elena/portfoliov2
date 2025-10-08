"use client"

import { useState } from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

type FormData = {
  name: string
  email: string
  message: string
}

type FormStatus = {
  loading: boolean
  success: boolean
  error: boolean
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState<FormStatus>({
    loading: false,
    success: false,
    error: false,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setStatus({ loading: true, success: false, error: false, message: "" })

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: "Thank you for your message! I will get back to you soon.",
        })

        setFormData({ name: "", email: "", message: "" })

        setTimeout(() => {
          setStatus({ loading: false, success: false, error: false, message: "" })
        }, 5000)
      } else {
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: error instanceof Error ? error.message : "An error occurred. Please try again later.",
      })

      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false, message: "" })
      }, 5000)
    }
  }

  if (status.success) {
    return (
      <div className="border border-green-200 bg-green-50 rounded-lg p-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent</h3>
        <p className="text-gray-700 mb-6">Thank you for reaching out. I'll get back to you soon.</p>
        <button
          onClick={() => setStatus({ loading: false, success: false, error: false, message: "" })}
          className="px-4 py-2 bg-white text-gray-700 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors text-sm"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="relative rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 shadow-md"></div>
      <div className="relative p-6 z-10">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className="w-full px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium flex items-center justify-center gap-2"
        >
          {status.loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
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
            <>
              Send Message
              <Send className="h-4 w-4" />
            </>
          )}
        </button>

        {status.error && (
          <div className="border border-red-200 bg-red-50 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-red-900 text-sm">Could not send message</p>
              <p className="text-sm text-red-700 mt-1">
                {status.message || "Please try again later or contact me directly."}
              </p>
            </div>
          </div>
        )}
      </form>
      </div>
    </div>
  )
}