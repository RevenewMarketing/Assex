// src/NavigationMenu.tsx
import React, { useState, useEffect } from 'react';
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
  const [currentSubmenu, setCurrentSubmenu] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  // Handle menu item clicks
  const handleMenuClick = (id: number) => {
    if (id === activeMenu) {
      // If clicking the active menu, close the submenu
      setIsTransitioning(true);
      setVisible(false);
      setTimeout(() => {
        setActiveMenu(null);
        setIsTransitioning(false);
      }, 300); // Match this duration with CSS transition duration
    } else {
      if (activeMenu === null) {
        // If no submenu is open, open the new submenu
        setActiveMenu(id);
        setCurrentSubmenu(menuData.find(m => m.id === id)?.submenu || []);
        setVisible(true);
      } else {
        // If a submenu is already open, switch submenu content with transition
        setIsTransitioning(true);
        setVisible(false);
        setTimeout(() => {
          setActiveMenu(id);
          setCurrentSubmenu(menuData.find(m => m.id === id)?.submenu || []);
          setVisible(true);
          setIsTransitioning(false);
        }, 300); // Match this duration with CSS transition duration
      }
    }
  };

  // Close submenu when overlay is clicked
  const handleOverlayClick = () => {
    if (activeMenu !== null) {
      setIsTransitioning(true);
      setVisible(false);
      setTimeout(() => {
        setActiveMenu(null);
        setIsTransitioning(false);
      }, 300); // Match this duration with CSS transition duration
    }
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
          <div
            className={`${styles.submenu} ${
              isTransitioning ? styles.hidden : styles.visible
            }`}
          >
            <div
              className={`${styles.submenuContent} ${
                visible ? styles.fadeIn : styles.fadeOut
              }`}
            >
              <h3>Submenu for {menuData.find(m => m.id === activeMenu)?.title}</h3>
              <ul>
                {currentSubmenu.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Overlay */}
          <div
            className={`${styles.overlay} ${
              isTransitioning ? styles.fadeOutOverlay : styles.fadeInOverlay
            }`}
            onClick={handleOverlayClick}
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
