/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from 'react';
import { Bot, Brain, Sparkles, Play, ArrowRight, Zap, Target, Mic, Settings, Users, Clock, TrendingUp, Star } from 'lucide-react';

const CleverYouHomepage = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <div className="min-h-screen bg-none">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-none">
            Build Your
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CleverCoach
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Create your personalized AI learning companion in just 5 simple steps
          </p>
        </div>

        {/* Main Bento Grid - Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 mb-20">
          
          {/* Step 1 - Large Featured */}
          <div 
            className="lg:col-span-3 lg:row-span-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer shadow-xl"
            onMouseEnter={() => setHoveredStep(1)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-4 -translate-x-4"></div>
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[200px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <Bot className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-3">Click "Create Coach"</h3>
                <p className="text-blue-100 text-lg">From your dashboard, CleverCoach library, or home page</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div 
            className="lg:col-span-2 bg-gradient-to-br from-emerald-500 to-green-500 rounded-3xl p-6 text-white relative overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg"
            onMouseEnter={() => setHoveredStep(2)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="absolute inset-0 bg-white/10 rounded-full scale-150 -translate-y-1/2 translate-x-1/4"></div>
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[120px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-lg font-bold">
                  2
                </div>
                <Mic className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Select Voice</h4>
                <p className="text-green-100 text-sm">Choose personality style</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div 
            className="lg:col-span-1 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-6 text-white relative overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg"
            onMouseEnter={() => setHoveredStep(3)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/10 rounded-full translate-y-2 translate-x-2"></div>
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[120px]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Pick Subjects</h4>
                <p className="text-purple-100 text-xs">Areas of study</p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div 
            className="lg:col-span-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-6 text-white relative overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg"
            onMouseEnter={() => setHoveredStep(4)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-4 translate-x-4"></div>
            <div className="relative z-10 h-full flex items-center justify-between min-h-[120px]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-lg font-bold">
                  4
                </div>
                <Settings className="w-8 h-8 group-hover:rotate-90 transition-transform duration-500" />
                <div>
                  <h4 className="text-2xl font-bold mb-1">Customize Preferences</h4>
                  <p className="text-orange-100">Tailor your learning experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div 
            className="lg:col-span-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl p-6 text-white relative overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg"
            onMouseEnter={() => setHoveredStep(5)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="absolute inset-0 bg-white/10 rounded-full scale-125"></div>
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[120px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-lg font-bold">
                  5
                </div>
                <Sparkles className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Build & Start Learning</h4>
                <p className="text-cyan-100 text-sm">Launch your first conversation</p>
              </div>
            </div>
          </div>

          {/* Demo Card */}
          <div className="lg:col-span-1 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl p-6 text-white flex flex-col justify-between group hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg min-h-[120px]">
            <Play className="w-8 h-8 mb-2" />
            <div>
              <h4 className="font-bold text-sm mb-1">Demo</h4>
              <p className="text-yellow-100 text-xs">Watch now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleverYouHomepage;