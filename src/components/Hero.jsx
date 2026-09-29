import React from 'react';
import { ArrowRight, Code, Sparkles, Layout, Smartphone, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Lighting & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-900/80 border border-gray-800 backdrop-blur-md shadow-inner text-xs sm:text-sm font-medium text-gray-300">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>{siteConfig.brand.fullName}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Your Idea.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                Our Code.
              </span>{' '}
              Your Growth.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {siteConfig.brand.supportingText}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('work')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gray-900/80 hover:bg-gray-800 text-gray-300 hover:text-white font-medium border border-gray-800 hover:border-gray-700 backdrop-blur-md transition-all duration-300 flex items-center justify-center"
              >
                View Our Work
              </button>
            </div>

            {/* Key Service Highlights Bar */}
            <div className="pt-6 border-t border-gray-900 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Web Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>App Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Poster Design</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Digital Workspace Illustration */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Back Card - Code Snippet Mockup */}
              <div className="glass-card rounded-2xl p-4 sm:p-5 shadow-2xl border border-gray-800/80 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-mono text-gray-500">JBStudio.jsx</span>
                </div>
                <pre className="font-mono text-xs leading-relaxed text-gray-300 overflow-x-auto">
                  <code>
                    <span className="text-purple-400">const</span> <span className="text-blue-400">JBStudio</span> = () =&gt; &#123;<br/>
                    &nbsp;&nbsp;<span className="text-purple-400">const</span> founders = [<span className="text-green-300">"JEEVANANTHAM"</span>, <span className="text-green-300">"BOOPATHI"</span>];<br/>
                    &nbsp;&nbsp;<span className="text-purple-400">return</span> (<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-indigo-400">DigitalProduct</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;web=&#123;<span className="text-yellow-300">"React / Next.js"</span>&#125;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mobile=&#123;<span className="text-yellow-300">"React Native"</span>&#125;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;design=&#123;<span className="text-yellow-300">"Figma & Posters"</span>&#125;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
                    &nbsp;&nbsp;);<br/>
                    &#125;;
                  </code>
                </pre>
              </div>

              {/* Front Floating Card - Mobile UI / Design Preview */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 glass-card rounded-xl p-4 border border-indigo-500/30 shadow-2xl bg-gray-950/90 max-w-[240px] transform lg:-rotate-3 hover:rotate-0 transition-transform duration-500 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Cross-Platform App</h4>
                    <p className="text-[10px] text-gray-400">React Native Engine</p>
                  </div>
                </div>
              </div>

              {/* Front Floating Card - Design Badge */}
              <div className="absolute -top-4 -right-2 sm:-right-4 glass-card rounded-xl p-3 border border-purple-500/30 shadow-2xl bg-gray-950/90 max-w-[200px] transform lg:rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
                    <Layout className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Poster Graphics</h4>
                    <span className="text-[10px] text-green-400 font-mono">Starting ₹500</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
