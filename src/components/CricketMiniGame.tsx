import React, { useState } from 'react';
import {
  X,
  Play,
  RotateCcw,
  Sparkles,
  Trophy,
  Zap,
  Flame,
  Volume2
} from 'lucide-react';
import { soundManager } from '../utils/soundEffects.ts';

interface CricketMiniGameProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CricketMiniGame: React.FC<CricketMiniGameProps> = ({ isOpen, onClose }) => {
  const [runs, setRuns] = useState(18);
  const [balls, setBalls] = useState(4);
  const [lastCommentary, setLastCommentary] = useState(
    'Chaanakya is at the crease! Bowler starts his run-up from the Pavilion End...'
  );
  const [lastOutcome, setLastOutcome] = useState<'4' | '6' | '1' | '2' | '0' | null>(null);
  const [isBowling, setIsBowling] = useState(false);

  if (!isOpen) return null;

  const playShot = (shotName: string) => {
    if (isBowling) return;
    setIsBowling(true);
    soundManager.playBlip(550);

    // Simulated quick delivery timing
    setTimeout(() => {
      soundManager.playBatHit();
      const random = Math.random();
      let outcomeRuns = 0;
      let outcomeCode: '4' | '6' | '1' | '2' | '0' = '0';
      let commentary = '';

      if (random > 0.6) {
        outcomeRuns = 6;
        outcomeCode = '6';
        commentary = `WHAT A SHOT! Sweet timing on that ${shotName}! The ball sails over the ropes for a MONSTER 6!`;
        soundManager.playCheer();
      } else if (random > 0.3) {
        outcomeRuns = 4;
        outcomeCode = '4';
        commentary = `CRACK! Glorious ${shotName} through the gap! Racing across the lightning outfield for FOUR!`;
        soundManager.playCheer();
      } else if (random > 0.15) {
        outcomeRuns = 2;
        outcomeCode = '2';
        commentary = `Neat wristwork on the ${shotName}, scampering back for a tight couple of runs!`;
      } else {
        outcomeRuns = 1;
        outcomeCode = '1';
        commentary = `Solid defensive push with the ${shotName}, rotating the strike smartly.`;
      }

      setRuns((prev) => prev + outcomeRuns);
      setBalls((prev) => prev + 1);
      setLastOutcome(outcomeCode);
      setLastCommentary(commentary);
      setIsBowling(false);
    }, 450);
  };

