import React, { useState } from 'react';
import styles from './Navigation.module.css';

// Navigation data stored in an object
const navigationData = {
  Accounts: ["Standard accounts", "Professional accounts", "Demo trading account"],
  Conditions: ["Deposits and withdrawals", "Fees", "Client protection"],
};

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggles menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`${styles.navigation} ${isMenuOpen ? styles.blurContent : ''}`} onClick={closeMenu}>
      <div className={styles.navigationBar}>
        {Object.keys(navigationData).map((menu, index) => (
          <div
            key={index}
            className={styles.menuItem}
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
          >
            {menu}
          </div>
        ))}
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className={styles.dropdownMenu} onClick={(e) => e.stopPropagation()}>
          <div className={styles.menuContent}>
            {Object.entries(navigationData).map(([category, items]) => (
              <div key={category} className={styles.menuSection}>
                <h3>{category}</h3>
                <ul>
                  {items.map((item, idx) => (
                    <li key={idx} className={styles.menuItemText}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
