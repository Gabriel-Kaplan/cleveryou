import CompanionCard from "@/components/CompanionCard";
import {getSubjectColor} from "@/lib/utils";
import {getAllCompanions} from "@/lib/actions/companion.actions";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import Link from "next/link";
import Footer from "@/components/Footer";

interface SearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Stats component for visual interest
const StatsBar = ({ totalCoaches }: { totalCoaches: number }) => (
  <div className="flex items-center gap-6 text-sm">
    <div className="flex items-center gap-2">
      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
      <span className="text-gray-600">{totalCoaches} AI Coaches Available</span>
    </div>
    <div className="h-4 w-px bg-gray-300"></div>
    <div className="flex items-center gap-2">
      <div className="h-2 w-2 rounded-full bg-purple-500"></div>
      <span className="text-gray-600">Real-time Assistance</span>
    </div>
  </div>
);

const CompanionsPage = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? String(filters.subject) : '';
  const topic = filters.topic ? String(filters.topic) : '';

  const coaches = await getAllCompanions({ subject, topic });

  return (
    <main className="min-h-screen bg-none">
      {/* Hero Section with Modern Typography */}
      <section className="relative overflow-hidden pt-20 pb-12 bg-none"> 
        <div className="relative container mx-auto px-6">
          {/* Header Content - Centered */}
          <div className="text-center space-y-8">
            {/* Breadcrumb/Category */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-gray-500">CleverYou</span>
              <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
              <span className="text-purple-600 font-medium">CleverCoach Library</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="relative text-6xl md:text-7xl font-black mb-6 px-8 py-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                CleverCoach
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
               Library
              </span>
            </h1>
              
              {/* Subtext */}
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover AI-powered learning companions tailored to your subject and skill level. 
                <span className="text-gray-800 font-medium"> Get personalized guidance</span> from 
                expert tutors across diverse fields.
              </p>
            </div>

            {/* Create Coach Button */}
            <div className="flex flex-col items-center space-y-3">
              <Link href="/coaches/new" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative px-8 py-4 bg-white rounded-xl leading-none flex items-center gap-3 text-gray-900 font-medium transition-all duration-200 group-hover:bg-gray-50 border border-gray-200 group-hover:border-gray-300 shadow-lg">
                  <svg className="h-5 w-5 text-purple-600 group-hover:text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span className="text-gray-900 group-hover:text-gray-800">
                    Create Your Own Coach
                  </span>
                  <svg className="h-4 w-4 text-gray-600 group-hover:text-gray-700 group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
              
              {/* Sign-in Disclaimer */}
              <p className="text-sm text-gray-400 max-w-lg text-center">
                <svg className="inline h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Sign up or sign in required to create and learn with CleverCoaches
              </p>
            </div>

            {/* Stats */}
            <div className="flex justify-center">
              <StatsBar totalCoaches={coaches.length} />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="relative py-8 border-b border-gray-200 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="w-full sm:w-96">
                <SearchInput />
              </div>
              <div className="w-full sm:w-64">
                <SubjectFilter />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companions Grid Section */}
      <section className="relative py-12 bg-white">
        <div className="container mx-auto px-6">
          {coaches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coaches.map((coach) => (
                <CompanionCard 
                  key={coach.id} 
                  {...coach} 
                  color={getSubjectColor(coach.subject)}
                />
              ))}
            </div>
          ) : (
            /* Empty State with Enhanced Create Coach CTA */
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="relative mb-6">
                <div className="h-24 w-24 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200 shadow-sm">
                  <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center border border-orange-200">
                  <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                No coaches found
              </h3>
              <p className="text-gray-600 mb-8 max-w-md">
                Try adjusting your search terms or filters to discover more AI learning companions.
              </p>
              
              {/* Enhanced CTA in empty state */}
              <div className="space-y-4">
                <p className="text-gray-500 text-sm">Or create exactly what you need:</p>
                <div className="flex flex-col items-center space-y-2">
                  <Link href="/coaches/new" className="group relative inline-block">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <button className="relative px-6 py-3 bg-white rounded-lg leading-none flex items-center gap-2 text-gray-900 font-medium transition-all duration-200 group-hover:bg-gray-50 border border-gray-200 shadow-md">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <span>Build Custom Coach</span>
                    </button>
                  </Link>
                  <p className="text-xs text-gray-400">
                    Account required for coach creation
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-16 bg-none border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="h-16 w-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center border border-gray-200 shadow-sm">
                    <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 h-5 w-5 bg-green-100 rounded-full flex items-center justify-center border border-green-200">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Heading */}
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Missing a Subject?
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We&apos;re eager to expand our library of CleverCoaches. If you need coaching in a subject we don&apos;t currently offer, 
                  <span className="text-gray-800 font-medium"> let us know!</span>
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a 
                  href="mailto:contact@devtodefy.com?subject=Request%20for%20New%20Subject%20-%20CleverCoach&body=Hi%20there!%0A%0AI%20would%20like%20to%20request%20a%20new%20subject%20to%20be%20added%20to%20the%20CleverCoach%20library.%0A%0ASubject%20I%27m%20looking%20for:%20%0A%0AAdditional%20details:%20%0A%0AThanks!"
                  className="group relative inline-flex"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <button className="relative px-8 py-4 bg-white rounded-lg leading-none flex items-center gap-3 text-gray-900 font-medium transition-all duration-200 group-hover:bg-gray-50 border border-gray-200 group-hover:border-gray-300 shadow-lg">
                    <svg className="h-5 w-5 text-blue-600 group-hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-900 group-hover:text-gray-800">
                      Request New Subject
                    </span>
                    <svg className="h-4 w-4 text-gray-600 group-hover:text-gray-700 group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </a>
              </div>

              {/* Supporting text */}
              <p className="text-sm text-gray-500 pt-2">
                We&apos;ll get back to you as soon as we can about new subject requests.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer/>
      </footer>
    </main>
    
  );
};

export default CompanionsPage;