import React, { useState } from "react";
import styles from "./Section6.module.css";

const content = {
  heading: "Frequently asked questions",
  questions: [
    {
      question: "What is blockchain technology, and how does it work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum sapien non libero pellentesque tempus.",
    },
    {
      question:
        "How do I decide the best cryptocurrencies to trade in the 2024 crypto market?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum felis in ante cursus, sit amet malesuada neque fermentum.",
    },
    {
      question: "Is Bitcoin a good cryptocurrency to trade?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sapien et velit vehicula aliquet.",
    },
    {
      question: "Can I trade during the weekend?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies quam non nisi gravida fringilla.",
    },
    {
      question: "How do you deal with price gaps?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed enim vel lectus viverra consequat.",
    },
    {
      question:
        "What are your rules for pending orders, stop loss (SL), and take profit (TP)?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum libero id tortor tincidunt, in vehicula nulla volutpat.",
    },
    {
      question: "What’s the hedged margin on my cryptocurrency positions?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis nisi id lacus varius, a efficitur eros mollis.",
    },
  ],
};

const Section6 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{content.heading}</h2>
      <div className={styles.accordionContainer}>
        {content.questions.map((item, index) => (
          <div key={index} className={styles.accordionItem}>
            <div
              className={styles.accordionQuestion}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span className={styles.icon}>
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className={styles.accordionAnswer}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section6;
