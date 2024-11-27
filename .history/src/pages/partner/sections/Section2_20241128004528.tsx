
import styles from './Section2.module.css';
import box1 from '../../../assets/pages/Partner/2-section1-icon1.png';
import box2 from '../../../assets/pages/Partner/2-section1-icon2.png';

const section2Content = {
  title: "What we offer",
  cards: [
    {
      icon: box1,
      title: "Introducing Broker Program",
      description: "You get up to 40% of our revenue Earn up to 40% of our revenue from every active trader you refer to us. If they’re trading, you’re earning.",
      buttonText: "Learn more"
    },
    {
      icon: box2,
      title: "Affiliate Program",
      description: "You get up to $1850 of our revenue We are leading the industry with scheduled and attractive payouts. We offer a range of commission plans, so you can choose the best fit for you.",
      buttonText: "Learn more"
    }
  ]
};

const Section2: React.FC = () => {
  return (
    <section className={styles.section2}>

      <h2 className={styles.title}>{section2Content.title}</h2>
      <div className={styles.cardsContainer}>
        {section2Content.cards.map((card, index) => (

          <div key={index} className={styles.card}>
            <img src={card.icon} alt="icon" className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
            <button className={styles.learnMoreButton}>{card.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
