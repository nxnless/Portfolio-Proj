import React from 'react';

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
      <div className="px-8 pt-20 pb-12 relative">
        <div className="inline-block text-[11px] tracking-[0.15em] uppercase text-[#c8f53f] border border-[#c8f53f]/25 px-3 py-1 rounded-full mb-6">
          ✦ Portfolio · 2024
        </div>
        <h1 className="font-['Syne'] text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none text-[#e8e4d8] max-w-[700px] mb-6">
          ผลงานทั้งหมด<br />ในที่เดียว<span className="text-[#c8f53f] italic">.</span>
        </h1>
        <p className="text-base text-[#e8e4d8]/45 font-light max-w-[420px] Mediterranean leading-relaxed mb-10">
          รวมเว็บไซต์และโปรเจกต์ที่ผ่านมา ครอบคลุมงาน UI/UX, Landing Page, และ Web Application
        </p>
      </div>

      {/* Stats Bar */}
      <div className="flex gap-8 md:gap-16 px-8 py-6 border-t border-b border-white/5 mb-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <span className="font-['Syne'] text-3xl md:text-4xl font-extrabold text-[#c8f53f]">
              {stat.num}
            </span>
            <span className="text-[11px] text-[#e8e4d8]/35 tracking-wider uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};