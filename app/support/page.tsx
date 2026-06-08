'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'

export default function SupportPage() {
  const [amount, setAmount] = useState(50)

  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Support Our Children</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Your generous donation helps provide food, shelter, education, and medical care to orphaned children.
      </p>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-6">
          <Heart className="h-12 w-12 text-emerald-600 mx-auto mb-2" />
          <h2 className="text-2xl font-semibold">Make a Donation</h2>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {[25, 50, 100, 250, 500].map((val) => (
              <button
                key={val}
                onClick={() => setAmount(val)}
                className={`py-2 rounded-lg font-semibold transition ${amount === val ? 'bg-emerald-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                ${val}
              </button>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Custom Amount ($)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition">
            Donate ${amount}
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            All donations are tax-deductible. 100% goes to children's care.
          </p>
        </div>
      </div>
    </div>
  )
}