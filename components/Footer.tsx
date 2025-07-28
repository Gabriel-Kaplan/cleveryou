"use client";
import React, { useState } from "react"
import {    
  Instagram,  
  Bot,
  Sparkles,
  ExternalLink,
  ChevronUp,
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
  const [hoveredSocial, setHoveredSocial] = useState(null)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: FaTiktok, href: "https://www.tiktok.com/@thedevtodefy", label: "Facebook", color: "from-blue-500 to-blue-600" },
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
      { title: "Blog", href: "https://medium.com/@devtodefy" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
      { title: "Cookie Policy", href: "/cookies" },
      { title: "Data Protection", href: "/data-protection" },
      { title: "License Agreement", href: "/license" }
    ]
  }

  const features = [
    { icon: Bot, text: "AI-Powered Learning" },
    { icon: Shield, text: "Secure & Private" },
    { icon: Zap, text: "Lightning Fast" },
    { icon: Star, text: "Top Rated Platform" }
  ]

  return (
    <footer className="relative bg-transparent text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/3 left-1/6 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-20 left-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-none rounded-xl flex items-center justify-center">
                <Image 
                  src="/icons/cleveryoulogo.png" 
                  alt='CleverYou Logo' 
                  width={36} 
                  height={36}
                  className=""
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-100 to-slate-100 bg-clip-text text-transparent">
                  CleverYou
                </h3>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed">
              Revolutionizing education through AI-powered personalized learning experiences. 
              Join learners discovering their potential with our intelligent tutoring system.
            </p>

            {/* Features badges */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="group relative w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <social.icon className={`w-5 h-5 transition-all duration-300 ${
                      hoveredSocial === index 
                        ? `bg-gradient-to-r ${social.color} bg-clip-text text-transparent` 
                        : 'text-slate-400 group-hover:text-white'
                    }`} />
                    {hoveredSocial === index && (
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${social.color} opacity-20 animate-pulse`}></div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-red-400 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Platform
              </h4>
              <ul className="space-y-3">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-slate-400 hover:text-emerald-300 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span>{link.title}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-blue-300 mb-4 flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                Support
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-slate-400 hover:text-emerald-300 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span>{link.title}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-purple-300 mb-4 flex items-center gap-2">
                <Building className="w-4 h-4" />
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-slate-400 hover:text-emerald-300 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span>{link.title}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-yellow-300 mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-slate-400 hover:text-emerald-300 transition-colors duration-300 flex items-center gap-2 group"
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
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-400">
              <p className="flex items-center gap-1">
                © 2025 CleverYou by 
                 Dev To Defy (DTD)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top floating button - alternative */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-none border-2 border-slate-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      >
        <ChevronUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  )
}

export default Footer