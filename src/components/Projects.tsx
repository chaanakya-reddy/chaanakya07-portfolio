import React, { useState } from 'react';
import {
  Trophy,
  ExternalLink,
  Github,
  Check,
  Copy,
  Ticket,
  Cpu,
  SunMedium,
  Layers,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData.ts';
import { ProjectModal } from './ProjectModal.tsx';
import { soundManager } from '../utils/soundEffects.ts';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    soundManager.playBlip(750);
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleView = (project: ProjectItem) => {
    soundManager.playBatHit();
    setActiveProject(project);
  };

  return (
    <section id="projects" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Stadium Grid & Subtle Aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-scoreboard text-xs font-semibold tracking-widest uppercase mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>MATCH HIGHLIGHT REEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-['Space_Grotesk']">
            FEATURED PROJECTS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-mono-tech max-w-xl mx-auto">
            Key software and hardware innings delivered with engineering precision and practical real-world impact.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4"></div>
        </div>

        {/* 3 Match Highlights Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={project.id}
              className="glass-panel-interactive rounded-2xl bg-[#111726]/85 border border-white/10 hover:border-cyan-400/50 flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              <div>
                {/* 1. Custom Project-Specific Visual Thumbnail / HUD Mockup */}
                <div className="relative h-52 sm:h-56 bg-gradient-to-b from-[#161F33] to-[#0b0e15] border-b border-white/10 overflow-hidden p-4 flex flex-col justify-between">
                  {/* Top Match Badge */}
                  <div className="flex items-center justify-between z-10">
                    <span className="font-scoreboard text-[11px] font-bold text-cyan-300 px-2.5 py-1 rounded bg-[#080B12]/80 border border-cyan-500/30 uppercase tracking-wider">
                      {project.matchNumber}
                    </span>
                    <span className="text-[10px] font-mono-tech text-slate-400 bg-[#080B12]/60 px-2 py-0.5 rounded">
                      {project.projectNumber}
                    </span>
                  </div>

                  {/* PROJECT 01: IPL Booking SVG Visual Mockup */}
                  {project.id === 'ipl-booking' && (
                    <div className="relative my-auto flex flex-col items-center justify-center">
                      {/* Stadium Pitch Oval Graphic */}
                      <div className="w-48 h-24 rounded-[100%] border-2 border-dashed border-cyan-400/40 bg-emerald-950/20 flex items-center justify-center relative shadow-[inset_0_0_20px_rgba(6,182,212,0.2)]">
                        {/* Cricket Pitch Rectangle in Center */}
                        <div className="w-16 h-8 bg-amber-600/30 border border-amber-400/40 rounded flex items-center justify-center">
                          <span className="text-[8px] font-scoreboard text-amber-200 uppercase tracking-widest font-bold">
                            PITCH
                          </span>
                        </div>
                        {/* Stadium Stands Dots */}
                        <div className="absolute top-1 left-4 w-2 h-2 rounded-full bg-cyan-400"></div>
                        <div className="absolute top-1 right-4 w-2 h-2 rounded-full bg-cyan-400"></div>
                        <div className="absolute bottom-1 left-8 w-2 h-2 rounded-full bg-blue-400"></div>
                        <div className="absolute bottom-1 right-8 w-2 h-2 rounded-full bg-blue-400"></div>
                      </div>
                      <div className="mt-2 text-center">
                        <span className="text-[11px] font-scoreboard font-bold text-cyan-300 tracking-wider">
                          IPL MATCH TICKET DASHBOARD
                        </span>
                      </div>
                    </div>
                  )}

                  {/* PROJECT 02: Smart Parking SVG Visual Mockup */}
                  {project.id === 'smart-parking' && (
                    <div className="relative my-auto flex flex-col items-center justify-center">
                      <div className="w-52 h-24 rounded-xl bg-[#080B12] border border-cyan-500/30 p-2 flex flex-col justify-between">
                        {/* Parking Bay Slots */}
                        <div className="grid grid-cols-4 gap-1.5">
                          <div className="h-8 rounded bg-red-500/20 border border-red-500/40 flex items-center justify-center text-[9px] font-mono-tech text-red-300">
                            P1: OCC
                          </div>
                          <div className="h-8 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[9px] font-mono-tech text-emerald-300">
                            P2: VAC
                          </div>
                          <div className="h-8 rounded bg-red-500/20 border border-red-500/40 flex items-center justify-center text-[9px] font-mono-tech text-red-300">
                            P3: OCC
                          </div>
                          <div className="h-8 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[9px] font-mono-tech text-emerald-300">
                            P4: VAC
                          </div>
                        </div>
                        {/* Microcontroller & Servo Gate Bar */}
                        <div className="flex items-center justify-between text-[9px] font-mono-tech text-slate-300 px-1 border-t border-white/5 pt-1">
                          <span className="text-cyan-400 font-bold">ESP32 + IR</span>
                          <span className="text-amber-300">GATE: AUTO-SERVO</span>
                        </div>
                      </div>
                      <div className="mt-2 text-center">
                        <span className="text-[11px] font-scoreboard font-bold text-emerald-300 tracking-wider">
                          EMBEDDED IR SENSOR TELEMETRY
                        </span>
                      </div>
                    </div>
                  )}

                  {/* PROJECT 03: Solar PV Tracker SVG Visual Mockup */}
                  {project.id === 'solar-tracker' && (
                    <div className="relative my-auto flex flex-col items-center justify-center">
                      <div className="relative w-48 h-24 flex items-center justify-center">
                        {/* Solar Sun Arc */}
                        <div className="absolute top-0 w-36 h-20 border-t-2 border-dashed border-amber-400/50 rounded-t-full flex justify-between px-2">
                          <span className="text-[8px] font-mono-tech text-amber-300 -mt-2">EAST</span>
                          <span className="text-[8px] font-mono-tech text-amber-300 -mt-2">WEST</span>
                        </div>
                        {/* Solar PV Panel Mockup */}
                        <div className="w-28 h-12 rounded bg-gradient-to-r from-blue-900 to-indigo-900 border border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.25)] flex items-center justify-center transform -rotate-6">
                          <div className="grid grid-cols-4 gap-0.5 w-full h-full p-1 opacity-80">
                            <div className="bg-cyan-500/20 border border-white/10 rounded-xs"></div>
                            <div className="bg-cyan-500/20 border border-white/10 rounded-xs"></div>
                            <div className="bg-cyan-500/20 border border-white/10 rounded-xs"></div>
                            <div className="bg-cyan-500/20 border border-white/10 rounded-xs"></div>
                          </div>
                        </div>
                        {/* Sun indicator */}
                        <div className="absolute top-2 right-8 w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_12px_orange] animate-pulse"></div>
                      </div>
                      <div className="mt-1 text-center">
                        <span className="text-[11px] font-scoreboard font-bold text-amber-300 tracking-wider">
                          DUAL-LDR SUN TRACKING AZIMUTH
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Bottom category strip */}
                  <div className="flex items-center justify-between text-[10px] font-mono-tech text-slate-400 z-10">
                    <span className="text-white/60 font-semibold">{project.badge}</span>
                    <span className="text-cyan-400 font-scoreboard">HIGHLIGHT REEL</span>
                  </div>
                </div>

                {/* 2. Content Body */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-['Space_Grotesk'] mb-3">
                    {project.title}
                  </h3>

                  {/* Exact Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-sans mb-5">
                    &ldquo;{project.description}&rdquo;
                  </p>

                  {/* Technology Tags */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-scoreboard text-slate-400 uppercase tracking-wider block">
                      TECH LINEUP:
                    </span>
                    <div className="flex flex-wrap gap-1.5 font-mono-tech">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-[#161F33] text-cyan-300 border border-white/5 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Card Footer Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => handleView(project)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-scoreboard text-xs font-bold tracking-wider transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_22px_rgba(6,182,212,0.5)] cursor-pointer"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-1.5">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundManager.playBlip(750)}
                    className="p-2.5 rounded-lg bg-[#161F33] hover:bg-[#1f2a44] border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-white transition-all cursor-pointer"
                    title="Open GitHub repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  <button
                    onClick={(e) => handleCopy(project.id, project.githubLink, e)}
                    className="p-2.5 rounded-lg bg-[#161F33] hover:bg-[#1f2a44] border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-white transition-all cursor-pointer"
                    title="Copy GitHub link"
                  >
                    {copiedId === project.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
