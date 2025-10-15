import SectionTitle from '../components/SectionTitle'
import { Link, useNavigate } from 'react-router-dom'
import AboutHero from '../components/about/AboutHero'
import React, { useState } from 'react'

export default function SignInPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!validateEmail(email)) {
      setError('Please enter a valid email')
      return
    }
    if (!password) {
      setError('Password is required')
      return
    }
    // TODO: connect to Firebase/Auth backend
    setTimeout(() => {
      navigate('/')
    }, 300)
  }

  return (
    <div className="px-4 md:px-10 lg:px-20 py-5">
      <div className="flex flex-col max-w-[1280px] mx-auto flex-1">
        <AboutHero title="Sign In" />
        <section className="py-16 max-w-xl">
          <SectionTitle title="Registered Customers" subtitle="If you have an account, sign in with your email address." />
          <form onSubmit={onSubmit} className="mt-8 space-y-4 bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm">
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="form-input w-full rounded-lg border border-gray-300 dark:border-gray-700 h-12 px-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="form-input w-full rounded-lg border border-gray-300 dark:border-gray-700 h-12 px-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className="rounded-full bg-[#CC0000] text-white px-6 py-3 font-semibold hover:bg-red-700">Sign In</button>
            <div className="text-sm">
              <Link to="/forgot-password" className="text-[#CC0000] hover:underline">Forgot Your Password?</Link>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}