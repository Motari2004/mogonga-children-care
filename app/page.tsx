'use client'
import Link from 'next/link'
import { Heart, Users, GraduationCap, ArrowRight, Calendar, Award, Target,Play,X  } from 'lucide-react'
import { useState } from 'react' 


export default function HomePage() {

const [mediaModal, setMediaModal] = useState({ 
  isOpen: false, 
  src: '', 
  title: '', 
  type: 'video' 
})

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[520px] flex items-center justify-center text-center">

        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{

            backgroundImage: "url('/images/hero-bg.jpg')"

          }}
        />


        <div className="absolute inset-0 w-full h-full bg-black/60" />
        <div className="relative w-full container-custom z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Every Child Deserves <span className="text-amber-400">Love, Care & Hope</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Riamanoti Mogonga Children Care provides a safe, nurturing home for orphaned and vulnerable children in Kisii, Kenya.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/support" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
                Sponsor a Child
              </Link>
              <Link href="/contact" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/40 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 inline-block">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Reduced padding from py-20 to py-12 */}
      <section className="py-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">About Us</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-5"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn about our mission, vision, and the impact we're making in the community
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Image Section */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Children at Mogonga Children Care"
                  className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-amber-500 text-white p-3 rounded-xl shadow-lg hidden md:block">
                <div className="text-xl font-bold">12+</div>
                <div className="text-xs">Years of Service</div>
              </div>
            </div>

            {/* Content Section */}
            <div>
              <div className="mb-5">
                <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Our Story</span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 mb-3">
                  Providing Hope & Healing Since 2013
                </h3>
              </div>
              
              <p className="text-gray-600 mb-3 leading-relaxed">
                Mogonga Children Care was founded in 2013 by a group of passionate community members who saw the growing need for a safe haven for orphaned and vulnerable children in Kisii County, Kenya.
              </p>
              
              <p className="text-gray-600 mb-5 leading-relaxed">
                What started as a small home for 10 children has now grown into a thriving community that cares for over 50 children, providing them with shelter, nutrition, education, healthcare, and most importantly - love and emotional support.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1.5 rounded-lg">
                    <Target className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Our Mission</h4>
                    <p className="text-xs text-gray-600">To provide holistic care and empower children</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1.5 rounded-lg">
                    <Award className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Our Vision</h4>
                    <p className="text-xs text-gray-600">Every child grows in a loving environment</p>
                  </div>
                </div>
              </div>

              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition group text-sm"
              >
                Learn More About Us 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Reduced padding from py-20 to py-12 */}
      <section className="py-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Our Gallery</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-5"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Moments of joy, learning, and growth at Mogonga Children Care
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="/images/learning-time.jpg"
                  alt="Children studying together"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Learning Time</h3>
                <p className="text-gray-600 text-sm">Daily learning sessions with dedicated teachers.</p>
                <div className="mt-2 flex items-center gap-2 text-xs text-emerald-600">
                  <Calendar className="h-3 w-3" />
                  <span>Daily Sessions</span>
                </div>
              </div>
            </div>












            {/* Gallery Item 2 - Video */}
            <div 
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setVideoModal({ 
                isOpen: true, 
                src: "/videos/play-recreation.mp4", 
                title: "Play & Recreation" 
              })}
            >
              <div className="relative h-56 overflow-hidden">
                <video 
                  src="/videos/play-recreation.mp4"
                  poster="/images/play-recreation-poster.png"
                  className="h-full w-[100%] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-6 w-6 text-emerald-600 ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">VIDEO</span>
                  <h3 className="text-lg font-semibold text-gray-800">Play & Recreation</h3>
                </div>
                <p className="text-gray-600 text-sm">Fun outdoor activities for physical health.</p>
                <div className="mt-2 flex items-center gap-2 text-xs text-emerald-600">
                  <Calendar className="h-3 w-3" />
                  <span>Daily Activities</span>
                </div>
              </div>
            </div>








            {/* Gallery Item 3 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="/images/meal-time.jpg"
                  alt="Meal time"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Nutritious Meals</h3>
                <p className="text-gray-600 text-sm">3 healthy meals plus snacks daily.</p>
                <div className="mt-2 flex items-center gap-2 text-xs text-emerald-600">
                  <Calendar className="h-3 w-3" />
                  <span>Daily Nutrition</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/gallery" 
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Cards Section - Reduced padding from py-20 to py-12 */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-3">
            Our Mission in Action
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We are committed to providing every child with the love, care, and opportunities they deserve.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 text-center hover:-translate-y-2">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Love & Shelter</h3>
              <p className="text-gray-600 text-sm">Providing a safe, loving home for every child</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 text-center hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Education</h3>
              <p className="text-gray-600 text-sm">Ensuring access to quality schooling</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 text-center hover:-translate-y-2">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Support</h3>
              <p className="text-gray-600 text-sm">Building strong community connections</p>
            </div>
          </div>
        </div>
      </section>



























      {/* Borehole Project Section - NEW */}
      <section className="py-12 bg-gradient-to-b from-white to-emerald-50">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide bg-emerald-100 px-4 py-1 rounded-full inline-block mb-3">
              Current Project
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Bringing Clean Water to Our Children
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-5"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A transformative borehole project to provide safe, reliable water for our 50+ children and the surrounding community.
            </p>
          </div>

          {/* Thank You Banner - Brother Peter & Clare */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
            <div className="flex items-start gap-3">
              <div className="bg-amber-500 text-white p-2 rounded-full flex-shrink-0">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">🙏 A HUGE Thank You!</h4>
                <p className="text-gray-700 text-sm">
                  To <span className="font-semibold text-emerald-700">Brother Peter and Clare</span> for their generous contribution that kicked off this borehole drilling project. Your support is making clean water a reality for our children!
                </p>
              </div>
            </div>
            <span className="bg-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
              Project Launched
            </span>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left Column - Text */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Drilling for a Brighter Future</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                For years, we have relied on distant or unreliable water sources, making daily life a constant challenge—from cooking and cleaning to providing fresh drinking water for our children.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Thanks to the initial contribution from <span className="font-semibold text-emerald-700">Brother Peter and Clare</span>, we have broken ground and started the drilling process. The machinery is on site, and we are making steady progress toward striking clean water!
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <span className="font-semibold text-emerald-700">But we need your help</span> to reach the water table and complete the installation of the pump and piping system.
              </p>

              {/* What's Needed */}
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-amber-500 text-xl mb-1">⛏️</div>
                  <h4 className="font-semibold text-gray-800 text-sm">Complete Drilling</h4>
                  <p className="text-xs text-gray-500">Reach the water table</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-blue-500 text-xl mb-1">🔧</div>
                  <h4 className="font-semibold text-gray-800 text-sm">Pump & Piping</h4>
                  <p className="text-xs text-gray-500">Installation costs</p>
                </div>
              </div>

              {/* Donate Button for this project */}
              <Link 
                href="/support?project=borehole" 
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >

                Donate to the Borehole Project
              </Link>
              <p className="text-xs text-gray-400 mt-2">Every contribution gets us closer to clean water! 💧</p>
            </div>

            {/* Right Column - Photos & Video */}
            <div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                {/* Photo 1 */}
                <div 
                  className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer"
                  onClick={() => setMediaModal({ 
                    isOpen: true, 
                    src: "/images/borehole-drilling-1.jpg", 
                    title: "Drilling Machinery in Action",
                    type: 'image'
                  })}
                >
                  <img 
                    src="/images/borehole-drilling-1.jpg" 
                    alt="Drilling machinery in action"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs bg-black/50 px-3 py-1 rounded-full">View</span>
                  </div>
                </div>
                {/* Photo 2 */}
                <div 
                  className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer"
                  onClick={() => setMediaModal({ 
                    isOpen: true, 
                    src: "/images/borehole-drilling-2.jpg", 
                    title: "Brother Peter & Clare at the Site",
                    type: 'image'
                  })}
                >
                  <img 
                    src="/images/borehole-drilling-2.jpg" 
                    alt="Brother Peter and Clare at the site"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs bg-black/50 px-3 py-1 rounded-full">View</span>
                  </div>
                </div>
              </div>
              {/* Photo 3 + Video Button */}
              <div className="grid grid-cols-2 gap-3">
                {/* Photo 3 */}
                <div 
                  className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer"
                  onClick={() => setMediaModal({ 
                    isOpen: true, 
                    src: "/images/borehole-drilling-3.jpg", 
                    title: "Children Watching the Drilling",
                    type: 'image'
                  })}
                >
                  <img 
                    src="/images/borehole-drilling-3.jpg" 
                    alt="Children watching the drilling"
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs bg-black/50 px-3 py-1 rounded-full">View</span>
                  </div>
                </div>

                {/* Video Thumbnail */}
                <div 
                  className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer"
                  onClick={() => setMediaModal({ 
                    isOpen: true, 
                    src: "https://res.cloudinary.com/djrxuieyu/video/upload/f_auto,q_auto/v1784916703/borehole-drilling_o9br1a.mp4", 
                    title: "Borehole Drilling Progress",
                    type: 'video'
                  })}
                >
                  <img 
                    src="https://res.cloudinary.com/djrxuieyu/video/upload/w_400,h_320,c_fill/v1784916703/borehole-drilling_o9br1a.jpg" 
                    alt="Watch drilling video"
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                    <div className="bg-white/90 rounded-full p-2.5 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-5 w-5 text-emerald-600 ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-1 right-2 text-white text-[10px] bg-black/60 px-2 py-0.5 rounded-full">VIDEO</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                📸 Brother Peter and Clare visiting the site • Drilling in action • Our children watching excitedly
              </p>
            </div>
          </div>

        </div>
      </section>











      {/* CTA Section - Reduced padding from py-20 to py-12 */}
      <section className="py-12 bg-emerald-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Make a Difference Today
          </h2>
          <p className="text-lg md:text-xl text-emerald-100 mb-6 max-w-2xl mx-auto">
            Your support can change a child's life forever.
          </p>
          <Link 
            href="/support" 
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Donate Now
          </Link>
        </div>




      </section>




      {/* Media Modal - Handles both Videos & Images */}
      {mediaModal.isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setMediaModal({ isOpen: false, src: '', title: '', type: 'video' })}
        >
          <div 
            className="relative max-w-4xl w-full mx-4 bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMediaModal({ isOpen: false, src: '', title: '', type: 'video' })}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            
            <div className="p-4 bg-emerald-600 text-white">
              <h3 className="text-xl font-semibold">{mediaModal.title}</h3>
            </div>
            
            <div className="relative aspect-video bg-black">
              {mediaModal.type === 'video' ? (
                <video
                  src={mediaModal.src}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <img
                  src={mediaModal.src}
                  alt={mediaModal.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}