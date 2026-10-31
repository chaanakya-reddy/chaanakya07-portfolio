import React, { useState } from 'react';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { PLAYER_DATA } from '../data/portfolioData.ts';
import { soundManager } from '../utils/soundEffects.ts';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});

  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (minimum 2 characters)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Please enter a subject (minimum 3 characters)';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playBlip(700);

    if (!validate()) {
      soundManager.playBlip(400);
      return;
    }

    // Trigger legitimate client-side mailto dispatch without falsely claiming server delivery
    const mailtoUrl = `mailto:${PLAYER_DATA.email}?subject=${encodeURIComponent(
      `[Portfolio Contact] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setStatus('success');
    soundManager.playCheer();
  };

  const handleCopyEmail = () => {
    soundManager.playBlip(750);
    navigator.clipboard.writeText(PLAYER_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Stadium Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-scoreboard text-xs font-semibold tracking-widest uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>PAVILION DIRECT LINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-['Space_Grotesk']">
            LET'S CONNECT
          </h2>
          <p className="mt-3 text-base text-slate-300 font-sans max-w-xl mx-auto">
            Have an interesting idea, project, or opportunity? Let's connect and build something amazing.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Profile Links & Stadium Desk */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div className="flex items-center gap-2 text-xs font-scoreboard text-cyan-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>DIRECT PLAYER COORDINATES</span>
              </div>

              <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                Get In Touch With Chaanakya
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Open to collaboration on Artificial Intelligence, Machine Learning models, web development, and hardware prototyping projects.
              </p>

              {/* Direct Channels */}
              <div className="space-y-3 font-mono-tech pt-2">
                {/* Email Address */}
                <div className="p-4 rounded-xl bg-[#0b0e15] border border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                        DIRECT EMAIL
                      </span>
                      <a
                        href={`mailto:${PLAYER_DATA.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors block truncate"
                      >
                        {PLAYER_DATA.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#161F33] hover:bg-[#222e48] border border-white/10 text-slate-300 transition-colors cursor-pointer flex-shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* GitHub Profile */}
                <a
                  href={PLAYER_DATA.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundManager.playBlip(720)}
                  className="p-4 rounded-xl bg-[#0b0e15] border border-white/10 hover:border-cyan-400/50 flex items-center gap-3 group transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <Github className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      GITHUB PROFILE
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      github.com/chaanakya-reddy
                    </span>
                  </div>
                </a>

                {/* LinkedIn Profile */}
                <a
                  href={PLAYER_DATA.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundManager.playBlip(720)}
                  className="p-4 rounded-xl bg-[#0b0e15] border border-white/10 hover:border-cyan-400/50 flex items-center gap-3 group transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      LINKEDIN PROFILE
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      linkedin.com/in/chaanakyareddy
                    </span>
                  </div>
                </a>

                {/* University Location */}
                <div className="p-4 rounded-xl bg-[#0b0e15] border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      UNIVERSITY ARENA
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      REVA University, Bengaluru, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-white/10 relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-xs font-scoreboard text-cyan-400 uppercase tracking-wider block">
                    TRANSMISSION DISPATCH DESK
                  </span>
                  <h4 className="text-lg font-bold text-white font-['Space_Grotesk']">
                    Send Direct Message
                  </h4>
                </div>
                <span className="text-xs font-mono-tech px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-400">
                  REAL-TIME VALIDATION
                </span>
              </div>

              {status === 'success' ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 font-mono-tech">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h5 className="text-lg font-bold text-white font-scoreboard">
                    MESSAGE PREPARED FOR DISPATCH!
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your local email client has been opened with your prefilled transmission to{' '}
                    <strong className="text-emerald-300">{PLAYER_DATA.email}</strong>.
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-5 py-2.5 rounded-lg bg-[#161F33] hover:bg-[#202b44] border border-white/15 text-white text-xs font-scoreboard font-bold tracking-wider cursor-pointer"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                    <a
                      href={`mailto:${PLAYER_DATA.email}?subject=${encodeURIComponent(
                        formData.subject
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-scoreboard font-bold tracking-wider flex items-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>OPEN EMAIL CLIENT AGAIN</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono-tech">
                  {/* Full Name */}
                  <div>
                    <label className="text-xs text-slate-300 uppercase tracking-wider block mb-1.5">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full p-3 rounded-xl bg-[#080B12] border text-white text-sm transition-all focus:outline-none ${
                        errors.name
                          ? 'border-red-500/60 focus:border-red-400'
                          : 'border-white/10 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="text-xs text-slate-300 uppercase tracking-wider block mb-1.5">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full p-3 rounded-xl bg-[#080B12] border text-white text-sm transition-all focus:outline-none ${
                        errors.email
                          ? 'border-red-500/60 focus:border-red-400'
                          : 'border-white/10 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-xs text-slate-300 uppercase tracking-wider block mb-1.5">
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. AI Project Collaboration / Tech Inquiry"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      className={`w-full p-3 rounded-xl bg-[#080B12] border text-white text-sm transition-all focus:outline-none ${
                        errors.subject
                          ? 'border-red-500/60 focus:border-red-400'
                          : 'border-white/10 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs text-slate-300 uppercase tracking-wider block mb-1.5">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Hi Chaanakya, I came across your portfolio and would love to discuss..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full p-3 rounded-xl bg-[#080B12] border text-white text-sm transition-all focus:outline-none resize-none ${
                        errors.message
                          ? 'border-red-500/60 focus:border-red-400'
                          : 'border-white/10 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 hover:from-blue-500 hover:to-cyan-400 text-white font-scoreboard text-xs font-bold tracking-wider transition-all duration-300 shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:shadow-[0_0_32px_rgba(6,182,212,0.55)] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>SEND MESSAGE</span>
                    </button>
                    <p className="text-[10px] text-slate-400 text-center mt-2 font-mono-tech">
                      Validated client-side. Dispatches directly to {PLAYER_DATA.email}.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
