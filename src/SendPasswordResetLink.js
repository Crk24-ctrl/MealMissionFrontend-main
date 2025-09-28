import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SendPasswordResetLink.css';
import Header from './Header';
import Footer from './Footer';
import forgetpass from './Forgot password-amico.png'; // Adjust the path according to the actual location

const SendPasswordResetLink = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://gkk8zqlh8h.execute-api.eu-west-2.amazonaws.com/dep/send-reset-password-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      alert('Reset password link has been sent to your email!');
      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send reset password link.');
    }
  };

  return (
    <div className="reset-password-page">
      <Header />
      <div className="reset-password">
        <div className="reset-password-content">
          <h2><span className="reset-text">Reset</span> <span className="password-text">Password</span></h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Send Reset Link</button>
          </form>
        </div>
        <img src={forgetpass} alt="Reset Password Illustration" className="reset-password-illustration" />
      </div>
      <Footer />
    </div>
  );
};

export default SendPasswordResetLink;
