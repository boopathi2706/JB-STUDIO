import React, { useState } from 'react';
import { siteConfig } from '../data/siteData';
import { MessageSquare, Mail, Code, Share2, Send, CheckCircle2, PhoneCall } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Development',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.details.trim()) errs.details = 'Project details are required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    // Simulate standard submission processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hi JB Studio! My name is ${formData.name || 'a client'}. I'm interested in ${formData.service}.\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDetails: ${formData.details}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative bg-gray-950/90 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have an Idea? Let's Build It.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Tell us what you're looking to build, and we'll discuss the requirements with you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card rounded-3xl p-8 border border-gray-800 space-y-6">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <p className="text-sm text-gray-400">
                Reach out to JEEVANANTHAM or BOOPATHI directly via WhatsApp, Email, or social handles.
              </p>

              <div className="space-y-4">
                {/* WhatsApp */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-green-500/40 transition-colors">
                  <div className="p-2.5 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-gray-400 block">WhatsApp</span>
                    <a href={`https://wa.me/${siteConfig.contact.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-green-400 transition">
                      {siteConfig.contact.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-blue-500/40 transition-colors">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-gray-400 block">Email Studio</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-semibold text-white hover:text-blue-400 transition">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-gray-800">
                <span className="text-xs uppercase font-mono text-gray-400 block mb-3">Connect With Us</span>
                <div className="flex items-center gap-3">
                  <a
                    href={siteConfig.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 transition"
                    title="GitHub"
                  >
                    <Code className="w-5 h-5" />
                  </a>
                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 transition"
                    title="LinkedIn"
                  >
                    <Share2 className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-gray-800 relative">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 border border-green-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. We've received your request for <strong className="text-indigo-400">{formData.service}</strong> and will get back to you shortly.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-green-950/50"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp Now</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: 'Web Development', details: '' });
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-300 text-xs font-medium border border-gray-800"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-900/80 border ${
                        errors.name ? 'border-red-500' : 'border-gray-800'
                      } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition`}
                    />
                    {errors.name && <span className="text-[10px] text-red-400 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-900/80 border ${
                        errors.email ? 'border-red-500' : 'border-gray-800'
                      } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition`}
                    />
                    {errors.email && <span className="text-[10px] text-red-400 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/80 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Select Service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/80 border border-gray-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition"
                    >
                      <option value="Web Development">Web Development (₹5,000+)</option>
                      <option value="App Development">App Development (₹10,000+)</option>
                      <option value="Poster Design">Poster Design (₹500+)</option>
                      <option value="Other">Other Custom Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Project Details & Scope *
                  </label>
                  <textarea
                    name="details"
                    rows="4"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Briefly describe your idea, features needed, target audience, and preferred deadline..."
                    className={`w-full px-4 py-3 rounded-xl bg-gray-900/80 border ${
                      errors.details ? 'border-red-500' : 'border-gray-800'
                    } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition resize-none`}
                  />
                  {errors.details && <span className="text-[10px] text-red-400 mt-1 block">{errors.details}</span>}
                </div>

                {/* Submit Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-950/50 transition flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-gray-900 hover:bg-green-950/40 text-green-400 border border-green-800/40 font-medium text-xs flex items-center justify-center gap-2 transition"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Direct</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
