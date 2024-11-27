import React from 'react';
import styles from './Section1.module.css';

const section1Content = {
  title: "THIS IS ASSEX MARKETS",
  description:
    "Assex Markets is a multi-asset, tech-driven broker leveraging advanced algorithms to optimize trading conditions.",
  logoAlt: "P Logo",
  logoSrc: "/path-to-your-logo.png", // Replace with your actual logo path
  backgroundImage: "/path-to-your-background-image.jpg", // Replace with your background image path
};

const Section1: React.FC = () => {
  return (
    <section
      className={styles.section1}
      style={{ backgroundImage: `url(${section1Content.backgroundImage})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{section1Content.title}</h1>
        <p className={styles.description}>{section1Content.description}</p>
      </div>
      <div className={styles.logo}>
        <img src={section1Content.logoSrc} alt={section1Content.logoAlt} />
      </div>
    </section>
  );
};

export default Section1;
