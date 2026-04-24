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
                       Learning <span className="text-neon-blue">Trajectory</span>
                     </h2>
                     <p className="text-slate-400 text-lg leading-relaxed font-sans max-w-lg">
                       As a dedicated Cybersecurity student, my focus is on mastering the fundamental principles of network architecture and defensive operations through hands-on practice.
                     </p>
                   </div>
                   
                   <div className="space-y-8">
                      {[
                        { title: 'Academic Foundation', desc: 'Deep-diving into network protocols, encryption, and system administration.' },
                        { title: 'Skills Application', desc: 'Participating in CTFs and labs to apply theoretical knowledge in real-world scenarios.' },
                        { title: 'Technical Curiosity', desc: 'Exploring emerging technologies and threat landscapes through independent study.' }
                      ].map(item => (
                        <div key={item.title} className="flex gap-6 group">
                           <div className="w-px h-12 bg-white/10 group-hover:bg-neon-blue transition-colors" />
                           <div>
                             <div className="font-mono text-xs font-bold uppercase tracking-widest text-slate-200 mb-1">{item.title}</div>
                             <div className="text-slate-500 text-sm leading-relaxed">{item.desc}</div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="p-12 border border-white/5 bg-white/[0.01] rounded shadow-2xl relative overflow-hidden">
                  <div className="font-mono text-slate-600 text-[10px] mb-10 tracking-[0.3em] uppercase">Student_Profile</div>
                  <p className="font-sans text-xl leading-relaxed text-slate-300 italic mb-10">
                    "My goal is to transition from an enthusiastic student to a proficient professional by maintaining a relentless commitment to hands-on learning and ethical practices."
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
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

