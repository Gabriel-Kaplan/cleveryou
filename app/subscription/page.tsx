"use client";
import { PricingTable } from '@clerk/nextjs';
import React, { useState, useEffect } from 'react';

const LightGlassmorphicPricing = () => {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Light glassmorphic appearance configuration for Clerk components
  const lightAppearance = {
    elements: {
      // Main container
      rootBox: {
        backgroundColor: "transparent",
      },
      // Card containers
      card: {
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        border: "1px solid rgba(0, 0, 0, 0.06)",
        backdropFilter: "blur(24px)",
        borderRadius: "20px",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
        transition: "transform 0.3s ease",
      },
      cardBox__popular: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        border: "2px solid rgba(139, 92, 246, 0.3)",
        transform: "scale(1.04)",
        boxShadow: "0 20px 60px rgba(139, 92, 246, 0.15)",
      },
      // Plan names
      planName: {
        color: "#1f2937",
        fontSize: "24px",
        fontWeight: "700",
      },
      // Plan descriptions
      planDescription: {
        color: "rgba(55, 65, 81, 0.8)",
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
        color: "rgba(31, 41, 55, 0.9)",
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
        color: "#374151",
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

  // Checkout modal appearance
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

  // Simple loading component to prevent hydration issues
  const LoadingSkeleton = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[1, 2, 3].map((i) => (
        <div key={i} className="relative">
          <div className="absolute inset-0 backdrop-blur-xl bg-white/60 border border-gray-200/50 rounded-2xl"></div>
          <div className="relative p-8 space-y-6">
            <div className="h-6 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-8 w-20 bg-gradient-to-r from-purple-200 to-pink-200 rounded animate-pulse"></div>
            <div className="space-y-3">
              {[1,2,3,4].map((j) => (
                <div key={j} className="h-3 w-32 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
            <div className="h-12 w-full bg-gray-100 border border-gray-200 rounded-xl animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen py-16 px-4 relative overflow-hidden bg-none">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 -right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-24 relative">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-gray-500">CleverYou</span>
              <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
              <span className="text-purple-600 font-medium">CleverYou Plans</span>
            </div>
          </div>
          
          <div className="relative inline-block">
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
          
          <div className="relative max-w-3xl mx-auto">
            <p className="relative text-xl md:text-2xl text-gray-700 leading-relaxed px-8 py-6 font-light">
              Start discovering what you&apos;re capable of. 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium"> Your transformation </span>
              begins with the right plan. 
            </p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mx-auto mb-16">
          {!mounted ? (
            <LoadingSkeleton />
          ) : (
            <PricingTable 
              appearance={lightAppearance}
              checkoutProps={{
                appearance: checkoutAppearance
              }}
              fallback={<LoadingSkeleton />}
            />
          )}
        </div>
      </div>

      {/* Simplified CSS to avoid hydration issues */}
      <style dangerouslySetInnerHTML={{
        __html: `
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