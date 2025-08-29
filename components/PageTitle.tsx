
import React from 'react';

interface PageTitleProps {
    title: string;
    subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
    return (
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{title}</h1>
            <p className="mt-4 text-lg text-white/70">{subtitle}</p>
        </div>
    );
};

export default PageTitle;
