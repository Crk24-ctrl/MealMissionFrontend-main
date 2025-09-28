import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import './SuccessConfirmation.css';

import success from "./success.jpg"; 
const SuccessConfirmation = () => {
  const navigate = useNavigate();
  const handleViewStatus = () => {
    navigate("/ViewStatus"); 
  };
  return (
    <div className="main-container">
      <Header />
      <div className="success-container">
        <img src={success} alt="Success" className="success-image" />
        <div className="success-details">
          <h1 className="success-heading">Success!</h1>
          <p className="success-text">
            Your request to receive a donation has been successfully sent. You can now check its status below.
          </p>
          <a onClick={handleViewStatus} className="status-link">View Status</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessConfirmation;
