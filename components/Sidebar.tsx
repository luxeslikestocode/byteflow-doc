import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { PRIMARY_NAV, SECONDARY_NAV, GUIDES_NAV, BYTEFLOW_LOGO } from '../constants';
import type { NavItem, NavSection } from '../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavLinks: React.FC<{ section: NavSection }> = ({ section }) => {
  const location = useLocation();

  return (
    <div>
      <h3 className="px-4 text-xs font-semibold text-white/60 uppercase tracking-wider">{section.title}</h3>
      <ul className="mt-2 space-y-1">
        {section.items.map((item: NavItem) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-x-3 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 relative ${
                  isActive
                    ? 'text-white bg-white/10'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {item.icon}
              {item.name}
               {location.pathname === item.path && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-[#0F69F9] rounded-r-full shadow-lg shadow-[#0F69F9]/50"></div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SidebarContent: React.FC = () => (
    <div className="flex flex-col h-full bg-black/30 backdrop-blur-xl p-4">
        <div className="flex items-center justify-between mb-8 lg:hidden">
            <img src={BYTEFLOW_LOGO} alt="Byteflow Logo" className="h-[52px] w-auto" />
        </div>
        <nav className="flex-1 space-y-8 overflow-y-auto">
            {PRIMARY_NAV.map(section => <NavLinks key={section.title} section={section} />)}
            {GUIDES_NAV.map(section => <NavLinks key={section.title} section={section} />)}
            {SECONDARY_NAV.map(section => <NavLinks key={section.title} section={section} />)}
        </nav>
    </div>
);


const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
        <div className="relative w-64 h-full border-r border-white/10">
          <SidebarContent />
          <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed top-0 left-0 w-64 h-full border-r border-white/10">
        <SidebarContent />
      </aside>
    </>
  );
};

export default Sidebar;