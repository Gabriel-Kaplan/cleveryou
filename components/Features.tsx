import React from 'react';
import { BookOpen, Users, Zap, Clock, ArrowRight, Sparkles, Target } from 'lucide-react';
import Link from 'next/link';

const ValuePropositionBento = () => {
  return (
    <section className="home-section backdrop-blur-xl bg-white/5 border border-white/10 rounded-4xl relative overflow-hidden">
      

      <div className="relative container mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Transform Your Learning Journey
            </h1>
            <Zap className="w-8 h-8 text-pink-600" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stop struggling with generic study materials. Get personalized AI tutoring 
            that adapts to your learning style and accelerates your progress.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          
          {/* Large Problem Statement Card */}
          <div className="lg:col-span-2 backdrop-blur-xl bg-red-50/80 border border-red-200/50 rounded-2xl p-8 shadow-xl hover:shadow-red-500/10 transition-all duration-300 hover:bg-red-50/90">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-500/90 backdrop-blur-sm rounded-xl">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-900">The Problem</h3>
                <p className="text-red-800 mb-4 leading-relaxed">
                  Traditional learning methods are one-size-fits-all, leaving students frustrated 
                  with generic explanations that don&apos;t match their learning style or pace.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-200/80 backdrop-blur-sm text-red-800 rounded-full text-sm">Generic Content</span>
                  <span className="px-3 py-1 bg-red-200/80 backdrop-blur-sm text-red-800 rounded-full text-sm">No Personalization</span>
                  <span className="px-3 py-1 bg-red-200/80 backdrop-blur-sm text-red-800 rounded-full text-sm">Slow Progress</span>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div className="lg:col-span-2 backdrop-blur-xl bg-green-50/80 border border-green-200/50 rounded-2xl p-8 shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:bg-green-50/90">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500/90 backdrop-blur-sm rounded-xl">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-900">Our Solution</h3>
                <p className="text-green-800 mb-4 leading-relaxed">
                  CleverCoaches provides AI-powered tutors that adapt to your unique learning style, 
                  offering personalized explanations and practice tailored just for you.
                </p>
                <Link href="/coaches">
                <div className="flex items-center gap-2 text-green-700 font-medium hover:text-green-600 transition-colors cursor-pointer">
                  <span>Start Learning Smarter</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Key Benefits Cards */}
          <div className="backdrop-blur-xl bg-blue-50/80 border border-blue-200/50 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:bg-blue-50/90">
            <div className="p-3 bg-blue-500/90 backdrop-blur-sm rounded-xl w-fit mb-4">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-blue-900">Personalized Learning</h3>
            <p className="text-blue-800 text-sm">
              Every explanation adapts to your learning style and current knowledge level
            </p>
          </div>

          <div className="backdrop-blur-xl bg-purple-50/80 border border-purple-200/50 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:bg-purple-50/90">
            <div className="p-3 bg-purple-500/90 backdrop-blur-sm rounded-xl w-fit mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-purple-900">Instant Feedback</h3>
            <p className="text-purple-800 text-sm">
              Get immediate corrections and guidance, not days later
            </p>
          </div>

          <div className="backdrop-blur-xl bg-orange-50/80 border border-orange-200/50 rounded-2xl p-6 shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:bg-orange-50/90">
            <div className="p-3 bg-orange-500/90 backdrop-blur-sm rounded-xl w-fit mb-4">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-orange-900">24/7 Available</h3>
            <p className="text-orange-800 text-sm">
              Learn at your own pace, any time that works for your schedule
            </p>
          </div>

          <div className="backdrop-blur-xl bg-teal-50/80 border border-teal-200/50 rounded-2xl p-6 shadow-lg hover:shadow-teal-500/10 transition-all duration-300 hover:bg-teal-50/90">
            <div className="p-3 bg-teal-500/90 backdrop-blur-sm rounded-xl w-fit mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-teal-900">Expert Subjects</h3>
            <p className="text-teal-800 text-sm">
              From math to languages, get specialized tutoring in any subject
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/coaches">
          <button className="flex m-auto backdrop-blur-xl bg-gradient-to-r justify-between from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/20">
            Start Learning <ArrowRight/>
          </button>
          </Link>
          <p className="text-gray-600 mt-3 text-sm">No credit card required • Start learning in 30 seconds</p>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionBento;