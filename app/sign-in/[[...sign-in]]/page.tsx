// pages/sign-in/[[...index]].js or app/sign-in/[[...sign-in]]/page.js
import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  const clerkAppearance = {
    baseTheme: "light",
    variables: {
      colorPrimary: "#8b5cf6",
      colorBackground: "#ffffff",
      colorInputBackground: "#f8fafc",
      colorInputText: "#1e293b",
      colorText: "#1e293b",
      colorTextSecondary: "#64748b",
      colorDanger: "#ef4444",
      colorSuccess: "#10b981",
      colorWarning: "#f59e0b",
      colorNeutral: "#000",
      borderRadius: "0.75rem",
      fontFamily: "Inter, system-ui, sans-serif",
      fontSize: "16px",
      spacingUnit: "1.25rem"
    },
    elements: {
      // Main card container with light glass morphism effect
      card: `
        bg-white/70 backdrop-blur-2xl border border-slate-200/80 
        shadow-2xl w-full max-w-[480px] p-10
        rounded-2xl relative overflow-hidden
        before:absolute before:inset-0 before:bg-gradient-to-br 
        before:from-purple-500/3 before:to-pink-500/3 before:pointer-events-none
      `,
      
      // Header styling - Light theme colors
      headerTitle: "text-slate-900 text-3xl font-bold mb-3 text-center !text-slate-900 !important",
      headerSubtitle: "text-slate-600 text-base text-center mb-8 !text-slate-600 !important",
      
      // Form inputs with light modern styling
      formFieldInput: `
        bg-slate-50/80 border border-slate-300/60 text-slate-900 placeholder-slate-500 
        focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/10 
        transition-all duration-300 ease-out
        hover:bg-slate-100/60 hover:border-slate-400/60
        min-h-[56px] text-base px-5 py-4 rounded-xl
        shadow-inner shadow-slate-200/30
      `,
      
      // Primary button with enhanced gradient for light theme
      formButtonPrimary: `
        bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 
        hover:from-purple-700 hover:via-purple-800 hover:to-pink-700
        text-white font-semibold transition-all duration-300 ease-out
        hover:scale-[1.02] active:scale-[0.98] 
        shadow-lg shadow-purple-500/25 hover:shadow-purple-500/35
        min-h-[56px] text-base px-6 py-4 rounded-xl
        relative overflow-hidden
        before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-white/0 before:via-white/15 before:to-white/0
        before:translate-x-[-100%] hover:before:translate-x-[100%]
        before:transition-transform before:duration-700
      `,
      
      // Social buttons for light theme
      socialButtonsBlockButton: `
        bg-slate-50/80 border border-slate-300/60 text-slate-900 
        hover:bg-slate-100/80 hover:border-purple-500/40
        transition-all duration-300 ease-out
        hover:scale-[1.01] active:scale-[0.99]
        min-h-[56px] text-base px-5 py-4 rounded-xl
        shadow-sm shadow-slate-200/40
      `,
      
      // Form field labels for light theme
      formFieldLabel: "text-slate-700 font-medium text-base mb-3 block",
      
      // Links and interactive elements
      footerActionLink: `
        text-purple-600 hover:text-purple-700 transition-colors duration-200 
        text-base font-medium underline-offset-4 hover:underline
      `,
      
      // Input validation and hints
      formFieldHintText: "text-slate-500 text-sm mt-2",
      formFieldErrorText: "text-red-500 text-sm mt-2 font-medium",
      
      // Divider styling for light theme
      dividerLine: "bg-gradient-to-r from-transparent via-slate-300 to-transparent",
      dividerText: "text-slate-500 text-sm bg-white px-4",
      
      // Other elements with light theme colors
      identityPreviewText: "text-slate-700 text-base",
      identityPreviewEditButton: "text-purple-600 hover:text-purple-700 text-base",
      socialButtonsBlockButtonText: "text-slate-900 text-base font-medium",
      formFieldInputShowPasswordButton: "text-purple-600 hover:text-purple-700 text-base",
      alertText: "text-slate-700 text-base",
      footerActionText: "text-slate-500 text-base",
      spinner: "text-purple-600",
      
      // Additional spacing and layout improvements
      formFieldRow: "mb-6",
      formButtonRow: "mt-8 mb-6",
      socialButtonsBlockButtonRow: "mb-4",
      footerActionRow: "mt-6 text-center"
    }
  };

  return (
    <main className="min-h-screen bg-transparent">
      {/* Logo/Brand section */}
      <div className="relative z-10 pt-10">
        <div className="relative z-10 pt-12 pb-8">
        <div className="flex flex-col items-center justify-center gap-2.5 text-center">
            
            <h1 className="text-4xl font-bold text-slate-900">
            CleverYou
            </h1>
            <p className="text-slate-600 text-lg">Welcome to your learning journey</p>
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