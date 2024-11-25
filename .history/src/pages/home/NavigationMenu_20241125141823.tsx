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
    title: 'Trading',
    submenu: [],
  },
  {
    id: 2,
    title: 'Markets',
    submenu: [],
  },
  {
    id: 3,
    title: 'Platforms',
    submenu: [],
  },
  {
    id: 4,
    title: 'Tools',
    submenu: [],
  },
  {
    id: 5,
    title: 'Company',
    submenu: [],
  },
  {
    id: 6,
    title: 'Partners ↗', // Add external link indicator
    submenu: [],
  },
];

const NavigationMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleMenuClick = (id: number) => {
    if (id === activeMenu) {
      if (!isAnimating && isSubmenuVisible) {
        setIsAnimating(true);
        setIsSubmenuVisible(false);
        setTimeout(() => {
          setActiveMenu(null);
          setIsAnimating(false);
        }, 300);
      }
    } else {
      if (isSubmenuVisible) {
        setActiveMenu(id);
      } else {
        setActiveMenu(id);
        setIsSubmenuVisible(true);
      }
    }
  };

  const handleOverlayClick = () => {
    if (activeMenu !== null && !isAnimating && isSubmenuVisible) {
      setIsAnimating(true);
      setIsSubmenuVisible(false);
      setTimeout(() => {
        setActiveMenu(null);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleNewMenuClick = (id: number) => {
    if (isAnimating) return;
    handleMenuClick(id);
  };

  return (
    <div className={styles.navigationContainer}>
      <nav className={styles.navigationBar}>
        {menuData.map((menu) => (
          <div key={menu.id} className={styles.menuItemContainer}>
            <button
              className={`${styles.menuItem} ${
                activeMenu === menu.id ? styles.active : ''
              }`}
              onClick={() => handleNewMenuClick(menu.id)}
            >
              {menu.title}
            </button>
          </div>
        ))}

        {/* Register and Sign In Buttons */}
        <div className={styles.authButtons}>
          <button className={styles.registerButton}>Register</button>
          <button className={styles.signInButton}>Sign In</button>
        </div>

        {/* Language Selector */}
        <div className={styles.languageSelector}>
          <span className={styles.globeIcon}>🌐</span> EN
        </div>
      </nav>

      {activeMenu !== null && (
        <>
          <div
            className={`${styles.submenu} ${
              isSubmenuVisible ? styles.fadeIn : styles.fadeOut
            }`}
          >
            <div className={styles.submenuContent}>
              <h3>Submenu for {menuData.find((m) => m.id === activeMenu)?.title}</h3>
              <ul>
                {menuData
                  .find((m) => m.id === activeMenu)
                  ?.submenu.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
          </div>
          <div
            className={`${styles.overlay} ${
              isSubmenuVisible ? styles.fadeInOverlay : styles.fadeOutOverlay
            }`}
            onClick={handleOverlayClick}
          ></div>
        </>
      )}

      <div
        className={`${styles.pageContent} ${
          isSubmenuVisible ? styles.dimmed : ''
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
