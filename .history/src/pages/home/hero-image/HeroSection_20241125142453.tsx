import React from "react";
import styles from "./HeroSection.module.css";

const heroContent = {
  title: "PROFESSIONAL TRADING",
  subtitle: "MADE SIMPLE",
  description:
    "Trade with ultra-tight spreads, low commissions, and experience the speed of fast withdrawals by the click of a button.",
  buttons: [
    { label: "Register", className: "registerButton" },
    { label: "Try Free Demo", className: "demoButton" },
  ],
};

const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {heroContent.title}
          <br />
          <span className={styles.heroSubtitle}>{heroContent.subtitle}</span>
        </h1>
        <p className={styles.heroDescription}>{heroContent.description}</p>
        <div className={styles.heroButtons}>
          {heroContent.buttons.map((button, index) => (
            <button key={index} className={styles[button.className]}>
              {button.label}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.heroBackground}>
        {/* Background or Image Placeholder */}
      </div>
    </div>
  );
};

export default HeroSection;
