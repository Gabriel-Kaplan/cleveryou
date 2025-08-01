"use client";
import Image from 'next/image'
import Link from 'next/link'
import NavItems from './NavItems'
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useState } from 'react';
import { Home, Crown, User, BookOpen, Phone } from "lucide-react";
import { FaPeopleGroup } from "react-icons/fa6";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // Hide navbar on docs page
  const isDocsPage = pathname === '/docs';
  
  // Don't render navbar on docs page
  if (isDocsPage) {
    return null;
  }
  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - Centered */}
      <div className={`fixed top-1/2 left-1/2 z-50 w-80 max-w-[90vw] bg-white/5 backdrop-blur-3xl border border-white/20 shadow-2xl shadow-black/20 rounded-2xl transition-all duration-500 ease-in-out md:hidden ${
        isMobileMenuOpen 
          ? 'transform -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100' 
          : 'transform -translate-x-1/2 -translate-y-1/2 scale-95 opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-start gap-2 p-6 border-b border-white/20 bg-white/5 rounded-t-2xl">
          <Image src="/icons/cleveryoulogo.png" alt='cleveryou_logo' width={30} height={40} />
            <h3 className="text-white font-semibold">CleverYou</h3>
            
          </div>

          {/* Content */}
          <div className="flex-1 p-6 space-y-6">
            {/* Mobile Nav Items */}
            <div className="space-y-2">
              <Link href="/" className="flex items-center gap-3 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link href="/my-cleveryou" className="flex items-center gap-3 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                <FaPeopleGroup className="w-5 h-5" />
                <span>About Us</span>
              </Link>
              <Link href="/coaches" className="flex items-center gap-3 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                <BookOpen className="w-5 h-5" />
                <span>Coach Library</span>
              </Link>
              <Link href="/subscription" className="flex items-center gap-3 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                <Crown className="w-5 h-5" />
                <span>Clever Plans</span>
              </Link>
              <Link href="/my-cleveryou" className="flex items-center gap-3 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                <User className="w-5 h-5" />
                <span>My CleverYou</span>
              </Link>
              <a href="/contact" className="flex items-center gap-3 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                <Phone className="w-5 h-5" />
                <span>Contact</span>
              </a>
            </div>
            
            {/* Mobile Auth Section */}
            <div className="pt-4 border-t border-white/20">
              <SignedOut>
                <SignInButton>
                  <button className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-500/80 to-purple-600/80 hover:from-blue-600/90 hover:to-purple-700/90 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm border border-white/10">
                    <span className="relative z-10">Sign In / Sign Up</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </SignInButton>
              </SignedOut>
              
              <SignedIn>
                <div className="flex items-center justify-center">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-12 h-12 ring-2 ring-white/30 hover:ring-white/50 transition-all duration-300",
                        userButtonPopoverCard: "bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl",
                        userButtonPopoverActionButton: "hover:bg-white/20 text-white",
                        userButtonPopoverActionButtonText: "text-white"
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
      <nav className='fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 bg-black/2 backdrop-blur-md shadow-md border border-white/10 rounded-2xl w-auto min-w-fit max-w-4xl transition-all duration-300 hover:bg-white/20 hover:border-white/20'>
        <Link href="/">
          <div className="hidden lg:hidden md:hidden sm:hidden items-center gap-3 cursor-pointer group transition-all duration-300">
            <div className="relative">
              <Image 
                src="/icons/cleveryoulogo.png" 
                alt='CleverYou Logo' 
                width={32} 
                height={32}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h2 className='text-white text-xl font-semibold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300'>
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
                  <button className="group relative overflow-hidden bg-gradient-to-r from-blue-500/90 to-purple-600/90 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 border border-white/10">
                    <span className="relative z-10">Sign In</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </SignInButton>
              </SignedOut>
              
              <SignedIn>
                <div className="flex items-center justify-center h-10">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10 ring-2 ring-white/20 hover:ring-white/40 transition-all duration-300",
                        userButtonPopoverCard: "bg-gray-900/95 backdrop-blur-xl border border-white/10 shadow-2xl",
                        userButtonPopoverActionButton: "hover:bg-white/10 text-white",
                        userButtonPopoverActionButtonText: "text-white"
                      }
                    }}
                  />
                </div>
              </SignedIn>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden group relative p-2.5 bg-black/30 hover:bg-black/60 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-105"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
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