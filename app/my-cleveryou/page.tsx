/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  getUserCompanions,
  getUserSessions,
  //getBookmarkedCompanions,
} from "@/lib/actions/companion.actions";
import Image from "next/image";
import CompanionsList from "@/components/CompanionsList";

const Profile = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  
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
    <main className="min-lg:w-full max-w-7xl mx-auto space-y-8 pb-12 pt-30">
      {/* Breadcrumb/Category */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-slate-500">CleverYou</span>
              <div className="h-1 w-1 bg-slate-600 rounded-full"></div>
              <span className="text-purple-400 font-medium">My CleverYou</span>
            </div>
            {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
      {/* Header 
      <section className="relative">
      <div className="relative backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-4">
            User Info 
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative">
                <Image
                  src={user.imageUrl}
                  alt={user.firstName!}
                  width={64}
                  height={64}
                  className="rounded-full border-3 border-white/20 shadow-xl"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                Welcome back, {user.firstName}!
              </h1>
              <p className="text-white/60 text-sm mt-1">
                Ready to continue your learning journey?
              </p>
            </div>
          </div>

          {/* Day Streak 
          <div className="text-center">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-xl font-bold text-white">--</p>
              <p className="text-xs text-white/70 uppercase tracking-wide">Day Streak 🔥</p>
              <p className="text-xs text-amber-400 mt-1 font-semibold">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>*/}

      {/* Key Metrics Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Sessions */}
        <div className="relative overflow-hidden rounded-2xl p-6 backdrop-blur-xl border border-white/10 bg-gradient-to-br from-emerald-600/80 to-teal-600/80 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/icons/check.svg"
                  alt="Sessions"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/50">
                <span>--</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm text-white/70 font-medium uppercase tracking-wide">Total Sessions</h3>
              <p className="text-3xl font-bold text-white tracking-tight">{totalSessions}</p>
              <p className="text-sm text-white/60">All time learning</p>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-white/5 blur-xl"></div>
        </div>

        {/* Companions Created */}
        <div className="relative overflow-hidden rounded-2xl p-6 backdrop-blur-xl border border-white/10 bg-gradient-to-br from-violet-600/80 to-purple-600/80 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/icons/cap.svg"
                  alt="Companions"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm text-white/70 font-medium uppercase tracking-wide">Companions Created</h3>
              <p className="text-3xl font-bold text-white tracking-tight">{totalCompanions}</p>
              <p className="text-sm text-white/60">Your AI mentors</p>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-white/5 blur-xl"></div>
        </div>

        {/* Avg Sessions/Day */}
        <div className="relative overflow-hidden rounded-2xl p-6 backdrop-blur-xl border border-white/10 bg-gradient-to-br from-blue-600/80 to-cyan-600/80 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/icons/check.svg"
                  alt="Average"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm text-white/70 font-medium uppercase tracking-wide">Avg Sessions/Day</h3>
              <p className="text-3xl font-bold text-white tracking-tight">{avgSessionsPerDay}</p>
              <p className="text-sm text-white/60">Last 30 days</p>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-white/5 blur-xl"></div>
        </div>

        {/* Completion Rate */}
        <div className="relative overflow-hidden rounded-2xl p-6 backdrop-blur-xl border border-white/10 bg-gradient-to-br from-orange-600/80 to-red-600/80 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/icons/cap.svg"
                  alt="Completion"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/50">
                <span>--</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm text-white/70 font-medium uppercase tracking-wide">Completion Rate</h3>
              <p className="text-3xl font-bold text-white tracking-tight">--</p>
              <p className="text-sm text-white/60">Success rate</p>
              <p className="text-xs text-amber-400 font-semibold">Coming Soon</p>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-white/5 blur-xl"></div>
        </div>
      </section>

      {/* Analytics Overview */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Activity Chart */}
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-900/50 via-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl relative">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Weekly Activity</h3>
          </div>
          <div className="flex items-end justify-between gap-4 h-32">
            {weeklyData.map((day, index) => (
              <div key={day.day} className="flex flex-col items-center gap-2">
                <div className="flex flex-col items-center gap-1">
                  {/*<div
                    className="w-8 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-lg transition-all duration-500 hover:from-emerald-500 hover:to-emerald-300"
                    style={{ height: `${(day.sessions / 6) * 80 + 20}px` }}
                  ></div>*/}
                  <span className="text-xs text-white/70 font-medium">{day.day}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-4 right-4">
            <p className="text-xs text-amber-400 font-semibold bg-amber-400/10 px-2 py-1 rounded-full border border-amber-400/20">
              Coming Soon
            </p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gradient-to-br from-slate-900/50 via-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl relative">
          <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
           {/*} {recentActivity.slice(0, 5).map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <p className="text-white/90 text-sm">
                    Completed session with <span className="font-semibold text-violet-300">AI Companion</span>
                  </p>
                  <p className="text-white/50 text-xs">
                    {`${index + 1} day${index !== 0 ? 's' : ''} ago`}
                  </p>
                </div>
              </div>
            ))}*/}
          </div>
          <div className="absolute top-4 right-4">
            <p className="text-xs text-amber-400 font-semibold bg-amber-400/10 px-2 py-1 rounded-full border border-amber-400/20">
              Coming Soon
            </p>
          </div>
        </div>
      </section>

      {/* Performance Insights */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Learning Insights */}
        <div className="bg-gradient-to-br from-slate-900/50 via-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl relative">
          <h3 className="text-xl font-bold text-white mb-4">Learning Insights</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-sm">--</span>
                </div>
                <div>
                  <p className="text-white font-medium">Completion Rate</p>
                  <p className="text-white/60 text-sm">Performance tracking</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-500/20 rounded-full flex items-center justify-center">
                  <span className="text-violet-400 font-bold text-sm">{avgSessionsPerDay}</span>
                </div>
                <div>
                  <p className="text-white font-medium">Daily Average</p>
                  <p className="text-white/60 text-sm">Sessions per day</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <p className="text-xs text-amber-400 font-semibold bg-amber-400/10 px-2 py-1 rounded-full border border-amber-400/20">
              Coming Soon
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-br from-slate-900/50 via-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-4">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <p className="text-2xl font-bold text-amber-400">--</p>
              <p className="text-white/60 text-sm">Bookmarking</p>
              <p className="text-xs text-amber-400 mt-1 font-semibold">Coming Soon</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <p className="text-2xl font-bold text-blue-400">{thisWeekSessions}</p>
              <p className="text-white/60 text-sm">This Week</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <p className="text-2xl font-bold text-purple-400">--</p>
              <p className="text-white/60 text-sm">Streak Days</p>
              <p className="text-xs text-amber-400 mt-1 font-semibold">Coming Soon</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <p className="text-2xl font-bold text-emerald-400">--</p>
              <p className="text-white/60 text-sm">Completed</p>
              <p className="text-xs text-amber-400 mt-1 font-semibold">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections - Using your existing Accordion and CompanionsList */}
      <section className="space-y-6">
        <Accordion type="multiple" className="space-y-4">
          <AccordionItem 
            value="bookmarks" 
            className="border-0 bg-gradient-to-br from-slate-900/50 via-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <AccordionTrigger className="text-xl font-bold px-8 py-6 hover:no-underline group bg-gradient-to-r from-transparent to-amber-500/5 hover:to-amber-500/10 transition-all duration-300 border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-3 h-8 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                <span className="bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
                  Bookmarked Companions ~ Coming Soon
                </span>
                {/* Mini chart using simple bars */}
                <div className="flex items-end gap-1 h-6 ml-auto">
                  {weeklyData.slice(0, 5).map((_, index) => (
                    <div
                      key={index}
                      className="bg-amber-400 rounded-sm w-1 transition-all duration-300 hover:bg-amber-300"
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
            className="border-0 bg-gradient-to-br from-slate-900/50 via-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <AccordionTrigger className="text-xl font-bold px-8 py-6 hover:no-underline group bg-gradient-to-r from-transparent to-blue-500/5 hover:to-blue-500/10 transition-all duration-300 border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-3 h-8 bg-gradient-to-b from-blue-400 to-cyan-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Recent Sessions
                </span>
                <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30 ml-auto">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
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
            className="border-0 bg-gradient-to-br from-slate-900/50 via-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <AccordionTrigger className="text-xl font-bold px-8 py-6 hover:no-underline group bg-gradient-to-r from-transparent to-violet-500/5 hover:to-violet-500/10 transition-all duration-300 border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-3 h-8 bg-gradient-to-b from-violet-400 to-purple-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                <span className="bg-gradient-to-r from-white to-violet-100 bg-clip-text text-transparent">
                  My Companions ({totalCompanions})
                </span>
                <div className="flex items-center gap-2 px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-sm font-semibold border border-violet-500/30 ml-auto">
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