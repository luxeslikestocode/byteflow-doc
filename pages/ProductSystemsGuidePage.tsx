import React from 'react';
import PageTitle from '../components/PageTitle.tsx';
import GlassCard from '../components/GlassCard.tsx';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section className="mb-16">
        <GlassCard>
            <h2 className="text-3xl font-bold text-white border-b-2 border-[#0F69F9] pb-3 mb-6 inline-block">{title}</h2>
            <div className="space-y-4 text-white/80">
                {children}
            </div>
        </GlassCard>
    </section>
);

const ProductSystemsGuidePage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <PageTitle
                title="Guide: Product & Systems"
                subtitle="A guide to validating new ideas and the architecture of our AI Agent System for creating scalable, multi-stream income."
            />

            <Section title="Validating a Business Idea (5 Stages)">
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
            </Section>

            <Section title="AI Agent System Structure">
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
            </Section>
        </div>
    );
};

export default ProductSystemsGuidePage;