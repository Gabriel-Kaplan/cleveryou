"use client"; 
import React from "react"
import {Bot, Zap, BarChart3 } from "lucide-react"

interface StepCardProps {
  step: string;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, title, description }) => {
  const getIcon = (stepNumber: string) => {
    switch(stepNumber) {
      case "1": return <Bot className="w-6 h-6" />
      case "2": return <Zap className="w-6 h-6" />
      case "3": return <BarChart3 className="w-6 h-6" />
      default: return <Bot className="w-6 h-6" />
    }
  }

  const getColors = (stepNumber: string) => {
    switch(stepNumber) {
      case "1": return {
        gradient: "from-blue-400 to-cyan-400",
        bg: "bg-blue-500/20",
        border: "border-blue-400/30"
      }
      case "2": return {
        gradient: "from-emerald-400 to-green-400",
        bg: "bg-emerald-500/20",
        border: "border-emerald-400/30"
      }
      case "3": return {
        gradient: "from-purple-400 to-pink-400",
        bg: "bg-purple-500/20",
        border: "border-purple-400/30"
      }
      default: return {
        gradient: "from-blue-400 to-cyan-400",
        bg: "bg-blue-500/20",
        border: "border-blue-400/30"
      }
    }
  }

  const colors = getColors(step)

  return (
    <div className="flex flex-col items-center">
      {/* Glassmorphic Step Card */}
      <div className={`bg-white/5 backdrop-blur-lg border ${colors.border} rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 max-w-sm w-full shadow-xl hover:shadow-2xl`}>
        {/* Step number with icon */}
        <div className="flex flex-col items-center mb-6">
          <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
            <span className="text-xl font-bold text-white">{step}</span>
          </div>
          
          <div className={`p-3 rounded-2xl ${colors.bg} backdrop-blur-sm text-white`}>
            {getIcon(step)}
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>
          
          <p className="text-slate-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

interface Step {
  step: string;
  title: string;
  description: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      step: "1",
      title: "Meet Your Learning Sidekick",
      description: "Pick a custom AI built around your goals, pace, and learning style preferences"
    },
    {
      step: "2", 
      title: "Dive Into the Fun Stuff",
      description: "Learn actively through smart conversations, hands-on tasks, and real-time support"
    },
    {
      step: "3",
      title: "Level Up & See Your Wins", 
      description: "See your journey clearly with insights, analytics, and personalized achievements"
    }
  ]

  return (
    <section className="py-16 px-6 bg-transparent">
      {/* Header */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-blue-400" />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            How CleverYou Learning Works
          </h1>
          <Zap className="w-8 h-8 text-pink-400" />
        </div>
        
        <p className="text-slate-400 text-base">
          Experience the future of education with our simple three-step process designed to maximize your learning potential.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {steps.map((step, index) => (
            <StepCard 
              key={index}
              step={step.step}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks