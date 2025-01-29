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
      <header className="companies-hero">
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
    </div>
  );
};

export default CompaniesPage;
