import React from 'react';
import styles from './Section2.module.css';

const content = {
  title: "Trade up with our high-speed, customized web app",
  description:
    "Enjoy seamless and flexible trading on the Assex Markets Terminal, a secure and streamlined web trader platform for trading over a hundred popular CFDs.",
  watchlistTitle: "Watchlist",
  watchlistDescription:
    "Get real-time prices and movements on the Assex Markets Terminal watchlist which hosts lists of all available trading instruments.",
  tradingModeTitle: "One-click trading mode",
  tradingModeDescription:
    "Open and close orders instantly choosing from a tile list of instruments to trade and using the Limit Order field for pending orders.",
};

const Section2: React.FC = () => {
  return (
    <div className={styles.section}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.description}>{content.description}</p>
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
      </div>
      <div className={styles.imagePlaceholder}></div>
    </div>
  );
};

export default Section2;
