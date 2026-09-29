import React from 'react';
import { siteConfig } from '../data/siteData';
import { Code, BookOpen, Rocket, MessageSquare, Award } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950/60 relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built While We Learn.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Growing Through Real Projects.
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            “We’re two passionate developers and designers turning learning into real-world projects and experiences.”
          </p>
        </div>

        {/* Narrative & Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Story Card */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-gray-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-400" />
                The Student-Led Studio Journey
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                JB was founded by <strong className="text-white">JEEVANANTHAM</strong> and <strong className="text-white">BOOPATHI</strong> while pursuing our college degrees. Driven by a passion for technology and design, we started this studio to push our skills beyond classroom theory into real-world applications.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Every client requirement brings fresh technical challenges. By collaborating directly with creators, local businesses, and fellow students, we sharpen our abilities in web development, mobile apps, and creative design while delivering practical value.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-800/80">
              <div className="text-center p-3 rounded-xl bg-gray-900/60 border border-gray-800">
                <Rocket className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                <span className="text-xs text-gray-300 font-medium block">Learning</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-gray-900/60 border border-gray-800">
                <Code className="w-5 h-5 text-indigo-400 mx-auto mb-1" />
                <span className="text-xs text-gray-300 font-medium block">Development</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-gray-900/60 border border-gray-800">
                <MessageSquare className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                <span className="text-xs text-gray-300 font-medium block">Direct Talk</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-gray-900/60 border border-gray-800">
                <Award className="w-5 h-5 text-pink-400 mx-auto mb-1" />
                <span className="text-xs text-gray-300 font-medium block">Honest Quality</span>
              </div>
            </div>
          </div>

          {/* Highlights / Mission Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-gray-950 rounded-3xl p-6 sm:p-8 border border-indigo-500/20 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-indigo-400">Our Mindset</span>
              <h4 className="text-2xl font-bold text-white mt-2 mb-4">No Fake Hype. Pure Dedication.</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                We don't claim decades of agency experience or pretend to be a massive corporate team. We offer something better: total commitment to your project, direct developer access, transparent prices, and code written with genuine care.
              </p>
            </div>
            
            <div className="p-4 rounded-2xl bg-gray-950/80 border border-gray-800">
              <span className="text-xs text-gray-400 block font-medium">Core Studio Focus</span>
              <p className="text-sm text-indigo-300 font-semibold mt-1">
                Web Development • Mobile Apps • Poster & Event Graphics
              </p>
            </div>
          </div>

        </div>

        {/* Team Cards Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">Meet the Team Members</h3>
            <p className="text-sm text-gray-400">The duo behind JB Studio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {siteConfig.team.map((member) => (
              <div 
                key={member.id} 
                className="glass-card glass-card-hover rounded-3xl p-6 border border-gray-800 flex flex-col sm:flex-row items-center sm:items-start gap-6"
              >
                {/* Profile Image */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-indigo-500/30 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="space-y-3 text-center sm:text-left flex-grow">
                  <div>
                    <h4 className="text-xl font-extrabold text-white tracking-wide">{member.name}</h4>
                    <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full inline-block mt-1 border border-indigo-500/20">
                      {member.role}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 pt-1">
                    {member.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-mono text-gray-300 bg-gray-900 border border-gray-800 px-2 py-0.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
