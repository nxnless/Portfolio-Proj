import React from 'react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  
  // ฟังก์ชันจัดสีของ Tag ตามประเภทที่กำหนดไว้ในข้อมูล
  const getTagClass = (type: string) => {
    switch (type) {
      case 'green': return 'bg-[#7ddf7d]/10 text-[#7ddf7d]';
      case 'blue': return 'bg-[#6b9fff]/10 text-[#6b9fff]';
      case 'coral': return 'bg-[#df7d7d]/10 text-[#df7d7d]';
      case 'purple': return 'bg-[#c87ddf]/10 text-[#c87ddf]';
      case 'teal': return 'bg-[#7dcdcd]/10 text-[#7dcdcd]';
      default: return 'bg-white/10 text-white';
    }
  };

  return (
    <div className={`group rounded-2xl overflow-hidden relative cursor-pointer border border-white/5 bg-[#111118] transition-transform duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1.5 ${project.gridClass}`}>
      
      {/* Thumbnail Area */}
      <div className={`w-full aspect-[16/10] flex items-center justify-center font-['Syne'] text-4xl font-extrabold bg-gradient-to-br relative ${project.bgStyle}`}>
        <div className="relative z-10">{project.displayId}</div>
        
        {/* Overlay Hover Effect */}
        <div className="absolute inset-0 bg-[#0a0a0f]/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
          <button className="font-['Syne'] text-xs font-bold tracking-wider uppercase px-6 py-2.5 rounded-full bg-[#c8f53f] text-[#0a0a0f] border-none transform transition-transform duration-300 group-hover:scale-105">
            ดูงาน ↗
          </button>
        </div>
      </div>

      {/* Info Area */}
      <div className="p-4 md:p-5">
        <div className="text-[10px] tracking-widest uppercase text-[#e8e4d8]/30 mb-1.5">
          {project.label}
        </div>
        <h3 className="font-['Syne'] text-base font-bold text-[#e8e4d8] mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-[#e8e4d8]/40 font-light leading-relaxed">
          {project.description}
        </p>
        
        {/* Tags Row */}
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {project.tags.map((tag, i) => (
            <span key={i} className={`text-[10px] px-2.5 py-0.5 rounded-full font-medium tracking-wide ${getTagClass(tag.type)}`}>
              {tag.text}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};