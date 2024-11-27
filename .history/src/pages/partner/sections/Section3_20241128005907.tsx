import React from 'react';
import styles from './Section3.module.css';
import globeImage from '../../../assets/pages/Partner/3-section2-card1.png';
import cardsImage from '../../../assets/pages/Partner/3-section2-card2.png';
import statsImage from '../../../assets/pages/Partner/3-section2-card3.png';
import phoneImage from '../../../assets/pages/Partner/3-section2-card4.png';
import cardsImage from '../../../assets/pages/Partner/3-section2-card5.png';
import cardImage2 from '../../../assets/pages/Partner/3-section2-card6.png';


const section3Content = {
  title: "Why become an Assex Markets partner?",
  images: [
    globeImage,
    cardsImage,
    statsImage,
    phoneImage,
    cardsImage,
    cardImage2
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
        {section3Content.images.map((image, index) => (
          <img key={index} src={image} alt="featured Images"/>
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
