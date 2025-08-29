import React from 'react';
import PageTitle from '../components/PageTitle';
import GlassCard from '../components/GlassCard';
import { BookOpenIcon, VideoCameraIcon, UserGroupIcon, BriefcaseIcon } from '@heroicons/react/24/solid';

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

const tools = [
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
                        {tools.map(item => <li key={item.func}><strong className="text-white/90">{item.func}:</strong> {item.examples}</li>)}
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

export default InfoProductPage;