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
  const [isSubmenuVisible, setIsSubmenuVisible] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Handle menu item clicks
  const handleMenuClick = (id: number) => {
    if (id === activeMenu) {
      // If clicking the active menu, initiate closing
      if (!isAnimating && isSubmenuVisible) {
        setIsAnimating(true);
        setIsSubmenuVisible(false);
      }
    } else {
      if (isSubmenuVisible) {
        // If submenu is already open, switch to new menu without fade
        setActiveMenu(id);
      } else {
        // Open submenu with fade in
        setActiveMenu(id);
        setIsSubmenuVisible(true);
      }
    }
  };

  // Handle overlay click to close submenu
  const handleOverlayClick = () => {
    if (activeMenu !== null && !isAnimating && isSubmenuVisible) {
      setIsAnimating(true);
      setIsSubmenuVisible(false);
    }
  };

  // Handle animation end for submenu
  const handleSubmenuAnimationEnd = () => {
    if (!isSubmenuVisible) {
      setActiveMenu(null);
      setIsAnimating(false);
    }
  };

  // Prevent changing activeMenu during fade out animation
  const handleNewMenuClick = (id: number) => {
    if (isAnimating) return; // Do nothing if animating
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

      {/* Submenu Drawer */}
      {activeMenu !== null && (
        <div
          className={`${styles.submenu} ${
            isSubmenuVisible ? styles.fadeIn : styles.fadeOut
          }`}
          onAnimationEnd={handleSubmenuAnimationEnd}
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
      )}

      {/* Overlay */}
      {isSubmenuVisible && (
        <div
          className={`${styles.overlay} ${
            isSubmenuVisible ? styles.fadeInOverlay : styles.fadeOutOverlay
          }`}
          onClick={handleOverlayClick}
        ></div>
      )}

      {/* Dummy Page Content */}
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
