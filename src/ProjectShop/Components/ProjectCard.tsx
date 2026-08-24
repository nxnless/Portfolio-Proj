import React from 'react';
import type { Project } from '../data/projects';
import { projectCardStyles } from './styles';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

  // ฟังก์ชันจัดสีของ Tag ตามประเภทที่กำหนดไว้ในข้อมูล
  const getTagClass = (type: string) => {
    return (
      projectCardStyles.tagColors[type as keyof typeof projectCardStyles.tagColors] ??
      projectCardStyles.tagColors.default
    );
  };

  return (
    <div className={`${projectCardStyles.card} ${project.gridClass}`}>

      {/* Thumbnail Area */}
      <div className={`${projectCardStyles.thumbnail} ${project.bgStyle}`}>
        <div className={projectCardStyles.thumbnailId}>{project.displayId}</div>
      </div>

      {/* Info Area */}
      <div className={projectCardStyles.info}>
        <div className={projectCardStyles.label}>
          {project.label}
        </div>
        <h3 className={projectCardStyles.title}>
          {project.title}
        </h3>
        <p className={projectCardStyles.description}>
          {project.description}
        </p>

        {/* Tags Row */}
        <div className={projectCardStyles.tagsRow}>
          {project.tags.map((tag, i) => (
            <span key={i} className={`${projectCardStyles.tagBase} ${getTagClass(tag.type)}`}>
              {tag.text}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};
