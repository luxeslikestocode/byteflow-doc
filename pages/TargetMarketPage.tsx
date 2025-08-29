import React from 'react';
import PageTitle from '../components/PageTitle';
import GlassCard from '../components/GlassCard';
import StaggeredFadeIn from '../components/StaggeredFadeIn';
import { BuildingStorefrontIcon, BuildingOfficeIcon, UserIcon, ShoppingCartIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';

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

export default TargetMarketPage;