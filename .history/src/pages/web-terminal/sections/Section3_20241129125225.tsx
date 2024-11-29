
import styles from './Section3.module.css';
import webAppImage from '../../../assets/pages/Web-Terminal/3-section2-Image1.png';

const content = {
  portfolioTitle: "Portfolio area",
  portfolioDescription:
    "Track your orders in the portfolio area with details like type, volume, prices, take profit, stop loss, open time, swap, and profit and loss.",
  instrumentsTitle: "Instruments tabs",
  instrumentsDescription:
    "Choose from multiple available chart types and customize them with indicators, drawing tools, and more. Charting is provided by TradingView.",
};

const Section3: React.FC = () => {
  return (
    <div className={styles.section}>
    


       <div className={styles.innerContents} >
          <div className={styles.features}>
            <div className={styles.feature}>
              <h2 className={styles.featureTitle}>{content.portfolioTitle}</h2>
              <p className={styles.featureDescription}>
                {content.portfolioDescription}
              </p>
            </div>
            <div className={styles.feature}>
              <h2 className={styles.featureTitle}>
                {content.instrumentsTitle}
              </h2>
              <p className={styles.featureDescription}>
                {content.instrumentsDescription}
              </p>
            </div>
          </div>

          <img
          className={styles.imagePlaceholder}
          src={webAppImage}
          alt="Web App"
        />
        </div>
    
     

    </div>
  );
};

export default Section3;
