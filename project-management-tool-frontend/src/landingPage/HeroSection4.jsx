import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../Assets/Animation4.json'; // Path to your Lottie JSON file
import './HeroSection.css';

const HeroSection4 = () => {
  return (
    <header className="hero-section4">
      <div className="hero-content4">
        <div className="text-animation-container">
          <div className="text-content">
            <h1>With Our Calender you can add events and save them based upon their status</h1>
            <p>
            Our project management app features a powerful and intuitive calendar functionality designed to streamline your scheduling and enhance productivity. With an integrated calendar, you can effortlessly manage deadlines, track milestones, and schedule team meetings all in one place. The calendar supports various view options, including daily, weekly, and monthly layouts, providing flexibility to suit your needs.
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

export default HeroSection4;
