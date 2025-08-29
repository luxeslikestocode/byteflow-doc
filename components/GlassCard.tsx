import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', glow = false }) => {
  const glowClasses = glow ? 'shadow-2xl shadow-[#0F69F9]/25' : 'shadow-xl shadow-black/10';
  
  return (
    <div
      className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 ${glowClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;