import { PricingTable } from '@clerk/nextjs';
import React from 'react';

const GlassmorphicPricing = () => {
   return (
    <div className="min-h-screen py-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-24 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16 relative">
          {/* Floating decoration */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
          
          {/* Main title with glassmorphic container */}
          <div className="relative inline-block">
            {/* Glassmorphic background for title */}
            <div className="absolute inset-0 backdrop-blur-xl transform scale-110"></div>
            
            <h1 className="relative text-6xl md:text-7xl font-black mb-6 px-8 py-4">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Choose Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h1>
          </div>
          
          {/* Enhanced subtitle */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10"></div>
            <p className="relative text-xl md:text-2xl text-white/90 leading-relaxed px-8 py-6 font-light">
              Unlock your potential with 
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-medium"> unlimited course access </span>
              and accelerate your learning journey today
            </p>
          </div>
          
          {/* Accent line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Pricing Cards with loading state */}
        <div className="mx-auto mb-16">
            <div className="relative">
              {/* Animated entrance effect */}
              <div className="animate-fadeInUp">
                <PricingTable />
              </div>
            </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10"></div>
            <div className="relative px-8 py-6">
              <p className="text-lg text-white/80 mb-6 font-light">
                Need help choosing? Our expert team is here to guide you.
              </p>
              <button className="group relative backdrop-blur-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white px-10 py-4 rounded-2xl hover:from-white/20 hover:to-white/10 transition-all duration-500 font-medium text-lg">
                <span className="relative z-10">Contact Support</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassmorphicPricing;