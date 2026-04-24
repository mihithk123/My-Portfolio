import React from 'react';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { Terminal, Shield, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/[0.03] border border-white/5 text-slate-400 text-[10px] font-mono mb-6 uppercase tracking-widest">
            STATUS: ACTIVE_STUDENT_MODE
          </div>
          
          <h1 className="text-5xl md:text-6xl font-mono font-bold leading-tight mb-4 tracking-tighter text-white">
            Mihith <br />
            <span className="text-neon-blue neon-glow-blue italic">Kodagoda</span>
          </h1>

          <div className="text-xl text-slate-400 font-mono mb-8 h-8">
            <TypeAnimation
              sequence={[
                'Aspiring Security Analyst',
                2000,
                'Hands-on Lab Enthusiast',
                2000,
                'Nmap & Wireshark Explorer',
                2000,
                'CCNA Pipeline In-Progress',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-base text-slate-500 max-w-lg mb-10 leading-relaxed font-sans">
            Dedicated Cybersecurity student exploring the intricacies of network defense. 
            Actively building practical experience through labs, CTFs, and technical certifications.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-neon-blue text-white font-mono text-xs font-bold rounded transition-all hover:bg-neon-blue/80"
            >
              PROJECT_REPOSITORY
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 border border-white/10 hover:border-white/20 font-mono text-xs rounded transition-colors text-slate-400"
            >
              ESTABLISH_CONNECTION
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Profile Image with Professional Technical Styling */}
          <div className="relative group mb-8">
            <div className="relative z-10 w-64 h-64 mx-auto border border-white/10 bg-white/[0.01] p-1.5 rounded-lg">
              <div className="relative w-full h-full overflow-hidden rounded grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src="/main.png" 
                  alt="Mihith Kodagoda" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay" />
                
                {/* Clean technical overlays */}
                <div className="absolute top-2 left-2 font-mono text-[9px] text-white/40">
                  REF_0881 <br />
                  SEC_LVL_02
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 glass-card border-white/5 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
              </div>
              <Terminal className="w-3.5 h-3.5 text-slate-500" />
            </div>
            
            <div className="p-6 font-mono text-[11px] space-y-3">
              <div className="flex gap-3">
                <span className="text-neon-blue">main@sentinel:</span>
                <span className="text-white">~/auth/mihith</span>
              </div>
              <div className="text-slate-400 leading-relaxed">
                 {">"} Specialist in Network Security Audit <br />
                 {">"} Expertise in TCP/IP & Infrastructure <br />
                 {">"} Active CCNA Development Pipeline
              </div>
              
              <div className="h-px bg-white/5 my-2" />

              <div className="flex items-center justify-between text-[10px]">
                <span className="text-slate-500 uppercase tracking-widest">Sys_Status</span>
                <span className="text-neon-green">Validated</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
