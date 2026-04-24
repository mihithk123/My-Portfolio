import React from 'react';
import { motion } from 'motion/react';
import { Github, Target, Activity, Zap, Award, Star } from 'lucide-react';

const stats = [
  {
    platform: 'TryHackMe',
    icon: Target,
    color: 'text-slate-400',
    borderColor: 'border-white/5',
    rank: 'Top 3% Analyst',
    metrics: [
      { label: 'Platform Ranking', value: 'Global Leader', icon: Award },
      { label: 'Specializations', value: '18 Modules', icon: Zap },
    ]
  },
  {
    platform: 'GitHub',
    icon: Github,
    color: 'text-slate-400',
    borderColor: 'border-white/5',
    rank: 'Active Contributor',
    metrics: [
      { label: 'Commits', value: '840+', icon: Activity },
      { label: 'Repositories', value: '24', icon: Star },
    ]
  }
];

export const Stats: React.FC = () => {
  return (
    <section className="py-32 px-6 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-mono font-bold uppercase tracking-tight leading-none text-white">
              Learning <br /><span className="text-neon-blue">Progress</span>
            </h2>
            <p className="text-slate-500 font-sans text-base leading-relaxed">
              Actively developing skills through focused training modules, labs, and collaborative platforms like TryHackMe and GitHub.
            </p>
          </motion.div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {stats.map((item, idx) => (
              <motion.div
                key={item.platform}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 border border-white/5 bg-white/[0.01] rounded-lg transition-colors hover:bg-white/[0.02]`}
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className={`p-4 rounded-lg bg-white/[0.03] border border-white/5 ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-bold uppercase tracking-wide text-white">{item.platform}</h3>
                    <p className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">{item.rank}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  {item.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="font-mono text-xl font-bold text-slate-200 mb-1">{metric.value}</div>
                      <div className="font-mono text-[9px] text-slate-600 uppercase tracking-widest">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
