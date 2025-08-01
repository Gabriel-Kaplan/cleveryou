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
        <main className="min-h-screen pt-20 md:pt-25 relative overflow-hidden bg-none">  
            {/* Container */}
            <div className="relative z-10 min-h-screen">
                <div className="container mx-auto px-4 sm:px-6 py-6 md:py-12 max-w-6xl">
                    {/* Navigation - Mobile optimized */}
                    <div className="mb-6 md:mb-12">
                        <Link 
                            href="/coaches" 
                            className="group inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-xl md:rounded-2xl backdrop-blur-sm bg-white/80 border border-gray-200/60 hover:bg-white/90 hover:border-gray-300/80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
                        >
                            <div className="p-1 md:p-1.5">
                                <svg 
                                    className="w-3 h-3 md:w-4 md:h-4 text-gray-700 transform group-hover:-translate-x-1 transition-transform duration-300" 
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
                            <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                                Back to Coach Library
                            </span>
                        </Link>
                    </div>

                    {/* Main Article Card - Heavily optimized for mobile */}
                    <article className="relative mb-8 md:mb-12 group">
                        {/* Glowing Border Effect - Reduced on mobile */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/40 md:from-blue-400/60 via-purple-400/40 md:via-purple-400/60 to-pink-400/40 md:to-pink-400/60 rounded-2xl md:rounded-3xl blur-sm opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                        
                        {/* Main Card */}
                        <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/90 via-white/85 to-gray-50/90 border border-gray-200/60 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 md:hover:scale-[1.02]">
                            
                            {/* Mobile-first layout */}
                            <div className="space-y-4 md:space-y-0 md:flex md:items-center md:gap-6">
                                
                                {/* Mobile: Duration Badge at top */}
                                <div className="flex justify-between items-start md:hidden mb-4">
                                    <div className="flex items-center gap-3">
                                        {/* Mobile Icon */}
                                        <div className="relative">
                                            <div className="size-12 flex items-center justify-center rounded-xl backdrop-blur-sm bg-white/80 border border-gray-200/60 shadow-md"
                                                 style={{backgroundColor: getSubjectColor(coach.subject)}}>
                                                <Image 
                                                    src={`/icons/${coach.subject}.svg`} 
                                                    alt={coach.subject} 
                                                    width={24} 
                                                    height={24} 
                                                    className="drop-shadow-sm"
                                                    style={{ filter: 'brightness(0) invert(1)' }} 
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Mobile Subject Badge */}
                                        <div className="px-3 py-1.5 rounded-lg backdrop-blur-sm bg-white/70 border border-gray-300/60 shadow-md text-xs font-semibold text-gray-800"
                                             style={{ 
                                                 backgroundColor: `${getSubjectColor(subject)}20`,
                                                 borderColor: `${getSubjectColor(subject)}40` 
                                             }}>
                                            {subject}
                                        </div>
                                    </div>
                                    
                                    {/* Mobile Duration Badge */}
                                    <div className="px-4 py-2 rounded-xl backdrop-blur-sm bg-gradient-to-r from-emerald-100/80 to-cyan-100/80 border border-emerald-300/60 shadow-md">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-sm shadow-emerald-500/30"></div>
                                            <span className="text-sm font-semibold text-gray-800">{duration}m</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop: Icon Container (hidden on mobile) */}
                                <div className="relative group/icon hidden md:block">
                                    <div className="absolute -inset-2 bg-gradient-to-r opacity-30 rounded-2xl blur-lg transition-opacity duration-300"
                                         style={{ backgroundColor: getSubjectColor(coach.subject) }}>
                                    </div>
                                    <div className="relative size-16 lg:size-20 flex items-center justify-center rounded-2xl backdrop-blur-sm bg-white/80 border border-gray-200/60 shadow-lg hover:scale-110 transition-all duration-300"
                                         style={{backgroundColor: getSubjectColor(coach.subject)}}>
                                        <Image 
                                            src={`/icons/${coach.subject}.svg`} 
                                            alt={coach.subject} 
                                            width={32} 
                                            height={32}
                                            className="lg:w-10 lg:h-10 drop-shadow-sm"
                                            style={{ filter: 'brightness(0) invert(1)' }} 
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-3 md:gap-4 flex-1">
                                    {/* Title - Responsive sizing */}
                                    <div className="space-y-2 md:space-y-0 md:flex md:items-center md:gap-4 md:flex-wrap">
                                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight">
                                            {name}
                                        </h1>
                                        
                                        {/* Desktop Subject Badge */}
                                        <div className="relative group/badge hidden md:block">
                                            <div className="absolute -inset-1 bg-gradient-to-r opacity-40 rounded-xl blur-sm transition-opacity duration-300 group-hover/badge:opacity-60"
                                                 style={{ backgroundColor: getSubjectColor(subject) }}>
                                            </div>
                                            <div className="relative px-4 py-2 rounded-xl backdrop-blur-sm bg-white/70 border border-gray-300/60 shadow-md text-sm font-semibold text-gray-800 hover:scale-105 transition-all duration-300"
                                                 style={{ 
                                                     backgroundColor: `${getSubjectColor(subject)}20`,
                                                     borderColor: `${getSubjectColor(subject)}40` 
                                                 }}>
                                                {subject}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Topic - Responsive text */}
                                    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                                        {topic}
                                    </p>
                                </div>

                                {/* Desktop: Floating Duration Badge */}
                                <div className="hidden md:block">
                                    <div className="px-6 py-3 rounded-2xl backdrop-blur-sm bg-gradient-to-r from-emerald-100/80 to-cyan-100/80 border border-emerald-300/60 shadow-lg">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-sm shadow-emerald-500/30"></div>
                                            <span className="text-lg font-semibold text-gray-800">{duration} minutes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Companion Component Container - Mobile optimized */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-300/30 via-purple-300/30 to-pink-300/30 rounded-2xl md:rounded-3xl blur-xl opacity-30"></div>
                        <div className="relative backdrop-blur-sm bg-white/80 border border-gray-200/60 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 overflow-hidden shadow-xl">
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