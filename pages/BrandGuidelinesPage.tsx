import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import GlassCard from '../components/GlassCard';
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import { CheckIcon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid';

const colors = [
    { name: 'Primary Accent', hex: '#0F69F9', description: 'For CTAs, highlights, and key brand elements.' },
    { name: 'Background', hex: 'Gradient', description: 'Dark gradient from gray-900 → black → blue-900.' },
    { name: 'Headings', hex: '#FFFFFF', description: 'For all major headings.' },
    { name: 'Body Text', hex: '#FFFFFF (80%)', description: 'For standard paragraph text.' },
    { name: 'Subtext', hex: '#FFFFFF (70%)', description: 'For captions and less important text.' },
];

const typography = [
    { level: 'Main Heading', size: '48-56px', weight: 'Bold', example: 'Byteflow Knowledge Base' },
    { level: 'Page Title', size: '32-48px', weight: 'Bold', example: 'Brand Guidelines' },
    { level: 'Section Heading', size: '24-32px', weight: 'Bold', example: 'Color Palette' },
    { level: 'Card Title', size: '18-24px', weight: 'Bold', example: 'Primary Accent' },
    { level: 'Body Text', size: '16-20px', weight: 'Regular', example: 'Clean white sans-serif fonts ensure readability.' },
]

const logoDo = [
    "Use official logo files.",
    "Maintain clear space around the logo.",
    "Use on contrasting backgrounds for visibility."
];
const logoDont = [
    "Do not stretch or distort the logo.",
    "Do not change logo colors.",
    "Do not place on busy or low-contrast backgrounds."
];

const ColorSwatch: React.FC<{ color: typeof colors[0] }> = ({ color }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if(color.hex === 'Gradient' || !color.hex.startsWith('#')) return;
        navigator.clipboard.writeText(color.hex);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <GlassCard className="flex flex-col">
            <div className={`h-24 w-full rounded-md mb-4 ${color.hex === '#0F69F9' ? 'bg-[#0F69F9]' : color.hex === '#FFFFFF' ? 'bg-white' : color.hex.includes('(80%)') ? 'bg-white/80' : color.hex.includes('(70%)') ? 'bg-white/70' : 'bg-gradient-to-br from-gray-900 to-black'}`}></div>
            <h4 className="text-lg font-bold text-white">{color.name}</h4>
            <div className="flex items-center justify-between mt-2">
                <p className="text-sm text-white/70 font-mono">{color.hex}</p>
                {color.hex.startsWith('#') && (
                    <button onClick={handleCopy} className="relative text-white/60 hover:text-white">
                        {copied ? <ClipboardDocumentCheckIcon className="h-5 w-5 text-green-400" /> : <ClipboardDocumentIcon className="h-5 w-5" />}
                        {copied && <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-0.5 rounded transition-all duration-300">Copied!</span>}
                    </button>
                )}
            </div>
            <p className="text-sm text-white/60 mt-2 flex-grow">{color.description}</p>
        </GlassCard>
    );
};


const BrandGuidelinesPage: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-20">
            <PageTitle
                title="Brand Guidelines"
                subtitle="A guide to our visual identity, ensuring consistency across all materials."
            />

            <section>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Color Palette</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {colors.map(color => <ColorSwatch key={color.name} color={color} />)}
                </div>
            </section>
            
            <section>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Typography System</h2>
                <GlassCard>
                    <div className="space-y-6">
                        {typography.map((type, index) => (
                            <div key={type.level} className={`py-4 ${index !== typography.length - 1 ? 'border-b border-white/10' : ''}`}>
                                <div className="md:flex justify-between items-baseline">
                                    <p className="text-white/70">{type.level} ({type.size}, {type.weight})</p>
                                </div>
                                <p className={`mt-2 ${
                                    index === 0 ? 'text-5xl font-bold text-white' :
                                    index === 1 ? 'text-4xl font-bold text-white' :
                                    index === 2 ? 'text-3xl font-bold text-white' :
                                    index === 3 ? 'text-2xl font-bold text-white' : 'text-lg text-white/80'
                                }`}>{type.example}</p>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Logo Usage</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <GlassCard className="border-green-500/30">
                        <h3 className="text-2xl font-bold text-white mb-4">What To Do</h3>
                        <ul className="space-y-3">
                            {logoDo.map(item => (
                                <li key={item} className="flex items-start">
                                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-white/80">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                    <GlassCard className="border-red-500/30">
                        <h3 className="text-2xl font-bold text-white mb-4">What Not To Do</h3>
                        <ul className="space-y-3">
                            {logoDont.map(item => (
                                <li key={item} className="flex items-start">
                                    <XMarkIcon className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-white/80">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </div>
            </section>

            <section>
                <GlassCard className="text-center">
                    <h3 className="text-2xl font-bold text-white">Download Assets</h3>
                    <p className="mt-2 max-w-2xl mx-auto text-white/70">
                        Download our official brand assets, including logos in various formats.
                    </p>
                    <button className="mt-6 inline-flex items-center justify-center gap-x-2 px-6 py-3 rounded-lg font-semibold bg-[#0F69F9] text-white hover:bg-[#0d5ad1] transition-colors duration-300">
                        <ArrowDownTrayIcon className="h-5 w-5" />
                        Download Logos
                    </button>
                </GlassCard>
            </section>
        </div>
    );
};

export default BrandGuidelinesPage;