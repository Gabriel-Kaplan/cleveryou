/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { currentUser } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  getUserCompanions,
  getUserSessions,
  //getBookmarkedCompanions,
} from "@/lib/actions/companion.actions";
import Image from "next/image";
import CompanionsList from "@/components/CompanionsList";
import UpgradeModal from "@/components/UpgradeModal"

const Profile = async () => {
  const user = await currentUser();
  const { has } = await auth();
  
  // Redirect if not signed in
  if (!user) redirect("/sign-in");
  
  // Check if user has genius plan - if not, show upgrade modal
  if (!has({ plan: 'genius' })) {
    return <UpgradeModal />;
  }
  
  const companions = await getUserCompanions(user.id);
  const sessionHistory = await getUserSessions(user.id);
  //const bookmarkedCompanions = await getBookmarkedCompanions(user.id);

  // Analytics calculations
  const totalSessions = sessionHistory.length;
  const totalCompanions = companions.length;
  //const totalBookmarks = bookmarkedCompanions.length;
  
  // Mock analytics data - replace with real calculations from your data
  const thisWeekSessions = Math.floor(totalSessions * 0.3);
  const lastWeekSessions = Math.floor(totalSessions * 0.2);
  const sessionGrowth = lastWeekSessions > 0 ? ((thisWeekSessions - lastWeekSessions) / lastWeekSessions * 100) : 100;
  
  const avgSessionsPerDay = (totalSessions / 30).toFixed(1); // Last 30 days
  
  // Get recent activity (last 7 sessions)
  const recentActivity = sessionHistory.slice(0, 7);
  
  // Weekly session data for chart
  const weeklyData = [
    { day: 'Mon'},
    { day: 'Tue'},
    { day: 'Wed'},
    { day: 'Thu'},
    { day: 'Fri'},
    { day: 'Sat'},
    { day: 'Sun'},
  ];

  return (
    <main className="min-lg:w-full max-w-7xl mx-auto space-y-8 pb-12 pt-30 bg-none min-h-screen">
      {/* Breadcrumb/Category */}
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-slate-500">CleverYou</span>
        <div className="h-1 w-1 bg-slate-400 rounded-full"></div>
        <span className="text-purple-600 font-medium">My CleverYou</span>
      </div>
      
      {/* Key Metrics Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Sessions */}
        <div className="relative overflow-hidden rounded-2xl p-6 backdrop-blur-sm border border-slate-200/60 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-emerald-100 backdrop-blur-sm group-hover:bg-emerald-200 transition-all duration-300 shadow-sm">
                <Image
                  src="/icons/check.svg"
                  alt="Sessions"
                  width={24}
                  height={24}
                  className="filter brightness-0 opacity-70"
                />
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-500 border border-slate-200">
                <span>--</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm text-slate-600 font-medium uppercase tracking-wide">Total Sessions</h3>
              <p className="text-3xl font-bold text-slate-800 tracking-tight">{totalSessions}</p>
              <p className="text-sm text-slate-500">All time learning</p>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-emerald-100/30 blur-xl"></div>
        </div>

        {/* Companions Created */}
        <div className="relative overflow-hidden rounded-2xl p-6 backdrop-blur-sm border border-slate-200/60 bg-gradient-to-br from-violet-50 to-purple-50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-violet-100 backdrop-blur-sm group-hover:bg-violet-200 transition-all duration-300 shadow-sm">
                <Image
                  src="/icons/cap.svg"
                  alt="Companions"
                  width={24}
                  height={24}
                  className="filter brightness-0 opacity-70"
                />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm text-slate-600 font-medium uppercase tracking-wide">Companions Created</h3>
              <p className="text-3xl font-bold text-slate-800 tracking-tight">{totalCompanions}</p>
              <p className="text-sm text-slate-500">Your AI mentors</p>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-violet-100/30 blur-xl"></div>
        </div>

        {/* Avg Sessions/Day */}
        <div className="relative overflow-hidden rounded-2xl p-6 backdrop-blur-sm border border-slate-200/60 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-blue-100 backdrop-blur-sm group-hover:bg-blue-200 transition-all duration-300 shadow-sm">
                <Image
                  src="/icons/check.svg"
                  alt="Average"
                  width={24}
                  height={24}
                  className="filter brightness-0 opacity-70"
                />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm text-slate-600 font-medium uppercase tracking-wide">Avg Sessions/Day</h3>
              <p className="text-3xl font-bold text-slate-800 tracking-tight">{avgSessionsPerDay}</p>
              <p className="text-sm text-slate-500">Last 30 days</p>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-blue-100/30 blur-xl"></div>
        </div>

        {/* Completion Rate */}
        <div className="relative overflow-hidden rounded-2xl p-6 backdrop-blur-sm border border-slate-200/60 bg-gradient-to-br from-orange-50 to-red-50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-orange-100 backdrop-blur-sm group-hover:bg-orange-200 transition-all duration-300 shadow-sm">
                <Image
                  src="/icons/cap.svg"
                  alt="Completion"
                  width={24}
                  height={24}
                  className="filter brightness-0 opacity-70"
                />
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-500 border border-slate-200">
                <span>--</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm text-slate-600 font-medium uppercase tracking-wide">Completion Rate</h3>
              <p className="text-3xl font-bold text-slate-800 tracking-tight">--</p>
              <p className="text-sm text-slate-500">Success rate</p>
              <p className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-1 rounded-full border border-amber-200">Coming Soon</p>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-orange-100/30 blur-xl"></div>
        </div>
      </section>

      {/* Analytics Overview */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Activity Chart */}
        <div className="lg:col-span-2 bg-gradient-to-br from-white/80 via-slate-50/80 to-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-xl relative">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-800">Weekly Activity</h3>
          </div>
          <div className="flex items-end justify-between gap-4 h-32">
            {weeklyData.map((day, index) => (
              <div key={day.day} className="flex flex-col items-center gap-2">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xs text-slate-600 font-medium">{day.day}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-4 right-4">
            <p className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-1 rounded-full border border-amber-200">
              Coming Soon
            </p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gradient-to-br from-white/80 via-slate-50/80 to-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-xl relative">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {/* Activity items would go here */}
          </div>
          <div className="absolute top-4 right-4">
            <p className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-1 rounded-full border border-amber-200">
              Coming Soon
            </p>
          </div>
        </div>
      </section>

      {/* Performance Insights */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Learning Insights */}
        <div className="bg-gradient-to-br from-white/80 via-slate-50/80 to-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-xl relative">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Learning Insights</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-sm">--</span>
                </div>
                <div>
                  <p className="text-slate-800 font-medium">Completion Rate</p>
                  <p className="text-slate-600 text-sm">Performance tracking</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                  <span className="text-violet-600 font-bold text-sm">{avgSessionsPerDay}</span>
                </div>
                <div>
                  <p className="text-slate-800 font-medium">Daily Average</p>
                  <p className="text-slate-600 text-sm">Sessions per day</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <p className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-1 rounded-full border border-amber-200">
              Coming Soon
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-br from-white/80 via-slate-50/80 to-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-xl">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-2xl font-bold text-amber-600">--</p>
              <p className="text-slate-600 text-sm">Bookmarking</p>
              <p className="text-xs text-amber-600 mt-1 font-semibold bg-amber-50 px-2 py-1 rounded-full border border-amber-200">Coming Soon</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-2xl font-bold text-blue-600">{thisWeekSessions}</p>
              <p className="text-slate-600 text-sm">This Week</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-2xl font-bold text-purple-600">--</p>
              <p className="text-slate-600 text-sm">Streak Days</p>
              <p className="text-xs text-amber-600 mt-1 font-semibold bg-amber-50 px-2 py-1 rounded-full border border-amber-200">Coming Soon</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-2xl font-bold text-emerald-600">--</p>
              <p className="text-slate-600 text-sm">Completed</p>
              <p className="text-xs text-amber-600 mt-1 font-semibold bg-amber-50 px-2 py-1 rounded-full border border-amber-200">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections - Using your existing Accordion and CompanionsList */}
      <section className="space-y-6">
        <Accordion type="multiple" className="space-y-4">
          <AccordionItem 
            value="bookmarks" 
            className="border-0 bg-gradient-to-br from-white/80 via-slate-50/80 to-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/60"
          >
            <AccordionTrigger className="text-xl font-bold px-8 py-6 hover:no-underline group bg-gradient-to-r from-transparent to-amber-50 hover:to-amber-100 transition-all duration-300 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-3 h-8 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                <span className="bg-gradient-to-r from-slate-800 to-amber-700 bg-clip-text text-transparent">
                  Bookmarked Companions ~ Coming Soon
                </span>
                {/* Mini chart using simple bars */}
                <div className="flex items-end gap-1 h-6 ml-auto">
                  {weeklyData.slice(0, 5).map((_, index) => (
                    <div
                      key={index}
                      className="bg-amber-500 rounded-sm w-1 transition-all duration-300 hover:bg-amber-400"
                      style={{ height: `${Math.random() * 20 + 8}px` }}
                    />
                  ))}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-8 py-6">
              <CompanionsList
                title="Bookmarked Companions"
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem 
            value="recent" 
            className="border-0 bg-gradient-to-br from-white/80 via-slate-50/80 to-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/60"
          >
            <AccordionTrigger className="text-xl font-bold px-8 py-6 hover:no-underline group bg-gradient-to-r from-transparent to-blue-50 hover:to-blue-100 transition-all duration-300 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                <span className="bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
                  Recent Sessions
                </span>
                <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200 ml-auto">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Active</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-1 py-6">
              <CompanionsList
                title="Recent Sessions"
                companions={sessionHistory}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem 
            value="companions" 
            className="border-0 bg-gradient-to-br from-white/80 via-slate-50/80 to-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/60"
          >
            <AccordionTrigger className="text-xl font-bold px-8 py-6 hover:no-underline group bg-gradient-to-r from-transparent to-violet-50 hover:to-violet-100 transition-all duration-300 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-3 h-8 bg-gradient-to-b from-violet-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                <span className="bg-gradient-to-r from-slate-800 to-violet-700 bg-clip-text text-transparent">
                  My Companions ({totalCompanions})
                </span>
                <div className="flex items-center gap-2 px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-semibold border border-violet-200 ml-auto">
                  <span>Created</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-1 py-6">
              <CompanionsList title="My Companions" companions={companions} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
};

export default Profile;