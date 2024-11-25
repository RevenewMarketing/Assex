import React, { useState } from "react";
import styles from "./Navigation.module.css";

// Simplified navigation structure
const navigationData = {
  Trading: {
    Accounts: ["Standard accounts", "Professional accounts", "Demo trading account"],
    Conditions: ["Deposits and withdrawals", "Fees", "Client protection"],
  },
  Markets: [],
  Platforms: [],
  Tools: [],
  Company: [],
  Partners: [],
};

const Navigation: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Toggles the dropdown menu
  const toggleMenu = (menu: string) => {
    if (selectedMenu === menu) {
      setIsAnimating(true); // Start slide-up animation
      setTimeout(() => {
        setSelectedMenu(null); // Close menu after animation
        setIsAnimating(false);
      }, 300); // Match the animation duration in CSS
    } else {
      setSelectedMenu(menu);
    }
  };

  // Closes the menu
  const closeMenu = () => {
    if (selectedMenu) {
      setIsAnimating(true); // Start slide-up animation
      setTimeout(() => {
        setSelectedMenu(null); // Close menu after animation
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className={`${styles.navigationWrapper} ${selectedMenu ? styles.blurBackground : ""}`} onClick={closeMenu}>
      {/* Top Navigation Bar */}
      <div className={styles.navigationBar}>
        {Object.keys(navigationData).map((menu) => (
          <div
            key={menu}
            className={`${styles.menuItem} ${selectedMenu === menu ? styles.selectedMenu : ""}`}
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing the menu
              toggleMenu(menu);
            }}
          >
            {menu}
          </div>
        ))}
      </div>

      <div className={styles.authButtons}>
        <button className={styles.registerButton}>Register</button>
        <button className={styles.signInButton}>Sign in</button>
      </div>

      {/* Dropdown Content */}
      {selectedMenu && navigationData[selectedMenu] && Object.keys(navigationData[selectedMenu]).length > 0 && (
        <div
          className={`${styles.dropdownMenu} ${
            isAnimating ? styles.slideUp : styles.slideDown
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.menuContent}>
            {Object.entries(navigationData[selectedMenu]).map(([section, items]) => (
              <div key={section} className={styles.menuSection}>
                <h3>{section}</h3>
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