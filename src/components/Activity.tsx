import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity as ActivityIcon, ShieldCheck, Zap } from 'lucide-react';

const logs = [
  "Synchronizing security nodes...",
  "Analyzing network topology for REF_082...",
  "Vulnerability scan initialized for Lab_Alpha",
  "Updating documentation: Network Security Protocols",
  "Reviewing peer documentation for Project_Sentinel",
  "Validating firewall configurations (Cisco iOS)",
  "Analyzing emerging OSPF vulnerabilities",
  "Compiling technical audit: Clinic Suite v2",
  "Optimizing data packet routing algorithms",
  "System integrity verification: 100% Validated",
];

export const Activity: React.FC = () => {
  const [activeLogs, setActiveLogs] = useState<string[]>([]);
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setActiveLogs(prev => {
        const next = [...prev, logs[index]];
        if (next.length > 5) next.shift();
        return next;
      });
      index = (index + 1) % logs.length;
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-cyber-black overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex items-center gap-4 min-w-[220px]">
            <div className="w-8 h-8 rounded-full bg-white/[0.03] flex items-center justify-center border border-white/5">
              <ActivityIcon className="w-4 h-4 text-neon-blue" />
            </div>
            <div>
              <div className="font-mono text-[10px] font-bold text-slate-300 uppercase tracking-widest">Sys_Telemetry</div>
              <div className="font-mono text-[9px] text-slate-600 lowercase">Live research stream</div>
            </div>
          </div>

          <div className="flex-grow flex flex-col gap-2 font-mono text-[10px] h-[32px] overflow-hidden">
            <AnimatePresence mode="popLayout">
              {activeLogs.slice(-1).map((log) => (
                <motion.div
                  key={log}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center gap-4 text-slate-500 font-medium"
                >
                  <span className="text-neon-green opacity-40">[{new Date().toLocaleTimeString()}]</span>
                  <span className="tracking-tight">{log}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="hidden lg:flex gap-10">
             <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">Auth_Verified</span>
             </div>
             <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-slate-600" />
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">Load: 0.02%</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
