"use client";
import Image from 'next/image'
import Link from 'next/link'
import NavItems from './NavItems'
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 z-50 h-full w-80 bg-white/5 backdrop-blur-3xl border-l border-white/20 shadow-2xl shadow-black/20 transition-all duration-500 ease-in-out md:hidden ${
        isMobileMenuOpen 
          ? 'translate-x-0' 
          : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20 bg-white/5">
            <div className="flex items-center gap-3">
              <Image 
                src="/icons/cleveryoulogo.png" 
                alt='CleverYou Logo' 
                width={28} 
                height={28}
              />
              <h3 className='text-white text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text'>Menu</h3>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-white/20 rounded-xl transition-colors duration-200 backdrop-blur-sm"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 space-y-8">
            {/* Mobile Nav Items */}
            <div className="space-y-3">
              <Link href="/" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium">
                Home
              </Link>
              <Link href="/companions" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium">
                Coach Library
              </Link>
              <Link href="/subscription" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium">
                Clever Plans
              </Link>
              <Link href="/features" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium">
                My CleverYou
              </Link>
              <a href="/contact" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium">
                Contact
              </a>
            </div>
            
            {/* Mobile Auth Section */}
            <div className="pt-6 border-t border-white/20">
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
    <nav className='fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-[95%] max-w-6xl transition-all duration-300 hover:bg-white/10 hover:border-white/20'>
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group transition-all duration-300">
              <div className="relative">
                <Image 
                  src="/icons/cleveryoulogo.png" 
                  alt='CleverYou Logo' 
                  width={32} 
                  height={32}
                  className="transition-transform duration-300"
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
                      {/* Fixed alignment container */}
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
                className="md:hidden group relative p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-105"
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