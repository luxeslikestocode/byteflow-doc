import React from 'react';
import PageTitle from '../components/PageTitle.tsx';
import GlassCard from '../components/GlassCard.tsx';
import { HashtagIcon, LightBulbIcon, BriefcaseIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

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

export default OperationsPage;