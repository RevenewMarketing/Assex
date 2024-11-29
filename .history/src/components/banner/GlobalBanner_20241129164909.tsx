
import styles from './GlobalBanner.module.css';

const content = {
  title: "Trade with a trusted broker today",
  subtitle: "See for yourself why we are the broker of choice for you",
  buttons: {
    register: "Register",
    demo: "Try free demo",
    registerLink: "#",
    demoLink: "#",
  },
};



const GlobalBanner: React.FC = ({bgColor = #17a489;}) => {

  const register = () => {
    // open link in new tab
    window.open("https://my.assexmarkets.com/auth/register", "_blank");
  };

  const freeDemo = () => {
    // open link in new tab
    window.open("https://my.assexmarkets.com/auth/login", "_blank");
  };


  return (
    <div className={styles.section}
      style={{backgroundColor: bgColor}}
    >
      <h1 className={styles.title}>{content.title}</h1>
      <p className={styles.subtitle}>{content.subtitle}</p>
      <div className={styles.buttonContainer}>
        <button
          onClick={register}
          className={styles.registerButton}>{content.buttons.register}</button>
        <button
          onClick={freeDemo}
          className={styles.demoButton}>{content.buttons.demo}</button>
      </div>
    </div>
  );
};

export default GlobalBanner;
