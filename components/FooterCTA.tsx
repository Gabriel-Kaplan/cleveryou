import { Sparkles, ArrowRight, Users, Zap } from 'lucide-react'

const FooterCTA = () => {
  return (
    <section className="footer-cta relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-8 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-12 right-16 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-8 left-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-16 right-8 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-12 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-300"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
          <span className="text-sm font-medium text-cyan-300 tracking-wider uppercase">
            Transform Your Learning
          </span>
          <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to{' '}
          <span className="relative">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Supercharge
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/50 to-blue-400/50 rounded-full"></div>
          </span>
          <br />
          Your Learning Journey?
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join <span className="font-semibold text-cyan-300">10,000+</span> learners already using AI companions to{' '}
          <span className="text-blue-300 font-medium">achieve breakthrough results</span>
        </p>

        {/* Social proof indicators */}
        <div className="flex items-center justify-center gap-8 mb-10 text-sm">
          <div className="flex items-center gap-2 text-emerald-300">
            <Users className="w-4 h-4" />
            <span>10,000+ Active Users</span>
          </div>
          <div className="flex items-center gap-2 text-yellow-300">
            <Zap className="w-4 h-4" />
            <span>98% Success Rate</span>
          </div>
          <div className="flex items-center gap-2 text-pink-300">
            <Sparkles className="w-4 h-4" />
            <span>5-Star Rated</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50">
            <div className="flex items-center gap-3">
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
          </button>
          
          <p className="text-sm text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            No credit card required • Start learning in 30 seconds
          </p>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex items-center justify-center gap-8 text-xs text-slate-400">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterCTA