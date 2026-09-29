import React, { useState } from 'react';
import { ExternalLink, Layers, X, ZoomIn, CheckCircle2 } from 'lucide-react';

export const PosterGallery = ({ posters }) => {
  const [selectedPoster, setSelectedPoster] = useState(null);

  return (
    <div className="mt-16 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <Layers className="w-6 h-6 text-purple-400" />
            Promotion's Poster Collection
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            A gallery displaying 12 distinct event & promotional poster concepts crafted with Figma & Canva.
          </p>
        </div>
        <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full self-start sm:self-auto">
          12 Designs Available
        </span>
      </div>

      {/* Poster Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {posters.map((poster) => (
          <div
            key={poster.id}
            onClick={() => setSelectedPoster(poster)}
            className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800/80 cursor-pointer transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-950/30"
          >
            {/* Aspect ratio box */}
            <div className="aspect-[3/4] w-full overflow-hidden bg-gray-950 relative">
              <img
                src={poster.image}
                alt={poster.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-300">
                  {poster.category}
                </span>
                <h4 className="text-sm font-bold text-white line-clamp-1">{poster.title}</h4>
                <div className="inline-flex items-center gap-1 text-[11px] text-indigo-300 font-medium mt-2">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to Expand</span>
                </div>
              </div>
            </div>

            {/* Bottom Caption */}
            <div className="p-3 bg-gray-950/90 border-t border-gray-800">
              <h4 className="text-xs font-semibold text-white truncate">{poster.title}</h4>
              <span className="text-[10px] text-gray-400 block truncate">{poster.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedPoster && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPoster(null)}
        >
          <div 
            className="relative bg-gray-950 border border-gray-800 rounded-3xl max-w-xl w-full p-4 sm:p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPoster(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-900 text-gray-400 hover:text-white border border-gray-800 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="aspect-[3/4] max-h-[60vh] w-full rounded-2xl overflow-hidden bg-gray-900 mb-4 border border-gray-800">
              <img
                src={selectedPoster.image}
                alt={selectedPoster.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Poster Info */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                {selectedPoster.category}
              </span>
              <h3 className="text-xl font-bold text-white">{selectedPoster.title}</h3>
              <p className="text-xs text-gray-400">
                Created using Figma and Canva vector tools with custom typography, event details, and vibrant color palettes.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
