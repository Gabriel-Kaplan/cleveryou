"use client";
import Image from "next/image";
import Link from "next/link";
//import { usePathname } from "next/navigation";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  bookmarked: boolean;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color
}: CompanionCardProps) => {
    //const pathname = usePathname();

  return (
    <article 
      className="companion-card relative overflow-hidden rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group" 
      style={{ backgroundColor: color }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
      </div>

      {/* Header with subject badge and bookmark */}
      <div className="relative flex justify-between items-start mb-6">
        <div className="subject-badge bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium border border-white/30">
          {subject}
        </div>
        <button className="companion-bookmark p-2 rounded-full hover:bg-white/20 transition-colors duration-200 group/bookmark">
          <Image
            src="/icons/bookmark.svg"
            alt="bookmark"
            width={16}
            height={20}
            className="group-hover/bookmark:scale-110 transition-transform duration-200"
          />
        </button>
      </div>

      {/* Content */}
      <div className="relative mb-6">
        <h2 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-white/90 transition-colors duration-200">
          {name}
        </h2>
        <p className="text-sm text-white/90 leading-relaxed line-clamp-2 mb-4">
          {topic}
        </p>
        
        {/* Duration with enhanced styling */}
        <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-lg px-3 py-2 w-fit border border-white/20">
          <Image
            src="/icons/clock.svg"
            alt="duration"
            width={14}
            height={14}
            style={{
               filter: 'brightness(0) invert(1)', 
            }}
          />
          <p className="text-sm text-white font-medium">
            {duration} minutes
          </p>
        </div>
      </div>

      {/* Launch button */}
      <Link href={`/coaches/${id}`} className="w-full relative">
        <button className="btn-primary w-full justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 hover:border-white/50 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl">
          <span className="flex items-center justify-center gap-2">
            Launch Lesson
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </Link>
    </article>
  )
}

export default CompanionCard