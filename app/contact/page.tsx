'use client'

import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: '#f0f9f4' }}>
      {/* Hero Section */}
      <section className="relative h-[200px] md:h-[250px] flex items-center">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/gallery-hero.jpg')"
          }}
        />
        <div className="absolute inset-0 w-full h-full bg-black/60" />
        <div className="relative w-full container-custom z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            Get in touch with us
          </p>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">Mogonga Village, Kisii County, Kenya</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Mogonga+Kisii+Kenya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline text-sm inline-flex items-center gap-1 mt-1"
                  >
                    Open in Google Maps <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <a href="tel:+254712713601" className="text-gray-600 hover:text-emerald-600">
                    +254 712 713 601
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <a href="mailto:info@mogongachildren.org" className="text-gray-600 hover:text-emerald-600">
                    info@mogongachildren.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h2>
            <div className="rounded-xl overflow-hidden shadow-lg h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.472654059368!2d34.7666!3d-0.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b3c7f8e2b4b4b%3A0x8b4b4b4b4b4b4b4b!2sMogonga%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mogonga Children Care Location"
              ></iframe>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Click the map for directions or open in Google Maps
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send us a Message</h2>
          <form className="space-y-4 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input type="email" placeholder="Your Email" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <input type="text" placeholder="Subject" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <textarea rows={5} placeholder="Your Message" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold w-full transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}