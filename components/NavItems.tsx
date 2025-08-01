'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import { Home, Crown, User, BookOpen, Settings } from "lucide-react";


const navItems = [
    { label: <Home/>, href: '/', key: 'home' },
    { label: <BookOpen/>, href: '/coaches', key: 'coaches' },
    { label: <Crown/>, href: '/subscription', key: 'subscription' },
    { label: <User/>, href: '/my-cleveryou', key: 'profile' },
    { label: <Settings/>, href: '/about', key: 'about' },
]

const NavItems = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({ label, href, key }) => (
                <Link
                    href={href}
                    key={key}
                    className={cn(
                        "px-4 py-2 rounded-xl transition-all duration-300 ease-in-out text-sm font-medium",
                        pathname === href 
                            ? "bg-black/70 text-white backdrop-blur-sm border border-white/30 shadow-lg" 
                            : "text-black/80 hover:text-black/90 hover:bg-black/10 hover:backdrop-blur-sm hover:border hover:border-white/20 hover:shadow-md"
                    )}
                >
                    {label}
                </Link>
            ))}
        </nav>
    ) 
}

export default NavItems