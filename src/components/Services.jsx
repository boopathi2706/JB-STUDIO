import React from 'react';
import { siteConfig } from '../data/siteData';
import { Globe, Smartphone, Palette, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Services = ({ scrollToSection }) => {
  const getIcon = (id) => {
    switch (id) {
      case 'web-dev':
        return <Globe className="w-7 h-7 text-blue-400" />;
      case 'app-dev':
        return <Smartphone className="w-7 h-7 text-purple-400" />;
      case 'poster-design':
        return <Palette className="w-7 h-7 text-cyan-400" />;
      default:
        return <Globe className="w-7 h-7 text-indigo-400" />;
    }
  };

  return (
    <section id="services" className="py-20 relative bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What We Build
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            From ideas to digital products, we combine development and design to create practical digital solutions.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className={`glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border flex flex-col justify-between relative overflow-hidden ${
                service.popular
                  ? 'border-indigo-500/50 shadow-xl shadow-indigo-950/40 bg-gradient-to-b from-gray-900/90 to-gray-950'
                  : 'border-gray-800 bg-gray-950/80'
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                  Most Requested
                </div>
              )}

              <div>
                {/* Icon & Category */}
                <div className="w-14 h-14 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center mb-6 shadow-inner">
                  {getIcon(service.id)}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                
                {/* Starting Price Badge */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xs text-gray-400 font-medium">Starting from</span>
                  <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                    {service.startingPrice}
                  </span>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullet List */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-gray-800/80">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block mb-3">
                    Includes:
                  </span>
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Highlights */}
                <div className="pt-4 border-t border-gray-800/80 mb-6">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-mono block mb-2">
                    Technologies / Tools:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono text-indigo-300 bg-indigo-950/50 border border-indigo-800/50 px-2 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 rounded-xl bg-gray-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-gray-200 hover:text-white text-sm font-semibold border border-gray-800 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Notice */}
        <div className="mt-12 text-center max-w-2xl mx-auto p-4 rounded-2xl bg-gray-900/40 border border-gray-800/60 text-xs sm:text-sm text-gray-400">
          <span className="font-semibold text-gray-300">Pricing Note: </span>
          {siteConfig.pricingNotice}
        </div>

      </div>
    </section>
  );
};
