/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Activity } from './components/Activity';
import { Stats } from './components/Stats';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { Contact, Footer } from './components/Contact';
import { CyberBackground } from './components/CyberBackground';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative selection:bg-neon-blue/30 selection:text-white min-h-screen bg-cyber-black tech-grid">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] bg-neon-blue z-[60] origin-left opacity-50"
        style={{ scaleX }}
      />

      {/* Subtle Gradient Glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px]" />
      </div>

      {/* Digital Background */}
      <CyberBackground />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        <Activity />

        {/* About Summary */}
        <section id="about" className="py-40 px-6 relative">
          <div className="max-w-7xl mx-auto">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="grid lg:grid-cols-2 gap-24 items-start"
             >
                <div className="space-y-12">
                   <div>
                     <h2 className="text-4xl font-mono font-bold uppercase tracking-tight mb-6 text-white">
                       Professional <span className="text-neon-blue">Profile</span>
                     </h2>
                     <p className="text-slate-400 text-lg leading-relaxed font-sans max-w-lg">
                       I am Mihith Kodagoda, a cybersecurity-focused student with strong interest in networking, secure systems, and hands-on technical practice. My portfolio reflects both academic growth and self-driven exploration in defensive security and infrastructure.
                     </p>
                   </div>

                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 border border-white/5 bg-white/[0.01] rounded-lg">
                        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-4">Current Focus</div>
                        <ul className="space-y-3 text-sm text-slate-400 font-sans">
                          <li>• Network defense, packet analysis, and routing fundamentals</li>
                          <li>• Ethical hacking concepts, CTF-style learning, and security labs</li>
                          <li>• Building secure systems and software with a strong engineering mindset</li>
                        </ul>
                      </div>

                      <div className="p-6 border border-white/5 bg-white/[0.01] rounded-lg">
                        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-4">Career Direction</div>
                        <ul className="space-y-3 text-sm text-slate-400 font-sans">
                          <li>• Aspiring Security Analyst and SOC-oriented learner</li>
                          <li>• Interested in internships, collaborative labs, and entry-level opportunities</li>
                          <li>• Continuously improving through certifications and practical projects</li>
                        </ul>
                      </div>
                   </div>
                </div>

                <div className="p-12 border border-white/5 bg-white/[0.01] rounded shadow-2xl relative overflow-hidden">
                  <div className="font-mono text-slate-600 text-[10px] mb-10 tracking-[0.3em] uppercase">CV_Overview</div>
                  <p className="font-sans text-xl leading-relaxed text-slate-300 italic mb-10">
                    “I aim to grow from an enthusiastic learner into a capable professional by combining rigorous study, practical labs, and ethical technical practice.”
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-px bg-white/10" />
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Mihith Kodagoda // Cybersecurity Student</span>
                  </div>
                </div>
             </motion.div>
          </div>
        </section>

        <Stats />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

