"use client";
import Image from 'next/image'
import Link from 'next/link'
import NavItems from './NavItems'
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useState, useEffect } from 'react';
import { Home, Crown, User, BookOpen,Sparkle, Mail,PlusCircle } from "lucide-react";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  
  // Ensure client-side rendering for dynamic styles
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Hide navbar on docs page
  const isDocsPage = pathname === '/docs';
  
  // Don't render navbar on docs page
  if (isDocsPage) {
    return null;
  }

  // Base navbar classes (consistent between server and client)
  const navbarBaseClasses = "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 backdrop-blur-xl shadow-md border rounded-2xl w-auto min-w-fit max-w-4xl transition-all duration-300";
  
  // Dynamic classes only applied on client
  const navbarDynamicClasses = isClient 
    ? "bg-white/10 border-gray-200/50 hover:bg-white/90 hover:shadow-md hover:border-gray-300/50 hover:-translate-y-0.5" 
    : "bg-white/10 border-gray-200/50";

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-900/20 backdrop-blur-sm transition-all duration-300 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - Centered */}
      <div className={`fixed top-1/2 left-1/2 z-50 w-80 max-w-[90vw] bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl shadow-gray-900/10 rounded-2xl transition-all duration-500 ease-in-out md:hidden ${
        isMobileMenuOpen 
          ? 'transform -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100' 
          : 'transform -translate-x-1/2 -translate-y-1/2 scale-95 opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-start gap-2 p-6 border-b border-gray-200 bg-none rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="relative">
              </div>
              <h3 className="text-gray-700 font-bold text-lg ">
                CleverYou
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 space-y-6">
            {/* Mobile Nav Items */}
            <div className="space-y-2">
              <Link href="/" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 font-medium group" onClick={() => setIsMobileMenuOpen(false)}>
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Home</span>
              </Link>
              <Link href="/about" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 font-medium group" onClick={() => setIsMobileMenuOpen(false)}>
                <Sparkle className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>About Us</span>
              </Link>
              <Link href="/coaches/new" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 font-medium group" onClick={() => setIsMobileMenuOpen(false)}>
                <PlusCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>CleverCoach Lab</span>
              </Link>
              <Link href="/coaches" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 font-medium group" onClick={() => setIsMobileMenuOpen(false)}>
                <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Coach Library</span>
              </Link>
              <Link href="/subscription" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300 font-medium group" onClick={() => setIsMobileMenuOpen(false)}>
                <Crown className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Clever Plans</span>
              </Link>
              <Link href="/my-cleveryou" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 font-medium group" onClick={() => setIsMobileMenuOpen(false)}>
                <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>My CleverYou</span>
              </Link>
              <a href="mailto:contact@devtodefy.com?subject=CleverYou Support Inquiry&body=Hello CleverYou Team,%0D%0A%0D%0AI hope this message finds you well. I am reaching out regarding:%0D%0A%0D%0A[Please describe your inquiry or question here]%0D%0A%0D%0AThank you for your time and assistance.%0D%0A%0D%0ABest regards" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-300 font-medium group" onClick={() => setIsMobileMenuOpen(false)}>
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Contact</span>
              </a>
            </div>
            
            {/* Mobile Auth Section */}
            <div className="pt-4 border-t border-gray-200">
              <SignedOut>
                <SignInButton>
                  <button className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 active:scale-95">
                    <span className="relative z-10">Sign In / Sign Up</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </SignInButton>
              </SignedOut>
              
              <SignedIn>
                <div className="flex items-center justify-center">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-12 h-12 ring-2 ring-blue-200 hover:ring-blue-300 transition-all duration-300",
                        userButtonPopoverCard: "bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl",
                        userButtonPopoverActionButton: "hover:bg-gray-50 text-gray-700",
                        userButtonPopoverActionButtonText: "text-gray-700"
                      }
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Navbar */}
      <nav className={`${navbarBaseClasses} ${navbarDynamicClasses}`}>
        <Link href="/">
          <div className="hidden lg:hidden md:hidden sm:hidden items-center gap-3 cursor-pointer group transition-all duration-300">
            <div className="relative">
              <Image 
                src="/icons/cleveryoulogo.png" 
                alt='CleverYou Logo' 
                width={32} 
                height={32}
                className="transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h2 className='text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300'>
              CleverYou
            </h2>
          </div>
        </Link>
        
        <div className='flex items-center gap-6'>
          <div className="hidden md:block">
            <NavItems />
          </div>
          
          <div className="flex items-center gap-3">
            {/* Desktop Auth */}
            <div className="hidden md:flex items-center gap-3">
              <SignedOut>
                <SignInButton>
                  <button className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 border border-blue-500/20">
                    <span className="relative z-10">Sign In</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </SignInButton>
              </SignedOut>
              
              <SignedIn>
                <div className="flex items-center justify-center h-10">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10 ring-2 ring-blue-200 hover:ring-blue-300 transition-all duration-300",
                        userButtonPopoverCard: "bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl",
                        userButtonPopoverActionButton: "hover:bg-gray-50 text-gray-700",
                        userButtonPopoverActionButtonText: "text-gray-700"
                      }
                    }}
                  />
                </div>
              </SignedIn>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden group relative p-2.5 bg-gray-100 hover:bg-gray-200 border border-gray-200 hover:border-gray-300 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <span className={`block h-0.5 w-5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block h-0.5 w-5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block h-0.5 w-5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar