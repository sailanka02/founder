import React from 'react';
import './SignInPage.css';

const SignInPage = () => {
  return (
    <div className="signin-page">
      <h1>Sign In</h1>
      <form className="signin-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="submit-button">Sign In</button>
      </form>
      <p className="signup-link">Don't have an account? <a href="/create-profile">Sign Up</a></p>
    </div>
  );
};

export default SignInPage;