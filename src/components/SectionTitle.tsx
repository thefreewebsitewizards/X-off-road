import React from 'react'

type SectionTitleProps = {
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
}

export default function SectionTitle({ title, subtitle, align = 'center', className = '' }: SectionTitleProps) {
  return (
    <div className={`px-4 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-secondary-text-light dark:text-secondary-text-dark max-w-2xl mx-auto">{subtitle}</p>
      ) : null}
    </div>
  )
}