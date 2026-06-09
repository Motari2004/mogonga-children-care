'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp, Heart, Users, GraduationCap, Phone, Mail, MapPin } from 'lucide-react'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How can I sponsor a child?",
      answer: "You can sponsor a child by visiting our Support page and choosing your preferred donation amount. You can also contact us directly to arrange a monthly sponsorship commitment. Your sponsorship helps provide food, education, healthcare, and shelter for a child."
    },
    {
      question: "How do I make a donation?",
      answer: "You can donate via M-PESA Paybill Number 123456 (Account: MOGONGA) or send directly to +254 712 713 601. We also accept bank transfers and international card payments through our Support page."
    },
    {
      question: "Can I visit the children?",
      answer: "Yes! We welcome visitors who wish to see our work and meet the children. Please contact us in advance to schedule a visit. We require all visitors to follow our safeguarding policies and guidelines."
    },
    {
      question: "What is M-PESA and how do I use it?",
      answer: "M-PESA is a mobile money transfer service in Kenya. To donate via M-PESA: Go to M-PESA on your phone → Select 'Lipa na M-PESA' → Choose 'Paybill' → Enter Business Number 123456 → Enter Account Number MOGONGA → Enter Amount → Enter your PIN and confirm."
    },
    {
      question: "Are my donations tax-deductible?",
      answer: "Yes, Mogonga Children Care is a registered charitable organization in Kenya. All donations are tax-deductible, and you will receive a receipt for your records."
    },
    {
      question: "How can I volunteer?",
      answer: "We welcome volunteers who can share their time and skills. Please contact us with your areas of interest and availability. Volunteers may help with tutoring, activities, maintenance, or administrative tasks."
    },
    {
      question: "What is the history of Mogonga Children Care?",
      answer: "Mogonga Children Care was founded in 2013 following the 2007/2008 post-election violence that left many children orphaned. What started as a small home for 10 children now cares for over 50 children, providing shelter, education, healthcare, and emotional support."
    },
    {
      question: "How are the children educated?",
      answer: "All children in our care attend local schools. We cover school fees, uniforms, books, and supplies. We also provide after-school tutoring and homework support."
    },
    {
      question: "Can I donate goods or supplies?",
      answer: "Yes! We welcome donations of food, clothing, school supplies, books, toys, and other essentials. Please contact us to arrange drop-off or delivery."
    },
    {
      question: "Where is Mogonga Children Care located?",
      answer: "We are located in Mogonga, Kisii County, Kenya. You can find our exact location by contacting us for directions."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
          <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            Find answers to common questions about our work
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="text-center mb-8">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Got Questions?</h2>
              <p className="text-gray-600 mt-2">
                We're here to help you understand our mission and how you can support
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Still Have Questions */}
            <div className="mt-8 bg-emerald-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Still Have Questions?</h3>
              <p className="text-gray-600 mb-4">
                We're happy to help! Contact us directly for any additional questions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="tel:+254712713601"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition"
                >
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
                <a 
                  href="mailto:info@mogongachildren.org"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition"
                >
                  <MapPin className="h-4 w-4" />
                  Visit Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}