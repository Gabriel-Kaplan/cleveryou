import React from 'react'
import MissionSection from "@/components/MissionSection"
import Footer from '@/components/Footer'

const page = () => {
  return (
    <main>  
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>  
        <MissionSection/>
        <Footer/>
    </main>
  )
}

export default page
