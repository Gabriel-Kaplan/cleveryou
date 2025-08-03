/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { 
  BookOpen, 
  Zap, 
  Users, 
  Shield, 
  HelpCircle, 
  Search, 
  Moon, 
  Sun, 
  ChevronRight,
  Brain,
  Trophy,
  Mic,
  Settings,
  CreditCard,
  Lock,
  MessageSquare,
  Play,
  Star,
  CheckCircle,
  AlertCircle,
  Info,
  Menu,
  X,
  ChevronLeft
} from 'lucide-react';
import Link from 'next/link';

// Types
interface Section {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
}

interface ContentItem {
  title: string;
  content: string;
  icon: React.ComponentType<any>;
  steps?: string[];
  features?: string[];
  faqs?: { q: string; a: string }[];
  policies?: string[];
  disclaimers?: string[];
  practices?: string[];
}

interface SectionContent {
  title: string;
  items: ContentItem[];
}

type ContentMap = {
  [key: string]: SectionContent;
};

const CleverYouDocs = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections: Section[] = [
    { id: 'getting-started', title: 'Getting Started', icon: Play },
    { id: 'features', title: 'Features & Guides', icon: Zap },
    { id: 'faq', title: 'FAQ', icon: HelpCircle },
    { id: 'privacy', title: 'Privacy & Security', icon: Shield }
  ];

  const content: ContentMap = {
    'getting-started': {
      title: 'Getting Started with CleverYou',
      items: [
        {
          title: 'What is CleverYou?',
          content: `CleverYou is an intelligent learning management platform that leverages AI to create personalized educational experiences. Our platform combines adaptive learning algorithms with voice AI technology to provide interactive, engaging learning sessions tailored to your unique learning style and pace.`,
          icon: Brain
        },
        {
          title: 'Creating Your AI Assistant',
          content: `Your AI assistant is the heart of your CleverYou experience. Navigate to the Assistant Setup page and choose your preferred personality, voice, and subject expertise. The AI will adapt to your learning patterns and provide personalized guidance throughout your educational journey.`,
          icon: MessageSquare,
          steps: [
            'Click "Create Coach" from your dashboard, the CleverCoach library or home page',
            'Select your preferred voice and personality',
            'Choose your primary subjects of interest',
            'Customize interaction preferences',
            'The click "Build Your CleverCoach" and start your first conversation'
          ]
        },
        /*{
          title: 'Starting Learning Sessions',
          content: `Learning sessions are interactive experiences where you engage with your AI assistant on specific topics. Sessions can include quizzes, discussions, practice problems, and real-time feedback.`,
          icon: Play,
          steps: [
            'Select a subject from your dashboard',
            'Choose session type (Study, Practice, Review)',
            'Set your learning goals for the session',
            'Begin interacting with your AI assistant',
            'Track progress and earn achievements'
          ]
        }*/
      ]
    },
    'features': {
      title: 'Features & User Guides',
      items: [
        {
          title: 'Progress Tracking & Achievements',
          content: `CleverYou gamifies your learning experience with comprehensive progress tracking, badges, and achievements. Monitor your learning streaks, subject mastery levels, and unlock special rewards as you advance. (Please Note: These features are currently in development and will be available soon.)`,
          icon: Trophy,
          features: [
            'Learning streaks and consistency tracking',
            'Subject-specific progress meters',
            'Achievement badges for milestones',
            'Leaderboards and social features',
            'Detailed analytics and insights'
          ]
        },
        {
          title: 'Build Your Perfect AI Learning Companion',
          content: `Create a personalized AI coach tailored to your unique learning style and goals. Customize everything from communication approach to subject expertise, and watch your assistant adapt and improve throughout each lesson to maximize your learning potential.`,
          icon: Settings,
          features: [
            'Voice personality selection (Male/Female with distinct characteristics)',
            'Communication style adaptation (Formal, Casual, with Encouraging and Direct modes coming soon)',
            'Subject matter specialization across 6+ domains (Math, Languages, Science, History, Coding, Economics)',
            'Dynamic lesson structure - length and complexity automatically adjust based on your description and progress',
            'Real-time learning pace optimization - difficulty scales up or down during lessons based on your responses',
            'Session memory - your coach remembers your preferences and progress patterns within each lesson'
          ]
        },
        {
              title: 'Your Personal Learning Dashboard',
              content: `Track your learning journey with comprehensive analytics and instant access to all your AI CleverCoaches. Genius plan users get detailed insights into their learning patterns, session management, and can launch new sessions with their saved companions without rebuilding them.`,
              icon: BookOpen,
              features: [
                'Complete learning analytics - total sessions, companions created, daily averages, and completion rates',
                'My Companions library - instantly access and reuse your created AI coaches',
                'Recent Sessions tracking with quick restart functionality', 
                'Weekly activity visualization and streak tracking (coming soon)',
                'Learning insights dashboard with performance metrics and daily averages',
                'Session bookmarking system for important lessons (coming soon)',
                'Quick stats overview - this week\'s activity, completed sessions, and learning streaks'
              ]
            },
              {
        title: 'Enhanced Learning Experience',
        content: `Enjoy seamless text-based interactions with your AI CleverCoaches through our intuitive chat interface. Create personalized learning sessions by selecting your companion, choosing your subject, and providing lesson descriptions for tailored educational experiences.`,
        icon: Mic,
        features: [
          'Voice-based conversational learning with our AI CleverCoaches',
          'Instant session creation - select companion, subject, description, voice, style and duration',
          'Real-time adaptive responses based on your learning in conversation',
          'Natural conversation flow',
          'Personalized learning sessions tailored to your goals'
        ]
      }
      ]
    },
    'faq': {
      title: 'Frequently Asked Questions',
      items: [
        {
          title: 'Common Troubleshooting',
          content: 'Solutions to the most frequently encountered issues.',
          icon: AlertCircle,
          faqs: [
            {
              q: 'My AI assistant isn\'t responding properly',
              a: 'Try refreshing your browser, checking your internet connection, or clearing your browser cache. If the issue persists, restart your learning session or contact our support team.'
            },
            {
              q: 'Voice recognition isn\'t working',
              a: 'Ensure your microphone permissions are enabled, check your audio input settings, and verify that your microphone is not being used by other applications.'
            },
           {
              q: 'Why don\'t my conversations continue where I left off?',
              a: 'Each session with your AI companion starts fresh, similar to ChatGPT or Claude. While your companions and session history are saved in your dashboard, the actual conversation context resets when you start a new session. This ensures optimal performance and allows you to explore different topics without previous context interfering.'
            }
          ]
        },
       {
  title: 'Account Management',
  content: 'Manage your CleverYou account settings, profile information, and coach allocations across all plan tiers.',
  icon: Users,
  faqs: [
    {
      q: 'How do I update my profile information?',
      a: 'Navigate to your profile in the navigation bar > Manage Account > Update your personal information, billing, and security settings.'
    },
    {
      q: 'Can I have multiple AI coaches?',
      a: 'Yes! The number of Clever Coaches you can create depends on your plan: Curious (free) allows 3 active coaches, Clever plan allows 15 active coaches, and Genius plan offers unlimited coaches. Each coach can be specialized for different subjects or learning styles.'
    },
    {
      q: 'How do I delete my account?',
      a: 'Account deletion can be accessed through your profile picture in the navigation bar > Manage Account > Security > Delete Account. This action is permanent and cannot be undone.'
    }
  ]
},
        {
  title: 'Subscription & Billing',
  content: 'Information about CleverYou subscriptions, billing, and plan management.',
  icon: CreditCard,
  faqs: [
    {
      q: 'What subscription plans are available?',
      a: 'We offer three plans: Curious (free - $0/month) with 3 coaches and 10 conversations, Clever ($19.99/month) with 15 coaches and 100 conversations plus session history, and Genius ($39.99/month) with unlimited coaches, conversations, and full dashboard access.'
    },
    {
      q: 'How do I upgrade or downgrade my plan?',
      a: 'Visit your profile > Manage Account > Subscription to change your plan. Upgrades take effect immediately, while downgrades apply at your next billing cycle. You\'ll retain access to premium features until then.'
    },
     {
      q: 'Can I get a refund?',
      a: 'Currently, we do not offer refunds on subscription plans. You can cancel your subscription at any time and will retain access to premium features until the end of your current billing period.'
    }
  ]
}
      ]
    },
    'privacy': {
      title: 'Privacy & Security',
      items: [
        {
          title: 'Data Handling & Privacy',
          content: `CleverYou is committed to protecting your privacy and securing your personal data. We employ industry-standard encryption and follow strict data protection protocols to ensure your information remains safe and confidential.`,
          icon: Lock,
          policies: [
            'End-to-end encryption for all user data',
            'No selling or sharing of personal information',
            'GDPR and CCPA compliance',
            'Regular security audits and updates',
            'Transparent data usage policies'
          ]
        },
        {
            title: 'AI-Generated Content Disclaimer',
            content: `CleverYou integrates with advanced AI technology providers to deliver educational content and personalized learning experiences. While these AI systems are highly sophisticated and regularly updated, users should be aware of the following important considerations.`,
            icon: Brain,
            disclaimers: [
              'AI responses are generated by third-party AI providers and may not always be 100% accurate',
              'Always verify important information from authoritative sources',
              'Our AI coaches are educational tools, not replacements for human expertise or professional advice - always consult qualified professionals for specialized guidance',
              'Content is generated in real-time and may vary between sessions',
              'CleverYou curates and personalizes AI interactions but does not control the underlying AI models'
            ]
          },
        {
          title: 'Security Best Practices',
          content: `Follow these security recommendations to keep your CleverYou account safe and secure.`,
          icon: Shield,
          practices: [
            'Use a strong, unique password for your account',
            'Enable two-factor authentication (2FA)',
            'Log out from shared or public devices',
            'Keep your browser and devices updated',
            'Report suspicious activity immediately'
          ]
        }
      ]
    }
  };

  // Search functionality
  const filteredContent = useMemo(() => {
    if (!searchQuery.trim()) {
      return content;
    }

    const query = searchQuery.toLowerCase();
    const filtered: ContentMap = {};

    Object.entries(content).forEach(([sectionId, sectionContent]) => {
      const filteredItems = sectionContent.items.filter(item => {
        // Search in title and content
        if (item.title.toLowerCase().includes(query) || 
            item.content.toLowerCase().includes(query)) {
          return true;
        }

        // Search in steps
        if (item.steps?.some(step => step.toLowerCase().includes(query))) {
          return true;
        }

        // Search in features
        if (item.features?.some(feature => feature.toLowerCase().includes(query))) {
          return true;
        }

        // Search in FAQs
        if (item.faqs?.some(faq => 
          faq.q.toLowerCase().includes(query) || 
          faq.a.toLowerCase().includes(query)
        )) {
          return true;
        }

        // Search in policies
        if (item.policies?.some(policy => policy.toLowerCase().includes(query))) {
          return true;
        }

        // Search in disclaimers
        if (item.disclaimers?.some(disclaimer => disclaimer.toLowerCase().includes(query))) {
          return true;
        }

        // Search in practices
        if (item.practices?.some(practice => practice.toLowerCase().includes(query))) {
          return true;
        }

        return false;
      });

      if (filteredItems.length > 0) {
        filtered[sectionId] = {
          ...sectionContent,
          items: filteredItems
        };
      }
    });

    return filtered;
  }, [searchQuery, content]);

  // Get current section content (filtered or original)
  const currentSectionContent = filteredContent[activeSection] || { title: 'No Results', items: [] };

  const handleSectionSelect = (sectionId: string) => {
    setActiveSection(sectionId);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b ${darkMode ? 'bg-gray-900/95 border-gray-700' : 'bg-white/95 border-gray-200'}`}>
        <div className="px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Mobile menu button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              
              <Link href="/">
              <div className="flex rounded-lg sm:rounded-xl items-center space-x-2 p-2 sm:p-3 bg-slate-500">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-none rounded flex items-center justify-center">
                  <Image src="/icons/cleveryoulogo.png" alt="cleveryou_logo" width={30} height={30}/>
                </div>
                <h1 className="text-lg sm:text-2xl font-bold text-white">
                  CleverYou
                </h1>
              </div>
              </Link>
              
              <span className={`hidden sm:inline text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                Documentation
              </span>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative">
                <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 w-32 sm:w-auto rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                />
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {darkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex relative">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <nav className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 sm:w-72 lg:w-64 transition-transform duration-300 ease-in-out ${
          darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'
        } border-r overflow-y-auto`}>
          <div className="p-4 sm:p-6 space-y-2">
            {/* Mobile header in sidebar */}
            <div className="lg:hidden mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Navigation</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className={`p-1 rounded ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {sections.map((section) => {
              const Icon = section.icon;
              const hasResults = filteredContent[section.id]?.items.length > 0;
              const isSearching = searchQuery.trim() !== '';
              
              return (
                <button
                  key={section.id}
                  onClick={() => handleSectionSelect(section.id)}
                  disabled={isSearching && !hasResults}
                  className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-3 rounded-lg transition-all touch-manipulation ${
                    activeSection === section.id
                      ? 'bg-slate-500 text-white shadow-lg'
                      : isSearching && !hasResults
                      ? darkMode 
                        ? 'text-gray-600 cursor-not-allowed'
                        : 'text-gray-400 cursor-not-allowed'
                      : darkMode
                      ? 'text-gray-300 hover:bg-gray-800 active:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-left">{section.title}</span>
                  {isSearching && hasResults && (
                    <span className="ml-auto text-xs bg-green-500 text-white px-2 py-1 rounded-full flex-shrink-0">
                      {filteredContent[section.id].items.length}
                    </span>
                  )}
                  <ChevronRight className={`w-4 h-4 ml-auto flex-shrink-0 transition-transform ${activeSection === section.id ? 'rotate-90' : ''}`} />
                </button>
              );
            })}
            <Link href="/">
            <button className='mt-5 ml-4 cursor-pointer'>
                <div className="flex items-center space-x-3">
                    <ChevronLeft className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium text-left"> Back Home</span>
                </div>
            </button>
            </Link>
          </div>
          
          {searchQuery.trim() && (
            <div className="mt-6 pt-4 px-4 sm:px-6 border-t border-gray-200 dark:border-gray-700">
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Search results: {Object.values(filteredContent).reduce((acc, section) => acc + section.items.length, 0)} items
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className={`mt-2 text-xs ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors`}
              >
                Clear search
              </button>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className={`flex-1 p-4 sm:p-6 lg:p-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} lg:ml-0`}>
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {currentSectionContent.title}
              </h1>
              {searchQuery.trim() && (
                <p className={`mb-4 text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Showing results for &quot;{searchQuery}&quot;
                </p>
              )}
              <div className={`h-1 w-16 sm:w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full`}></div>
            </div>

            {currentSectionContent.items.length === 0 ? (
              <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">No results found</h3>
                <p className="text-sm sm:text-base">Try adjusting your search terms or browse through the sections.</p>
              </div>
            ) : (
              <div className="space-y-6 sm:space-y-8">
                {currentSectionContent.items.map((item: ContentItem, index: number) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className={`p-4 sm:p-6 rounded-xl border backdrop-blur-sm ${
                        darkMode 
                          ? 'bg-gray-800/50 border-gray-700' 
                          : 'bg-white/70 border-gray-200'
                      } hover:shadow-lg transition-all duration-300`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center space-x-3 sm:flex-col sm:space-x-0 sm:space-y-2">
                          <div className="p-2 rounded-lg bg-blue-500/10 flex-shrink-0">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                          </div>
                          <h3 className="sm:hidden text-lg font-semibold">{item.title}</h3>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="hidden sm:block text-xl font-semibold mb-3">{item.title}</h3>
                          <p className={`mb-4 leading-relaxed text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {item.content}
                          </p>

                          {/* Steps */}
                          {item.steps && (
                            <div className="space-y-2 sm:space-y-3">
                              <h4 className="font-medium text-xs sm:text-sm uppercase tracking-wide opacity-70">Steps:</h4>
                              <ol className="space-y-2 sm:space-y-3">
                                {item.steps.map((step: string, stepIndex: number) => (
                                  <li key={stepIndex} className="flex items-start space-x-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                                      {stepIndex + 1}
                                    </span>
                                    <span className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{step}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                          )}

                          {/* Features */}
                          {item.features && (
                            <div className="space-y-2 sm:space-y-3">
                              <h4 className="font-medium text-xs sm:text-sm uppercase tracking-wide opacity-70">Key Features:</h4>
                              <ul className="grid gap-2 sm:gap-3 sm:grid-cols-2">
                                {item.features.map((feature: string, featureIndex: number) => (
                                  <li key={featureIndex} className="flex items-start space-x-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* FAQs */}
                          {item.faqs && (
                            <div className="space-y-3 sm:space-y-4">
                              {item.faqs.map((faq: { q: string; a: string }, faqIndex: number) => (
                                <div key={faqIndex} className={`p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
                                  <h5 className="font-medium mb-2 flex items-start space-x-2 text-sm sm:text-base">
                                    <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span>{faq.q}</span>
                                  </h5>
                                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {faq.a}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Policies */}
                          {item.policies && (
                            <div className="space-y-2 sm:space-y-3">
                              <h4 className="font-medium text-xs sm:text-sm uppercase tracking-wide opacity-70">Our Commitments:</h4>
                              <ul className="space-y-2">
                                {item.policies.map((policy: string, policyIndex: number) => (
                                  <li key={policyIndex} className="flex items-start space-x-2">
                                    <Shield className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{policy}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Disclaimers */}
                          {item.disclaimers && (
                            <div className="space-y-2 sm:space-y-3">
                              <h4 className="font-medium text-xs sm:text-sm uppercase tracking-wide opacity-70">Important Notes:</h4>
                              <ul className="space-y-2">
                                {item.disclaimers.map((disclaimer: string, disclaimerIndex: number) => (
                                  <li key={disclaimerIndex} className="flex items-start space-x-2">
                                    <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{disclaimer}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Practices */}
                          {item.practices && (
                            <div className="space-y-2 sm:space-y-3">
                              <h4 className="font-medium text-xs sm:text-sm uppercase tracking-wide opacity-70">Best Practices:</h4>
                              <ul className="space-y-2">
                                {item.practices.map((practice: string, practiceIndex: number) => (
                                  <li key={practiceIndex} className="flex items-start space-x-2">
                                    <Star className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{practice}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* CTA Section */}
            <div className={`mt-8 sm:mt-12 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white`}>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Need More Help?</h3>
                <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
                  Can&apos;t find what you&apos;re looking for? Our support team is here to help you get the most out of CleverYou.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link href = "mailto:contact@devtodefy.com?subject=CleverYou Support Inquiry&body=Hello CleverYou Team,%0D%0A%0D%0AI hope this message finds you well. I am reaching out regarding:%0D%0A%0D%0A[Please describe your inquiry or question here]%0D%0A%0D%0AThank you for your time and assistance.%0D%0A%0D%0ABest regards">
                  <button className="px-4 sm:px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 active:bg-gray-200 transition-colors flex items-center justify-center space-x-2 touch-manipulation">
                    <MessageSquare className="w-4 h-4" />
                    <span>Contact Support</span>
                  </button>
                  </Link>
                 {/* <button className="px-4 sm:px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg font-medium hover:bg-white/30 active:bg-white/40 transition-colors flex items-center justify-center space-x-2 touch-manipulation">
                    <BookOpen className="w-4 h-4" />
                    <span>View Tutorials</span>
                  </button>*/}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CleverYouDocs;