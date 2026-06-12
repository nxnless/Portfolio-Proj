import React from 'react';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-[#0a0a0f]/90 sticky top-0 z-50 backdrop-blur-md">
      <div className="font-['Syne'] font-extrabold text-ced text-[1.2rem] tracking-widest text-[#c8f53f] uppercase">
        PORTFOLIO
      </div>
      <ul className="flex gap-8 list-none">
        <li><a href="#" className="text-sm font-normal text-[#e8e4d8]/50 tracking-wider hover:text-[#c8f53f] transition-colors">งาน</a></li>
        <li><a href="#" className="text-sm font-normal text-[#e8e4d8]/50 tracking-wider hover:text-[#c8f53f] transition-colors">เกี่ยวกับ</a></li>
        <li><a href="#" className="text-sm font-normal text-[#e8e4d8]/50 tracking-wider hover:text-[#c8f53f] transition-colors">ติดต่อ</a></li>
      </ul>
    </nav>
  );
};