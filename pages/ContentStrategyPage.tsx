import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import GlassCard from '../components/GlassCard';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Accordion: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <GlassCard className="overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left text-xl font-bold text-white"
            >
                <span>{title}</span>
                <ChevronDownIcon className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
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

export default ContentStrategyPage;