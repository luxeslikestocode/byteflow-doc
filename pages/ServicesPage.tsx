import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import GlassCard from '../components/GlassCard';
import { Cog6ToothIcon, ChatBubbleBottomCenterTextIcon, ChartPieIcon, PencilSquareIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import StaggeredFadeIn from '../components/StaggeredFadeIn';

const services = [
  {
    name: 'Workflow Automation',
    icon: <Cog6ToothIcon className="h-16 w-16 text-[#0F69F9]" />,
    description: 'Automating repetitive business tasks to eliminate manual work and boost efficiency across your operations.',
    capabilities: ['Data entry automation', 'Lead follow-up sequences', 'Automated reporting systems', 'Custom integrations'],
    tools: ['Zapier', 'Make.com', 'OpenAI APIs', 'Slack', 'CRMs', 'Google Workspace', 'Notion'],
  },
  {
    name: 'AI Agents & Chatbots',
    icon: <ChatBubbleBottomCenterTextIcon className="h-16 w-16 text-[#0F69F9]" />,
    description: 'Intelligent conversational AI that handles customer interactions and internal processes 24/7.',
    capabilities: ['Customer Service Bots', 'Sales Assistant Bots', 'Internal Productivity Bots', 'Custom training on business data'],
    tools: ['Website Integrations', 'Social Media APIs', 'Slack', 'Microsoft Teams', 'Natural Language Processing Engines'],
  },
  {
    name: 'AI-Driven Sales Support',
    icon: <ChartPieIcon className="h-16 w-16 text-[#0F69F9]" />,
    description: 'Advanced AI sales assistant that enhances sales team performance and provides actionable insights.',
    capabilities: ['Call analysis (tone, objections)', 'Conversion signal tracking', 'Auto-generated meeting notes', 'Dynamic script suggestions'],
    tools: ['Sales CRMs', 'Call Recording Software', 'Sentiment Analysis APIs', 'Performance Analytics Dashboards'],
  },
  {
    name: 'Business-Specific Automations',
    icon: <PencilSquareIcon className="h-16 w-16 text-[#0F69F9]" />,
    description: 'Tailored automation solutions for specific business functions to streamline unique operational needs.',
    capabilities: ['Content scheduling & repurposing', 'Invoicing & financial automations', 'Email drip campaigns', 'Data collection & reporting'],
    tools: ['Social Media Schedulers', 'Accounting Software APIs', 'Email Marketing Platforms', 'Data Visualization Tools'],
  },
];

interface ServiceCardProps {
    service: typeof services[0];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <GlassCard className="flex flex-col">
            <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="mt-4 text-2xl font-bold text-white">{service.name}</h3>
                <p className="mt-2 text-white/70">{service.description}</p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex justify-between items-center text-left text-lg font-semibold text-white"
                >
                    <span>Details</span>
                    <ChevronDownIcon className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="mt-4 space-y-4">
                        <div>
                            <h4 className="font-bold text-white/90">Capabilities:</h4>
                            <ul className="list-disc list-inside mt-2 text-white/70 space-y-1">
                                {service.capabilities.map(cap => <li key={cap}>{cap}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white/90">Tools & Platforms:</h4>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {service.tools.map(tool => (
                                    <span key={tool} className="bg-white/10 text-white/80 text-xs font-medium px-2.5 py-1 rounded-full">{tool}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};

const ServicesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <PageTitle 
        title="Core Services"
        subtitle="Exploring the pillars of our AI automation offerings designed to drive growth and efficiency."
      />
      <StaggeredFadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map(service => (
            <ServiceCard key={service.name} service={service} />
        ))}
      </StaggeredFadeIn>
    </div>
  );
};

export default ServicesPage;