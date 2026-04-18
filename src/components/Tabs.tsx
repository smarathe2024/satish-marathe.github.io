import React from 'react';
import { ProjectCard, ExperienceCard } from './Cards';
import { PROJECTS, EXPERIENCES, SKILLS, BLOG_POSTS, CERTIFICATIONS, CONTRIBUTIONS, PROFILE } from '../constants';
import { FileText, BookOpen, Award, GitBranch, Terminal, Layout, PenTool } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'motion/react';

export const OverviewTab: React.FC = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="section-container">
      <div className="section-header">
        <BookOpen size={14} />
        <span>Architect-Manifesto.md</span>
      </div>
      <div className="p-8 prose prose-slate max-w-none">
        <ReactMarkdown 
          components={{
            h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-[var(--color-primary)] border-b border-[var(--color-line)] pb-3 mb-6 mt-8 first:mt-0 tracking-tight" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-lg font-bold text-[var(--color-primary)] mb-4 mt-8" {...props} />,
            p: ({node, ...props}) => <p className="text-[14px] text-[var(--color-text-main)] leading-relaxed mb-4 font-medium" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-2 mb-6 text-[14px] text-[var(--color-text-main)] font-medium" {...props} />,
            hr: () => <hr className="my-10 border-[var(--color-line)]" />,
          }}
        >
          {PROFILE.readme}
        </ReactMarkdown>
      </div>
    </div>

    <div className="section-container">
      <div className="section-header">
        <Layout size={14} />
        <span>Pinned Systems & Infrastructure</span>
      </div>
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.slice(0, 4).map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  </div>
);

export const ExperienceTab: React.FC = () => (
  <div className="animate-in slide-in-from-bottom-4 duration-500">
    <div className="section-container">
      <div className="section-header">
        <Terminal size={14} />
        <span>Professional Architectural Tenure</span>
      </div>
      <div className="p-8">
        <div className="space-y-2">
          {EXPERIENCES.map(exp => <ExperienceCard key={exp.id} experience={exp} />)}
        </div>
      </div>
    </div>
  </div>
);

export const SkillsTab: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in zoom-in-95 duration-500">
    {SKILLS.map(cat => (
      <div key={cat.title} className="section-container">
        <div className="section-header">{cat.title}</div>
        <div className="p-6 flex flex-wrap gap-2">
          {cat.skills.map(skill => (
            <span key={skill} className="px-3 py-1.5 bg-[#eff6ff] text-[var(--color-accent)] text-[11px] font-bold rounded border border-[#dbeafe] uppercase tracking-wider hover:bg-[#dbeafe] transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const BlogTab: React.FC = () => (
  <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
    <div className="section-container">
      <div className="section-header">
        <PenTool size={14} />
        <span>Latest Architectural Analysis</span>
      </div>
      <div className="divide-y divide-[var(--color-line)]">
        {BLOG_POSTS.map(post => (
          <div key={post.id} className="p-6 hover:bg-[var(--color-surface)] transition-all group cursor-pointer">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h3 className="text-[15px] font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                {post.title}
              </h3>
              <span className="text-[10px] font-bold text-[var(--color-text-muted)] whitespace-nowrap bg-white border border-[var(--color-line)] px-2 py-1 rounded-full uppercase tracking-widest">
                {post.date} • {post.readTime}
              </span>
            </div>
            <p className="text-[13px] text-[var(--color-text-muted)] mb-4 line-clamp-2 leading-relaxed font-medium">
              {post.excerpt}
            </p>
            <button className="text-[12px] font-bold text-[var(--color-accent)] hover:underline inline-flex items-center gap-1 group/btn uppercase tracking-tighter">
              Read architectural deep-dive <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const OssTab: React.FC = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="section-container">
      <div className="section-header">
        <GitBranch size={14} />
        <span>Open Source & Ecosystem Contributions</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8fafc] border-b border-[var(--color-line)]">
              <th className="px-6 py-4 text-[11px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest">Repository</th>
              <th className="px-6 py-4 text-[11px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest">Scope of work</th>
              <th className="hidden sm:table-cell px-6 py-4 text-[11px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest text-center">Protocol</th>
              <th className="px-6 py-4 text-[11px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest text-right">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-line)]">
            {CONTRIBUTIONS.map(ct => (
              <tr key={ct.id} className="hover:bg-[var(--color-surface)] transition-colors group">
                <td className="px-6 py-5 font-bold text-[var(--color-accent)] text-[13px] whitespace-nowrap">{ct.repo}</td>
                <td className="px-6 py-5 text-[13px] text-[var(--color-text-main)] min-w-[200px] font-medium leading-relaxed">{ct.description}</td>
                <td className="hidden sm:table-cell px-6 py-5 text-center">
                  <span className={`px-2 py-1 rounded text-[9px] font-bold uppercase tracking-wider border ${
                    ct.type === 'PR' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-purple-50 text-purple-700 border-purple-200'
                  }`}>
                    {ct.type}
                  </span>
                </td>
                <td className="px-6 py-5 text-[11px] font-bold text-[var(--color-text-muted)] text-right whitespace-nowrap uppercase tracking-tighter">{ct.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="section-container">
      <div className="section-header">
        <Award size={14} />
        <span>Professional Certifications</span>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CERTIFICATIONS.map(cert => (
          <div key={cert.id} className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-lg p-5 flex flex-col justify-between hover:border-[var(--color-accent)] transition-all group">
            <div>
              <h3 className="text-[13px] font-bold text-[var(--color-primary)] mb-1 leading-snug">{cert.title}</h3>
              <p className="text-[11px] text-[var(--color-text-muted)] font-bold uppercase tracking-wide">{cert.issuer}</p>
            </div>
            <div className="flex items-center justify-between mt-5">
              <span className="text-[10px] font-bold text-[var(--color-accent)] bg-white px-2 py-1 rounded border border-[var(--color-line)]">{cert.date}</span>
              <button className="text-[10px] font-bold text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors uppercase tracking-widest">Verify ID</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
