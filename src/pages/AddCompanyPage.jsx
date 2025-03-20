import React from 'react';
import './AddCompanyPage.css';

const AddCompanyPage = () => {
  return (
    <div className="add-company-page">
      <h1>Add a New Company</h1>
      <form className="company-form">
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" name="companyName" placeholder="Enter company name" />
        </div>
        <div className="form-group">
          <label htmlFor="companyDescription">Description</label>
          <textarea id="companyDescription" name="companyDescription" placeholder="Enter company description" />
        </div>
        <div className="form-group">
          <label htmlFor="companyLocation">Location</label>
          <input type="text" id="companyLocation" name="companyLocation" placeholder="Enter company location" />
        </div>
        <div className="form-group">
          <label htmlFor="companyWebsite">Website</label>
          <input type="url" id="companyWebsite" name="companyWebsite" placeholder="Enter company website" />
        </div>
        <button type="submit" className="submit-button">Add Company</button>
      </form>
    </div>
  );
};

export default AddCompanyPage;