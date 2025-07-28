import CompanionCard from "@/components/CompanionCard"
import CompanionsList from "@/components/CompanionsList"
import CTA from "@/components/CTA"
import HeroSection from "@/components/HeroSection"
//import StatsSection from "@/components/StatsSection"
import SubjectsSection from "@/components/SubjectsSection"
import HowItWorks from "@/components/HowItWorks"
import FooterCTA from "@/components/FooterCTA"
import Footer from "@/components/Footer"
import PricingPreview from "@/components/PricingPreview"
//import { recentSessions } from "@/constants"
import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.actions";
import {getSubjectColor} from "@/lib/utils";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);
  return (
    <main className="mb-8">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        
        {/* Shooting Stars */}
        <div className="shooting-stars">
          <div className="star star-1"></div>
          <div className="star star-2"></div>
          <div className="star star-3"></div>
          <div className="star star-4"></div>
          <div className="star star-5"></div>
        </div>
      </div>

      {/* 1. HOOK: Capture attention immediately */}
      <HeroSection />
      
      {/* 2. CREDIBILITY: Build trust with social proof 
      <StatsSection />*/}
      
      {/* 3. PROOF OF CONCEPT: Show the product in action */}
      <h1>Trending CleverCoaches</h1>
      <section className="home-section">
       {companions.map((companion) => (
                <CompanionCard
                    key={companion.id}
                    {...companion}
                    color={getSubjectColor(companion.subject)}
                />
            ))}
      </section>
      
      {/* 4. SOCIAL PROOF: Recent activity shows others are using it */}
      <section className="home-section">
        <CompanionsList
                title="Recently completed sessions"
                companions={recentSessionsCompanions}
                classNames="w-2/3 max-lg:w-full"
            />
        {/* First CTA after showing product value */}
        <CTA/>
      </section>
      
      {/* 5. EXPLORATION: Show breadth of offerings */}
      <SubjectsSection />

      {/* 6. EDUCATION: Reduce friction by explaining the process */}
      <HowItWorks />



      {/* 7. COMMITMENT: Pricing comes after value is established */}
      <PricingPreview />
      
      {/* 8. FINAL PUSH: Last chance to convert */}
      <FooterCTA />

      {/* 9. TRUST & SUPPORT: Footer with additional info */}
      <Footer/>
    </main>
  )
}

export default Page