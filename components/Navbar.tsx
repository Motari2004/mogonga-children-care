'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Heart, Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Support', href: '/support' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Navbar - Fixed at top */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#f0f9f4]/95 backdrop-blur-md shadow-md' : 'bg-[#f0f9f4]'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <Heart className="h-7 w-7 md:h-8 md:w-8 text-emerald-600 fill-emerald-600" />
              <span className="font-bold text-lg md:text-xl text-gray-800">
                Mogonga<span className="text-emerald-600">ChildrenCare</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Donate Button Desktop */}
            <div className="hidden md:block">
              <Link
                href="/support"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Donate Now
              </Link>
            </div>

            {/* Hamburger Button - Mobile only */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-emerald-100 transition-colors z-50"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Modal - Simplified, no duplicate header */}
      <div 
        className={`fixed left-0 right-0 transition-all duration-300 ease-out md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          top: '64px', // Height of navbar on mobile (h-16 = 64px)
          bottom: 0,
          zIndex: 40
        }}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel - Simple menu without extra header */}
        <div 
          className={`absolute left-0 right-0 bg-[#f0f9f4] shadow-2xl transition-all duration-300 ease-out ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
          style={{ top: 0 }}
        >
          {/* Simple Menu Links - No duplicate logo or close button */}
          <div className="flex flex-col p-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-emerald-600 font-medium text-lg py-3 px-4 rounded-lg hover:bg-emerald-50 transition-all duration-200"
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Donate Button in Mobile Menu */}
            <div className="pt-2">
              <Link
                href="/support"
                className="block bg-emerald-600 hover:bg-emerald-700 text-white text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                onClick={handleLinkClick}
              >
                Donate Now
              </Link>
            </div>

            {/* Contact Info */}
            <div className="pt-6 mt-2 border-t border-emerald-100">
              <p className="text-sm text-emerald-600 font-semibold mb-2">Contact Us</p>
              <p className="text-sm text-gray-600 mb-1">📞 +254 712 345 678</p>
              <p className="text-sm text-gray-600">📧 info@mogongachildren.org</p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  )
}