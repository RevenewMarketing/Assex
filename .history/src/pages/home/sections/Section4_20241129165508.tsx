import styled from "styled-components";
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

const Section4Container = styled.div`
  background-color: #fff;
  padding: 40px;
  text-align: center;
  color: #000;
`;

const Header = styled.div`
  margin-bottom: 30px;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 5rem;
  font-weight: bold;
  color: #1abc9c;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 10px;
  width: 60%;
  margin: auto;
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const FeatureBox = styled.div`
  background-color: #210d3e;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px), scale(1.02);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.img`
  margin-bottom: 10px;
`;

const FeatureTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const Section4: React.FC = () => {
  return (
    <Section4Container>
      <Header>
        <Title>{section4Data.title}</Title>
        <Description>{section4Data.description}</Description>
      </Header>
      <FeaturesContainer>
        {section4Data.features.map((feature, index) => (
          <FeatureBox key={index}>
            <Icon src={feature.icon} alt="icon" />
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureBox>
        ))}
      </FeaturesContainer>
    </Section4Container>
  );
};

export default Section4;
