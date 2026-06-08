'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center text-gray-600 mb-12">We'd love to hear from you</p>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-emerald-600 mt-1" />
              <div><h3 className="font-semibold">Address</h3><p>Mogonga, Kisii County, Kenya</p></div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-emerald-600 mt-1" />
              <div><h3 className="font-semibold">Phone</h3><p>+254 712 345 678</p></div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-emerald-600 mt-1" />
              <div><h3 className="font-semibold">Email</h3><p>info@mogongachildren.org</p></div>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border rounded-lg px-4 py-2" />
          <input type="email" placeholder="Your Email" className="w-full border rounded-lg px-4 py-2" />
          <textarea rows={4} placeholder="Your Message" className="w-full border rounded-lg px-4 py-2" />
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold w-full">Send Message</button>
        </form>
      </div>
    </div>
  )
}