import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BriefcaseBusiness, BadgeCheck } from 'lucide-react';

const highlights = [
  {
    title: 'Education & Training',
    icon: GraduationCap,
    items: [
      'Cybersecurity-focused student with hands-on interest in networking and secure systems.',
      'Developing practical skills through labs, CTF-style learning, and project-based study.',
      'Expanding technical knowledge in infrastructure, security tools, and software development.'
    ]
  },
  {
    title: 'Experience Highlights',
    icon: BriefcaseBusiness,
    items: [
      'Built a university-level software project with secure data handling and access-control concepts.',
      'Explored network design and routing through Packet Tracer simulations and lab work.',
      'Documented and shared learning through security challenge write-ups and technical projects.'
    ]
  },
  {
    title: 'Certifications & Goals',
    icon: BadgeCheck,
    items: [
      'CCNA preparation in progress with a strong focus on networking fundamentals.',
      'Planned next steps include eJPT and CEH-aligned learning paths.',
      'Committed to continuous growth through practical projects and structured training.'
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="journey" className="py-32 px-6 relative border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl font-mono font-bold uppercase tracking-tight mb-4 text-white">
            Education <span className="text-neon-blue">& Experience</span>
          </h2>
          <p className="text-slate-500 font-sans text-sm leading-relaxed">
            A CV-style summary of the academic focus, learning journey, and project-based experience behind the portfolio.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-8 border border-white/5 rounded-lg bg-white/[0.01] hover:bg-white/[0.03] transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded bg-white/[0.03] border border-white/5 text-neon-blue">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-slate-200">{item.title}</h3>
              </div>

              <ul className="space-y-3 text-sm text-slate-400 font-sans leading-relaxed">
                {item.items.map((entry) => (
                  <li key={entry} className="flex gap-2">
                    <span className="text-neon-blue mt-1">•</span>
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
