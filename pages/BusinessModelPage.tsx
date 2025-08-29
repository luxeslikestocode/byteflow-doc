import React, { useState } from 'react';
import PageTitle from '../components/PageTitle.tsx';
import GlassCard from '../components/GlassCard.tsx';
import { CheckIcon } from '@heroicons/react/24/solid';
import StaggeredFadeIn from '../components/StaggeredFadeIn.tsx';

const pricingTiers = [
    {
        name: 'Starter',
        price: '$500–$750',
        frequency: '/month',
        description: 'For individuals and small teams getting started with automation.',
        features: ['1–2 workflows', 'Basic support', 'Minor tweaks and adjustments'],
        popular: false,
    },
    {
        name: 'Growth',
        price: '$1,000–$2,000',
        frequency: '/month',
        description: 'For growing businesses looking to scale their operations.',
        features: ['3–5 workflows', 'Priority support', 'Monthly strategy calls', 'Performance optimization'],
        popular: true,
    },
    {
        name: 'Enterprise',
        price: '$3,000+',
        frequency: '/month',
        description: 'For large organizations needing comprehensive automation solutions.',
        features: ['Unlimited workflows', 'Dedicated account management', 'Team training sessions', 'Advanced analytics'],
        popular: false,
    },
];

const ROICalculator: React.FC = () => {
    const [hours, setHours] = useState(20);
    const [rate, setRate] = useState(25);
    const [cost, setCost] = useState(1000);

    const monthlySavings = hours * rate;
    const roi = cost > 0 ? ((monthlySavings - cost) / cost) * 100 : 0;

    return (
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
                <div>
                    <label htmlFor="hours" className="block text-sm font-medium text-white/70">Hours Saved Per Month</label>
                    <div className="mt-1 flex items-center gap-4">
                        <input id="hours" type="range" min="1" max="200" value={hours} onChange={e => setHours(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer" />
                        <span className="font-bold text-white text-lg w-16 text-center">{hours}</span>
                    </div>
                </div>
                <div>
                    <label htmlFor="rate" className="block text-sm font-medium text-white/70">Average Hourly Rate ($)</label>
                     <div className="mt-1 flex items-center gap-4">
                        <input id="rate" type="range" min="10" max="150" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer" />
                        <span className="font-bold text-white text-lg w-16 text-center">${rate}</span>
                    </div>
                </div>
                <div>
                    <label htmlFor="cost" className="block text-sm font-medium text-white/70">Estimated Monthly Cost ($)</label>
                     <div className="mt-1 flex items-center gap-4">
                        <input id="cost" type="range" min="500" max="5000" step="100" value={cost} onChange={e => setCost(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer" />
                        <span className="font-bold text-white text-lg w-20 text-center">${cost.toLocaleString()}</span>
                    </div>
                </div>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-8 border border-white/10">
                <p className="text-white/70">Monthly Time Savings</p>
                <p className="text-4xl font-bold text-[#0F69F9]">{hours} hours</p>
                
                <p className="mt-6 text-white/70">Monthly Cost Savings</p>
                <p className="text-4xl font-bold text-white">${monthlySavings.toLocaleString()}</p>
                
                <p className="mt-6 text-white/70">Estimated Monthly ROI</p>
                <p className={`text-4xl font-bold ${roi >= 0 ? 'text-green-400' : 'text-red-400'}`}>{roi.toFixed(0)}%</p>
            </div>
        </div>
    );
};


const BusinessModelPage: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-20">
            <PageTitle
                title="Business Model & Pricing"
                subtitle="Our pricing is ROI-focused. Clients save more than they spend."
            />

            <section>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Monthly Retainers</h2>
                <StaggeredFadeIn className="grid lg:grid-cols-3 gap-8 items-start">
                    {pricingTiers.map(tier => (
                        <GlassCard 
                            key={tier.name}
                            glow={tier.popular}
                            className={`flex flex-col h-full ${tier.popular ? 'border-[#0F69F9]/50' : ''}`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#0F69F9] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
                            )}
                            <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                            <p className="mt-2 text-white/70">{tier.description}</p>
                            
                            <div className="my-6">
                                <span className="text-5xl font-bold text-white">{tier.price}</span>
                                <span className="text-white/60">{tier.frequency}</span>
                            </div>
                            
                            <ul className="space-y-3 flex-grow">
                                {tier.features.map(feature => (
                                    <li key={feature} className="flex items-start">
                                        <CheckIcon className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-white/80">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`mt-8 w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                                tier.popular 
                                ? 'bg-[#0F69F9] text-white hover:bg-[#0d5ad1]' 
                                : 'bg-white/10 text-white hover:bg-white/20'
                            }`}>
                                Get Started
                            </button>
                        </GlassCard>
                    ))}
                </StaggeredFadeIn>
            </section>
            
            <section className="grid md:grid-cols-2 gap-8">
                <GlassCard>
                    <h3 className="text-2xl font-bold text-white mb-4">Unique Value Proposition</h3>
                    <p className="text-lg text-white/90 border-l-4 border-[#0F69F9] pl-4 italic">
                        "Automate your business like the top 1%, without hiring a single employee."
                    </p>
                </GlassCard>
                 <GlassCard>
                    <h3 className="text-2xl font-bold text-white mb-4">Results-First Offer</h3>
                    <p className="text-lg text-white/90 border-l-4 border-[#0F69F9] pl-4 italic">
                        "I'll set up 1 workflow that saves you [X] time or generates [Y] leads. You only pay if it delivers results."
                    </p>
                </GlassCard>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Value Justification & ROI Calculator</h2>
                <GlassCard glow>
                   <ROICalculator />
                </GlassCard>
            </section>
        </div>
    );
};

export default BusinessModelPage;