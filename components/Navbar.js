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
          <Link href="#" className="relative z-10 pr-4 lg:pr-0">
            <img className="h-9" src="/logo.svg" alt="Logo" />
          </Link>
          <ul className="hidden xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-y-1/2 xl:-translate-x-1/2 xl:flex lg:justify-center gap-14">
            <li><Link href="/seo" className="text-lg text-white hover:text-gray-300 font-medium transition duration-200">Servicii SEO</Link></li>
            <li><Link href="/web-development" className="text-lg text-white hover:text-gray-300 font-medium transition duration-200">Dezvoltare Web</Link></li>
            <li>
              <Link href="/mobile-development" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} className="flex items-center text-lg text-white hover:text-gray-300 font-medium transition duration-200">
                <span className="mr-2.5">Dezvoltare Mobilă</span>
                <div className={`transform ${dropdown ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M11.8098 3.51666C11.7362 3.43826 11.6487 3.37604 11.5523 3.33357C11.4559 3.2911 11.3525 3.26924 11.2481 3.26924C11.1436 3.26924 11.0402 3.2911 10.9438 3.33357C10.8474 3.37604 10.7599 3.43826 10.6864 3.51666L7.06305 7.34761C6.9895 7.42601 6.902 7.48824 6.8056 7.5307C6.70919 7.57317 6.60579 7.59503 6.50135 7.59503C6.39691 7.59503 6.29351 7.57317 6.19711 7.5307C6.1007 7.48824 6.0132 7.42601 5.93966 7.34761L2.31633 3.51666C2.24279 3.43826 2.15529 3.37604 2.05888 3.33357C1.96248 3.2911 1.85907 3.26924 1.75464 3.26924C1.6502 3.26924 1.5468 3.2911 1.45039 3.33357C1.35399 3.37604 1.26649 3.43826 1.19294 3.51666C1.0456 3.67338 0.962891 3.88538 0.962891 4.10636C0.962891 4.32734 1.0456 4.53934 1.19294 4.69606L4.82418 8.53537C5.26918 9.00529 5.87241 9.26924 6.50135 9.26924C7.13029 9.26924 7.73352 9.00529 8.17852 8.53537L11.8098 4.69606C11.9571 4.53934 12.0398 4.32734 12.0398 4.10636C12.0398 3.88538 11.9571 3.67338 11.8098 3.51666Z" fill="currentColor"></path>
                  </svg>
                </div>
              </Link>
            </li>
            <li><Link href="/ads" className="text-lg text-white hover:text-gray-300 font-medium transition duration-200">Publicitate Online</Link></li>
          </ul>
          <div className="hidden xl:flex items-center gap-2">
            <Link href="#" className="hidden 2xl:block mr-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M19.6343 17.871L15.7634 13.9984C18.6598 10.1278 17.87 4.64195 13.9994 1.74551C10.1288 -1.15092 4.64292 -0.361157 1.74649 3.50949C-1.14994 7.38013 -0.36018 12.866 3.51046 15.7624C6.61969 18.0891 10.8901 18.0891 13.9994 15.7624L17.872 19.635C18.3587 20.1216 19.1477 20.1216 19.6343 19.635C20.121 19.1483 20.121 18.3593 19.6343 17.8727L19.6343 17.871ZM8.7872 15.015C5.34716 15.015 2.55848 12.2263 2.55848 8.78623C2.55848 5.34618 5.34716 2.55751 8.7872 2.55751C12.2273 2.55751 15.0159 5.34618 15.0159 8.78623C15.0123 12.2247 12.2257 15.0113 8.7872 15.015Z" fill="#19191B"></path>
              </svg>
            </Link>
            <Link href="#" className="inline-flex justify-center items-center text-center h-12 p-5 px-6 font-semibold text-white hover:text-black focus:text-black bg-transparent hover:bg-white focus:bg-white border border-gray-300 rounded-full focus:ring-4 focus:ring-white focus:ring-opacity-50 transition duration-200">Login</Link>
            <Link href="#" className="inline-flex justify-center items-center text-center h-12 p-5 px-6 font-semibold text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-full focus:ring-4 focus:ring-blue-200 transition duration-200">Get started</Link>
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
            <Link href="#" className="block w-full px-4 py-2 text-center font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
              Login
            </Link>
            <Link href="#" className="mt-2 block w-full px-4 py-2 text-center font-medium text-blue-600 bg-white border border-blue-600 hover:bg-gray-50 rounded-md">
              Get started
            </Link>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Navbar