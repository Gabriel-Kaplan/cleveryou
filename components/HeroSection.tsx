"use client";
import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Brain, Zap, Star } from 'lucide-react'
import Link from 'next/link';

interface MousePosition {
  x: number;
  y: number;
}

const HeroSection = () => {
  const [, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.querySelector('.hero-container')?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        })
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Pre-defined positions to avoid hydration mismatch
  const shootingStars = [
    { left: '10%', top: '20%', delay: '0s', duration: '2.5s' },
    { left: '80%', top: '15%', delay: '2s', duration: '3s' },
    { left: '50%', top: '35%', delay: '4s', duration: '2.2s' },
    { left: '25%', top: '45%', delay: '6s', duration: '2.8s' },
    { left: '70%', top: '25%', delay: '8s', duration: '2.3s' },
    { left: '15%', top: '40%', delay: '10s', duration: '2.7s' }
  ];

  const sparkles = [
    { left: '20%', top: '30%', delay: '0s', duration: '3.5s' },
    { left: '75%', top: '60%', delay: '1s', duration: '4s' },
    { left: '45%', top: '20%', delay: '2s', duration: '3.8s' },
    { left: '65%', top: '75%', delay: '3s', duration: '3.2s' },
    { left: '30%', top: '55%', delay: '4s', duration: '3.6s' },
    { left: '85%', top: '35%', delay: '5s', duration: '4.2s' },
    { left: '55%', top: '80%', delay: '6s', duration: '3.4s' },
    { left: '25%', top: '15%', delay: '7s', duration: '3.9s' },
    { left: '40%', top: '70%', delay: '1.5s', duration: '3.3s' },
    { left: '90%', top: '50%', delay: '2.5s', duration: '4.1s' },
    { left: '10%', top: '65%', delay: '3.5s', duration: '3.7s' },
    { left: '60%', top: '10%', delay: '4.5s', duration: '3.1s' }
  ];

  return (
    <section className="relative overflow-hidden w-full hero-container bg-none min-h-screen flex items-center">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rotate-45 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-20 animate-bounce delay-1000"></div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <g stroke="url(#lineGradient)" strokeWidth="1" fill="none">
            <line x1="100" y1="100" x2="300" y2="200" className="animate-pulse" />
            <line x1="300" y1="200" x2="500" y2="150" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <line x1="500" y1="150" x2="700" y2="300" className="animate-pulse" style={{ animationDelay: '2s' }} />
            <line x1="200" y1="400" x2="400" y2="300" className="animate-pulse" style={{ animationDelay: '3s' }} />
            <line x1="400" y1="300" x2="600" y2="450" className="animate-pulse" style={{ animationDelay: '4s' }} />
          </g>
          <g fill="url(#lineGradient)">
            <circle cx="100" cy="100" r="3" className="animate-pulse" />
            <circle cx="300" cy="200" r="3" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="500" cy="150" r="3" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="700" cy="300" r="3" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            <circle cx="200" cy="400" r="3" className="animate-pulse" style={{ animationDelay: '2s' }} />
            <circle cx="400" cy="300" r="3" className="animate-pulse" style={{ animationDelay: '2.5s' }} />
            <circle cx="600" cy="450" r="3" className="animate-pulse" style={{ animationDelay: '3s' }} />
          </g>
        </svg>

        {/* Shooting Stars - Fixed positions */}
        {shootingStars.map((star, i) => (
          <div
            key={`star-${i}`}
            className="absolute animate-shooting-star opacity-0"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              animationDuration: star.duration
            }}
          >
            <div className="relative">
              {/* Star tail */}
              <div className="absolute w-16 h-px bg-gradient-to-r from-white via-blue-200 to-transparent rotate-45 origin-right" />
              {/* Star head */}
              <div className="absolute w-2 h-2 bg-white rounded-full shadow-lg shadow-blue-200/50 animate-twinkle" />
            </div>
          </div>
        ))}

        {/* Magical sparkles - Fixed positions */}
        {sparkles.map((sparkle, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-sparkle opacity-0"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              animationDelay: sparkle.delay,
              animationDuration: sparkle.duration
            }}
          >
            <div className="w-1 h-1 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full shadow-sm" />
          </div>
        ))}

        {/* Scanning Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-scan" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-scan" style={{ animationDelay: '3s' }} />

        {/* Floating Tech Shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-200/40 rounded-full animate-float opacity-60"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i}s`
            }}
          />
        ))}

        {/* Data Stream */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`stream-${i}`}
            className="absolute w-px bg-gradient-to-t from-transparent via-cyan-400/30 to-transparent animate-data-stream"
            style={{
              height: '80px',
              left: `${15 + i * 25}%`,
              top: `${10 + (i % 2) * 30}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          />
        ))}

      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 mb-8 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/60 shadow-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">AI-Powered Learning</span>
          </div>

          {/* Enhanced Main Headline with New "Clever" Focus */}
          <div className="relative mb-6">
            
            {/* Animated Underline */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full animate-pulse" />
            
            {/* Main Text */}
            <h1 className={`relative text-3xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold text-gray-900 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="block mb-4 relative">
                Unlock Your
                <span className="relative mx-3 inline-block">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 bg-clip-text text-transparent font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl ">Clever</span>
                </span>
                Side
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-gray-700 font-medium">
                With AI-Powered Personalized Coaching
              </span>
            </h1>
            
            {/* Holographic scan line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-scan-fast" />
          </div>

          {/* Subtitle */}
          <p className={`text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Make better progress faster. AI-powered personalized coaching for everyone.
          </p>

          {/* CTA Button */}
          <div className={`mb-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link href="/coaches">
            <button className="group bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3">
              <span>Start for free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            </Link>
          </div>

          {/* Feature Icons */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { icon: <Brain className="w-8 h-8 text-blue-500" />, label: 'AI Coaching' },
              { icon: <Zap className="w-8 h-8 text-yellow-500" />, label: 'Instant Feedback' },
              { icon: <Play className="w-8 h-8 text-green-500" />, label: 'Interactive' },
              { icon: <Star className="w-8 h-8 text-purple-500" />, label: 'Personalized' }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-gray-300/50 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="p-2 bg-white/80 rounded-lg">
                  {feature.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.6; 
          }
          50% { 
            transform: translateY(-15px) scale(1.1); 
            opacity: 0.3; 
          }
        }

        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }

        @keyframes scan-fast {
          0% { 
            transform: translateX(-100%); 
            opacity: 0; 
          }
          50% { 
            opacity: 1; 
          }
          100% { 
            transform: translateX(100%); 
            opacity: 0; 
          }
        }

        @keyframes data-stream {
          0% { 
            transform: translateY(80px); 
            opacity: 0; 
          }
          50% { 
            opacity: 1; 
          }
          100% { 
            transform: translateY(-80px); 
            opacity: 0; 
          }
        }

        @keyframes shooting-star {
          0% { 
            transform: translate(0, 0) scale(0); 
            opacity: 0; 
          }
          10% { 
            opacity: 1; 
            transform: translate(0, 0) scale(1); 
          }
          90% { 
            opacity: 1; 
            transform: translate(150px, 75px) scale(1); 
          }
          100% { 
            transform: translate(200px, 100px) scale(0); 
            opacity: 0; 
          }
        }

        @keyframes twinkle {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.2); 
          }
        }

        @keyframes sparkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0) rotate(0deg); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1) rotate(180deg); 
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            text-shadow: 
              0 0 5px rgba(34, 197, 94, 0.3),
              0 0 10px rgba(6, 182, 212, 0.2),
              0 0 15px rgba(37, 99, 235, 0.1);
          }
          50% {
            text-shadow: 
              0 0 10px rgba(34, 197, 94, 0.5),
              0 0 20px rgba(6, 182, 212, 0.4),
              0 0 30px rgba(37, 99, 235, 0.3);
          }
        }

        .animate-float { 
          animation: float 6s ease-in-out infinite; 
        }

        .animate-scan {
          animation: scan 8s linear infinite;
        }

        .animate-scan-fast {
          animation: scan-fast 3s linear infinite;
        }

        .animate-data-stream {
          animation: data-stream 4s linear infinite;
        }

        .animate-shooting-star {
          animation: shooting-star 3s ease-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 1.5s ease-in-out infinite;
        }

        .animate-sparkle {
          animation: sparkle 4s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </section>
  )
}

export default HeroSection