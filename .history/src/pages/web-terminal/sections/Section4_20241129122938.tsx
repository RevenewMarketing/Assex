import React from 'react';
import styles from './Section4.module.css';

const content = {
  managementTitle: "Trading account management",
  managementDescription:
    "View your account details such as trading history, balance, equity, margin, free margin, margin level, and leverage settings in real-time.",
  accountTypesTitle: "Account types",
  accountTypesDescription:
    "Enjoy flexibility on a web trader platform that is compatible with all Assex Markets trading account types that are supported by MetaTrader 5.",
};

const Section4: React.FC = () => {
  return (
    <div className={styles.section}>
      <div className={styles.imagePlaceholder}></div>
      <div className={styles.textContainer}>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>{content.managementTitle}</h2>
          <p className={styles.featureDescription}>
            {content.managementDescription}
          </p>
        </div>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>{content.accountTypesTitle}</h2>
          <p className={styles.featureDescription}>
            {content.accountTypesDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
