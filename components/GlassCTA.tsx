import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

const GlassCTA = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-blue-900/20"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Glass Card */}
        <div className="relative p-12 rounded-3xl bg-white/30 dark:bg-white/10 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl shadow-purple-500/10 overflow-hidden">
          
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-50 -z-10"></div>
              </div>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="text-slate-900 dark:text-white">
                Your Learning?
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands who&apos;ve already discovered the power of adaptive, intelligent learning
            </p>
            
            {/* CTA Button */}
            <button className="group relative inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl shadow-xl shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 overflow-hidden">
              
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
              
              {/* Button content */}
              <span className="relative z-10">Start Today</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </button>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Free to start</span>
              </div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500"></div>
                <span>No commitment</span>
              </div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
                <span>Instant access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlassCTA