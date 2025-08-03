import CompanionForm from "@/components/CompanionForm";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {newCompanionPermissions} from "@/lib/actions/companion.actions";
import {} from "lucide-react"
import Link from "next/link";

const NewCompanion = async () => {
    const { userId } = await auth();
    if(!userId) redirect('/sign-in');
    const canCreateCompanion = await newCompanionPermissions();
    
    return (
        <main className="min-h-screen bg-none relative overflow-hidden">
            <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex items-center justify-center pt-20">
                {canCreateCompanion ? (
                    <article className="w-full max-w-2xl group">
                        <div className="relative bg-none backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                            {/* Header Section */}
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-600/60 to-pink-600/60 border border-purple-500/60 rounded-full mb-6">
                                    <div className="w-2 h-2 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full animate-pulse"></div>
                                    <span className="text-white text-sm font-medium">CleverCoach Lab</span>
                                </div>
                                
                                <h1 className="text-4xl md:text-6xl font-black text-black mb-4 leading-tight">
                                    CleverCoach
                                    <span className="block text-3xl md:text-5xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        Laboratory
                                    </span>
                                </h1>
                                
                                <p className="text-slate-400 text-lg max-w-md mx-auto leading-relaxed">
                                    Craft your perfect AI learning companion with advanced personalization
                                </p>
                            </div>

                            {/* Form Container */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-none rounded-2xl"></div>
                                <div className="relative bg-none backdrop-blur-sm border border-white/5 rounded-2xl p-6">
                                    <CompanionForm />
                                </div>
                            </div>
                        </div>
                    </article>
                ) : (
                    <article className="w-full max-w-2xl text-center group relative">
                        
                        {/* Main card */}
                        <div className="relative bg-white backdrop-blur-xl border border-purple-200 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
                            {/* Decorative top bar */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                            
                            {/* Status Badge */}
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-50 border border-purple-200 rounded-full mb-8">
                                <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
                                <span className="text-purple-700 text-sm font-semibold">Upgrade Required</span>
                            </div>

                            {/* Lock Icon */}
                            <div className="relative mb-8">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
                                Companion Limit Reached
                            </h1>
                            
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg mx-auto">
                                You&apos;ve hit your companion creation limit. Upgrade to Genius to unlock unlimited CleverCoaches and exclusive features.
                            </p>

                            {/* Features list */}
                            <div className="grid grid-cols-2 gap-4 mb-10 text-left max-w-md mx-auto">
                                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl border border-purple-100">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span className="text-purple-700 text-sm font-medium">Unlimited CleverCoaches</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-xl border border-pink-100">
                                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                    <span className="text-pink-700 text-sm font-medium">Advanced Features</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl border border-purple-100">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span className="text-purple-700 text-sm font-medium">Priority Support</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-xl border border-pink-100">
                                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                    <span className="text-pink-700 text-sm font-medium">Early Access</span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <Link 
                                href="/subscription" 
                                className="group/btn inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-purple-500/30 hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
                            >
                                {/* Button shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                                
                                <span className="relative flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    Upgrade Now
                                </span>
                                
                                <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>

                            {/* Small print */}
                            <p className="text-gray-400 text-xs mt-6">
                                Start your learning journey today • Cancel anytime
                            </p>
                        </div>
                    </article>
                )}
            </div>
        </main>
    )
}

export default NewCompanion