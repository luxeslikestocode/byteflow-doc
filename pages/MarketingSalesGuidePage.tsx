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

const MarketingSalesGuidePage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <PageTitle
                title="Guide: Marketing & Sales"
                subtitle="A deep dive into our strategies for content, outreach, lead generation, and client acquisition across key platforms."
            />

            <Section title="Email Campaign Strategy">
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
            </Section>

            <Section title="Short-Form Video Strategy (Reels, Shorts)">
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
            </Section>

            <Section title="LinkedIn Outreach & Authority Building">
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
            </Section>
            
            <Section title="Lead Magnets (PDFs, Templates, Tools)">
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
            </Section>
             <Section title="Content Distribution System">
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
            </Section>
        </div>
    );
};

export default MarketingSalesGuidePage;