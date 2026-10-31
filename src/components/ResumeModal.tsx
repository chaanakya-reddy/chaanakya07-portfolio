import React, { useState } from 'react';
import {
  X,
  FileDown,
  Printer,
  Copy,
  Check,
  Building2,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  MapPin
} from 'lucide-react';
import { PLAYER_DATA, EDUCATION_DATA, SKILL_CATEGORIES, PROJECTS_DATA, HACKATHON_DATA } from '../data/portfolioData.ts';
import { soundManager } from '../utils/soundEffects.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    soundManager.playBatHit();
    window.print();
  };

  const handleCopyText = () => {
    soundManager.playBlip(750);
    const textResume = `
${PLAYER_DATA.fullName.toUpperCase()}
${PLAYER_DATA.professionalTitle} - ${PLAYER_DATA.university} (${PLAYER_DATA.academicLevel})
Email: ${PLAYER_DATA.email} | Location: ${PLAYER_DATA.location}
GitHub: ${PLAYER_DATA.githubUrl} | LinkedIn: ${PLAYER_DATA.linkedinUrl}

CAREER SUMMARY:
${PLAYER_DATA.aboutDescription}

EDUCATION:
- B.Tech in Artificial Intelligence and Machine Learning
  ${EDUCATION_DATA.institution} (Currently Pursuing - 3rd Semester)

TECHNICAL SKILLS:
- Programming Languages: C Programming, Python, JavaScript
- Web Development: HTML, CSS, React, Supabase
- AI & Data Science: Artificial Intelligence Fundamentals, NumPy, Pandas, Matplotlib, Seaborn
- Database Management: SQL, Database Design Fundamentals, Supabase Database Integration

FEATURED PROJECTS:
1. IPL MATCH BOOKING WEB APPLICATION
   Technologies: React, Supabase, JavaScript
   Description: Developed a web application for viewing IPL matches and managing ticket bookings.

2. SMART PARKING SYSTEM
   Technologies: ESP32, Embedded Systems, IR Sensors, Electronics
   Description: Designed a smart parking prototype using an ESP32, IR sensors, an LCD, and a servo motor.

3. SOLAR PV TRACKER
   Technologies: Arduino UNO, C/C++, LDR Sensors, Servo Motor
   Description: Developed a prototype to track sunlight using an Arduino UNO, LDR sensors, and a servo motor.

HACKATHONS & INNOVATION:
- TEAM COLLABORATION PLATFORM
  Description: Worked on a hackathon project concept focused on helping distributed teams communicate, share files, and collaborate effectively.
  Focus: Team Communication, File Sharing, Collaborative Productivity
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0c101a] border-2 border-cyan-500/40 p-6 sm:p-10 shadow-[0_0_60px_rgba(6,182,212,0.3)] text-left print:bg-white print:text-black print:border-none print:shadow-none print:max-h-none print:p-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Control Bar (Hidden when printing) */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-scoreboard text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
              OFFICIAL RESUME DOSSIER
            </span>
            <span className="text-slate-400 font-mono-tech text-xs hidden sm:inline">
              P. CHAANAKYA CHOWHAN REDDY #07
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-scoreboard text-xs font-bold transition-all shadow-md cursor-pointer"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / SAVE PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161F33] hover:bg-[#202b44] border border-white/10 text-slate-200 font-mono-tech text-xs transition-colors cursor-pointer"
              title="Copy plain text resume"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>COPY TEXT</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                soundManager.playBlip(600);
                onClose();
              }}
              className="p-1.5 rounded-lg bg-[#161F33] border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="space-y-6 text-slate-200 print:text-black">
          {/* Header */}
          <div className="border-b border-white/10 print:border-black pb-5">
            <h1 className="text-3xl sm:text-4xl font-black text-white print:text-black tracking-tight font-['Space_Grotesk'] uppercase">
              {PLAYER_DATA.fullName}
            </h1>
            <p className="text-cyan-400 print:text-blue-700 font-semibold font-mono-tech mt-1 text-sm sm:text-base">
              {PLAYER_DATA.professionalTitle} | REVA University (3rd Semester)
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono-tech text-slate-400 print:text-gray-700 mt-3">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-blue-600" />
                <span>{PLAYER_DATA.email}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-blue-600" />
                <span>{PLAYER_DATA.location}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-cyan-400 print:text-blue-600" />
                <span>github.com/chaanakyareddy</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-cyan-400 print:text-blue-600" />
                <span>linkedin.com/in/chaanakyareddy</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-scoreboard text-cyan-400 print:text-blue-800 uppercase tracking-widest font-bold mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 print:text-gray-800 font-sans">
              {PLAYER_DATA.aboutDescription}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-scoreboard text-cyan-400 print:text-blue-800 uppercase tracking-widest font-bold mb-2">
              EDUCATION
            </h2>
            <div className="p-3.5 rounded-xl bg-[#111726]/60 print:bg-gray-100 border border-white/5 print:border-gray-300 font-mono-tech">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-bold text-white print:text-black text-sm">
                  {EDUCATION_DATA.degree} – {EDUCATION_DATA.specialization}
                </span>
                <span className="text-xs text-emerald-400 print:text-emerald-700 font-bold">
                  {EDUCATION_DATA.currentStatus}
                </span>
              </div>
              <div className="text-xs text-amber-300 print:text-gray-700 mt-1">
                {EDUCATION_DATA.institution}, Bengaluru
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-scoreboard text-cyan-400 print:text-blue-800 uppercase tracking-widest font-bold mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-tech">
              {SKILL_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="p-3 rounded-lg bg-[#111726]/40 print:bg-gray-100 border border-white/5 print:border-gray-300"
                >
                  <span className="font-bold text-cyan-300 print:text-blue-700 block mb-1">
                    {cat.title}:
                  </span>
                  <span className="text-slate-300 print:text-gray-800">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-scoreboard text-cyan-400 print:text-blue-800 uppercase tracking-widest font-bold mb-3">
              FEATURED PROJECTS
            </h2>
            <div className="space-y-3 font-sans">
              {PROJECTS_DATA.map((proj) => (
                <div
                  key={proj.id}
                  className="p-3.5 rounded-xl bg-[#111726]/40 print:bg-gray-100 border border-white/5 print:border-gray-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-white print:text-black text-sm">
                      {proj.title}
                    </span>
                    <span className="text-[11px] font-mono-tech text-cyan-300 print:text-blue-600">
                      [{proj.technologies.join(', ')}]
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-gray-800 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Innovation */}
          <div>
            <h2 className="text-xs font-scoreboard text-cyan-400 print:text-blue-800 uppercase tracking-widest font-bold mb-2">
              HACKATHONS &amp; INNOVATION
            </h2>
            <div className="p-3.5 rounded-xl bg-[#111726]/40 print:bg-gray-100 border border-white/5 print:border-gray-300 font-sans">
              <span className="font-bold text-white print:text-black text-sm block mb-1">
                {HACKATHON_DATA.projectName}
              </span>
              <p className="text-xs text-slate-300 print:text-gray-800 leading-relaxed mb-2">
                {HACKATHON_DATA.description}
              </p>
              <div className="text-[11px] font-mono-tech text-slate-400 print:text-gray-600">
                Focus: {HACKATHON_DATA.projectFocus.join(' • ')}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="mt-8 pt-4 border-t border-white/10 print:hidden flex justify-end">
          <button
            onClick={() => {
              soundManager.playBlip(600);
              onClose();
            }}
            className="px-6 py-2.5 rounded-xl bg-[#161F33] hover:bg-[#202b44] border border-white/10 text-white font-scoreboard text-xs font-bold cursor-pointer"
          >
            CLOSE RESUME
          </button>
        </div>
      </div>
    </div>
  );
};
