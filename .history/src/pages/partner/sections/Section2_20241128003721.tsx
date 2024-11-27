// Section 2 Partner page
import styles from './Section2.module.css';

const Section2: React.FC = () => {
  return (
    <section className={styles.section2}>
      <h2 className={styles.title}>What we offer</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Introducing Broker Program</h3>
          <p className={styles.cardDescription}>
            You get up to 40% of our revenue Earn up to 40% of our revenue from every active trader you refer to us. If they’re trading, you’re earning.
          </p>
          <button className={styles.learnMoreButton}>Learn more</button>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Affiliate Program</h3>
          <p className={styles.cardDescription}>
            You get up to $1850 of our revenue We are leading the industry with scheduled and attractive payouts. We offer a range of commission plans, so you can choose the best fit for you.
          </p>
          <button className={styles.learnMoreButton}>Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Section2;
