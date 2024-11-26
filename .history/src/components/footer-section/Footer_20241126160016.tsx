import React from 'react';
import styles from './FooterStyles.module.css';

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
  copyright: '©2024 ESSEXMARKETS',
  details: [
    'Essexmarkets Global Group is incorporated under the laws of Saint Lucia with Registration 2024-00223 having its registered office at Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Saint Lucia P.O. Box 838, Castries, Saint Lucia.',
    'The entities above are duly authorized to operate under the Essexmarkets brand and trademarks. Risk Warning: Our services relate to complex derivative products which are traded outside an exchange. These products come with a high risk of losing money rapidly due to leverage and thus are not appropriate for all investors. Under no circumstances shall Essexmarkets have any liability to any person or entity for any loss or damage in whole or part caused by, resulting from, or relating to any investing activity. Learn more.',
    'The entities above do not offer services to residents of certain jurisdictions including the USA, Iran, North Korea, Europe, the United Kingdom and others. The information on this website does not constitute investment advice or a recommendation or a solicitation to engage in any investment activity.',
    'Any interaction with this website constitutes an individual and voluntary operation on the part of the person accessing it. This website and its content should not be understood as an invitation for the contracting and/or acquisition of Essexmarkets’ financial services and products. The information on this website may only be copied with the express written permission of Essexmarkets.',
    'Essexmarkets complies with the Payment Card Industry Data Security Standard (PCI DSS) to ensure your security and privacy. We conduct regular vulnerability scans and penetration tests in accordance with the PCI DSS requirements for our business model.',
    'At Essexmarkets, 95% of withdrawals are processed instantly (under 1 minute). Once your funds leave our custody, it’s up to your chosen payment provider to process the funds and credit your account. Deposit fees may be applied to specific payment methods to maintain the integrity of our payment processes.',
  ],
};

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '20px', backgroundColor: '#f9f9f9', fontSize: '14px', color: '#333' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
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
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {footerContent.links.map((link, index) => (
          <a href="#" key={index} style={{ marginRight: '10px', textDecoration: 'none', color: '#007BFF' }}>
            {link}
          </a>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p>{footerContent.copyright}</p>
      </div>
      <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.5' }}>
        {footerContent.details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
