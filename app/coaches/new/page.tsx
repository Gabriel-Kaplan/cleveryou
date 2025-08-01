import CompanionForm from "@/components/CompanionForm";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {newCompanionPermissions} from "@/lib/actions/companion.actions";
import Image from "next/image";
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
                    <article className="w-full max-w-lg text-center group">
                        {/* Glowing border effect for limit card */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                            {/* Icon Container */}
                            <div className="relative mb-8">
                                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center border border-red-500/30">
                                    <Image 
                                        src="/images/limit.svg" 
                                        alt="Companion limit reached" 
                                        width={80} 
                                        height={80}
                                        className="opacity-80"
                                    />
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">!</span>
                                </div>
                            </div>

                            {/* Status Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-full mb-6">
                                <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full animate-pulse"></div>
                                <span className="text-red-300 text-sm font-medium">Upgrade Required</span>
                            </div>

                            <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent mb-4">
                                You&apos;ve Reached Your Limit
                            </h1>
                            
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Unlock unlimited companions and premium features to continue your AI journey
                            </p>

                            <Link 
                                href="/subscription" 
                                className="group/btn inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-red-500/25 hover:scale-105"
                            >
                                <span>Upgrade My Plan</span>
                                <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </article>
                )}
            </div>


        </main>
    )
}

export default NewCompanion