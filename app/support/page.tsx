'use client'

import { useState } from 'react'
import { Heart, Phone, Copy, Check } from 'lucide-react'

export default function SupportPage() {
  const [copied, setCopied] = useState(false)

  const mpesaNumber = '+254 712 713 601'
  
  const copyMpesaNumber = () => {
    navigator.clipboard.writeText('254712713601')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Support Our Children</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Your generous donation helps provide food, shelter, education, and medical care to orphaned children.
      </p>

      <div className="max-w-md mx-auto">
        {/* M-PESA Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl shadow-lg p-8 text-center text-white">
          <Phone className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Donate via M-PESA</h2>
          <p className="text-emerald-100 mb-6">Send your donation directly to:</p>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6">
            <p className="text-sm text-emerald-200 mb-1">M-PESA Number</p>
            <p className="text-3xl font-bold">{mpesaNumber}</p>
          </div>

          <button
            onClick={copyMpesaNumber}
            className="bg-white/20 hover:bg-white/30 rounded-lg px-6 py-3 transition flex items-center justify-center gap-2 mx-auto"
          >
            {copied ? (
              <>
                <Check className="h-5 w-5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-5 w-5" />
                <span>Copy Number</span>
              </>
            )}
          </button>

          <div className="mt-6 text-left text-sm text-emerald-200">
            <p className="font-semibold mb-2 text-center">How to donate:</p>
            <ol className="space-y-1 text-xs">
              <li>1. Go to M-PESA on your phone</li>
              <li>2. Select "Lipa na M-PESA"</li>
              <li>3. Choose "Send Money"</li>
              <li>4. Enter number: <strong>{mpesaNumber}</strong></li>
              <li>5. Enter Amount</li>
              <li>6. Enter your PIN and confirm</li>
            </ol>
          </div>
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          All donations go directly to children's care. Thank you for your support! ❤️
        </p>
      </div>
    </div>
  )
}