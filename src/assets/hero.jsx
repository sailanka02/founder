import React from 'react';
import './hero.css'; // Optional: Add styles here or inline

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Founder.</h1>
        <div className="hero-buttons">
          <button className="hero-btn sign-in">Sign In</button>
          <button className="hero-btn register">Register</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;