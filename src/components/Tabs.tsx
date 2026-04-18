import React from 'react';
import { ProjectCard, ExperienceCard } from './Cards';
import { PROJECTS, EXPERIENCES, SKILLS, BLOG_POSTS, CERTIFICATIONS, CONTRIBUTIONS, PROFILE } from '../constants';
import { FileText, BookOpen, Award, GitBranch, Terminal, Layout, PenTool } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'motion/react';
import BlogPostView from './BlogPostView';
import type { BlogPost } from '../types';

export const OverviewTab: React.FC = () => (
  <div className="space-y-8">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="section-container"
    >
      <div className="section-header">
        <BookOpen size={14} />
        <span>Architect-Manifesto.md</span>
      </div>
      <div className="p-10 prose prose-slate max-w-none bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.02),transparent)]">
        <ReactMarkdown 
          components={{
            h1: ({node, ...props}) => <h1 className="text-3xl font-black text-[var(--color-primary)] border-b border-[var(--color-line)] pb-5 mb-8 mt-12 first:mt-0 tracking-tighter font-display italic" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-xl font-bold text-[var(--color-primary)] mb-5 mt-10 font-display flex items-center gap-2" {...props} />,
            p: ({node, ...props}) => <p className="text-[15px] text-[var(--color-text-main)] leading-relaxed mb-6 font-medium selection:bg-blue-100" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-3 mb-8 text-[15px] text-[var(--color-text-main)] font-medium marker:text-[var(--color-accent)]" {...props} />,
            hr: () => <hr className="my-12 border-[var(--color-line)]/50" />,
            blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-[var(--color-accent)] pl-6 italic text-[var(--color-text-muted)] my-8" {...props} />,
          }}
        >
          {PROFILE.readme}
        </ReactMarkdown>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="section-container"
    >
      <div className="section-header">
        <Layout size={14} />
        <span>Pinned Systems & Infrastructure</span>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/30">
        {PROJECTS.slice(0, 4).map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </motion.div>
  </div>
);

export const ExperienceTab: React.FC = () => (
  <div className="max-w-4xl mx-auto">
    <div className="section-container border-none shadow-none bg-transparent">
      <div className="section-header bg-transparent border-none px-0 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white">
            <Terminal size={16} />
          </div>
          <span className="text-lg font-black text-[var(--color-primary)] font-display italic tracking-tight uppercase">Professional Architectural Tenure</span>
        </div>
      </div>
      <div className="space-y-2">
        {EXPERIENCES.map(exp => <ExperienceCard key={exp.id} experience={exp} />)}
      </div>
    </div>
  </div>
);

export const SkillsTab: React.FC = () => (
  <motion.div 
    initial="hide"
    animate="show"
    variants={{
      show: { transition: { staggerChildren: 0.1 } }
    }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8"
  >
    {SKILLS.map(cat => (
      <motion.div 
        key={cat.title} 
        variants={{
          hide: { opacity: 0, scale: 0.95 },
          show: { opacity: 1, scale: 1 }
        }}
        className="section-container hover-lift border-b-4 hover:border-b-[var(--color-accent)]"
      >
        <div className="section-header">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
          {cat.title}
        </div>
        <div className="p-8 flex flex-wrap gap-2.5 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.03),transparent)]">
          {cat.skills.map(skill => (
            <span key={skill} className="px-4 py-2 bg-white text-[11px] font-black text-[var(--color-text-main)] rounded-xl border border-[var(--color-line)] uppercase tracking-widest hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all cursor-default shadow-sm active:scale-90">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export const BlogTab: React.FC = () => {
  const [selectedPost, setSelectedPost] = React.useState<BlogPost | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {selectedPost ? (
        <BlogPostView post={selectedPost} onBack={() => setSelectedPost(null)} />
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-container shadow-xl shadow-blue-500/5 group"
        >
          <div className="section-header">
            <PenTool size={14} />
            <span>Latest Architectural Analysis</span>
          </div>
          <div className="divide-y divide-[var(--color-line)] bg-white">
            {BLOG_POSTS.map((post, idx) => (
              <motion.div 
                key={post.id} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedPost(post)}
                className="p-8 hover:bg-blue-50/20 transition-all group/post cursor-pointer border-l-4 border-transparent hover:border-l-[var(--color-accent)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <h3 className="text-[18px] font-black text-[var(--color-primary)] group-hover/post:text-[var(--color-accent)] transition-colors font-display tracking-tight italic">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-[var(--color-text-muted)] whitespace-nowrap bg-gray-50 border border-[var(--color-line)] px-2.5 py-1 rounded-lg uppercase tracking-widest opacity-60">
                      {post.date}
                    </span>
                    <span className="text-[10px] font-black text-[var(--color-accent)] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-lg uppercase tracking-widest">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <p className="text-[14px] text-[var(--color-text-muted)] mb-6 line-clamp-2 leading-relaxed font-medium">
                  {post.excerpt}
                </p>
                <button className="text-[11px] font-black text-[var(--color-primary)] hover:text-[var(--color-accent)] inline-flex items-center gap-2 group/btn uppercase tracking-[0.15em] transition-colors">
                  Initiate Read <span className="text-base group-hover/btn:translate-x-1.5 transition-transform duration-300">→</span>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export const OssTab: React.FC = () => (
  <div className="space-y-8">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="section-container"
    >
      <div className="section-header">
        <GitBranch size={14} />
        <span>Open Source & Ecosystem Contributions</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8fafc] border-b border-[var(--color-line)]">
              <th className="px-6 py-4 text-[10px] font-black text-[var(--color-text-muted)] uppercase tracking-[0.2em]">Repository</th>
              <th className="px-6 py-4 text-[10px] font-black text-[var(--color-text-muted)] uppercase tracking-[0.2em]">Scope of work</th>
              <th className="hidden sm:table-cell px-6 py-4 text-[10px] font-black text-[var(--color-text-muted)] uppercase tracking-[0.2em] text-center">Protocol</th>
              <th className="px-6 py-4 text-[10px] font-black text-[var(--color-text-muted)] uppercase tracking-[0.2em] text-right">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-line)] bg-white">
            {CONTRIBUTIONS.map((ct, idx) => (
              <motion.tr 
                key={ct.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="hover:bg-blue-50/30 transition-colors group cursor-default"
              >
                <td className="px-6 py-5 font-black text-[var(--color-accent)] text-[13px] whitespace-nowrap font-display italic">{ct.repo}</td>
                <td className="px-6 py-5 text-[13px] text-[var(--color-text-main)] min-w-[200px] font-medium leading-relaxed">{ct.description}</td>
                <td className="hidden sm:table-cell px-6 py-5 text-center">
                  <span className={`px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest border ${
                    ct.type === 'PR' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                  }`}>
                    {ct.type}
                  </span>
                </td>
                <td className="px-6 py-5 text-[11px] font-bold text-[var(--color-text-muted)] text-right whitespace-nowrap uppercase tracking-widest opacity-60">{ct.date}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="section-container"
    >
      <div className="section-header">
        <Award size={14} />
        <span>Professional Certifications</span>
      </div>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-slate-50/30">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div 
            key={cert.id} 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white border border-[var(--color-line)] rounded-2xl p-6 flex flex-col justify-between hover-lift group border-b-4 hover:border-b-[var(--color-accent)]"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-4 border border-[var(--color-line)] group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                <Award size={20} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
              </div>
              <h3 className="text-[14px] font-black text-[var(--color-primary)] mb-1 leading-snug font-display tracking-tight">{cert.title}</h3>
              <p className="text-[10px] text-[var(--color-text-muted)] font-black uppercase tracking-[0.1em]">{cert.issuer}</p>
            </div>
            <div className="flex items-center justify-between mt-6">
              <span className="text-[9px] font-black text-[var(--color-accent)] bg-blue-50 px-2 py-1 rounded-md border border-blue-100 uppercase tracking-widest">{cert.date}</span>
              <button className="text-[9px] font-black text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors uppercase tracking-[0.15em] flex items-center gap-1.5">
                Verify Rigor <span className="text-xs group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);
