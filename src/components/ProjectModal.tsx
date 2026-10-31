import React, { useState } from 'react';
import {
  X,
  Github,
  ExternalLink,
  Check,
  Copy,
  Cpu,
  Ticket,
  SunMedium,
  Layers,
  Terminal,
  Activity,
  Play
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData.ts';
import { soundManager } from '../utils/soundEffects.ts';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);
  // Interactive mini-simulations for each project
  const [parkingSlots, setParkingSlots] = useState([true, false, true, false]);
  const [sunAngle, setSunAngle] = useState(45);
  const [selectedSeat, setSelectedSeat] = useState<string | null>('B12');

  if (!project) return null;

  const handleCopyGithub = () => {
    soundManager.playBlip(750);
    navigator.clipboard.writeText(project.githubLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0e1320] border-2 border-cyan-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.25)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playBlip(600);
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#161F33] border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-white/10 pb-5 mb-6 pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-scoreboard text-xs font-bold text-cyan-400 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              {project.matchNumber}
            </span>
            <span className="text-slate-400 text-xs font-mono-tech">
              {project.projectNumber}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white font-['Space_Grotesk'] uppercase">
            {project.title}
          </h3>
          <p className="text-sm text-cyan-300/80 font-mono-tech mt-1">
            {project.badge} • ARCHITECTURE & MATCH HIGHLIGHT SPECIFICATION
          </p>
        </div>

        {/* Project Specific Interactive Telemetry Workbench */}
        <div className="mb-6 rounded-xl bg-[#080B12] border border-white/10 p-5 overflow-hidden">
          <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
            <span className="text-xs font-scoreboard text-cyan-400 flex items-center gap-2 uppercase tracking-wider">
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>INTERACTIVE PROTOTYPE & TELEMETRY BENCH</span>
            </span>
            <span className="text-[10px] font-mono-tech text-slate-400">
              LIVE SYSTEM SIMULATION
            </span>
          </div>

          {/* 1. IPL MATCH BOOKING INTERACTIVE BENCH */}
          {project.id === 'ipl-booking' && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-[#111726] border border-blue-500/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-scoreboard text-amber-400 font-bold block">
                      UPCOMING FIXTURE: RCB vs CSK
                    </span>
                    <span className="text-xs text-slate-300 font-mono-tech">
                      Venue: M. Chinnaswamy Stadium, Bengaluru
                    </span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono-tech">
                    BOOKING OPEN • SUPABASE SYNCED
                  </span>
                </div>

                <div className="text-xs text-slate-400 font-mono-tech mb-2">
                  Select Stadium Pavilion Tier:
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 font-scoreboard text-xs">
                  {['A01', 'A02', 'B11', 'B12', 'C05', 'C06', 'VIP1', 'VIP2'].map((seat) => (
                    <button
                      key={seat}
                      onClick={() => {
                        soundManager.playBatHit();
                        setSelectedSeat(seat);
                      }}
                      className={`p-2 rounded border text-center transition-all cursor-pointer ${
                        selectedSeat === seat
                          ? 'bg-cyan-500 text-black font-bold border-white shadow-[0_0_12px_cyan]'
                          : 'bg-[#182238] text-slate-300 border-white/10 hover:border-cyan-400'
                      }`}
                    >
                      {seat}
                    </button>
                  ))}
                </div>
                {selectedSeat && (
                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono-tech">
                    <span className="text-cyan-300">
                      Selected Seat: <strong className="text-white font-scoreboard">{selectedSeat}</strong> (Main Pavilion Stand)
                    </span>
                    <span className="text-emerald-400 font-bold">
                      Seat Reserved in Local Session
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 2. SMART PARKING SYSTEM INTERACTIVE BENCH */}
          {project.id === 'smart-parking' && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-[#111726] border border-cyan-500/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-scoreboard text-cyan-400 font-bold block">
                      ESP32 DUAL-CORE HARDWARE CONTROLLER
                    </span>
                    <span className="text-xs text-slate-300 font-mono-tech">
                      Sensors: 4-Channel Active IR Array + SG90 Servo Barrier
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-1 rounded bg-[#080B12] text-amber-300 border border-amber-500/40 font-mono-tech">
                      16x2 LCD: [VACANT: {parkingSlots.filter((s) => !s).length} / 4]
                    </span>
                  </div>
                </div>

                <div className="text-xs text-slate-400 font-mono-tech mb-2">
                  Click slot to toggle IR beam occlusion (Simulate car parking):
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono-tech">
                  {parkingSlots.map((occupied, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        soundManager.playBlip(700 + idx * 50);
                        const next = [...parkingSlots];
                        next[idx] = !next[idx];
                        setParkingSlots(next);
                      }}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        occupied
                          ? 'bg-red-500/20 border-red-500/40 text-red-300'
                          : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                      }`}
                    >
                      <div className="text-[10px] font-scoreboard uppercase">SLOT #{idx + 1}</div>
                      <div className="text-sm font-bold mt-1">
                        {occupied ? 'OCCUPIED' : 'VACANT'}
                      </div>
                      <div className="text-[9px] text-slate-400 mt-1">
                        IR Beam: {occupied ? 'BLOCKED' : 'CLEAR'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. SOLAR PV TRACKER INTERACTIVE BENCH */}
          {project.id === 'solar-tracker' && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-[#111726] border border-amber-500/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-scoreboard text-amber-400 font-bold block">
                      ARDUINO UNO DUAL-LDR AZIMUTH CONTROLLER
                    </span>
                    <span className="text-xs text-slate-300 font-mono-tech">
                      Feedback Loop: Differential Photoresistance Voltage Divider
                    </span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono-tech">
                    SERVO AZIMUTH: {sunAngle}°
                  </span>
                </div>

                <div className="text-xs text-slate-400 font-mono-tech mb-2">
                  Adjust simulated Sun Azimuth Angle ({sunAngle}°):
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="180"
                    value={sunAngle}
                    onChange={(e) => {
                      setSunAngle(Number(e.target.value));
                    }}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <span className="font-scoreboard text-white text-sm w-12 text-right">
                    {sunAngle}°
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-white/5 text-xs font-mono-tech">
                  <div className="p-2.5 rounded bg-[#080B12] border border-white/5">
                    <span className="text-slate-400 block text-[10px]">LDR SENSOR 1 (EAST):</span>
                    <span className="text-amber-300 font-semibold">{Math.max(15, 1023 - sunAngle * 5)} ADC</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#080B12] border border-white/5">
                    <span className="text-slate-400 block text-[10px]">LDR SENSOR 2 (WEST):</span>
                    <span className="text-amber-300 font-semibold">{Math.max(15, sunAngle * 5 + 120)} ADC</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Project Description & Key Highlights */}
        <div className="space-y-4 mb-6">
          <h4 className="text-base font-bold text-white font-['Space_Grotesk'] uppercase tracking-wider">
            PROJECT OVERVIEW
          </h4>
          <p className="text-base text-slate-200 leading-relaxed font-sans">
            &ldquo;{project.description}&rdquo;
          </p>

          <div className="pt-2">
            <h5 className="text-xs font-scoreboard text-cyan-400 uppercase tracking-wider mb-2">
              KEY ARCHITECTURE HIGHLIGHTS:
            </h5>
            <ul className="space-y-2 font-sans text-sm text-slate-300">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technologies List */}
        <div className="mb-6">
          <h5 className="text-xs font-scoreboard text-slate-400 uppercase tracking-wider mb-2">
            TECHNOLOGY STACK:
          </h5>
          <div className="flex flex-wrap gap-2 font-mono-tech">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-[#161F33] border border-cyan-500/30 text-cyan-300 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: GitHub & Direct Links */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundManager.playBlip(750)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-scoreboard text-xs font-bold tracking-wider transition-all shadow-md cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>VISIT GITHUB REPOSITORY</span>
            </a>

            <button
              onClick={handleCopyGithub}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#161F33] border border-white/10 hover:border-cyan-400 text-slate-200 text-xs font-mono-tech transition-colors cursor-pointer"
              title="Copy GitHub URL placeholder"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>COPY REPO LINK</span>
                </>
              )}
            </button>
          </div>

          <button
            onClick={() => {
              soundManager.playBlip(600);
              onClose();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#161F33] hover:bg-[#202b44] border border-white/10 text-slate-300 text-xs font-scoreboard font-semibold tracking-wider cursor-pointer"
          >
            CLOSE BENCH
          </button>
        </div>
      </div>
    </div>
  );
};
