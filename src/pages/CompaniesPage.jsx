import React from 'react';
import './CompaniesPage.css';

const CompaniesPage = () => {
  const companies = [
    { title: 'Title', description: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' },
    { title: 'Title', description: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' },
    { title: 'Title', description: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' },
    { title: 'Title', description: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' },
    { title: 'Title', description: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' },
    { title: 'Title', description: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' },
  ];

  return (
    <div className="companies-page">
      {/* Header Section */}
      <header className="companies-header">
        <h1 className="page-title">Top Companies</h1>
        <button className="filter-button">Filter</button>
      </header>

      {/* Grid Section */}
      <section className="companies-grid">
        {companies.map((company, index) => (
          <div key={index} className="company-card">
            <div className="card-image"></div>
            <h2 className="card-title">{company.title}</h2>
            <p className="card-description">{company.description}</p>
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <footer className="companies-footer">
        <div className="footer-column">
          <h3>Use cases</h3>
          <ul>
            <li>UI design</li>
            <li>UX design</li>
            <li>Wireframing</li>
            <li>Diagramming</li>
            <li>Brainstorming</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
            <li>Design systems</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Support</li>
            <li>Developers</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default CompaniesPage;
