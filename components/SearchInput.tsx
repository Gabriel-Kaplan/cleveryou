'use client';

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import Image from "next/image";
import {formUrlQuery, removeKeysFromUrlQuery} from "@jsmastery/utils";

const SearchInput = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('topic') || '';

  const [searchQuery, setSearchQuery] = useState(query);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if(searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "topic",
          value: searchQuery,
        });

        router.push(newUrl, { scroll: false });
      } else {
        if(pathname === '/companions') {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["topic"],
          });

          router.push(newUrl, { scroll: false });
        }
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router, searchParams, pathname]);

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glassmorphism container with gradient border */}
      <div className={`
        relative overflow-hidden rounded-2xl 
        bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 
        backdrop-blur-xl border transition-all duration-300 ease-out
        ${isFocused 
          ? 'border-purple-400/60 shadow-2xl shadow-purple-500/25 scale-[1.02]' 
          : 'border-slate-600/40 shadow-lg shadow-black/20'
        }
      `}>
        {/* Animated gradient background */}
        <div className={`
          absolute inset-0 opacity-30 transition-opacity duration-500
          bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20
          ${isFocused ? 'animate-pulse' : ''}
        `}></div>
        
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
        
        {/* Main content */}
        <div className="relative flex items-center gap-3 px-6 py-4">
          {/* Search icon with animation */}
          <div className={`
            flex-shrink-0 transition-all duration-300 ease-out
            ${isFocused ? 'scale-110 text-purple-400' : 'text-slate-400'}
          `}>
            <Image 
              src="/icons/search.svg" 
              alt="search" 
              width={20} 
              height={20}
              className={`transition-all duration-300 filter brightness-0 invert ${
                isFocused ? 'brightness-125 drop-shadow-sm' : ''
              }`}
            />
          </div>

          {/* Input field */}
          <input
            placeholder="Search companions..."
            className={`
              flex-1 outline-none bg-transparent text-slate-100 placeholder-slate-400
              text-base font-medium transition-all duration-300
              ${isFocused ? 'placeholder-slate-300' : ''}
            `}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {/* Clear button with smooth animation */}
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="
                flex-shrink-0 p-1 rounded-full bg-slate-700/60 hover:bg-slate-600/80
                text-slate-300 hover:text-white transition-all duration-200 ease-out
                hover:scale-110 active:scale-95
                backdrop-blur-sm border border-slate-600/30 hover:border-slate-500/50
              "
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          )}
        </div>

        {/* Bottom highlight bar */}
        <div className={`
          absolute bottom-0 left-0 h-[2px] bg-gradient-to-r 
          from-purple-500 via-pink-500 to-blue-500 transition-all duration-500 ease-out
          ${isFocused ? 'w-full opacity-100' : 'w-0 opacity-0'}
        `}></div>
      </div>

      {/* Search suggestions indicator */}
      {searchQuery && (
        <div className="absolute top-full left-0 right-0 mt-2 text-xs text-slate-400 text-center animate-fade-in">
          Searching for &quot;{searchQuery}&quot;...
        </div>
      )}
    </div>
  );
};

export default SearchInput;