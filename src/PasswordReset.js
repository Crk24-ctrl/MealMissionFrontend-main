import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './PasswordReset.css';

const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    const tokenFromUrl = query.get('token');
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    }
  }, [query]);

  const handleResetPassword = async () => {
    if (newPassword === '') {
      setError('Please enter a new password.');
      return;
    }

    if (confirmPassword === '') {
      setError('Please confirm your new password.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('https://gkk8zqlh8h.execute-api.eu-west-2.amazonaws.com/dep/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      setMessage('Password has been successfully reset.');
      setError('');

      
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to reset password.');
      setMessage('');
    }
  };

  return (
    <div className="password-reset-page">
      <Header />
      <div className="password-reset">
        <h2>
          <span className="reset">Reset</span> <span className="password">Password</span>
        </h2>
        {message && <div className="message success">{message}</div>}
        {error && <div className="message error">{error}</div>}
        <form onSubmit={(e) => { e.preventDefault(); handleResetPassword(); }}>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PasswordReset;
