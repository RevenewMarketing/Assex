
import styles from "./Section5.module.css";
import card1 from "../../../assets/pages/Crypto/4-section5-cardIcon1.png";
import card2 from "../../../assets/pages/Crypto/4-section5-cardIcon2.png";
import card3 from "../../../assets/pages/Crypto/4-section5-cardIcon3.png";
const content = {
  heading: "Why Assex Markets",
  subheading:
    "Better-than-market conditions, unique features and cutting-edge security, partnered with our dedication to transparency and excellent customer service, are the reasons traders continue to choose Assex Markets.",
  cards: [
    {
      title: "Instant withdrawals",
      description:
        "Remain in control of your funds. Simply choose your preferred payment method, make a withdrawal request, and enjoy instant automatic approval.",
      icon: card1,
    },
    {
      title: "Ultra-fast execution",
      description:
        "Stay ahead of trends with lightning-fast execution. Get your orders executed in milliseconds on all available platforms at Assex Markets.",
      icon: card2,
    },
    {
      title: "Stop Out Protection",
      description:
        "Enjoy our unique Stop Out Protection feature. Delay and sometimes completely avoid stop outs while trading with Assex Markets.",
      icon: card3,
    },
  ],
};


const Section5 = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>{content.heading}</h1>
      <p className={styles.subheading}>{content.subheading}</p>
      <div className={styles.cardContainer}>
        {content.cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <img 
            className={styles.cardIcon} 
            src={card.icon}
            alt={card.title}
            />
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p className={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
