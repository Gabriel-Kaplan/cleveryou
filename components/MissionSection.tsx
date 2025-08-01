import { Target, Heart, Lightbulb, Globe } from 'lucide-react'

const MissionSection = () => {
  const values = [
    {
      icon: Target,
      title: "Learning That Locks In",
      description: "Forget static slides and recycled videos. CleverYou learns *you* — your pace, your struggles, your rhythm — and adapts in real-time to keep you locked in and leveling up.",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: Heart,
      title: "For the Ones They Overlook",
      description: "CleverYou exists for the ones who get ignored — small business owners, students, hustlers, builders. We don't cater to big budgets. We build for grit, not fluff.",
      gradient: "from-pink-400 to-rose-500"
    },
    {
      icon: Lightbulb,
      title: "AI That Pulls Its Weight",
      description: "We don’t just say 'AI' to sound cool. We build tools that actually *do* things — from smarter learning to faster launches. No gimmicks. Just results.",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: Globe,
      title: "No Borders. No Limits.",
      description: "You shouldn't need a Silicon Valley zip code to grow. From Tel Aviv to Tulsa, we're building tech that opens doors — and keeps them open.",
      gradient: "from-emerald-400 to-teal-500"
    }
  ]

  return (
    <section className="relative py-32 px-6 overflow-hidden">   
      {/* Breadcrumb/Category */}
      <div className="flex items-center justify-center gap-2 text-sm mb-2">
        <span className="text-slate-500">CleverYou</span>
        <div className="h-1 w-1 bg-slate-600 rounded-full"></div>
        <span className="text-purple-400 font-medium">About Us</span>
      </div>
       
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Smarter Learning.
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent dark:text-white">
              Made for the Doers.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto font-light">
            CleverYou is your no-nonsense learning engine — built by <span className="font-semibold text-purple-600 dark:text-purple-400">Dev to Defy (DTD)</span> for people who move fast, learn sharp, and don’t have time for fluff. No lectures. No bloat. Just personalized growth, on your terms.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 mb-20">
          {/* Mission Statement */}
          <div className="xl:col-span-1 space-y-8">
            <div className="p-8 rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 shadow-2xl shadow-purple-500/5">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                Why We Exist
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Dev To Defy (DTD) wasn’t born in a boardroom. It started as a fire — to help real people build, grow, and break the ceilings stacked against them. We began by creating websites that gave individuals and businesses a real online presence — and we still do.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                But we believe success shouldn’t be limited by background or location. Education is one of the most essential parts of life — the foundation for freedom, opportunity, and growth.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                That’s why we built <strong>CleverYou</strong> — to give every generation the power to learn what they want, how they want. Access to knowledge should never depend on where you&apos;re from, what you earn, or who you know.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We make tools that actually work: affordable, powerful, and built for action. No gatekeepers. No hidden costs. Just access to what moves you forward. Because when people have the right tools, they don’t just adapt — they defy.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div 
                  key={index}
                  className="group relative p-8 rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 overflow-hidden will-change-transform"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${value.gradient} mb-6 transition-transform duration-300 ease-out group-hover:scale-105 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-200 group-hover:text-pink-400">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-200 group-hover:text-slate-900 dark:group-hover:text-slate-200">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection