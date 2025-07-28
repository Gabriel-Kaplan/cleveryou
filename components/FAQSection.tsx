'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set([0])) // First item open by default

  const faqs = [
    {
      question: "How do AI coaches work?",
      answer: "Our AI coaches use advanced natural language processing and machine learning to understand your learning style, track your progress, and provide personalized guidance. They adapt to your pace and offer real-time feedback to optimize your learning experience."
    },
    {
      question: "What subjects are available?",
      answer: "We offer coaching across a wide range of subjects including Mathematics, Science, Languages, Programming, Business, Arts, and more. Our library is constantly expanding with new subjects and specialized topics."
    },
    {
      question: "Can I switch between different coaches?",
      answer: "Absolutely! You can work with multiple coaches simultaneously or switch between them as needed. Each coach specializes in different subjects and teaching approaches, allowing you to find the perfect match for each topic."
    },
    {
      question: "Is my learning data secure?",
      answer: "Yes, we take data security very seriously. All your learning data is encrypted with 256-bit SSL encryption, and we're SOC 2 Type II certified and GDPR compliant. Your personal information and learning progress are never shared with third parties."
    },
    {
      question: "How does the free trial work?",
      answer: "You get 14 days of free access to our Pro plan features, including unlimited coaching sessions and all subjects. No credit card is required to start, and you can cancel anytime during the trial period."
    },
    {
      question: "Can I use CleverCoaches offline?",
      answer: "Pro and Team plan users have access to offline mode, which allows you to download lessons and continue learning without an internet connection. Your progress will sync when you're back online."
    },
    {
      question: "How do I track my progress?",
      answer: "Our platform provides detailed analytics showing your learning progress, strengths, areas for improvement, and achievement milestones. You'll get weekly reports and can view your progress in real-time through your dashboard."
    },
    {
      question: "What age groups is CleverCoaches suitable for?",
      answer: "CleverCoaches is designed for learners of all ages, from middle school students to adult professionals. Our AI coaches adapt their communication style and complexity based on your level and learning goals."
    }
  ]

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about CleverCoaches
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.has(index)
            return (
              <div 
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-5 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions?
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQSection