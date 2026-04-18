import React from 'react';
import { MapPin, Link as LinkIcon, Twitter, Mail, Github, Users, Star } from 'lucide-react';
import { PROFILE } from '../constants';
import { motion } from 'motion/react';

export const Sidebar: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-6"
    >
      <motion.div 
        variants={item}
        className="relative group w-fit"
      >
        <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-blue-500/20 group-hover:scale-[1.02]">
          <img 
            src={PROFILE.avatar} 
            alt={PROFILE.name}
            className="w-48 h-48 sm:w-64 sm:h-64 object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
        
        <div className="absolute -bottom-2 -right-2 bg-white border border-[var(--color-line)] rounded-lg px-3 py-1.5 shadow-lg flex items-center gap-1.5 text-[10px] font-black text-green-600 uppercase tracking-widest">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          <span>Syncing Live</span>
        </div>
      </motion.div>

      <div className="space-y-6">
        <motion.div variants={item}>
          <h1 className="text-3xl font-black tracking-tight text-[var(--color-primary)] font-display italic">{PROFILE.name}</h1>
          <p className="text-base font-bold text-[var(--color-text-muted)] mt-1">
            <span className="text-[var(--color-accent)] opacity-60">@</span>{PROFILE.username}
          </p>
        </motion.div>

        <motion.p variants={item} className="text-[14px] text-[var(--color-text-main)] leading-relaxed font-medium bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-[var(--color-line)]/50">
          {PROFILE.bio}
        </motion.p>

        <motion.div variants={item} className="flex flex-col gap-3">
          <button className="w-full py-3 px-4 bg-[var(--color-primary)] rounded-xl text-xs font-black text-white hover:bg-black shadow-lg shadow-black/10 transition-all hover:scale-[1.02] active:scale-[0.98] uppercase tracking-[0.2em] flex items-center justify-center gap-2">
            <Github size={14} />
            Initialize Follow
          </button>
          
          <div className="flex items-center gap-4 text-xs font-bold text-[var(--color-text-muted)] px-1">
            <div className="flex items-center gap-1 hover:text-[var(--color-accent)] cursor-pointer transition-colors group">
              <span className="text-[var(--color-text-main)] transition-colors group-hover:text-[var(--color-accent)]">4.2k</span>
              <span className="opacity-60">followers</span>
            </div>
            <div className="flex items-center gap-1 hover:text-[var(--color-accent)] cursor-pointer transition-colors group">
              <span className="text-[var(--color-text-main)] transition-colors group-hover:text-[var(--color-accent)]">128</span>
              <span className="opacity-60">following</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="space-y-3.5 text-[13px] text-[var(--color-text-main)] font-semibold border-t border-[var(--color-line)] pt-6">
          <div className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-[var(--color-text-muted)] group-hover:bg-blue-50 group-hover:text-[var(--color-accent)] transition-all">
              <MapPin size={14} />
            </div>
            <span>{PROFILE.location}</span>
          </div>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-[var(--color-text-muted)] group-hover:bg-blue-50 group-hover:text-[var(--color-accent)] transition-all">
              <Mail size={14} />
            </div>
            <span className="group-hover:text-[var(--color-accent)] transition-colors">{PROFILE.email}</span>
          </div>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-[var(--color-text-muted)] group-hover:bg-blue-50 group-hover:text-[var(--color-accent)] transition-all">
              <LinkIcon size={14} />
            </div>
            <span className="group-hover:text-[var(--color-accent)] transition-colors">{PROFILE.website}</span>
          </div>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-[var(--color-text-muted)] group-hover:bg-blue-50 group-hover:text-[var(--color-accent)] transition-all">
              <Twitter size={14} />
            </div>
            <span className="group-hover:text-[var(--color-accent)] transition-colors">{PROFILE.twitter}</span>
          </div>
        </motion.div>
      </div>

      <motion.div variants={item} className="pt-2">
        <h3 className="text-[10px] font-black mb-4 uppercase tracking-[0.2em] text-[var(--color-text-muted)] opacity-60">Verified Credentials</h3>
        <div className="flex flex-wrap gap-2.5">
          {['🚀', '🛠️', '🛡️', '🏆'].map((emoji, i) => (
            <div key={i} className="w-10 h-10 flex items-center justify-center border border-[var(--color-line)] rounded-xl text-lg bg-white shadow-sm hover:border-[var(--color-accent)] hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300 cursor-help group/badge">
              <span className="group-hover/badge:scale-125 transition-transform duration-500 ease-out">{emoji}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
