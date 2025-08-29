import React from 'react';
import PageTitle from '../components/PageTitle';
import GlassCard from '../components/GlassCard';
import { CheckIcon, XMarkIcon, ClockIcon, UserMinusIcon, BoltIcon, ArrowUpRightIcon, StarIcon, ShieldExclamationIcon, LightBulbIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import StaggeredFadeIn from '../components/StaggeredFadeIn';

const whatWeDo = [
    "Design custom workflows that replace manual labor",
    "Improve response times and integrate seamlessly",
    "Create intelligent automation that reduces errors",
    "Build AI-powered solutions that work 24/7"
];

const whatWeDont = [
    "We don't just 'install tools'",
    "We don't provide generic solutions",
    "We don't offer one-size-fits-all packages"
];

const goals = [
    { name: 'Save businesses time', icon: <ClockIcon className="h-8 w-8 text-[#0F69F9]" /> },
    { name: 'Reduce reliance on staff', icon: <UserMinusIcon className="h-8 w-8 text-[#0F69F9]" /> },
    { name: 'Increase efficiency', icon: <BoltIcon className="h-8 w-8 text-[#0F69F9]" /> },
    { name: 'Boost scalability', icon: <ArrowUpRightIcon className="h-8 w-8 text-[#0F69F9]" /> },
];

const swot = {
    strengths: ["High ROI for clients", "Low operational overhead", "Strong B2B appeal", "Speed to delivery"],
    weaknesses: ["Technical dependence", "Client education barrier", "Service delivery consistency", "No brand equity (yet)"],
    opportunities: ["AI Hype Curve", "Solopreneur Boom", "Cost-cutting trends", "Education-as-a-product"],
    threats: ["SMMA to AIAA Migration", "AI Tool Instability", "Enterprise AI Companies", "Client Resistance to Change"],
};

const CompanyOverviewPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-20">
      <PageTitle 
        title="Company Overview"
        subtitle="Our mission, values, and what we stand for at Byteflow."
      />

      <section>
        <GlassCard glow={true}>
            <h2 className="text-3xl font-bold text-white mb-4">Mission Statement</h2>
            <p className="text-lg text-white/80 leading-relaxed">
            Byteflow is an <strong className="text-white">AI Automation Agency (AIAA)</strong> that helps businesses, solopreneurs, and startups optimize operations by automating repetitive tasks, reducing costs, and unlocking new efficiency through AI workflows.
            </p>
            <p className="mt-6 text-xl text-white/90 border-l-4 border-[#0F69F9] pl-4 italic">
            "Byteflow helps businesses work smarter, not harder — by replacing manual work with AI automation that runs 24/7, error-free, and customized to your needs."
            </p>
        </GlassCard>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Approach</h2>
        <StaggeredFadeIn className="grid md:grid-cols-2 gap-8">
            <GlassCard className="border-green-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">What We Do</h3>
                <ul className="space-y-3">
                    {whatWeDo.map(item => (
                        <li key={item} className="flex items-start">
                            <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-white/80">{item}</span>
                        </li>
                    ))}
                </ul>
            </GlassCard>
            <GlassCard className="border-red-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">What We Don't Do</h3>
                <ul className="space-y-3">
                    {whatWeDont.map(item => (
                        <li key={item} className="flex items-start">
                            <XMarkIcon className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-white/80">{item}</span>
                        </li>
                    ))}
                </ul>
            </GlassCard>
        </StaggeredFadeIn>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">SWOT Analysis</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <GlassCard>
                <h3 className="flex items-center gap-2 text-2xl font-bold text-white mb-4"><StarIcon className="h-6 w-6 text-green-400" />Strengths</h3>
                <ul className="space-y-2 list-disc list-inside text-white/80">
                    {swot.strengths.map(item => <li key={item}>{item}</li>)}
                </ul>
            </GlassCard>
            <GlassCard>
                <h3 className="flex items-center gap-2 text-2xl font-bold text-white mb-4"><ShieldExclamationIcon className="h-6 w-6 text-yellow-400" />Weaknesses</h3>
                <ul className="space-y-2 list-disc list-inside text-white/80">
                    {swot.weaknesses.map(item => <li key={item}>{item}</li>)}
                </ul>
            </GlassCard>
            <GlassCard>
                <h3 className="flex items-center gap-2 text-2xl font-bold text-white mb-4"><LightBulbIcon className="h-6 w-6 text-blue-400" />Opportunities</h3>
                <ul className="space-y-2 list-disc list-inside text-white/80">
                    {swot.opportunities.map(item => <li key={item}>{item}</li>)}
                </ul>
            </GlassCard>
            <GlassCard>
                <h3 className="flex items-center gap-2 text-2xl font-bold text-white mb-4"><ExclamationTriangleIcon className="h-6 w-6 text-red-400" />Threats</h3>
                <ul className="space-y-2 list-disc list-inside text-white/80">
                    {swot.threats.map(item => <li key={item}>{item}</li>)}
                </ul>
            </GlassCard>
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Company Goals</h2>
        <StaggeredFadeIn className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map(goal => (
                <GlassCard key={goal.name} className="text-center flex flex-col items-center">
                    {goal.icon}
                    <p className="mt-3 font-semibold text-white">{goal.name}</p>
                </GlassCard>
            ))}
        </StaggeredFadeIn>
      </section>
    </div>
  );
};

export default CompanyOverviewPage;