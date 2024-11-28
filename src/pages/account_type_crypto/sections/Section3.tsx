
import styles from './Section3.module.css';

const textContent = {
  features: [
    {
      label: 'Withdrawals',
      title: 'Instant withdrawals',
      description: 'Get your deposits and withdrawals approved the moment you click the button.',
    },
    {
      label: 'Withdrawals',
      title: 'The best spreads on crypto',
      description: 'Trade with the tightest & most stable spreads in the market.',
    },
    {
      label: 'Withdrawals',
      title: 'Ultra-fast execution',
      description: 'Execute your orders in milliseconds no matter how big they are.',
    },
    {
      label: 'Withdrawals',
      title: 'No overnight fees',
      description: 'Hold your leveraged positions for as long as you like, swap-free. T&C apply.',
    },
  ],
};

const Section3: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftColumn}>
        {textContent.features.slice(0, 2).map((feature, index) => (
          <div key={index} className={styles.feature}>
            <span className={styles.label}>{feature.label}</span>
            <h2 className={styles.title}>{feature.title}</h2>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.imageContainer}>
        {/* Placeholder for the Bitcoin image */}
        <div className={styles.imagePlaceholder}></div>
      </div>
      <div className={styles.rightColumn}>
        {textContent.features.slice(2).map((feature, index) => (
          <div key={index} className={styles.feature}>
            <span className={styles.label}>{feature.label}</span>
            <h2 className={styles.title}>{feature.title}</h2>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
