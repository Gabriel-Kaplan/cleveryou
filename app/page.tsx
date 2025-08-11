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
import Features from "@/components/Features"
//import { recentSessions } from "@/constants"
import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.actions";
import {getSubjectColor} from "@/lib/utils";

// Force dynamic rendering
export const dynamic = 'force-dynamic'

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);
  return (
    <main className="mb-8">
      {/* 1. HOOK: Capture attention immediately */}
      <HeroSection />
      
      {/* 2. CREDIBILITY: Build trust with social proof */}
      <Features />
      
      {/* 3. PROOF OF CONCEPT: Show the product in action */}
      <div className="mb-4">
        <h1 className="mb-1">Trending CleverCoaches</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
      </div>
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