import React from 'react';
import { Star, GitFork, Circle } from 'lucide-react';
import { Project } from '../types';
import { motion } from 'motion/react';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="p-5 bg-white border border-[var(--color-line)] rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-3 group"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-[15px] font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] cursor-pointer transition-colors">
          {project.title}
        </h3>
        <span className="px-2 py-0.5 text-[9px] font-bold border border-[var(--color-line)] rounded text-[var(--color-text-muted)] uppercase tracking-[0.1em] bg-[var(--color-surface)]">
          {project.role || 'Public'}
        </span>
      </div>
      
      <p className="text-[12px] text-[var(--color-text-muted)] leading-relaxed line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-1">
        {project.tags.slice(0, 3).map(tag => (
          <span key={tag} className="px-2.5 py-1 bg-[#eff6ff] text-[var(--color-accent)] text-[10px] font-bold rounded border border-[#dbeafe]">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-auto pt-4 text-[11px] text-[var(--color-text-muted)] font-bold">
        {project.language && (
          <div className="flex items-center gap-1.5">
            <Circle size={8} fill={project.languageColor || '#ccc'} stroke="none" />
            <span className="text-[var(--color-text-main)] uppercase tracking-wider">{project.language}</span>
          </div>
        )}
        {project.stars !== undefined && (
          <div className="flex items-center gap-1 hover:text-[var(--color-accent)] cursor-pointer transition-colors">
            <Star size={13} fill="currentColor" />
            <span>{project.stars}</span>
          </div>
        )}
        <span className="ml-auto font-medium opacity-70">Updated {project.updatedAt}</span>
      </div>
    </motion.div>
  );
};

export const ExperienceCard: React.FC<{ experience: any }> = ({ experience }) => {
  return (
    <div className="relative pl-8 pb-8 border-l border-[var(--color-line)] last:pb-0">
      <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-surface)]" />
      
      <div className="bg-white border border-[var(--color-line)] rounded-lg p-5 shadow-sm hover:border-[var(--color-accent)]/30 transition-colors">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-4">
          <div>
            <p className="text-[11px] font-bold text-[var(--color-accent)] uppercase tracking-widest mb-1">{experience.period}</p>
            <h3 className="text-[14px] font-bold text-[var(--color-primary)]">{experience.role}</h3>
            <p className="text-[12px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">{experience.company}</p>
          </div>
        </div>

        <ul className="space-y-2.5 text-[13px] text-[var(--color-text-main)] mb-6 font-medium leading-relaxed">
          {experience.description.map((item: string, i: number) => (
            <li key={i} className="flex gap-2">
              <span className="text-[var(--color-accent)] mt-1.5 shrink-0 w-1 h-1 rounded-full bg-current" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-line)]/50">
          {experience.skills.map((skill: string) => (
            <span key={skill} className="px-2 py-1 bg-[var(--color-surface)] text-[var(--color-secondary)] text-[10px] font-bold rounded uppercase tracking-wider border border-[var(--color-line)]">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
