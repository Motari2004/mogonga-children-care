'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Heart, Menu, X } from 'lucide-react'

// ============================================
// EASY CONFIGURATION - Change these variables
// ============================================
const COLORS = {





  // Navbar backgrounds
  navbarDefault: '#ffffff',      // Default navbar color (mint green)
  navbarScrolled: 'rgba(228, 228, 228, 0.95)', // Scrolled navbar color
  mobileMenuBg: '#f0f9f4',        // Mobile menu background
  




  // Text colors
  textPrimary: '#1f2937',         // Primary text color (gray-800)
  textSecondary: '#374151',       // Secondary text color (gray-700)
  textHover: '#059669',           // Hover text color (emerald-600)
  
  // Button colors
  buttonBg: '#059669',            // Donate button background
  buttonHover: '#047857',         // Donate button hover
  buttonText: '#ffffff',          // Donate button text
  
  // Icon colors
  iconColor: '#059669',           // Heart icon color
  
  // Border colors
  borderLight: '#f3f4f6',         // Light border color
  borderHover: '#d1fae5',         // Hover border color
}

const NAV_CONFIG = {
  // Navigation links
  links: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Support', href: '/support' },
    { name: 'Contact', href: '/contact' },
  ],
  
  // Contact info for mobile menu
  contactInfo: {
    phone: '+254 712 345 678',
    email: 'info@mogongachildren.org',
  },
  
  // Scroll threshold (px)
  scrollThreshold: 10,
  
  // Animation settings
  animationDelay: 0.05, // seconds between each menu item animation
}
// ============================================

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > NAV_CONFIG.scrollThreshold)
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
      <nav 
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? COLORS.navbarScrolled : COLORS.navbarDefault,
          boxShadow: scrolled ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: !scrolled ? `1px solid ${COLORS.borderHover}` : 'none'
        }}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 z-50" 
              onClick={handleLinkClick}
            >
              <Heart 
                className="h-8 w-8" 
                style={{ color: COLORS.iconColor, fill: COLORS.iconColor }} 
              />
              <span 
                className="font-bold text-xl"
                style={{ color: COLORS.textPrimary }}
              >
                Mogonga<span style={{ color: COLORS.iconColor }}>ChildrenCare</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_CONFIG.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-medium transition-colors duration-200 relative group"
                  style={{ color: COLORS.textSecondary }}
                  onMouseEnter={(e) => e.currentTarget.style.color = COLORS.textHover}
                  onMouseLeave={(e) => e.currentTarget.style.color = COLORS.textSecondary}
                >
                  {link.name}
                  <span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: COLORS.textHover }}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Donate Button Desktop */}
            <div className="hidden md:block">
              <Link
                href="/support"
                className="px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                style={{
                  backgroundColor: COLORS.buttonBg,
                  color: COLORS.buttonText
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.buttonHover}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.buttonBg}
              >
                Donate Now
              </Link>
            </div>

            {/* Hamburger Menu Button - Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 w-10 h-10 rounded-lg flex items-center justify-center focus:outline-none transition-colors"
              style={{ backgroundColor: isOpen ? COLORS.borderHover : 'transparent' }}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute block w-6 h-0.5 transform transition-all duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 top-2' : 'top-0'
                }`} style={{ backgroundColor: COLORS.textPrimary }}></span>
                <span className={`absolute block w-6 h-0.5 top-2 transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`} style={{ backgroundColor: COLORS.textPrimary }}></span>
                <span className={`absolute block w-6 h-0.5 transform transition-all duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 top-2' : 'top-4'
                }`} style={{ backgroundColor: COLORS.textPrimary }}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 backdrop-blur-sm transition-all duration-300 md:hidden ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div 
          className={`fixed top-0 right-0 h-full w-80 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ backgroundColor: COLORS.mobileMenuBg }}
        >
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-6 border-b" style={{ borderColor: COLORS.borderLight }}>
            <div className="flex items-center space-x-2">
              <Heart 
                className="h-8 w-8" 
                style={{ color: COLORS.iconColor, fill: COLORS.iconColor }} 
              />
              <span className="font-bold text-xl" style={{ color: COLORS.textPrimary }}>
                Mogonga<span style={{ color: COLORS.iconColor }}>Care</span>
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full transition-colors"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.borderLight}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" style={{ color: COLORS.textSecondary }} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col p-6 space-y-4">
            {NAV_CONFIG.links.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-lg py-3 border-b transition-colors duration-200 flex items-center justify-between group"
                style={{ 
                  color: COLORS.textSecondary,
                  borderColor: COLORS.borderLight,
                  animation: isOpen ? `slideIn ${0.3}s ease-out ${index * NAV_CONFIG.animationDelay}s forwards` : 'none',
                  opacity: 0,
                  transform: 'translateX(20px)'
                }}
                onClick={handleLinkClick}
                onMouseEnter={(e) => e.currentTarget.style.color = COLORS.textHover}
                onMouseLeave={(e) => e.currentTarget.style.color = COLORS.textSecondary}
              >
                {link.name}
                <span 
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: COLORS.textHover }}
                >→</span>
              </Link>
            ))}
            
            {/* Mobile Donate Button */}
            <div className="pt-4">
              <Link
                href="/support"
                className="block text-white text-center px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md"
                style={{ backgroundColor: COLORS.buttonBg }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.buttonHover}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.buttonBg}
                onClick={handleLinkClick}
              >
                Donate Now
              </Link>
            </div>

            {/* Contact Info in Mobile Menu */}
            <div className="pt-8 mt-4 border-t" style={{ borderColor: COLORS.borderLight }}>
              <p className="text-sm font-semibold mb-2" style={{ color: COLORS.textHover }}>Contact Us</p>
              <p className="text-sm mb-1" style={{ color: COLORS.textSecondary }}>📞 {NAV_CONFIG.contactInfo.phone}</p>
              <p className="text-sm" style={{ color: COLORS.textSecondary }}>📧 {NAV_CONFIG.contactInfo.email}</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="pt-20"></div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}