import { useState } from 'react';
import { Navbar } from './Components/Navbar';
import { HeroSection } from './Components/HeroSection';
import { ProjectCard } from './Components/ProjectCard';
import { projectsData } from './data/projects';

export const PortfolioPortal = () => {
  const [filter, setFilter] = useState<string>('all');

  const filterButtons = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'landing', label: 'Landing Page' },
    { id: 'webapp', label: 'Web App' },
    { id: 'ecomm', label: 'E-Commerce' },
    { id: 'ui', label: 'UI Design' },
  ];

  // กรองโปรเจกต์ตามสเตทปัจจุบัน
  const filteredProjects = projectsData.filter(
    (project) => filter === 'all' || project.category === filter
  );

  return (
    <div className="font-['DM_Sans'] bg-[#0a0a0f] text-[#e8e4d8] min-height-screen overflow-x-hidden selection:bg-[#c8f53f] selection:text-[#0a0a0f]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto pb-16">
        <HeroSection />

        {/* Filter Bar */}
        <div className="flex gap-2 flex-wrap mb-12 px-8">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`text-xs font-medium px-4 py-1.5 rounded-full border transition-all duration-200 tracking-wide
                ${filter === btn.id 
                  ? 'bg-[#c8f53f] text-[#0a0a0f] border-[#c8f53f]' 
                  : 'bg-transparent border-white/15 text-[#e8e4d8]/50 hover:border-[#c8f53f]/45 hover:text-[#c8f53f]'
                }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Section Title */}
        <div className="text-[10px] tracking-[0.15em] uppercase text-[#e8e4d8]/25 px-8 mb-4">
          — ผลงานล่าสุด
        </div>

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-12 gap-3 px-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PortfolioPortal;