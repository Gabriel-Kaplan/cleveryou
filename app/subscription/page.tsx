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
            {/* Breadcrumb/Category */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-slate-500">CleverYou</span>
              <div className="h-1 w-1 bg-slate-600 rounded-full"></div>
              <span className="text-purple-400 font-medium">CleverYou Plans</span>
            </div>
          </div>
          
          {/* Main title with glassmorphic container */}
          <div className="relative inline-block">
            {/* Glassmorphic background for title */}
            <div className="absolute inset-0 backdrop-blur-xl transform scale-110"></div>
            
            <h1 className="relative text-6xl md:text-7xl font-black mb-6 px-8 py-4">
             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                You Deserve to 
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Be Clever
              </span>
            </h1>
          </div>
          
          {/* Enhanced subtitle */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 backdrop-blur-lg "></div>
            <p className="relative text-xl md:text-2xl text-white/90 leading-relaxed px-8 py-6 font-light">
              Start discovering what you&apos;re capable of. 
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-medium"> Your transformation </span>
              begins with the right plan. 
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
            {/* Skeleton Loader */}
            <div className="skeleton-loader">
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Skeleton Card 1 */}
                <div className="relative group">
                  <div className="absolute inset-0 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl animate-pulse"></div>
                  <div className="relative p-8 space-y-6">
                    {/* Plan name skeleton */}
                    <div className="space-y-2">
                      <div className="h-6 w-24 bg-gradient-to-r from-white/20 to-white/10 rounded-lg animate-pulse"></div>
                      <div className="h-3 w-16 bg-white/10 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Description skeleton */}
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-white/10 rounded animate-pulse"></div>
                      <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    </div>
                    
                    {/* Price skeleton */}
                    <div className="space-y-1">
                      <div className="h-8 w-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded animate-pulse"></div>
                      <div className="h-3 w-12 bg-white/10 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Features skeleton */}
                    <div className="space-y-3">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="h-2 w-2 bg-white/20 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                          <div className="h-3 w-32 bg-white/10 rounded animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Button skeleton */}
                    <div className="h-12 w-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-xl animate-pulse"></div>
                  </div>
                </div>

                {/* Skeleton Card 2 - Featured/Popular */}
                <div className="relative group scale-105">
                  {/* Popular badge skeleton */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="h-6 w-24 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="absolute inset-0 backdrop-blur-xl bg-white/10 border-2 border-purple-500/30 rounded-2xl animate-pulse"></div>
                  <div className="relative p-8 space-y-6">
                    {/* Plan name skeleton */}
                    <div className="space-y-2">
                      <div className="h-6 w-20 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-lg animate-pulse"></div>
                      <div className="h-3 w-16 bg-white/10 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Description skeleton */}
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-white/10 rounded animate-pulse"></div>
                      <div className="h-4 w-4/5 bg-white/10 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    </div>
                    
                    {/* Price skeleton */}
                    <div className="space-y-1">
                      <div className="h-8 w-24 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded animate-pulse"></div>
                      <div className="h-3 w-12 bg-white/10 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Features skeleton */}
                    <div className="space-y-3">
                      {[1,2,3,4,5].map((i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="h-2 w-2 bg-purple-400/30 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                          <div className="h-3 w-36 bg-white/10 rounded animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Button skeleton */}
                    <div className="h-12 w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl animate-pulse"></div>
                  </div>
                </div>

                {/* Skeleton Card 3 */}
                <div className="relative group">
                  <div className="absolute inset-0 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl animate-pulse"></div>
                  <div className="relative p-8 space-y-6">
                    {/* Plan name skeleton */}
                    <div className="space-y-2">
                      <div className="h-6 w-20 bg-gradient-to-r from-white/20 to-white/10 rounded-lg animate-pulse"></div>
                      <div className="h-3 w-16 bg-white/10 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Description skeleton */}
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-white/10 rounded animate-pulse"></div>
                      <div className="h-4 w-2/3 bg-white/10 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    </div>
                    
                    {/* Price skeleton */}
                    <div className="space-y-1">
                      <div className="h-8 w-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded animate-pulse"></div>
                      <div className="h-3 w-12 bg-white/10 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Features skeleton */}
                    <div className="space-y-3">
                      {[1,2,3,4,5,6].map((i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="h-2 w-2 bg-white/20 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                          <div className="h-3 w-40 bg-white/10 rounded animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Button skeleton */}
                    <div className="h-12 w-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-xl animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actual PricingTable */}
            <div className="pricing-table">
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

      {/* Global CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .skeleton-loader {
            position: absolute;
            inset: 0;
            opacity: 1;
            pointer-events: auto;
            animation: skeleton-pulse 1.5s ease-in-out infinite alternate, fade-out 0.5s ease-in-out 2s forwards;
          }
          
          .pricing-table {
            opacity: 0;
            animation: fade-in 0.8s ease-in-out 2.5s forwards;
          }
          
          @keyframes skeleton-pulse {
            0% { opacity: 0.6; }
            100% { opacity: 1; }
          }
          
          @keyframes fade-out {
            0% { opacity: 1; pointer-events: auto; }
            100% { opacity: 0; pointer-events: none; }
          }
          
          @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `
      }} />
    </div>
  );
};

export default GlassmorphicPricing;