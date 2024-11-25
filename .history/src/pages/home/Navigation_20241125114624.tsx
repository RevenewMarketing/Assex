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

  // Toggles the dropdown menu
  const toggleMenu = (menu: string) => {
    setSelectedMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  // Closes the menu
  const closeMenu = () => {
    setSelectedMenu(null);
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
              e.stopPropagation();
              toggleMenu(menu);
            }}
          >
            {menu}
          </div>
        ))}
      </div>

      {/* Dropdown Content */}
      {selectedMenu && navigationData[selectedMenu] && Object.keys(navigationData[selectedMenu]).length > 0 && (
        <div className={styles.dropdownMenu} onClick={(e) => e.stopPropagation()}>
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
