import React from 'react';
import styles from './Section4.module.css';

const textContent = {
  heading: 'Crypto market conditions',
  sections: [
    {
      title: '',
      description:
        'The crypto market is a digital currency market that uses blockchain technology to create new coins and provide users with secure transactions. Trading crypto derivatives allows you to diversify your online portfolio and capitalize on the movements of cryptocurrency prices, whether they’re rising or falling.',
    },
    {
      title: 'Crypto trading hours',
      description: `You can trade cryptocurrencies 24/7 except during server maintenance. We will inform you via email when this takes place.\n\nThe below cryptocurrency pairs have close only mode:
      \n• BTCAUD, BTCJPY, BTCCNH, BTCTHB, BTCZAR: on Sunday from 20:35 to 21:05
      \n• BTCXAU, BTCXAG: Monday - Thursday from 20:58 to 22:01\n\nAll timings are in server time (GMT+0).\nLearn more about trading hours in our Help Center.`,
    },
    {
      title: 'Spreads³',
      description:
        'Spreads are always floating, so the spreads in the table above are yesterday’s averages. For live spreads, please refer to the trading platform.\n\nPlease note that spreads may widen when the markets experience lower liquidity. This may persist until liquidity levels are restored.',
    },
    {
      title: 'Swaps',
      description: 'No swap is charged on cryptocurrency positions.',
    },
    {
      title: 'Fixed margin requirements',
      description:
        'Margin requirements for all cryptocurrency pairs are fixed, regardless of the leverage you use.',
    },
    {
      title: 'Stop level',
      description:
        'Please note that the stop level values in the table above are subject to change and may not be available for traders using certain high-frequency trading strategies or Expert Advisors.',
    },
  ],
};

const Section4: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>{textContent.heading}</h1>
      <div className={styles.content}>
        {textContent.sections.map((section, index) => (
          <div key={index} className={styles.section}>
            {section.title && <h2 className={styles.title}>{section.title}</h2>}
            <p className={styles.description}>{section.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section4;
