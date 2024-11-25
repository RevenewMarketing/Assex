import React, { useState } from 'react';
import styles from './NavigationMenu.module.css';

interface MenuItem {
  id: number;
  title: string;
  submenu: {
    [key: string]: string[];
  };
}

const menuData: MenuItem[] = [
  {
    id: 1,
    title: 'Trading',
    submenu: {
      accounts: ['Demo trading accounts', 'Professional accounts', 'Standard accounts', 'Portfolio management account'],
      conditions: ['Deposit and withdrawals', 'Fees', 'Client protection'],
    },
  },
  {
    id: 2,
    title: 'Investing',
    submenu: {
      accounts: ['Retirement accounts', 'Education savings accounts', 'Brokerage accounts'],
      conditions: ['Investment options', 'Fees', 'Tax advantages'],
    },
  },
  {
    id: 3,
    title: 'Research',
    submenu: {
      accounts: ['Market analysis', 'Stock research', 'Mutual fund research'],
      conditions: ['Research tools', 'Market news', 'Analyst reports'],
    },
  },
  {
    id: 4,
    title: 'Education',
    submenu: {
      accounts: ['Webinars', 'Tutorials', 'Courses'],
      conditions: ['Learning paths', 'Certifications', 'Workshops'],
    },
  },
  {
    id: 5,
    title: 'Support',
    submenu: {
      accounts: ['Customer service', 'Technical support', 'Account management'],
      conditions: ['Help center', 'Contact us', 'FAQs'],
    },
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

  const submenu = menuData.find((m) => m.id === activeMenu)?.submenu;

  return (
    <div className={styles.navigationContainer}>
      <nav className={styles.navigationBar}>
        {menuData.map((menu) => (
          <div key={menu.id} className={styles.menuItemContainer}>
            <button
              className={`${styles.menuItem} ${activeMenu === menu.id ? styles.active : ''}`}
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
          className={`${styles.submenu} ${isSubmenuVisible ? styles.fadeIn : styles.fadeOut}`}
          onAnimationEnd={handleSubmenuAnimationEnd}
        >
          <div className={styles.submenuContent}>
           
            {submenu &&
              Object.keys(submenu).map((key) => (
                <div className={styles.submenuSection}
                 key={key}>
                    <h4 className={styles.submenuHeading}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                    </h4>
                  {submenu[key].map((item, index) => (
                    <a><p key={index}>{item}</p></a>
                  ))}
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Overlay */}
      {isSubmenuVisible && (
        <div
          className={`${styles.overlay} ${isSubmenuVisible ? styles.fadeInOverlay : styles.fadeOutOverlay}`}
          onClick={handleOverlayClick}
        ></div>
      )}

      {/* Dummy Page Content */}
      <div className={`${styles.pageContent} ${isSubmenuVisible ? styles.dimmed : ''}`}>
        <h1>Welcome to the Page</h1>
        <p>
          This is some dummy content on the page. Click on the navigation menu items to see the drawer effect.
        </p>
      </div>
    </div>
  );
};

export default NavigationMenu;
