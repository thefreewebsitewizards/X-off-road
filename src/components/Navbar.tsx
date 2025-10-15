import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="px-4 md:px-10 lg:px-20">
        <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 py-4">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3 text-text-light dark:text-text-dark">
              <img src="/logo-x-offroad.png" alt="X-Off-Road Bikes" className="h-8 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/#hero" className="text-sm font-medium leading-normal hover:text-primary transition-colors">Home</Link>
              <Link to="/#categories" className="text-sm font-medium leading-normal hover:text-primary transition-colors">Categories</Link>
              <Link to="/#accessories" className="text-sm font-medium leading-normal hover:text-primary transition-colors">Accessories</Link>
              <NavLink to="/about" className={({ isActive }) => `text-sm font-medium leading-normal hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}>About</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `text-sm font-medium leading-normal hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}>Contact Us</NavLink>
            </nav>
          </div>
          <div className="flex flex-1 justify-end gap-4 items-center">
            <label className="hidden sm:flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-secondary-text-light dark:text-secondary-text-dark flex border-none bg-gray-100 dark:bg-gray-800 items-center justify-center pl-3 rounded-l-lg border-r-0">
                  <span className="material-symbols-outlined text-base">search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-gray-100 dark:bg-gray-800 h-full placeholder:text-secondary-text-light dark:placeholder:text-secondary-text-dark px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Search" defaultValue="" />
              </div>
            </label>
            <div className="flex gap-2">
              <Link to="/signin" aria-label="Account" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-gray-100 dark:bg-gray-800 text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined">person</span>
              </Link>
              <Link to="/cart" aria-label="Cart" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-gray-100 dark:bg-gray-800 text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined">shopping_cart</span>
              </Link>
              <button
                aria-label="Open menu"
                className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setMenuOpen((v) => !v)}
              >
                <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-b border-gray-200 dark:border-gray-800 pb-4">
            <div className="flex flex-col gap-2 pt-2">
              <Link to="/#hero" onClick={() => setMenuOpen(false)} className="px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Home</Link>
              <Link to="/#categories" onClick={() => setMenuOpen(false)} className="px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Categories</Link>
              <Link to="/#accessories" onClick={() => setMenuOpen(false)} className="px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Accessories</Link>
              <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => `px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${isActive ? 'text-primary' : ''}`}>About</NavLink>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => `px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${isActive ? 'text-primary' : ''}`}>Contact Us</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}