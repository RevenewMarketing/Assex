import React, { useState } from "react";
import styles from "./Navigation.module.css";

// Navigation data structure
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

  const toggleMenu = (menu: string) => {
    setSelectedMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const closeMenu = () => {
    setSelectedMenu(null);
  };

  return (
    <div className={styles.navigationWrapper} onClick={closeMenu}>
      <div className={styles.navigationBar}>
        {Object.keys(navigationData).map((menu) => (
          <div
            key={menu}
            className={`${styles.menuItem} ${
              selectedMenu === menu ? styles.selectedMenu : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu(menu);
            }}
          >
            {menu}
          </div>
        ))}
        <div className={styles.authButtons}>
          <button className={styles.registerButton}>Register</button>
          <button className={styles.signInButton}>Sign in</button>
        </div>
      </div>

      {selectedMenu && navigationData[selectedMenu] && Object.keys(navigationData[selectedMenu]).length > 0 && (
        <div className={styles.dropdownMenu} onClick={(e) => e.stopPropagation()}>
          <div className={styles.menuContent}>
            {Object.entries(navigationData[selectedMenu]).map(([category, items]) => (
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
