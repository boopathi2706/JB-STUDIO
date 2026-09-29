import React from 'react';
import { siteConfig } from '../data/siteData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Pricing = ({ scrollToSection }) => {
  return (
    <section id="pricing" className="py-20 relative bg-gray-950/80 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
            Transparent Rates
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Simple Starting Prices
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            We provide clear baseline costs so you know what to expect before starting your project.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Web Pricing Card */}
          <div className="glass-card rounded-3xl p-8 border border-gray-800 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300">
            <div>
              <span className="text-xs font-mono uppercase text-blue-400 tracking-wider block mb-2">Web Development</span>
              <h3 className="text-2xl font-bold text-white mb-4">WEB</h3>
              
              <div className="mb-6">
                <span className="text-xs text-gray-400">Starting from</span>
                <div className="text-4xl font-extrabold text-white mt-1">₹5,000</div>
              </div>

              <ul className="space-y-3 text-xs text-gray-300 mb-8 border-t border-gray-800 pt-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Responsive Web Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>React / Next.js Framework</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>REST API & Database Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Free Vercel / Netlify Deployment</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-3 rounded-xl bg-gray-900 hover:bg-blue-600 text-white font-semibold text-sm transition-all duration-200 border border-gray-800 hover:border-transparent flex items-center justify-center gap-2 group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* App Pricing Card - Featured */}
          <div className="glass-card rounded-3xl p-8 border border-purple-500/50 bg-gradient-to-b from-gray-900/90 to-gray-950 flex flex-col justify-between shadow-xl shadow-purple-950/40 relative">
            <div className="absolute top-4 right-4 bg-purple-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              Mobile Focus
            </div>

            <div>
              <span className="text-xs font-mono uppercase text-purple-400 tracking-wider block mb-2">App Development</span>
              <h3 className="text-2xl font-bold text-white mb-4">APP</h3>
              
              <div className="mb-6">
                <span className="text-xs text-gray-400">Starting from</span>
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mt-1">
                  ₹10,000
                </div>
              </div>

              <ul className="space-y-3 text-xs text-gray-300 mb-8 border-t border-gray-800 pt-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Android & iOS Cross-Platform</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>React Native Native Engine</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Authentication & Backend Sync</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Custom UI / UX Navigation</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-purple-950/50 transition flex items-center justify-center gap-2 group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Poster Pricing Card */}
          <div className="glass-card rounded-3xl p-8 border border-gray-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300">
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider block mb-2">Graphic Design</span>
              <h3 className="text-2xl font-bold text-white mb-4">POSTER</h3>
              
              <div className="mb-6">
                <span className="text-xs text-gray-400">Starting from</span>
                <div className="text-4xl font-extrabold text-white mt-1">₹500</div>
              </div>

              <ul className="space-y-3 text-xs text-gray-300 mb-8 border-t border-gray-800 pt-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>College Event & Fest Posters</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Social Media & Promo Creatives</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>High-Res PDF & PNG Delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Fast 24-48 Hour Turnaround</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-3 rounded-xl bg-gray-900 hover:bg-cyan-600 text-white font-semibold text-sm transition-all duration-200 border border-gray-800 hover:border-transparent flex items-center justify-center gap-2 group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Important Pricing Note */}
        <div className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800 text-center max-w-2xl mx-auto text-xs sm:text-sm text-gray-300">
          <span className="font-semibold text-indigo-400">Important Note: </span>
          {siteConfig.pricingNotice}
        </div>

      </div>
    </section>
  );
};
