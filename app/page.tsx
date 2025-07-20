import CompanionCard from "@/components/CompanionCard"
import CompanionsList from "@/components/CompanionsList"
import CTA from "@/components/CTA"
import HeroSection from "@/components/HeroSection"
import StatsSection from "@/components/StatsSection"
import SubjectsSection from "@/components/SubjectsSection"
import HowItWorks from "@/components/HowItWorks"
import FooterCTA from "@/components/FooterCTA"
import Footer from "@/components/Footer"
import { recentSessions } from "@/constants"

const Page = () => {
  return (
    <main className="mb-8">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Popular Coaches */}
      <h1>Trending CleverCoaches</h1>
      <section className="home-section">
      <CompanionCard
    id="1"
    name="Neura the Brainy Explorer"
    topic="Neural Network of the Brain"
    subject="science"
    duration={45}
    color="#7C4DFF" // Warmer orange-yellow for brain science
/>
<CompanionCard
    id="2"
    name="Countsy the Number Wizard"
    topic="Derivatives & Integrals"
    subject="maths"
    duration={30}
    color="#FF6B35" // Softer purple-blue for math
/>
<CompanionCard
    id="3"
    name="Verba the Vocabulary Builder"
    topic="English Literature"
    subject="language"
    duration={30}
    color="#3D5AF1" // Mint turquoise for language
/>
      </section>
      
      {/* Recent Sessions & CTA */}
      <section className="home-section">
        <CompanionsList 
            title="Recently Completed Sessions"
            companions={recentSessions}
            classNames="w-2/3 max-lg:w-full"/>
        <CTA/>
      </section>
      
      {/* Subject Categories */}
      <SubjectsSection />
      
      {/* How It Works */}
      <HowItWorks />

      {/* Footer CTA */}
      <FooterCTA />

      {/* Footer */}
      <Footer/>
    </main>
  )
}

export default Page