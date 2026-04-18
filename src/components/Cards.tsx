import React from 'react';
import { Star, GitFork, Circle } from 'lucide-react';
import { Project } from '../types';
import { motion } from 'motion/react';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-6 bg-white border border-[var(--color-line)] rounded-xl shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col gap-4 group hover-lift border-b-[3px] hover:border-b-[var(--color-accent)]"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-[17px] font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors font-display tracking-tight">
          {project.title}
        </h3>
        <span className="px-2 py-0.5 text-[9px] font-black border border-[var(--color-line)] rounded-md text-[var(--color-text-muted)] uppercase tracking-[0.15em] bg-[var(--color-surface)] group-hover:bg-blue-50 group-hover:text-[var(--color-accent)] transition-colors">
          {project.role || 'Public'}
        </span>
      </div>
      
      <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed line-clamp-2 font-medium">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-1">
        {project.tags.slice(0, 3).map(tag => (
          <span key={tag} className="px-3 py-1 bg-[var(--color-accent-soft)] text-[var(--color-accent)] text-[10px] font-black rounded-lg border border-blue-100/50 uppercase tracking-widest">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5 mt-auto pt-6 text-[11px] text-[var(--color-text-muted)] font-black uppercase tracking-widest">
        {project.language && (
          <div className="flex items-center gap-1.5 group/lang">
            <Circle size={8} fill={project.languageColor || '#2563eb'} className="group-hover/lang:scale-125 transition-transform" stroke="none" />
            <span className="text-[var(--color-text-main)] group-hover:text-[var(--color-accent)] transition-colors">{project.language}</span>
          </div>
        )}
        {project.stars !== undefined && (
          <div className="flex items-center gap-1.5 hover:text-[var(--color-accent)] cursor-pointer transition-colors group/star">
            <Star size={13} className="group-hover/star:scale-125 transition-transform duration-300" />
            <span>{project.stars}</span>
          </div>
        )}
        <span className="ml-auto font-bold opacity-40">V {project.updatedAt}</span>
      </div>
    </motion.div>
  );
};

export const ExperienceCard: React.FC<{ experience: any }> = ({ experience }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-10 pb-10 border-l-2 border-[var(--color-line)] last:pb-0 group"
    >
      <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-[var(--color-line)] group-hover:border-[var(--color-accent)] group-hover:scale-110 transition-all duration-300 shadow-sm" />
      
      <div className="bg-white border border-[var(--color-line)] rounded-2xl p-6 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-500/5 group-hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
        {/* Subtle accent corner */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-accent)]/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700" />
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-blue-50 text-[var(--color-accent)] text-[10px] font-black rounded-lg uppercase tracking-widest border border-blue-100">
                {experience.period}
              </span>
            </div>
            <h3 className="text-[18px] font-black text-[var(--color-primary)] font-display tracking-tight italic group-hover:text-[var(--color-accent)] transition-colors uppercase">{experience.role}</h3>
            <p className="text-[13px] font-bold text-[var(--color-text-muted)] mt-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-line)]" />
              {experience.company}
            </p>
          </div>
        </div>

        <ul className="space-y-3.5 text-[14px] text-[var(--color-text-main)] mb-8 font-medium leading-relaxed relative z-10">
          {experience.description.map((item: string, i: number) => (
            <li key={i} className="flex gap-3 group/li">
              <span className="text-[var(--color-accent)] mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-current opacity-40 group-hover/li:opacity-100 group-hover/li:scale-125 transition-all" />
              <span className="group-hover/li:text-[var(--color-primary)] transition-colors">{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-6 border-t border-[var(--color-line)]/40 relative z-10">
          {experience.skills.map((skill: string) => (
            <span key={skill} className="px-3 py-1.5 bg-gray-50 text-[var(--color-secondary)] text-[11px] font-bold rounded-lg uppercase tracking-tight border border-[var(--color-line)]/60 hover:border-[var(--color-accent)]/40 hover:bg-white transition-all cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
