import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Pricing } from './components/Pricing';
import { Workflow } from './components/Workflow';
import { WhyJB } from './components/WhyJB';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { siteConfig } from './data/siteData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.title = siteConfig.brand.browserTitle;
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; // offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'work', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white pb-16 md:pb-0">
      {/* Desktop Header Navigation */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Services scrollToSection={scrollToSection} />
        <TechStack />
        <Projects />
        <Pricing scrollToSection={scrollToSection} />
        <Workflow />
        <WhyJB />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activeSection={activeSection} scrollToSection={scrollToSection} />
    </div>
  );
}
