import React from 'react';
import './CompanyInfoPage.css';
const CompanyInfoPage = () => {
  return (
    <div className="companyinf-page">

      {/* ========== HERO SECTION ========== */}
      <section className="hero-companyinf">
        <h1 className="hero-name-companyinf">Company Name</h1>
        <p className="hero-description-companyinf">Company Description</p>
        <div className="hero-icons-companyinf">
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

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          We are a software and AI company committed to innovation, efficiency,
          and excellence. Our goal is to push the boundaries of technology and
          create impactful solutions for businesses and individuals alike. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <img
          src="src/assets/Team-building-promotes-teamwork-which-fosters-success-in-a-business.-Here-is-how-and-why-you-should-be-implementing-team-building..jpeg"
          alt="Team working"
          className="hero-image"
        />

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

      {/* ========== COMPANIES SECTION ========== */}
      <section className="positions-section">
        <h2>Open Positions</h2>
        <div className="companies-grid">
          <div className="company-card">
            <h3>Software Engineer</h3>
            <h4>Location: Dallas, TX</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="company-card">
            <h3>Software Engineer</h3>
            <h4>Location: New York, NY</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>          </div>
          <div className="company-card">
            <h3>Data Engineer</h3>
            <h4>Location: Kansas City, MO</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>          </div>
          <div className="company-card">
            <h3>Full Stack Developer</h3>
            <h4>Location: Houston, TX</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>          </div>
          <div className="company-card">
            <h3>Software Engineer</h3>
            <h4>Location: Atlanta, GA</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>          </div>
          <div className="company-card">
            <h3>Cloud Engineer</h3>
            <h4>Location: Nashville, TN</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>          </div>
        </div>
      </section>

      

    </div>
  );
};

export default CompanyInfoPage;
