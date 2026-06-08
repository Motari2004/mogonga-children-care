'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, Heart, Play, X, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react'

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
    // Images
    {
      id: 1,
      title: "Learning Time",
      description: "Children engaged in educational activities and homework sessions with our dedicated teachers.",
      category: "Education",
      type: "image",
      mediaUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 2024"
    },
    {
      id: 2,
      title: "Play & Recreation",
      description: "Fun-filled playtime activities that promote physical health and social bonding.",
      category: "Activities",
      type: "image",
      mediaUrl: "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "February 2024"
    },
    {
      id: 3,
      title: "Nutritious Meals",
      description: "Healthy, balanced meals prepared daily to ensure proper nutrition for growing children.",
      category: "Daily Life",
      type: "image",
      mediaUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "January 2024"
    },






{
  id: 4,
  title: "Children's Day Celebration",
  description: "Watch our children perform traditional dances.",
  category: "Celebrations",
  type: "video",
  mediaUrl: "/videos/children-celebration.mp4",  // Local video
  poster: "/images/children-poster.jpg",  // Optional thumbnail
  date: "December 2023"
}





  ]

  const categories = ['All', 'Education', 'Activities', 'Celebrations', 'Sports']

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

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  return (
    <div style={{ backgroundColor: '#f0f9f4' }}>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[350px] flex items-center">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 w-full h-full bg-black/60" />
        <div className="relative w-full container-custom z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
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

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedMedia({ type: item.type, url: item.mediaUrl, title: item.title, poster: item.poster })}
              >
                <div className="relative h-64 overflow-hidden">
                  {item.type === 'video' ? (
                    <>
                      <video 
                        src={item.mediaUrl}
                        poster={item.poster}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        preload="metadata"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300">
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
                  <p className="text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-emerald-600">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                    <button 
                      className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
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

      {/* Modal for viewing images/videos - SMALLER SIZE */}
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
            {/* Header */}
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
            
            {/* Media Content */}
            <div className="relative bg-black">
              {selectedMedia.type === 'video' ? (
                <div className="relative">
                  <video
                    ref={videoRef}
                    src={selectedMedia.url}
                    poster={selectedMedia.poster}
                    className="w-full max-h-[50vh] object-contain"
                    controls={false}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    autoPlay
                  />
                  
                  {/* Custom Video Controls - Compact */}
                  <div className="bg-gradient-to-t from-black/90 to-transparent pt-8 pb-3 px-3">
                    {/* Progress Bar */}
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
                    
                    {/* Control Buttons */}
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
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}