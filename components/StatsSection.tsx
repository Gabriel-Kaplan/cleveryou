import React from "react"
import { Brain, BookOpen, Clock, Zap, Sparkles } from "lucide-react"

const StatsSection = () => {
  const features = [
    { 
      icon: <Brain className="w-8 h-8" />, 
      title: "AI-Powered", 
      description: "Smart tutoring that adapts to your learning style",
      color: "from-blue-400 to-cyan-400"
    },
    { 
      icon: <BookOpen className="w-8 h-8" />, 
      title: "15+ Subjects", 
      description: "Comprehensive coverage across all major topics",
      color: "from-emerald-400 to-green-400"
    },
    { 
      icon: <Clock className="w-8 h-8" />, 
      title: "24/7 Available", 
      description: "Learn anytime, anywhere with instant AI support",
      color: "from-purple-400 to-violet-400"
    },
    { 
      icon: <Zap className="w-8 h-8" />, 
      title: "Instant Feedback", 
      description: "Real-time corrections and personalized guidance",
      color: "from-orange-400 to-red-400"
    }
  ]

  return (
    <section className="stats-section gap-3 flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 left-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-8 right-12 w-1 h-1 bg-orange-400 rounded-full animate-ping delay-700"></div>
      </div>

      {/* Header */}
      <div className="flex flex-col text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-300 tracking-wider uppercase">
            Powerful Features
          </span>
          <Sparkles className="w-6 h-6 text-emerald-400" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          Everything You Need to Excel
        </h2>
      </div>

      {/* Features Grid - responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 w-11/12">
        {features.map((feature, index) => (
          <div key={index} className="stat-item group relative transition-all duration-300 hover:scale-105 flex flex-col p-6 rounded-2xl border border-slate-700/30 bg-slate-800/50 backdrop-blur-sm">
            {/* Animated gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
            
            {/* Icon with glow effect */}
            <div className="relative z-10 mb-4">
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
            </div>
            
            {/* Content using your stat classes */}
            <div className="relative z-10 flex-1">
              <span className="stat-number group-hover:scale-105 transition-transform duration-300 block">
                {feature.title}
              </span>
              <span className="stat-label block mt-2 text-sm leading-relaxed">
                {feature.description}
              </span>
            </div>

            {/* Floating particles for each card */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className={`absolute top-2 right-2 w-1 h-1 bg-gradient-to-r ${feature.color} rounded-full animate-ping`}></div>
              <div className={`absolute bottom-2 left-2 w-1 h-1 bg-gradient-to-r ${feature.color} rounded-full animate-ping delay-300`}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsSection