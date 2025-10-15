import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash
    if (hash) {
      const id = decodeURIComponent(hash.replace('#', ''))
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    // No hash or target not found: scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  return null
}