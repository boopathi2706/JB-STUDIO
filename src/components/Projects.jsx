import React from 'react';
import { siteConfig } from '../data/siteData';
import { PosterGallery } from './PosterGallery';
import { ExternalLink, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="work" className="py-20 relative bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Selected Work
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            A look at the kinds of digital products and creative work we build.
          </p>
        </div>

        {/* Project Cards (Web & App) */}
        <div className="space-y-12 mb-16">
          {siteConfig.projects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl border border-gray-800 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 lg:p-8 hover:border-indigo-500/40 transition-all duration-300"
            >
              {/* Image Column */}
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden border border-gray-800 group aspect-[16/10] bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 text-xs font-semibold text-white bg-gray-950/80 border border-gray-800 backdrop-blur-md px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Details Column */}
              <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">
                    Featured Project
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h3>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                    Key Features:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono text-gray-300 bg-gray-900 border border-gray-800 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-800/80">
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-950/50 transition flex items-center gap-2 group"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white text-xs font-medium border border-gray-800 transition flex items-center gap-2"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Project 3: 12-Poster Gallery */}
        <PosterGallery posters={siteConfig.posters} />

      </div>
    </section>
  );
};
