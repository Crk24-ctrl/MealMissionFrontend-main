import React , { useContext, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './ThankYou.css';
import { useAuth} from './AuthContext';

const ThankYou = () => {
  const { user } = useAuth();
  return (
    <div className="main-container">
      <Header />
      <div className="success-container">
        <img src="https://images.squarespace-cdn.com/content/v1/576a6006f5e23175ba4e41d8/1572240863706-KT57M9GE54HEFLY528S2/Enable+multi-factor+authentication?format=500w" alt="Thank you" className="success-image" />
        <div className="success-message">
        <h1>Thank you{user && user.name ? `, ${user.name}` : ''}!</h1>
          <p>Your generosity helps us make a significant difference in the lives of those in need. We truly appreciate your support.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
