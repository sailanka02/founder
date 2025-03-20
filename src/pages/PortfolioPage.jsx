import React, { useEffect, useState } from 'react';
import './PortfolioPage.css';
import { db } from "../assets/firebase";
import { collection, getDocs } from "firebase/firestore";

const PortfolioPage = () => {
  const [userData, setUserData] = useState(null);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        if (!querySnapshot.empty) {
          setUserData(querySnapshot.docs[0].data()); // Assuming only one user for now
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    const fetchCompanies = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "companies"));
        const companiesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCompanies(companiesData);
      } catch (error) {
        console.error("Error fetching companies: ", error);
      }
    };

    fetchUserData();
    fetchCompanies();
  }, []);

  return (
    <div className="portfolio-page">

      {/* ========== HERO SECTION ========== */}
      <section className="hero-portfolio">
        <h1 className="hero-name">{userData?.name || "Name"}</h1>
        <p className="hero-description">{userData?.personal_description || "Personal Description"}</p>
        <div className="hero-icons">
          {userData?.instagram && (
            <a href={userData.instagram} aria-label="Instagram">
              <svg width="24" height="24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"/>
              </svg>
            </a>
          )}
          {userData?.linkedin && (
            <a href={userData.linkedin} aria-label="LinkedIn">
              <svg width="24" height="24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"/>
              </svg>
            </a>
          )}
          {userData?.github && (
            <a href={userData.github} aria-label="GitHub">
              <svg width="24" height="24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"/>
              </svg>
            </a>
          )}
        </div>
      </section>

      {/* ========== COMPANIES SECTION ========== */}
      <section className="companies-section">
        <h2>Companies For You</h2>
        <div className="companies-grid">
          {companies.length > 0 ? (
            companies.map(company => (
              <div key={company.id} className="company-card">
                <h3>{company.name}</h3>
                <p>{company.description}<br/>{company.locations?.join(", ")}</p>
              </div>
            ))
          ) : (
            <p>Loading companies...</p>
          )}
        </div>
      </section>

      {/* ========== EXPERIENCE SECTION ========== */}
      <section className="experience-section">
        <h2>Previous Positions and Experience</h2>
        <div className="exp-card">
          <h3>Education</h3>
          {userData?.education ? (
            Object.values(userData.education).map((edu, index) => (
              <div key={index}>
                <p><strong>{edu.name}</strong> ({edu.start_year} - {edu.end_year}), GPA: {edu.gpa}</p>
                <br />
              </div>
            ))
          ) : (
            <p>No education data available.</p>
          )}
        </div>
        <div className="exp-card">
          <h3>Experience</h3>
          {userData?.experience ? (
            Object.values(userData.experience).map((exp, index) => (
              <div key={index}>
                <p><strong>{exp.company_name}</strong> ({exp.start_month} {exp.start_year} - {exp.end_month} {exp.end_year}):</p>
                <p>{exp.description}</p>
                <br />
              </div>
            ))

          ) : (
            <p>No experience data available.</p>
          )}
        </div>
        <div className="exp-card">
          <h3>Certifications & Projects</h3>
          {userData?.certifications ? (
            Object.values(userData.certifications).map((cert, index) => (
              <div key={index}>
                <p><strong>{cert.name}</strong> (Completed: {cert.month_completed} {cert.year_completed})</p>
                <br />
              </div>
            ))
          ) : (
            <p>No certifications or projects available.</p>
          )}
        </div>
      </section>

    </div>
  );
};

export default PortfolioPage;
