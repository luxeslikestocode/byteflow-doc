import React from 'react';
import PageTitle from '../components/PageTitle.tsx';
import GlassCard from '../components/GlassCard.tsx';
import StaggeredFadeIn from '../components/StaggeredFadeIn.tsx';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

const resourceCategories = [
  {
    title: 'Workflow Automation & Integrations',
    tools: [
      { name: 'Zapier', url: 'https://zapier.com/', description: 'Connect apps and automate workflows.' },
      { name: 'Make (Integromat)', url: 'https://www.make.com/en', description: 'Visual automation builder for complex tasks.' },
      { name: 'IFTTT', url: 'https://ifttt.com/', description: 'Simple triggers and automation between apps.' },
    ]
  },
  {
    title: 'AI & Marketing Automation',
    tools: [
      { name: 'HubSpot', url: 'https://www.hubspot.com/', description: 'CRM with marketing automation.' },
      { name: 'ActiveCampaign', url: 'https://www.activecampaign.com/', description: 'Email marketing & automation.' },
      { name: 'Mailchimp', url: 'https://mailchimp.com/', description: 'Email campaigns and automated workflows.' },
      { name: 'Buffer', url: 'https://buffer.com/', description: 'Automate video/content scheduling.' },
    ]
  },
  {
    title: 'Project & Workflow Management',
    tools: [
      { name: 'Notion', url: 'https://www.notion.so/', description: 'Project tracking and workflow docs.' },
      { name: 'Trello', url: 'https://trello.com/', description: 'Kanban boards for team tasks.' },
      { name: 'Asana', url: 'https://asana.com/', description: 'Task & workflow management.' },
    ]
  },
  {
    title: 'AI Productivity & Automation Tools',
    tools: [
      { name: 'OpenAI', url: 'https://openai.com/', description: 'AI models for text, code, and more.' },
      { name: 'ChatGPT', url: 'https://chat.openai.com/', description: 'AI assistant for text generation & automation ideas.' },
      { name: 'Phantombuster', url: 'https://phantombuster.com/', description: 'Automate social media and web tasks.' },
      { name: 'Pipedream', url: 'https://pipedream.com/', description: 'Connect APIs and automate workflows programmatically.' },
    ]
  }
];

const ResourcesPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-20">
      <PageTitle
        title="Automation Resources"
        subtitle="A curated list of websites and tools for workflow automation, AI, and marketing."
      />

      <section>
        <GlassCard glow>
            <h3 className="text-2xl font-bold text-white mb-4">
              Byteflow Figma Design System
            </h3>
            <p className="text-white/70 mb-6">
              The single source of truth for all our design components, styles, and guidelines. Click the button below to open the file in a new tab.
            </p>
            <a 
              href="https://www.figma.com/design/JNKbZzIYcfkHgeFN28sNLD/Byte-flow?node-id=0-1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-x-2 px-6 py-3 rounded-lg font-semibold bg-[#0F69F9] text-white hover:bg-[#0d5ad1] transition-colors duration-300"
            >
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              Open Design System
            </a>
        </GlassCard>
      </section>

      <section>
        <StaggeredFadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {resourceCategories.map(category => (
            <GlassCard key={category.title}>
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">{category.title}</h3>
              <ul className="space-y-4">
                {category.tools.map(tool => (
                  <li key={tool.name}>
                    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 text-white/40 mt-1 flex-shrink-0 group-hover:text-[#0F69F9] transition-colors" />
                      <div>
                        <p className="font-semibold text-white group-hover:text-[#0F69F9] transition-colors">{tool.name}</p>
                        <p className="text-sm text-white/60">{tool.description}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </StaggeredFadeIn>
      </section>
    </div>
  );
};

export default ResourcesPage;