
import styles from './Section2.module.css';
import section2Image from '../../../assets/pages/About-us/2-section-1-image.png';

const section2Content = {
  title: "Assex approach is all about balance",
  paragraphs: [
    "Founded in 2008, we set out to balance advanced technology with ethical trading to reshape the ideal trading experience. Today, as a leader in the forex and CFD industry, serving over 800,000 active traders, we know we’re on the right track.",
    "We designed our proprietary trading tools to offer something truly unique—features no other broker had dared to attempt. From instant withdrawals* to stop-out protection and more, we were the first to equip traders with key advantages.",
    "But trading is just one piece of the puzzle. We believe in building ecosystems where traders, partners, and employees can all thrive, making what once seemed impossible a reality.",
  ],
  imageAlt: "Person holding phone",
  imageSrc: section2Image, // Replace with the actual path to your image
};

const Section2: React.FC = () => {
  return (
    <section className={styles.section2}>
      <div className={styles.imageContainer}>
        <img src={section2Content.imageSrc} alt={section2Content.imageAlt} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{section2Content.title}</h2>
        {section2Content.paragraphs.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Section2;
