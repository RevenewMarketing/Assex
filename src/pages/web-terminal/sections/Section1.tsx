
import styles from './Section1.module.css';

const textContent = {
  title: 'CRYPTO TRADING WITHOUT THE SWAP FEES',
  subtitle: 'Trade popular cryptocurrencies including BTCUSD, ETHUSD, and LTCUSD. Hold your positions with no overnight charges.',
  registerButton: 'Register',
  demoButton: 'Try free demo',
};

const Section1: React.FC = () => {
  return (
    <section className={styles.container}>
    <div className={styles.textContainer}>
       <i> <h1 className={styles.title}>{textContent.title}</h1></i>
        <p className={styles.subtitle}>{textContent.subtitle}</p>
    </div>
      <div className={styles.buttonsContainer}>
        <button className={`${styles.button} ${styles.primaryButton}`}>{textContent.registerButton}</button>
        <button className={styles.button}>{textContent.demoButton}</button>
      </div>
    </section>
  );
};

export default Section1;
