"use client";
import { PricingTable } from '@clerk/nextjs';
import React from 'react';

const LightGlassmorphicPricing = () => {
  // Light glassmorphic appearance configuration for Clerk components
  const lightAppearance = {
    elements: {
      // Main container
      rootBox: {
        backgroundColor: "transparent",
      },
      // Card containers
      card: {
        backgroundColor: "rgba(255, 255, 255, 0.85)", // Semi-transparent white
        border: "1px solid rgba(0, 0, 0, 0.06)",
        backdropFilter: "blur(24px)",
        borderRadius: "20px",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
        transition: "transform 0.3s ease",
      },
      cardBox__popular: {
        backgroundColor: "rgba(255, 255, 255, 0.95)", // More opaque for popular
        border: "2px solid rgba(139, 92, 246, 0.3)",
        transform: "scale(1.04)",
        boxShadow: "0 20px 60px rgba(139, 92, 246, 0.15)",
      },
      // Plan names
      planName: {
        color: "#1f2937", // dark gray
        fontSize: "24px",
        fontWeight: "700",
      },
      // Plan descriptions
      planDescription: {
        color: "rgba(55, 65, 81, 0.8)", // gray-700 with opacity
        fontSize: "16px",
      },
      // Pricing
      planPrice: {
        background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        fontSize: "32px",
        fontWeight: "800",
      },
      planPriceText: {
        color: "rgba(55, 65, 81, 0.7)",
      },
      // Features list
      planFeatures: {
        color: "rgba(31, 41, 55, 0.9)", // dark gray
      },
      planFeaturesList: {
        color: "rgba(31, 41, 55, 0.9)",
      },
      planFeaturesListItem: {
        color: "rgba(31, 41, 55, 0.9)",
        "&::before": {
          color: "#8b5cf6",
        }
      },
      // Buttons
      button: {
        background: "rgba(255, 255, 255, 0.7)",
        border: "1px solid rgba(139, 92, 246, 0.2)",
        color: "#374151", // gray-700
        borderRadius: "12px",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        padding: "16px 24px",
        fontSize: "16px",
        fontWeight: "600",
        minHeight: "56px",
        "&:hover": {
          background: "rgba(255, 255, 255, 0.9)",
          border: "1px solid rgba(139, 92, 246, 0.4)",
          transform: "translateY(-2px)",
          boxShadow: "0 8px 25px rgba(139, 92, 246, 0.2)",
          color: "#1f2937",
        }
      },
      // Primary/featured button
      button__primary: {
        background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
        border: "none",
        color: "#ffffff",
        fontWeight: "600",
        padding: "16px 24px",
        fontSize: "16px",
        minHeight: "56px",
        "&:hover": {
          background: "linear-gradient(135deg, #7c3aed, #db2777)",
          transform: "translateY(-2px)",
          boxShadow: "0 8px 25px rgba(139, 92, 246, 0.3)",
        }
      },
      // Popular badge
      badge: {
        background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
        color: "#ffffff",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "600",
        padding: "4px 12px",
      },
      // Text elements
      text: {
        color: "rgba(31, 41, 55, 0.9)",
      },
      // Headers
      headerTitle: {
        color: "#1f2937",
      },
      headerSubtitle: {
        color: "rgba(55, 65, 81, 0.8)",
      },
      // Loading states
      spinner: {
        color: "#8b5cf6",
      }
    },
    variables: {
      colorPrimary: "#8b5cf6",
      colorSuccess: "#10b981",
      colorWarning: "#f59e0b",
      colorDanger: "#ef4444",
      colorNeutral: "rgba(55, 65, 81, 0.7)",
      colorText: "#1f2937",
      colorTextSecondary: "rgba(55, 65, 81, 0.8)",
      colorBackground: "rgba(255, 255, 255, 0.85)",
      borderRadius: "16px",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }
  };

  // Checkout modal appearance to match the light theme
  const checkoutAppearance = {
    elements: {
      modalContent: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(0, 0, 0, 0.08)",
        borderRadius: "20px",
      },
      modalBackdrop: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      },
      card: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(0, 0, 0, 0.06)",
      },
      headerTitle: {
        color: "#1f2937",
      },
      text: {
        color: "rgba(31, 41, 55, 0.9)",
      },
      button: {
        background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
        "&:hover": {
          background: "linear-gradient(135deg, #7c3aed, #db2777)",
        }
      }
    },
    variables: {
      colorBackground: "rgba(255, 255, 255, 0.95)",
      colorText: "#1f2937",
      colorPrimary: "#8b5cf6",
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 relative overflow-hidden bg-none">
      {/* Animated background elements - lighter colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 -right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-24 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16 relative">
          {/* Floating decoration */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            {/* Breadcrumb/Category */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-gray-500">CleverYou</span>
              <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
              <span className="text-purple-600 font-medium">CleverYou Plans</span>
            </div>
          </div>
          
          {/* Main title with glassmorphic container */}
          <div className="relative inline-block">
            {/* Glassmorphic background for title */}
            <div className="absolute inset-0 backdrop-blur-xl transform scale-110"></div>
            
            <h1 className="relative text-6xl md:text-7xl font-black mb-6 px-8 py-4">
             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                You Deserve to 
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Be Clever
              </span>
            </h1>
          </div>
          
          {/* Enhanced subtitle */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 backdrop-blur-lg "></div>
            <p className="relative text-xl md:text-2xl text-gray-700 leading-relaxed px-8 py-6 font-light">
              Start discovering what you&apos;re capable of. 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium"> Your transformation </span>
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
            {/* Skeleton Loader - Light theme */}
            <div className="skeleton-loader">
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Skeleton Card 1 */}
                <div className="relative group">
                  <div className="absolute inset-0 backdrop-blur-xl bg-white/60 border border-gray-200/50 rounded-2xl animate-pulse"></div>
                  <div className="relative p-8 space-y-6">
                    {/* Plan name skeleton */}
                    <div className="space-y-2">
                      <div className="h-6 w-24 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg animate-pulse"></div>
                      <div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Description skeleton */}
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    </div>
                    
                    {/* Price skeleton */}
                    <div className="space-y-1">
                      <div className="h-8 w-20 bg-gradient-to-r from-purple-200 to-pink-200 rounded animate-pulse"></div>
                      <div className="h-3 w-12 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Features skeleton */}
                    <div className="space-y-3">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="h-2 w-2 bg-gray-300 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                          <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Button skeleton */}
                    <div className="h-12 w-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 rounded-xl animate-pulse"></div>
                  </div>
                </div>

                {/* Skeleton Card 2 - Featured/Popular */}
                <div className="relative group scale-105">
                  {/* Popular badge skeleton */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="h-6 w-24 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="absolute inset-0 backdrop-blur-xl bg-white/80 border-2 border-purple-300/50 rounded-2xl animate-pulse"></div>
                  <div className="relative p-8 space-y-6">
                    {/* Plan name skeleton */}
                    <div className="space-y-2">
                      <div className="h-6 w-20 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg animate-pulse"></div>
                      <div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Description skeleton */}
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    </div>
                    
                    {/* Price skeleton */}
                    <div className="space-y-1">
                      <div className="h-8 w-24 bg-gradient-to-r from-purple-300 to-pink-300 rounded animate-pulse"></div>
                      <div className="h-3 w-12 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Features skeleton */}
                    <div className="space-y-3">
                      {[1,2,3,4,5].map((i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="h-2 w-2 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                          <div className="h-3 w-36 bg-gray-200 rounded animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Button skeleton */}
                    <div className="h-12 w-full bg-gradient-to-r from-purple-200 to-pink-200 border border-purple-300 rounded-xl animate-pulse"></div>
                  </div>
                </div>

                {/* Skeleton Card 3 */}
                <div className="relative group">
                  <div className="absolute inset-0 backdrop-blur-xl bg-white/60 border border-gray-200/50 rounded-2xl animate-pulse"></div>
                  <div className="relative p-8 space-y-6">
                    {/* Plan name skeleton */}
                    <div className="space-y-2">
                      <div className="h-6 w-20 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg animate-pulse"></div>
                      <div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Description skeleton */}
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    </div>
                    
                    {/* Price skeleton */}
                    <div className="space-y-1">
                      <div className="h-8 w-24 bg-gradient-to-r from-blue-200 to-purple-200 rounded animate-pulse"></div>
                      <div className="h-3 w-12 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Features skeleton */}
                    <div className="space-y-3">
                      {[1,2,3,4,5,6].map((i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="h-2 w-2 bg-gray-300 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                          <div className="h-3 w-40 bg-gray-200 rounded animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Button skeleton */}
                    <div className="h-12 w-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 rounded-xl animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actual PricingTable with light appearance */}
            <div className="pricing-table">
              <PricingTable 
                appearance={lightAppearance}
                checkoutProps={{
                  appearance: checkoutAppearance
                }}
                fallback={
                  <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-2 border-purple-500 border-t-transparent"></div>
                  </div>
                }
              />
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
            0% { opacity: 0.4; }
            100% { opacity: 0.8; }
          }
          
          @keyframes fade-out {
            0% { opacity: 1; pointer-events: auto; }
            100% { opacity: 0; pointer-events: none; }
          }
          
          @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          /* Additional custom styles for better integration */
          .pricing-table [data-clerk="card"] {
            transition: all 0.3s ease;
          }
          
          .pricing-table [data-clerk="card"]:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px rgba(139, 92, 246, 0.15);
          }
          
          .pricing-table [data-clerk="button"] {
            font-weight: 600;
            letter-spacing: 0.025em;
          }
        `
      }} />
    </div>
  );
};

export default LightGlassmorphicPricing;