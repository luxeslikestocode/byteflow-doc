import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import GlassCard from '../components/GlassCard';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const faqs = [
    {
        question: "What is Byteflow's primary mission?",
        answer: "Byteflow's mission is to help businesses, solopreneurs, and startups optimize their operations by automating repetitive tasks. This reduces costs and unlocks new levels of efficiency through custom AI workflows."
    },
    {
        question: "What are the core services offered by Byteflow?",
        answer: "We offer four core services: 1) Workflow Automation to handle tasks like data entry and lead follow-ups. 2) AI Agents & Chatbots for customer service and internal support. 3) AI-Driven Sales Support for call analysis and performance tracking. 4) Business-Specific Automations for tailored solutions like content scheduling and invoicing."
    },
    {
        question: "What is the pricing model for Byteflow's services?",
        answer: "Our pricing is ROI-focused and based on monthly retainers. The tiers are: Starter ($500-$750/month), Growth ($1,000-$2,000/month), and Enterprise ($3,000+/month)."
    },
    {
        question: "Who is Byteflow's target market?",
        answer: "Our primary markets include Small & Medium Businesses (SMBs), Agencies (like marketing or real estate), Solopreneurs & Coaches, and E-commerce stores. We focus on businesses that are ready to embrace technology and are experiencing growth pains from manual processes."
    },
    {
        question: "What is the 'Results-First Offer'?",
        answer: "It's our unique value proposition where we offer to set up one complete workflow designed to save a specific amount of time or generate a certain number of leads. The client only pays if the workflow delivers the promised results, eliminating risk for them."
    },
    {
        question: "What is the AI Automation Agency (AIAA) Course?",
        answer: "It's a comprehensive info product designed to teach entrepreneurs how to start and run their own AI automation agency. The curriculum covers everything from identifying profitable niches and mastering core tools (like Zapier and OpenAI) to sales and scaling."
    },
    {
        question: "How does Byteflow approach content and marketing?",
        answer: "Our strategy is built on three content pillars: Educational, Problem/Solution, and Motivational. We use various platforms, with specific strategies for Instagram (carousels, reels), LinkedIn (long-form posts), and Email (lead nurturing sequences), all designed to build authority and generate leads."
    }
];

const AccordionItem: React.FC<{ faq: typeof faqs[0], isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/10">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-5 px-6"
            >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <ChevronDownIcon className={`h-6 w-6 text-white/70 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pb-5 px-6 text-white/80 leading-relaxed">
                    {faq.answer}
                </div>
            </div>
        </div>
    );
};

const FaqsPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <PageTitle
                title="Frequently Asked Questions"
                subtitle="Quick answers to common questions about our services, processes, and strategy."
            />
            <GlassCard className="p-0">
                {faqs.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        faq={faq}
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                    />
                ))}
            </GlassCard>
        </div>
    );
};

export default FaqsPage;