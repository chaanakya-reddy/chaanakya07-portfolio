import React from 'react';
import {
  User,
  GraduationCap,
  Sparkles,
  BookOpen,
  Compass,
  Flame,
  Award,
  Layers,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { PLAYER_DATA } from '../data/portfolioData.ts';
import { soundManager } from '../utils/soundEffects.ts';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-scoreboard text-xs font-semibold tracking-widest uppercase mb-3">
            <User className="w-3.5 h-3.5" />
            <span>CRICKET SQUAD DOSSIER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-['Space_Grotesk']">
            PLAYER PROFILE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Player Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Player Bio & Detailed Card */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Player Description Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <Award className="w-32 h-32 text-cyan-400" />
              </div>

              <div className="flex items-center gap-2 text-xs font-scoreboard text-cyan-400 uppercase tracking-widest mb-3">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>OFFICIAL PLAYER BIOGRAPHY</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">
                {PLAYER_DATA.fullName}
              </h3>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-6">
                &ldquo;{PLAYER_DATA.aboutDescription}&rdquo;
              </p>

              {/* Cricket Style Player Telemetry Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-[#0b0e15] border border-white/5">
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-wider block">
                    BATTING STYLE
                  </span>
                  <span className="text-xs font-scoreboard font-bold text-white mt-1 block">
                    {PLAYER_DATA.battingStyle}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#0b0e15] border border-white/5">
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-wider block">
                    BOWLING STYLE
                  </span>
                  <span className="text-xs font-scoreboard font-bold text-cyan-300 mt-1 block">
                    {PLAYER_DATA.bowlingStyle}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#0b0e15] border border-white/5">
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-wider block">
                    PLAYER ROLE
                  </span>
                  <span className="text-xs font-scoreboard font-bold text-amber-300 mt-1 block">
                    {PLAYER_DATA.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Core Interests Showcase */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-2 text-xs font-scoreboard text-cyan-400 uppercase tracking-wider mb-4">
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>AREAS OF SPECIAL INTEREST & PASSION</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PLAYER_DATA.interests.map((interest, idx) => (
                  <div
                    key={interest}
                    onMouseEnter={() => soundManager.playBlip(700 + idx * 30)}
                    className="p-3 rounded-xl bg-[#161F33]/80 border border-white/5 hover:border-cyan-400/40 text-center transition-all group cursor-default"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                      {idx === 0 && <Cpu className="w-4 h-4 text-cyan-400" />}
                      {idx === 1 && <Sparkles className="w-4 h-4 text-blue-400" />}
                      {idx === 2 && <Layers className="w-4 h-4 text-emerald-400" />}
                      {idx === 3 && <GraduationCap className="w-4 h-4 text-amber-400" />}
                    </div>
                    <span className="text-xs font-mono-tech text-slate-200 group-hover:text-cyan-300 font-medium">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Cricket Player Profile Identity Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel-elevated rounded-2xl p-6 border border-cyan-500/30 relative">
              {/* Card Header Stamp */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]"></div>
                  <span className="font-scoreboard font-bold text-sm tracking-wider text-white uppercase">
                    PLAYER DOSSIER CARD
                  </span>
                </div>
                <span className="font-scoreboard text-xs text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30">
                  MATCH READY
                </span>
              </div>

              {/* Data Rows */}
              <div className="space-y-4 font-mono-tech">
                <div className="p-3 rounded-xl bg-[#0b0e15] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">
                    Full Name
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white font-scoreboard">
                    {PLAYER_DATA.fullName}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#0b0e15] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">
                    Education
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-cyan-300">
                    B.Tech
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#0b0e15] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">
                    Specialization
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white text-right">
                    Artificial Intelligence and Machine Learning
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#0b0e15] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">
                    University
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-amber-300">
                    {PLAYER_DATA.university}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#0b0e15] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">
                    Current Semester
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-emerald-400 font-scoreboard">
                    3rd Semester (Active)
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#0b0e15] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">
                    Home Base
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    {PLAYER_DATA.location}
                  </span>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono-tech">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Academic Dossier</span>
                </span>
                <span className="text-[10px] text-white/40">
                  REVA SCIT SQUAD #07
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
