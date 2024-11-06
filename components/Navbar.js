'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen)
  }

  return (
    <section className="relative" style={{ background: "url('/gradient-navigation.jpg') no-repeat left center", backgroundSize: 'cover' }}>
      <nav className="relative px-12 py-5 bg-gray-800 bg-opacity-75">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10 pr-4 lg:pr-0">
            <img className="h-9" src="/logo.svg" alt="Logo" />
          </Link>
          <ul className="hidden xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-y-1/2 xl:-translate-x-1/2 xl:flex lg:justify-center gap-14">
            <li><Link href="/seo" className="text-lg text-white hover:text-gray-300 font-medium transition duration-200">Servicii SEO</Link></li>
            <li><Link href="/web-development" className="text-lg text-white hover:text-gray-300 font-medium transition duration-200">Dezvoltare Web</Link></li>
            <li>
              <Link href="/mobile-development" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} className="flex items-center text-lg text-white hover:text-gray-300 font-medium transition duration-200">
                <span className="mr-2.5">Dezvoltare Mobilă</span>
                
              </Link>
            </li>
            <li><Link href="/ads" className="text-lg text-white hover:text-gray-300 font-medium transition duration-200">Publicitate Online</Link></li>
          </ul>
          <div className="hidden xl:flex items-center gap-2">
            <Link 
              href="/contact" 
              className="inline-flex justify-center items-center text-center h-12 p-5 px-6 font-semibold text-white hover:text-blue-500 focus:text-blue-500 bg-transparent hover:bg-white focus:bg-white border border-white rounded-full focus:ring-4 focus:ring-white focus:ring-opacity-50 transition duration-200"
            >
              Contactează-ne
            </Link>
          </div>
          <button onClick={toggleMobileNav} className="flex items-center justify-center h-12 p-5 text-white border border-gray-300 xl:hidden rounded-full">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.75 6.75003H1.25C0.559648 6.75003 0 7.30968 0 8.00003C0 8.69038 0.559648 9.25003 1.25 9.25003H18.75C19.4404 9.25003 20 8.69038 20 8.00003C20 7.30968 19.4404 6.75003 18.75 6.75003Z" fill="currentColor"></path>
              <path d="M1.25 3.41669H18.75C19.4404 3.41669 20 2.85704 20 2.16669C20 1.47634 19.4404 0.916687 18.75 0.916687H1.25C0.559648 0.916687 0 1.47634 0 2.16669C0 2.85704 0.559648 3.41669 1.25 3.41669Z" fill="currentColor"></path>
              <path d="M18.75 12.5834H1.25C0.559648 12.5834 0 13.143 0 13.8334C0 14.5237 0.559648 15.0834 1.25 15.0834H18.75C19.4404 15.0834 20 14.5237 20 13.8334C20 13.143 19.4404 12.5834 18.75 12.5834Z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 z-50 xl:hidden ${mobileNavOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" onClick={toggleMobileNav}></div>
        <nav className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-xl flex flex-col">
          <div className="p-4 flex items-center justify-between border-b border-gray-200">
            <Link href="#" className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
            </Link>
            <button onClick={toggleMobileNav} className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6L18 18" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="px-2 py-4 space-y-1">
              <Link href="/seo" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-800 hover:bg-gray-50">Servicii SEO</Link>
              <Link href="/web-development" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-800 hover:bg-gray-50">Dezvoltare Web</Link>
              <Link href="/mobile-development" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-800 hover:bg-gray-50">Dezvoltare Mobilă</Link>
              <Link href="/ads" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-800 hover:bg-gray-50">Publicitate Online</Link>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200">
            <Link 
              href="/contact" 
              className="block w-full px-4 py-2 text-center font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Contactează-ne
            </Link>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Navbar