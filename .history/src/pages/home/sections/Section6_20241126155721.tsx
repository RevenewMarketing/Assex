import React from "react";
import ReusableButton from "../../../components/ReusableButton";

const section6Data = {
  title: "Trade with a trusted broker today",
  subtitle: "See for yourself why we are the broker of choice for you",
  buttons: [
    { text: "Register", link: "#", style: "dark" },
    { text: "Try free demo", link: "#", style: "light" },
  ],
};

const Section6: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{section6Data.title}</h2>
      <p style={styles.subtitle}>{section6Data.subtitle}</p>
      <div style={styles.buttonContainer}>
        <ReusableButton
          text={section6Data.buttons[0].text}
          link={section6Data.buttons[0].link}
          style={"dark"}
        />
        <ReusableButton
          text={section6Data.buttons[1].text}
          link={section6Data.buttons[1].link}
          style={"light"}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#1ABC9C",
    color: "#fff",
    padding: "30px",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold" as const,
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "14px",
    fontWeight: "bold" as const,
    textDecoration: "none" as const,
    display: "inline-block",
    textAlign: "center" as const,
    minWidth: "120px",
  },
  darkButton: {
    backgroundColor: "#333",
    color: "#fff",
  },
  lightButton: {
    backgroundColor: "#fff",
    color: "#333",
    border: "1px solid #333",
  },
};

export default Section6;
