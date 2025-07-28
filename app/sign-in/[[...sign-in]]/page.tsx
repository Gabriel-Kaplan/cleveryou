// pages/sign-in/[[...index]].js or app/sign-in/[[...sign-in]]/page.js
import { SignIn } from '@clerk/nextjs'
import Image from 'next/image';

export default function SignInPage() {
  const clerkAppearance = {
    baseTheme: "dark",
    variables: {
      colorPrimary: "#8b5cf6",
      colorBackground: "#0f172a",
      colorInputBackground: "#1e293b",
      colorInputText: "#ffffff",
      colorText: "#ffffff",
      colorTextSecondary: "#94a3b8",
      colorDanger: "#ef4444",
      colorSuccess: "#10b981",
      colorWarning: "#f59e0b",
      colorNeutral: "#fff",
      borderRadius: "0.75rem",
      fontFamily: "Inter, system-ui, sans-serif",
      fontSize: "16px",
      spacingUnit: "1.25rem"
    },
    elements: {
      // Main card container with glass morphism effect
      card: `
        bg-slate-900/40 backdrop-blur-2xl border border-slate-700/50 
        shadow-2xl shadow-purple-500/10 w-full max-w-[480px] p-10
        rounded-2xl relative overflow-hidden
        before:absolute before:inset-0 before:bg-gradient-to-br 
        before:from-purple-500/5 before:to-pink-500/5 before:pointer-events-none
      `,
      
      // Header styling - Made more specific with !important
      headerTitle: "text-white text-3xl font-bold mb-3 text-center !text-white !important",
      headerSubtitle: "text-slate-200 text-base text-center mb-8 !text-slate-200 !important",
      
      // Form inputs with modern styling
      formFieldInput: `
        bg-slate-800/60 border border-slate-600/50 text-white placeholder-slate-400 
        focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/20 
        transition-all duration-300 ease-out
        hover:bg-slate-700/60 hover:border-slate-500/60
        min-h-[56px] text-base px-5 py-4 rounded-xl
        shadow-inner shadow-slate-900/20
      `,
      
      // Primary button with enhanced gradient
      formButtonPrimary: `
        bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 
        hover:from-purple-700 hover:via-purple-800 hover:to-pink-700
        text-white font-semibold transition-all duration-300 ease-out
        hover:scale-[1.02] active:scale-[0.98] 
        shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40
        min-h-[56px] text-base px-6 py-4 rounded-xl
        relative overflow-hidden
        before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-white/0 before:via-white/10 before:to-white/0
        before:translate-x-[-100%] hover:before:translate-x-[100%]
        before:transition-transform before:duration-700
      `,
      
      // Social buttons
      socialButtonsBlockButton: `
        bg-slate-800/60 border border-slate-600/50 text-white 
        hover:bg-slate-700/60 hover:border-purple-500/50
        transition-all duration-300 ease-out
        hover:scale-[1.01] active:scale-[0.99]
        min-h-[56px] text-base px-5 py-4 rounded-xl
        shadow-sm shadow-slate-900/20
      `,
      
      // Form field labels
      formFieldLabel: "text-slate-200 font-medium text-base mb-3 block",
      
      // Links and interactive elements
      footerActionLink: `
        text-purple-400 hover:text-purple-300 transition-colors duration-200 
        text-base font-medium underline-offset-4 hover:underline
      `,
      
      // Input validation and hints
      formFieldHintText: "text-slate-400 text-sm mt-2",
      formFieldErrorText: "text-red-400 text-sm mt-2 font-medium",
      
      // Divider styling
      dividerLine: "bg-gradient-to-r from-transparent via-slate-600 to-transparent",
      dividerText: "text-slate-400 text-sm bg-slate-900 px-4",
      
      // Other elements
      identityPreviewText: "text-slate-300 text-base",
      identityPreviewEditButton: "text-purple-400 hover:text-purple-300 text-base",
      socialButtonsBlockButtonText: "text-white text-base font-medium",
      formFieldInputShowPasswordButton: "text-purple-400 hover:text-purple-300 text-base",
      alertText: "text-slate-200 text-base",
      footerActionText: "text-slate-400 text-base",
      spinner: "text-purple-500",
      
      // Additional spacing and layout improvements
      formFieldRow: "mb-6",
      formButtonRow: "mt-8 mb-6",
      socialButtonsBlockButtonRow: "mb-4",
      footerActionRow: "mt-6 text-center"
    }
  };

  return (
    <main className="min-h-screen bg-transparent">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Logo/Brand section */}
      <div className="relative z-10 pt-10">
        <div className="relative z-10 pt-12 pb-8">
        <div className="flex flex-col items-center justify-center gap-2.5 text-center">
            <Image src="/icons/cleveryoulogo.png" alt="CleverYou Logo" width={36} height={36} />
            <h1 className="text-4xl font-bold text-white">
            CleverYou
            </h1>
            <p className="text-slate-400 text-lg">Welcome to your learning journey</p>
        </div>
        </div>
      </div>
      
      {/* Sign-in form container */}
      <div className="m-auto relative z-10 flex items-center justify-center px-4 pb-12">
        <div className="w-full max-w-lg">
          <SignIn 
            appearance={clerkAppearance}
          />
        </div>
      </div>
    </main>
  )
}