import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from './images/hero_homePage.jpg'; 
import './css/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/SignUp');
  };

  return (
    <div className="page-container">
      <div className="content">
        <h2>Easy House Services</h2>
        <p>Welcome to our Housing Service Platform!</p>
        <p>Find the perfect service provider, request a quote,</p>
        <p>and experience top-notch service. Join us today and</p>
        <p>simplify your house servicing tasks!</p>
        <button className="signup-button" onClick={handleSignUp}>Sign Up</button> 
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default HomePage;
