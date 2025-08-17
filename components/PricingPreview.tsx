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
            <Zap className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Simple, Clever Pricing
            </h1>
            <Zap className="w-8 h-8 text-pink-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start your learning journey for free, then upgrade as you grow.
          </p>
          
          {/* Upgrade Now Button */}
          <Link href="/subscription">
            <button className="mb-8 py-4 px-8 bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mx-auto shadow-lg hover:shadow-xl hover:scale-105">
              Upgrade Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          
          {/* Billing Toggle - Light Theme */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-800' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full border-2 transition-all duration-300 ${
                isAnnual ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-purple-600' : 'bg-gray-200 border-gray-300'
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow-md ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0.5'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-800' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="ml-2 px-2 py-1 bg-green-100 border border-green-200 text-green-700 text-xs font-semibold rounded-full">
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
                    ? 'bg-white border-2 border-purple-200 shadow-2xl shadow-purple-100 scale-105' 
                    : 'bg-white/90 border border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-xl hover:shadow-gray-100'
                }`}
              >
                {/* Light theme inner highlight */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-50/50 to-transparent pointer-events-none"></div>
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-1 bg-yellow-400 border border-yellow-300 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8 relative z-10">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-5xl font-bold transition-all duration-500 ease-in-out text-gray-900">
                      {getCurrentPrice(plan)}
                    </span>
                    <span className="text-lg text-gray-600">
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
                      <span className="text-sm line-through text-gray-500">
                        {plan.priceMonthly}/month
                      </span>
                      <span className="ml-2 text-sm font-semibold text-green-600">
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
                    } text-gray-500`}>
                      Billed annually
                    </p>
                  </div>
                  
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8 relative z-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 flex-shrink-0 text-green-500" />
                      <span className="text-gray-700">
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
          <p className="text-sm text-gray-500 mb-4">
            * Annual plans are billed once per year. Monthly plans are billed monthly.
          </p>
          <p className="text-sm text-blue-600 font-medium">
            💡 Sign Up and start with the free Curious plan - no credit card required!
          </p>
        </div>
      </div>
    </section>
  )
}

export default PricingPreview