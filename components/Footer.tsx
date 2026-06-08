'use client'

import Link from 'next/link'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaLinkedinIn } from 'react-icons/fa'
import { useState } from 'react'

// ============================================
// EASY CONFIGURATION - Change these variables
// ============================================
const COLORS = {
  // Footer backgrounds
  footerBg: '#cccccc',           // Main footer background (gray-900)
  
  // Text colors
  textPrimary: '#000000',        // Primary text color (white)
  textSecondary: '#414141',      // Secondary text color (gray-300)
  textMuted: '#5e5e5e',          // Muted text color (gray-400)
  textHover: '#34d399',          // Hover text color (emerald-400)
  
  // Icon colors
  iconColor: '#10b981',          // Heart icon color (emerald-500)
  
  // Border colors
  borderColor: '#1f2937',        // Border color (gray-800)
  
  // Social media colors
  socialFacebook: '#1877f2',
  socialTwitter: '#1da1f2',
  socialInstagram: 'linear-gradient(135deg, #f09433 0%, #bc1888 100%)',
  socialYoutube: '#ff0000',
  socialTiktok: '#000000',
}

const FOOTER_CONFIG = {
  // Organization info
  orgName: 'Mogonga Care',
  orgDescription: 'Providing hope, love, and education to orphaned and vulnerable children in Kisii, Kenya since 2010.',
  
  // Quick links
  quickLinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Sponsor a Child', href: '/support' },
    { name: 'Contact Us', href: '/contact' },
  ],
  
  // Contact info
  contactInfo: {
    address: 'Mogonga, Kisii County, Kenya',
    phone: '+254 712 345 678',
    email: 'info@mogongachildren.org',
  },
  
  // Social media links
  socialLinks: {
    facebook: 'https://facebook.com/mogongachildren',
    twitter: 'https://twitter.com/mogongachildren',
    instagram: 'https://instagram.com/mogongachildren',
    youtube: 'https://youtube.com/@mogongachildren',
    tiktok: 'https://tiktok.com/@mogongachildren',
  },
  
  // Working hours
  workingHours: {
    weekday: 'Monday - Friday: 8:00 AM - 5:00 PM',
    saturday: 'Saturday: 9:00 AM - 1:00 PM',
    sunday: 'Sunday: Closed',
  },
  
  // Bottom bar links
  bottomLinks: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'FAQ', href: '/faq' },
  ],
  
  // Show/hide sections
  showQuickLinks: true,
  showContactInfo: true,
  showSocialLinks: true,
  showWorkingHours: true,
  showBottomLinks: true,
}
// ============================================

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

  return (
    <footer style={{ backgroundColor: COLORS.footerBg, color: COLORS.textSecondary }}>
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                  <span>{FOOTER_CONFIG.contactInfo.address}</span>
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

          {/* Social Media Links & Working Hours */}
          <div>
            {FOOTER_CONFIG.showSocialLinks && (
              <>
                <h3 className="font-semibold mb-4" style={{ color: COLORS.textPrimary }}>Follow Us</h3>
                <div className="flex space-x-3">
                  <a 
                    href={FOOTER_CONFIG.socialLinks.facebook}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: COLORS.socialFacebook }}
                    aria-label="Facebook"
                  >
                    <FaFacebookF size={18} className="text-white" />
                  </a>
                  <a 
                    href={FOOTER_CONFIG.socialLinks.twitter}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: COLORS.socialTwitter }}
                    aria-label="Twitter"
                  >
                    <FaTwitter size={18} className="text-white" />
                  </a>
                  <a 
                    href={FOOTER_CONFIG.socialLinks.instagram}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ background: COLORS.socialInstagram }}
                    aria-label="Instagram"
                  >
                    <FaInstagram size={18} className="text-white" />
                  </a>
                  <a 
                    href={FOOTER_CONFIG.socialLinks.youtube}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: COLORS.socialYoutube }}
                    aria-label="YouTube"
                  >
                    <FaYoutube size={18} className="text-white" />
                  </a>
                  <a 
                    href={FOOTER_CONFIG.socialLinks.tiktok}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: COLORS.socialTiktok }}
                    aria-label="TikTok"
                  >
                    <FaTiktok size={18} className="text-white" />
                  </a>
                </div>
              </>
            )}

            {/* Working Hours */}
            {FOOTER_CONFIG.showWorkingHours && (
              <div className="mt-6">
                <p className="text-sm mb-2" style={{ color: COLORS.textMuted }}>Office Hours</p>
                <p className="text-xs" style={{ color: COLORS.textSecondary }}>{FOOTER_CONFIG.workingHours.weekday}</p>
                <p className="text-xs" style={{ color: COLORS.textSecondary }}>{FOOTER_CONFIG.workingHours.saturday}</p>
                <p className="text-xs" style={{ color: COLORS.textSecondary }}>{FOOTER_CONFIG.workingHours.sunday}</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="mt-8 pt-6 text-center text-sm"
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