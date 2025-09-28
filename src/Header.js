import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="MealMission Logo" className="logo" />
        <div className="logo-text">
          <div>MealMission</div>
          <div className="slogan">from excess to access</div>
        </div>
      </div>
      <nav>
        <ul className="nav">
          <li><Link to="/AccountPage">Account Page</Link></li>
          <li><Link to="/DonationForm">Donate</Link></li>
          <li><Link to="/DonationFeed">Receive</Link></li>
          <li><Link to="/ViewStatus">View Status</Link></li>
          <li><Link to="/FAQs">FAQs</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
