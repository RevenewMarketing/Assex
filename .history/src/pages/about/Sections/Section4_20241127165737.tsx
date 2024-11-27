import React from 'react';
import styles from './Section4.module.css';

const section4Content = {
  title: "Our Values Drive Every Breakthrough",
  description: "From strategic decisions to client care, every move we make is built on our 4 core values.",
  values: [
    {
      name: "Innovative",
      description:
        "We’ve always led by innovating, pushing market limits, and defying industry norms. If a solution doesn’t exist, we create it. If it does, we enhance it.",
    },
    {
      name: "Client-First Approach",
      description:
        "Our clients are our priority. Every innovation is shaped by our commitment to delivering the most rewarding trading experience possible.",
    },
    {
      name: "Technology Experts",
      description:
        "We leverage advanced algorithms and data-driven insights to offer superior protection and market-beating trading conditions.",
    },
    {
      name: "Consistent",
      description:
        "Reliability is at the heart of our platform. Consistent spreads, rapid execution, and client-focused benefits make trading with us a secure and dependable experience.",
    },
  ],
};

const Section4: React.FC = () => {
  return (
    <section className={styles.section4}>
      <h2 className={styles.title}>{section4Content.title}</h2>
      <p className={styles.description}>{section4Content.description}</p>
      <div className={styles.valuesContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.value}>
            <h3 className={styles.valueName}>{section4Content.values[0].name}</h3>
            <p className={styles.valueDescription}>{section4Content.values[0].description}</p>
          </div>
          <div className={styles.value}>
            <h3 className={styles.valueName}>{section4Content.values[2].name}</h3>
            <p className={styles.valueDescription}>{section4Content.values[2].description}</p>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.value}>
            <h3 className={styles.valueName}>{section4Content.values[1].name}</h3>
            <p className={styles.valueDescription}>{section4Content.values[1].description}</p>
          </div>
          <div className={styles.value}>
            <h3 className={styles.valueName}>{section4Content.values[3].name}</h3>
            <p className={styles.valueDescription}>{section4Content.values[3].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
