import React, { useState } from 'react';
import {
  Code2,
  Layout,
  BrainCircuit,
  Database,
  Terminal,
  FileCode,
  Flame,
  Shield,
  Layers,
  BarChart3,
  LineChart,
  Table,
  Cpu,
  Globe,
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData.ts';
import { soundManager } from '../utils/soundEffects.ts';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedCategory);

  // Helper to render authentic icon for each skill
  const getSkillIcon = (skillName: string) => {
    switch (skillName) {
      case 'C Programming':
        return <Terminal className="w-5 h-5 text-blue-400" />;
      case 'Python':
        return <Code2 className="w-5 h-5 text-amber-400" />;
      case 'JavaScript':
        return <FileCode className="w-5 h-5 text-yellow-400" />;
      case 'HTML':
        return <Globe className="w-5 h-5 text-orange-400" />;
      case 'CSS':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'React':
        return <Cpu className="w-5 h-5 text-cyan-300" />;
      case 'Supabase':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Artificial Intelligence Fundamentals':
        return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      case 'NumPy':
        return <Zap className="w-5 h-5 text-blue-300" />;
      case 'Pandas':
        return <Table className="w-5 h-5 text-indigo-400" />;
      case 'Matplotlib':
        return <BarChart3 className="w-5 h-5 text-teal-400" />;
      case 'Seaborn':
        return <LineChart className="w-5 h-5 text-cyan-400" />;
      case 'SQL':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'Database Design Fundamentals':
        return <Layers className="w-5 h-5 text-purple-400" />;
      case 'Supabase Database Integration':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Stadium Grid & Background Aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-scoreboard text-xs font-semibold tracking-widest uppercase mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>PLAYER ARSENAL & STATS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-['Space_Grotesk']">
            TECHNICAL SKILLS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-mono-tech max-w-xl mx-auto">
            Professional cricket video game player attributes across programming, web engineering, AI data science, and database systems.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Cricket Attribute Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => {
              soundManager.playBlip(600);
              setSelectedCategory('all');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-scoreboard font-semibold tracking-wider transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-400'
                : 'bg-[#111726] text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
            }`}
          >
            ALL ATTRIBUTES
          </button>

          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundManager.playBlip(680);
                setSelectedCategory(cat.id);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-scoreboard font-semibold tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-400'
                  : 'bg-[#111726] text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Showcase */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-5">
              {/* Category Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 flex items-center justify-center">
                    {category.id === 'programming' && <Code2 className="w-5 h-5 text-cyan-400" />}
                    {category.id === 'webdev' && <Layout className="w-5 h-5 text-blue-400" />}
                    {category.id === 'aiml' && <BrainCircuit className="w-5 h-5 text-purple-400" />}
                    {category.id === 'database' && <Database className="w-5 h-5 text-emerald-400" />}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-['Space_Grotesk']">
                      {category.title}
                    </h3>
                    <span className="text-xs text-cyan-400 font-mono-tech">
                      {category.cricketRole}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#161F33] border border-cyan-500/30 text-cyan-300 font-scoreboard text-[11px] font-bold">
                    {category.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono-tech hidden md:inline">
                    {category.skills.length} ATTRIBUTES
                  </span>
                </div>
              </div>

              {/* Skills Grid for this Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => soundManager.playBlip(720 + index * 25)}
                    className="group relative rounded-xl p-5 bg-[#111726]/80 hover:bg-[#161F33] border border-white/10 hover:border-cyan-400/50 transition-all duration-300 shadow-md hover:shadow-[0_12px_30px_-8px_rgba(6,182,212,0.25)] hover:-translate-y-1"
                  >
                    {/* Top Row: Icon and Tag */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#080B12] border border-white/10 group-hover:border-cyan-400/40 flex items-center justify-center transition-colors">
                        {getSkillIcon(skill.name)}
                      </div>
                      <span className="text-[10px] font-mono-tech px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-medium">
                        {skill.tag}
                      </span>
                    </div>

                    {/* Skill Title */}
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-['Space_Grotesk'] mb-2">
                      {skill.name}
                    </h4>

                    {/* Short Technical Description */}
                    <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                      {skill.description}
                    </p>

                    {/* Cricket Video Game Attribute Card Footer */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-tech">
                      <span className="text-slate-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>MATCH READY</span>
                      </span>
                      <span className="font-scoreboard text-cyan-400 tracking-wider">
                        TIER 01
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
