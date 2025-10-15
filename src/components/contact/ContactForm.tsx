import React, { useState } from 'react'

type FormState = {
  fullName: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
}

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const validate = () => {
    const next: FormErrors = {}
    if (!values.fullName.trim()) next.fullName = 'Full name is required'
    if (!values.email.trim() || !validateEmail(values.email)) next.email = 'Valid email is required'
    if (!values.subject.trim()) next.subject = 'Subject is required'
    if (!values.message.trim()) next.message = 'Message is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      setStatus('error')
      return
    }
    // TODO: connect to backend/email service
    setTimeout(() => {
      setStatus('success')
      setValues(initialState)
    }, 400)
  }

  const inputClass =
    'form-input w-full flex-grow resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-gray-800 h-12 placeholder:text-secondary-text-light dark:placeholder:text-secondary-text-dark px-4 text-base'

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Full Name</label>
        <input
          name="fullName"
          value={values.fullName}
          onChange={onChange}
          className={`${inputClass} ${errors.fullName ? 'border-red-500' : ''}`}
          placeholder="Your full name"
        />
        {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={onChange}
          className={`${inputClass} ${errors.email ? 'border-red-500' : ''}`}
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Subject</label>
        <input
          name="subject"
          value={values.subject}
          onChange={onChange}
          className={`${inputClass} ${errors.subject ? 'border-red-500' : ''}`}
          placeholder="What can we help with?"
        />
        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          name="message"
          value={values.message}
          onChange={onChange}
          className={`${inputClass} h-28 ${errors.message ? 'border-red-500' : ''}`}
          placeholder="Write your message"
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-[#CC0000] text-white px-6 py-3 font-semibold shadow-lg hover:bg-red-700"
      >
        Send Message
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-sm">Thanks! Your message was sent successfully.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm">Please correct the highlighted fields.</p>
      )}
    </form>
  )
}