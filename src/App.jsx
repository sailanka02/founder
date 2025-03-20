import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './assets/header';
import HeroSection from './assets/hero';
import CompaniesPage from './pages/CompaniesPage';
import PortfolioPage from './pages/PortfolioPage';
import CompanyInfoPage from './pages/CompanyInfoPage';
import AddCompanyPage from './pages/AddCompanyPage';
import SignInPage from './pages/SignInPage';
import CreateProfilePage from './pages/CreateProfilePage';
import Footer from './assets/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/company-info" element={<CompanyInfoPage />} />
        <Route path="/add-company" element={<AddCompanyPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/create-profile" element={<CreateProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;