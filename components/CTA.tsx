import Image from "next/image";
import Link from "next/link";

const CTA = () => {
    return (
        <section className="cta-section relative overflow-hidden">
            {/* Background enhancements */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 pointer-events-none"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            {/* Content wrapper */}
            <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-16">
                {/* Badge */}
                <div className="cta-badge text-white inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-white/20 transition-all duration-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Start learning your way.
                </div>
                
                {/* Main heading */}
                <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight mb-6 text-white">
                    Build Your Perfect<br />
                    <span className="text-gradient bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent ">
                        Learning Companion
                    </span>
                </h2>
                
                {/* Description */}
                <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed mb-12 opacity-90">
                    Create a personalized AI tutor that adapts to your learning style. Choose the subject, 
                    voice, and personality that works best for you — then learn through natural conversations 
                    that make complex topics feel simple and engaging.
                </p>
                
                {/* Visual placeholder enhanced */}
                <div className="cta-visual mb-12 relative">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-lg mx-auto">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-3 bg-white/20 rounded-full w-3/4"></div>
                            <div className="h-3 bg-white/15 rounded-full w-1/2"></div>
                            <div className="h-3 bg-white/20 rounded-full w-5/6"></div>
                            <div className="h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                            </div>
                        </div>
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full blur-sm animate-bounce"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/30 rounded-full blur-sm animate-bounce delay-500"></div>
                </div>
                
                {/* CTA Actions */}
                <div className="cta-actions">
                    <Link href="/coaches/new" className="btn-primary group relative inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20 overflow-hidden">
                        {/* Glossy overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                        
                        {/* Button content */}
                        <span className="text-lg relative z-10">Create My Companion</span>
                        <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-lg p-1.5 group-hover:bg-white/30 transition-all duration-200">
                            <Image 
                                src="/icons/plus.svg" 
                                alt="" 
                                width={16} 
                                height={16}
                                className="group-hover:rotate-90 transition-transform duration-200"
                                style={{
                                    filter: 'brightness(0) invert(1)',
                                }}
                            />
                        </div>
                    </Link>
                    
                    {/* Secondary action
                    <div className="mt-4">
                        <p className="text-sm text-gray-400 mb-2">or</p>
                        <button className="text-white/80 hover:text-white font-medium underline underline-offset-4 decoration-white/50 hover:decoration-white transition-all duration-200">
                            Browse existing companions
                        </button>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default CTA