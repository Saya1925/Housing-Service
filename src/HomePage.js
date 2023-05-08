import React from 'react';
import Header from './Header';
import App from './App';
import { useNavigate } from 'react-router-dom';
import heroImage from './images/hero_homePage.png'; 
import './css/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const buttons = [
    {
      label: 'HOME',
      path: './HomePage',
      exact: true,
    },
    {
      label: 'SERVICES',
      path: '/MakeOffer',
    },
    {
      label: 'ABOUT US',
      path: '/',
    },
    {
      label: 'LOG IN',
      path: '/LogIn',
    },
  ];

  const handleSignUp = () => {
    navigate('/SignUp');
  };


  return (
    <div className="page-container">
      <Header buttons={buttons} />
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