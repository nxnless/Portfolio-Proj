// styles.ts
// รวม className (Tailwind) ที่เดิมฝังอยู่ใน JSX ของแต่ละคอมโพเนนต์
// แยกออกมาไว้ที่เดียว เพื่อให้ไฟล์ component อ่านง่ายขึ้น และแก้ธีมได้จากที่เดียว

export const navbarStyles = {
  nav: "flex items-center justify-between px-8 py-5 border-b border-white/10 bg-[#0a0a0f]/90 sticky top-0 z-50 backdrop-blur-md",
  logo: "font-['Syne'] font-extrabold text-[1.2rem] tracking-widest text-[#c8f53f] uppercase",
  list: "flex gap-8 list-none",
  link: "text-sm font-normal text-[#e8e4d8]/50 tracking-wider hover:text-[#c8f53f] transition-colors",
};

export const heroStyles = {
  wrapper: "px-8 pt-20 pb-12 relative",
  badge: "inline-block text-[11px] tracking-[0.15em] uppercase text-[#c8f53f] border border-[#c8f53f]/25 px-3 py-1 rounded-full mb-6",
  title: "font-['Syne'] text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none text-[#e8e4d8] max-w-[700px] mb-6",
  titleAccent: "text-[#c8f53f] italic",
  description: "text-base text-[#e8e4d8]/45 font-light max-w-[420px] leading-relaxed mb-10",
  statsBar: "flex gap-8 md:gap-16 px-8 py-6 border-t border-b border-white/5 mb-12",
  statItem: "flex flex-col gap-1",
  statNum: "font-['Syne'] text-3xl md:text-4xl font-extrabold text-[#c8f53f]",
  statLabel: "text-[11px] text-[#e8e4d8]/35 tracking-wider uppercase",
};

export const projectCardStyles = {
  card: "group rounded-2xl overflow-hidden relative cursor-pointer border border-white/5 bg-[#111118] transition-transform duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1.5",
  thumbnail: "w-full aspect-[16/10] flex items-center justify-center font-['Syne'] text-4xl font-extrabold bg-gradient-to-br relative",
  thumbnailId: "relative z-10",
  info: "p-4 md:p-5",
  label: "text-[10px] tracking-widest uppercase text-[#e8e4d8]/30 mb-1.5",
  title: "font-['Syne'] text-base font-bold text-[#e8e4d8] mb-1",
  description: "text-xs text-[#e8e4d8]/40 font-light leading-relaxed",
  tagsRow: "flex flex-wrap gap-1.5 mt-2.5",
  tagBase: "text-[10px] px-2.5 py-0.5 rounded-full font-medium tracking-wide",
  tagColors: {
    green: "bg-[#7ddf7d]/10 text-[#7ddf7d]",
    blue: "bg-[#6b9fff]/10 text-[#6b9fff]",
    coral: "bg-[#df7d7d]/10 text-[#df7d7d]",
    purple: "bg-[#c87ddf]/10 text-[#c87ddf]",
    teal: "bg-[#7dcdcd]/10 text-[#7dcdcd]",
    default: "bg-white/10 text-white",
  },
};
