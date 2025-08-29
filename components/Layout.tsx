import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.tsx';
import Sidebar from './Sidebar.tsx';
import Chatbot from './Chatbot.tsx';

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white/80 font-sans">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="lg:pl-64 transition-all duration-300">
        <div key={location.pathname} className="px-4 sm:px-6 lg:px-8 py-24 page-fade-in">
            <Outlet />
        </div>
      </main>
      <Chatbot />
    </div>
  );
};

export default Layout;