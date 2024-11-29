
import styles from './Section3.module.css';
import webAppImage from '../../../assets/pages/Web-Terminal/3-section2-Image1.png';

const content = {
watchlistTitle: "Watchlist",
  watchlistDescription:
    "Get real-time prices and movements on the Assex Markets Terminal watchlist which hosts lists of all available trading instruments.",
  tradingModeTitle: "One-click trading mode",
  tradingModeDescription:
    "Open and close orders instantly choosing from a tile list of instruments to trade and using the Limit Order field for pending orders.",
};

const Section3: React.FC = () => {
  return (
    <div className={styles.section}>
      <div className={styles.textContainer}>


       <div className={styles.innerContents} >
          <div className={styles.features}>
            <div className={styles.feature}>
              <h2 className={styles.featureTitle}>{content.watchlistTitle}</h2>
              <p className={styles.featureDescription}>
                {content.watchlistDescription}
              </p>
            </div>
            <div className={styles.feature}>
              <h2 className={styles.featureTitle}>
                {content.tradingModeTitle}
              </h2>
              <p className={styles.featureDescription}>
                {content.tradingModeDescription}
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

    </div>
  );
};

export default Section3;
