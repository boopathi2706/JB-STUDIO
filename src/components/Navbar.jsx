import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

export const Navbar = ({ activeSection, scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/80 backdrop-blur-md border-b border-gray-800/60 shadow-lg shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div onClick={() => scrollToSection('home')}>
            <Logo size="md" />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-gray-900/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-gray-800/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/40'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full border border-indigo-500/40 -z-10" />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-600 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
            >
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-gray-950 rounded-full group-hover:bg-opacity-0 font-semibold">
                Start a Project
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
