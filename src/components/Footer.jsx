import React from 'react';
import { Logo } from './Logo';
import { siteConfig } from '../data/siteData';
import { Code, Share2, Mail, MessageSquare } from 'lucide-react';

export const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-900 pt-16 pb-24 md:pb-16 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-gray-900">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div onClick={() => scrollToSection('home')}>
              <Logo size="lg" />
            </div>
            <p className="text-sm font-semibold text-white">
              {siteConfig.brand.fullName}
            </p>
            <p className="text-xs text-gray-400 max-w-sm">
              "{siteConfig.brand.tagline}" — Student-led development & design studio creating websites, mobile apps, and visual graphics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase text-gray-300 font-semibold tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-indigo-400 transition"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connections */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase text-gray-300 font-semibold tracking-wider block">
              Connect
            </span>
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-900 hover:bg-green-600 hover:text-white border border-gray-800 transition"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="p-2.5 rounded-xl bg-gray-900 hover:bg-blue-600 hover:text-white border border-gray-800 transition"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 hover:text-white border border-gray-800 transition"
                title="GitHub"
              >
                <Code className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-900 hover:bg-blue-700 hover:text-white border border-gray-800 transition"
                title="LinkedIn"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {currentYear} JB. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            Designed & Built by JEEVANANTHAM & BOOPATHI
          </p>
        </div>

      </div>
    </footer>
  );
};
