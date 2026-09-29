import React from 'react';
import { siteConfig } from '../data/siteData';
import { Sparkles, MessageSquare, Code, Layers, HeartHandshake, ShieldCheck } from 'lucide-react';

export const WhyJB = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-blue-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-indigo-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-purple-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-pink-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section className="py-20 relative bg-gray-950/70 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Work With JB?
          </h2>
          <p className="text-gray-400 text-base">
            What makes our student-led freelance studio a practical choice for your digital project.
          </p>
        </div>

        {/* Grid of 6 Reason Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.whyUs.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-gray-800 space-y-4 hover:border-indigo-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
