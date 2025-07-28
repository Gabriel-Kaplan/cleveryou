/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Check, Star, ArrowRight, Zap} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

// Define the Plan interface
interface Plan {
  name: string;
  priceAnnual: string;
  priceMonthly: string;
  period: string;
  description: string;
  features: string[];
  planId: string;
  popular: boolean;
}

const PricingPreview = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans: Plan[] = [
    {
      name: "Curious",
      priceAnnual: "$0",
      priceMonthly: "$0",
      period: "Always free",
      description: "Are you curious? We are too! Start with 3 CleverCoaches and 10 monthly conversations to explore different subjects. Get basic session recaps to track what you've learned - all completely free.",
      features: [
        "3 Active Clever Coaches",
        "10 Conversations/month",
        "Basic Session Recaps"
      ],
      planId: "curious",
      popular: false
    },
    {
      name: "Clever",
      priceAnnual: "$14.99",
      priceMonthly: "$19.99",
      period: "/month",
      description: "Ready to get serious? Let's do it! Access 15 CleverCoaches with 100 monthly conversations. Save your conversation history, get inline quizzes and recaps, plus monthly progress reports to see how you're improving.",
      features: [
        "Everything In Curious",
        "15 Active Clever Coaches",
        "100 Conversations/month",
        "Save Conversation History",
        "Inline Quizzes and Recaps",
        "Monthly Progress Reports"
      ],
      planId: "clever",
      popular: true
    },
    {
      name: "Genius",
      priceAnnual: "$24.99",
      priceMonthly: "$39.99",
      period: "/month",
      description: "Think you're a genius? Because you are! Get unlimited CleverCoaches and conversations, plus early access to new features. Includes daily reminders, full performance dashboard, and priority support when you need help.",
      features: [
        "Everything in Clever",
        "Unlimited Clever Coaches",
        "Unlimited conversations",
        "Early Access to New Features",
        "Daily Learning Reminders",
        "Full Performance Dashboard",
        "Priority Support"
      ],
      planId: "genius",
      popular: false
    }
  ]

  const getCurrentPrice = (plan: Plan): string => {
    if (plan.name === "Curious") return plan.priceAnnual
    return isAnnual ? plan.priceAnnual : plan.priceMonthly
  }

  const getSavingsText = (plan: Plan): string | null => {
    if (plan.name === "Curious") return null
    const monthlyPrice = parseFloat(plan.priceMonthly.replace('$', ''))
    const annualPrice = parseFloat(plan.priceAnnual.replace('$', ''))
    const savings = Math.round(((monthlyPrice - annualPrice) / monthlyPrice) * 100)
    return `Save ${savings}%`
  }

  return (
    <section className="py-20 px-6 bg-none min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Simple, Clever Pricing
            </h1>
            <Zap className="w-8 h-8 text-pink-400" />
          </div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Start your learning journey for free, then upgrade as you grow.
          </p>
          
          {/* Upgrade Now Button */}
          <Link href="/subscription">
            <button className="mb-8 py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mx-auto shadow-lg hover:shadow-xl hover:scale-105">
              Upgrade Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          
          {/* Billing Toggle - Glassmorphic */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-300'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 ${
                isAnnual ? 'bg-gradient-to-r from-purple-600/60 to-pink-600/60' : 'bg-white/10'
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow-lg ${
                  isAnnual ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-300'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="ml-2 px-2 py-1 bg-green-400/20 backdrop-blur-md border border-green-400/30 text-green-200 text-xs font-semibold rounded-full">
                Save up to 38%
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            return (
              <div 
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 group ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-xl border border-white/30 shadow-2xl shadow-purple-500/25 scale-105' 
                    : 'bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 hover:border-white/30 hover:shadow-xl hover:shadow-white/10'
                }`}
              >
                {/* Glassmorphic inner glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-1 bg-yellow-400/90 backdrop-blur-md border border-yellow-300/50 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8 relative z-10">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-5xl font-bold transition-all duration-500 ease-in-out text-white">
                      {getCurrentPrice(plan)}
                    </span>
                    <span className="text-lg text-gray-200">
                      {plan.period}
                    </span>
                  </div>
                  
                  {/* Container with fixed height to prevent layout shift */}
                  <div className="h-6 mb-2 flex items-center justify-center">
                    <div className={`transition-all duration-500 ease-in-out ${
                      plan.name !== "Curious" && isAnnual 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-2'
                    }`}>
                      <span className="text-sm line-through text-gray-300">
                        {plan.priceMonthly}/month
                      </span>
                      <span className="ml-2 text-sm font-semibold text-green-300">
                        {getSavingsText(plan)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Container with fixed height for billing text */}
                  <div className="h-4 mb-2 flex items-center justify-center">
                    <p className={`text-xs transition-all duration-500 ease-in-out ${
                      plan.name !== "Curious" && isAnnual 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-2'
                    } text-gray-300`}>
                      Billed annually
                    </p>
                  </div>
                  
                  <p className="text-gray-200">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8 relative z-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 flex-shrink-0 text-green-400" />
                      <span className="text-gray-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-300 mb-4">
            * Annual plans are billed once per year. Monthly plans are billed monthly.
          </p>
          <p className="text-sm text-blue-300 font-medium">
            💡 Sign Up and start with the free Curious plan - no credit card required!
          </p>
        </div>
      </div>
    </section>
  )
}

export default PricingPreview