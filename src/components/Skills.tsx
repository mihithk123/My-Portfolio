import React from 'react';
import { motion } from 'motion/react';
import { Network, Shield, Cpu, Terminal, Database, Lock } from 'lucide-react';

const skillCategories = [
  {
    title: 'Infrastructure',
    icon: Network,
    skills: [
      { name: 'TCP/IP Model', level: 85 },
      { name: 'Subnetting & VLANs', level: 90 },
      { name: 'Routing Protocols', level: 75 },
      { name: 'Network Architecture', level: 80 },
    ],
    color: 'neon-blue'
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    skills: [
      { name: 'Vulnerability Analysis', level: 70 },
      { name: 'OWASP Framework', level: 85 },
      { name: 'Threat Intelligence', level: 80 },
      { name: 'Cryptography', level: 65 },
    ],
    color: 'neon-green'
  },
  {
    title: 'Tools & Systems',
    icon: Terminal,
    skills: [
      { name: 'Network Analysis', level: 90 },
      { name: 'Protocol Inspection', level: 75 },
      { name: 'Audit Frameworks', level: 60 },
      { name: 'C# / Python / Shell', level: 85 },
    ],
    color: 'white'
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="text-4xl font-mono font-bold uppercase tracking-tight mb-4 text-white">
              Technical <span className="text-neon-blue">Core</span>
            </h2>
            <p className="text-slate-500 max-w-md font-sans text-sm">
              Competencies in network infrastructure, security auditing, and professional system development.
            </p>
          </div>
          <div className="text-slate-500 font-mono text-[9px] uppercase tracking-[0.3em] border border-white/5 bg-white/[0.01] px-4 py-2 rounded">
            Capabilities_Release.v2
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-1 border-b border-white/5 group"
            >
              <div className="flex items-center gap-3 mb-8">
                <category.icon className="w-5 h-5 text-neon-blue/60 group-hover:text-neon-blue transition-colors" />
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-slate-200">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-3">
                       <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest leading-none">
                         {skill.name}
                       </span>
                       <span className="font-mono text-[9px] text-slate-600">
                         {skill.level}%
                       </span>
                    </div>
                    <div className="h-[2px] w-full bg-white/[0.03] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-full ${
                          category.color === 'neon-blue' 
                            ? 'bg-neon-blue' 
                            : category.color === 'neon-green' 
                            ? 'bg-neon-green' 
                            : 'bg-white/40'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning roadmap overlay hint */}
        <div className="mt-16 p-6 glass-card border-dashed border-white/10 flex flex-col md:flex-row items-center gap-6 justify-between opacity-80">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-neon-blue/30 flex items-center justify-center animate-spin-slow">
                    <Cpu className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                    <h4 className="font-mono text-sm font-bold uppercase tracking-widest">Active Roadmap</h4>
                    <p className="font-mono text-[11px] text-white/50 lowercase">Currently deepening knowledge in Advanced Packet Filtering and Cloud Security Controls.</p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-[10px]">E-JPT</div>
                <div className="px-3 py-1 bg-neon-blue/10 border border-neon-blue/30 rounded font-mono text-[10px] text-neon-blue">CCNA</div>
            </div>
        </div>

        {/* Toolbox Marquee */}
        <div className="mt-24 pt-12 border-t border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 font-mono text-[8px] text-white/10 uppercase tracking-[1em]">The_Technical_Toolbox</div>
          <div className="flex whitespace-nowrap animate-marquee group-hover:pause-animation py-8 items-center gap-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {[
              "Burp Suite", "Wireshark", "Metasploit", "Nmap", "Nessus", 
              "Aircrack-ng", "Hashcat", "John the Ripper", "Hydra", "Sqlmap",
              "Ghidra", "OllyDbg", "Postman", "Cisco iOS", "Docker", "Kubernetes"
            ].map((tool) => (
              <span key={tool} className="text-xl font-mono font-bold text-white tracking-widest">{tool}</span>
            ))}
            {/* Repeat for seamless loop */}
            {[
              "Burp Suite", "Wireshark", "Metasploit", "Nmap", "Nessus", 
              "Aircrack-ng", "Hashcat", "John the Ripper", "Hydra", "Sqlmap",
              "Ghidra", "OllyDbg", "Postman", "Cisco iOS", "Docker", "Kubernetes"
            ].map((tool) => (
              <span key={tool + '_clone'} className="text-xl font-mono font-bold text-white tracking-widest">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
