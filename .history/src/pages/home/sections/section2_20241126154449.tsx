import React from "react";
import pspImage from "../../../assets/pages/Homepage/2-Section-2-PSPs.png";

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

        <img

          src={pspImage}
          alt={'psp-logo'}
          style={styles.logo}
        />

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
    fontSize: "3rem",
    fontWeight: "bold" as const,
  },
  description: {
    fontSize: "16px",
    margin: "auto",
    maxWidth: "40%",
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
