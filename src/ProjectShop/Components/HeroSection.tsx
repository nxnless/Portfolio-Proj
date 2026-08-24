import React from 'react';
import { heroStyles } from './styles';

export const HeroSection = () => {
  const stats = [
    { num: '12', label: 'โปรเจกต์' },
    { num: '5', label: 'หมวดหมู่' },
    { num: '3', label: 'ปีที่ผ่านมา' },
    { num: '∞', label: 'ไอเดีย' },
  ];

  return (
    <>
      {/* Hero Content */}
      <div className={heroStyles.wrapper}>
        <div className={heroStyles.badge}>
          ✦ Portfolio · 2024
        </div>
        <h1 className={heroStyles.title}>
          ผลงานทั้งหมด<br />ในที่เดียว<span className={heroStyles.titleAccent}>.</span>
        </h1>
        <p className={heroStyles.description}>
          รวมเว็บไซต์และโปรเจกต์ที่ผ่านมา ครอบคลุมงาน UI/UX, Landing Page, และ Web Application
        </p>
      </div>

      {/* Stats Bar */}
      <div className={heroStyles.statsBar}>
        {stats.map((stat, idx) => (
          <div key={idx} className={heroStyles.statItem}>
            <span className={heroStyles.statNum}>
              {stat.num}
            </span>
            <span className={heroStyles.statLabel}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
