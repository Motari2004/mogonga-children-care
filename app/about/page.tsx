import Link from 'next/link'
import { Heart, Target, Award, Users, Home, BookOpen, Stethoscope, Smile, Clock, CheckCircle, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#d1d1d1' }}>








      {/* Hero Section - Reduced height */}
      <section className="relative h-[200px] md:h-[250px] flex items-center">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/gallery-hero.jpg')"
          }}
        />
        <div className="absolute inset-0 w-full h-full bg-black/60" />
        <div className="relative w-full container-custom z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Gallery</h1>
          <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            Capturing precious moments of joy, learning, and growth
          </p>
        </div>
      </section>









      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Our Story</span>
              <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-4">A Beacon of Hope Since 2013</h2>
              <div className="w-16 h-1 bg-amber-500 mb-6"></div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2013 by a group of passionate community members, Mogonga Children Care has been a beacon of hope for orphaned and vulnerable children in Kisii County, Kenya.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                What started as a small home caring for just 10 children has blossomed into a thriving community that now supports over 50 children. We provide comprehensive care including shelter, nutrition, education, healthcare, and emotional support.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our approach combines traditional Kenyan values of communal care with modern child development practices, ensuring every child grows up in a nurturing environment.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Children at Mogonga"
                className="rounded-2xl shadow-xl w-full h-[350px] object-cover"
              />
              <div className="absolute -bottom-5 -left-5 bg-amber-500 text-white p-3 rounded-xl shadow-lg">
                <Heart className="h-8 w-8" />
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gray-200 rounded-xl p-5 text-center shadow-md hover:shadow-lg transition">
              <div className="text-3xl font-bold text-emerald-600 mb-1">50+</div>
              <div className="text-gray-600 text-sm">Children Cared For</div>
            </div>
            <div className="bg-white rounded-xl p-5 text-center shadow-md hover:shadow-lg transition">
              <div className="text-3xl font-bold text-emerald-600 mb-1">14+</div>
              <div className="text-gray-600 text-sm">Years of Service</div>
            </div>
            <div className="bg-white rounded-xl p-5 text-center shadow-md hover:shadow-lg transition">
              <div className="text-3xl font-bold text-emerald-600 mb-1">100%</div>
              <div className="text-gray-600 text-sm">School Enrollment</div>
            </div>
            <div className="bg-white rounded-xl p-5 text-center shadow-md hover:shadow-lg transition">
              <div className="text-3xl font-bold text-emerald-600 mb-1">20+</div>
              <div className="text-gray-600 text-sm">Staff & Volunteers</div>
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-6 shadow-md border border-emerald-100">
              <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide holistic care, love, and support to orphaned and vulnerable children, empowering them to reach their full potential through quality education, healthcare, and life skills development.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 shadow-md border border-amber-100">
              <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where every child grows up in a loving family environment with access to quality education and healthcare, becoming responsible, productive members of society.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Core Values</h2>
              <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white rounded-xl p-5 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Compassion</h3>
                <p className="text-gray-500 text-sm">Showing genuine love and care</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Excellence</h3>
                <p className="text-gray-500 text-sm">Striving for the best</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Community</h3>
                <p className="text-gray-500 text-sm">Working together for good</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Smile className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Respect</h3>
                <p className="text-gray-500 text-sm">Honoring every child's dignity</p>
              </div>
            </div>
          </div>

          {/* What We Provide Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">What We Provide</h2>
              <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
                <Home className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800">Safe Shelter</h3>
                  <p className="text-gray-500 text-sm">A loving, secure home environment</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
                <BookOpen className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800">Quality Education</h3>
                  <p className="text-gray-500 text-sm">School fees, supplies, and tutoring</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
                <Stethoscope className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800">Healthcare</h3>
                  <p className="text-gray-500 text-sm">Medical checkups and treatment</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
                <Heart className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800">Emotional Support</h3>
                  <p className="text-gray-500 text-sm">Counseling and loving care</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
                <Users className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800">Community</h3>
                  <p className="text-gray-500 text-sm">A sense of belonging and family</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
                <Clock className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800">Life Skills</h3>
                  <p className="text-gray-500 text-sm">Preparing for independent living</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Team Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Dedicated Team</h2>
              <div className="w-20 h-1 bg-amber-500 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the passionate individuals who make our work possible
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all text-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Jane Akinyi"
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800">Jane Akinyi</h3>
                  <p className="text-emerald-600 text-sm mb-2">Director & Founder</p>
                  <p className="text-gray-500 text-sm">Over 20 years of experience in child welfare</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all text-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="John Otieno"
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800">John Otieno</h3>
                  <p className="text-emerald-600 text-sm mb-2">Programs Coordinator</p>
                  <p className="text-gray-500 text-sm">Passionate about education and youth</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all text-center">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Mary Wanjiku"
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800">Mary Wanjiku</h3>
                  <p className="text-emerald-600 text-sm mb-2">Head of Caregiving</p>
                  <p className="text-gray-500 text-sm">Dedicated to children's emotional well-being</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Support Our Mission</h2>
            <p className="text-emerald-100 mb-5 max-w-2xl mx-auto">
              Your support can help us provide even more children with the love, care, and opportunities they deserve.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/support" 
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                Sponsor a Child <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                href="/contact" 
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/40 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}