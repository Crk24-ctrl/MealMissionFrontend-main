import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import './HomePage.css';
import ImageCarousel from './ImageCarousel';

const HomePage = () => {
  const navigate = useNavigate();

  const handleJoinCommunityClick = () => {
    navigate('/SignUp'); // Navigate to the SignUp page
  };

  return (
    <div>
      <div className="hero-section">
        <div className="hero-content">
          <h1>End hunger, start sharing</h1>
          <p>Together, we can make a difference by sharing our excess food with those in need.</p>
          <div className="hero-buttons">
            <button className="hero-button primary-button">
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Log In</Link>
            </button>
            <button className="hero-button secondary-button">
              <Link to="/SignUp" style={{ color: 'inherit', textDecoration: 'none' }}>Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>Our mission is to fight hunger and reduce food waste in Lebanon by connecting those with excess food to those in need. We strive to create a community where every individual's basic needs are met, and no one goes hungry. By fostering a culture of sharing and sustainability, we aim to ensure that all Lebanese citizens can live with dignity and their essential needs satisfied. </p>
        </div>
      </div>
      <div className="about-us-section">
        <h2>About Us</h2>
        <p>We are a group of five Lebanese girls with a shared passion for fighting hunger and reducing food waste. Our journey began with volunteering at various food NGOs, where we actively participated in cooking and distributing meals, setting up kiosks to raise awareness about food waste, and collecting donations. We even visited supermarkets to purchase food for those in need. These experiences deeply inspired us and motivated us to create our own platform dedicated to connecting those with surplus food to those who need it the most. Through our website, we aim to build a stronger, more supportive community and make a significant impact in the fight against hunger and food waste in Lebanon.</p>
        <ImageCarousel />
      </div>
      <div className="how-it-works">
        <h2>How it works</h2>
        <div className="steps">
          <div className="step">
            <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Step 1" />
            <div className="step-text-box">
              <p>Sign up and join a community of passionate food savers</p>
            </div>
          </div>
          <div className="step">
            <img src="https://plus.unsplash.com/premium_photo-1663040178972-ee1d45d33899?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9uYXRlJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="Step 2" />
            <div className="step-text-box">
              <p>Farmers, restaurants, hotels, and grocery stores can share surplus food in just a few steps</p>
            </div>
          </div>
          <div className="step">
            <img src="https://media.istockphoto.com/id/1442592133/photo/close-up-of-old-woman-receiving-take-away-food-delivery.webp?b=1&s=170667a&w=0&k=20&c=MaLokbUNPpcJnqe4QAIurJIsWAfZaZQno36p3xyHCtM=" alt="Step 3" />
            <div className="step-text-box">
              <p>Non-profits, shelters, orphanages, and individuals in need can log in to request available food donations</p>
            </div>
          </div>
        </div>
        <button className="join-community-button" onClick={handleJoinCommunityClick}>Join the Community</button>
      </div>
      
      {/* Special Feature Section */}
      <div className="special-feature-section">
        <h2>Special Feature</h2>
        <h1 className="bold-text">
        <img src="/images/robot.png" alt="AI Robot" style={{ width: '70px', height: '70px', verticalAlign: 'middle' }} />
          AI-Powered Freshness Detection
          
        </h1>
        <p>We are excited to introduce our AI-powered model that helps detect the freshness of specific types of donated fruits and vegetables. This advanced technology uses machine learning to analyze images and predict whether the food is fresh or rotten, boasting an impressive 92% accuracy.</p>
        <p>However, it's important to note that the model may not always provide a 100% correct prediction and is currently focused on specific types of fruits and vegetables. We are continuously working to refine and improve its performance, expanding its capabilities to cover more produce types. Your understanding and support in this ongoing journey are greatly appreciated.</p>
      
      </div>

      <div className="food-facts">
        <h2>Food waste facts in Lebanon</h2>
        <div className="facts-grid">
          <div className="fact">
            <img src="https://media.istockphoto.com/id/1157016402/photo/wastage-of-food-mostly-seeing-in-hotels-and-party-events.jpg?s=612x612&w=0&k=20&c=M2CL-KBIDEyPWvbmD5xdOPVz4m2tA5Cc7SVggMwpIAg=" alt="Fact 1" />
            <div className="fact-text-box">
              <p>Lebanese households are responsible for a significant portion of food waste, with an estimated 105 kg of food wasted per person annually.</p>
            </div>
          </div>
          <div className="fact">
            <img src="https://media.istockphoto.com/id/1425232352/photo/expired-organic-bio-waste-mix-vegetables-and-fruits-in-a-huge-container-in-a-rubbish-bin-heap.jpg?s=612x612&w=0&k=20&c=_hIv18ePoswfw6BTJK9j7JMC4mhgXU-GX8rpIEbIJ5s=" alt="Fact 2" />
            <div className="fact-text-box">
              <p>The economic cost of food waste in Lebanon is estimated to be around $300 million annually, affecting the country's economy and resource allocation.</p>
            </div>
          </div>
          <div className="fact">
            <img src="https://media.istockphoto.com/id/1057556012/photo/the-poor-old-mans-hands-hold-an-empty-bowl-the-concept-of-hunger-or-poverty-selective-focus.jpg?s=612x612&w=0&k=20&c=m7i1f7iVFQoS8Nf_EfzqsiT9fZFSTqbqUlcCwrXQ_eU=" alt="Fact 3" />
            <div className="fact-text-box">
              <p>The amount of food wasted in Lebanon has the potential to feed around 500,000 people annually, addressing significant portions of the food insecurity problem.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
