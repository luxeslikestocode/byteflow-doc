import React from 'react';
import PageTitle from '../components/PageTitle.tsx';
import GlassCard from '../components/GlassCard.tsx';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

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
                  className="inline-flex items-center justify-center gap-x-2 px-6 py-3 rounded-lg font-semibold bg-[#0F69F9] text-white hover:bg-[#0d5ad1] transition-colors duration-300"
                >
                  <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  Open Templates in Figma
                </a>
            </GlassCard>
        </div>
    );
};

export default TemplatesPage;