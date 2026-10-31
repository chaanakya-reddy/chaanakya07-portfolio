import React from 'react';
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Trophy,
  Shield,
  Heart,
  Terminal
} from 'lucide-react';
import { PLAYER_DATA } from '../data/portfolioData.ts';
import { soundManager } from '../utils/soundEffects.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playBatHit();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'HACKATHONS', href: '#hackathons' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#06080e] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Stadium Pitch Crease Line in Footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Brand & Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#161F33] to-[#0b0e15] border border-cyan-500/40 text-cyan-300 font-scoreboard font-black text-sm">
                CCR
              </div>
              <span className="font-scoreboard text-lg font-bold text-white tracking-wider">
                P CHAANAKYA CHOWHAN REDDY
              </span>
            </div>
            <p className="text-xs font-mono-tech text-slate-400 mt-2">
              B.Tech AIML • REVA University • Player No. 07
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs font-mono-tech tracking-wider text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  soundManager.playBlip(620);
                  const el = document.querySelector(link.href);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back-to-Top Button */}
          <div className="flex items-center gap-3">
            <a
              href={PLAYER_DATA.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundManager.playBlip(750)}
              className="p-2.5 rounded-xl bg-[#111726] border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-white transition-all cursor-pointer"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 text-cyan-400" />
            </a>

            <a
              href={PLAYER_DATA.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundManager.playBlip(750)}
              className="p-2.5 rounded-xl bg-[#111726] border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-white transition-all cursor-pointer"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
            </a>

            <a
              href={`mailto:${PLAYER_DATA.email}`}
              onClick={() => soundManager.playBlip(750)}
              className="p-2.5 rounded-xl bg-[#111726] border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-white transition-all cursor-pointer"
              title="Email"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.35)] transition-all cursor-pointer"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-mono-tech text-slate-400">
          <div className="font-scoreboard tracking-wider text-slate-300">
            DESIGNED &amp; BUILT BY P CHAANAKYA CHOWHAN REDDY
          </div>

          <div className="text-[11px] text-white/40">
            © {new Date().getFullYear()} • CRICKET VIDEO GAME PORTFOLIO • DIGITAL ARENA
          </div>
        </div>
      </div>
    </footer>
  );
};
