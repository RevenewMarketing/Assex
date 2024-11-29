
import styles from './Section6.module.css';

const content = {
  title: "Trade with a trusted broker today",
  subtitle: "See for yourself why we are the broker of choice for you",
  buttons: {
    register: "Register",
    demo: "Try free demo",
  },
};

const Section6: React.FC = () => {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>{content.title}</h1>
      <p className={styles.subtitle}>{content.subtitle}</p>
      <div className={styles.buttonContainer}>
        <button className={styles.registerButton}>{content.buttons.register}</button>
        <button className={styles.demoButton}>{content.buttons.demo}</button>
      </div>
    </div>
  );
};

export default Section6;
