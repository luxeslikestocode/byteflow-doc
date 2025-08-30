/** @jsxRuntime classic */

// ALL APPLICATION CODE IS IN THIS FILE.
// This is a single-file React application. All components, pages, types, and constants
// have been consolidated into this file. This is necessary for the browser-based
// Babel transpiler to work correctly, as it cannot handle a multi-file TSX project
// without a build tool like Vite or Webpack. All other .ts and .tsx files have been
// emptied and can be deleted.

// React and ReactDOM are loaded globally via <script> tags in index.html to ensure stability.
declare const React: any;
declare const ReactDOM: any;

import { HashRouter, Routes, Route, Outlet, useLocation, NavLink, Link } from 'react-router-dom';
import { GoogleGenAI, Chat } from "@google/genai";

// --- Heroicons ---
import { 
    HomeIcon, BuildingOffice2Icon, WrenchScrewdriverIcon, BanknotesIcon, UserGroupIcon, 
    PaintBrushIcon, ChartBarIcon, Cog6ToothIcon, DocumentDuplicateIcon, CircleStackIcon, 
    BookOpenIcon, AcademicCapIcon, RocketLaunchIcon, CodeBracketIcon, QuestionMarkCircleIcon, 
    XMarkIcon, Bars3Icon, MagnifyingGlassIcon, ClipboardDocumentIcon, ClipboardDocumentCheckIcon 
} from '@heroicons/react/24/outline';
import { 
    CheckIcon, XMarkIcon as XMarkIconSolid, ClockIcon, UserMinusIcon, BoltIcon, 
    ArrowUpRightIcon, StarIcon, ShieldExclamationIcon, LightBulbIcon, ExclamationTriangleIcon, 
    ChatBubbleBottomCenterTextIcon, ChartPieIcon, PencilSquareIcon, ChevronDownIcon, 
    ArrowDownTrayIcon, HashtagIcon, BriefcaseIcon, BuildingStorefrontIcon, ShoppingCartIcon, 
    CheckBadgeIcon, VideoCameraIcon, ArrowTopRightOnSquareIcon, PaperAirplaneIcon, WrenchIcon,
    BuildingOfficeIcon, UserIcon
} from '@heroicons/react/24/solid';


// === From types.ts ===
interface NavItem {
  name: string;
  path: string;
  icon?: React.ReactNode;
}

interface NavSection {
  title: string;
  items: NavItem[];
}


// === From constants.tsx ===
const PRIMARY_NAV: NavSection[] = [
  {
    title: 'Main',
    items: [
      { name: 'Home', path: '/', icon: <HomeIcon className="w-5 h-5" /> },
      { name: 'Company Overview', path: '/company-overview', icon: <BuildingOffice2Icon className="w-5 h-5" /> },
      { name: 'Services', path: '/services', icon: <WrenchScrewdriverIcon className="w-5 h-5" /> },
      { name: 'Business Model', path: '/business-model', icon: <BanknotesIcon className="w-5 h-5" /> },
      { name: 'Target Market', path: '/target-market', icon: <UserGroupIcon className="w-5 h-5" /> },
      { name: 'Brand Guidelines', path: '/brand-guidelines', icon: <PaintBrushIcon className="w-5 h-5" /> },
      { name: 'Content Strategy', path: '/content-strategy', icon: <ChartBarIcon className="w-5 h-5" /> },
      { name: 'Operations', path: '/operations', icon: <Cog6ToothIcon className="w-5 h-5" /> },
      { name: 'Templates', path: '/templates', icon: <DocumentDuplicateIcon className="w-5 h-5" /> },
      { name: 'Resources', path: '/resources', icon: <CircleStackIcon className="w-5 h-5" /> },
      { name: 'Info Product', path: '/info-product', icon: <AcademicCapIcon className="w-5 h-5" /> },
      { name: 'FAQs', path: '/faqs', icon: <QuestionMarkCircleIcon className="w-5 h-5" /> },
    ],
  },
];

const GUIDES_NAV: NavSection[] = [
    {
      title: 'Strategy Guides',
      items: [
        { name: 'Business Strategy', path: '/guides/business-strategy', icon: <BookOpenIcon className="w-5 h-5" /> },
        { name: 'Marketing & Sales', path: '/guides/marketing-sales', icon: <RocketLaunchIcon className="w-5 h-5" /> },
        { name: 'Product & Systems', path: '/guides/product-systems', icon: <CodeBracketIcon className="w-5 h-5" /> },
      ],
    },
];

const SECONDARY_NAV: NavSection[] = [
    {
      title: 'Secondary Pages',
      items: [
        // Empty for now
      ],
    },
];

const BYTEFLOW_LOGO = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d13f8e81a_Logo.png';

const CHATBOT_SYSTEM_INSTRUCTION = `You are an expert assistant for Byteflow, an AI Automation Agency (AIAA). Your role is to answer team members' questions based ONLY on the comprehensive knowledge base provided below. Be concise, helpful, and stick to the facts from the document. Do not invent information.

### COMPANY OVERVIEW
- **Mission:** Byteflow helps businesses, solopreneurs, and startups optimize operations by automating repetitive tasks, reducing costs, and unlocking new efficiency through AI workflows.
- **Value Proposition:** "Byteflow helps businesses work smarter, not harder — by replacing manual work with AI automation that runs 24/7, error-free, and customized to your needs."
- **Goals:** Save time, reduce staff reliance, increase efficiency, boost scalability.
- **SWOT Analysis:**
  - **Strengths:** High ROI for clients, low operational overhead, B2B appeal, speed to delivery.
  - **Weaknesses:** Technical dependence, client education barrier, potential for service inconsistency, no brand equity yet.
  - **Opportunities:** AI hype curve, solopreneur boom, cost-cutting trends.
  - **Threats:** Market saturation (SMMA to AIAA migration), AI tool instability, enterprise competition.

### CORE SERVICES
1.  **Workflow Automation:** Automating repetitive tasks like data entry, lead follow-ups, and reporting using tools like Zapier and Make.com.
2.  **AI Agents & Chatbots:** Intelligent conversational AI for customer service, sales assistance, and internal productivity.
3.  **AI-Driven Sales Support:** Advanced call analysis, conversion tracking, and script suggestions.
4.  **Business-Specific Automations:** Tailored solutions for content scheduling, invoicing, email campaigns, etc.

### BUSINESS MODEL
- **Pricing:** ROI-focused monthly retainers (Starter: $500-$750, Growth: $1k-$2k, Enterprise: $3k+).
- **Unique Value Proposition:** "Automate your business like the top 1%, without hiring a single employee."
- **Offer:** "I'll set up 1 workflow that saves you [X] time or generates [Y] leads. You only pay if it delivers results."

### TARGET MARKET
- **Primary:** SMBs, Agencies (Marketing, Real Estate), Solopreneurs/Coaches, E-commerce stores.
- **Niche Selection:** A step-by-step process is available for identifying a profitable niche by listing strengths, finding a painful problem, and validating market demand (P.A.I.N. Framework: Problem, Audience, Income, Need).

### BRAND GUIDELINES
- **Colors:** Primary Accent: #0F69F9, Dark gradient background, White text with varying opacities.
- **Personality:** Confident, results-driven, approachable, tech-forward.
- **Tone:** Conversational, direct, results-oriented, problem-focused.

### MARKETING & SALES STRATEGY
- **Content Pillars:** Educational, Problem/Solution, Motivational.
- **Platform Strategy:**
  - **Instagram:** Educational carousels, reels. Strategy covers branding, content mix (2 educational, 1 tutorial, 1 client-focused), and engagement.
  - **LinkedIn:** Long-form posts, case studies for B2B. Strategy covers daily routine, content types, and DM funnel.
  - **Email:** Nurture leads with a sequence (pain-point, use case, behind-the-scenes), weekly value, and clear CTAs.
  - **Short-Form Video (Reels/Shorts):** Build authority and attract leads with formats like "How to automate X in 60 seconds."
- **Lead Magnets:** Offer free PDFs, Notion dashboards, or mini-courses to collect emails.
- **Content Distribution:** A system exists for repurposing content across platforms (YouTube Shorts, TikTok, Instagram Reels, LinkedIn, etc.).

### INFO PRODUCT: AI AUTOMATION AGENCY (AIAA) COURSE
- **Goal:** Teach others to start and run their own AI automation agency.
- **Curriculum:** Modules include Intro to AI Automation, Identifying Niches, Core Tools (Zapier, Make, OpenAI), Building Workflows, Sales, Scaling, and Advanced AI.
- **Delivery:** Self-paced video, live group coaching, 1-on-1 mentorship, community access.
- **Monetization:** One-time purchase, subscription, hybrid, tiered pricing.
- **Tools:** Course hosting (Kajabi), Community (Skool), Email (ConvertKit), Payments (Stripe).

### PRODUCT & SYSTEMS STRATEGY
- **Validation:** A 5-stage process to validate a business idea before building: 1. Identify Problem, 2. Market Research, 3. Test Demand (Landing Page), 4. Pre-Sale Offer, 5. Build MVP.
- **AI Agent System:** A modular AI-powered ecosystem with a "Master Agent" (CEO AI) that supervises "Sub-Agents" (Automated Workers).
  - **Sub-Agents:** Affiliate Agent, Info Product Agent, Client Service Agent, etc.
  - **Tech Stack:** AI Core (GPT-4o), Memory (Pinecone), Backend (FastAPI), Automation (Zapier), CRM (Airtable/Notion).
  - **Roadmap:** Phase 1 (Prototype), Phase 2 (Connect Income Streams), Phase 3 (Central Dashboard), Phase 4 (Public Access).

Your task is to act as a helpful internal assistant. When a team member asks a question, find the relevant information in this document and provide a clear, accurate answer. If the information is not present, state that it is not covered in the knowledge base.`;

