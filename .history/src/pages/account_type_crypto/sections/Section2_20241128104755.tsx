import React from 'react';
import styles from './Section2.module.css';

const textContent = {
  title: 'Open an account and trade crypto',
  features: [
    {
      title: 'Access the growing crypto market',
      description:
        'through derivatives and enjoy the ability to capitalize on crypto price movements without needing to own the underlying asset.',
    },
    {
      title: 'Trade all available cryptocurrencies',
      description:
        'completely swap-free and hold your crypto trading positions at no extra cost.',
    },
    {
      title: 'Leverage proprietary trading features',
      description:
        'to strengthen your positions and give your strategy a unique advantage in a dynamic market.',
    },
  ],
};

const Section2: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContent}>
        <h1 className={styles.title}>{textContent.title}</h1>
        {textContent.features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <h2 className={styles.featureTitle}>{feature.title}</h2>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.imagePlaceholder}></div>
    </section>
  );
};

export default Section2;
