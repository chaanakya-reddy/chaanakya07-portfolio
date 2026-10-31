import React, { useState } from 'react';
import {
  Trophy,
  Users,
  Calendar,
  Layers,
  Award,
  Sparkles,
  Edit3,
  Check,
  Share2,
  CheckCircle2,
  MessageSquare,
  FileText,
  Briefcase
} from 'lucide-react';
import { HACKATHON_DATA } from '../data/portfolioData.ts';
import { soundManager } from '../utils/soundEffects.ts';

export const Hackathons: React.FC = () => {
  // Configurable state with exact defaults requested, allowing user to edit on the fly
  const [tournamentName, setTournamentName] = useState('Collegiate Innovation Sprint');
  const [tournamentDate, setTournamentDate] = useState('Season 2024 - 2025');
  const [teamMembers, setTeamMembers] = useState('P Chaanakya Chowhan Reddy & Collaboration Team');
  const [techStack, setTechStack] = useState('React, Cloud Realtime, JavaScript');
  const [finalResult, setFinalResult] = useState('Prototype Showcase & Innovation Pitch Presented');
  const [isEditing, setIsEditing] = useState(false);
  const [savedToast, setSavedToast] = useState(false);

  const handleSave = () => {
    soundManager.playBlip(800);
    setIsEditing(false);
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2500);
  };

  return (
    <section id="hackathons" className="relative py-20 lg:py-28 overflow-hidden bg-[#0a0d17]/60">
      {/* Stadium Grid & Background Aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-scoreboard text-xs font-semibold tracking-widest uppercase mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>TOURNAMENT HISTORY & HACKATHONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-['Space_Grotesk']">
            HACKATHONS & INNOVATION
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-mono-tech max-w-xl mx-auto">
            Competitive hackathon participation and engineering sprint showcases.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Cricket Tournament Participation Card */}
        <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 lg:p-10 border border-purple-500/30 shadow-2xl relative overflow-hidden">
          {/* Top Tournament Scoreboard Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-scoreboard text-purple-400 uppercase tracking-widest mb-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span>CRICKET TOURNAMENT PARTICIPATION ENTRY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-['Space_Grotesk']">
                {HACKATHON_DATA.projectName}
              </h3>
              <p className="text-sm text-cyan-300 font-mono-tech mt-1">
                INNOVATIVE COLLABORATIVE ARCHITECTURE SPRINT
              </p>
            </div>

            {/* Quick Edit Placeholder Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  soundManager.playBlip(700);
                  setIsEditing(!isEditing);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161F33] hover:bg-[#202b44] border border-white/10 hover:border-purple-400/50 text-slate-300 text-xs font-mono-tech transition-colors cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5 text-purple-400" />
                <span>{isEditing ? 'Cancel Edit' : 'Edit Placeholders'}</span>
              </button>

              <div className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-scoreboard font-bold uppercase">
                TOURNAMENT MATCH
              </div>
            </div>
          </div>

          {/* Project Description from brief */}
          <div className="py-6 border-b border-white/10">
            <h4 className="text-xs font-scoreboard text-slate-400 uppercase tracking-wider mb-2">
              PROJECT CONCEPT & PROBLEM SOLVED:
            </h4>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans">
              &ldquo;{HACKATHON_DATA.description}&rdquo;
            </p>

            {/* 3 Project Focus Areas */}
            <div className="mt-5">
              <span className="text-[11px] font-scoreboard text-purple-400 uppercase tracking-wider block mb-3">
                CORE PROJECT FOCUS PILLARS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#0b0e15] border border-white/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Team Communication
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono-tech">
                      Real-time synchronized messaging
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0b0e15] border border-white/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      File Sharing
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono-tech">
                      Seamless asset distribution
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0b0e15] border border-white/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Collaborative Productivity
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editable Tournament Record Form or Display */}
          <div className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-scoreboard text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>TOURNAMENT SCORECARD DETAILS (EDITABLE PLACEHOLDERS)</span>
              </span>
              {savedToast && (
                <span className="text-xs text-emerald-400 font-mono-tech flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Record Updated!</span>
                </span>
              )}
            </div>

            {isEditing ? (
              <div className="p-5 rounded-xl bg-[#080B12] border border-purple-500/30 space-y-4 font-mono-tech text-xs">
                <div>
                  <label className="text-slate-400 block mb-1">Hackathon Name:</label>
                  <input
                    type="text"
                    value={tournamentName}
                    onChange={(e) => setTournamentName(e.target.value)}
                    className="w-full p-2.5 rounded bg-[#111726] border border-white/10 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 block mb-1">Tournament Date:</label>
                    <input
                      type="text"
                      value={tournamentDate}
                      onChange={(e) => setTournamentDate(e.target.value)}
                      className="w-full p-2.5 rounded bg-[#111726] border border-white/10 text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Team Members:</label>
                    <input
                      type="text"
                      value={teamMembers}
                      onChange={(e) => setTeamMembers(e.target.value)}
                      className="w-full p-2.5 rounded bg-[#111726] border border-white/10 text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 block mb-1">Technologies Used:</label>
                    <input
                      type="text"
                      value={techStack}
                      onChange={(e) => setTechStack(e.target.value)}
                      className="w-full p-2.5 rounded bg-[#111726] border border-white/10 text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Final Result:</label>
                    <input
                      type="text"
                      value={finalResult}
                      onChange={(e) => setFinalResult(e.target.value)}
                      className="w-full p-2.5 rounded bg-[#111726] border border-white/10 text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleSave}
                    className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-scoreboard text-xs font-bold cursor-pointer"
                  >
                    SAVE SCORECARD
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono-tech">
                <div className="p-3.5 rounded-xl bg-[#0b0e15] border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    HACKATHON TOURNAMENT
                  </span>
                  <span className="text-xs font-semibold text-white mt-1 block">
                    {tournamentName}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0e15] border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    MATCH DATE
                  </span>
                  <span className="text-xs font-semibold text-cyan-300 mt-1 block">
                    {tournamentDate}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0e15] border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    SQUAD / TEAM MEMBERS
                  </span>
                  <span className="text-xs font-semibold text-purple-300 mt-1 block truncate">
                    {teamMembers}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0e15] border border-white/5 sm:col-span-2">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    TECHNOLOGIES USED
                  </span>
                  <span className="text-xs font-semibold text-amber-300 mt-1 block">
                    {techStack}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0e15] border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    FINAL RESULT
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 font-scoreboard mt-1 block">
                    {finalResult}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
