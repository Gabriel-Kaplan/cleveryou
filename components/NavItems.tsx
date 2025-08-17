'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import { Home, Crown, User, BookOpen, Sparkle, PlusCircle} from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
    { icon: Home, href: '/', key: 'home', title: 'Home' },
    { icon: PlusCircle, href: '/coaches/new', key: 'create', title: 'CleverCoach Lab' },
    { icon: BookOpen, href: '/coaches', key: 'coaches', title: 'CleverCoach Library' },
    { icon: Crown, href: '/subscription', key: 'subscription', title: 'Clever Plans' },
    { icon: User, href: '/my-cleveryou', key: 'profile', title: 'My Profile' },
    { icon: Sparkle, href: '/about', key: 'about', title: 'About Us' },
]

const NavItems = () => {
    const pathname = usePathname();
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({ icon: Icon, href, key, title }) => {
                // Base classes that are consistent
                const baseClasses = "px-4 py-2 rounded-xl transition-all duration-300 ease-in-out text-sm font-medium block";
                
                // Dynamic classes only applied on client
                const isActive = pathname === href;
                const dynamicClasses = isClient 
                    ? isActive
                        ? "bg-black/70 text-white backdrop-blur-sm border border-white/30 shadow-lg"
                        : "text-black/80 hover:text-black/90 hover:bg-black/10 hover:backdrop-blur-sm hover:border hover:border-white/20 hover:shadow-md"
                    : isActive
                        ? "bg-black/70 text-white"
                        : "text-black/80";

                return (
                    <div 
                        key={key} 
                        className="relative"
                        onMouseEnter={() => isClient && setHoveredItem(key)}
                        onMouseLeave={() => isClient && setHoveredItem(null)}
                    >
                        <Link
                            href={href}
                            className={cn(baseClasses, dynamicClasses)}
                        >
                            <Icon />
                        </Link>
                        
                        {/* Only show tooltips on client */}
                        {isClient && hoveredItem === key && (
                            <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-300 z-50">
                                <div className="relative bg-white/90 backdrop-blur-xl text-gray-800 text-xs font-semibold px-4 py-3 rounded-2xl shadow-2xl border border-white/20 whitespace-nowrap">
                                    {/* Glassmorphic background overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/30 to-white/10 rounded-2xl"></div>
                                    
                                    {/* Content */}
                                    <div className="relative flex items-center gap-2.5">
                                        <div className="w-2 h-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-sm animate-pulse"></div>
                                        <span className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent font-bold tracking-wide">
                                            {title}
                                        </span>
                                    </div>
                                    
                                    {/* Subtle glow effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 blur-xl -z-10"></div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </nav>
    ) 
}

export default NavItems