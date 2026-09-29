import React from 'react';
import { siteConfig } from '../data/siteData';

export const Workflow = () => {
  return (
    <section className="py-20 relative bg-gray-950 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How We Work
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            A transparent 5-step collaborative workflow from initial concept to launch.
          </p>
        </div>

        {/* Workflow Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
          {siteConfig.workflow.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-gray-800 flex flex-col justify-between relative group"
            >
              <div>
                <span className="text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4 block">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="w-full h-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full mt-6 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
