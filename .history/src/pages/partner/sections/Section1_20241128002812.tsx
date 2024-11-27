import styles from './Section1.module.css';
import backgroundImage from '../../../assets/pages/Partner/1-hero-banner-partner.jpg';

const section1Content = {
  title: "ASSEX MARKETS PARTNERSHIP PROGRAMS",
  description: "Earn a stable income by introducing clients to a global market leader",
  backgroundImage: backgroundImage, // Replace with your background image path
};

const Section1: React.FC = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${section1Content.backgroundImage})`,
      }}
      className={styles.section1}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{section1Content.title}</h1>
        <p className={styles.description}>{section1Content.description}</p>
        <button className={styles.startButton}>Start now</button>
      </div>
      <div className={styles.details}>
        <p>2000 Partners</p>
        <p>$12 Million Paid to the partners</p>
        <p>$110K Top partner payout per month</p>
      </div>
    </section>
  );
};

export default Section1;
