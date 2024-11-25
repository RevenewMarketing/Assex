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
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const handleMenuClick = (id: number) => {
    if (activeMenu === id) {
      // Toggle submenu open/close
      setMenuOpen((prev) => !prev);
    } else {
      // Set new active menu and open submenu if not already open
      setActiveMenu(id);
      if (!menuOpen) {
        setMenuOpen(true);
      }
    }
  };

  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.navigationContainer}>
      <nav className={styles.navigationBar}>
        {menuData.map((menu) => (
          <div key={menu.id} className={styles.menuItemContainer}>
            <button
              className={`${styles.menuItem} ${
                activeMenu === menu.id && menuOpen ? styles.active : ''
              }`}
              onClick={() => handleMenuClick(menu.id)}
            >
              {menu.title}
            </button>
          </div>
        ))}
      </nav>

      {/* Submenu Drawer */}
      <div
        className={`${styles.submenu} ${
          menuOpen ? styles.submenuOpen : styles.submenuClosed
        }`}
      >
        {activeMenu !== null && (
          <div className={styles.submenuContent}>
            <h3>
              Submenu for{' '}
              {menuData.find((m) => m.id === activeMenu)?.title}
            </h3>
            <ul>
              {menuData
                .find((m) => m.id === activeMenu)
                ?.submenu.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        )}
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className={`${styles.overlay} ${
            menuOpen ? styles.overlayVisible : styles.overlayHidden
          }`}
          onClick={handleOverlayClick}
        ></div>
      )}

      {/* Dummy Page Content */}
      <div
        className={`${styles.pageContent} ${
          menuOpen ? styles.dimmed : ''
        }`}
      >
        <h1>Welcome to the Page</h1>
        <p>
          This is some dummy content on the page. Click on the navigation
          menu items to see the drawer effect.
        </p>
      </div>
    </div>
  );
};

export default NavigationMenu;
