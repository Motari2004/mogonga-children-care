import Link from 'next/link'
import { FileText, CheckCircle, AlertCircle, Users, Heart } from 'lucide-react'

export default function TermsPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            Terms and conditions for using our website
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-8 w-8 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-800">Terms and Conditions</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              By accessing and using the Mogonga Children Care website, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Use of Website</h3>
                <p className="text-gray-600">
                  You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Donations</h3>
                <p className="text-gray-600 mb-2">When making a donation:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>All donations are final and non-refundable</li>
                  <li>You will receive a receipt for tax purposes</li>
                  <li>We reserve the right to refuse any donation</li>
                  <li>Donations are used to support our mission and programs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Intellectual Property</h3>
                <p className="text-gray-600">
                  All content on this website, including text, images, logos, and videos, is the property of Mogonga Children Care and is protected by copyright laws. You may not reproduce, distribute, or modify any content without our prior written consent.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="h-5 w-5 text-amber-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Limitation of Liability</h3>
                </div>
                <p className="text-gray-600">
                  Mogonga Children Care shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our website or any information contained herein.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">External Links</h3>
                <p className="text-gray-600">
                  Our website may contain links to external websites. We are not responsible for the content or privacy practices of these sites.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Changes to Terms</h3>
                <p className="text-gray-600">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Governing Law</h3>
                <p className="text-gray-600">
                  These terms shall be governed by and construed in accordance with the laws of Kenya.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact Information</h3>
                <p className="text-gray-600">
                  For questions about these Terms of Service, please contact:<br />
                  Email: <a href="mailto:info@mogongachildren.org" className="text-emerald-600 hover:underline">info@mogongachildren.org</a><br />
                  Phone: +254 712 713 601
                </p>
              </div>

              <div className="border-t pt-4 mt-4">
                <p className="text-sm text-gray-500">Last updated: January 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}