import React from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import { BuildingOffice2Icon, WrenchScrewdriverIcon, BanknotesIcon, UserGroupIcon, PaintBrushIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import StaggeredFadeIn from '../components/StaggeredFadeIn';

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
              <span className="mt-4 text-sm font-semibold text-[#0F69F9] group-hover:text-white transition-colors duration-200">
                Learn More &rarr;
              </span>
            </GlassCard>
          </Link>
        ))}
      </StaggeredFadeIn>
    </div>
  );
};

export default HomePage;