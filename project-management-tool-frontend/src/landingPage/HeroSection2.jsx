import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../Assets/Animation2.json'; // Path to your Lottie JSON file
import './HeroSection.css';

const HeroSection2 = () => {
  return (
    <header className="hero-section2">
      <div className="hero-content2">
        <div className="text-animation-container">
          <div className="text-content">
            <h1>Discuss Ideas with your Team in Real Time</h1>
            <p>
              Our platform offers the tools you need to manage your projects efficiently and accurately. 
              Leverage powerful features to streamline your workflow and ensure every detail is in place.
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

export default HeroSection2;
