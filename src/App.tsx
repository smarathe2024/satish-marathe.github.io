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
    <div className="min-h-screen pb-20 selection:bg-blue-600/10 selection:text-blue-600">
      {/* Professional Polish Header */}
      <header className="sticky top-0 z-50 glass-effect shadow-sm">
        <div className="bg-[var(--color-primary)] border-b-2 border-[var(--color-accent)] relative overflow-hidden">
          {/* Decorative ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
          
          <div className="github-container py-0 h-16 flex items-center justify-between relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 text-gray-800"
            >
              <div className="w-9 h-9 rounded-lg border border-white/20 bg-white/10 flex items-center justify-center font-bold text-lg text-white font-display">
                SM
              </div>
              <div className="flex flex-col text-white">
                <h1 className="font-bold text-lg tracking-tight font-display italic">Satish Marathe</h1>
                <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.2em] -mt-0.5">Systems Architect</p>
              </div>
            </motion.div>
          
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-6 text-white/80 text-xs"
            >
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                <span className="font-bold tracking-tight">Available for Strategic Consult</span>
              </div>
              <div className="flex items-center gap-4 border-l border-white/20 pl-6 font-mono text-[11px] tracking-tight">
                <span className="text-white/30">satish-marathe</span>
                <span className="text-white/20">/</span>
                <span className="text-white hover:text-blue-400 transition-colors cursor-pointer font-bold">architectural-ledger</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="border-b border-[var(--color-line)]">
          <div className="github-container py-0 flex overflow-x-auto no-scrollbar scroll-smooth">
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`nav-tab whitespace-nowrap relative group ${activeTab === tab.id ? 'nav-tab-active' : ''}`}
              >
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <tab.icon size={15} />
                  <span>{tab.label}</span>
                </motion.div>
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-accent)] shadow-[0_0_8px_rgba(37,99,235,0.4)]"
                  />
                )}
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

