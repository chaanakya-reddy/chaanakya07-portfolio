import React from 'react';
import { Activity, Flame, Shield, Trophy } from 'lucide-react';

export const ScoreboardTicker: React.FC = () => {
  return (
    <div className="w-full bg-[#0b0e15] border-b border-white/10 py-1.5 px-4 overflow-hidden relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono-tech tracking-wider">
        {/* Left Live Indicator */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-scoreboard text-emerald-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">
            LIVE MATCH HUD
          </span>
          <span className="text-white/20 hidden sm:inline">|</span>
        </div>

        {/* Marquee / Ticker text */}
        <div className="flex-1 overflow-hidden mx-4 text-slate-300 hidden md:block">
          <div className="whitespace-nowrap flex items-center gap-8 animate-none">
            <span className="inline-flex items-center gap-1.5 text-cyan-400">
              <Trophy className="w-3.5 h-3.5" />
              <span>MATCH: CHAANAKYA XI vs REAL-WORLD CHALLENGES</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="inline-flex items-center gap-1.5 text-amber-300">
              <Activity className="w-3.5 h-3.5" />
              <span>INNINGS: 3RD SEMESTER AT CREASE</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="inline-flex items-center gap-1.5 text-blue-400">
              <Flame className="w-3.5 h-3.5" />
              <span>SPECIALTY: AI/ML & PRACTICAL TECH</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="inline-flex items-center gap-1.5 text-purple-400">
              <Shield className="w-3.5 h-3.5" />
              <span>VENUE: REVA UNIVERSITY DIGITAL ARENA</span>
            </span>
          </div>
        </div>

        {/* Right Stats Quick Pill */}
        <div className="flex items-center gap-3 font-scoreboard text-[11px] text-cyan-300 flex-shrink-0">
          <div className="bg-[#161F33] border border-cyan-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
            <span className="text-white/60">RUN RATE:</span>
            <span className="text-white font-bold">100% NOT OUT</span>
          </div>
        </div>
      </div>
    </div>
  );
};
