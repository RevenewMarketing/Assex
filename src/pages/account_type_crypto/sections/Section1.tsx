
import styles from './Section1.module.css';

const textContent = {
  title: 'CRYPTO TRADING WITHOUT THE SWAP FEES',
  subtitle: 'Trade popular cryptocurrencies including BTCUSD, ETHUSD, and LTCUSD. Hold your positions with no overnight charges.',
  registerButton: 'Register',
  demoButton: 'Try free demo',
};

const Section1: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{textContent.title}</h1>
      <p className={styles.subtitle}>{textContent.subtitle}</p>
      <div className={styles.buttonsContainer}>
        <button className={`${styles.button} ${styles.primaryButton}`}>{textContent.registerButton}</button>
        <button className={styles.button}>{textContent.demoButton}</button>
      </div>
    </div>
  );
};

export default Section1;
