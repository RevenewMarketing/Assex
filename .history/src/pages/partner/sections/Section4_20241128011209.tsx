import React from 'react';
import styles from './Section4.module.css';
import laptopImage from '../../../assets/pages/Partner/4-section5-devices-image.png'; 

const section4Content = {
  title: "Tools and services you can offer clients",
  images: [
    {
      src: laptopImage,
      alt: "Social Trading Platform Application"
    }
  ],
  payouts: [
    {
      partner: "Top Asia Partner",
      amount: "$878,300"
    },
    {
      partner: "Middle East Expert Partner",
      amount: "$369,050"
    },
    {
      partner: "IB Partner",
      amount: "$189,880"
    },
    {
      partner: "Vietnam's partner",
      amount: "$176,900"
    },
    {
      partner: "China's Top Partner",
      amount: "$155,600"
    }
  ],
  cta: "Become an Assex Markets Partner today!"
};

const Section4: React.FC = () => {
  return (
    <section className={styles.section4}>
      <h2 className={styles.title}>{section4Content.title}</h2>
      <div className={styles.imagesContainer}>
        {section4Content.images.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img src={image.src} alt={image.alt} className={styles.image} />
          </div>
        ))}
      </div>
      <div className={styles.payoutsContainer}>
        <h3 className={styles.payoutsTitle}>Top partner payouts</h3>
        <p className={styles.payoutsSubtitle}>Previous month</p>
        <ul className={styles.payoutsList}>
          {section4Content.payouts.map((payout, index) => (
            <li key={index} className={styles.payoutItem}>
              <span className={styles.payoutPartner}>{payout.partner}</span>
              <span className={styles.payoutAmount}>{payout.amount}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.ctaButton}>{section4Content.cta}</button>
    </section>
  );
};

export default Section4;
