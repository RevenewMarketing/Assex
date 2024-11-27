import styles from './Section3.module.css';
import startQuote from '../../../assets/pages/About-us/3-section-3-quote-left.png';
import endQuote from '../../../assets/pages/About-us/3-section-3-quote-right.png';
import backgroundImage from '../../../assets/pages/About-us/3-section-3-background-image.png';

const section3Content = {
  backgroundImage: backgroundImage,
  quoteImageStart: startQuote,
  quoteImageEnd: endQuote,
  quote: "AS A TEAM OF MARKET INNOVATORS, WE’VE BUILT A PLATFORM WHERE TRADERS CAN THRIVE WITH CONFIDENCE AND PRECISION.",
  author: "Simon Says\nFounder and CEO",
  stats: [
    { number: "100+", label: "Employees" },
    { number: "7", label: "Countries Globally" },
    { number: "200", label: "IB partners" },
    { number: "56 Million", label: "Daily payouts" },
  ],
};

const Section3: React.FC = () => {
  return (
    <div>
      <section className={styles.section3} style={{ backgroundImage: `url(${section3Content.backgroundImage})` }}>
        <div className={styles.quoteContainer}>
          {/* <img src={section3Content.quoteImageStart} alt="Quote Start" className={styles.quoteImage} /> */}
          <p className={styles.quote}>{section3Content.quote}</p>
          <p className={styles.author}>{section3Content.author}</p>
          {/* <img src={section3Content.quoteImageEnd} alt="Quote End" className={styles.quoteImage} /> */}
        </div>
     
      </section>
      <div className={styles.statsContainer}>
        {section3Content.stats.map((stat, index) => (
          <div key={index} className={styles.stat}>
            <h3 className={styles.statNumber}>{stat.number}</h3>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
