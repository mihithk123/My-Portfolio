import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, ShieldAlert, Network, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Clinic Management Suite',
    category: 'Software Architecture',
    description: 'A comprehensive medical facility system built with C# and OOP principles. Features patient record encryption, appointment scheduling, and role-based access control.',
    tech: ['C#', '.NET', 'SQL Server', 'OOP'],
    icon: Layers,
    link: '#',
    color: 'neon-blue'
  },
  {
    title: 'CTF Challenge Vault',
    category: 'Cybersecurity',
    description: 'A collection of solved machines from TryHackMe and HackTheBox. Focuses on web exploitation, privilege escalation, and network enumeration techniques.',
    tech: ['Linux', 'Burp Suite', 'Nmap', 'JohnTheRipper'],
    icon: ShieldAlert,
    link: '#',
    color: 'neon-green'
  },
  {
    title: 'Global Network Lab',
    category: 'Networking',
    description: 'Advanced Packet Tracer labs simulating multi-area OSPF routing, BGP configurations, and redundant topology implementations for enterprise-grade uptime.',
    tech: ['Cisco iOS', 'Packet Tracer', 'OSPF', 'BGP'],
    icon: Network,
    link: '#',
    color: 'neon-blue'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 relative border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-mono font-bold uppercase tracking-tight mb-4 text-white">
            Case <span className="text-neon-blue">Studies</span>
          </h2>
          <p className="text-slate-500 font-sans text-sm max-w-sm">
            Selected technical projects focused on security audit, systems architecture, and network simulation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="p-8 border border-white/5 rounded-lg bg-white/[0.01] hover:bg-white/[0.03] transition-all h-full flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-3 rounded bg-white/[0.03] border border-white/5 text-neon-blue group-hover:scale-110 transition-transform">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <div className="flex gap-4">
                    <a href={project.link} className="text-slate-500 hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-mono font-bold text-slate-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-[9px] font-mono text-neon-blue/60 uppercase tracking-[0.2em] mb-4">
                  {project.category}
                </p>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed font-sans flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
