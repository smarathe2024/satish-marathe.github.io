import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import type { BlogPost } from '../types';

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ post, onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-8 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-bold uppercase tracking-widest">Back to Archive</span>
      </button>

      <article className="section-container bg-white">
        <header className="p-8 border-b border-[var(--color-line)] bg-[#f8fafc]/50">
          <div className="flex items-center gap-4 text-[11px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-[var(--color-primary)] leading-tight tracking-tight">
            {post.title}
          </h1>
        </header>

        <div className="p-8 md:p-12">
          <div className="prose prose-slate max-w-none">
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 className="text-2xl font-black text-[var(--color-primary)] mb-6 mt-8" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-xl font-bold text-[var(--color-primary)] mb-4 mt-8" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-lg font-bold text-[var(--color-primary)] mb-4 mt-6" {...props} />,
                p: ({node, ...props}) => <p className="text-[15px] text-[var(--color-text-main)] leading-relaxed mb-6 font-medium" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-outside ml-6 space-y-3 mb-6 text-[15px] text-[var(--color-text-main)] font-medium" {...props} />,
                li: ({node, ...props}) => <li className="pl-1" {...props} />,
                code: ({node, ...props}) => <code className="bg-[#f1f5f9] px-1.5 py-0.5 rounded text-sm font-mono text-blue-600" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-blue-500 pl-6 py-2 italic text-gray-700 my-8 bg-blue-50/30 rounded-r-lg" {...props} />,
              }}
            >
              {post.content || ''}
            </ReactMarkdown>
          </div>
        </div>
      </article>
      
      <div className="mt-12 p-8 bg-[var(--color-surface)] border border-dashed border-[var(--color-line)] rounded-xl text-center">
        <p className="text-[var(--color-text-muted)] text-sm font-medium mb-4 italic">
          Interested in discussing this architectural approach further?
        </p>
        <a 
          href="mailto:smarathe@example.com"
          className="inline-flex items-center gap-2 text-[var(--color-accent)] font-bold text-sm uppercase tracking-widest hover:underline"
        >
          Initiate Dialogue →
        </a>
      </div>
    </div>
  );
};

export default BlogPostView;
