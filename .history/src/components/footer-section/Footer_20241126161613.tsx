import React from 'react';
import styles from './FooterStyles.module.css';
import essexLogo from '../../assets/pages/Global/2-Footer/Footer-Preview.png';

const footerContent = {
  accounts: [
    'Demo trading accounts',
    'Professional accounts',
    'Standard accounts',
    'Portfolio management account',
  ],
  conditions: ['Deposit and withdrawals', 'Fees', 'Client protection'],
  markets: ['Forex CFD', 'Commodities CFD', 'Indices', 'Crypto CFD'],
  aboutUs: ['Why essexmarkets?', 'Contact us', 'Help center'],
  links: ['FAQ', 'Privacy Policy', 'Terms and Conditions', 'User Agreement', 'Imprint', 'Risk Disclosure'],
  details: [
    'Essex Markets SA (Registration Number: 2024/652035/07) is an authorised Juristic Representative of Elite Financial Services (Pty) Ltd (Registration Number: 2006/022251/07), a company incorporated in South Africa.',
    'Elite Financial Services (Pty) Ltd is an authorised Financial Services Provider, licensed and regulated by the Financial Sector Conduct Authority (FSCA) in South Africa with FSP Number 52677.',
    'By utilizing our services, you agree to be bound by the Client Agreement, which constitutes a legally binding contract between you (the Client) and Essex Markets SA.',
    'Trading Contracts for Difference (CFDs) and other leveraged products involves significant risk of loss and is not suitable for all investors.',
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.logoContainer}>
        <img src={essexLogo} alt="Essex Markets Logo" />
      </div>
      <div className={styles.columnsContainer}>
        <div>
          <h4>Accounts</h4>
          <ul>
            {footerContent.accounts.map((account, index) => (
              <li key={index}>{account}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Conditions</h4>
          <ul>
            {footerContent.conditions.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Markets</h4>
          <ul>
            {footerContent.markets.map((market, index) => (
              <li key={index}>{market}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>About us</h4>
          <ul>
            {footerContent.aboutUs.map((about, index) => (
              <li key={index}>{about}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.linksContainer}>
        {footerContent.links.map((link, index) => (
          <a href="#" key={index}>
            {link}
          </a>
        ))}
      </div>
      <div className={styles.details}>
        {footerContent.details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
      <div className={styles.copyright}>
        <p>©2024 ESSEXMARKETS</p>
      </div>
    </footer>
  );
};

export default Footer;
