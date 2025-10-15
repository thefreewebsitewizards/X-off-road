import SectionTitle from '../components/SectionTitle'
import AboutHero from '../components/about/AboutHero'
import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUpPage() {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [newsletter, setNewsletter] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)

  const strength = useMemo(() => {
    let score = 0
    if (password.length >= 8) score++
    if (/[A-Z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++
    if (score <= 1) return 'weak'
    if (score === 2 || score === 3) return 'medium'
    return 'strong'
  }, [password])

  const strengthColor = strength === 'weak' ? 'bg-red-500' : strength === 'medium' ? 'bg-yellow-500' : 'bg-green-600'

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!firstName.trim() || !lastName.trim()) {
      setError('First and last name are required')
      return
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email')
      return
    }
    if (!password) {
      setError('Password is required')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    // TODO: connect signup to backend/Firebase
    setTimeout(() => {
      navigate('/')
    }, 300)
  }

  return (
    <div className="px-4 md:px-10 lg:px-20 py-5">
      <div className="flex flex-col max-w-[1280px] mx-auto flex-1">
        <AboutHero title="Sign Up" />
        <section className="py-16 max-w-2xl">
          <SectionTitle title="Personal Information" subtitle="Create your account to track orders and checkout faster." />
          <form onSubmit={onSubmit} className="mt-8 space-y-4 bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm">
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input className="form-input w-full rounded-lg border border-gray-300 dark:border-gray-700 h-12 px-4" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium">Middle Name/Initial</label>
                <input className="form-input w-full rounded-lg border border-gray-300 dark:border-gray-700 h-12 px-4" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input className="form-input w-full rounded-lg border border-gray-300 dark:border-gray-700 h-12 px-4" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input id="newsletter" type="checkbox" checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} />
              <label htmlFor="newsletter" className="text-sm">Sign Up for Newsletter</label>
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" className="form-input w-full rounded-lg border border-gray-300 dark:border-gray-700 h-12 px-4" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <input type="password" className="form-input w-full rounded-lg border border-gray-300 dark:border-gray-700 h-12 px-4" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
              <div className="mt-2 flex items-center gap-3">
                <div className="h-2 w-24 rounded-full bg-gray-200 overflow-hidden">
                  <div className={`h-full ${strengthColor} transition-all`} style={{ width: strength === 'weak' ? '33%' : strength === 'medium' ? '66%' : '100%' }} />
                </div>
                <span className="text-xs capitalize">Password Strength: {password ? strength : 'no password'}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Confirm Password</label>
              <input type="password" className="form-input w-full rounded-lg border border-gray-300 dark:border-gray-700 h-12 px-4" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••" />
            </div>

            <button type="submit" className="rounded-full bg-[#CC0000] text-white px-6 py-3 font-semibold hover:bg-red-700">Sign Up</button>
          </form>
        </section>
      </div>
    </div>
  )
}