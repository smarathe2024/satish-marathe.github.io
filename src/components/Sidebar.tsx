import React from 'react';
import { MapPin, Link as LinkIcon, Twitter, Mail, Github, Users, Star } from 'lucide-react';
import { PROFILE } from '../constants';
import { motion } from 'motion/react';

export const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative group"
      >
        <img 
          src={PROFILE.avatar} 
          alt={PROFILE.name}
          className="w-48 h-48 sm:w-64 sm:h-64 rounded-xl border border-[var(--color-line)] bg-white object-cover shadow-md transition-all group-hover:shadow-lg"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-2 -right-2 bg-white border border-[var(--color-line)] rounded-lg px-2 py-1 shadow-sm flex items-center gap-1.5 text-[10px] font-bold text-green-600 uppercase">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span>Active</span>
        </div>
      </motion.div>

      <div className="space-y-5">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--color-primary)]">{PROFILE.name}</h1>
          <p className="text-base font-medium text-[var(--color-text-muted)]">@{PROFILE.username}</p>
        </div>

        <p className="text-[13px] text-[var(--color-text-main)] leading-relaxed font-medium">
          {PROFILE.bio}
        </p>

        <button className="w-full py-2 px-4 bg-white border border-[var(--color-line)] rounded-md text-sm font-bold text-[var(--color-primary)] hover:bg-[var(--color-surface)] shadow-sm transition-all active:scale-95 cursor-pointer">
          Follow
        </button>

        <div className="flex items-center gap-4 text-xs font-bold text-[var(--color-text-muted)]">
          <div className="flex items-center gap-1 hover:text-[var(--color-accent)] cursor-pointer transition-colors">
            <Users size={14} />
            <span className="text-[var(--color-text-main)]">4.2k</span> followers
          </div>
          <div className="flex items-center gap-1 hover:text-[var(--color-accent)] cursor-pointer transition-colors">
            <span className="text-[var(--color-text-main)]">128</span> following
          </div>
        </div>

        <div className="space-y-3 text-[13px] text-[var(--color-text-main)] font-medium">
          <div className="flex items-center gap-2.5">
            <MapPin size={14} className="text-[var(--color-text-muted)]" />
            <span>{PROFILE.location}</span>
          </div>
          <div className="flex items-center gap-2.5 hover:text-[var(--color-accent)] transition-colors cursor-pointer">
            <Mail size={14} className="text-[var(--color-text-muted)]" />
            <span>{PROFILE.email}</span>
          </div>
          <div className="flex items-center gap-2.5 hover:text-[var(--color-accent)] transition-colors cursor-pointer">
            <LinkIcon size={14} className="text-[var(--color-text-muted)]" />
            <span>{PROFILE.website}</span>
          </div>
          <div className="flex items-center gap-2.5 hover:text-[var(--color-accent)] transition-colors cursor-pointer">
            <Twitter size={14} className="text-[var(--color-text-muted)]" />
            <span>{PROFILE.twitter}</span>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-[var(--color-line)]">
        <h3 className="text-[11px] font-bold mb-4 uppercase tracking-widest text-[var(--color-text-muted)]">Verification Badges</h3>
        <div className="flex flex-wrap gap-3">
          {['🚀', '🛠️', '🛡️', '🏆'].map((emoji, i) => (
            <div key={i} className="w-9 h-9 flex items-center justify-center border border-[var(--color-line)] rounded-lg text-lg bg-white shadow-sm hover:border-[var(--color-accent)] transition-all cursor-help group/badge">
              <span className="group-hover/badge:scale-110 transition-transform">{emoji}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
