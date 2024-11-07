'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen)
  }

  const closeMobileNav = () => {
    setMobileNavOpen(false)
  }

  const navItems = [
    { name: 'Servicii SEO', href: '/seo' },
    { name: 'Dezvoltare Web', href: '/web-development' },
    {
      name: 'Dezvoltare Mobilă',
      href: '/mobile-development',
      dropdownItems: [
        { name: 'iOS', href: '/mobile-development/ios' },
        { name: 'Android', href: '/mobile-development/android' },
        { name: 'Cross-Platform', href: '/mobile-development/cross-platform' },
      ],
    },
    { name: 'Publicitate Online', href: '/ads' },
  ]

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-gray-900/80 to-blue-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img className="h-8 w-auto" src="/logo1.svg" alt="Logo" />
              <span className="ml-2 text-xl font-bold text-white">solicita.ro</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                item.dropdownItems ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="text-white hover:bg-blue-800/50 hover:text-white">
                        {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.dropdownItems.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.name}>
                          <Link href={dropdownItem.href} className="w-full text-black hover:text-black" onClick={closeMobileNav}>
                            {dropdownItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:bg-blue-800/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Button asChild variant="outline" className="text-black border-white hover:bg-blue-800/50 hover:text-white">
              <Link href="/contact">Contactează-ne</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMobileNav} className="text-white">
              <span className="sr-only">Open main menu</span>
              {mobileNavOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdownItems ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className="w-full text-left text-white hover:bg-blue-800/50 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center justify-start"
                      >
                        {item.name}
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: openDropdown === item.name ? 'auto' : 0,
                          opacity: openDropdown === item.name ? 1 : 0
                        }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 space-y-1">
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={closeMobileNav}
                              className="text-gray-300 hover:bg-blue-800/50 hover:text-white block px-3 py-2 rounded-md text-sm"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMobileNav}
                      className="text-white hover:bg-blue-800/50 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="mt-3 px-2">
                <Button asChild variant="outline" className="w-full text-white border-white hover:bg-blue-800/50">
                  <Link href="/contact" onClick={closeMobileNav}>Contactează-ne</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
