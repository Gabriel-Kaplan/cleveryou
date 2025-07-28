import {getCompanion, addToSessionHistory} from "@/lib/actions/companion.actions";
import {currentUser} from "@clerk/nextjs/server";
import { getSubjectColor } from "@/lib/utils";
import {redirect} from "next/navigation";
import CompanionComponent from "@/components/CompanionComponent";
import Image from "next/image";
import Link from "next/link";

interface CompanionSessionPageProps {
    params: Promise<{ id: string}>;
}

const page = async ({ params }: CompanionSessionPageProps) => {
    const { id } = await params;
    const coach = await getCompanion(id);
    const user = await currentUser();

    if(!user) redirect('/sign-in');
    if(!coach) redirect('/companions');

    const { name, subject, topic, duration, voice, style } = coach;

    // CREATE SESSION ON SERVER SIDE - This prevents React rendering issues
    let sessionCreated = false;
    try {
        await addToSessionHistory(id);
        sessionCreated = true;
        console.log('Session created server-side for companion:', id);
    } catch (error) {
        console.error('Failed to create session server-side:', error);
        // Don't redirect, just log the error and let component handle it
    }

    return (
        <main className="min-h-screen pt-20 md:pt-25 relative overflow-hidden">
          {/* Background decoration - Optimized for mobile */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
          </div>
            
            {/* Glassmorphic Container */}
            <div className="relative z-10 min-h-screen">
                <div className="container mx-auto px-4 sm:px-6 py-6 md:py-12 max-w-6xl">
                    {/* Navigation - Mobile optimized */}
                    <div className="mb-6 md:mb-12">
                        <Link 
                            href="/coaches" 
                            className="group inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-xl md:rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl text-sm md:text-base"
                        >
                            <div className="p-1 md:p-1.5 shadow-lg">
                                <svg 
                                    className="w-3 h-3 md:w-4 md:h-4 text-white transform group-hover:-translate-x-1 transition-transform duration-300" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2.5} 
                                        d="M15 19l-7-7 7-7" 
                                    />
                                </svg>
                            </div>
                            <span className="text-xs md:text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                                Back to Coach Library
                            </span>
                        </Link>
                    </div>

                    {/* Main Article Card - Heavily optimized for mobile */}
                    <article className="relative mb-8 md:mb-12 group">
                        {/* Glowing Border Effect - Reduced on mobile */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 md:from-blue-500/50 via-purple-500/30 md:via-purple-500/50 to-pink-500/30 md:to-pink-500/50 rounded-2xl md:rounded-3xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                        
                        {/* Main Card */}
                        <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 border border-white/30 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 md:hover:scale-[1.02]">
                            
                            {/* Mobile-first layout */}
                            <div className="space-y-4 md:space-y-0 md:flex md:items-center md:gap-6">
                                
                                {/* Mobile: Duration Badge at top */}
                                <div className="flex justify-between items-start md:hidden mb-4">
                                    <div className="flex items-center gap-3">
                                        {/* Mobile Icon */}
                                        <div className="relative">
                                            <div className="size-12 flex items-center justify-center rounded-xl backdrop-blur-md border shadow-lg"
                                                 style={{backgroundColor: getSubjectColor(coach.subject)}}>
                                                <Image 
                                                    src={`/icons/${coach.subject}.svg`} 
                                                    alt={coach.subject} 
                                                    width={24} 
                                                    height={24} 
                                                    className="drop-shadow-lg"
                                                    style={{ filter: 'brightness(0) invert(1)' }} 
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Mobile Subject Badge */}
                                        <div className="px-3 py-1.5 rounded-lg backdrop-blur-md border shadow-lg text-xs font-semibold text-white/95"
                                             style={{ 
                                                 backgroundColor: `${getSubjectColor(subject)}30`,
                                                 borderColor: `${getSubjectColor(subject)}60` 
                                             }}>
                                            {subject}
                                        </div>
                                    </div>
                                    
                                    {/* Mobile Duration Badge */}
                                    <div className="px-4 py-2 rounded-xl backdrop-blur-md bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 shadow-lg">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                                            <span className="text-sm font-semibold text-white/95">{duration}m</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop: Icon Container (hidden on mobile) */}
                                <div className="relative group/icon hidden md:block">
                                    <div className="absolute -inset-2 bg-gradient-to-r opacity-20 rounded-2xl blur-lg transition-opacity duration-300"
                                         style={{ backgroundColor: getSubjectColor(coach.subject) }}>
                                    </div>
                                    <div className="relative size-16 lg:size-20 flex items-center justify-center rounded-2xl backdrop-blur-md border shadow-xl hover:scale-110 transition-all duration-300"
                                         style={{backgroundColor: getSubjectColor(coach.subject)}}>
                                        <Image 
                                            src={`/icons/${coach.subject}.svg`} 
                                            alt={coach.subject} 
                                            width={32} 
                                            height={32}
                                            className="lg:w-10 lg:h-10 drop-shadow-lg"
                                            style={{ filter: 'brightness(0) invert(1)' }} 
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-3 md:gap-4 flex-1">
                                    {/* Title - Responsive sizing */}
                                    <div className="space-y-2 md:space-y-0 md:flex md:items-center md:gap-4 md:flex-wrap">
                                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent leading-tight">
                                            {name}
                                        </h1>
                                        
                                        {/* Desktop Subject Badge */}
                                        <div className="relative group/badge hidden md:block">
                                            <div className="absolute -inset-1 bg-gradient-to-r opacity-50 rounded-xl blur-sm transition-opacity duration-300 group-hover/badge:opacity-70"
                                                 style={{ backgroundColor: getSubjectColor(subject) }}>
                                            </div>
                                            <div className="relative px-4 py-2 rounded-xl backdrop-blur-md border shadow-lg text-sm font-semibold text-white/95 hover:scale-105 transition-all duration-300"
                                                 style={{ 
                                                     backgroundColor: `${getSubjectColor(subject)}30`,
                                                     borderColor: `${getSubjectColor(subject)}60` 
                                                 }}>
                                                {subject}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Topic - Responsive text */}
                                    <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-medium">
                                        {topic}
                                    </p>
                                </div>

                                {/* Desktop: Floating Duration Badge */}
                                <div className="hidden md:block">
                                    <div className="px-6 py-3 rounded-2xl backdrop-blur-md bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 shadow-xl">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                                            <span className="text-lg font-semibold text-white/95">{duration} minutes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Companion Component Container - Mobile optimized */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl md:rounded-3xl blur-xl opacity-20"></div>
                        <div className="relative backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 overflow-hidden shadow-2xl">
                            {/* UPDATED: Pass all required props including the new sessionAlreadyCreated */}
                            <CompanionComponent 
                                companionId={id}
                                subject={subject}
                                topic={topic}
                                name={name}
                                userName={user.firstName || 'User'}
                                userImage={user.imageUrl || '/default-avatar.png'}
                                voice={voice}
                                style={style}
                                sessionAlreadyCreated={sessionCreated}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page