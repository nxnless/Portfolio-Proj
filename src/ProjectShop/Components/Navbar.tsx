import React from 'react';
import { navbarStyles } from './styles';

export const Navbar = () => {
  return (
    <nav className={navbarStyles.nav}>
      <div className={navbarStyles.logo}>
        PORTFOLIO
      </div>
      <ul className={navbarStyles.list}>
        <li><a href="#" className={navbarStyles.link}>งาน</a></li>
        <li><a href="#" className={navbarStyles.link}>เกี่ยวกับ</a></li>
        <li><a href="#" className={navbarStyles.link}>ติดต่อ</a></li>
      </ul>
    </nav>
  );
};
