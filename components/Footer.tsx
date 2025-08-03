"use client";
import React, { useState } from "react"
import {    
  Instagram,  
  Bot,
  Sparkles,
  ExternalLink,
  Star,
  Shield,
  Zap,
  HelpCircle,
  FileText,
  Building
} from "lucide-react"
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null)

  const socialLinks = [
    { icon: FaTiktok, href: "https://www.tiktok.com/@thedevtodefy", label: "TikTok", color: "from-blue-500 to-blue-600" },
    { icon: FaXTwitter, href: "https://x.com/DevToDefy", label: "Twitter", color: "from-sky-400 to-sky-500" },
    { icon: Instagram, href: "https://www.instagram.com/devtodefy/", label: "Instagram", color: "from-pink-500 to-rose-500" },
  ]

  const footerLinks = {
    platform: [
      { title: "Home", href: "/" },
      { title: "Coach Library", href: "/coaches" },
      { title: "Clever Plans", href: "/subscription" },
      { title: "My CleverYou", href: "/my-cleveryou" },
      { title: "CleverCoach Lab", href: "/coaches/new" },
      //{ title: "Learning Paths", href: "/learning-paths" },
      //{ title: "Study Groups", href: "/study-groups" },
    ],
support: [
      { 
        title: "Contact Us", 
        href: "mailto:contact@devtodefy.com?subject=CleverYou Support Inquiry&body=Hello CleverYou Team,%0D%0A%0D%0AI hope this message finds you well. I am reaching out regarding:%0D%0A%0D%0A[Please describe your inquiry or question here]%0D%0A%0D%0AThank you for your time and assistance.%0D%0A%0D%0ABest regards" 
      },
      //{ title: "System Status", href: "#" },
      //{ title: "Getting Started", href: "/getting-started" },
      { title: "FAQ", href: "/FAQ" },
      { 
        title: "Report Issue", 
        href: "mailto:contact@devtodefy.com?subject=CleverYou Issue Report&body=Hello CleverYou Technical Team,%0D%0A%0D%0AI would like to report an issue I encountered while using CleverYou:%0D%0A%0D%0ACategory: [Bug/Performance/Feature Request/Other]%0D%0ADescription: [Please describe the issue in detail]%0D%0ASteps to reproduce: [If applicable]%0D%0ABrowser/Device: [Your browser and device information]%0D%0A%0D%0AThank you for your attention to this matter.%0D%0A%0D%0ABest regards" 
      }
    ],
    company: [
      { title: "About Us", href: "/about" },
      { title: "Careers", href: "https://www.devtodefy.com/careers" },
      { title: "Docs", href: "/docs" },
      { title: "Blog", href: "https://medium.com/@devtodefy" },
    ],
    legal: [
      { title: "Policies & Terms", href: "/legal" }
    ]
  }

  const features = [
    { icon: Bot, text: "AI-Powered Learning" },
    { icon: Shield, text: "Secure & Private" },
    { icon: Zap, text: "Lightning Fast" },
    { icon: Star, text: "Built for Learners" }
  ]

  return (
    <footer className="relative text-gray-800 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/3 left-1/6 w-1 h-1 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-pink-500 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-20 left-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand section */}
  <div className="lg:col-span-4 space-y-6">
  <div className="inline-flex items-center gap-3 bg-slate-500 p-3 rounded-xl w-full max-w-[220px] sm:max-w-[240px] md:max-w-[220px] lg:max-w-[200px]">
    <div className="bg-none rounded-xl flex items-center justify-center flex-shrink-0">
      <Image 
        src="/icons/cleveryoulogo.png" 
        alt='CleverYou Logo' 
        width={36} 
        height={36}
        className=""
      />
    </div>
    <div className="min-w-0">
      <h3 className="text-xl sm:text-2xl font-bold text-white truncate">
        CleverYou
      </h3>
    </div>
  </div>
  
  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
    Revolutionizing education through AI-powered personalized learning experiences. 
    Join learners discovering their potential with our intelligent tutoring system.
  </p>

  {/* Features badges */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {features.map((feature, index) => (
      <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
        <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
          <feature.icon className="w-4 h-4 text-gray-600" />
        </div>
        <span className="truncate">{feature.text}</span>
      </div>
    ))}
  </div>

  {/* Social links */}
  <div>
    <h4 className="text-sm font-semibold text-gray-700 mb-4">Follow Us</h4>
    <div className="flex gap-3">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          aria-label={social.label}
          className="group relative w-10 h-10 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
          onMouseEnter={() => setHoveredSocial(index)}
          onMouseLeave={() => setHoveredSocial(null)}
        >
          <social.icon className={`w-5 h-5 transition-all duration-300 ${
            hoveredSocial === index 
              ? `bg-gradient-to-r ${social.color} bg-clip-text text-transparent` 
              : 'text-gray-500 group-hover:text-gray-700'
          }`} />
          {hoveredSocial === index && (
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${social.color} opacity-10 animate-pulse`}></div>
          )}
        </a>
      ))}
    </div>
  </div>
</div>

          {/* Links sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-red-600 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Platform
              </h4>
              <ul className="space-y-3">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span>{link.title}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-blue-600 mb-4 flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                Support
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span>{link.title}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-purple-600 mb-4 flex items-center gap-2">
                <Building className="w-4 h-4" />
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span>{link.title}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-yellow-600 mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span>{link.title}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
              
              <p className="flex items-center gap-1">
                © 2025 CleverYou by 
                <Link href="https://devtodefy.com/" className="text-[#7300ff] underline hover:text-[#000] transition-colors duration-300">
                 Dev To Defy (DTD)
                 </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </footer>
  )
}

export default Footer