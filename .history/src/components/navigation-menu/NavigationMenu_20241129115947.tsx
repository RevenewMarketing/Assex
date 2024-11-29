import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import styles from './NavigationMenu.module.css';
import ReusableButton from '../ReusableButton';
import pageLogo from '../../assets/pages/Global/1-Nav/1-Nav-Logo.png';

interface SubmenuItem {
  title: string;
  link: string;
  isActive: boolean;
}

interface MenuItem {
  id: number;
  title: string;
  submenu?: {
    [key: string]: SubmenuItem[];
  };
}

// Menu data
const menuData: MenuItem[] = [
  {
    id: 1,
    title: 'Trading ▾',
    submenu: {
      accounts: [
        { title: 'Demo trading accounts', link: '/demo-trading-accounts', isActive: false },
        { title: 'Technical support', link: '/technical-support', isActive: false },
        { title: 'Account management', link: '/account-management', isActive: false },
      ],
      conditions: [
        { title: 'Help center', link: '/help-center', isActive: false },
        { title: 'Contact us', link: '/contact-us', isActive: false },
        { title: 'FAQs', link: '/faqs', isActive: false },
      ],
    },
  },
  {
    id: 2,
    title: 'Markets ▾',
    submenu: {
      accounts: [
        { title: 'Account type crypto', link: '/atc', isActive: true },
        { title: 'Retirement accounts', link: '/', isActive: false },
        { title: 'Education savings accounts', link: '/', isActive: false },
        { title: 'Brokerage accounts', link: '/', isActive: false },
      ],
      conditions: [
        { title: 'Investment options', link: '/', isActive: false },
        { title: 'Fees', link: '/', isActive: false },
        { title: 'Tax advantages', link: '/', isActive: false },
      ],
    },
  },
  {
    id: 3,
    title: 'Tools ▾',
    submenu: {
      accounts: [
        { title: 'Webinar', link: '/webinar', isActive: true },
        { title: 'Stock research', link: '/', isActive: false },
        { title: 'Mutual fund research', link: '/', isActive: false },
      ],
      conditions: [
        { title: 'Research tools', link: '/', isActive: false },
        { title: 'Market news', link: '/', isActive: false },
        { title: 'Analyst reports', link: '/', isActive: false },
      ],
    },
  },
  {
    id: 4,
    title: 'Company ▾',
    submenu: {
      accounts: [
        { title: 'Webinars', link: '/', isActive: false },
        { title: 'Tutorials', link: '/', isActive: false },
        { title: 'Courses', link: '/', isActive: false },
      ],
      conditions: [
        { title: 'Learning paths', link: '/', isActive: false },
        { title: 'Certifications', link: '/', isActive: false },
        { title: 'Workshops', link: '/', isActive: false },
      ],
    },
  },
  {
    id: 5,
    title: 'Partners',
  },
  {
    id: 6,
    title: 'About',
  }
];

const buttonLinks = {
  register: 'https://my.assexmarkets.com/auth/register',
  signIn: 'https://my.assexmarkets.com/auth/login',
  freeDemo: 'https://my.assexmarkets.com/auth/login',
  loginText: 'Login',
  registerText: 'Register',
  freeDemoText: 'Try Free Demo',
};


const NavigationMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const navigate = useNavigate();

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
  const handleNewMenuClick = (id: number, title: string) => {
    if (title === 'Partners') {
      // Navigate to the Partners page
      navigate('/partner');
      setIsAnimating(false);
      return
    }; 

    if (title === 'About') {
      // Navigate to the Partners page
      navigate('/about');
      return
    }; 
    
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
         > <img title="Home Page" src={pageLogo} alt="logo" /></Link>
        </div>

        {/* Main Menu Items */}
        {menuData.map((menu) => (
          <div key={menu.id} className={styles.menuItemContainer}>
            <button
              className={`${styles.menuItem} ${
                activeMenu === menu.id ? styles.active : ''
              }`}
              onClick={() => handleNewMenuClick(menu.id, menu.title)}
            >
              {menu.title}
            </button>
          </div>
        ))}

        {/* Register and Sign In Buttons */}
        <div className={'authButtons'}>
          <ReusableButton
            link={buttonLinks.register}
            type={'register'}
            text='Register'
          />
          <ReusableButton
            link={buttonLinks.signIn}
            type={'sign-in'}
            text='Sign In'
          />
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
            {submenu &&
              Object.keys(submenu).map((key) => (
                <div className={styles.submenuSection} key={key}>
                  <h4 className={styles.submenuHeading}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </h4>
                  {submenu[key].map((item, index) => (
                    <Link 
                      to={item.link} 
                      key={index} 
                      className={styles.submenuLink}>
                      <p
                        style={{cursor: item.isActive ? 'pointer' : 'no-drop'}}
                       >{item.title}</p>
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
