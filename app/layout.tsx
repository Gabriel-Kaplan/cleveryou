import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: 'swap', // Improves font loading performance
});

export const metadata: Metadata = {
  title: "CleverYou",
  description: "CleverYou is a real-time AI teaching platform that delivers personalized, interactive lessons using conversational AI. Designed to adapt to each learner's pace and style, it makes education smarter, faster, and more engaging.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body className="antialiased">
        <ClerkProvider 
          appearance={{ 
            variables: { 
              colorPrimary: '#fe5933' 
            },
            elements: {
              // Ensure consistent styling for Clerk components
              formButtonPrimary: 'bg-[#fe5933] hover:bg-[#e54d2c] text-white',
              card: 'bg-white/95 backdrop-blur-xl border border-gray-200',
            }
          }}
          /* Add publishableKey if you haven't already
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}*/
        >
          <Navbar />
            {children}
        </ClerkProvider>
      </body>
    </html>
  );
}