/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScoreboardTicker } from './components/ScoreboardTicker.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Education } from './components/Education.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Hackathons } from './components/Hackathons.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { CricketMiniGame } from './components/CricketMiniGame.tsx';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMiniGameOpen, setIsMiniGameOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080B12] text-[#e0e2ed] flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
      {/* 1. Live Match Scoreboard LED Ticker */}
      <ScoreboardTicker />

      {/* 2. Cricket Scoreboard Themed Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenMiniGame={() => setIsMiniGameOpen(true)}
      />

      {/* Main Content Arena */}
      <main className="flex-1 w-full">
        {/* 3. Hero Section - Player Introduction */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenMiniGame={() => setIsMiniGameOpen(true)}
        />

        {/* 4. About Me - Player Profile */}
        <About />

        {/* 5. Education - Career Profile */}
        <Education />

        {/* 6. Technical Skills - Player Attributes */}
        <Skills />

        {/* 7. Featured Projects - Match Highlights */}
        <Projects />

        {/* 8. Hackathons - Tournament History */}
        <Hackathons />

        {/* 9. Contact - Connect With Me */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CricketMiniGame
        isOpen={isMiniGameOpen}
        onClose={() => setIsMiniGameOpen(false)}
      />
    </div>
  );
}
