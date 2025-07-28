'use client'

import { useEffect, ReactNode } from 'react'

interface ParallaxSectionProps {
  backgroundImage: string
  height?: string
  opacity?: string
  speed?: string
  overlay?: boolean
  children?: ReactNode
}

const ParallaxSection = ({ 
  backgroundImage, 
  height = "h-32", 
  opacity = "opacity-20", 
  speed = "0.3",
  overlay = false,
  children 
}: ParallaxSectionProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.parallax-bg')
      
      parallaxElements.forEach(element => {
        const htmlElement = element as HTMLElement
        const elementSpeed = htmlElement.dataset.speed || '0.3'
        const yPos = -(scrolled * parseFloat(elementSpeed))
        htmlElement.style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`relative ${height} overflow-hidden`}>
      <div 
        className={`parallax-bg absolute inset-0 bg-cover bg-center bg-fixed ${opacity}`}
        data-speed={speed}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: '120%', // Make it taller for parallax effect
          top: '-10%'
        }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-pink-900/40" />
      )}
      {children && (
        <div className="relative z-10 flex items-center justify-center h-full">
          {children}
        </div>
      )}
    </div>
  )
}

export default ParallaxSection