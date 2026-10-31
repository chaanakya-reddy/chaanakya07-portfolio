import React from 'react';
import {
  GraduationCap,
  Calendar,
  Building2,
  TrendingUp,
  Award,
  Zap,
  Target,
  Sparkles
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData.ts';
import { soundManager } from '../utils/soundEffects.ts';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-20 lg:py-28 overflow-hidden bg-[#0a0d17]/60">
      {/* Background Stadium Floodlights & Seam Graphic */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-scoreboard text-xs font-semibold tracking-widest uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>CAREER INNINGS SCORECARD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-['Space_Grotesk']">
            MY EDUCATION
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Cricket Career Statistics Dashboard Card */}
        <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-cyan-500/30 mb-10 shadow-2xl relative overflow-hidden">
          {/* Top scoreboard strip */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs font-scoreboard text-cyan-400 uppercase tracking-widest font-semibold flex items-center gap-2 mb-1">
                <Building2 className="w-4 h-4 text-cyan-400" />
                <span>DEGREE PROFILE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-['Space_Grotesk']">
                {EDUCATION_DATA.degree} – {EDUCATION_DATA.specialization}
              </h3>
              <p className="text-base text-amber-300 font-mono-tech mt-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>{EDUCATION_DATA.institution}</span>
              </p>
            </div>

            {/* Current Match Status Badge */}
            <div className="flex flex-col sm:items-end">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-widest">
                CAREER MATCH STATUS
              </span>
              <div className="mt-1 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/40 text-emerald-300 font-scoreboard text-sm font-bold tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{EDUCATION_DATA.currentStatus}</span>
              </div>
            </div>
          </div>

          {/* Innings Timeline (Semesters as Match Innings) */}
          <div className="mt-8 space-y-4">
            <div className="text-xs font-scoreboard text-slate-300 uppercase tracking-wider flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span>CAREER INNINGS BREAKDOWN (SEMESTER PROGRESSION)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {EDUCATION_DATA.innings.map((inning, index) => {
                const isCurrent = index === 2;
                return (
                  <div
                    key={inning.number}
                    onMouseEnter={() => soundManager.playBlip(680 + index * 40)}
                    className={`relative rounded-xl p-5 border transition-all duration-300 ${
                      isCurrent
                        ? 'bg-gradient-to-b from-[#18233c] to-[#0f172a] border-cyan-400/60 shadow-[0_0_24px_rgba(6,182,212,0.25)]'
                        : 'bg-[#0e1320]/80 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Top status indicator */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-scoreboard text-xs font-black text-cyan-400 tracking-wider">
                        {inning.number}
                      </span>
                      <span
                        className={`text-[9px] font-mono-tech font-bold px-2 py-0.5 rounded ${
                          isCurrent
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-white/5 text-slate-400 border border-white/10'
                        }`}
                      >
                        {inning.statusBadge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-2 font-['Space_Grotesk']">
                      {inning.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4 font-sans">
                      {inning.summary}
                    </p>

                    {/* Key Technical Focus Areas */}
                    <div className="space-y-1.5 pt-3 border-t border-white/5">
                      <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-wider block">
                        FOCUS CURRICULUM:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {inning.focusAreas.map((area) => (
                          <span
                            key={area}
                            className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[#161F33] text-cyan-200 border border-white/5"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    {isCurrent && (
                      <div className="mt-4 pt-2 flex items-center gap-1.5 text-[10px] font-scoreboard text-cyan-300">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span>AT THE CREASE • ACTIVE INNINGS</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Career Stats Strip */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono-tech">
            <div className="p-3 rounded-lg bg-[#0b0e15] border border-white/5">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                SPECIALIZATION
              </span>
              <span className="text-xs font-semibold text-cyan-300 mt-1 block">
                AI & MACHINE LEARNING
              </span>
            </div>

            <div className="p-3 rounded-lg bg-[#0b0e15] border border-white/5">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                UNIVERSITY SQUAD
              </span>
              <span className="text-xs font-semibold text-white mt-1 block">
                REVA UNIVERSITY
              </span>
            </div>

            <div className="p-3 rounded-lg bg-[#0b0e15] border border-white/5">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                INNINGS PROGRESSION
              </span>
              <span className="text-xs font-semibold text-emerald-400 font-scoreboard mt-1 block">
                3RD SEMESTER
              </span>
            </div>

            <div className="p-3 rounded-lg bg-[#0b0e15] border border-white/5">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                MATCH RIGOR
              </span>
              <span className="text-xs font-semibold text-amber-300 font-scoreboard mt-1 block">
                HANDS-ON & ACTIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
