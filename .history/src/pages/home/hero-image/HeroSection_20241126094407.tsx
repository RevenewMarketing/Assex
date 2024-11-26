import React from "react";
import styles from "./HeroSection.module.css";

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
      <section
        style={{
          backgroundImage: `url('https://source.unsplash.com/1600x900/?finance,trading')`,
          backgroundColor: "#fff",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#000",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", margin: "20px 0" }}>
            {content.hero.title}
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
            {content.hero.description}
          </p>
          <div>
            <button
              style={{
                backgroundColor: "#00B894",
                color: "#fff",
                border: "none",
                padding: "15px 30px",
                fontSize: "1rem",
                margin: "0 10px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              {content.hero.buttons.register}
            </button>
            <button
              style={{
                backgroundColor: "#fff",
                color: "#00B894",
                border: "2px solid #00B894",
                padding: "15px 30px",
                fontSize: "1rem",
                margin: "0 10px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              {content.hero.buttons.demo}
            </button>
          </div>
        </div>
      </section>

      {/* Account Types Section */}
      <section
        style={{
          backgroundColor: "#00B894",
          color: "#fff",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px" }}>
          {content.accountTypes.title}
        </h2>
        <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}>
          {content.accountTypes.description}
        </p>
      </section>
    </div>
  );
};

export default HeroSection;
