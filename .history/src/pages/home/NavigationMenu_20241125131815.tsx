// src/NavigationMenu.tsx
import React, { useState } from 'react';
import styles from './NavigationMenu.module.css';

interface MenuItem {
  id: number;
  title: string;
  submenu: string[];
}

const menuData: MenuItem[] = [
  {
    id: 1,
    title: 'Home',
    submenu: ['Dashboard', 'Activity', 'Stats'],
  },
  {
    id: 2,
    title: 'About',
    submenu: ['Company', 'Team', 'Careers'],
  },
  {
    id: 3,
    title: 'Services',
    submenu: ['Consulting', 'Development', 'Design'],
  },
  {
    id: 4,
    title: 'Contact',
    submenu: ['Email', 'LinkedIn', 'Twitter'],
  },
];

const NavigationMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const handleMenuClick = (id: number) => {
    setActiveMenu(prev => (prev === id ? null : id));
  };

  return (
    <div className={styles.navigationContainer}>
      <nav className={styles.navigationBar}>
        {menuData.map(menu => (
          <div key={menu.id} className={styles.menuItemContainer}>
            <button
              className={`${styles.menuItem} ${
                activeMenu === menu.id ? styles.active : ''
              }`}
              onClick={() => handleMenuClick(menu.id)}
            >
              {menu.title}
            </button>
          </div>
        ))}
      </nav>

      {/* Submenu Drawer */}
      {activeMenu !== null && (
        <>
          <div className={styles.submenu}>
            <h3>Submenu for {menuData.find(m => m.id === activeMenu)?.title}</h3>
            <ul>
              {menuData
                .find(m => m.id === activeMenu)
                ?.submenu.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
          {/* Overlay */}
          <div
            className={styles.overlay}
            onClick={() => setActiveMenu(null)}
          ></div>
        </>
      )}

      {/* Dummy Page Content */}
      <div
        className={`${styles.pageContent} ${
          activeMenu !== null ? styles.dimmed : ''
        }`}
      >
        <h1>Welcome to the Page</h1>
        <p>
          This is some dummy content on the page. Click on the navigation menu items to see the drawer effect.
        </p>
      </div>
    </div>
  );
};

export default NavigationMenu;
