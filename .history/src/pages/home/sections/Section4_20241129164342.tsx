
import dollaIcon from "../../../assets/pages/Homepage/4-Section-4-card1-icon.png";
import flashIcon from "../../../assets/pages/Homepage/4-Section-4-card2-icon.png";
import phoneIcon from "../../../assets/pages/Homepage/4-Section-4-card3-icon.png";

const section4Data = {
  title: "Earn as a Professional trader",
  description:
    "Assex Markets is an established ECN forex broker serving both individual and corporate clients. We offer all of our customers a comprehensive range of trading options, Assex Markets technical support, and consulting services, with the goal of making the trading process efficient, hassle-free, and above all highly profitable for you. From new account registration to money withdrawal, we make superior customer service our top priority.",
  features: [
    {
      icon: dollaIcon,
      title: "Razor Thin Spreads",
      description:
        "Reduce your cost of execution by trading some of the tightest pricing in the industry. With spreads starting at 0.0 on EUR/USD and averaging at 0.2, making profitable trades has never been easier.",
    },
    {
      icon: flashIcon,
      title: "Lighting fast Trade execution",
      description:
        "With strong liquidity relationships and powerful technology, trades are executed in a snap. No re-quotes, no rejection, no manual trade delay.",
    },
    {
      icon: phoneIcon,
      title: "The power of MT5",
      description:
        "We offer all our clients the best trading solution in the form of our MT5 accounts powered by data fed directly from our pool of prime liquidity providers. We do our best to simulate the real market conditions with super-raw spreads.",
    },
  ],
};

const Section4: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>{section4Data.title}</h2>
        <p style={styles.description}>{section4Data.description}</p>
      </div>
      <div style={styles.featuresContainer}>
        {section4Data.features.map((feature, index) => (
          <div key={index} style={styles.featureBox}>
            <img src={feature.icon} alt="icon" style={styles.icon} />
            <h1 style={styles.featureTitle}>{feature.title}</h1>
            <p style={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#fff",
    padding: "40px",
    textAlign: "center" as const,
    color: "#000",
  },
  header: {
    marginBottom: "30px",

    padding: "20px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold" as const,
    color: "#1ABC9C",
  },
  description: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginTop: "10px",
  },
  featuresContainer: {
    display: "flex",
    justifyContent: "space-around",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap" as const,
  },
  featureBox: {
    backgroundColor: "#210D3E",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
    textAlign: "center" as const,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    
    marginBottom: "10px",
  },
  featureTitle: {
    fontSize: "2rem",
    fontWeight: "bold" as const,
    marginBottom: "10px",
  },
  featureDescription: {
    fontSize: "1.2rem",
    lineHeight: "1.5",
  },
};

export default Section4;
