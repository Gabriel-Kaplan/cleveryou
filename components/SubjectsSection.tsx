/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react"
import Link from "next/link"
import { ArrowRight, Sparkles, BookOpen } from "lucide-react"


interface SubjectCardProps {
  icon: string;
  title: string;
  gradient?: string;
  delay?: number;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ icon, title, gradient = "from-emerald-500 to-teal-500", delay = 0 }) => {
  return (
    <Link href="/coaches">
      <div 
        className={`group relative bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 hover:border-gray-300/80 transition-all duration-500 md:hover:scale-105 cursor-pointer overflow-hidden animate-fade-in-up shadow-sm hover:shadow-lg`}
        style={{ animationDelay: `${delay}ms` }}
      >
        {/* Background gradient overlay */}
        <div className={`absolute inset-0 ${gradient} opacity-0 md:group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
        
        {/* Floating particles - only on desktop */}
        <div className="absolute inset-0 pointer-events-none opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
          <div className={`absolute top-3 right-3 w-1 h-1 ${gradient} rounded-full animate-ping`}></div>
          <div className={`absolute bottom-3 left-3 w-1 h-1 ${gradient} rounded-full animate-ping delay-300`}></div>
          <div className={`absolute top-1/2 right-6 w-0.5 h-0.5 ${gradient} rounded-full animate-pulse delay-500`}></div>
        </div>

        {/* Mobile and Desktop content wrapper */}
        <div className="flex flex-col md:block h-full md:h-auto justify-center md:justify-start">
          {/* Icon with glow effect */}
          <div className="relative z-10 mb-4 text-center md:text-left">
            <div className={`inline-flex p-3 rounded-2xl ${gradient} bg-opacity-10 md:group-hover:bg-opacity-15 transition-all duration-300 md:group-hover:scale-110`}>
              <img 
                src={icon} 
                alt={`${title} icon`}
                className="w-8 h-8 md:group-hover:drop-shadow-lg transition-all duration-300"
                style={{filter: 'brightness(0) invert(1)'}}
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-3 text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800 md:group-hover:text-emerald-600 transition-colors duration-300">
              {title}
            </h3>
            
            

            {/* Explore text - always visible on mobile, hover on desktop */}
            <div className="flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform translate-x-0 md:translate-x-2 md:group-hover:translate-x-0 justify-center md:justify-start">
              <span className="text-sm text-emerald-600 font-medium">Explore</span>
              <ArrowRight className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
        </div>

        {/* Shimmer effect - only on desktop */}
        <div className="absolute inset-0 -translate-x-full md:group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-gray-200/30 to-transparent skew-x-12"></div>
      </div>
    </Link>
  )
}

interface Subject {
  icon: string;
  title: string;
  count: string;
  gradient: string;
}

const SubjectsSection: React.FC = () => {

  
  const subjects: Subject[] = [
    { 
      icon: "/icons/science.svg", 
      title: "Science", 
      count: "10+ companions",
      gradient: "bg-purple-500"
    },
    { 
      icon: "/icons/maths.svg", 
      title: "Mathematics", 
      count: "10+ companions",
      gradient: "bg-orange-500"
    },
    { 
      icon: "/icons/english.svg", 
      title: "English", 
      count: "10+ companions",
      gradient: "bg-blue-600"
    },
    { 
      icon: "/icons/economics.svg", 
      title: "Business", 
      count: "10+ companions",
      gradient: "bg-green-500"
    },
    { 
      icon: "/icons/coding.svg", 
      title: "Programming", 
      count: "10+ companions",
      gradient: "bg-red-500"
    },
    { 
      icon: "/icons/history.svg", 
      title: "History", 
      count: "10+ companions",
      gradient: "bg-purple-600"
    }
  ]



  return (
    <section className="subjects-section py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 right-1/3 w-1 h-1 bg-cyan-500 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/3 left-10 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-16 right-16 w-1 h-1 bg-orange-500 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-pink-500 rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <span className="text-sm font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-wider uppercase">
            Learning Paths
          </span>
          <Sparkles className="w-6 h-6 text-pink-600" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
          Explore Your Journey
        </h2>
        
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Discover personalized learning companions across diverse subjects. Each path is crafted to match your pace and learning style.
        </p>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {subjects.map((subject, index) => (
          <SubjectCard 
            key={index}
            icon={subject.icon}
            title={subject.title}
            
            gradient={subject.gradient}
            delay={index * 100}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16 pt-8 border-t border-gray-200/60 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-gray-500" />
          <span className="text-sm text-gray-500">
            Can&apos;t find your subject? We&apos;re constantly adding new learning paths
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}

export default SubjectsSection