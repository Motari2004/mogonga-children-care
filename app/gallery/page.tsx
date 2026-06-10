'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Heart, Play, X, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react'

export default function GalleryPage() {
  const [selectedMedia, setSelectedMedia] = useState<{ type: string; url: string; title: string; poster?: string } | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const videoRef = useRef<HTMLVideoElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const galleryItems = [
    // Video 1 - Children being served rice
    {
      id: 1,
      title: "Meal Time - Serving Rice",
      description: "Children being served nutritious rice during lunch time at Mogonga Children Care.",
      category: "Meals",
      type: "video",
      mediaUrl: "/videos/serving-rice.mp4",
      poster: "/images/serving-rice-poster.png",
    },
    // Video 2 - Children drinking tea and eating bananas
    {
      id: 2,
      title: "Breakfast Time - Tea & Ndizi",
      description: "Children enjoying their morning tea with ndizi (bananas) for breakfast.",
      category: "Meals",
      type: "video",
      mediaUrl: "/videos/tea-and-ndizi.mp4",
      poster: "/images/tea-ndizi-poster.jpg",
    },
    // Image 1 - Children washing hands in a queue
    {
      id: 3,
      title: "Hand Washing Routine",
      description: "Children lining up to wash their hands before eating, promoting good hygiene practices.",
      category: "Daily Life",
      type: "image",
      mediaUrl: "/images/hand-washing-queue.jpg",
    },
    // Image 2 - Children after raising the flag
    {
      id: 4,
      title: "Flag Raising Ceremony",
      description: "Children gathered for the morning flag raising ceremony, showing patriotism.",
      category: "Activities",
      type: "image",
      mediaUrl: "/images/flag-raising.jpg",
    },
    // Image 3 - Children eating inside the classroom
    {
      id: 5,
      title: "Lunch in Classroom",
      description: "Children enjoying their lunch together inside the classroom.",
      category: "Meals",
      type: "image",
      mediaUrl: "/images/eating-in-class.jpg",
    },
    // NEW: Children sleeping - Bedtime
    {
      id: 6,
      title: "Children sleeping",
      description: "Limited space forces children to sleep close together with minimal bedding and poor sleeping conditions.",
      category: "Daily Life",
      type: "image",
      mediaUrl: "/images/sleeping.jpg",
    },
    // NEW: Children sleeping - Dormitory
    {
      id: 7,
      title: "Sleeping Conditions",
      description: "Due to lack of beds the children are forced to sleep at the floor",
      category: "Daily Life",
      type: "image",
      mediaUrl: "/images/sleeping2.jpg",
    },





    {
      id: 8,
      title: "Bedtime Challenges",
      description: "Children sleeping on worn-out mattresses with insufficient blankets. Your support can help provide proper bedding.",
      category: "Daily Life",
      type: "image",
      mediaUrl: "/images/sleeping3.jpg",
    },













    {
      id: 9,
      title: "Bad Water Conditions",
      description: "Children collecting water from unsafe sources. The water is dirty and contaminated, causing health problems.",
      category: "Daily Life",
      type: "image",
      mediaUrl: "/images/bad-water.jpg",
    },









    {
      id: 14,
      title: "Pastor Manoti - Hard Work for the Children",
      description: "Pastor Manoti crushing rocks to earn money. Despite the difficult work, he uses part of his earnings to support the children at Riamanoti Mogonga Children Care and provide for his family.",
      category: "Supporters",
      type: "image",
      mediaUrl: "/images/pastor-manoti-rock-crushing.jpg",
    },







    // Pastor Manoti - Theological School Graduation 1
    {
      id: 15,
      title: "Pastor Manoti's Graduation - Theological School",
      description: "Pastor Manoti celebrating his graduation from theological school after years of dedicated study and sacrifice.",
      category: "Supporters",
      type: "image",
      mediaUrl: "/images/pastor-manoti-graduation-1.jpg",
    },



    // Pastor Manoti with his Bishop
    {
      id: 16,
      title: "Pastor Manoti with His Bishop",
      description: "Pastor Manoti posing with his Bishop during the theological school graduation ceremony. A proud moment of spiritual achievement.",
      category: "Supporters",
      type: "image",
      mediaUrl: "/images/pastor-manoti-with-bishop.jpg",
    },



    // Pastor Manoti - Theological School Graduation 3
    {
      id: 17,
      title: "Celebrating Achievement",
      description: "Pastor Manoti with fellow graduates at the theological school commencement.",
      category: "Supporters",
      type: "image",
      mediaUrl: "/images/pastor-manoti-graduation-3.jpg",
    },





    // Pastor Manoti - Church Ordination 1
    {
      id: 18,
      title: "Pastor Manoti's Ordination Ceremony",
      description: "Pastor Manoti being ordained as a pastor during a special church ceremony, dedicating his life to serving God and the community.",
      category: "Supporters",
      type: "image",
      mediaUrl: "/images/pastor-manoti-ordination-1.jpg",
    },


    // Pastor Manoti - Church Ordination 2
    {
      id: 19,
      title: "Bishops Praying for Pastor Manoti",
      description: "Bishops laying hands on Pastor Manoti and praying for him during his ordination ceremony, commissioning him for ministry.",
      category: "Supporters",
      type: "image",
      mediaUrl: "/images/pastor-manoti-ordination-2.jpg",
    },
  



    // Additional video - Play & Recreation
    {
      id: 10,
      title: "Play & Recreation",
      description: "Fun-filled playtime activities that promote physical health and social bonding.",
      category: "Activities",
      type: "video",
      mediaUrl: "/videos/play-recreation.mp4",
      poster: "/images/play-recreation-poster.png",
    },







    // Additional image - Learning Time
    {
      id: 11,
      title: "Learning Time",
      description: "Children engaged in educational activities with our dedicated teachers.",
      category: "Education",
      type: "image",
      mediaUrl: "/images/learning-time.jpg",
    },





    // Pastor Manoti donating pens to children
    {
      id: 12,
      title: "Pastor Manoti Gifting Children School Supplies",
      description: "Pastor Manoti generously donating pens, books, and other school supplies to support children's education at Riamanoti Mogonga Children Care.",
      category: "Donations",
      type: "video",
      mediaUrl: "/videos/pastor-manoti-donating.mp4",
      poster: "/images/donor.jpg",
    },



    // Child reciting a poem
    {
      id: 13,
      title: "Child Reciting a Poem",
      description: "One of our talented children showcasing their creativity by reciting a beautiful poem.",
      category: "Talents",
      type: "video",
      mediaUrl: "/videos/child-poem.mp4",
      poster: "/images/poem.jpg",
    }









  ]

  const categories = ['All', 'Meals', 'Daily Life', 'Activities', 'Education']

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleFullscreen = () => {
    if (modalRef.current) {
      if (!isFullscreen) {
        if (modalRef.current.requestFullscreen) {
          modalRef.current.requestFullscreen()
          setIsFullscreen(true)
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
          setIsFullscreen(false)
        }
      }
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const time = parseFloat(e.target.value)
      videoRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  return (
    <div style={{ backgroundColor: '#d1d1d1' }}>

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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Gallery</h1>
          <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            Capturing precious moments of joy, learning, and growth
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-emerald-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid - Optimized for faster loading */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group bg-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedMedia({ type: item.type, url: item.mediaUrl, title: item.title, poster: item.poster })}
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  {item.type === 'video' ? (
                    <>
                      {/* Poster image loads first - fast */}
                      <img 
                        src={item.poster}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                        loading="lazy"
                      />
                      {/* Video loads only on hover - saves bandwidth */}
                      <video 
                        src={item.mediaUrl}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        preload="none"
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                          <Play className="h-8 w-8 text-emerald-600 ml-0.5" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <img 
                      src={item.mediaUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    {item.type === 'video' && (
                      <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">VIDEO</span>
                    )}
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  </div>


                  <p className="text-gray-600 mb-3">{item.description}</p>


                  <button 
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal for viewing images/videos - Optimized */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => {
            setSelectedMedia(null)
            setIsPlaying(false)
          }}
        >
          <div 
            ref={modalRef}
            className="relative w-full max-w-4xl mx-auto bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: '90vh' }}
          >
            <div className="flex items-center justify-between p-3 bg-emerald-600 text-white">
              <h3 className="text-lg font-semibold truncate flex-1">{selectedMedia.title}</h3>
              <button
                onClick={() => {
                  setSelectedMedia(null)
                  setIsPlaying(false)
                }}
                className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 transition-all duration-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="relative bg-black">
              {selectedMedia.type === 'video' ? (
                <div className="relative">
                  <video
                    ref={videoRef}
                    src={selectedMedia.url}
                    poster={selectedMedia.poster}
                    className="w-full max-h-[50vh] object-contain"
                    controls={false}
                    preload="auto"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    autoPlay
                  />
                  
                  <div className="bg-gradient-to-t from-black/90 to-transparent pt-8 pb-3 px-3">
                    <div className="mb-3">
                      <input
                        type="range"
                        min={0}
                        max={duration || 100}
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #10b981 ${(currentTime / duration) * 100}%, #4b5563 ${(currentTime / duration) * 100}%)`
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={togglePlay}
                          className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition"
                        >
                          {isPlaying ? (
                            <Pause className="h-4 w-4 text-white" />
                          ) : (
                            <Play className="h-4 w-4 text-white ml-0.5" />
                          )}
                        </button>
                        
                        <button
                          onClick={toggleMute}
                          className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition"
                        >
                          {isMuted ? (
                            <VolumeX className="h-4 w-4 text-white" />
                          ) : (
                            <Volume2 className="h-4 w-4 text-white" />
                          )}
                        </button>
                      </div>
                      
                      <button
                        onClick={handleFullscreen}
                        className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition"
                      >
                        {isFullscreen ? (
                          <Minimize className="h-4 w-4 text-white" />
                        ) : (
                          <Maximize className="h-4 w-4 text-white" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <img 
                  src={selectedMedia.url}
                  alt={selectedMedia.title}
                  className="w-full max-h-[70vh] object-contain"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}