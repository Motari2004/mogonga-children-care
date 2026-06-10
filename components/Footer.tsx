'use client'

import Link from 'next/link'
import { Heart, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'
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
  socialFacebook: '#1877f2',
  socialTwitter: '#1da1f2',
  socialInstagram: 'linear-gradient(135deg, #f09433 0%, #bc1888 100%)',
  socialYoutube: '#ff0000',
  socialTiktok: '#000000',
}

const FOOTER_CONFIG = {
  orgName: 'Mogonga Care',
  orgDescription: 'Providing hope, love, and education to orphaned and vulnerable children in Kisii, Kenya since 2010.',
  
  quickLinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Sponsor a Child', href: '/support' },
    { name: 'Contact Us', href: '/contact' },
  ],
  
  // Updated with real map coordinates for Mogonga, Kisii
  contactInfo: {
    address: 'Mogonga Village, Kisii County, Kenya',
    addressFull: 'Mogonga Village, Kisii County, Kenya',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mogonga+Kisii+Kenya',
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.472654059368!2d34.7666!3d-0.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b3c7f8e2b4b4b%3A0x8b4b4b4b4b4b4b4b!2sMogonga%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
    phone: '+254 712 713 601',
    email: 'info@mogongachildren.org',
  },
  
  socialLinks: {
    facebook: 'https://facebook.com/mogongachildren',
    twitter: 'https://twitter.com/mogongachildren',
    instagram: 'https://instagram.com/mogongachildren',
    youtube: 'https://youtube.com/@mogongachildren',
    tiktok: 'https://tiktok.com/@mogongachildren',
  },
  
  workingHours: {
    weekday: 'Monday - Friday: 8:00 AM - 5:00 PM',
    saturday: 'Saturday: 9:00 AM - 1:00 PM',
    sunday: 'Sunday: Closed',
  },
  
  bottomLinks: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'FAQ', href: '/faq' },
  ],
  
  showQuickLinks: true,
  showContactInfo: true,
  showSocialLinks: true,
  showWorkingHours: true,
  showBottomLinks: true,
}
// ============================================

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

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

          {/* Contact Info - With Clickable Map Link */}
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

        {/* Mini Map Preview */}
        <div className="mt-8 mb-6">
          <a 
            href={FOOTER_CONFIG.contactInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
          >
            <img 
              src="https://maps.googleapis.com/maps/api/staticmap?center=Mogonga,Kisii,Kenya&zoom=14&size=600x150&maptype=roadmap&markers=color:red%7C-Mogonga,Kisii,Kenya&key=YOUR_API_KEY"
              alt="Map to Mogonga Children Care"
              className="w-full h-32 object-cover"
              onError={(e) => {
                // Fallback if Google Maps API key is not set
                e.currentTarget.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.472654059368!2d34.7666!3d-0.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b3c7f8e2b4b4b%3A0x8b4b4b4b4b4b4b4b!2sMogonga%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              }}
            />
          </a>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-6 text-center text-sm"
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