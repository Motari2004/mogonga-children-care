'use client'

import Link from 'next/link'
import { Heart, Mail, Phone, MapPin, ExternalLink, Code, Sparkles, ArrowRight } from 'lucide-react'
import { useState } from 'react'

// ============================================
// EASY CONFIGURATION - Change these variables
// ============================================
const COLORS = {
  footerBg: '#111827',
  textPrimary: '#ffffff',
  textSecondary: '#d1d5db',
  textMuted: '#9ca3af',
  textHover: '#34d399',
  iconColor: '#10b981',
  borderColor: '#1f2937',
  designBg: '#1f2937',
  designBorder: '#374151',
}

const FOOTER_CONFIG = {
  orgName: 'Mogonga Care',
  orgDescription: 'Providing hope, love, and education to orphaned and vulnerable children in Kisii, Kenya since 2013.',
  
  quickLinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Sponsor a Child', href: '/support' },
    { name: 'Contact Us', href: '/contact' },
  ],
  
  contactInfo: {
    address: 'Mogonga Village, Kisii County, Kenya',
    addressFull: 'Mogonga Village, Kisii County, Kenya',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mogonga+Kisii+Kenya',
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.472654059368!2d34.7666!3d-0.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b3c7f8e2b4b4b%3A0x8b4b4b4b4b4b4b4b!2sMogonga%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
    phone: '+254 712 713 601',
    email: 'evansmanoti@yahoo.com',
  },
  
  // 🆕 NEW: Design Team Contact Info
  designTeam: {
    name: 'Web Design & Development Team',
    description: 'We build beautiful, fast, and responsive websites for organizations like yours.',
    phone: '+254 716594620', // Update with design team's phone
    email: 'hopefreymosingi1@gmail.com', // Update with design team's email
    website: 'https://scorpiotech-digitalsolutions.vercel.app/', // Update with your portfolio
    services: ['Custom Websites', 'E-Commerce', 'Mobile Apps', 'SEO Optimization'],
  },
  
  bottomLinks: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'FAQ', href: '/faq' },
  ],
  
  showQuickLinks: true,
  showContactInfo: true,
  showDesignTeam: true, // Toggle this to show/hide the design team section
  showBottomLinks: true,
}
// ============================================

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <footer style={{ backgroundColor: COLORS.footerBg, color: COLORS.textSecondary }}>
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart 
                className="h-6 w-6" 
                style={{ color: COLORS.iconColor, fill: COLORS.iconColor }} 
              />
              <span className="font-bold text-xl" style={{ color: COLORS.textPrimary }}>
                {FOOTER_CONFIG.orgName}
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
              {FOOTER_CONFIG.orgDescription}
            </p>
          </div>

          {/* Quick Links */}
          {FOOTER_CONFIG.showQuickLinks && (
            <div>
              <h3 className="font-semibold mb-4" style={{ color: COLORS.textPrimary }}>Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {FOOTER_CONFIG.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="transition-colors duration-300 inline-block"
                      style={{ 
                        color: hoveredLink === link.name ? COLORS.textHover : COLORS.textSecondary 
                      }}
                      onMouseEnter={() => setHoveredLink(link.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact Info */}
          {FOOTER_CONFIG.showContactInfo && (
            <div>
              <h3 className="font-semibold mb-4" style={{ color: COLORS.textPrimary }}>Contact Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} style={{ color: COLORS.iconColor, marginTop: '2px' }} />
                  <a 
                    href={FOOTER_CONFIG.contactInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:underline inline-flex items-center gap-1"
                    style={{ 
                      color: hoveredLink === 'address' ? COLORS.textHover : COLORS.textSecondary 
                    }}
                    onMouseEnter={() => setHoveredLink('address')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {FOOTER_CONFIG.contactInfo.address}
                    <ExternalLink size={12} />
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} style={{ color: COLORS.iconColor }} />
                  <a 
                    href={`tel:${FOOTER_CONFIG.contactInfo.phone.replace(/\s/g, '')}`}
                    className="transition-colors duration-300"
                    style={{ 
                      color: hoveredLink === 'phone' ? COLORS.textHover : COLORS.textSecondary 
                    }}
                    onMouseEnter={() => setHoveredLink('phone')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {FOOTER_CONFIG.contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} style={{ color: COLORS.iconColor }} />
                  <a 
                    href={`mailto:${FOOTER_CONFIG.contactInfo.email}`}
                    className="transition-colors duration-300"
                    style={{ 
                      color: hoveredLink === 'email' ? COLORS.textHover : COLORS.textSecondary 
                    }}
                    onMouseEnter={() => setHoveredLink('email')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {FOOTER_CONFIG.contactInfo.email}
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* 🆕 NEW: Design Team Section */}
          {FOOTER_CONFIG.showDesignTeam && (
            <div 
              className="rounded-xl p-5 border"
              style={{ 
                backgroundColor: COLORS.designBg, 
                borderColor: COLORS.designBorder 
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-emerald-500/20 p-1.5 rounded-lg">
                  <Code className="h-5 w-5" style={{ color: COLORS.iconColor }} />
                </div>
                <h3 className="font-semibold text-sm" style={{ color: COLORS.textPrimary }}>
                  {FOOTER_CONFIG.designTeam.name}
                </h3>
              </div>
              
              <p className="text-xs leading-relaxed mb-3" style={{ color: COLORS.textSecondary }}>
                {FOOTER_CONFIG.designTeam.description}
              </p>

              {/* Services Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {FOOTER_CONFIG.designTeam.services.map((service) => (
                  <span 
                    key={service}
                    className="text-[10px] px-2 py-0.5 rounded-full border"
                    style={{ 
                      color: COLORS.textMuted,
                      borderColor: COLORS.designBorder,
                    }}
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-col gap-2">
                <a 
                  href={`mailto:${FOOTER_CONFIG.designTeam.email}`}
                  className="inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: COLORS.iconColor,
                    color: '#ffffff',
                  }}
                >
                  <Mail className="h-3.5 w-3.5" />
                  Email Design Team
                </a>
                <a 
                  href={`tel:${FOOTER_CONFIG.designTeam.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: 'transparent',
                    color: COLORS.textSecondary,
                    border: `1px solid ${COLORS.designBorder}`,
                  }}
                >
                  <Phone className="h-3.5 w-3.5" />
                  {FOOTER_CONFIG.designTeam.phone}
                </a>
                <a 
                  href={FOOTER_CONFIG.designTeam.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 text-xs transition-colors duration-300"
                  style={{ color: COLORS.textMuted }}
                >
                  View Portfolio <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-6 mt-6 text-center text-sm"
          style={{ borderTop: `1px solid ${COLORS.borderColor}` }}
        >
          <p style={{ color: COLORS.textSecondary }}>
            &copy; {new Date().getFullYear()} {FOOTER_CONFIG.orgName}. All rights reserved.
          </p>
          
          {FOOTER_CONFIG.showBottomLinks && (
            <div className="flex justify-center gap-4 mt-2 text-xs">
              {FOOTER_CONFIG.bottomLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="transition-colors duration-300"
                  style={{ 
                    color: hoveredLink === link.name ? COLORS.textHover : COLORS.textMuted 
                  }}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}