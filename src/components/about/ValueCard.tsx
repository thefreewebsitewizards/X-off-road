import type { LucideIcon } from 'lucide-react'

type ValueCardProps = {
  icon: LucideIcon
  title: string
  description: string
}

export default function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-full bg-[#CC0000]/10 text-[#CC0000] flex items-center justify-center">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="mt-1 text-sm text-secondary-text-light dark:text-secondary-text-dark">{description}</p>
        </div>
      </div>
    </div>
  )
}