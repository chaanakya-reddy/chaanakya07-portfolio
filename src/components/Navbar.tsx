import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  FileDown,
  Volume2,
  VolumeX,
  Sparkles,
  Gamepad2,
  Award
} from 'lucide-react';
import { soundManager } from '../utils/soundEffects.ts';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenMiniGame?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenMiniGame }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', code: '01' },
    { label: 'ABOUT', href: '#about', code: '02' },
    { label: 'EDUCATION', href: '#education', code: '03' },
    { label: 'SKILLS', href: '#skills', code: '04' },
    { label: 'PROJECTS', href: '#projects', code: '05' },
    { label: 'HACKATHONS', href: '#hackathons', code: '06' },
    { label: 'CONTACT', href: '#contact', code: '07' },
  ];

  const toggleSound = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    soundManager.isMuted = nextState;
    if (!nextState) {
      soundManager.playBlip(750);
    }
  };

  const handleNavClick = (href: string) => {
    soundManager.playBlip(620);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B12]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)]'
          : 'bg-[#080B12]/60 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-3.5 focus:outline-none"
          >
            {/* Custom Cricket Shield Logo: CCR */}
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#161F33] to-[#0b0e15] border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.45)] transition-all duration-300">
              {/* Cricket seam / lighting line */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-lg group-hover:bg-blue-500/30 transition-all"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              </div>
              <div className="text-center font-scoreboard tracking-tighter">
                <span className="text-base font-black text-white group-hover:text-cyan-300 transition-colors">
                  CCR
                </span>
                <span className="block text-[8px] font-mono-tech text-cyan-400 tracking-widest font-semibold">
                  #07
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-scoreboard font-bold tracking-wider text-sm md:text-base text-white group-hover:text-cyan-300 transition-colors">
                  CHAANAKYA
                </span>
                <span className="text-xs px-1.5 py-0.2 bg-blue-500/20 text-blue-300 rounded border border-blue-500/30 font-mono-tech hidden sm:inline-block">
                  AIML
                </span>
              </div>
              <span className="text-[11px] font-mono-tech text-slate-400 tracking-wider">
                REVA UNIVERSITY • 3RD SEM
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative px-3 py-1.5 text-xs font-mono-tech tracking-wider text-slate-300 hover:text-cyan-300 transition-all rounded-md group hover:bg-white/[0.04]"
              >
                <span className="text-[9px] text-cyan-500/70 block -mb-0.5 group-hover:text-cyan-400">
                  {link.code}
                </span>
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Action Hub & Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Interactive Cricket Shot Easter Egg Trigger */}
            {onOpenMiniGame && (
              <button
                onClick={() => {
                  soundManager.playBatHit();
                  onOpenMiniGame();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 text-xs font-mono-tech transition-all cursor-pointer shadow-sm group"
                title="Play 22-Yards Shot Challenge"
              >
                <Gamepad2 className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform" />
                <span className="hidden xl:inline">MINI GAME</span>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                </span>
              </button>
            )}

            {/* Sound Mute/Unmute */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-lg bg-[#161F33] border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all cursor-pointer"
              title={isMuted ? 'Turn Sound ON' : 'Mute Sound'}
              aria-label="Sound Toggle"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-slate-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-cyan-400" />
              )}
            </button>

            {/* Download Resume Button */}
            <button
              onClick={() => {
                soundManager.playBatHit();
                onOpenResume();
              }}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-scoreboard text-xs font-semibold tracking-wider hover:from-blue-500 hover:to-cyan-500 transition-all shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_28px_rgba(6,182,212,0.55)] cursor-pointer group"
            >
              <FileDown className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>DOWNLOAD RESUME</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleSound}
              className="p-2 rounded-lg bg-[#161F33] border border-white/10 text-slate-300 cursor-pointer"
              aria-label="Sound toggle"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-slate-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-cyan-400" />
              )}
            </button>

            <button
              onClick={() => {
                soundManager.playBlip(700);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2.5 rounded-lg bg-[#161F33] border border-white/10 text-slate-200 hover:text-cyan-300 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-cyan-400" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer (Cricket Scoreboard Themed) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d121e]/98 backdrop-blur-2xl border-b border-cyan-500/20 px-5 pt-4 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          {/* Match HUD Status Header in Mobile */}
          <div className="p-3 rounded-lg bg-[#111726] border border-white/10 flex items-center justify-between text-xs font-mono-tech">
            <div className="flex items-center gap-2 text-cyan-400">
              <Award className="w-4 h-4" />
              <span>PLAYER: CHAANAKYA #07</span>
            </div>
            <span className="text-emerald-400 font-scoreboard font-bold">
              3RD SEM • ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="flex items-center justify-between p-3 rounded-lg bg-[#161F33]/80 border border-white/5 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 transition-colors text-xs font-mono-tech tracking-wider"
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-cyan-400 font-scoreboard">
                  {link.code}
                </span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                soundManager.playBatHit();
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-scoreboard text-xs font-bold tracking-wider shadow-lg cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </button>

            {onOpenMiniGame && (
              <button
                onClick={() => {
                  soundManager.playBatHit();
                  setMobileMenuOpen(false);
                  onOpenMiniGame();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono-tech text-xs cursor-pointer"
              >
                <Gamepad2 className="w-4 h-4 text-emerald-400" />
                <span>PLAY 22-YARDS MINI GAME</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
