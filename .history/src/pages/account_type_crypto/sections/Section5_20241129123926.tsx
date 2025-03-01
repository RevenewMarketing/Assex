
import styles from "./Section5.module.css";
import card1 from "../../../assets/pages/Crypto/4-section5-cardIcon1.png";
import card2 from "../../../assets/pages/Crypto/4-section5-cardIcon2.png";
import card3 from "../../../assets/pages/Crypto/4-section5-cardIcon3.png";

const content = {
  heading: "Why trade crypto with Assex Markets",
  subheading:
    "From Bitcoin to Ethereum, Litecoin, and more, you can trade cryptocurrency price movements against the US dollar with better-than-market conditions.",
  cards: [
    {
      title: "Instant withdrawals",
      description:
        "Simplify withdrawals for quick access to your funds. Choose your favorite payment method, make a withdrawal request, and enjoy instant approval.",
      icon: card1,
      },
    {
      title: "Swap-free trading",
      description:
        "Keep your online trades running overnight with 0 charges, whether you are buying or shorting your cryptocurrency of choice.",
      icon: card2,
      },
    {
      title: "Stop Out Protection",
      description:
        "Enjoy a unique market protection feature that strengthens your positions and helps delay or avoid stop outs, particularly during increased volatility.",
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
            <img className={styles.cardIcon} />
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p className={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
