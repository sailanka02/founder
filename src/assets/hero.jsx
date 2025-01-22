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
          src="/path-to-your-image.jpg"
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

      {/* Footer */}
      <footer className="footer">
        <div className="footer-columns">
          <div>
            <h3>Use cases</h3>
            <ul>
              <li>UI design</li>
              <li>UX design</li>
              <li>Wireframing</li>
              <li>Diagramming</li>
              <li>Brainstorming</li>
            </ul>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>
              <li>Design</li>
              <li>Prototyping</li>
              <li>Development features</li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Support</li>
              <li>Developers</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroSection;
