import CompanionCard from "@/components/CompanionCard";
import {getSubjectColor} from "@/lib/utils";
import {getAllCompanions} from "@/lib/actions/companion.actions";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";

interface SearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Stats component for visual interest
const StatsBar = ({ totalCoaches }: { totalCoaches: number }) => (
  <div className="flex items-center gap-6 text-sm">
    <div className="flex items-center gap-2">
      <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
      <span className="text-slate-400">{totalCoaches} AI Coaches Available</span>
    </div>
    <div className="h-4 w-px bg-slate-700"></div>
    <div className="flex items-center gap-2">
      <div className="h-2 w-2 rounded-full bg-purple-400"></div>
      <span className="text-slate-400">Real-time Assistance</span>
    </div>
  </div>
);

const CompanionsPage = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? String(filters.subject) : '';
  const topic = filters.topic ? String(filters.topic) : '';

  const coaches = await getAllCompanions({ subject, topic });

  return (
    <main className="min-h-screen">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      {/* Hero Section with Modern Typography */}
      <section className="relative overflow-hidden pt-20 pb-12"> 
        <div className="relative container mx-auto px-6">
          {/* Header Content - Centered */}
          <div className="text-center space-y-8">
            {/* Breadcrumb/Category */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-slate-500">CleverYou</span>
              <div className="h-1 w-1 bg-slate-600 rounded-full"></div>
              <span className="text-purple-400 font-medium">CleverCoach Library</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="relative text-6xl md:text-7xl font-black mb-6 px-8 py-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Clever Coach
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
               Library
              </span>
            </h1>
              
              {/* Subtext */}
              <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Discover AI-powered learning companions tailored to your subject and skill level. 
                <span className="text-slate-300 font-medium"> Get personalized guidance</span> from 
                expert tutors across diverse fields.
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
      <section className="relative py-8 border-b border-slate-800/50">
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
      <section className="relative py-12">
        <div className="container mx-auto px-6">
          {coaches.length > 0 ? (
            <div className="companions-grid">
              {coaches.map((coach) => (
                <CompanionCard 
                  key={coach.id} 
                  {...coach} 
                  color={getSubjectColor(coach.subject)}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="relative mb-6">
                <div className="h-24 w-24 bg-slate-800/50 rounded-2xl flex items-center justify-center">
                  <svg className="h-12 w-12 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 h-6 w-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <div className="h-2 w-2 bg-orange-400 rounded-full"></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-300 mb-2">
                No coaches found
              </h3>
              <p className="text-slate-500 mb-6 max-w-md">
                Try adjusting your search terms or filters to discover more AI learning companions.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default CompanionsPage;