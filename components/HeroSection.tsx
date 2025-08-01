/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Brain, Zap, Cpu, Rocket, Lightbulb, Star } from 'lucide-react'
import Link from 'next/link';
interface MousePosition {
  x: number;
  y: number;
}

interface DataStreamItem {
  id: number;
  value: string;
  x: number;
  y: number;
}

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [glitchEffect, setGlitchEffect] = useState<boolean>(false)
  const [dataStream, setDataStream] = useState<DataStreamItem[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.querySelector('.hero-container')?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        })
      }
    }

    // Glitch effect trigger
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true)
      setTimeout(() => setGlitchEffect(false), 200)
    }, 4000)

    // Data stream simulation
    const streamInterval = setInterval(() => {
      setDataStream(prev => [
        ...prev.slice(-20),
        {
          id: Date.now(),
          value: Math.random().toString(36).substring(2, 8),
          x: Math.random() * 100,
          y: Math.random() * 100
        }
      ])
    }, 300)

    return () => {
      clearInterval(glitchInterval)
      clearInterval(streamInterval)
    }
  }, [])

  return (
    <section className="relative overflow-hidden w-full hero-container bg-none pt-5">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated Tech Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Scanning Lines */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse opacity-40" />
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
        
        {/* Data Stream */}
        {dataStream.map((item) => (
          <div
            key={item.id}
            className="absolute text-xs font-mono text-green-600/50 animate-fade-out"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              animation: 'fadeOut 3s linear forwards'
            }}
          >
            {item.value}
          </div>
        ))}

        {/* Floating Tech Icons */}
        {[Cpu, Zap, Rocket].map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-20"
            style={{
              left: `${20 + index * 30}%`,
              top: `${10 + index * 20}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${3 + index}s`
            }}
          >
            <Icon className="w-8 h-8 text-blue-500" />
          </div>
        ))}

        {/* Neural Network Visualization */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 800 600">
          <defs>
            <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {/* Network connections */}
          <g stroke="url(#nodeGradient)" strokeWidth="1" fill="none">
            <line x1="100" y1="100" x2="300" y2="200" className="animate-pulse" />
            <line x1="300" y1="200" x2="500" y2="150" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <line x1="500" y1="150" x2="700" y2="300" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <line x1="200" y1="400" x2="400" y2="300" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            <line x1="400" y1="300" x2="600" y2="450" className="animate-pulse" style={{ animationDelay: '2s' }} />
          </g>
          {/* Network nodes */}
          <g fill="url(#nodeGradient)">
            <circle cx="100" cy="100" r="4" className="animate-pulse" />
            <circle cx="300" cy="200" r="4" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            <circle cx="500" cy="150" r="4" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
            <circle cx="700" cy="300" r="4" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
            <circle cx="200" cy="400" r="4" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
            <circle cx="400" cy="300" r="4" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            <circle cx="600" cy="450" r="4" className="animate-pulse" style={{ animationDelay: '1.8s' }} />
          </g>
        </svg>

        {/* Holographic Overlays */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent animate-scan" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent animate-scan" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-scan" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
          
          {/* Left Content - Revolutionary Messaging */}
          <div className="hero-content text-center lg:text-left w-full">
            {/* Disruptive Badge */}
            <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start animate-fade-in-up">
              <div className="relative flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 px-6 py-3 rounded-full border border-cyan-500/30 backdrop-blur-md hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <Zap className="w-5 h-5 text-cyan-600 animate-pulse relative z-10" />
                <span className="text-sm font-bold text-cyan-700 relative z-10 tracking-wider">NEXT-GEN AI LEARNING</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping ml-2 relative z-10" />
              </div>
            </div>

            {/* Revolutionary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 leading-tight">
              <span className="block mb-2">
                <span className="text-gray-900">The</span>{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-shift">
                    FUTURE
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-sm -z-10 animate-pulse" />
                </span>
              </span>
              <span className="block">
                of Learning is{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                    HERE
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/60 via-pink-500/60 to-red-500/60 rounded-full animate-pulse" />
                </span>
              </span>
            </h1>

            {/* Aggressive Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animation-delay-400 font-medium">
              <span className="text-gray-900 font-bold">Revolutionary AI learning</span> that doesn&apos;t just teach—it{' '}
              <span className="text-gray-900 font-bold italic">evolves</span> with you. 
              <span className="block mt-2 text-lg text-gray-600">
                Breaking every rule of traditional education.
              </span>
            </p>

            {/* Startup-style Metrics */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-purple-300/50 hover:border-purple-400/70 transition-all duration-300 group shadow-sm">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                <span className="text-purple-700 font-bold">FASTER</span>
                <span className="text-gray-600">Learning</span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-cyan-300/50 hover:border-cyan-400/70 transition-all duration-300 group shadow-sm">
                <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse" />
                <span className="text-cyan-700 font-bold">100%</span>
                <span className="text-gray-600">Coach Customization</span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-green-300/50 hover:border-green-400/70 transition-all duration-300 group shadow-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-700 font-bold">24/7</span>
                <span className="text-gray-600">Support</span>
              </div>
            </div>

            {/* Aggressive CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-6 animate-fade-in-up animation-delay-800">
              <Link href="/coaches">
              <button className="group relative bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-110 shadow-xl shadow-blue-500/30 hover:shadow-cyan-500/40 w-full sm:w-auto overflow-hidden transform hover:-rotate-1">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700" />
                
                <div className="flex items-center gap-4 justify-center relative z-10">
                  <Rocket className="w-6 h-6 group-hover:animate-bounce" />
                  <span>Learn Now</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </button>
               </Link>
              <Link href="/coaches/new">
              <button className="group flex items-center gap-4 bg-white/80 hover:bg-white/90 text-gray-800 px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 border-2 border-gray-300/60 hover:border-purple-400/60 w-full sm:w-auto justify-center backdrop-blur-md shadow-sm hover:shadow-md">
                <Brain className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 text-purple-600" />
                <span>Create Coach</span>
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
              </Link>
            </div>

            {/* Startup Credibility */}
            <div className="flex items-center gap-3 text-sm text-gray-500 justify-center lg:justify-start animate-fade-in-up animation-delay-1000">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-mono">SYSTEM_STATUS: OPERATIONAL</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="font-mono text-cyan-600">BETA_V1</span>
            </div>
          </div>

          {/* Right Visual - Futuristic AI Visualization */}
          <div className="hero-visual flex items-center justify-center w-full">
            <div className="relative group">
              {/* Holographic Display */}
              <div className="relative">
                {/* Main AI Core */}
                <div className="relative z-20">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 relative">
                    {/* Energy Rings */}
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute inset-0 rounded-full border-2 border-cyan-500/40 animate-ping`}
                        style={{
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: '5s',
                          transform: `scale(${1 + i * 0.2})`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Orbiting Tech Elements */}
                <div className="absolute inset-0 animate-spin-slow">
                  {[
                    { icon: <Rocket className="text-cyan-600" />, color: 'cyan', angle: 0 },
                    { icon: <Lightbulb className="text-purple-600" />, color: 'purple', angle: 90 },
                    { icon: <Brain className="text-blue-600" />, color: 'blue', angle: 180 },
                    { icon: <Star className="text-pink-600" />, color: 'pink', angle: 270 }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="absolute w-12 h-12 sm:w-16 sm:h-16"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateY(-80px) rotate(-${item.angle}deg)`
                      }}
                    >
                      <div className={`w-full h-full bg-white/60 rounded-xl flex items-center justify-center border border-${item.color}-400/50 backdrop-blur-sm hover:scale-110 transition-transform duration-300 group-hover:animate-bounce shadow-md hover:shadow-lg`}>
                        <span className="text-xl sm:text-2xl">{item.icon}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Data Streams */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 bg-gradient-to-t from-transparent via-cyan-500/50 to-transparent animate-data-stream"
                    style={{
                      height: '100px',
                      left: `${20 + i * 15}%`,
                      top: `${10 + (i % 2) * 20}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${2 + i * 0.2}s`
                    }}
                  />
                ))}
              </div>

              {/* Futuristic UI Elements */}
              <div className="text-center mt-8 space-y-4">
                <div className="bg-white/80 backdrop-blur-md border border-cyan-400/40 rounded-xl p-4 max-w-sm mx-auto shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-black text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text mb-2">
                    CleverYou
                  </h3>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-600 font-mono">ACTIVE</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                      <span className="text-cyan-600 font-mono">LEARNING</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                      <span className="text-purple-600 font-mono">EVOLVING</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes glitch {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }

        @keyframes data-stream {
          0% { transform: translateY(100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100px); opacity: 0; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fadeOut {
          0% { opacity: 0.6; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-50px); }
        }

        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-gradient-shift { animation: gradient-shift 3s ease infinite; background-size: 200% 200%; }
        .animate-glitch { animation: glitch 0.2s ease-in-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-scan { animation: scan 6s linear infinite; }
        .animate-data-stream { animation: data-stream 2s linear infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-fade-out { animation: fadeOut 3s linear forwards; }

        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-800 { animation-delay: 800ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }

        .bg-clip-path { 
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </section>
  )
}

export default HeroSection