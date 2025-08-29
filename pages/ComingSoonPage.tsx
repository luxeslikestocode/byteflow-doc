import React from 'react';
import PageTitle from '../components/PageTitle.tsx';
import GlassCard from '../components/GlassCard.tsx';
import { WrenchIcon } from '@heroicons/react/24/solid';

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
                    <WrenchIcon className="h-16 w-16 text-[#0F69F9] mx-auto animate-pulse" />
                    <h2 className="mt-4 text-3xl font-bold text-white">Coming Soon!</h2>
                    <p className="mt-2 text-white/70">
                        We are working hard to bring you this section. Please check back later for updates.
                    </p>
                </div>
            </GlassCard>
        </div>
    );
};

export default ComingSoonPage;