  const resetInnings = () => {
    soundManager.playBlip(600);
    setRuns(0);
    setBalls(0);
    setLastOutcome(null);
    setLastCommentary('New innings underway! Chaanakya guards the crease.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-gradient-to-b from-[#141b2e] to-[#0a0e18] border-2 border-cyan-400/50 p-6 sm:p-8 shadow-[0_0_60px_rgba(6,182,212,0.35)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playBlip(600);
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#161F33] border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-white/10 pb-4 mb-6 pr-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-scoreboard text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-0.5 rounded-full uppercase tracking-wider">
              22 YARDS MINI-CHALLENGE
            </span>
            <span className="text-xs text-slate-400 font-mono-tech">
              EASTER EGG BATTING HUD
            </span>
          </div>
          <h3 className="text-2xl font-black text-white font-['Space_Grotesk'] uppercase">
            STADIUM BATTING ARENA
          </h3>
          <p className="text-xs text-cyan-300 font-mono-tech mt-0.5">
            Face the delivery, choose your stroke, and illuminate the digital scoreboard!
          </p>
        </div>

        {/* Live Scoreboard HUD */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#080B12] border border-white/10 text-center font-scoreboard mb-6">
          <div className="p-3 rounded-lg bg-[#111726] border border-white/5">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-mono-tech">
              SCORE
            </span>
            <span className="text-3xl font-black text-white mt-0.5 block">
              {runs} <span className="text-sm text-cyan-400">/ 0</span>
            </span>
          </div>

          <div className="p-3 rounded-lg bg-[#111726] border border-white/5">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-mono-tech">
              BALLS FACED
            </span>
            <span className="text-3xl font-black text-amber-300 mt-0.5 block">
              {balls}
            </span>
          </div>

          <div className="p-3 rounded-lg bg-[#111726] border border-white/5">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-mono-tech">
              STRIKE RATE
            </span>
            <span className="text-2xl sm:text-3xl font-black text-emerald-400 mt-0.5 block">
              {balls > 0 ? ((runs / balls) * 100).toFixed(0) : '0'}%
            </span>
          </div>
        </div>

        {/* Animated Stadium Pitch Action Arena */}
        <div className="relative h-44 rounded-xl bg-gradient-to-b from-[#0b101c] to-[#05070d] border border-cyan-500/30 overflow-hidden flex flex-col justify-between p-4 mb-6">
          {/* Floodlight Cones */}
          <div className="absolute inset-0 flex justify-between pointer-events-none opacity-30">
            <div className="w-24 h-full bg-cyan-400/20 blur-xl transform -skew-x-12"></div>
            <div className="w-24 h-full bg-blue-400/20 blur-xl transform skew-x-12"></div>
          </div>

          {/* Stumps & Crease Graphic */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[10px] font-mono-tech text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
              BOWLER: AI FAST PACER
            </span>
            {lastOutcome && (
              <span
                className={`font-scoreboard text-base font-black px-3 py-1 rounded-full animate-bounce ${
                  lastOutcome === '6'
                    ? 'bg-purple-600 text-white shadow-[0_0_20px_purple]'
                    : lastOutcome === '4'
                    ? 'bg-amber-500 text-black shadow-[0_0_20px_orange]'
                    : 'bg-cyan-500 text-black'
                }`}
              >
                {lastOutcome === '6' ? 'MAXIMUM 6!' : `${lastOutcome} RUNS`}
              </span>
            )}
          </div>

          {/* Pitch Strip in Middle */}
          <div className="my-auto mx-auto w-3/4 h-12 bg-amber-900/20 border-y border-amber-500/20 rounded flex items-center justify-around px-4">
            <div className="w-1.5 h-8 bg-amber-400/60 rounded"></div>
            <div className="text-[9px] font-mono-tech text-white/30 uppercase tracking-widest">
              22 YARDS TURF
            </div>
            <div className="w-1.5 h-8 bg-amber-400/60 rounded"></div>
          </div>

          {/* Commentary Ticker */}
          <div className="relative z-10 p-2 rounded bg-[#080B12]/80 border border-white/5 font-mono-tech text-xs text-cyan-200 truncate">
            {isBowling ? (
              <span className="text-amber-300 animate-pulse flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Bowler charging in... delivery on the way!</span>
              </span>
            ) : (
              <span>&ldquo;{lastCommentary}&rdquo;</span>
            )}
          </div>
        </div>

        {/* Shot Selection Controls */}
        <div className="space-y-3">
          <span className="text-xs font-scoreboard text-slate-300 uppercase tracking-wider block">
            CHOOSE YOUR STROKE:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-scoreboard text-xs">
            <button
              disabled={isBowling}
              onClick={() => playShot('Cover Drive')}
              className="p-3 rounded-xl bg-[#161F33] hover:bg-cyan-600 hover:text-black border border-cyan-500/30 text-white font-bold transition-all disabled:opacity-50 cursor-pointer shadow-md"
            >
              COVER DRIVE
            </button>

            <button
              disabled={isBowling}
              onClick={() => playShot('Straight Drive')}
              className="p-3 rounded-xl bg-[#161F33] hover:bg-blue-600 border border-blue-500/30 text-white font-bold transition-all disabled:opacity-50 cursor-pointer shadow-md"
            >
              STRAIGHT DRIVE
            </button>

            <button
              disabled={isBowling}
              onClick={() => playShot('Pull Shot')}
              className="p-3 rounded-xl bg-[#161F33] hover:bg-amber-500 hover:text-black border border-amber-500/30 text-white font-bold transition-all disabled:opacity-50 cursor-pointer shadow-md"
            >
              PULL SHOT
            </button>

            <button
              disabled={isBowling}
              onClick={() => playShot('Helicopter Shot')}
              className="p-3 rounded-xl bg-[#161F33] hover:bg-purple-600 border border-purple-500/30 text-white font-bold transition-all disabled:opacity-50 cursor-pointer shadow-md"
            >
              HELICOPTER SHOT
            </button>
          </div>
        </div>

        {/* Reset / Action Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={resetInnings}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0b0e15] border border-white/10 text-slate-400 hover:text-white text-xs font-mono-tech transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>RESET SCORE</span>
          </button>

          <button
            onClick={() => {
              soundManager.playBlip(600);
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-scoreboard text-xs font-bold transition-all cursor-pointer"
          >
            RETURN TO PORTFOLIO
          </button>
        </div>
      </div>
    </div>
  );
};
