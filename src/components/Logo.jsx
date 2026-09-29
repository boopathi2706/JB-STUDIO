import React from 'react';

export const Logo = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "text-lg tracking-wider",
    md: "text-2xl tracking-widest",
    lg: "text-4xl tracking-widest",
  };

  return (
    <div className={`inline-flex items-center gap-2 group cursor-pointer ${className}`}>
      {/* Icon Badge */}
      <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
        <div className="w-full h-full bg-gray-950 rounded-[11px] flex items-center justify-center transition-colors group-hover:bg-gray-900">
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-300 to-purple-400 text-sm">
            JB
          </span>
        </div>
        {/* Glow backdrop */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-sm opacity-30 group-hover:opacity-70 transition duration-300 -z-10" />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className={`font-black font-mono text-white ${sizeClasses[size]} leading-none`}>
          JB<span className="text-indigo-400">.</span>
        </span>
        <span className="text-[9px] uppercase tracking-widest text-gray-400 font-medium">
          Studio
        </span>
      </div>
    </div>
  );
};
