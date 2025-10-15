import React from 'react'

type TeamCardProps = {
  name: string
  role: string
  description: string
  imageSrc?: string
}

export default function TeamCard({ name, role, description, imageSrc }: TeamCardProps) {
  const initial = name?.charAt(0).toUpperCase()
  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        {imageSrc ? (
          <img src={imageSrc} alt={name} className="h-16 w-16 rounded-full object-cover" loading="lazy" />
        ) : (
          <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-lg font-bold text-gray-700 dark:text-gray-200">
            {initial}
          </div>
        )}
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm text-secondary-text-light dark:text-secondary-text-dark">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-secondary-text-light dark:text-secondary-text-dark">{description}</p>
    </div>
  )
}