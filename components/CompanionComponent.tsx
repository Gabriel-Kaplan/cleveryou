/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import { getSubjectColor,cn, configureAssistant} from '@/lib/utils'
import {useEffect, useState, useRef} from 'react'
import {vapi} from "@/lib/vapi.sdk";
import Image from 'next/image';
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import three_dots from "@/constants/3DotsSpeaking.json"
import {addToSessionHistory} from "@/lib/actions/companion.actions";

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

const CompanionComponent = ({ companionId, subject, topic, name, userName, userImage, style, voice, sessionAlreadyCreated }: CompanionComponentProps ) => {

   const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
   const [isSpeaking, setIsSpeaking] = useState(false);
   const lottieRef = useRef<LottieRefCurrentProps>(null);
   const [isAudioMuted, setIsAudioMuted] = useState(false);
   const [messages, setMessages] = useState<SavedMessage[]>([]);
   const [sessionCreated, setSessionCreated] = useState(sessionAlreadyCreated || false);
   const sessionCreationAttempted = useRef(false);

    useEffect(() => {
        if(lottieRef) {
            if(isSpeaking) {
                lottieRef.current?.play()
            } else {
                lottieRef.current?.stop()
            }
        }
    }, [isSpeaking, lottieRef])

    useEffect(()=> {
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
            if(message.type === 'transcript' && message.transcriptType === 'final') {
                const newMessage= { role: message.role, content: message.transcript}
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
        vapi.start(configureAssistant(voice, style), assistantOverrides)
    }

    const handleDisconnect = () => {
        setCallStatus(CallStatus.FINISHED)
        vapi.stop()
    }

  return (
    <section className="flex flex-col h-[70vh]">
      {/* Session Status Indicator */}
      {sessionCreated && (
        <div className="mb-4 px-4 py-2 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg">
          <p className="text-sm text-green-800 dark:text-green-200">
            ✅ Session initialized - Ready to start learning!
          </p>
        </div>
      )}

      <section className='flex gap-8 max-sm:flex-col'>
          <div className='companion-section' style={{borderColor: getSubjectColor(subject)}}>
              <div className='companion-avatar' style={{backgroundColor: getSubjectColor(subject)}}>
                <div className={
                  cn(
                  'absolute transition-opacity duration-1000', callStatus === CallStatus.FINISHED || callStatus === CallStatus.INACTIVE ? 'opacity-100' : 'opacity-0', callStatus === CallStatus.CONNECTING && 'opacity-100 animate-pulse')}>
                   <Image src={`/icons/${subject}.svg`} alt={subject} width={150} height={150} className="max-sm:w-20 max-sm:h-20 sm:w-[150px] sm:h-[150px]" style={{filter: 'brightness(0) invert(1)'}}/>
                  </div>

                  <div className={cn('absolute transition-opacity duration-1000', callStatus === CallStatus.ACTIVE ? 'opacity-100': 'opacity-0')}>
                    <Lottie
                      lottieRef={lottieRef}
                      animationData={three_dots}
                      autoplay={false}
                      className="companion-lottie"
                     />
                  </div>
              </div>
              <p className="font-bold text-2xl">{name}</p>
          </div>

          <div className="user-section">
            <div className='user-avatar'>
                <Image src={userImage} alt={userName} width={130} height={130} className="rounded-lg" />
                <p className="font-bold text-2xl">{userName}</p>
            </div>
            <button className='btn-mic' onClick={toggleMicrophone} disabled={callStatus !== CallStatus.ACTIVE}>
              <Image src={isAudioMuted ? '/icons/mic-off.svg' : '/icons/mic-on.svg'} alt="mic" width={36} height={36} style={{filter: 'brightness(0) invert(1)'}} />
                <p className="max-sm:hidden">
                  {isAudioMuted ? 'Unmute' : 'Mute'}
                </p>
            </button>
            <button className={cn('rounded-lg py-2 cursor-pointer transition-colors w-full text-white', callStatus ===CallStatus.ACTIVE ? 'bg-red-700' : 'bg-white/20 border-2 border-slate-400', callStatus === CallStatus.CONNECTING && 'animate-pulse')} onClick={callStatus === CallStatus.ACTIVE ? handleDisconnect : handleCall}>
             {callStatus === CallStatus.ACTIVE
             ? "End Lesson"
             : callStatus === CallStatus.CONNECTING ? 'Connecting...' : 'Start Lesson'}
            </button>
          </div>
      </section>

      <section className="transcript p-3 mt-3 rounded-2xl shadow-2xl border-2">
                <div className="transcript-message scrollbar text-lg">
                    {messages.map((message, index) => {
                        if(message.role === 'assistant') {
                            return (
                                <p key={index} className="max-sm:text-sm">
                                    {
                                        name
                                            .split(' ')[0]
                                            .replace('/[.,]/g, ','')
                                    }: {message.content}
                                </p>
                            )
                        } else {
                           return <p key={index} className="text-primary max-sm:text-sm">
                                {userName}: {message.content}
                            </p>
                        }
                    })}
                </div>
              
            </section>
    </section>
  )
}

export default CompanionComponent