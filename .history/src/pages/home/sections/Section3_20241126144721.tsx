import React, { useEffect, useState } from 'react';
import mainImage from '../../../assets/pages/Homepage/3.1-Full-section-3.png';
import bg from '../../../assets/pages/Homepage/3-Section-3-BG.png';

export default function Section3() {
  const [position, setPosition] = useState(window.innerWidth); // Start off-screen to the right

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev <= -300 ? window.innerWidth : prev - 2));
    }, 16); // Smooth animation (60fps)
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        position: 'relative',
        overflow: 'hidden',
        height: '100vh', // Set height as required
      }}
    >
      <img style={{ width: '100%' }} src={mainImage} alt="image-main" />
      {/* Text ticker */}
      <h1
        style={{
          position: 'absolute',
          top: '50%',
          left: `${position}px`,
          transform: 'translateY(-50%)',
          whiteSpace: 'nowrap',
          fontSize: '15dvw',
          fontWeight: 'bold',
          color: 'white', // Adjust color based on your design
        }}
      >
        Best Market Conditions
      </h1>
    </div>
  );
}
