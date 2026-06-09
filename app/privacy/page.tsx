import Link from 'next/link'
import { Shield, Lock, Eye, Database, Mail, Phone } from 'lucide-react'

export default function PrivacyPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            How we protect and handle your information
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-800">Our Commitment to Privacy</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              At Mogonga Children Care, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or interact with us.
            </p>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Database className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Information We Collect</h3>
                </div>
                <p className="text-gray-600 mb-2">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Donation history and payment information</li>
                  <li>Communication preferences</li>
                  <li>Website usage data through cookies</li>
                  <li>Information you provide when signing up for newsletters or events</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-xl font-semibold text-gray-800">How We Use Your Information</h3>
                </div>
                <p className="text-gray-600 mb-2">We use your information to:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Process donations and provide tax receipts</li>
                  <li>Communicate updates about our programs and impact</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Data Protection</h3>
                </div>
                <p className="text-gray-600">
                  We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse. All payment transactions are encrypted using SSL technology.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Sharing Your Information</h3>
                <p className="text-gray-600">
                  We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our mission, subject to confidentiality agreements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Cookies</h3>
                <p className="text-gray-600">
                  Our website uses cookies to enhance your browsing experience. You can adjust your browser settings to refuse cookies if you prefer.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Your Rights</h3>
                <p className="text-gray-600 mb-2">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact Us</h3>
                <p className="text-gray-600">
                  If you have questions about this Privacy Policy, please contact us at:<br />
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