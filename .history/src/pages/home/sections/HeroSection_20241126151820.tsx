import React from "react";
import styles from "./HeroSection.module.css";
import vidLogo from "../../../assets/pages/Homepage/1-Hero-animation-transperant-compressed.mp4";
import guyImage from "../../../assets/pages/Homepage/1-Hero-image.png";

const content = {
  hero: {
    title: "PROFESSIONAL TRADING MADE SIMPLE",
    description:
      "Trade with ultra tight spread, low commission and experience the speed of fast withdrawals by the click of a button",
    buttons: {
      register: "Register",
      demo: "Try Free Demo",
    },
  },
  accountTypes: {
    title: "Account Types",
    description:
      "Assex Markets offers a wide range of convenient payment methods, including bank transfers, credit/debit cards, and e-wallets, ensuring hassle-free deposits and withdrawals.",
  },
};

const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <video width="320" height="240" autoPlay loop muted>
          <source
            src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_c76dfeb683.webm"
            type="video/webm"
          />
        </video>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{content.hero.title}</h1>
          <p className={styles.heroDescription}>{content.hero.description}</p>
          <div className={styles.buttonContainer}>
            <button className={styles.registerButton}>
              {content.hero.buttons.register}
            </button>
            <button className={styles.demoButton}>
              {content.hero.buttons.demo}
            </button>
          </div>
        </div>
      </section>

      {/* Account Types Section */}
      <section className={styles.accountTypesSection}>
        <h2 className={styles.accountTypesTitle}>{content.accountTypes.title}</h2>
        <p className={styles.accountTypesDescription}>
        </p>
      </section>
    </div>
  );
};

export default HeroSection;
