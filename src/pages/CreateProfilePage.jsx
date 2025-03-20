import React from 'react';
import './CreateProfilePage.css';

const CreateProfilePage = () => {
  return (
    <div className="create-profile-page">
      <h1>Create Your Profile</h1>
      <form className="profile-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" placeholder="Tell us about yourself" />
        </div>
        <button type="submit" className="submit-button">Create Profile</button>
      </form>
    </div>
  );
};

export default CreateProfilePage;