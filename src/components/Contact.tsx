import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Github, Linkedin, MessageSquare, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-mono font-bold uppercase tracking-tight mb-8 text-white">
              Connect & <span className="text-neon-blue">Collaborate</span>
            </h2>
            <p className="text-slate-400 font-sans text-lg mb-12 leading-relaxed max-w-md">
              Open to networking with fellow students and professionals, or discussing potential internship opportunities and collaborative labs.
            </p>

            <div className="space-y-10">
              {[
                { icon: Mail, label: 'Communications', value: 'mihithkodagoda622@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'Remote / Global' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded bg-white/[0.03] border border-white/5 flex items-center justify-center text-neon-blue transition-all group-hover:border-neon-blue/30">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-slate-600 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="font-sans text-base text-slate-200">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 border border-white/5 bg-white/[0.02] rounded-lg"
          >
            {submitted ? (
              <div className="text-center py-20 space-y-6">
                <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-neon-green" />
                </div>
                <h3 className="text-xl font-mono font-bold text-white uppercase tracking-wider">Inquiry Received</h3>
                <p className="text-slate-500 font-sans text-sm max-w-xs mx-auto">Thank you for establishing contact. I will review your inquiry and respond within 24-48 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 border border-white/10 rounded font-mono text-[10px] text-slate-400 hover:text-white transition-colors"
                >
                  SEND_ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest pl-1">Identification</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Full Name"
                      className="w-full bg-white/[0.03] border border-white/5 px-4 py-3 rounded font-mono text-xs text-white placeholder:text-slate-600 focus:border-neon-blue/40 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest pl-1">Electronic Mail</label>
                    <input 
                      required
                      type="email" 
                      placeholder="email@organization.com"
                      className="w-full bg-white/[0.03] border border-white/5 px-4 py-3 rounded font-mono text-xs text-white placeholder:text-slate-600 focus:border-neon-blue/40 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest pl-1">Message_Payload</label>
                  <textarea 
                    required
                    placeholder="Describe the scope of the project or technical requirements..."
                    rows={5}
                    className="w-full bg-white/[0.03] border border-white/5 px-4 py-3 rounded font-mono text-xs text-white placeholder:text-slate-600 focus:border-neon-blue/40 outline-none transition-all resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-neon-blue hover:bg-neon-blue/90 text-white font-mono text-xs font-bold rounded flex items-center justify-center gap-3 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'PROCESSING...' : 'DISPATCH_INQUIRY'} <Send className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer: React.FC = () => (
  <footer className="py-20 border-t border-white/5 bg-cyber-black">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-mono text-[11px] text-slate-500 tracking-tight">
          <span className="text-white font-bold tracking-widest">MIHITH KODAGODA</span> // CYBERSECURITY STUDENT
        </div>
        
        <div className="flex gap-8">
          {[
            { icon: Github, href: 'https://github.com/mihithk123' },
            { icon: Linkedin, href: 'https://linkedin.com/in/mihith-kodagoda' },
            { icon: Mail, href: 'mailto:mihithkodagoda622@gmail.com' }
          ].map((social, i) => (
            <a key={i} href={social.href} className="text-slate-600 hover:text-white transition-colors">
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        
        <div className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.4em]">
          © 2026 // ALL_RIGHTS_RESERVED
        </div>
      </div>
    </div>
  </footer>
);
