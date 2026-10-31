import React from 'react';
import {
  FileDown,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Trophy,
  Zap,
  Activity,
  Shield,
  Target,
  Sparkles,
  Award
} from 'lucide-react';
import { PLAYER_DATA } from '../data/portfolioData.ts';
import { soundManager } from '../utils/soundEffects.ts';

interface HeroProps {
  onOpenResume: () => void;
  onOpenMiniGame: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenMiniGame }) => {
  const scrollTo = (id: string) => {
    soundManager.playBlip(650);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 lg:py-24">
      {/* 1. International Cricket Stadium Atmosphere & Floodlights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep stadium dark gradient */}
        <div className="absolute inset-0 bg-radial from-[#121c33]/70 via-[#080B12] to-[#05070c]"></div>

        {/* Top Floodlight Beams - Left */}
        <div className="absolute -top-32 -left-20 w-96 h-[600px] bg-gradient-to-b from-cyan-400/25 via-blue-600/10 to-transparent transform -rotate-45 blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 left-1/4 w-72 h-[700px] bg-gradient-to-b from-blue-400/20 via-cyan-500/5 to-transparent transform -rotate-12 blur-2xl opacity-60"></div>

        {/* Top Floodlight Beams - Right */}
        <div className="absolute -top-32 -right-20 w-96 h-[600px] bg-gradient-to-b from-blue-500/25 via-cyan-600/10 to-transparent transform rotate-45 blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-72 h-[700px] bg-gradient-to-b from-cyan-400/20 via-blue-500/5 to-transparent transform rotate-12 blur-2xl opacity-60"></div>

        {/* Cricket Pitch Ground Grid & Crease Marking */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-emerald-950/20 via-[#0b1324]/40 to-transparent"></div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-white/30 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.4)]"></div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] font-mono-tech uppercase tracking-[0.3em] text-white/20 text-center">
          22 YARDS DIGITAL ARENA • CREASE MARKING
        </div>

        {/* Floodlight Rig Graphic in Top Corners */}
        <div className="absolute top-4 left-6 hidden md:flex items-center gap-1.5 opacity-40">
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]"></div>
          <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]"></div>
          <span className="text-[9px] font-scoreboard text-cyan-400 ml-1">FLOODLIGHT TOWER 01</span>
        </div>
        <div className="absolute top-4 right-6 hidden md:flex items-center gap-1.5 opacity-40">
          <span className="text-[9px] font-scoreboard text-cyan-400 mr-1">FLOODLIGHT TOWER 02</span>
          <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Player Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Player Meta Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111726]/90 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="text-cyan-400 font-scoreboard text-xs font-bold tracking-widest uppercase">
                PLAYER NO. {PLAYER_DATA.jerseyNumber}
              </span>
              <span className="text-white/30">•</span>
              <span className="text-slate-300 font-mono-tech text-xs tracking-wider">
                {PLAYER_DATA.academicLevel} • {PLAYER_DATA.university}
              </span>
            </div>

            {/* Main Player Name */}
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-scoreboard uppercase tracking-[0.25em] text-cyan-400 font-semibold flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>OFFICIAL PLAYER PROFILE</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.08] font-['Space_Grotesk']">
                P CHAANAKYA <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  CHOWHAN REDDY
                </span>
              </h1>
            </div>

            {/* Professional Title */}
            <div className="p-2.5 sm:p-3 rounded-lg bg-[#111726]/80 border border-white/10 w-full">
              <p className="text-sm sm:text-base font-mono-tech text-cyan-300 font-medium">
                {PLAYER_DATA.professionalTitle} | Aspiring Developer | Tech Enthusiast
              </p>
            </div>

            {/* Tagline Callout */}
            <div className="border-l-4 border-cyan-400 pl-4 py-1">
              <p className="text-base sm:text-lg font-scoreboard font-semibold text-white tracking-wide">
                &ldquo;{PLAYER_DATA.tagline}&rdquo;
              </p>
            </div>

            {/* Introduction Bio */}
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl font-sans">
              {PLAYER_DATA.heroIntro}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('#about')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-scoreboard text-xs font-bold tracking-wider transition-all duration-300 shadow-[0_0_24px_rgba(59,130,246,0.4)] hover:shadow-[0_0_32px_rgba(6,182,212,0.6)] flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>EXPLORE MY PORTFOLIO</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('#projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#161F33] hover:bg-[#1f2a44] text-white border border-white/15 hover:border-cyan-400/60 font-scoreboard text-xs font-bold tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>VIEW MY PROJECTS</span>
              </button>

              <button
                onClick={() => {
                  soundManager.playBatHit();
                  onOpenResume();
                }}
                className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400 font-scoreboard text-xs font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </button>
            </div>

            {/* Social Icons & Connectivity */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono-tech text-slate-400">
              <span className="text-white/40 uppercase tracking-widest text-[10px]">
                CONNECT:
              </span>
              <a
                href={PLAYER_DATA.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playBlip(720)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#161F33] border border-white/10 hover:border-cyan-400 hover:text-cyan-300 text-slate-300 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <a
                href={PLAYER_DATA.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playBlip(720)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#161F33] border border-white/10 hover:border-cyan-400 hover:text-cyan-300 text-slate-300 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PLAYER_DATA.email}`}
                onClick={() => soundManager.playBlip(720)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#161F33] border border-white/10 hover:border-cyan-400 hover:text-cyan-300 text-slate-300 transition-all"
                title="Send Direct Email"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">{PLAYER_DATA.email}</span>
                <span className="sm:hidden">Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Cricket Video Game Player Card HUD */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Card Ambient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/40 via-blue-600/30 to-purple-600/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              {/* Holographic Player Card Frame */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#161F33] via-[#101625] to-[#080B12] border-2 border-cyan-500/40 p-5 sm:p-6 shadow-2xl overflow-hidden">
                {/* Diagonal Tech Watermark */}
                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40"></div>

                {/* Card Top Scoreboard Banner */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-b from-cyan-400 to-blue-600 text-black font-scoreboard shadow-lg">
                      <span className="text-2xl font-black leading-none">94</span>
                      <span className="text-[9px] font-bold tracking-tight uppercase">OVR</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-scoreboard tracking-widest text-cyan-400 font-bold uppercase">
                        ALL-ROUNDER
                      </div>
                      <div className="text-sm font-bold text-white font-scoreboard">
                        CHAANAKYA #07
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono-tech">
                        REVA UNIV • SQUAD #07
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono-tech font-bold">
                      IN FORM
                    </span>
                    <span className="text-[9px] font-scoreboard text-slate-400 mt-1">
                      RIGHT HAND BAT
                    </span>
                  </div>
                </div>

                {/* Player Profile Silhouette & Hologram Graphics */}
                <div className="relative my-4 h-56 rounded-xl bg-gradient-to-b from-[#0b0e15] to-[#121826] border border-white/10 overflow-hidden flex items-center justify-center">
                  {/* Stadium floodlight cones behind player */}
                  <div className="absolute inset-0 flex justify-between px-6 pointer-events-none">
                    <div className="w-16 h-full bg-cyan-400/20 blur-xl transform -skew-x-12"></div>
                    <div className="w-16 h-full bg-blue-500/20 blur-xl transform skew-x-12"></div>
                  </div>

                  {/* Cricket Pitch Stumps & Bails in Background */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-1.5 opacity-40">
                    <div className="w-1 h-16 bg-amber-200/60 rounded-t"></div>
                    <div className="w-1 h-16 bg-amber-200/60 rounded-t"></div>
                    <div className="w-1 h-16 bg-amber-200/60 rounded-t"></div>
                  </div>

                  {/* Stylized Modern Cricket Player Graphic / Avatar */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Player Helmet / Head with Tech Visor */}
                    <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-b from-[#1a233a] to-[#0c101a] border-2 border-cyan-400/60 flex items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                      {/* Cricket Helmet Grille & Tech Visor */}
                      <div className="w-16 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent animate-sweep-slow"></div>
                        <span className="text-[10px] font-scoreboard font-bold text-cyan-200 tracking-wider">
                          AIML VISOR
                        </span>
                      </div>
                      {/* Jersey badge */}
                      <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-blue-600 border border-white flex items-center justify-center text-[10px] font-scoreboard font-black text-white shadow-md">
                        07
                      </div>
                    </div>

                    {/* Jersey Nameplate */}
                    <div className="mt-3 px-3 py-1 rounded-md bg-[#161F33] border border-cyan-500/30 text-center">
                      <span className="text-xs font-scoreboard font-bold tracking-widest text-cyan-300 uppercase">
                        P. CHAANAKYA REDDY
                      </span>
                    </div>
                  </div>

                  {/* Match Rating Badge */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-blue-900/60 border border-blue-400/30 text-[9px] font-mono-tech text-blue-300">
                    ROLE: ALL-ROUNDER
                  </div>
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-amber-900/40 border border-amber-400/30 text-[9px] font-scoreboard text-amber-300">
                    STRIKE RATE: 100%
                  </div>
                </div>

                {/* Player Attributes Matrix (Gaming HUD Style) */}
                <div className="space-y-2.5 pt-1">
                  <div className="text-[11px] font-scoreboard text-cyan-400 uppercase tracking-widest font-semibold flex items-center justify-between">
                    <span>PLAYER ATTRIBUTES</span>
                    <span className="text-slate-400 font-mono-tech text-[10px]">VERIFIED 3RD SEM</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech">
                    <div className="p-2 rounded-lg bg-[#0b0e15] border border-white/5 flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-cyan-400" />
                        <span>CODE</span>
                      </span>
                      <span className="font-scoreboard font-bold text-white">CORE DEV</span>
                    </div>

                    <div className="p-2 rounded-lg bg-[#0b0e15] border border-white/5 flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-blue-400" />
                        <span>AI / ML</span>
                      </span>
                      <span className="font-scoreboard font-bold text-cyan-300">MODELS</span>
                    </div>

                    <div className="p-2 rounded-lg bg-[#0b0e15] border border-white/5 flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-amber-400" />
                        <span>HARDWARE</span>
                      </span>
                      <span className="font-scoreboard font-bold text-white">ESP32 / IOT</span>
                    </div>

                    <div className="p-2 rounded-lg bg-[#0b0e15] border border-white/5 flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-emerald-400" />
                        <span>INNINGS</span>
                      </span>
                      <span className="font-scoreboard font-bold text-emerald-400">NOT OUT</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Easter Egg Button on Card */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-mono-tech">
                    INTERACTIVE MATCH HUD
                  </span>
                  <button
                    onClick={() => {
                      soundManager.playBatHit();
                      onOpenMiniGame();
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-[11px] font-scoreboard text-cyan-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-cyan-300" />
                    <span>PLAY SHOT TEST</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
