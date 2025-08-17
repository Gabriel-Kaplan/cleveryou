import React from 'react';
import { BookOpen, Users, Zap, Clock, ArrowRight, Sparkles, Target } from 'lucide-react';
import Link from 'next/link';

const ValuePropositionBento = () => {
  return (
    <section className="min-h-screen bg-none relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rotate-45 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-20 animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 border-4 border-orange-300 rounded-full opacity-30 animate-spin slow"></div>
      </div>

      <div className="relative container mx-auto px-6 py-20 z-10">
        {/* Hero Section - Completely Redesigned */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-none backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600 animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">Revolutionary Learning Experience</span>
              <Zap className="w-5 h-5 text-pink-600 animate-pulse delay-300" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              Don&apos;t Fight
            </span>
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-700 bg-clip-text text-transparent">
              {' '}Your Brain!
            </span>
            <span className="block text-2xl md:text-4xl font-bold text-gray-800 mt-4">
              Learn With It!
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Finally, a learning experience that gets <span className="font-bold text-purple-600">you</span>. Master any subjects faster 
              with AI tutors that think like you do and explain things the way you need to hear them.
            </p>
          </div>
        </div>

        {/* Redesigned Layout - Asymmetric Fun Grid */}
        <div className="max-w-7xl mx-auto mb-20">
          {/* Top Row - Problem & Solution Side by Side but Tilted */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Problem Card - Tilted Left */}
            <div className="transform md:-rotate-2 transition-all duration-500 hover:rotate-0 hover:scale-105 group">
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl p-8 shadow-xl border-l-8 border-red-400 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-red-200 text-red-800 px-4 py-2 rounded-full text-sm font-bold">
                      The Problem 😤
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-black mb-4 text-red-900 leading-tight">
                    The Frustration You Know Too Well
                  </h3>
                  
                  <p className="text-red-800 mb-6 leading-relaxed text-lg">
                    You&apos;re smart. You want to learn. But every tutorial, course, and textbook assumes you learn 
                    exactly like everyone else. The explanations don&apos;t click. The pace is wrong. You end up 
                    more confused than when you started - and feeling like maybe you&apos;re just &quot;not good at this.&quot;
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/80 text-red-700 rounded-full text-sm font-bold shadow-md border border-red-200">😵‍💫 Confusing Explanations</span>
                    <span className="px-4 py-2 bg-white/80 text-red-700 rounded-full text-sm font-bold shadow-md border border-red-200">🐌 Wrong Pace</span>
                    <span className="px-4 py-2 bg-white/80 text-red-700 rounded-full text-sm font-bold shadow-md border border-red-200">😔 Self-Doubt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Card - Tilted Right */}
            <div className="transform md:rotate-2 transition-all duration-500 hover:rotate-0 hover:scale-105 group">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 shadow-xl border-l-8 border-green-400 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 rounded-full -translate-y-16 -translate-x-16 opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      <Sparkles className="h-8 w-8 text-white animate-pulse" />
                    </div>
                    <div className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
                      The Solution ✨
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-black mb-4 text-green-900 leading-tight">
                    Finally, Learning That Fits Your Brain
                  </h3>
                  
                  <p className="text-green-800 mb-6 leading-relaxed text-lg">
                    Imagine having a genius tutor who instantly understands how YOUR mind works. CleverCoaches 
                    adapt in real-time to your learning, explains concepts and much more. 
                    Accelerate your progress. It&apos;s like having Einstein as your personal tutor.
                  </p>
                  <Link href="/coaches">
                  <div className="group/link cursor-pointer inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <span>Discover Your Learning Partner</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits - Playful Scattered Layout */}
          <div className="relative">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-800 mb-4">Why You&apos;ll Love It</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Benefit 1 */}
              <div className="transform hover:scale-110 transition-all duration-300 hover:-rotate-1">
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl border-t-4 border-blue-400 relative overflow-hidden group">
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-100 rounded-full opacity-70 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl w-fit mb-4 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-black mb-3 text-blue-900 text-xl">Learns How You Learn</h3>
                    <p className="text-blue-800 leading-relaxed">
                      Adapts explanations to YOUR brain. You&apos;ll finally &quot;get it&ldquo;
                    </p>
                    <div className="text-2xl mt-2">🧠</div>
                  </div>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="transform hover:scale-110 transition-all duration-300 hover:rotate-1 mt-8 md:mt-0">
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl border-t-4 border-purple-400 relative overflow-hidden group">
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-purple-100 rounded-full opacity-70 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl w-fit mb-4 shadow-lg transform group-hover:-rotate-12 transition-transform duration-300">
                      <Zap className="h-6 w-6 text-white animate-pulse" />
                    </div>
                    <h3 className="font-black mb-3 text-purple-900 text-xl">Never Get Stuck Again</h3>
                    <p className="text-purple-800 leading-relaxed">
                      Instant help the moment you&apos;re confused. No waiting, no scheduling - just answers
                    </p>
                    <div className="text-2xl mt-2">⚡</div>
                  </div>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="transform hover:scale-110 transition-all duration-300 hover:-rotate-1">
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl border-t-4 border-orange-400 relative overflow-hidden group">
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-orange-100 rounded-full opacity-70 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl w-fit mb-4 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-black mb-3 text-orange-900 text-xl">Learn on Your Terms</h3>
                    <p className="text-orange-800 leading-relaxed">
                      2 AM? Lunch break? Weekend binge? Your AI tutor is always ready when you are
                    </p>
                    <div className="text-2xl mt-2">🕐</div>
                  </div>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="transform hover:scale-110 transition-all duration-300 hover:rotate-1 mt-8 lg:mt-0">
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl border-t-4 border-teal-400 relative overflow-hidden group">
                  <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-teal-100 rounded-full opacity-70 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl w-fit mb-4 shadow-lg transform group-hover:-rotate-12 transition-transform duration-300">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-black mb-3 text-teal-900 text-xl">Master Anything</h3>
                    <p className="text-teal-800 leading-relaxed">
                      Coding? History? Science? Get expert-level tutoring in every subject imaginable
                    </p>
                    <div className="text-2xl mt-2">🚀</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA - Fun and Prominent */}
       
        <div className="text-center">
          <div className="inline-block transform hover:scale-105 transition-all duration-300 hover:rotate-1">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1 rounded-3xl shadow-2xl">
               <Link href="/coaches">
              <button className="bg-white rounded-3xl px-12 py-6 group relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                <div className="relative flex items-center gap-4">
                  <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Unlock My Learning Potential
                  </span>
                  <div className="p-2 bg-none">
                    <ArrowRight className="h-6 w-6 text-black transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </button>
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ValuePropositionBento;