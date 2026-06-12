export interface Project {
  id: string;
  displayId: string;
  category: 'landing' | 'webapp' | 'ecomm' | 'ui';
  label: string;
  title: string;
  description: string;
  tags: { text: string; type: 'blue' | 'teal' | 'green' | 'coral' | 'purple' }[];
  bgStyle: string; // คลาสสีพื้นหลังไล่เฉดสีแบบ Tailwind
  gridClass: string; // การจัดขนาด Grid ใน Tailwind
}

export const projectsData: Project[] = [
  {
    id: '1',
    displayId: 'Web_1',
    category: 'landing',
    label: 'Landing Page · 2024',
    title: 'Corporate Website Redesign',
    description: 'ออกแบบและพัฒนาเว็บองค์กรใหม่ เน้น UX ที่ดีและ Performance สูง',
    bgStyle: 'from-[#1a2744] to-[#2d4a8c] text-[#6b9fff]',
    gridClass: 'md:col-span-7 col-span-12',
    tags: [
      { text: 'React', type: 'blue' },
      { text: 'Framer', type: 'teal' },
      { text: 'Tailwind', type: 'green' }
    ]
  },
  {
    id: '2',
    displayId: 'Web_2',
    category: 'webapp',
    label: 'Web App · 2024',
    title: 'Dashboard Analytics',
    description: 'ระบบ dashboard แสดงข้อมูล realtime พร้อม filter',
    bgStyle: 'from-[#1a2b1a] to-[#2d5c2d] text-[#7ddf7d]',
    gridClass: 'md:col-span-5 col-span-12',
    tags: [
      { text: 'Vue.js', type: 'green' },
      { text: 'D3.js', type: 'blue' }
    ]
  },
  {
    id: '3',
    displayId: 'Web_3',
    category: 'ecomm',
    label: 'E-Commerce · 2023',
    title: 'Online Shop',
    description: 'ร้านค้าออนไลน์ครบวงจร',
    bgStyle: 'from-[#2b1a1a] to-[#5c2d2d] text-[#df7d7d]',
    gridClass: 'md:col-span-4 col-span-12',
    tags: [
      { text: 'Next.js', type: 'coral' },
      { text: 'Stripe', type: 'green' }
    ]
  },
  {
    id: '4',
    displayId: 'Web_4',
    category: 'ui',
    label: 'UI Design · 2023',
    title: 'Design System',
    description: 'Component library สำหรับทีม',
    bgStyle: 'from-[#2a1a2b] to-[#5a2d5c] text-[#c87ddf]',
    gridClass: 'md:col-span-4 col-span-12',
    tags: [
      { text: 'Figma', type: 'purple' },
      { text: 'Storybook', type: 'blue' }
    ]
  },
  {
    id: '5',
    displayId: 'Web_5',
    category: 'landing',
    label: 'Landing Page · 2023',
    title: 'Startup Launch Page',
    description: 'Landing page สำหรับ product launch',
    bgStyle: 'from-[#1a2020] to-[#2d5050] text-[#7dcdcd]',
    gridClass: 'md:col-span-4 col-span-12',
    tags: [
      { text: 'HTML/CSS', type: 'teal' },
      { text: 'GSAP', type: 'blue' }
    ]
  }
];

