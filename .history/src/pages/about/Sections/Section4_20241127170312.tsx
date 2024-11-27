// Section4.tsx

import './Section4.css'; // Assuming you will create a CSS file for styling

const valuesContent = {
  title: 'Our Values Drive Every Breakthrough',
  subtitle: 'From strategic decisions to client care, every move we make is built on our 4 core values.',
  values: [
    {
      title: 'Innovative',
      description: "We’ve always led by innovating, pushing market limits, and defying industry norms. If a solution doesn’t exist, we create it. If it does, we enhance it."
    },
    {
      title: 'Client-First Approach',
      description: "Our clients are our priority. Every innovation is shaped by our commitment to delivering the most rewarding trading experience possible."
    },
    {
      title: 'Technology Experts',
      description: "We leverage advanced algorithms and data-driven insights to offer superior protection and market-beating trading conditions."
    },
    {
      title: 'Consistent',
      description: "Reliability is at the heart of our platform. Consistent spreads, rapid execution, and client-focused benefits make trading with us a secure and dependable experience."
    }
  ]
};

const Section4: React.FC = () => {
  return (
    <section className="section4">
      <h2 className="section4-title">{valuesContent.title}</h2>
      <p className="section4-subtitle">{valuesContent.subtitle}</p>
      <div className="values-container">
        {valuesContent.values.map((value, index) => (
          <div className="value-item" key={index}>
            <h3 className="value-title">{value.title}</h3>
            <p className="value-description">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section4;
