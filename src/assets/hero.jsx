import React from 'react';
import './hero.css';

const HeroSection = () => {
  const companies = [
    { name: 'Aurora', type: 'Software Company', location: 'Dallas, TX' },
    { name: 'Nexus', type: 'Software Company', location: 'New York, NY' },
    { name: 'Landscape', type: 'Realtor Company', location: 'Kansas City, MO' },
    { name: 'Sompony', type: 'Marketing Company', location: 'Houston, TX' },
    { name: 'Pulse', type: 'Medical Tech Company', location: 'Atlanta, GA' },
    { name: 'Lumen', type: 'Hardware Company', location: 'Nashville, TN' },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">
          Founder<span className="dot">.</span>
        </h1>
        <div className="hero-buttons">
          <button className="hero-btn sign-in">Sign In</button>
          <button className="hero-btn register">Register</button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="hero-image-container">
        <img
          src="src/assets/Team-building-promotes-teamwork-which-fosters-success-in-a-business.-Here-is-how-and-why-you-should-be-implementing-team-building..jpeg"
          alt="Team working"
          className="hero-image"
        />
      </div>

      {/* Trending Section */}
      <section className="trending-section">
        <h2 className="trending-title">Trending</h2>
        <div className="trending-grid">
          {companies.map((company, index) => (
            <div key={index} className="trending-card">
              <div className="card-content">
                <h3>{company.name}</h3>
                <p>{company.type}</p>
                <p>{company.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default HeroSection;
