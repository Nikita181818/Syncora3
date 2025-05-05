import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../Assets/Animation3.json'; // Path to your Lottie JSON file
import './HeroSection.css';

const HeroSection3 = () => {
  return (
    <header className="hero-section3">
      <div className="hero-content3">
        <div className="text-animation-container">
          <div className="text-content">
            <h1>An app that is fully Secure from any threats</h1>
            <p>
            At the heart of our project management app is a robust cybersecurity framework designed to safeguard your data and ensure a secure user experience. We implement state-of-the-art encryption protocols for data transmission and storage, ensuring that all sensitive information remains protected against unauthorized access. Our application undergoes rigorous vulnerability assessments and security audits to identify and address potential risks. 
            </p>
          </div>
          <div className="animation-content">
            <Lottie 
              animationData={animationData} 
              className="lottie-animation" 
              style={{ height: '400px', width: '400px' }} 
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection3;
