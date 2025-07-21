import React from 'react'
import { ArrowRight, Play, Brain, Sparkles, Users, Trophy, Clock } from 'lucide-react'
import Link from 'next/link'
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden w-full">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
          
          {/* Left Content - Desktop left aligned, Mobile/Tablet centered */}
          <div className="hero-content text-center lg:text-left w-full">
            {/* Pre-headline */}
            <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
              <div className="flex items-center gap-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-blue-400/30">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">AI-Powered Learning</span>
              </div>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl font-black text-white mb-6 leading-tight">
              Learn{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Faster
                </span>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/50 to-pink-400/50 rounded-full"></div>
              </span>
              <br />
              with Our CleverCoaches
            </h1>

            {/* Enhanced subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transform your learning journey with personalized AI tutors that adapt to your pace, 
              style, and goals. Join the future of education where{' '}
              <span className="text-blue-300 font-medium">every lesson is tailored just for you</span>.
            </p>

            {/* Social proof stats */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 text-sm justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-purple-300">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Built for Momentum</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-300">
                <Trophy className="w-4 h-4" />
                <span className="font-medium">Built for Success</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-300">
                <Users className="w-4 h-4" />
                <span className="font-medium">Built for Everyone</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-6">
              <Link href="/companions" className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 w-full sm:w-auto">
                <div className="flex items-center gap-3 justify-center">
                  <span>Start Learning Free</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
              
              <Link href="/companions/new" className="group flex items-center gap-3 bg-slate-800/50 hover:bg-slate-700/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 border border-slate-600/30 hover:border-slate-500/50 w-full sm:w-auto justify-center">
                <span>Create Your Coach</span>
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>

            {/* Trust indicator 
            <div className="flex items-center gap-2 text-xs text-slate-400 justify-center lg:justify-start">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>No credit card required • Start in 30 seconds</span>
            </div>*/}
          </div>

          {/* Right Visual - Always centered */}
          <div className="hero-visual flex items-center justify- w-full">
            <div className="hero-placeholder relative group">
              {/* Main AI brain icon */}
              <div className="relative">
                <Brain className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-indigo-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
                
                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
                  <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                      <span className="text-blue-300 text-xs sm:text-sm font-bold">📚</span>
                    </div>
                  </div>
                  <div className="absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-400/30">
                      <span className="text-purple-300 text-xs sm:text-sm font-bold">🎯</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 rounded-full flex items-center justify-center border border-green-400/30">
                      <span className="text-green-300 text-xs sm:text-sm font-bold">✨</span>
                    </div>
                  </div>
                  <div className="absolute top-1/2 -left-4 sm:-left-6 transform -translate-y-1/2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500/20 rounded-full flex items-center justify-center border border-pink-400/30">
                      <span className="text-pink-300 text-xs sm:text-sm font-bold">🚀</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-ping"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-ping delay-500"></div>
                <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-indigo-400/60 rounded-full animate-ping delay-1000"></div>
                <div className="absolute top-1/2 right-1/2 w-1 h-1 bg-pink-400/60 rounded-full animate-ping delay-700"></div>
              </div>

              {/* Pulsing ring */}
              <div className="absolute inset-0 rounded-full border-2 border-indigo-400/30 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full border border-indigo-400/20 animate-pulse delay-500"></div>
              
              <div className="text-center mt-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-indigo-200 mb-2">AI Learning Assistant</h3>
                <p className="text-sm sm:text-base text-indigo-300/80">Personalized • Adaptive • Intelligent</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default HeroSection