// === From components/GlassCard.tsx ===
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}
const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', glow = false }) => {
  const glowClasses = glow ? 'shadow-2xl shadow-[#0F69F9]/25' : 'shadow-xl shadow-black/10';
  return (
    <div
      className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 ${glowClasses} ${className}`}
    >
      {children}
    </div>
  );
};

// === From components/PageTitle.tsx ===
interface PageTitleProps {
    title: string;
    subtitle: string;
}
const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
    return (
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{title}</h1>
            <p className="mt-4 text-lg text-white/70">{subtitle}</p>
        </div>
    );
};

// === From components/StaggeredFadeIn.tsx ===
interface StaggeredFadeInProps {
  children: React.ReactNode;
  className?: string;
}
const StaggeredFadeIn: React.FC<StaggeredFadeInProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

// === From components/Sidebar.tsx ===
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
const NavLinks: React.FC<{ section: NavSection }> = ({ section }) => {
  const location = useLocation();
  return (
    <div>
      <h3 className="px-4 text-xs font-semibold text-white/60 uppercase tracking-wider">{section.title}</h3>
      <ul className="mt-2 space-y-1">
        {section.items.map((item: NavItem) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-x-3 px-4 py-2 text-sm font-medium rounded-md relative ${
                  isActive
                    ? 'text-white bg-white/10'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {item.icon}
              {item.name}
               {location.pathname === item.path && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-[#0F69F9] rounded-r-full shadow-lg shadow-[#0F69F9]/50"></div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
const SidebarContent: React.FC<{onClose?: () => void}> = ({onClose}) => (
    <div className="flex flex-col h-full bg-black/30 backdrop-blur-xl p-4">
        <div className="flex items-center justify-between mb-8">
            <Link to="/" onClick={onClose}>
              <img src={BYTEFLOW_LOGO} alt="Byteflow Logo" className="h-[52px] w-auto" />
            </Link>
        </div>
        <nav className="flex-1 space-y-8 overflow-y-auto">
            {PRIMARY_NAV.map(section => <NavLinks key={section.title} section={section} />)}
            {GUIDES_NAV.map(section => <NavLinks key={section.title} section={section} />)}
            {SECONDARY_NAV.map(section => section.items.length > 0 && <NavLinks key={section.title} section={section} />)}
        </nav>
    </div>
);
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          isOpen ? '' : 'hidden'
        }`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
        <div className="relative w-64 h-full border-r border-white/10">
          <SidebarContent onClose={onClose} />
          <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <aside className="hidden lg:block fixed top-0 left-0 w-64 h-full border-r border-white/10">
        <SidebarContent />
      </aside>
    </>
  );
};

