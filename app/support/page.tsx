'use client'

import { useState } from 'react'
import { Heart, Phone, Copy, Check, CreditCard, Globe, Send, HandHeart } from 'lucide-react'

export default function SupportPage() {
  const [copiedPayPal, setCopiedPayPal] = useState(false)
  const [copiedMoneyGram, setCopiedMoneyGram] = useState(false)

  const paypalEmail = 'evansmanoti@yahoo.com'
  const moneyGramNumber = '+254 712 713 601'
  const moneyGramName = 'Evans Masai Manoti'
  
  const copyToClipboard = (text: string, type: 'paypal' | 'moneygram') => {
    navigator.clipboard.writeText(text)
    if (type === 'paypal') {
      setCopiedPayPal(true)
      setTimeout(() => setCopiedPayPal(false), 2000)
    } else {
      setCopiedMoneyGram(true)
      setTimeout(() => setCopiedMoneyGram(false), 2000)
    }
  }

  return (
    <div className="container-custom py-16">

      {/* Prayer Request Section */}
      <div className="max-w-3xl mx-auto mb-12 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl p-8 text-center border border-amber-200">
        <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <HandHeart className="h-8 w-8 text-amber-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">A Humble Prayer Request</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          To anyone who has gone through our website and has been inspired to help the orphans, 
          we humbly ask for your support. Anything small can be of much help, and we will appreciate it 
          from the bottom of our hearts. Your generosity, whether big or small, makes a difference 
          in the life of a child. May God bless you abundantly.
        </p>
        <p className="text-emerald-600 font-semibold italic">
          "Whoever is generous to the poor lends to the Lord, and He will repay him for his deed." 
          - Proverbs 19:17
        </p>
      </div>
      
      <h1 className="text-4xl font-bold text-center mb-4">Support Our Children</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Your generous donation helps provide food, shelter, education, and medical care to orphaned children.
      </p>

      <div className="max-w-4xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* PayPal Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-center text-white">
            <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <CreditCard className="h-10 w-10" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Donate via PayPal</h2>
            <p className="text-blue-100 mb-6">Secure online payments worldwide</p>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-200 mb-1">PayPal Email</p>
              <p className="text-xl font-bold break-all">{paypalEmail}</p>
            </div>

            <button
              onClick={() => copyToClipboard(paypalEmail, 'paypal')}
              className="bg-white/20 hover:bg-white/30 rounded-lg px-6 py-3 transition flex items-center justify-center gap-2 mx-auto w-full"
            >
              {copiedPayPal ? (
                <>
                  <Check className="h-5 w-5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-5 w-5" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <div className="mt-6 text-left text-sm text-blue-200">
              <p className="font-semibold mb-2 text-center">How to donate via PayPal:</p>
              <ol className="space-y-1 text-xs">
                <li>1. Log in to your PayPal account</li>
                <li>2. Click "Send & Request"</li>
                <li>3. Enter email: <strong>{paypalEmail}</strong></li>
                <li>4. Enter amount and currency</li>
                <li>5. Add note "Donation for children"</li>
                <li>6. Confirm and send</li>
              </ol>
            </div>
          </div>

          {/* MoneyGram Section */}
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-xl shadow-lg p-8 text-center text-white">
            <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-10 w-10" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Donate via MoneyGram</h2>
            <p className="text-yellow-100 mb-6">Send money from anywhere in the world</p>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
              <p className="text-sm text-yellow-200 mb-1">Receiver Name</p>
              <p className="text-xl font-bold">{moneyGramName}</p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-200 mb-1">Receiver Number</p>
              <p className="text-xl font-bold">{moneyGramNumber}</p>
            </div>

            <button
              onClick={() => copyToClipboard(moneyGramNumber, 'moneygram')}
              className="bg-white/20 hover:bg-white/30 rounded-lg px-6 py-3 transition flex items-center justify-center gap-2 mx-auto w-full"
            >
              {copiedMoneyGram ? (
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

            <div className="mt-6 text-left text-sm text-yellow-200">
              <p className="font-semibold mb-2 text-center">How to donate via MoneyGram:</p>
              <ol className="space-y-1 text-xs">
                <li>1. Visit any MoneyGram agent near you</li>
                <li>2. Fill out the send form</li>
                <li>3. Receiver Name: <strong>{moneyGramName}</strong></li>
                <li>4. Receiver Number: <strong>{moneyGramNumber}</strong></li>
                <li>5. Select Kenya as destination</li>
                <li>6. Pay amount plus fees</li>
                <li>7. Share reference number with us</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Local Transfer Option */}
        <div className="mt-8 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl shadow-lg p-8 text-center text-white">
          <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <Heart className="h-10 w-10" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Local Transfer For Any Donation</h2>
          <p className="text-emerald-100 mb-6">For donors within Kenya</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm text-emerald-200 mb-1">Bank</p>
              <p className="text-2xl font-bold">KCB</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm text-emerald-200 mb-1">Account Number</p>
              <p className="text-2xl font-bold">1283066505</p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          All donations go directly to children's care. For bank transfer details, please contact us. Thank you for your support! ❤️
        </p>
      </div>
    </div>
  )
}