import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 dark:border-gray-800 bg-[#A00000]">
      <div className="px-4 md:px-10 lg:px-20 py-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo-x-offroad.png" alt="X-Off-Road Bikes" className="h-9 w-auto" />
            </Link>
            <p className="mt-3 text-white">
              Premium bikes and gear engineered for adventure, speed, and comfort.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3 text-white">Shop</h3>
            <ul className="space-y-2 text-sm text-white">
              <li><Link to="/category/mountain" className="hover:text-gray-300">Mountain</Link></li>
              <li><Link to="/category/road" className="hover:text-gray-300">Road</Link></li>
              <li><Link to="/category/electric" className="hover:text-gray-300">Electric</Link></li>
              <li><Link to="/category/kids" className="hover:text-gray-300">Kids</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3 text-white">Support</h3>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-300">Warranty</a></li>
              <li><a href="#" className="hover:text-gray-300">Returns</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3 text-white">Follow</h3>
            <div className="flex items-center gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:bg-gray-200 text-black">
                 <span className="material-symbols-outlined">share</span>
               </a>
               <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:bg-gray-200 text-black">
                 <span className="material-symbols-outlined">thumb_up</span>
               </a>
               <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:bg-gray-200 text-black">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between text-xs text-white">
          <p>© {new Date().getFullYear()} X‑Off‑Road Bikes. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-300">Terms</a>
            <a href="#" className="hover:text-gray-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}