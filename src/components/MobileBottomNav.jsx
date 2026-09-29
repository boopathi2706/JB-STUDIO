import React from 'react';
import { Home, User, Briefcase, FolderGit2, Mail } from 'lucide-react';

export const MobileBottomNav = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'work', label: 'Work', icon: FolderGit2 },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 pointer-events-none">
      <nav className="pointer-events-auto max-w-md mx-auto bg-gray-950/90 backdrop-blur-xl border border-gray-800/80 rounded-2xl p-2 shadow-2xl shadow-indigo-950/50 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-200 relative ${
                isActive ? 'text-blue-400 font-semibold' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {isActive && (
                <span className="absolute inset-0 bg-blue-500/10 rounded-xl border border-blue-500/30 -z-10" />
              )}
              <Icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'scale-110 text-blue-400' : ''}`} />
              <span className="text-[10px] mt-1">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
