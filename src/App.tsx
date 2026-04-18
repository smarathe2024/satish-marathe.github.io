import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { OverviewTab, ExperienceTab, SkillsTab, BlogTab, OssTab } from './components/Tabs';
import { BookOpen, GitBranch, PenTool, Layout, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type TabType = 'overview' | 'experience' | 'skills' | 'blog' | 'oss';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'experience', label: 'Experience', icon: Terminal },
    { id: 'skills', label: 'Skills', icon: Layout },
    { id: 'blog', label: 'Blog', icon: PenTool },
    { id: 'oss', label: 'Open Source', icon: GitBranch },
  ] as const;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewTab />;
      case 'experience': return <ExperienceTab />;
      case 'skills': return <SkillsTab />;
      case 'blog': return <BlogTab />;
      case 'oss': return <OssTab />;
      default: return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Professional Polish Header */}
      <header className="sticky top-0 z-50 shadow-md">
        <div className="bg-[var(--color-primary)] border-b-4 border-[var(--color-accent)]">
          <div className="github-container py-0 h-20 flex items-center justify-between">
            <div className="flex items-center gap-4 text-gray-800">
            <div className="w-10 h-10 rounded-lg border border-white/20 bg-white/10 flex items-center justify-center font-bold text-lg text-white">
              SM
            </div>
            <div className="flex flex-col text-white">
              <h1 className="font-bold text-xl tracking-tight">Satish Marathe</h1>
              <p className="text-white/60 text-xs font-medium uppercase tracking-widest mt-0.5">Software Architect</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-white/80 text-xs">
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span>Available for Consult</span>
            </div>
            <div className="flex items-center gap-4 border-l border-white/20 pl-6 font-bold uppercase tracking-widest">
              <span className="text-white/40">satish-marathe</span>
              <span className="text-white/20">/</span>
              <span className="text-white hover:text-white transition-colors cursor-pointer">professional-ledger</span>
            </div>
          </div>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="bg-white border-b border-[var(--color-line)]">
          <div className="github-container py-0 flex overflow-x-auto no-scrollbar scroll-smooth">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`nav-tab whitespace-nowrap cursor-pointer transition-colors ${activeTab === tab.id ? 'nav-tab-active' : ''}`}
              >
                <tab.icon size={16} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="github-container mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Profile */}
          <aside className="lg:w-1/4">
            <Sidebar />
          </aside>

          {/* Right Main Content */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                {renderTabContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-[var(--color-line)] bg-white">
        <div className="github-container py-12 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-8">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-gray-200" />
            <span>© 2026 Satish Marathe. Built with professional architectural rigor in Pune.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Security</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Status</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Docs</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

