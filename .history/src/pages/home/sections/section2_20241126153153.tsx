import React from "react";

const accountSectionData = {
  title: "Account Types",
  description:
    "Assex Markets offers a wide range of convenient payment methods, including bank transfers, credit/debit cards and e-wallets, ensuring hassle-free deposits and withdrawals.",
  paymentMethods: ["mastercard", "visa", "maestro"],
};

const Section2: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{accountSectionData.title}</h2>
      <p style={styles.description}>{accountSectionData.description}</p>
      <div style={styles.paymentMethods}>
        {accountSectionData.paymentMethods.map((method, index) => (
          <img
            key={index}
            src={`/${method}.png`}
            alt={`${method} logo`}
            style={styles.logo}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#1ABC9C",
    color: "#fff",
    padding: "20px",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold" as const,
  },
  description: {
    fontSize: "16px",
    margin: "10px 0",
  },
  paymentMethods: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  logo: {
    height: "40px",
  },
};

export default Section2;
