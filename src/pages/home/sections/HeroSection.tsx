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

  const register = () => {
    // open link in new tab
    window.open("https://my.assexmarkets.com/auth/register", "_blank");
  };

  const freeDemo = () => {
    // open link in new tab
    window.open("https://my.assexmarkets.com/auth/login", "_blank");
  };

  return (
    <div className={styles.heroContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <video autoPlay loop muted>
          <source
            src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_c76dfeb683.webm"
            type="video/webm"
          />
        </video>
        <img src={guyImage}
            alt="gey image"
          />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{content.hero.title}</h1>
          <p className={styles.heroDescription}>{content.hero.description}</p>
          <div className={styles.buttonContainer}>
            <button onClick={register} className={styles.registerButton}>
              {content.hero.buttons.register}
            </button>
            <button onClick={freeDemo} className={styles.demoButton}>
              {content.hero.buttons.demo}
            </button>
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default HeroSection;
