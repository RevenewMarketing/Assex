import React, { useState } from 'react';
import { Link } from 'react-router';
import styles from './NavigationMenu.module.css';
import RegisterLoginBtns from '../RegisterLoginButtons';

interface SubmenuItem {
  title: string;
  link: string;
}

interface MenuItem {
  id: number;
  title: string;
  submenu: {
    [key: string]: SubmenuItem[];
  };
}

// Menu data
const menuData: MenuItem[] = [
  {
    id: 1,
    title: 'Trading',
    submenu: {
      accounts: [
        { title: 'Demo trading accounts', link: '/demo-trading-accounts' },
        { title: 'Technical support', link: '/technical-support' },
        { title: 'Account management', link: '/account-management' },
      ],
      conditions: [
        { title: 'Help center', link: '/help-center' },
        { title: 'Contact us', link: '/contact-us' },
        { title: 'FAQs', link: '/faqs' },
      ],
    },
  },
  {
    id: 2,
    title: 'Investing',
    submenu: {
      accounts: [
        { title: 'Retirement accounts', link: '/retirement-accounts' },
        { title: 'Education savings accounts', link: '/education-savings-accounts' },
        { title: 'Brokerage accounts', link: '/brokerage-accounts' },
      ],
      conditions: [
        { title: 'Investment options', link: '/investment-options' },
        { title: 'Fees', link: '/fees' },
        { title: 'Tax advantages', link: '/tax-advantages' },
      ],
    },
  },
  {
    id: 3,
    title: 'Research',
    submenu: {
      accounts: [
        { title: 'Market analysis', link: '/market-analysis' },
        { title: 'Stock research', link: '/stock-research' },
        { title: 'Mutual fund research', link: '/mutual-fund-research' },
      ],
      conditions: [
        { title: 'Research tools', link: '/research-tools' },
        { title: 'Market news', link: '/market-news' },
        { title: 'Analyst reports', link: '/analyst-reports' },
      ],
    },
  },
  {
    id: 4,
    title: 'Education',
    submenu: {
      accounts: [
        { title: 'Webinars', link: '/webinars' },
        { title: 'Tutorials', link: '/tutorials' },
        { title: 'Courses', link: '/courses' },
      ],
      conditions: [
        { title: 'Learning paths', link: '/learning-paths' },
        { title: 'Certifications', link: '/certifications' },
        { title: 'Workshops', link: '/workshops' },
      ],
    },
  },
  {
    id: 5,
    title: 'Support',
    submenu: {
      accounts: [
        { title: 'Customer service', link: '/customer-service' },
        { title: 'Technical support', link: '/technical-support' },
        { title: 'Account management', link: '/account-management' },
      ],
      conditions: [
        { title: 'Help center', link: '/help-center' },
        { title: 'Contact us', link: '/contact-us' },
        { title: 'FAQs', link: '/faqs' },
      ],
    },
  },
];

const buttonLinks = {
  register: 'https://my.assexmarkets.com/auth/register',
  signIn: 'https://my.assexmarkets.com/auth/login',
};


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
        <div className={styles.navLogo}>
         <Link
          to="/"
          className={styles.logo} 
         > <img src="../../assets/react.svg" alt="logo" /></Link>
        </div>

        {/* Main Menu Items */}
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
    
          <RegisterLoginBtns
            registerLink={buttonLinks.register}
            signInLink={buttonLinks.signIn}
          />
   

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
            {submenu &&
              Object.keys(submenu).map((key) => (
                <div className={styles.submenuSection} key={key}>
                  <h4 className={styles.submenuHeading}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </h4>
                  {submenu[key].map((item, index) => (
                    <Link to={item.link} key={index} className={styles.submenuLink}>
                      <p>{item.title}</p>
                    </Link>
                  ))}
                </div>
              ))}
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

      </div>
    </div>
  );
};

export default NavigationMenu;
