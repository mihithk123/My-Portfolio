import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, Circle, GraduationCap, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    status: 'In Progress',
    description: 'Deepening expertise in switching, routing, wireless connectivity, and IP services.',
    icon: Award,
    date: 'Expected Q3 2026',
    link: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/ccna.html'
  },
  {
    title: 'eLearnSecurity Junior Penetration Tester (eJPT)',
    issuer: 'INE',
    status: 'Planned',
    description: 'Target certification for establishing foundational hands-on pentesting skills.',
    icon: Shield,
    date: 'Target Q1 2027',
    link: 'https://www.ine.com/learning/certification/entry-level-penetration-tester'
  },
  {
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    status: 'Planned',
    description: 'Long-term goal for mastering professional ethical hacking methodologies.',
    icon: GraduationCap,
    date: 'Target Q4 2027',
    link: 'https://www.eccouncil.org/certified-ethical-hacker/'
  }
];

import { Shield } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certs" className="py-32 px-6 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-mono font-bold uppercase tracking-tight mb-8 text-white">
              Technical <br /><span className="text-neon-blue">Validation</span>
            </h2>
            <p className="text-slate-500 font-sans text-base leading-relaxed mb-10">
              Professional credentials documenting expertise across network architecture and security domains. 
            </p>
            <div className="space-y-4">
               <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400 uppercase tracking-widest pl-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-neon-green" /> Completed / Ongoing
               </div>
               <div className="flex items-center gap-4 text-[10px] font-mono text-slate-600 uppercase tracking-widest pl-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-white/20" /> Strategic Target
               </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-white/5 rounded bg-white/[0.01] hover:bg-white/[0.03] transition-colors flex flex-col md:flex-row md:items-center gap-8"
              >
                <div className={`p-4 rounded bg-white/[0.02] border border-white/5 ${cert.status === 'In Progress' ? 'text-neon-blue' : 'text-slate-600'}`}>
                  <cert.icon className="w-6 h-6" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <h3 className="text-base font-mono font-bold text-slate-200 uppercase tracking-tight">{cert.title}</h3>
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 border ${
                      cert.status === 'In Progress' 
                        ? 'border-neon-blue/30 text-neon-blue' 
                        : 'border-white/10 text-slate-600'
                    }`}>
                      {cert.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mb-4 font-sans leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="flex items-center gap-3 text-[9px] font-mono text-slate-600 uppercase tracking-[0.2em]">
                    <Calendar className="w-3 h-3" /> {cert.date}
                  </div>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-xs font-mono text-neon-blue hover:text-white transition-colors"
                    >
                      VIEW_DETAILS <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
