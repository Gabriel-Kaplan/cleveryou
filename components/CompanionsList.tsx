import {cn, getSubjectColor} from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface CompanionsListProps {
    title: string;
    companions?: Companion[];
    classNames?: string;
}

const CompanionsList = ({ title, companions, classNames }: CompanionsListProps) => {
    return (
        <article className={cn('companion-list', classNames)}>
            <div className="mb-8">
                <h2 className="font-bold text-3xl text-gray-900 dark:text-gray-100">{title}</h2>
                <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>

            <div className="space-y-6">
                {companions?.map(({id, subject, name, topic, duration}) => (
                    <Link key={id} href={`/companions/${id}`} className="block group">
                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900/20 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600 hover:-translate-y-0.5">
                            <div className="flex items-center justify-between gap-4">
                                {/* Left Section: Icon + Content */}
                                <div className="flex items-center gap-4 flex-1 min-w-0">
                                    {/* Subject Icon */}
                                    <div 
                                        className="size-20 flex items-center justify-center rounded-xl shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300 p-4" 
                                        style={{ backgroundColor: getSubjectColor(subject) }}
                                    >
                                        <Image
                                            src={`/icons/${subject}.svg`}
                                            alt={subject}
                                            width={36}
                                            height={36} 
                                            style={{
                                                filter: 'brightness(0) invert(1)',
                                            }}
                                        />
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 truncate">
                                            {name}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-base line-clamp-2 leading-relaxed">
                                            {topic}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Section: Subject Badge + Duration */}
                                <div className="flex items-center gap-4 shrink-0">
                                    {/* Subject Badge - Desktop */}
                                    <div className="hidden md:block">
                                        <span 
                                            className="px-3 py-1.5 rounded-full text-sm font-medium text-white shadow-sm"
                                            style={{ backgroundColor: getSubjectColor(subject) }}
                                        >
                                            {subject}
                                        </span>
                                    </div>
                                    
                                    {/* Subject Badge - Mobile */}
                                    <div 
                                        className="md:hidden flex items-center justify-center rounded-lg size-12 shadow-sm p-2"
                                        style={{backgroundColor: getSubjectColor(subject)}}
                                    >
                                        <Image
                                            src={`/icons/${subject}.svg`}
                                            alt={subject}
                                            width={20}
                                            height={20}
                                            style={{
                                                filter: 'brightness(0) invert(1)',
                                            }}
                                        />
                                    </div>

                                    {/* Duration */}
                                    <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg">
                                        <Image 
                                            src="/icons/clock.svg" 
                                            alt="duration" 
                                            width={16} 
                                            height={16} 
                                            className="text-gray-500 dark:text-gray-400"
                                             style={{
                                            filter: 'brightness(0) invert(1)', 
                                            }}
                                        />
                                        <span className="text-gray-400 dark:text-gray-200 font-medium">
                                            {duration}
                                            <span className="hidden sm:inline"> mins</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Empty State */}
            {(!companions || companions.length === 0) && (
                <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">No companions available</h3>
                    <p className="text-gray-500 dark:text-gray-400">Check back later for new learning companions.</p>
                </div>
            )}
        </article>
    )
}

export default CompanionsList;