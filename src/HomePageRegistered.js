//This page is home screen for registered user, membership user and professional user

import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from './images/hero_homePage.jpg'; 
import './css/HomePage.css';
import HeaderRegistered from './HeaderRegistered';
import HeaderMembership from './HeaderMembership';
import HeaderProfessional from './HeaderProfessional';


const HomePageRegistered = ({ userType, isLoggedIn, setIsLoggedIn, userName }) => {
  const navigate = useNavigate();

  const browseServices = () => {
    navigate('/RegisteredServices');
  };

  let HeaderComponent;
  switch (userType) {
    case 'registered':
      HeaderComponent = HeaderRegistered;
      break;
    case 'membership':
      HeaderComponent = HeaderMembership;
      break;
    case 'professional':
      HeaderComponent = HeaderProfessional;
      break;
    default:
      HeaderComponent = null;
      break;
  }
  
  return (
    <div className="page-container">
    <HeaderRegistered />
      <div className="content">
        <h2>Easy House Services</h2>
        <p>Welcome to our Housing Service Platform!</p>
        <p>Find the perfect service provider, request a quote,</p>
        <p>and experience top-notch service. Join us today and</p>
        <p>simplify your house servicing tasks!</p>
        <button className="browse-button" onClick={browseServices}>Browse Services</button> 
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default HomePageRegistered;