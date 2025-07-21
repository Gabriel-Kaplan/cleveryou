'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const navItems = [
    { label:'Home', href: '/' },
    { label: 'Coach Library', href: '/companions' },
    { label: 'Clever Plans', href: '/subscription' },
    { label: 'My CleverYou', href: '/my-journey' },
]

const NavItems = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({ label, href }) => (
                <Link
                    href={href}
                    key={label}
                    className={cn(
                        "px-4 py-2 rounded-xl transition-all duration-300 ease-in-out text-sm font-medium",
                        pathname === href 
                            ? "bg-white/20 text-white backdrop-blur-sm border border-white/30 shadow-lg" 
                            : "text-white/80 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:border hover:border-white/20 hover:shadow-md"
                    )}
                >
                    {label}
                </Link>
            ))}
        </nav>
    ) 
}

export default NavItems