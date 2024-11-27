import React from 'react';
import styles from './Section2.module.css';

const section2Content = {
  title: "What we offer",
  cards: [
    {
      title: "Introducing Broker Program",
      description: "You get up to 40% of our revenue Earn up to 40% of our revenue from every active trader you refer to us. If they’re trading, you’re earning.",
      buttonText: "Learn more"
    },
    {
      title: "Affiliate Program",
      description: "You get up to $1850 of our revenue We are leading the industry with scheduled and attractive payouts. We offer a range of commission plans, so you can choose the best fit for you.",
      buttonText: "Learn more"
    }
  ]
};

const Section2: React.FC = () => {
  return (
    <section className={styles.section2}>
      <h2 className={styles.title}>{section2Content.title}</h2>
      <div className={styles.cardsContainer}>
        {section2Content.cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
            <button className={styles.learnMoreButton}>{card.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
