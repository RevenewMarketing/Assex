import React from 'react';
import styles from './Section3.module.css';
import globeImage from '../../../assets/images/globe.png'; // Replace with the actual path
import statsImage from '../../../assets/images/stats.png'; // Replace with the actual path
import phoneImage from '../../../assets/images/phone.png'; // Replace with the actual path
import cardsImage from '../../../assets/images/cards.png'; // Replace with the actual path

const section3Content = {
  title: "Why become an Assex Markets partner?",
  features: [
    {
      title: "TRUSTED GLOBAL BROKER IN 150+ COUNTRIES",
      image: globeImage
    },
    {
      title: "PROMOTIONAL TOOLS & MATERIALS",
      description: [
        "Effective advertising banners",
        "Landing pages",
        "Videos, GIFs and logos",
        "Widgets for your website",
        "Educational trading materials"
      ]
    },
    {
      title: "REGULAR PAYMENT OF YOUR PROFITS",
      image: cardsImage
    },
    {
      title: "DETAILED REAL-TIME STATISTICS",
      image: statsImage
    },
    {
      title: "MANAGE YOUR BUSINESS ON THE GO",
      image: phoneImage
    },
    {
      title: "INSTANT WITHDRAWAL",
      image: cardsImage
    }
  ],
  reasons: [
    "Trusted market leader – Assex Markets brokers are licensed",
    "Highest forex leverage in the market",
    "Instant deposits and withdrawals",
    "24/7 client support",
    "Wide variety of payment systems with zero commission",
    "New Help Center for newbies and experienced traders"
  ]
};

const Section3: React.FC = () => {
  return (
    <section className={styles.section3}>
      <h2 className={styles.title}>{section3Content.title}</h2>
      <div className={styles.featuresContainer}>
        {section3Content.features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            {feature.image && <img src={feature.image} alt={feature.title} className={styles.featureImage} />}
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            {feature.description && (
              <ul className={styles.featureDescription}>
                {feature.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <h2 className={styles.reasonsTitle}>Why clients will love us...</h2>
      <ul className={styles.reasonsList}>
        {section3Content.reasons.map((reason, index) => (
          <li key={index} className={styles.reason}>{reason}</li>
        ))}
      </ul>
    </section>
  );
};

export default Section3;