// === From components/Header.tsx ===
interface HeaderProps {
  onMenuClick: () => void;
}
const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [isSearchFocused, setIsSearchFocused] = React.useState(false);
  // Fix: Removed type argument from React.useRef as it's not allowed when React is of type 'any'.
  const searchContainerRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dummyResults = [
    { name: 'Company Overview', path: '/company-overview', icon: <BuildingOffice2Icon className="h-5 w-5 mr-3 text-white/60" /> },
    { name: 'Services', path: '/services', icon: <WrenchScrewdriverIcon className="h-5 w-5 mr-3 text-white/60" /> },
    { name: 'Brand Guidelines', path: '/brand-guidelines', icon: <PaintBrushIcon className="h-5 w-5 mr-3 text-white/60" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 lg:pl-64">
      <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-white/70 hover:text-white"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        <div className="hidden lg:block">
            <Link to="/">
              <img src={BYTEFLOW_LOGO} alt="Byteflow Logo" className="h-[52px] w-auto" />
            </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="relative w-full max-w-xs" ref={searchContainerRef}>
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F69F9]/50 focus:border-[#0F69F9]/50"
              onFocus={() => setIsSearchFocused(true)}
            />
            {isSearchFocused && (
              <div className="absolute top-full mt-2 w-full bg-gray-900/80 backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl shadow-black/20 overflow-hidden">
                <div className="p-2 text-sm text-white/70">
                  <p className="px-2 py-1">Example results...</p>
                  <ul>
                    {dummyResults.map(result => (
                      <li key={result.path}>
                        <Link to={result.path} onClick={() => setIsSearchFocused(false)} className="flex items-center px-3 py-2 rounded-md hover:bg-white/10">
                          {result.icon}
                          {result.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};


// === From components/Chatbot.tsx ===
interface Message {
    role: 'user' | 'model';
    text: string;
}
const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    // Fix: Used type assertion on the initial value for React.useState instead of a type argument, which is invalid when 'React' is 'any'.
    const [messages, setMessages] = React.useState([] as Message[]);
    const [input, setInput] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    // Fix: Used type assertion on the initial value for React.useState instead of a type argument, which is invalid when 'React' is 'any'.
    const [chat, setChat] = React.useState(null as Chat | null);
    // Fix: Removed type argument from React.useRef as it's not allowed when React is of type 'any'.
    const chatHistoryRef = React.useRef(null);

    React.useEffect(() => {
        const initChat = async () => {
            try {
                if (!process.env.API_KEY) {
                     setMessages([{ role: 'model', text: "Chatbot is not configured. An API key is required." }]);
                     return;
                }
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
                
                // Validate the API key and service availability with a lightweight call
                await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: 'Hi' });

                const newChat = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                        systemInstruction: CHATBOT_SYSTEM_INSTRUCTION,
                    },
                });
                setChat(newChat);
                setMessages([{ role: 'model', text: "Hello! I'm the Byteflow assistant. How can I help you navigate our knowledge base today?" }]);
            } catch (error) {
                console.error("Error initializing chatbot:", error);
                let errorMessageText = "Sorry, I'm having trouble connecting. Please try again later.";
                if (error instanceof Error) {
                    const errorMessageString = error.toString();
                    if (errorMessageString.includes('API key not valid') || errorMessageString.includes('400')) {
                        errorMessageText = "Chatbot initialization failed. The API key appears to be invalid. Please contact an administrator.";
                    } else if (errorMessageString.includes('503') || errorMessageString.includes('500')) {
                        errorMessageText = "The AI service is currently unavailable. Please try again in a few moments.";
                    }
                }
                setMessages([{ role: 'model', text: errorMessageText }]);
            }
        };
        initChat();
    }, []);

    React.useEffect(() => {
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chat) return;

        const userMessage: Message = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await chat.sendMessage({ message: input });
            const modelMessage: Message = { role: 'model', text: response.text };
            setMessages(prev => [...prev, modelMessage]);
        } catch (error) {
            console.error("Error sending message:", error);
            let errorMessageText = "I encountered an error. Please try again.";
            if (error instanceof Error) {
                const errorMessageString = error.toString();
                if (errorMessageString.includes('API key not valid') || errorMessageString.includes('400')) {
                    errorMessageText = "There seems to be an issue with the API configuration. Please contact an administrator.";
                } else if (errorMessageString.includes('503') || errorMessageString.includes('500')) {
                    errorMessageText = "The AI service is currently experiencing issues. Please try again in a few moments.";
                }
            }
            const errorMessage: Message = { role: 'model', text: errorMessageText };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 left-6 bg-[#0F69F9] text-white p-4 rounded-full shadow-2xl shadow-blue-500/30 hover:bg-[#0d5ad1] z-50"
                aria-label="Toggle Chatbot"
            >
                <ChatBubbleBottomCenterTextIcon className="h-8 w-8" />
            </button>

            <div className={`fixed bottom-24 left-6 w-[90vw] max-w-md h-[70vh] max-h-[600px] flex-col bg-gray-900/50 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 z-50 ${isOpen ? 'flex' : 'hidden'}`}>
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <h3 className="text-lg font-bold text-white">Byteflow Assistant</h3>
                    <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                        <XMarkIconSolid className="h-6 w-6" />
                    </button>
                </div>

                <div ref={chatHistoryRef} className="flex-1 p-4 space-y-4 overflow-y-auto">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] px-4 py-2 rounded-2xl ${msg.role === 'user' ? 'bg-[#0F69F9] text-white rounded-br-none' : 'bg-white/10 text-white/90 rounded-bl-none'}`}>
                                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                         <div className="flex justify-start">
                            <div className="max-w-[80%] px-4 py-2 rounded-2xl bg-white/10 text-white/90 rounded-bl-none">
                                <p className="text-sm">...</p>
                            </div>
                        </div>
                    )}
                </div>

                <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10">
                    <div className="relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={chat ? "Ask about our services..." : "Chatbot is unavailable."}
                            disabled={!chat || isLoading}
                            className="w-full pl-4 pr-12 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F69F9]/50 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <button type="submit" disabled={!chat || isLoading} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0F69F9] text-white disabled:bg-gray-500 disabled:cursor-not-allowed">
                            <PaperAirplaneIcon className="h-5 w-5" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

// === From components/Layout.tsx ===
const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white/80 font-sans">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="lg:pl-64">
        <div key={location.pathname} className="px-4 sm:px-6 lg:px-8 py-24">
            <Outlet />
        </div>
      </main>
      <Chatbot />
    </div>
  );
};


// === From pages/HomePage.tsx ===
const quickLinks = [
  { name: 'Company Overview', path: '/company-overview', icon: <BuildingOffice2Icon className="h-10 w-10 text-[#0F69F9]" />, description: 'Mission, values, and goals.' },
  { name: 'Services', path: '/services', icon: <WrenchScrewdriverIcon className="h-10 w-10 text-[#0F69F9]" />, description: 'Core service categories.' },
  { name: 'Business Model', path: '/business-model', icon: <BanknotesIcon className="h-10 w-10 text-[#0F69F9]" />, description: 'Pricing and packages.' },
  { name: 'Target Market', path: '/target-market', icon: <UserGroupIcon className="h-10 w-10 text-[#0F69F9]" />, description: 'Audience segments.' },
  { name: 'Brand Guidelines', path: '/brand-guidelines', icon: <PaintBrushIcon className="h-10 w-10 text-[#0F69F9]" />, description: 'Colors, fonts, and tone.' },
  { name: 'Templates', path: '/templates', icon: <DocumentDuplicateIcon className="h-10 w-10 text-[#0F69F9]" />, description: 'Content creation templates.' },
];
const HomePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-center text-center py-24 min-h-[50vh]">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
            Byteflow Knowledge Base
          </h1>
          <p className="mt-4 text-xl text-white/70 max-w-2xl mx-auto">
            Your comprehensive guide to AI automation excellence.
          </p>
        </div>
      </div>
      <StaggeredFadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quickLinks.map((link) => (
          <Link to={link.path} key={link.name} className="block group">
            <GlassCard className="h-full flex flex-col items-start">
              <div className="mb-4">{link.icon}</div>
              <h3 className="text-xl font-bold text-white">{link.name}</h3>
              <p className="mt-1 text-white/70 flex-grow">{link.description}</p>
              <span className="mt-4 text-sm font-semibold text-[#0F69F9] group-hover:text-white">
                Learn More &rarr;
              </span>
            </GlassCard>
          </Link>
        ))}
      </StaggeredFadeIn>
    </div>
  );
};


// === From pages/CompanyOverviewPage.tsx ===
const whatWeDo = [
    "Design custom workflows that replace manual labor",
    "Improve response times and integrate seamlessly",
    "Create intelligent automation that reduces errors",
    "Build AI-powered solutions that work 24/7"
];
const whatWeDont = [
    "We don't just 'install tools'",
    "We don't provide generic solutions",
    "We don't offer one-size-fits-all packages"
];
const goals = [
    { name: 'Save businesses time', icon: <ClockIcon className="h-8 w-8 text-[#0F69F9]" /> },
    { name: 'Reduce reliance on staff', icon: <UserMinusIcon className="h-8 w-8 text-[#0F69F9]" /> },
    { name: 'Increase efficiency', icon: <BoltIcon className="h-8 w-8 text-[#0F69F9]" /> },
    { name: 'Boost scalability', icon: <ArrowUpRightIcon className="h-8 w-8 text-[#0F69F9]" /> },
];
const swot = {
    strengths: ["High ROI for clients", "Low operational overhead", "Strong B2B appeal", "Speed to delivery"],
    weaknesses: ["Technical dependence", "Client education barrier", "Service delivery consistency", "No brand equity (yet)"],
    opportunities: ["AI Hype Curve", "Solopreneur Boom", "Cost-cutting trends", "Education-as-a-product"],
    threats: ["SMMA to AIAA Migration", "AI Tool Instability", "Enterprise AI Companies", "Client Resistance to Change"],
};
const CompanyOverviewPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-20">
      <PageTitle 
        title="Company Overview"
        subtitle="Our mission, values, and what we stand for at Byteflow."
      />
      <section>
        <GlassCard glow={true}>
            <h2 className="text-3xl font-bold text-white mb-4">Mission Statement</h2>
            <p className="text-lg text-white/80 leading-relaxed">
            Byteflow is an <strong className="text-white">AI Automation Agency (AIAA)</strong> that helps businesses, solopreneurs, and startups optimize operations by automating repetitive tasks, reducing costs, and unlocking new efficiency through AI workflows.
            </p>
            <p className="mt-6 text-xl text-white/90 border-l-4 border-[#0F69F9] pl-4 italic">
            "Byteflow helps businesses work smarter, not harder — by replacing manual work with AI automation that runs 24/7, error-free, and customized to your needs."
            </p>
        </GlassCard>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Approach</h2>
        <StaggeredFadeIn className="grid md:grid-cols-2 gap-8">
            <GlassCard className="border-green-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">What We Do</h3>
                <ul className="space-y-3">
                    {whatWeDo.map(item => (
                        <li key={item} className="flex items-start">
                            <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-white/80">{item}</span>
                        </li>
                    ))}
                </ul>
            </GlassCard>
            <GlassCard className="border-red-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">What We Don't Do</h3>
                <ul className="space-y-3">
                    {whatWeDont.map(item => (
                        <li key={item} className="flex items-start">
                            <XMarkIconSolid className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-white/80">{item}</span>
                        </li>
                    ))}
                </ul>
            </GlassCard>
        </StaggeredFadeIn>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">SWOT Analysis</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <GlassCard>
                <h3 className="flex items-center gap-2 text-2xl font-bold text-white mb-4"><StarIcon className="h-6 w-6 text-green-400" />Strengths</h3>
                <ul className="space-y-2 list-disc list-inside text-white/80">
                    {swot.strengths.map(item => <li key={item}>{item}</li>)}
                </ul>
            </GlassCard>
            <GlassCard>
                <h3 className="flex items-center gap-2 text-2xl font-bold text-white mb-4"><ShieldExclamationIcon className="h-6 w-6 text-yellow-400" />Weaknesses</h3>
                <ul className="space-y-2 list-disc list-inside text-white/80">
                    {swot.weaknesses.map(item => <li key={item}>{item}</li>)}
                </ul>
            </GlassCard>
            <GlassCard>
                <h3 className="flex items-center gap-2 text-2xl font-bold text-white mb-4"><LightBulbIcon className="h-6 w-6 text-blue-400" />Opportunities</h3>
                <ul className="space-y-2 list-disc list-inside text-white/80">
                    {swot.opportunities.map(item => <li key={item}>{item}</li>)}
                </ul>
            </GlassCard>
            <GlassCard>
                <h3 className="flex items-center gap-2 text-2xl font-bold text-white mb-4"><ExclamationTriangleIcon className="h-6 w-6 text-red-400" />Threats</h3>
                <ul className="space-y-2 list-disc list-inside text-white/80">
                    {swot.threats.map(item => <li key={item}>{item}</li>)}
                </ul>
            </GlassCard>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Company Goals</h2>
        <StaggeredFadeIn className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map(goal => (
                <GlassCard key={goal.name} className="text-center flex flex-col items-center">
                    {goal.icon}
                    <p className="mt-3 font-semibold text-white">{goal.name}</p>
                </GlassCard>
            ))}
        </StaggeredFadeIn>
      </section>
    </div>
  );
};

// === From pages/ServicesPage.tsx ===
const services = [
  {
    name: 'Workflow Automation',
    icon: <Cog6ToothIcon className="h-16 w-16 text-[#0F69F9]" />,
    description: 'Automating repetitive business tasks to eliminate manual work and boost efficiency across your operations.',
    capabilities: ['Data entry automation', 'Lead follow-up sequences', 'Automated reporting systems', 'Custom integrations'],
    tools: ['Zapier', 'Make.com', 'OpenAI APIs', 'Slack', 'CRMs', 'Google Workspace', 'Notion'],
  },
  {
    name: 'AI Agents & Chatbots',
    icon: <ChatBubbleBottomCenterTextIcon className="h-16 w-16 text-[#0F69F9]" />,
    description: 'Intelligent conversational AI that handles customer interactions and internal processes 24/7.',
    capabilities: ['Customer Service Bots', 'Sales Assistant Bots', 'Internal Productivity Bots', 'Custom training on business data'],
    tools: ['Website Integrations', 'Social Media APIs', 'Slack', 'Microsoft Teams', 'Natural Language Processing Engines'],
  },
  {
    name: 'AI-Driven Sales Support',
    icon: <ChartPieIcon className="h-16 w-16 text-[#0F69F9]" />,
    description: 'Advanced AI sales assistant that enhances sales team performance and provides actionable insights.',
    capabilities: ['Call analysis (tone, objections)', 'Conversion signal tracking', 'Auto-generated meeting notes', 'Dynamic script suggestions'],
    tools: ['Sales CRMs', 'Call Recording Software', 'Sentiment Analysis APIs', 'Performance Analytics Dashboards'],
  },
  {
    name: 'Business-Specific Automations',
    icon: <PencilSquareIcon className="h-16 w-16 text-[#0F69F9]" />,
    description: 'Tailored automation solutions for specific business functions to streamline unique operational needs.',
    capabilities: ['Content scheduling & repurposing', 'Invoicing & financial automations', 'Email drip campaigns', 'Data collection & reporting'],
    tools: ['Social Media Schedulers', 'Accounting Software APIs', 'Email Marketing Platforms', 'Data Visualization Tools'],
  },
];
interface ServiceCardProps {
    service: typeof services[0];
}
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <GlassCard className="flex flex-col">
            <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="mt-4 text-2xl font-bold text-white">{service.name}</h3>
                <p className="mt-2 text-white/70">{service.description}</p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex justify-between items-center text-left text-lg font-semibold text-white"
                >
                    <span>Details</span>
                    <ChevronDownIcon className={`h-6 w-6 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                    className={`overflow-hidden ${isOpen ? '' : 'hidden'}`}
                >
                    <div className="mt-4 space-y-4">
                        <div>
                            <h4 className="font-bold text-white/90">Capabilities:</h4>
                            <ul className="list-disc list-inside mt-2 text-white/70 space-y-1">
                                {service.capabilities.map(cap => <li key={cap}>{cap}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white/90">Tools & Platforms:</h4>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {service.tools.map(tool => (
                                    <span key={tool} className="bg-white/10 text-white/80 text-xs font-medium px-2.5 py-1 rounded-full">{tool}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};
const ServicesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <PageTitle 
        title="Core Services"
        subtitle="Exploring the pillars of our AI automation offerings designed to drive growth and efficiency."
      />
      <StaggeredFadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map(service => (
            <ServiceCard key={service.name} service={service} />
        ))}
      </StaggeredFadeIn>
    </div>
  );
};

// === From pages/BusinessModelPage.tsx ===
const pricingTiers = [
    {
        name: 'Starter',
        price: '$500–$750',
        frequency: '/month',
        description: 'For individuals and small teams getting started with automation.',
        features: ['1–2 workflows', 'Basic support', 'Minor tweaks and adjustments'],
        popular: false,
    },
    {
        name: 'Growth',
        price: '$1,000–$2,000',
        frequency: '/month',
        description: 'For growing businesses looking to scale their operations.',
        features: ['3–5 workflows', 'Priority support', 'Monthly strategy calls', 'Performance optimization'],
        popular: true,
    },
    {
        name: 'Enterprise',
        price: '$3,000+',
        frequency: '/month',
        description: 'For large organizations needing comprehensive automation solutions.',
        features: ['Unlimited workflows', 'Dedicated account management', 'Team training sessions', 'Advanced analytics'],
        popular: false,
    },
];
const ROICalculator: React.FC = () => {
    const [hours, setHours] = React.useState(20);
    const [rate, setRate] = React.useState(25);
    const [cost, setCost] = React.useState(1000);

    const monthlySavings = hours * rate;
    const roi = cost > 0 ? ((monthlySavings - cost) / cost) * 100 : 0;

    return (
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
                <div>
                    <label htmlFor="hours" className="block text-sm font-medium text-white/70">Hours Saved Per Month</label>
                    <div className="mt-1 flex items-center gap-4">
                        <input id="hours" type="range" min="1" max="200" value={hours} onChange={e => setHours(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer" />
                        <span className="font-bold text-white text-lg w-16 text-center">{hours}</span>
                    </div>
                </div>
                <div>
                    <label htmlFor="rate" className="block text-sm font-medium text-white/70">Average Hourly Rate ($)</label>
                     <div className="mt-1 flex items-center gap-4">
                        <input id="rate" type="range" min="10" max="150" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer" />
                        <span className="font-bold text-white text-lg w-16 text-center">${rate}</span>
                    </div>
                </div>
                <div>
                    <label htmlFor="cost" className="block text-sm font-medium text-white/70">Estimated Monthly Cost ($)</label>
                     <div className="mt-1 flex items-center gap-4">
                        <input id="cost" type="range" min="500" max="5000" step="100" value={cost} onChange={e => setCost(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer" />
                        <span className="font-bold text-white text-lg w-20 text-center">${cost.toLocaleString()}</span>
                    </div>
                </div>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-8 border border-white/10">
                <p className="text-white/70">Monthly Time Savings</p>
                <p className="text-4xl font-bold text-[#0F69F9]">{hours} hours</p>
                
                <p className="mt-6 text-white/70">Monthly Cost Savings</p>
                <p className="text-4xl font-bold text-white">${monthlySavings.toLocaleString()}</p>
                
                <p className="mt-6 text-white/70">Estimated Monthly ROI</p>
                <p className={`text-4xl font-bold ${roi >= 0 ? 'text-green-400' : 'text-red-400'}`}>{roi.toFixed(0)}%</p>
            </div>
        </div>
    );
};
const BusinessModelPage: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-20">
            <PageTitle
                title="Business Model & Pricing"
                subtitle="Our pricing is ROI-focused. Clients save more than they spend."
            />
            <section>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Monthly Retainers</h2>
                <StaggeredFadeIn className="grid lg:grid-cols-3 gap-8 items-start">
                    {pricingTiers.map(tier => (
                        <GlassCard 
                            key={tier.name}
                            glow={tier.popular}
                            className={`flex flex-col h-full ${tier.popular ? 'border-[#0F69F9]/50' : ''}`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#0F69F9] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
                            )}
                            <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                            <p className="mt-2 text-white/70">{tier.description}</p>
                            
                            <div className="my-6">
                                <span className="text-5xl font-bold text-white">{tier.price}</span>
                                <span className="text-white/60">{tier.frequency}</span>
                            </div>
                            
                            <ul className="space-y-3 flex-grow">
                                {tier.features.map(feature => (
                                    <li key={feature} className="flex items-start">
                                        <CheckIcon className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-white/80">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`mt-8 w-full py-3 rounded-lg font-semibold ${
                                tier.popular 
                                ? 'bg-[#0F69F9] text-white hover:bg-[#0d5ad1]' 
                                : 'bg-white/10 text-white hover:bg-white/20'
                            }`}>
                                Get Started
                            </button>
                        </GlassCard>
                    ))}
                </StaggeredFadeIn>
            </section>
            <section className="grid md:grid-cols-2 gap-8">
                <GlassCard>
                    <h3 className="text-2xl font-bold text-white mb-4">Unique Value Proposition</h3>
                    <p className="text-lg text-white/90 border-l-4 border-[#0F69F9] pl-4 italic">
                        "Automate your business like the top 1%, without hiring a single employee."
                    </p>
                </GlassCard>
                 <GlassCard>
                    <h3 className="text-2xl font-bold text-white mb-4">Results-First Offer</h3>
                    <p className="text-lg text-white/90 border-l-4 border-[#0F69F9] pl-4 italic">
                        "I'll set up 1 workflow that saves you [X] time or generates [Y] leads. You only pay if it delivers results."
                    </p>
                </GlassCard>
            </section>
            <section>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Value Justification & ROI Calculator</h2>
                <GlassCard glow>
                   <ROICalculator />
                </GlassCard>
            </section>
        </div>
    );
};

// === From pages/BrandGuidelinesPage.tsx ===
const colors = [
    { name: 'Primary Accent', hex: '#0F69F9', description: 'For CTAs, highlights, and key brand elements.' },
    { name: 'Background', hex: 'Gradient', description: 'Dark gradient from gray-900 → black → blue-900.' },
    { name: 'Headings', hex: '#FFFFFF', description: 'For all major headings.' },
    { name: 'Body Text', hex: '#FFFFFF (80%)', description: 'For standard paragraph text.' },
    { name: 'Subtext', hex: '#FFFFFF (70%)', description: 'For captions and less important text.' },
];
const typography = [
    { level: 'Main Heading', size: '48-56px', weight: 'Bold', example: 'Byteflow Knowledge Base' },
    { level: 'Page Title', size: '32-48px', weight: 'Bold', example: 'Brand Guidelines' },
    { level: 'Section Heading', size: '24-32px', weight: 'Bold', example: 'Color Palette' },
    { level: 'Card Title', size: '18-24px', weight: 'Bold', example: 'Primary Accent' },
    { level: 'Body Text', size: '16-20px', weight: 'Regular', example: 'Clean white sans-serif fonts ensure readability.' },
]
const logoDo = [
    "Use official logo files.",
    "Maintain clear space around the logo.",
    "Use on contrasting backgrounds for visibility."
];
const logoDont = [
    "Do not stretch or distort the logo.",
    "Do not change logo colors.",
    "Do not place on busy or low-contrast backgrounds."
];
const ColorSwatch: React.FC<{ color: typeof colors[0] }> = ({ color }) => {
    const [copied, setCopied] = React.useState(false);
    const handleCopy = () => {
        if(color.hex === 'Gradient' || !color.hex.startsWith('#')) return;
        navigator.clipboard.writeText(color.hex);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <GlassCard className="flex flex-col">
            <div className={`h-24 w-full rounded-md mb-4 ${color.hex === '#0F69F9' ? 'bg-[#0F69F9]' : color.hex === '#FFFFFF' ? 'bg-white' : color.hex.includes('(80%)') ? 'bg-white/80' : color.hex.includes('(70%)') ? 'bg-white/70' : 'bg-gradient-to-br from-gray-900 to-black'}`}></div>
            <h4 className="text-lg font-bold text-white">{color.name}</h4>
            <div className="flex items-center justify-between mt-2">
                <p className="text-sm text-white/70 font-mono">{color.hex}</p>
                {color.hex.startsWith('#') && (
                    <button onClick={handleCopy} className="relative text-white/60 hover:text-white">
                        {copied ? <ClipboardDocumentCheckIcon className="h-5 w-5 text-green-400" /> : <ClipboardDocumentIcon className="h-5 w-5" />}
                        {copied && <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-0.5 rounded">Copied!</span>}
                    </button>
                )}
            </div>
            <p className="text-sm text-white/60 mt-2 flex-grow">{color.description}</p>
        </GlassCard>
    );
};
const BrandGuidelinesPage: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-20">
            <PageTitle
                title="Brand Guidelines"
                subtitle="A guide to our visual identity, ensuring consistency across all materials."
            />
            <section>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Color Palette</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {colors.map(color => <ColorSwatch key={color.name} color={color} />)}
                </div>
            </section>
            <section>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Typography System</h2>
                <GlassCard>
                    <div className="space-y-6">
                        {typography.map((type, index) => (
                            <div key={type.level} className={`py-4 ${index !== typography.length - 1 ? 'border-b border-white/10' : ''}`}>
                                <div className="md:flex justify-between items-baseline">
                                    <p className="text-white/70">{type.level} ({type.size}, {type.weight})</p>
                                </div>
                                <p className={`mt-2 ${
                                    index === 0 ? 'text-5xl font-bold text-white' :
                                    index === 1 ? 'text-4xl font-bold text-white' :
                                    index === 2 ? 'text-3xl font-bold text-white' :
                                    index === 3 ? 'text-2xl font-bold text-white' : 'text-lg text-white/80'
                                }`}>{type.example}</p>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </section>
            <section>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Logo Usage</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <GlassCard className="border-green-500/30">
                        <h3 className="text-2xl font-bold text-white mb-4">What To Do</h3>
                        <ul className="space-y-3">
                            {logoDo.map(item => (
                                <li key={item} className="flex items-start">
                                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-white/80">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                    <GlassCard className="border-red-500/30">
                        <h3 className="text-2xl font-bold text-white mb-4">What Not To Do</h3>
                        <ul className="space-y-3">
                            {logoDont.map(item => (
                                <li key={item} className="flex items-start">
                                    <XMarkIconSolid className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-white/80">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </div>
            </section>
            <section>
                <GlassCard className="text-center">
                    <h3 className="text-2xl font-bold text-white">Download Assets</h3>
                    <p className="mt-2 max-w-2xl mx-auto text-white/70">
                        Download our official brand assets, including logos in various formats.
                    </p>
                    <button className="mt-6 inline-flex items-center justify-center gap-x-2 px-6 py-3 rounded-lg font-semibold bg-[#0F69F9] text-white hover:bg-[#0d5ad1]">
                        <ArrowDownTrayIcon className="h-5 w-5" />
                        Download Logos
                    </button>
                </GlassCard>
            </section>
        </div>
    );
};

// === From pages/ContentStrategyPage.tsx ===
const Accordion: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);
    return (
        <GlassCard className="overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left text-xl font-bold text-white"
            >
                <span>{title}</span>
                <ChevronDownIcon className={`h-6 w-6 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`${isOpen ? '' : 'hidden'}`}>
                <div className="mt-4 pt-4 border-t border-white/10 text-white/80 space-y-4">
                    {children}
                </div>
            </div>
        </GlassCard>
    );
};
const ContentStrategyPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <PageTitle
                title="Content & Marketing Strategy"
                subtitle="Our approach to building authority, generating leads, and engaging our community."
            />
            <div className="space-y-8">
                <Accordion title="Instagram Marketing Strategy" defaultOpen>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Goal:</strong> Look modern, trustworthy, and easy to remember.</li>
                        <li><strong>Tone of Voice:</strong> Clear, direct, and practical. Avoid hype.</li>
                        <li><strong>Bio Structure:</strong>
                            <ul className="list-['-_'] list-inside pl-4">
                                <li><strong>Line 1:</strong> Who you help + main benefit.</li>
                                <li><strong>Line 2:</strong> Proof or authority statement.</li>
                                <li><strong>Line 3:</strong> Strong CTA + link to landing page.</li>
                            </ul>
                        </li>
                        <li><strong>Weekly Post Mix:</strong> 2 educational carousels, 1 tutorial reel, 1 client-focused reel, 2 story sequences, 1 inspirational post.</li>
                         <li><strong>Content Style:</strong> Short, bold headlines; reels under 30s with captions; always include a CTA.</li>
                    </ul>
                </Accordion>
                <Accordion title="Engagement Tactics">
                    <div>
                        <h4 className="font-bold text-white">Daily:</h4>
                        <ul className="list-disc list-inside pl-4 space-y-1 mt-1">
                            <li>Comment on posts from target audience accounts.</li>
                            <li>Reply to comments on your posts within 1 hour.</li>
                            <li>Engage with people who vote in your story polls.</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-bold text-white mt-4">Weekly:</h4>
                        <ul className="list-disc list-inside pl-4 space-y-1 mt-1">
                            <li>DM new followers with a value-first message (e.g., free checklist).</li>
                            <li>Join 2-3 niche Instagram Lives and ask questions.</li>
                            <li>Collaborate with one micro-influencer.</li>
                        </ul>
                    </div>
                </Accordion>
                <Accordion title="Hashtag Strategy & Funnel">
                     <div>
                        <h4 className="font-bold text-white">Post Hashtags:</h4>
                        <ul className="list-disc list-inside pl-4 space-y-1 mt-1">
                            <li>5-8 niche hashtags (#AIAutomation, #BusinessAutomation).</li>
                            <li>2-3 location-based hashtags (#SmallBusinessUSA).</li>
                            <li>2-4 industry hashtags (#EcommerceTools, #StartupGrowth).</li>
                            <li>Rotate hashtags every week to avoid being flagged as spam.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mt-4">Educational Resources Funnel:</h4>
                        <ul className="list-disc list-inside pl-4 space-y-1 mt-1">
                            <li>Offer free lead magnets in posts and stories.</li>
                            <li>Link to a simple landing page with a waitlist or free guide.</li>
                             <li>Use Instagram Highlights for: "Start Here", "Automation Tips", and "Results".</li>
                        </ul>
                    </div>
                </Accordion>
                 <Accordion title="Measuring Growth Metrics">
                     <div>
                        <h4 className="font-bold text-white">Weekly:</h4>
                        <ul className="list-disc list-inside pl-4 space-y-1 mt-1">
                            <li>Follower growth rate.</li>
                            <li>Post saves & shares.</li>
                            <li>Story poll participation rate.</li>
                            <li>Link clicks to your landing page.</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-bold text-white mt-4">Monthly:</h4>
                        <ul className="list-disc list-inside pl-4 space-y-1 mt-1">
                            <li>Leads generated from Instagram.</li>
                            <li>Engagement rate (likes + comments + shares + followers).</li>
                            <li>Which content type drove the most profile visits.</li>
                        </ul>
                    </div>
                </Accordion>
            </div>
        </div>
    );
};

// === From pages/TemplatesPage.tsx ===
const TemplatesPage: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <PageTitle
                title="Content Creation Templates"
                subtitle="Explore our official content templates directly in our Figma design file."
            />
            <GlassCard>
                <h3 className="text-2xl font-bold text-white mb-4">Live Figma Templates</h3>
                <p className="text-white/70 mb-6">
                    Our content templates are the single source of truth for all social media and content assets. Click the button below to access them.
                </p>
                <a 
                  href="https://www.figma.com/design/JNKbZzIYcfkHgeFN28sNLD/Byte-flow?node-id=0-1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-x-2 px-6 py-3 rounded-lg font-semibold bg-[#0F69F9] text-white hover:bg-[#0d5ad1]"
                >
                  <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  Open Templates in Figma
                </a>
            </GlassCard>
        </div>
    );
};

// === From pages/ComingSoonPage.tsx ===
interface ComingSoonPageProps {
    title: string;
}
const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ title }) => {
    return (
        <div className="max-w-4xl mx-auto">
            <PageTitle 
                title={title}
                subtitle={`Content for the ${title.toLowerCase()} section is currently being developed.`}
            />
            <GlassCard>
                <div className="text-center">
                    <WrenchIcon className="h-16 w-16 text-[#0F69F9] mx-auto" />
                    <h2 className="mt-4 text-3xl font-bold text-white">Coming Soon!</h2>
                    <p className="mt-2 text-white/70">
                        We are working hard to bring you this section. Please check back later for updates.
                    </p>
                </div>
            </GlassCard>
        </div>
    );
};

// === From pages/TargetMarketPage.tsx ===
const primaryMarkets = [
  {
    name: 'Small & Medium Businesses (SMBs)',
    icon: <BuildingStorefrontIcon className="h-10 w-10 text-[#0F69F9]" />,
    painPoints: 'Overstaffed with repetitive tasks, high labor costs',
    opportunity: 'Immediate efficiency gains and cost reduction',
  },
  {
    name: 'Agencies',
    icon: <BuildingOfficeIcon className="h-10 w-10 text-[#0F69F9]" />,
    painPoints: 'Manual client management, repetitive reporting',
    opportunity: 'Scale operations without proportional staff increases',
  },
  {
    name: 'Solopreneurs & Coaches',
    icon: <UserIcon className="h-10 w-10 text-[#0F69F9]" />,
    painPoints: 'Wearing too many hats, limited time for growth activities',
    opportunity: 'Scale business without hiring employees',
  },
  {
    name: 'E-commerce Stores',
    icon: <ShoppingCartIcon className="h-10 w-10 text-[#0F69F9]" />,
    painPoints: 'Order processing, customer inquiries, inventory management',
    opportunity: 'Streamlined operations and improved customer experience',
  },
];
const marketCharacteristics = [
    "Businesses ready to embrace technology",
    "Companies experiencing growth pains",
    "Organizations with repetitive, manual processes",
    "Budget for operational improvements ($500-$3,000+ monthly)",
];
const TargetMarketPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-20">
      <PageTitle
        title="Target Market"
        subtitle="Identifying the key audience segments we serve and their specific needs."
      />
      <section>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Primary Markets</h2>
        <StaggeredFadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {primaryMarkets.map((market) => (
            <GlassCard key={market.name} className="flex flex-col">
              <div className="flex items-center gap-4">
                {market.icon}
                <h3 className="text-2xl font-bold text-white">{market.name}</h3>
              </div>
              <div className="mt-6 border-t border-white/10 pt-6 space-y-4">
                <div>
                    <h4 className="font-semibold text-white/90">Pain Points:</h4>
                    <p className="text-white/70">{market.painPoints}</p>
                </div>
                <div>
                    <h4 className="font-semibold text-white/90">Opportunity:</h4>
                    <p className="text-white/70">{market.opportunity}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </StaggeredFadeIn>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Ideal Client Profile</h2>
        <GlassCard glow>
          <ul className="space-y-4">
            {marketCharacteristics.map((char) => (
              <li key={char} className="flex items-start text-lg">
                <CheckBadgeIcon className="h-7 w-7 text-[#0F69F9] mr-4 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">{char}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>
    </div>
  );
};

// === From pages/OperationsPage.tsx ===
const slackChannels = [
    { name: '#general', description: 'Company announcements and updates', icon: <HashtagIcon className="h-6 w-6 text-white/50" /> },
    { name: '#client-projects', description: 'Active workflow discussions and updates', icon: <BriefcaseIcon className="h-6 w-6 text-white/50" /> },
    { name: '#ideas', description: 'Research, brainstorming, and future opportunities', icon: <LightBulbIcon className="h-6 w-6 text-white/50" /> },
    { name: '#sales-pipeline', description: 'Lead tracking and prospect management', icon: <UserGroupIcon className="h-6 w-6 text-white/50" /> },
    { name: '#learning', description: 'Documentation, resources, and skill development', icon: <AcademicCapIcon className="h-6 w-6 text-white/50" /> },
];
const OperationsPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-20">
            <PageTitle
                title="Internal Operations"
                subtitle="Our internal tools, processes, and workflows for seamless collaboration."
            />
            <section>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Communication Tools</h2>
                <GlassCard>
                    <h3 className="text-2xl font-bold text-white mb-2">Slack Structure</h3>
                    <p className="text-white/70 mb-6">Our primary tool for daily communication. Please adhere to the channel guidelines to keep conversations organized and efficient.</p>
                    <div className="space-y-4">
                        {slackChannels.map(channel => (
                            <div key={channel.name} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                                {channel.icon}
                                <div>
                                    <p className="font-mono font-semibold text-white">{channel.name}</p>
                                    <p className="text-sm text-white/60">{channel.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </section>
            <section>
                <GlassCard glow>
                    <h3 className="text-2xl font-bold text-white mb-4">Project Management & Documentation</h3>
                    <div className="space-y-4 text-white/80">
                         <p>While Slack is for day-to-day chat, <strong className="text-white">Notion</strong> serves as our central hub for long-term documentation.</p>
                         <ul className="list-disc list-inside space-y-2 pl-2">
                             <li><strong>Client Database:</strong> Contact information and project history.</li>
                             <li><strong>SOPs:</strong> Standard operating procedures and workflows.</li>
                             <li><strong>Content Planning:</strong> Editorial calendars and content strategies.</li>
                             <li><strong>Knowledge Base:</strong> This very site is powered by our central knowledge repository.</li>
                         </ul>
                         <p className="mt-4 text-white/60 italic">Regular client check-ins, clear project timelines, and thorough quality assurance are managed through a combination of these tools to ensure project success.</p>
                    </div>
                </GlassCard>
            </section>
        </div>
    );
};

// === From pages/ResourcesPage.tsx ===
const resourceCategories = [
  {
    title: 'Workflow Automation & Integrations',
    tools: [
      { name: 'Zapier', url: 'https://zapier.com/', description: 'Connect apps and automate workflows.' },
      { name: 'Make (Integromat)', url: 'https://www.make.com/en', description: 'Visual automation builder for complex tasks.' },
      { name: 'IFTTT', url: 'https://ifttt.com/', description: 'Simple triggers and automation between apps.' },
    ]
  },
  {
    title: 'AI & Marketing Automation',
    tools: [
      { name: 'HubSpot', url: 'https://www.hubspot.com/', description: 'CRM with marketing automation.' },
      { name: 'ActiveCampaign', url: 'https://www.activecampaign.com/', description: 'Email marketing & automation.' },
      { name: 'Mailchimp', url: 'https://mailchimp.com/', description: 'Email campaigns and automated workflows.' },
      { name: 'Buffer', url: 'https://buffer.com/', description: 'Automate video/content scheduling.' },
    ]
  },
  {
    title: 'Project & Workflow Management',
    tools: [
      { name: 'Notion', url: 'https://www.notion.so/', description: 'Project tracking and workflow docs.' },
      { name: 'Trello', url: 'https://trello.com/', description: 'Kanban boards for team tasks.' },
      { name: 'Asana', url: 'https://asana.com/', description: 'Task & workflow management.' },
    ]
  },
  {
    title: 'AI Productivity & Automation Tools',
    tools: [
      { name: 'OpenAI', url: 'https://openai.com/', description: 'AI models for text, code, and more.' },
      { name: 'ChatGPT', url: 'https://chat.openai.com/', description: 'AI assistant for text generation & automation ideas.' },
      { name: 'Phantombuster', url: 'https://phantombuster.com/', description: 'Automate social media and web tasks.' },
      { name: 'Pipedream', url: 'https://pipedream.com/', description: 'Connect APIs and automate workflows programmatically.' },
    ]
  }
];
const ResourcesPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-20">
      <PageTitle
        title="Automation Resources"
        subtitle="A curated list of websites and tools for workflow automation, AI, and marketing."
      />
      <section>
        <GlassCard glow>
            <h3 className="text-2xl font-bold text-white mb-4">
              Byteflow Figma Design System
            </h3>
            <p className="text-white/70 mb-6">
              The single source of truth for all our design components, styles, and guidelines. Click the button below to open the file in a new tab.
            </p>
            <a 
              href="https://www.figma.com/design/JNKbZzIYcfkHgeFN28sNLD/Byte-flow?node-id=0-1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-x-2 px-6 py-3 rounded-lg font-semibold bg-[#0F69F9] text-white hover:bg-[#0d5ad1]"
            >
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              Open Design System
            </a>
        </GlassCard>
      </section>
      <section>
        <StaggeredFadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {resourceCategories.map(category => (
            <GlassCard key={category.title}>
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">{category.title}</h3>
              <ul className="space-y-4">
                {category.tools.map(tool => (
                  <li key={tool.name}>
                    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 p-3 rounded-lg hover:bg-white/5">
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 text-white/40 mt-1 flex-shrink-0 group-hover:text-[#0F69F9]" />
                      <div>
                        <p className="font-semibold text-white group-hover:text-[#0F69F9]">{tool.name}</p>
                        <p className="text-sm text-white/60">{tool.description}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </StaggeredFadeIn>
      </section>
    </div>
  );
};

// === From pages/InfoProductPage.tsx ===
const curriculum = [
    { module: "Introduction to AI Automation", topics: "What it is, why it's the next big agency model" },
    { module: "Identifying Profitable Niches", topics: "How to pick clients and validate pain points" },
    { module: "Core AI Tools & Tech Stack", topics: "Zapier, Make, OpenAI, Langchain basics" },
    { module: "Building Your First Workflow", topics: "Live demo: lead capture → CRM → follow-up" },
    { module: "Sales & Client Acquisition", topics: "Outreach templates, pitches, closing deals" },
    { module: "Scaling Your Agency", topics: "SOPs, team building, outsourcing" },
    { module: "Productizing Your Services", topics: "Info products, templates, coaching offers" },
    { module: "Advanced AI Techniques", topics: "Prompt engineering, multi-agent systems" },
];
const deliveryFormats = [
    { name: "Self-Paced Video Course", description: "Recorded lessons + downloads" },
    { name: "Live Group Coaching", description: "Weekly calls + Q&A sessions" },
    { name: "1-on-1 Mentorship", description: "Personalized help for premium clients" },
    { name: "Community Access", description: "Private Slack, Discord, or Skool group" },
    { name: "Workbooks & Templates", description: "Automations, email scripts, pitch decks" },
];
const monetization = [
    { model: "One-time Purchase", pros: "Easy to market", cons: "No recurring revenue" },
    { model: "Subscription", pros: "Predictable revenue", cons: "Requires ongoing value" },
    { model: "Hybrid", pros: "Best of both worlds", cons: "More work to deliver" },
    { model: "Tiered Pricing", pros: "Broad audience", cons: "Complexity in messaging" },
];
const infoProductTools = [
    { func: "Course Hosting", examples: "Kajabi, Teachable, Podia" },
    { func: "Community", examples: "Skool, Discord, Circle" },
    { func: "Email Automation", examples: "ConvertKit, ActiveCampaign" },
    { func: "Payment & Sales", examples: "Stripe, PayPal, Gumroad" },
];
const InfoProductPage: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-20">
            <PageTitle
                title="AI Automation Agency (AIAA) Course"
                subtitle="Turning knowledge and agency experience into a scalable info product that teaches others how to start and run their own AI automation agency."
            />
            <section>
                <GlassCard glow>
                    <div className="flex items-center gap-4">
                        <BookOpenIcon className="h-10 w-10 text-[#0F69F9]" />
                        <h2 className="text-3xl font-bold text-white">Curriculum Design</h2>
                    </div>
                    <p className="mt-2 mb-6 text-white/70">Focus on actionable, step-by-step content. Example modules:</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-white/5 text-sm text-white/80">
                                <tr>
                                    <th className="p-4 rounded-tl-lg">Module</th>
                                    <th className="p-4 rounded-tr-lg">Topics Covered</th>
                                </tr>
                            </thead>
                            <tbody>
                                {curriculum.map((item, index) => (
                                    <tr key={item.module} className={`border-t border-white/10 ${index === curriculum.length -1 ? '' : ''}`}>
                                        <td className="p-4 font-semibold text-white">{item.module}</td>
                                        <td className="p-4 text-white/70">{item.topics}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </GlassCard>
            </section>
            <section className="grid md:grid-cols-2 gap-8">
                <GlassCard>
                    <div className="flex items-center gap-4 mb-4">
                        <VideoCameraIcon className="h-8 w-8 text-[#0F69F9]" />
                        <h2 className="text-2xl font-bold text-white">Coaching Delivery</h2>
                    </div>
                    <ul className="space-y-3 list-disc list-inside text-white/80">
                        {deliveryFormats.map(item => <li key={item.name}><strong className="text-white/90">{item.name}:</strong> {item.description}</li>)}
                    </ul>
                </GlassCard>
                <GlassCard>
                     <div className="flex items-center gap-4 mb-4">
                        <BriefcaseIcon className="h-8 w-8 text-[#0F69F9]" />
                        <h2 className="text-2xl font-bold text-white">Tech & Tools</h2>
                    </div>
                    <ul className="space-y-3 text-white/80">
                        {infoProductTools.map(item => <li key={item.func}><strong className="text-white/90">{item.func}:</strong> {item.examples}</li>)}
                    </ul>
                </GlassCard>
            </section>
             <section>
                <GlassCard>
                    <div className="flex items-center gap-4 mb-4">
                        <UserGroupIcon className="h-10 w-10 text-[#0F69F9]" />
                        <h2 className="text-3xl font-bold text-white">Monetization Models</h2>
                    </div>
                     <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-white/5 text-sm text-white/80">
                                <tr>
                                    <th className="p-4 rounded-tl-lg">Model</th>
                                    <th className="p-4">Pros</th>
                                    <th className="p-4 rounded-tr-lg">Cons</th>
                                </tr>
                            </thead>
                            <tbody>
                                {monetization.map(item => (
                                    <tr key={item.model} className="border-t border-white/10">
                                        <td className="p-4 font-semibold text-white">{item.model}</td>
                                        <td className="p-4 text-green-400/80">{item.pros}</td>
                                        <td className="p-4 text-yellow-400/80">{item.cons}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </GlassCard>
            </section>
        </div>
    );
};

// === From pages/BusinessStrategyGuidePage.tsx ===
const GuideSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section className="mb-16">
        <GlassCard>
            <h2 className="text-3xl font-bold text-white border-b-2 border-[#0F69F9] pb-3 mb-6 inline-block">{title}</h2>
            <div className="space-y-4 text-white/80">
                {children}
            </div>
        </GlassCard>
    </section>
);
const BusinessStrategyGuidePage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <PageTitle
                title="Guide: Business Strategy"
                subtitle="A comprehensive guide to defining our niche, understanding our market position, and planning for scalable growth."
            />
            <GuideSection title="Defining a Business Niche">
                <h4 className="text-xl font-bold text-white mb-2 mt-4">What is a Niche?</h4>
                <p>A niche is a specific segment of a larger market with unique needs. Instead of serving everyone, we solve a clear, focused problem for a specific group of people.</p>
                <blockquote className="border-l-4 border-white/30 pl-4 italic my-4">"Trying to sell to everyone = selling to no one."</blockquote>
                <h4 className="text-xl font-bold text-white mb-2 mt-4">Why Niche Selection is Crucial</h4>
                <ul className="list-disc list-inside space-y-1 pl-2">
                    <li><strong className="text-white/90 font-semibold">Faster Trust-Building:</strong> Clients feel you "get" them.</li>
                    <li><strong className="text-white/90 font-semibold">Streamlined Delivery:</strong> Easier to templatize workflows.</li>
                    <li><strong className="text-white/90 font-semibold">Better Content Marketing:</strong> You speak their exact language.</li>
                    <li><strong className="text-white/90 font-semibold">Higher Close Rates:</strong> You solve a specific pain.</li>
                </ul>
                 <h4 className="text-xl font-bold text-white mb-2 mt-4">P.A.I.N. Validation Framework</h4>
                <p>Use this framework to validate your chosen niche:</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                    <li><strong className="text-white/90 font-semibold">P</strong>roblem: Do they have a painful, costly problem?</li>
                    <li><strong className="text-white/90 font-semibold">A</strong>udience: Is there a clear, reachable group of people?</li>
                    <li><strong className="text-white/90 font-semibold">I</strong>ncome: Do they have money to pay you?</li>
                    <li><strong className="text-white/90 font-semibold">N</strong>eed: Is it a must-have, not a "nice-to-have"?</li>
                </ul>
            </GuideSection>
            <GuideSection title="SWOT Analysis">
                <p>A strategic overview of our internal strengths and weaknesses, and external opportunities and threats.</p>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <h4 className="text-xl font-bold text-white mb-2">Strengths</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>High ROI for Clients</li>
                            <li>Low Operational Overhead</li>
                            <li>B2B Appeal</li>
                            <li>Speed to Delivery</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-2">Weaknesses</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Technical Dependence</li>
                            <li>Client Education Barrier</li>
                            <li>Service Delivery Consistency</li>
                            <li>No Brand Equity (yet)</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="text-xl font-bold text-white mb-2">Opportunities</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>AI Hype Curve</li>
                            <li>Solopreneur Boom</li>
                            <li>Cost-Cutting Trend</li>
                            <li>Education-as-a-product</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="text-xl font-bold text-white mb-2">Threats</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>SMMA to AIAA Migration</li>
                            <li>AI Tool Instability</li>
                            <li>Enterprise AI Companies</li>
                            <li>Client Resistance to Change</li>
                        </ul>
                    </div>
                </div>
            </GuideSection>
            <GuideSection title="Lean Business Plan Outline">
                <p>A streamlined, scalable business plan based on the Lean Startup model.</p>
                <ol className="list-decimal list-inside space-y-4 mt-4">
                    <li><strong className="text-white/90 font-semibold">Problem:</strong> Small businesses waste time, money, and energy on repetitive tasks.</li>
                    <li><strong className="text-white/90 font-semibold">Solution:</strong> Deliver done-for-you AI workflow automation systems using tools like Zapier, OpenAI, and Notion.</li>
                    <li><strong className="text-white/90 font-semibold">Target Market:</strong> Real estate agents, coaches/consultants, e-commerce brands, course creators.</li>
                    <li><strong className="text-white/90 font-semibold">Business Model:</strong> Service Tiers (Starter, Growth, Pro), Monthly Retainers, and Add-ons.</li>
                    <li><strong className="text-white/90 font-semibold">Unique Value Proposition:</strong> "Automate your business like the top 1% — without hiring a single employee."</li>
                    <li><strong className="text-white/90 font-semibold">Go-To-Market Strategy:</strong> Cold email + LinkedIn DM, short-form content, webinars, and strategic partnerships.</li>
                    <li><strong className="text-white/90 font-semibold">Revenue Goals:</strong> Year 1: $10K/month. Year 2: $30K+/month.</li>
                    <li><strong className="text-white/90 font-semibold">Scaling Plan:</strong> Hire ops/builders after 10 clients, build internal automations, launch online course.</li>
                </ol>
            </GuideSection>
        </div>
    );
};

// === From pages/MarketingSalesGuidePage.tsx ===
const MarketingSalesGuidePage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <PageTitle
                title="Guide: Marketing & Sales"
                subtitle="A deep dive into our strategies for content, outreach, lead generation, and client acquisition across key platforms."
            />
            <GuideSection title="Email Campaign Strategy">
                <h4 className="text-xl font-bold text-white mb-2">Objectives</h4>
                <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>Nurture cold leads</li>
                    <li>Convert warm leads into discovery calls or product purchases</li>
                    <li>Educate and build trust</li>
                </ul>
                <h4 className="text-xl font-bold text-white mb-2 mt-4">Funnel</h4>
                <p><strong className="text-white/90 font-semibold">Lead Magnet → Welcome Sequence → Weekly Value → CTA</strong></p>
                 <h4 className="text-xl font-bold text-white mb-2 mt-4">Welcome Sequence Example (Day 1-3)</h4>
                <ul className="list-disc list-inside space-y-1 pl-2">
                    <li><strong className="text-white/90 font-semibold">Email 1:</strong> "You're wasting time on this right now" (pain-point based)</li>
                    <li><strong className="text-white/90 font-semibold">Email 2:</strong> "Here's how AI automations save 20+ hours per week" (use case)</li>
                    <li><strong className="text-white/90 font-semibold">Email 3:</strong> "Behind the scenes: real client workflow breakdown"</li>
                </ul>
                 <h4 className="text-xl font-bold text-white mb-2 mt-4">Tools</h4>
                <p>ConvertKit, Beehiiv, MailerLite, Instantly (for cold outreach)</p>
            </GuideSection>
            <GuideSection title="Short-Form Video Strategy (Reels, Shorts)">
                <h4 className="text-xl font-bold text-white mb-2">Goals</h4>
                <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>Build authority</li>
                    <li>Drive traffic to landing page</li>
                    <li>Attract organic cold leads</li>
                </ul>
                 <h4 className="text-xl font-bold text-white mb-2 mt-4">Formats</h4>
                <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>"How to automate X" in 60 seconds</li>
                    <li>Before/After automations</li>
                    <li>3 things wasting your time as a solopreneur</li>
                    <li>Watch me build a workflow in 30 sec</li>
                </ul>
                 <h4 className="text-xl font-bold text-white mb-2 mt-4">Tools</h4>
                <p>CapCut, Loom, Descript, OBS Studio</p>
            </GuideSection>
            <GuideSection title="LinkedIn Outreach & Authority Building">
                 <h4 className="text-xl font-bold text-white mb-2">Goals</h4>
                <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>High-ticket client acquisition</li>
                    <li>Warm audience from B2B niche</li>
                </ul>
                <h4 className="text-xl font-bold text-white mb-2 mt-4">Daily Routine</h4>
                <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>Connect with 20 new ideal leads per day</li>
                    <li>Comment meaningfully on 5 relevant posts</li>
                    <li>Post 3x/week on AI automation value</li>
                </ul>
                <h4 className="text-xl font-bold text-white mb-2 mt-4">DM Funnel</h4>
                <ol className="list-decimal list-inside space-y-1 pl-2">
                    <li><strong className="text-white/90 font-semibold">1st Message:</strong> "Saw you run X. Curious if you've tried using AI workflows to handle [problem]?"</li>
                    <li>Qualify with 2-3 follow-ups</li>
                    <li>Book call or send case study</li>
                </ol>
                <h4 className="text-xl font-bold text-white mb-2 mt-4">Tools</h4>
                <p>Apollo, Clay, Taplio, Expandi</p>
            </GuideSection>
            <GuideSection title="Lead Magnets (PDFs, Templates, Tools)">
                 <h4 className="text-xl font-bold text-white mb-2">Goals</h4>
                <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>Collect emails</li>
                    <li>Segment audience</li>
                    <li>Position yourself as the expert</li>
                </ul>
                 <h4 className="text-xl font-bold text-white mb-2 mt-4">Offers</h4>
                <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>Free PDF: “10 AI workflows every solopreneur should set up”</li>
                    <li>Notion dashboard: Daily task automation planner</li>
                    <li>Free mini-course: “Automate your first client funnel in 24 hours"</li>
                    <li>Case study deck: "How we helped a client close 3 deals a week with 1 VA + GPT-4"</li>
                </ul>
            </GuideSection>
             <GuideSection title="Content Distribution System">
                <p>The core philosophy is to build once and repurpose everywhere. One workflow can become a video, blog post, thread, carousel, and email.</p>
                <div className="overflow-x-auto">
                    <table className="w-full mt-4 text-left border border-white/10 rounded-lg">
                        <thead className="bg-white/5 text-sm text-white/80">
                            <tr>
                                <th className="p-3 rounded-tl-lg">Platform</th>
                                <th className="p-3">Format</th>
                                <th className="p-3 rounded-tr-lg">CTA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-white/10"><td className="p-3">YouTube Shorts</td><td className="p-3">AI workflow breakdown</td><td className="p-3">Email signup or call link</td></tr>
                            <tr className="border-t border-white/10"><td className="p-3">Instagram Reels</td><td className="p-3">Solopreneur problems + tips</td><td className="p-3">Info product or free guide</td></tr>
                            <tr className="border-t border-white/10"><td className="p-3">LinkedIn</td><td className="p-3">Case studies, carousels</td><td className="p-3">Book call</td></tr>
                            <tr className="border-t border-white/10"><td className="p-3">Twitter/X</td><td className="p-3">Threads, tips</td><td className="p-3">DM or lead magnet</td></tr>
                        </tbody>
                    </table>
                </div>
            </GuideSection>
        </div>
    );
};

// === From pages/ProductSystemsGuidePage.tsx ===
const ProductSystemsGuidePage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <PageTitle
                title="Guide: Product & Systems"
                subtitle="A guide to validating new ideas and the architecture of our AI Agent System for creating scalable, multi-stream income."
            />
            <GuideSection title="Validating a Business Idea (5 Stages)">
                <p>Validation is crucial. Don't build before testing the market. This process prevents wasting months building something no one wants and gives you real user feedback early.</p>
                <ol className="list-decimal list-inside space-y-3 mt-4">
                    <li>
                        <strong className="text-white/90 font-semibold">Identify the Problem & Target User:</strong> Start with a clear pain point. What repetitive task is your audience wasting time on? If they're using a manual workaround, there's a market.
                    </li>
                    <li>
                        <strong className="text-white/90 font-semibold">Do Market Research (Qualitative + Quantitative):</strong> Talk to people. Interview 5-10 target users. Ask: "What's the most annoying part of [X process]?"
                    </li>
                    <li>
                        <strong className="text-white/90 font-semibold">Test Demand with a Pre-Product Landing Page:</strong> Build a 1-page MVP website (using Carrd or Framer) with a hero section, problem/solution, and a CTA to "Join waitlist". If you get 50-100 interested sign-ups, you've got proof of interest.
                    </li>
                    <li>
                        <strong className="text-white/90 font-semibold">Build a Pre-Sale Offer (Optional):</strong> If confident, test with a paid MVP (e.g., $97 course, $497 setup fee). This validates both the idea and your ability to monetize it.
                    </li>
                    <li>
                        <strong className="text-white/90 font-semibold">Build Your MVP (Minimum Viable Product):</strong> Only now do you begin building. For a service, use templates, not custom builds at first. For an app, use no-code tools and build only the core "must-have" function.
                    </li>
                </ol>
            </GuideSection>
            <GuideSection title="AI Agent System Structure">
                <p>This outlines how to build a modular AI-powered ecosystem that automates revenue across different streams. It is composed of a Master Agent and multiple Sub-Agents.</p>
                <h4 className="text-xl font-bold text-white mb-2 mt-4">1. Master AI Agent (The "CEO AI")</h4>
                 <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>Central brain of your income empire.</li>
                    <li>Decides what gets delegated, when, and how.</li>
                    <li>Routes queries, manages analytics, makes decisions.</li>
                    <li><strong className="text-white/90 font-semibold">Built with:</strong> LangChain + GPT-4o + vector memory (Pinecone).</li>
                </ul>
                 <h4 className="text-xl font-bold text-white mb-2 mt-4">2. Sub-Agents (Automated "Workers")</h4>
                <p>Each sub-agent handles a specific income stream or function.</p>
                 <div className="overflow-x-auto">
                    <table className="w-full mt-2 text-left border border-white/10 rounded-lg">
                        <thead className="bg-white/5 text-sm text-white/80">
                            <tr><th className="p-3 rounded-tl-lg">Agent</th><th className="p-3">Purpose</th><th className="p-3 rounded-tr-lg">Example Tools</th></tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-white/10"><td className="p-3 font-semibold text-white">Affiliate Agent</td><td className="p-3">Writes blog posts, emails, tweets about affiliate offers.</td><td className="p-3">ChatGPT + Zapier</td></tr>
                            <tr className="border-t border-white/10"><td className="p-3 font-semibold text-white">Info Product Agent</td><td className="p-3">Manages landing pages, drip emails, follow-ups.</td><td className="p-3">GPT + Kajabi + Skool</td></tr>
                            <tr className="border-t border-white/10"><td className="p-3 font-semibold text-white">Client Service Agent</td><td className="p-3">Handles onboarding, CRM, meeting summaries.</td><td className="p-3">OpenAI + Notion CRM</td></tr>
                            <tr className="border-t border-white/10"><td className="p-3 font-semibold text-white">Outreach Agent</td><td className="p-3">Cold emails, DMs, reply handling, prospect nurturing.</td><td className="p-3">GPT Assistants + Instantly.ai</td></tr>
                        </tbody>
                    </table>
                </div>
                 <h4 className="text-xl font-bold text-white mb-2 mt-6">Development Roadmap (MVP to Scale)</h4>
                 <ol className="list-decimal list-inside space-y-2 pl-2">
                    <li><strong className="text-white/90 font-semibold">Phase 1 (1-2 Weeks):</strong> Prototype 1 sub-agent (e.g., Client Onboarding). Build a simple text-based input-output loop.</li>
                    <li><strong className="text-white/90 font-semibold">Phase 2 (Weeks 3-5):</strong> Connect income streams. Create automations for newsletters, course funnels, etc.</li>
                    <li><strong className="text-white/90 font-semibold">Phase 3 (Week 6-8):</strong> Build a central dashboard to integrate all agents under one view.</li>
                    <li><strong className="text-white/90 font-semibold">Phase 4 (Month 3+):</strong> Public or Client Access. Productize as a SaaS, subscription, or internal tool.</li>
                 </ol>
            </GuideSection>
        </div>
    );
};

// === From pages/FaqsPage.tsx ===
const faqs = [
    {
        question: "What is Byteflow's primary mission?",
        answer: "Byteflow's mission is to help businesses, solopreneurs, and startups optimize their operations by automating repetitive tasks. This reduces costs and unlocks new levels of efficiency through custom AI workflows."
    },
    {
        question: "What are the core services offered by Byteflow?",
        answer: "We offer four core services: 1) Workflow Automation to handle tasks like data entry and lead follow-ups. 2) AI Agents & Chatbots for customer service and internal support. 3) AI-Driven Sales Support for call analysis and performance tracking. 4) Business-Specific Automations for tailored solutions like content scheduling and invoicing."
    },
    {
        question: "What is the pricing model for Byteflow's services?",
        answer: "Our pricing is ROI-focused and based on monthly retainers. The tiers are: Starter ($500-$750/month), Growth ($1,000-$2,000/month), and Enterprise ($3,000+/month)."
    },
    {
        question: "Who is Byteflow's target market?",
        answer: "Our primary markets include Small & Medium Businesses (SMBs), Agencies (like marketing or real estate), Solopreneurs & Coaches, and E-commerce stores. We focus on businesses that are ready to embrace technology and are experiencing growth pains from manual processes."
    },
    {
        question: "What is the 'Results-First Offer'?",
        answer: "It's our unique value proposition where we offer to set up one complete workflow designed to save a specific amount of time or generate a certain number of leads. The client only pays if the workflow delivers the promised results, eliminating risk for them."
    },
    {
        question: "What is the AI Automation Agency (AIAA) Course?",
        answer: "It's a comprehensive info product designed to teach entrepreneurs how to start and run their own AI automation agency. The curriculum covers everything from identifying profitable niches and mastering core tools (like Zapier and OpenAI) to sales and scaling."
    },
    {
        question: "How does Byteflow approach content and marketing?",
        answer: "Our strategy is built on three content pillars: Educational, Problem/Solution, and Motivational. We use various platforms, with specific strategies for Instagram (carousels, reels), LinkedIn (long-form posts), and Email (lead nurturing sequences), all designed to build authority and generate leads."
    }
];
const AccordionItem: React.FC<{ faq: typeof faqs[0], isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/10">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-5 px-6"
            >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <ChevronDownIcon className={`h-6 w-6 text-white/70 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`${isOpen ? '' : 'hidden'}`}>
                <div className="pb-5 px-6 text-white/80 leading-relaxed">
                    {faq.answer}
                </div>
            </div>
        </div>
    );
};
const FaqsPage: React.FC = () => {
    // Fix: Used type assertion on the initial value for React.useState instead of a type argument, which is invalid when 'React' is 'any'.
    const [openIndex, setOpenIndex] = React.useState(0 as number | null);
    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="max-w-4xl mx-auto">
            <PageTitle
                title="Frequently Asked Questions"
                subtitle="Quick answers to common questions about our services, processes, and strategy."
            />
            <GlassCard className="p-0">
                {faqs.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        faq={faq}
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                    />
                ))}
            </GlassCard>
        </div>
    );
};

// === From App.tsx ===
const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="company-overview" element={<CompanyOverviewPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="business-model" element={<BusinessModelPage />} />
          <Route path="target-market" element={<TargetMarketPage />} />
          <Route path="brand-guidelines" element={<BrandGuidelinesPage />} />
          <Route path="content-strategy" element={<ContentStrategyPage />} />
          <Route path="operations" element={<OperationsPage />} />
          <Route path="templates" element={<TemplatesPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="info-product" element={<InfoProductPage />} />

          <Route path="guides/business-strategy" element={<BusinessStrategyGuidePage />} />
          <Route path="guides/marketing-sales" element={<MarketingSalesGuidePage />} />
          <Route path="guides/product-systems" element={<ProductSystemsGuidePage />} />

          <Route path="faqs" element={<FaqsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

// === Root Render Call ===
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);