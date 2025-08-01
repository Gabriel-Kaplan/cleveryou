"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Brain, Users, Shield, Zap, BookOpen, BarChart3 } from 'lucide-react';

interface Particle {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
}

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles only on client side
  useEffect(() => {
    const particleData = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2
    }));
    setParticles(particleData);
  }, []);

  const faqData = [
    {
      id: 1,
      icon: Brain,
      question: "How does the AI-powered personalization work?",
      answer: "Our advanced AI analyzes each learner's progress, learning style, and performance patterns to create personalized learning paths. The system adapts content difficulty, suggests relevant resources, and optimizes study schedules in real-time, ensuring maximum engagement and retention."
    },
    {
      id: 2,
      icon: Users,
      question: "Can I integrate with my existing team collaboration tools?",
      answer: "Absolutely! Our platform seamlessly integrates with popular tools like Slack, Microsoft Teams, Zoom, and Google Workspace. We also offer robust API access for custom integrations and single sign-on (SSO) support for enterprise environments."
    },
    {
      id: 3,
      icon: Shield,
      question: "What security measures protect our learning data?",
      answer: "We implement enterprise-grade security including AES-256 encryption, SOC 2 Type II compliance, GDPR adherence, and zero-trust architecture. All data is stored in secure cloud environments with regular security audits and 99.9% uptime SLA."
    },
    {
      id: 4,
      icon: Zap,
      question: "How quickly can we deploy the platform for our organization?",
      answer: "Most organizations are up and running within 48-72 hours. Our onboarding includes automated setup, content migration tools, user provisioning, and dedicated success manager support to ensure smooth deployment and adoption."
    },
    {
      id: 5,
      icon: BookOpen,
      question: "What types of content formats are supported?",
      answer: "Our platform supports videos, interactive presentations, SCORM packages, xAPI content, PDFs, quizzes, simulations, VR/AR modules, and AI-generated content. You can also create custom content using our built-in authoring tools."
    },
    {
      id: 6,
      icon: BarChart3,
      question: "What analytics and reporting capabilities are available?",
      answer: "Get comprehensive insights with real-time dashboards, learner progress tracking, completion rates, skill gap analysis, ROI metrics, and predictive analytics. Export reports in multiple formats and set up automated reporting for stakeholders."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 pt-30 p-8 overflow-hidden relative">
      {/* Floating Particles - Only render after client mount */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-slate-400/30 rounded-full"
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Breadcrumb/Category */}
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="text-slate-500">CleverYou</span>
            <div className="h-1 w-1 bg-slate-400 rounded-full"></div>
            <span className="text-purple-600 font-medium">FAQS</span>
          </div>
              
          <motion.h1 
            className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Frequently Asked
            <br />
            <span className="text-5xl">Questions</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Everything you need to know about our AI-powered learning management system
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const IconComponent = item.icon;
            const isOpen = openItem === item.id;
            
            return (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 hover:border-slate-300/60 transition-all duration-500 hover:bg-white/90 shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Hover Glow Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-purple-50/0 to-pink-50/0"
                  whileHover={{
                    background: "linear-gradient(to right, rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.05), rgba(244, 114, 182, 0.05))"
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-8 text-left relative z-10 group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <motion.div 
                        className="flex-shrink-0 w-14 h-14 bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl flex items-center justify-center shadow-sm"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <IconComponent className="w-7 h-7 text-blue-600" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                        {item.question}
                      </h3>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-slate-600 group-hover:text-slate-800 transition-colors duration-300" />
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.div 
                          className="ml-20 pr-12 pt-6"
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <p className="text-slate-600 leading-relaxed text-lg">
                            {item.answer}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div 
            className="inline-flex flex-col items-center gap-6 p-10 rounded-3xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h3 className="text-2xl font-bold text-slate-800">Still have questions?</h3>
            <p className="text-slate-600 max-w-md">
              Our AI learning specialists are here to help you find the perfect solution for your organization.
            </p>
            <motion.button 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-pink-600 rounded-xl font-semibold text-white overflow-hidden shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">Get in Touch</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;