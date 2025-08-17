"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe, Layers, GraduationCap, CreditCard, BarChart3, User, Smartphone } from 'lucide-react';
import Link from 'next/link';

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
      icon: Globe,
      question: "Do I need to download CleverYou?",
      answer: "No downloads needed! CleverYou works directly in your web browser on any computer, tablet, or smartphone. Just log in and start learning instantly."
    },
    {
      id: 2,
      icon: Layers,
      question: "What can I learn with CleverYou?",
      answer: "CleverYou is designed for students at any grade level, but anyone who wants to learn can use it. You can study math, science, languages, history, test prep, and even ask the AI to teach you something new on the spot. The possibilities are endless! And new sunjects are being added all the time."
    },
    {
      id: 3,
      icon: GraduationCap,
      question: "How does the AI tutor actually help me?",
      answer: "The AI explains concepts step by step and can adjust to your learning level. If you say you're completely new to a topic, it will start from the basics in simple terms. If you're intermediate or advanced, it adapts to that level and challenges you with deeper explanations and practice."
    },
    {
      id: 4,
      icon: CreditCard,
      question: "Is CleverYou free to use?",
      answer: "CleverYou offers a free plan with essential features, plus premium options that unlock unlimited practice, advanced insights, and additional AI-powered tools. You can get started free anytime."
    },
    {
      id: 5,
      icon: BarChart3,
      question: "What can I do inside the CleverYou dashboard/ Do I get the full dashboard on every plan",
      answer: "The CleverYou dashboard gives you a personalized learning hub. Depending on your plan: Clever Plan gives you access to selected parts of the dashboard, helping you track your progress and use core features. Genius Plan unlocks the full dashboard, including advanced insights, complete progress tracking, and all personalization features. This way, your dashboard grows with you as you upgrade."
    },
    {
      id: 6,
      icon: User,
      question: "Is CleverYou only for students?",
      answer: "CleverYou is made with students in mind — from middle school to university — but it's also for anyone curious or wanting to learn something quickly. Whether you're brushing up on math, preparing for exams, or exploring a new subject, CleverYou adapts to your needs."
    },
    {
      id: 7,
      icon: Smartphone,
      question: "Can I use CleverYou on mobile?",
      answer: "CleverYou works on any mobile browser, so you can learn on the go from your phone or tablet. A dedicated mobile app is currently in mind to make learning even smoother."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-none pt-30 p-8 overflow-hidden relative">
      {/* Floating Particles */}
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
            Everything you need to know about how CleverYou helps you learn faster with AI
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
              Our team is here to help you find the perfect solution for you.
            </p>
            <Link href={`mailto:contact@devtodefy.com?subject=CleverYou FAQ Question&body=Hello CleverYou Team,%0D%0A%0D%0AI have a question about CleverYou.%0D%0A%0D%0ACategory: [General / Features / Account / Other]%0D%0AMy question: [Please describe what you'd like to know]%0D%0AAdditional context: [Any relevant details that might help with your answer]%0D%0A%0D%0AThank you!%0D%0A%0D%0ABest regards,`}>
              <motion.button 
                className="group relative px-8 py-4 bg-none rounded-xl font-semibold text-black border-2 border-slate-400 overflow-hidden shadow-lg cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">Get in Touch</span>
                <motion.div 
                  className="absolute inset-0 bg-black/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;