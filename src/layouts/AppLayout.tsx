import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import ScrollManager from '../components/ScrollManager'

export default function AppLayout() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <div className="layout-container flex grow flex-col">
        <Navbar />
        <main className="flex-1 pt-20 md:pt-24">
          <ScrollManager />
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}