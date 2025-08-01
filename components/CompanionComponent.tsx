/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import { getSubjectColor, cn, configureAssistant } from '@/lib/utils'
import { useEffect, useState, useRef } from 'react'
import { vapi } from "@/lib/vapi.sdk";
import Image from 'next/image';
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import three_dots from "@/constants/3DotsSpeaking.json"
import { addToSessionHistory } from "@/lib/actions/companion.actions";

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

const CompanionComponent = ({ companionId, subject, topic, name, userName, userImage, style, voice, sessionAlreadyCreated }: CompanionComponentProps) => {

    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const lottieRef = useRef<LottieRefCurrentProps>(null);
    const [isAudioMuted, setIsAudioMuted] = useState(false);
    const [messages, setMessages] = useState<SavedMessage[]>([]);
    const [sessionCreated, setSessionCreated] = useState(sessionAlreadyCreated || false);
    const sessionCreationAttempted = useRef(false);

    useEffect(() => {
        if (lottieRef) {
            if (isSpeaking) {
                lottieRef.current?.play()
            } else {
                lottieRef.current?.stop()
            }
        }
    }, [isSpeaking, lottieRef])

    useEffect(() => {
        const onCallStart = () => {
            setCallStatus(CallStatus.ACTIVE);

            // Create session when call actually starts (not when it ends)
            // Only if not already created and not already attempted
            if (!sessionCreated && !sessionCreationAttempted.current) {
                sessionCreationAttempted.current = true;

                addToSessionHistory(companionId)
                    .then(() => {
                        setSessionCreated(true);
                        console.log('Session created for companion:', companionId);
                    })
                    .catch((error) => {
                        console.error('Failed to create session:', error);
                        // Reset flag so it can be retried
                        sessionCreationAttempted.current = false;
                    });
            }
        };

        // FIXED: Properly structured arrow function
        const onCallEnd = () => {
            setCallStatus(CallStatus.FINISHED);
            // Session is already created when call starts, no need to create here
        };

        const onMessage = (message: Message) => {
            if (message.type === 'transcript' && message.transcriptType === 'final') {
                const newMessage = { role: message.role, content: message.transcript }
                setMessages((prev) => [newMessage, ...prev])
            }
        }

        const onSpeechStart = () => setIsSpeaking(true);

        const onSpeechEnd = () => setIsSpeaking(false);

        const onError = (error: Error) => console.log('Error', error);

        vapi.on('call-start', onCallStart);
        vapi.on('call-end', onCallEnd);
        vapi.on('message', onMessage);
        vapi.on('error', onError);
        vapi.on('speech-start', onSpeechStart);
        vapi.on('speech-end', onSpeechEnd);

        return () => {
            vapi.off('call-start', onCallStart);
            vapi.off('call-end', onCallEnd);
            vapi.off('message', onMessage);
            vapi.off('error', onError);
            vapi.off('speech-start', onSpeechStart);
            vapi.off('speech-end', onSpeechEnd);
        }
    }, [companionId, sessionCreated]); // Added dependencies

    // Reset session creation flag when companionId changes
    useEffect(() => {
        sessionCreationAttempted.current = false;
        setSessionCreated(sessionAlreadyCreated || false);
    }, [companionId, sessionAlreadyCreated]);

    const toggleMicrophone = () => {
        const isAudioMuted = vapi.isMuted();
        vapi.setMuted(!isAudioMuted);
        setIsAudioMuted(!isAudioMuted)
    }

    const handleCall = async () => {
        setCallStatus(CallStatus.CONNECTING)

        const assistantOverrides = {
            variableValues: { subject, topic, style },
            clientMessages: ["transcript"],
            serverMessages: [],
        }

        // @ts-expect-error
        vapi.start(configureAssistant(voice, style, name), assistantOverrides)
    }

    const handleDisconnect = () => {
        setCallStatus(CallStatus.FINISHED)
        vapi.stop()
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getStatusColor = () => {
        switch (callStatus) {
            case CallStatus.ACTIVE:
                return 'from-emerald-500 to-green-600';
            case CallStatus.CONNECTING:
                return 'from-amber-500 to-orange-600';
            case CallStatus.FINISHED:
                return 'from-blue-500 to-indigo-600';
            default:
                return 'from-gray-400 to-gray-500';
        }
    }

    const getStatusText = () => {
        switch (callStatus) {
            case CallStatus.ACTIVE:
                return 'Live Session';
            case CallStatus.CONNECTING:
                return 'Connecting...';
            case CallStatus.FINISHED:
                return 'Session Complete';
            default:
                return 'Ready to Start';
        }
    }

    return (
        <div className="flex flex-col h-full max-w-6xl mx-auto">
            {/* Status Bar */}
            <div className="mb-6 sm:mb-8">
                <div className="flex items-center justify-between p-4 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200/60 shadow-lg">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className={cn(
                            "w-3 h-3 rounded-full shadow-lg animate-pulse",
                            callStatus === CallStatus.ACTIVE && "bg-emerald-500 shadow-emerald-500/50",
                            callStatus === CallStatus.CONNECTING && "bg-amber-500 shadow-amber-500/50",
                            callStatus === CallStatus.FINISHED && "bg-blue-500 shadow-blue-500/50",
                            callStatus === CallStatus.INACTIVE && "bg-gray-400 shadow-gray-400/50"
                        )} />
                        <div>
                            <p className="text-sm font-medium text-gray-900">{getStatusText()}</p>
                            <p className="text-xs text-gray-600">{topic}</p>
                        </div>
                    </div>
                    
                    {sessionCreated && (
                        <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-xl">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                            <span className="text-sm font-medium text-emerald-800">Session Ready</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                
                {/* AI Companion Section */}
                <div className="lg:col-span-1">
                    <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm border border-gray-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                        
                        {/* Animated Background Ring */}
                        <div className="absolute inset-4 rounded-full opacity-20 transition-opacity duration-500 group-hover:opacity-30"
                             style={{ 
                                 background: `linear-gradient(135deg, ${getSubjectColor(subject)}40, ${getSubjectColor(subject)}20)`,
                                 filter: 'blur(20px)'
                             }} />
                        
                        {/* Avatar Container */}
                        <div className="relative flex flex-col items-center">
                            <div className="relative mb-6">
                                {/* Pulsing Ring Effect */}
                                <div className={cn(
                                    "absolute -inset-4 rounded-full transition-all duration-1000",
                                    callStatus === CallStatus.ACTIVE && "animate-ping opacity-30",
                                    callStatus === CallStatus.CONNECTING && "animate-pulse opacity-50"
                                )} style={{ backgroundColor: getSubjectColor(subject) }} />
                                
                                {/* Main Avatar Circle */}
                                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-105"
                                     style={{ backgroundColor: getSubjectColor(subject) }}>
                                    
                                    {/* Static Icon */}
                                    <div className={cn(
                                        'absolute transition-all duration-1000 transform',
                                        callStatus === CallStatus.FINISHED || callStatus === CallStatus.INACTIVE ? 'opacity-100 scale-100' : 'opacity-0 scale-75',
                                        callStatus === CallStatus.CONNECTING && 'opacity-100 animate-pulse scale-110'
                                    )}>
                                        <Image 
                                            src={`/icons/${subject}.svg`} 
                                            alt={subject} 
                                            width={80} 
                                            height={80} 
                                            className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg" 
                                            style={{ filter: 'brightness(0) invert(1)' }} 
                                        />
                                    </div>

                                    {/* Animated Lottie */}
                                    <div className={cn(
                                        'absolute transition-all duration-1000 transform',
                                        callStatus === CallStatus.ACTIVE ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                                    )}>
                                        <Lottie
                                            lottieRef={lottieRef}
                                            animationData={three_dots}
                                            autoplay={false}
                                            className="w-20 h-20 sm:w-24 sm:h-24"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            {/* AI Name and Subject */}
                            <div className="text-center space-y-2">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{name}</h3>
                                <div className="px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                                     style={{ 
                                         backgroundColor: `${getSubjectColor(subject)}15`,
                                         color: getSubjectColor(subject),
                                         border: `1px solid ${getSubjectColor(subject)}30`
                                     }}>
                                    {subject.charAt(0).toUpperCase() + subject.slice(1)} Tutor
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* User Section & Controls */}
                <div className="lg:col-span-2 space-y-6">
                    
                    {/* User Profile Card */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm border border-gray-200/60 shadow-xl">
                        <div className="flex items-center gap-4 sm:gap-6 mb-6">
                            <div className="relative">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-lg ring-4 ring-white/50">
                                    <Image 
                                        src={userImage} 
                                        alt={userName} 
                                        width={80} 
                                        height={80} 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white shadow-lg" />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Welcome, {userName}!</h3>
                                <p className="text-gray-600">Ready for your learning session</p>
                            </div>
                        </div>

                        {/* Control Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            
                            {/* Microphone Toggle */}
                            <button 
                                className={cn(
                                    "flex items-center justify-center gap-3 p-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed",
                                    isAudioMuted 
                                        ? "bg-red-50 border-2 border-red-200 text-red-700 hover:bg-red-100" 
                                        : "bg-emerald-50 border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-100",
                                    callStatus === CallStatus.ACTIVE && "hover:scale-105"
                                )}
                                onClick={toggleMicrophone} 
                                disabled={callStatus !== CallStatus.ACTIVE}
                            >
                                <div className="p-2 rounded-xl bg-white/80 shadow-sm">
                                    <Image 
                                        src={isAudioMuted ? '/icons/mic-off.svg' : '/icons/mic-on.svg'} 
                                        alt="microphone" 
                                        width={24} 
                                        height={24} 
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                        style={{ filter: isAudioMuted ? 'hue-rotate(0deg) saturate(1.5)' : 'hue-rotate(120deg) saturate(1.5)' }} 
                                    />
                                </div>
                                <span className="text-sm sm:text-base">
                                    {isAudioMuted ? 'Unmute' : 'Mute'}
                                </span>
                            </button>

                            {/* Main Action Button */}
                            <button 
                                className={cn(
                                    "flex items-center justify-center gap-3 p-4 rounded-2xl font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group",
                                    callStatus === CallStatus.ACTIVE 
                                        ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700" 
                                        : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
                                    callStatus === CallStatus.CONNECTING && "animate-pulse",
                                    "hover:scale-105 active:scale-95"
                                )}
                                onClick={callStatus === CallStatus.ACTIVE ? handleDisconnect : handleCall}
                            >
                                {/* Button Background Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                
                                <div className="relative flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
                                    <span className="text-sm sm:text-base">
                                        {callStatus === CallStatus.ACTIVE
                                            ? "End Session"
                                            : callStatus === CallStatus.CONNECTING 
                                                ? 'Connecting...' 
                                                : 'Start Learning Session'}
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transcript Section */}
            <div className="flex-1 min-h-0">
                <div className="h-full p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm border border-gray-200/60 shadow-xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/60">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-gray-900">Live Transcript</h4>
                            <p className="text-sm text-gray-600">Real-time conversation history</p>
                        </div>
                    </div>
                    
                    <div className="h-64 sm:h-80 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                        {messages.length === 0 ? (
                            <div className="flex items-center justify-center h-full">
                                <div className="text-center space-y-3">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-600">Start your conversation</p>
                                        <p className="text-sm text-gray-500">Messages will appear here in real-time</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            messages.map((message, index) => (
                                <div key={index} className={cn(
                                    "flex gap-3 p-4 rounded-2xl transition-all duration-300 hover:shadow-md",
                                    message.role === 'assistant' 
                                        ? "bg-blue-50/80 border border-blue-200/60" 
                                        : "bg-emerald-50/80 border border-emerald-200/60 ml-8"
                                )}>
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm",
                                        message.role === 'assistant' 
                                            ? "bg-gradient-to-br from-blue-500 to-indigo-600" 
                                            : "bg-gradient-to-br from-emerald-500 to-green-600"
                                    )}>
                                        {message.role === 'assistant' 
                                            ? name.charAt(0).toUpperCase() 
                                            : userName.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={cn(
                                                "text-sm font-semibold",
                                                message.role === 'assistant' ? "text-blue-700" : "text-emerald-700"
                                            )}>
                                                {message.role === 'assistant' 
                                                    ? name.split(' ')[0].replace(/[.,]/g, '') 
                                                    : userName}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                        <p className={cn(
                                            "text-sm leading-relaxed",
                                            message.role === 'assistant' ? "text-gray-700" : "text-gray-700"
                                        )}>
                                            {message.content}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanionComponent