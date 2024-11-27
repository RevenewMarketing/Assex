
import styles from './Section1.module.css';
import backgroundImage from '../../../assets/pages/About-us/1-Hero-banner-aboutus.jpg';

const section1Content = {
  title: "THIS IS ASSEX MARKETS",
  description:
    "Assex Markets is a multi-asset, tech-driven broker leveraging advanced algorithms to optimize trading conditions.",
  logoAlt: "P Logo",
  logoSrc: "/", // Replace with your actual logo path
  backgroundImage: backgroundImage, // Replace with your background image path
};

const Section1: React.FC = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${section1Content.backgroundImage})`,
      }} 
    className={styles.section1} >
    
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{section1Content.title}</h1>
        <p className={styles.description}>{section1Content.description}</p>
      </div>
      <div className={styles.logo}>
        <img src={section1Content.logoSrc} alt={section1Content.logoAlt} />
      </div>
    </section>
  );
};

export default Section1;
