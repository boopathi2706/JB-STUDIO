import React from 'react';
import { siteConfig } from '../data/siteData';
import { Code2, Server, Cpu, Globe, Database, Smartphone, Palette, Layout } from 'lucide-react';

export const TechStack = () => {
  const renderIcon = (name) => {
    switch (name) {
      case 'React':
      case 'React Native':
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 'Node.js':
        return <Server className="w-6 h-6 text-green-400" />;
      case 'Express.js':
        return <Cpu className="w-6 h-6 text-gray-300" />;
      case 'Next.js':
        return <Globe className="w-6 h-6 text-white" />;
      case 'MongoDB':
        return <Database className="w-6 h-6 text-emerald-500" />;
      case 'Canva':
        return <Palette className="w-6 h-6 text-teal-400" />;
      case 'Figma':
        return <Layout className="w-6 h-6 text-orange-400" />;
      default:
        return <Code2 className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section className="py-20 relative bg-gray-950/80 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            Stack & Tools
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tools We Work With
          </h2>
          <p className="text-gray-400 text-base">
            Modern, industry-tested technologies powering our web applications, mobile platforms, and graphic designs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Web Stack */}
          <div className="glass-card rounded-3xl p-6 border border-gray-800 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-400" />
                Web Technologies
              </h3>
              <span className="text-xs font-mono text-gray-400 bg-gray-900 px-2 py-1 rounded">5 Tools</span>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {siteConfig.techStack.web.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-900/60 border border-gray-800/80 hover:border-blue-500/40 hover:bg-gray-900 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gray-950 border border-gray-800 group-hover:scale-110 transition-transform">
                      {renderIcon(item.name)}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                      <span className="text-[10px] text-gray-400">Full-Stack Web</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 group-hover:text-blue-400">Active</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Stack */}
          <div className="glass-card rounded-3xl p-6 border border-gray-800 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-purple-400" />
                Mobile Framework
              </h3>
              <span className="text-xs font-mono text-gray-400 bg-gray-900 px-2 py-1 rounded">1 Tool</span>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {siteConfig.techStack.mobile.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-900/60 border border-gray-800/80 hover:border-purple-500/40 hover:bg-gray-900 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gray-950 border border-gray-800 group-hover:scale-110 transition-transform">
                      {renderIcon(item.name)}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                      <span className="text-[10px] text-gray-400">iOS & Android App</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 group-hover:text-purple-400">Active</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 text-xs text-purple-300">
              <span className="font-semibold block mb-1">Cross-Platform Efficiency</span>
              Single code base deployment for both Android and iOS mobile platforms.
            </div>
          </div>

          {/* Design Tools */}
          <div className="glass-card rounded-3xl p-6 border border-gray-800 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Palette className="w-5 h-5 text-cyan-400" />
                Design Suite
              </h3>
              <span className="text-xs font-mono text-gray-400 bg-gray-900 px-2 py-1 rounded">2 Tools</span>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {siteConfig.techStack.design.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-900/60 border border-gray-800/80 hover:border-cyan-500/40 hover:bg-gray-900 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gray-950 border border-gray-800 group-hover:scale-110 transition-transform">
                      {renderIcon(item.name)}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                      <span className="text-[10px] text-gray-400">UI/UX & Poster Art</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 group-hover:text-cyan-400">Active</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-cyan-300">
              <span className="font-semibold block mb-1">Visual Excellence</span>
              Custom wireframes, vector artwork, college poster graphics, and branding layouts.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
