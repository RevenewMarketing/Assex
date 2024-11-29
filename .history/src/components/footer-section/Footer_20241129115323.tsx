import styles from './FooterStyles.module.css';
import essexLogo from '../../assets/pages/Global/2-Footer/1AssexMarket-WordMark.png';
import { Link } from 'react-router';

const footerContent = {
  accounts: [
    { title: 'Demo trading accounts', isActive: false },
    { title: 'Professional accounts', isActive: false },
    { title: 'Standard accounts', isActive: false },
    { title: 'Portfolio management account', isActive: false },
  ],
  conditions: [
    { title: 'Deposit and withdrawals', isActive: false },
    { title: 'Fees', isActive: false },
    { title: 'Client protection', isActive: false },
  ],
  markets: [
    { title: 'Forex CFD', isActive: false },
    { title: 'Commodities CFD', isActive: false },
    { title: 'Indices', isActive: false },
    { title: 'Crypto CFD', isActive: false },
  ],
  aboutUs: [
    { title: 'Why Assexmarkets?', isActive: false },
    { title: 'Contact us', isActive: false },
    { title: 'Help center', isActive: false },
  ],
  links: [
    { title: 'FAQ', isActive: false },
    { title: 'Privacy Policy', isActive: false },
    { title: 'Terms and Conditions', isActive: false },
    { title: 'User Agreement', isActive: false },
    { title: 'Imprint', isActive: false },
    { title: 'Risk Disclosure', isActive: false },
  ],
  details: [
    'Assex Markets SA (Registration Number: 2024/652035/07) is an authorised Juristic Representative of Elite Financial Services (Pty) Ltd (Registration Number: 2006/022251/07), a company incorporated in South Africa.',
    'Elite Financial Services (Pty) Ltd is an authorised Financial Services Provider, licensed and regulated by the Financial Sector Conduct Authority (FSCA) in South Africa with FSP Number 52677.',
    'By utilizing our services, you agree to be bound by the Client Agreement, which constitutes a legally binding contract between you (the Client) and Assex Markets SA.',
    'Trading Contracts for Difference (CFDs) and other leveraged products involves significant risk of loss and is not suitable for all investors.',
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.logoContainer}>
        <img src={essexLogo} alt="Assex Markets Logo" />
      </div>
      <div className={styles.columnsContainer}>
        <div>
          <h4>Accounts</h4>
          <ul>
            {footerContent.accounts.map((account, index) => (
              <li key={index}>{account.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Conditions</h4>
          <ul>
            {footerContent.conditions.map((condition, index) => (
              <li key={index}>{condition.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Markets</h4>
          <ul>
            {footerContent.markets.map((market, index) => (
              <li key={index}>{market.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <Link to="/about">
            <h4>About us</h4>
          </Link>
          <ul>
            {footerContent.aboutUs.map((about, index) => (
              <li key={index}>{about.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.linksContainer}>
        {footerContent.links.map((link, index) => (
          <a href="#" key={index}>
            {link.title}
          </a>
        ))}
      </div>
      <div className={styles.details}>
        {footerContent.details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
      <div className={styles.copyright}>
        <p>©2024 ASSEXMARKETS</p>
      </div>
    </footer>
  );
};

export default Footer;
