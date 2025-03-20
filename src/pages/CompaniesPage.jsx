import React from 'react';
import './CompaniesPage.css';
import { useEffect, useState } from "react";
import { db } from "../assets/firebase";
import { collection, getDocs } from "firebase/firestore";

const CompaniesPage = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "companies"));
        const companiesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCompanies(companiesData);
      } catch (error) {
        console.error("Error fetching companies: ", error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className="companies-page">
      {/* Header Section */}
      <header className="companies-hero">
        <h1 className="page-title">Top Companies</h1>
        <button className="filter-button">Filter</button>
      </header>

      {/* Grid Section */}
      <section className="companies-grid">
        {companies.length > 0 ? (
          companies.map((company, index) => (
            <div key={company.id} className="company-card">
              <div className="card-image">{company.picture}</div>
              <h2 className="card-title">{company.name}</h2>
              <p className="card-description">{company.description}</p>
            </div>
          ))
        ) : (
          <p>Loading companies...</p>
        )}
      </section>
    </div>
  );
};


export default CompaniesPage;
