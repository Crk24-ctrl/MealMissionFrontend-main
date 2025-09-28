import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useAuth } from './AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { email, password };

    try {
      const response = await fetch('https://gkk8zqlh8h.execute-api.eu-west-2.amazonaws.com/dep/log-in-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log('Error Data:', errorData);
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);

      if (data === "login successful") {
      setMessage('Login successful!');
      setError('');
      setTimeout(() => navigate('/AccountPage'), 1500);

        // Fetch user data
        const userResponse = await fetch('https://gkk8zqlh8h.execute-api.eu-west-2.amazonaws.com/dep/get-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (!userResponse.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await userResponse.json();

        // Save user data in context and localStorage
        login(userData);

      } 
    } catch (error) {
      console.error('Error:', error);
     setError('Failed to log in.');
      setMessage('');
    }
  };

  return (
    <div className="login-page">
      <div className="login">
        <h2>
          <span className="welcome">Welcome</span> <span className="back">Back!</span>
        </h2>
        {message && <div className="message success">{message}</div>}
        {error && <div className="message error">{error}</div>}
        <form onSubmit={handleSubmit}>
        <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-container">
          <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link to="/SendPasswordResetLink" className="forgot-password"> Forgot Password</Link>
          </div>
          <button type="submit">LOGIN</button>
        </form>
        <p>Don't have an account? <Link to="/SignUp">Sign Up</Link></p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;