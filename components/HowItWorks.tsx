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
        gradient: "from-blue-500 to-cyan-500",
        bg: "bg-blue-50",
        border: "border-blue-200",
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-600"
      }
      case "2": return {
        gradient: "from-emerald-500 to-green-500",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        iconBg: "bg-emerald-500/10",
        iconColor: "text-emerald-600"
      }
      case "3": return {
        gradient: "from-purple-500 to-pink-500",
        bg: "bg-purple-50",
        border: "border-purple-200",
        iconBg: "bg-purple-500/10",
        iconColor: "text-purple-600"
      }
      default: return {
        gradient: "from-blue-500 to-cyan-500",
        bg: "bg-blue-50",
        border: "border-blue-200",
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-600"
      }
    }
  }

  const colors = getColors(step)

  return (
    <div className="flex flex-col items-center">
      {/* Light Theme Step Card */}
      <div className={`bg-white/90 backdrop-blur-sm border-2 ${colors.border} rounded-3xl p-8 hover:bg-white transition-all duration-300 max-w-sm w-full shadow-lg hover:shadow-xl hover:scale-105`}>
        {/* Step number with icon */}
        <div className="flex flex-col items-center mb-6">
          <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
            <span className="text-xl font-bold text-white">{step}</span>
          </div>
          
          <div className={`p-3 rounded-2xl ${colors.iconBg} backdrop-blur-sm ${colors.iconColor}`}>
            {getIcon(step)}
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <h3 className="text-xl font-semibold text-gray-800">
            {title}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed">
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
    title: "Build Your CleverCoach",
    description: "Pick a name, choose subjects, set the vibe. Your learning buddy, your rules."
  },
  {
    step: "2", 
    title: "Start Your Smart Learning",
    description: "Chat your way to mastery with live help, instant feedback, and real-time transcripts."
  },
    {
      step: "3",
      title: "Reflect & Grow", 
      description: "Look back on what you’ve learned and get personalized takeaways to keep moving forward."
    }
]


  return (
    <section className="py-16 px-6">
      {/* Header */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-blue-600" />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            How CleverYou Learning Works
          </h1>
          <Zap className="w-8 h-8 text-pink-600" />
        </div>
        
        <p className="text-gray-600 text-base">
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