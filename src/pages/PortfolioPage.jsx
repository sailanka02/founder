import React from 'react';
import './PortfolioPage.css';

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">

      {/* ========== TOP NAV BAR ========== */}
      <header className="navbar">
        <div className="navbar-logo">B</div>
        <nav className="navbar-links">
          <ul>
            <li><a href="#products">Products</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="navbar-buttons">
          <button className="signin-btn">Sign In</button>
          <button className="register-btn">Register</button>
        </div>
      </header>

      {/* ========== HERO SECTION ========== */}
      <section className="hero-section">
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

      {/* ========== FOOTER ========== */}
      <footer className="footer-section">
        <div className="footer-brand">
          <div className="footer-logo">B</div>
          <div className="footer-socials">
            {/* Replace these placeholders with actual icons if desired */}
            <span>X</span>
            <span>O</span>
            <span>YT</span>
            <span>LI</span>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Use cases</h4>
            <ul>
              <li>UI design</li>
              <li>UX design</li>
              <li>Wireframing</li>
              <li>Diagramming</li>
              <li>Brainstorming</li>
              <li>Online whiteboard</li>
              <li>Team collaboration</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Explore</h4>
            <ul>
              <li>Design</li>
              <li>Prototyping</li>
              <li>Development features</li>
              <li>Design systems</li>
              <li>Collaboration features</li>
              <li>Design process</li>
              <li>FigJam</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Best practices</li>
              <li>Colors</li>
              <li>Color wheel</li>
              <li>Support</li>
              <li>Developers</li>
              <li>Resource library</li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default PortfolioPage;
