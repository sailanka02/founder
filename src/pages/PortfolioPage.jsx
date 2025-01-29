import React from 'react';
import './PortfolioPage.css';

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">

      {/* ========== HERO SECTION ========== */}
      <section className="hero-portfolio">
        <h1 className="hero-name">Name</h1>
        <p className="hero-description">Personal Description</p>
        <div className="hero-icons">
          {/* Replace the SVGs below with your actual Instagram/Twitter/GitHub icons */}
          <a href="#instagram" aria-label="Instagram">
            <svg width="24" height="24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"/>
            </svg>
          </a>
          <a href="#twitter" aria-label="Twitter">
            <svg width="24" height="24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"/>
            </svg>
          </a>
          <a href="#github" aria-label="GitHub">
            <svg width="24" height="24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ========== COMPANIES SECTION ========== */}
      <section className="companies-section">
        <h2>Companies For You</h2>
        <div className="companies-grid">
          <div className="company-card">
            <h3>Aurora</h3>
            <p>Software Company<br/>Dallas, TX</p>
          </div>
          <div className="company-card">
            <h3>Nexus</h3>
            <p>Software Company<br/>New York, NY</p>
          </div>
          <div className="company-card">
            <h3>Landscape</h3>
            <p>Realtor Company<br/>Kansas City, MO</p>
          </div>
          <div className="company-card">
            <h3>Sompany</h3>
            <p>Marketing Company<br/>Houston, TX</p>
          </div>
          <div className="company-card">
            <h3>Pulse</h3>
            <p>Medical Tech Company<br/>Atlanta, GA</p>
          </div>
          <div className="company-card">
            <h3>Lumen</h3>
            <p>Hardware Company<br/>Nashville, TN</p>
          </div>
        </div>
      </section>

      {/* ========== EXPERIENCE SECTION ========== */}
      <section className="experience-section">
        <h2>Previous Positions and Experience</h2>
        <div className="exp-card">
          <h3>Education</h3>
          <p>
            Body text for whatever you'd like to say. Add main takeaway points, 
            quotes, anecdotes, or even a very very short story.
          </p>
        </div>
        <div className="exp-card">
          <h3>Experience</h3>
          <p>
            Body text for whatever you'd like to say. Add main takeaway points, 
            quotes, anecdotes, or even a very very short story.
          </p>
        </div>
        <div className="exp-card">
          <h3>Certifications & Projects</h3>
          <p>
            Body text for whatever you'd like to say. Add main takeaway points, 
            quotes, anecdotes, or even a very very short story.
          </p>
        </div>
      </section>

    </div>
  );
};

export default PortfolioPage;
