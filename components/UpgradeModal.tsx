"use client";

import Image from "next/image";
import Link from "next/link";

// Upgrade Modal Component
const UpgradeModal = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-none">
      <div className="relative max-w-md w-full">
        {/* Upgrade Card */}
        <div className="relative backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 shadow-2xl bg-gradient-to-br from-white/95 via-slate-50/95 to-white/95">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-3xl blur opacity-10"></div>
          
          <div className="relative z-10 text-center space-y-6">
            {/* Icon */}
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Image
                src="/icons/cap.svg"
                alt="Genius Plan"
                width={32}
                height={32}
                className="filter brightness-0 invert"
              />
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Upgrade to Genius Plan
              </h1>
              <p className="text-slate-600 text-sm">
                Access your personal dashboard and unlock advanced features
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-slate-700 text-sm">Personal Dashboard & Analytics</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                <span className="text-slate-700 text-sm">Unlimited AI Companions</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-700 text-sm">Advanced Learning Insights</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-slate-700 text-sm">Priority Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-4">
            <Link href="/subscription">
              <button className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Upgrade to Genius
              </button>
              <button 
                onClick={() => window.history.back()}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 px-6 rounded-xl transition-all duration-300 border border-slate-200"
              >
                Go Back
              </button>
              </Link>
            </div>

            {/* Small note */}
            <p className="text-slate-400 text-xs">
              You&apos;re currently on the {" "}
              <span className="text-slate-600 font-medium">Clever/Curious</span> plan
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UpgradeModal;