import React, { useState, useRef, useEffect } from 'react';
import { Bars3Icon, MagnifyingGlassIcon, BuildingOffice2Icon, WrenchScrewdriverIcon, PaintBrushIcon } from '@heroicons/react/24/outline';
import { BYTEFLOW_LOGO } from '../constants.tsx';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dummyResults = [
    { name: 'Company Overview', path: '/company-overview', icon: <BuildingOffice2Icon className="h-5 w-5 mr-3 text-white/60" /> },
    { name: 'Services', path: '/services', icon: <WrenchScrewdriverIcon className="h-5 w-5 mr-3 text-white/60" /> },
    { name: 'Brand Guidelines', path: '/brand-guidelines', icon: <PaintBrushIcon className="h-5 w-5 mr-3 text-white/60" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 lg:pl-64">
      <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-white/70 hover:text-white"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        <div className="hidden lg:block">
            <Link to="/">
              <img src={BYTEFLOW_LOGO} alt="Byteflow Logo" className="h-[52px] w-auto" />
            </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="relative w-full max-w-xs" ref={searchContainerRef}>
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F69F9]/50 focus:border-[#0F69F9]/50 transition-colors"
              onFocus={() => setIsSearchFocused(true)}
            />
            {isSearchFocused && (
              <div className="absolute top-full mt-2 w-full bg-gray-900/80 backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl shadow-black/20 overflow-hidden page-fade-in">
                <div className="p-2 text-sm text-white/70">
                  <p className="px-2 py-1">Example results...</p>
                  <ul>
                    {dummyResults.map(result => (
                      <li key={result.path}>
                        <Link to={result.path} onClick={() => setIsSearchFocused(false)} className="flex items-center px-3 py-2 rounded-md hover:bg-white/10">
                          {result.icon}
                          {result.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;