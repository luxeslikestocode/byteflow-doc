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

const BusinessStrategyGuidePage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <PageTitle
                title="Guide: Business Strategy"
                subtitle="A comprehensive guide to defining our niche, understanding our market position, and planning for scalable growth."
            />

            <Section title="Defining a Business Niche">
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
            </Section>

            <Section title="SWOT Analysis">
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
            </Section>
            
            <Section title="Lean Business Plan Outline">
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
            </Section>
        </div>
    );
};

export default BusinessStrategyGuidePage;